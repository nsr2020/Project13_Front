import { useState, useEffect, useContext } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, Stack } from "@chakra-ui/react";
import BgGradient from "../../components/StarPage/BgStartPage/BgGradient";
import GoBack from "../../components/GoBack/GoBack";
import { usePutForm } from "../../services/useFormPut";
import { handleFileInputClick } from '../../reducer/StartPageReducer/startPage.action';
import { FormPutContext } from "../../providers/FormPutProvider";
import { handleSubmitPutForm } from "../../reducer/FormPutReducer/formPut.action";

const FormPut = () => {
    const { movie, toast, navigate, platformName, nameRef, imageRef,
        categoryRef, trailerRef, starsRef, platformRef } = usePutForm();

        const {state, dispatch}= useContext(FormPutContext)
        const {isLoadingPut}=state
  
    const [formValues, setFormValues] = useState({
        name: "",
        image: "",
        category: "",
        trailer: "",
        stars: "",
        platform: ""
    });

    useEffect(() => {
        if (movie) {
            setFormValues({
                name: movie.name || '',
                image: movie.image || '',
                category: movie.category || '',
                trailer: movie.trailer || '',
                stars: movie.stars || '',
                platform: movie.platform || ''
            });
        }
    }, [movie]);

    const handleChangeFormPut = (e) => {
        const { name, value, type, files } = e.target;
        const updatedValue = type === "file" ? files[0] : value;

        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: updatedValue
        }));
    };

    return (
        <BgGradient>
            <Stack
                mt="var(--nsr-margin7)"
                mb="var(--nsr-margin7)"
                outline="3px solid black"
                padding="var(--nsr-padding2)"
                borderRadius="var(--nsr-bradius2)"
                gap="var(--nsr-gap1)"
                width={{ base: "100%", md: "50%", lg: "50%" }}
                height="750px"
                background="linear-gradient(135deg,var(--nsr-color19), var(--nsr-color20))"
            >
                <h2 style={{ color: "var(--nsr-color2)" }}>Update movie ID {movie._id}</h2>
                <FormControl
                    display="flex"
                    flexDir="var(--nsr-direction1)"
                    align="center"
                    background="linear-gradient(135deg, var(--nsr-color19), var(--nsr-color20))"
                    color="white"
                >
                    <FormLabel htmlFor="name">Name: </FormLabel>
                    <Box position="relative" width="100%">
                        <Input
                            id="nameRef"
                            type="text"
                            name="name"
                            ref={nameRef}
                            value={formValues.name}
                            onChange={handleChangeFormPut}
                        />
                    </Box>
                    <FormLabel htmlFor="image" marginTop="var(--nsr-margin2)">
                        Picture:{" "}
                    </FormLabel>
                    <Input
                        id="imageRef"
                        type="file"
                        isRequired
                        name="image"
                        onChange={handleChangeFormPut}
                        accept="image/*"
                        ref={imageRef}
                        style={{ display: "none" }}
                    />
                    <Button
                        bgGradient="linear(to-br, var(--nsr-color1), var(--nsr-color5), var(--nsr-color4))"
                        color="var(--nsr-color1)"
                        _hover={{
                            transform: "scale(0.9)",
                            transition: "var(--nsr-transition)",
                        }}
                        onClick={() => handleFileInputClick(imageRef)}
                    >
                        Select Picture
                    </Button>
                    {imageRef?.current?.files?.[0] ? (
                        <p style={{ color: "white", marginTop: "var(--nsr-margin1)" }}>
                            {imageRef.current.files[0].name}
                        </p>
                    ) : (
                        <p style={{ color: "white", marginTop: "var(--nsr-margin1)", fontSize: "11px" }}>
                            {movie?.image}
                        </p>
                    )}
                    <FormLabel htmlFor="category" marginTop="var(--nsr-margin2)">
                        Category:{" "}
                    </FormLabel>
                    <Select
                        name="category"
                        id="categoryRef"
                        ref={categoryRef}
                        value={formValues.category}
                        onChange={handleChangeFormPut}
                        bg="tomato"
                        bgColor="tomato"
                    >
                        <option value="Comedy" style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Comedy</option>
                        <option value="Horror" style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Horror</option>
                        <option value="Action" style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Action</option>
                        <option value="Kids" style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Kids</option>
                        <option value="Releases" style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Releases</option>
                    </Select>
                    <FormLabel htmlFor="trailer" marginTop="var(--nsr-margin2)">
                        Trailer:{" "}
                    </FormLabel>
                    <Input
                        id="trailerRef"
                        type="text"
                        name="trailer"
                        ref={trailerRef}
                        value={formValues.trailer}
                        onChange={handleChangeFormPut}
                    />
                    <FormLabel htmlFor="stars" marginTop="var(--nsr-margin2)">
                        Stars:{" "}
                    </FormLabel>
                    <Input
                        id="starsRef"
                        type="number"
                        min="0"
                        max="5"
                        name="stars"
                        ref={starsRef}
                        value={formValues.stars}
                        onChange={handleChangeFormPut}
                    />
                    <FormLabel htmlFor="platform" marginTop="var(--nsr-margin2)">
                        Platform:{" "}
                    </FormLabel>
                    <Select
                        name="platform"
                        ref={platformRef}
                        id="platformRef"
                        value={formValues.platform}
                        onChange={handleChangeFormPut}
                        bg="tomato"
                        bgColor="tomato"
                    >
                        <option value="Netflix" style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Netflix</option>
                        <option value="Hbo Max" style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Hbo Max</option>
                        <option value="Prime Video" style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Prime Video</option>
                    </Select>
                    <Button
                        bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))"
                        marginTop="var(--nsr-margin2)"
                        color="var(--nsr-color1)"
                        _hover={{
                            transform: "scale(0.9)",
                            transition: "var(--nsr-transition)",
                        }}
                        onClick={() => {
                            handleSubmitPutForm(
                                formValues.name, 
                                formValues.image, 
                                formValues.category, 
                                formValues.trailer, 
                                formValues.stars, 
                                formValues.platform, 
                                navigate, 
                                toast,
                                dispatch,
                                platformName,
                                movie._id,
                                
                            )
                        }}
                        
                        isLoading={isLoadingPut}
                        loadingText="Loading"
                        colorScheme="var(--nsr-color5)"
                        variant="outline"
                        spinnerPlacement="start"
                    >
                        SEND
                    </Button>
                </FormControl>
            </Stack>
            <GoBack goTo={`/moviesAdmin/${platformName}`} />
        </BgGradient>
    );
}

export default FormPut;
