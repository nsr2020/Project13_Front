import { Box, Button, FormControl, FormLabel, Input, Select, Stack, Text } from '@chakra-ui/react';
import BgGradient from '../../components/StarPage/BgStartPage/BgGradient';
import { handleFileInputClick } from '../../reducer/StartPageReducer/startPage.action';
import GoBack from '../../components/GoBack/GoBack';
import { handleClickPostForm, handleOnchangePostForm } from '../../reducer/FormPostReducer/formPost.action';
import { useFormPost } from '../../services/useFormPost';
import { useEffect } from 'react';

const FormPost = () => {
    const {
        isButtonDisabledPost, isLoadingPost, dispatch, toast, navigate, name,
        image, nameRef, imageRef, categoryRef, trailerRef, starsRef, platformRef, platformName,
        category, trailer, stars, platform
    } = useFormPost();

    useEffect(() => {
      handleOnchangePostForm(name,image,category,trailer,stars,platform,dispatch)  
    }, [name,image,category,platform,stars,trailer]);
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
                <h2 style={{ color: "var(--nsr-color2)" }}>Post a Movie</h2>
                <FormControl
                    display="flex"
                    flexDir="var(--nsr-direction1)"
                    align="center"
                    background="linear-gradient(135deg, var(--nsr-color19), var(--nsr-color20))"
                    color="white"
                >
                    <FormLabel htmlFor="nameRef">Name: </FormLabel>
                    <Box position="relative" width="100%">
                        <Input
                            id="name"
                            type="text"
                            placeholder="Name of movie"
                            isRequired
                            ref={nameRef}
                            onChange={()=>handleOnchangePostForm(name,image,category,trailer,stars,platform,dispatch)}
                        />
                        {(name.length < 2 && name !== "") && (
                            <Text
                                color="var(--nsr-color3)"
                                fontWeight="bold"
                                fontSize="11px"
                                position="absolute"
                                top="45px"
                                left="0"
                            >
                                MIN 2 LETRA
                            </Text>
                        )}
                    </Box>
                    <FormLabel htmlFor="imageRef" marginTop="var(--nsr-margin2)">
					Picture:{" "}
				</FormLabel>
				<Input
					id="imageRef"
					type="file"
					isRequired
					onChange={() => {
						handleOnchangePostForm(
                            name,image,category,trailer,stars,platform,dispatch
						);
					}}
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
					onClick={()=>handleFileInputClick(imageRef)}
				>
					Select Picture
				</Button>
				{imageRef?.current?.files[0] ? (
					<p style={{ color: "white", marginTop: "var(--nsr-margin1)" }}>
						{imageRef.current.files[0].name}
					</p>
				) : (
					<p style={{ color: "white", marginTop: "var(--nsr-margin1)" }}>
						No file selected
					</p>
				)}
                    <FormLabel htmlFor="categoryRef" marginTop="var(--nsr-margin2)">
                        Category:{" "}
                    </FormLabel>
                    <Select
                        placeholder='Select category'
                        ref={categoryRef}
                        isRequired
                        id='categoryRef'
                        onChange={(e)=>handleOnchangePostForm(name,image,category,trailer,stars,platform,dispatch)}
                    >
                        <option value='Comedy' style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Comedy</option>
                        <option value='Horror' style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Horror</option>
                        <option value='Action' style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Action</option>
                        <option value='Kids' style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Kids</option>
                        <option value='Releases' style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Releases</option>
                    </Select>
                    <FormLabel htmlFor="trailerRef" marginTop="var(--nsr-margin2)">
                        Trailer:{" "}
                    </FormLabel>
                    <Input
                        id="trailerRef"
                        type="text"
                        placeholder="Youtube trailer"
                        isRequired
                        onChange={()=>handleOnchangePostForm(name,image,category,trailer,stars,platform,dispatch)}
                        ref={trailerRef}
                    />
                    <FormLabel htmlFor="starsRef" marginTop="var(--nsr-margin2)">
                        Stars:{" "}
                    </FormLabel>
                    <Input
                        id="starsRef"
                        type="number"
                        placeholder='Rate movie'
                        min="0"
                        max="5"
                        isRequired
                        onChange={()=>handleOnchangePostForm(name,image,category,trailer,stars,platform,dispatch)}
                        ref={starsRef}
                    />
                    <FormLabel htmlFor="platformRef" marginTop="var(--nsr-margin2)">
                        Platform:{" "}
                    </FormLabel>
                    <Select
                        placeholder='Select platform'
                        ref={platformRef}
                        isRequired
                        id='platformRef'
                        onChange={(e)=>handleOnchangePostForm(name,image,category,trailer,stars,platform,dispatch)}
                    >
                        <option value='Netflix' style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Netflix</option>
                        <option value='Hbo Max' style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Hbo Max</option>
                        <option value='Prime Video' style={{ backgroundColor: "var(--nsr-color19)", color: "white" }}>Prime Video</option>
                    </Select>
                    <Button
                        bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))"
                        marginTop="var(--nsr-margin2)"
                        color="var(--nsr-color1)"
                        _hover={{
                            transform: "scale(0.9)",
                            transition: "var(--nsr-transition)",
                        }}
                        isDisabled={isButtonDisabledPost}
                        onClick={() => {
                            handleClickPostForm(
                                name,image,category,trailer,
                                stars,platform,toast,navigate,
                                dispatch,platformName
                            )
                        }}
                        isLoading={isLoadingPost}
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

export default FormPost;
