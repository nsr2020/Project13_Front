import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Text,
} from "@chakra-ui/react";
import {
  handleFileInputClick,
	handleInputChangeRegister,
	handleSubmitRegister,
} from "../../../reducer/StartPageReducer/startPage.action";
import { useRegister } from "../../../services/useRegister";
import { useStartPage } from "../../../services/useStartPage";

const Register = () => {
	const  {dispatch,isLoadingRegister,isButtonDisabledRegister}= useStartPage()
    const {toast,userNameRef,passwordRef,nameRef,lastNameRef,emailRef,imageRef,navigate,
    userName,password,name,lastName,email,avatar,isValidEmail,isValidPassword }=useRegister()
	return (
		<Stack
			mb="var(--nsr-margin7)"
			outline="3px solid black"
			padding="var(--nsr-padding2)"
			borderRadius="var(--nsr-bradius2)"
			gap="var(--nsr-gap1)"
			width="140%"
			background="linear-gradient(135deg,var(--nsr-color19), var(--nsr-color20))"
		>
			<h2 style={{ color: "var(--nsr-color2)" }}>REGISTER</h2>
			<FormControl
				display="flex"
				flexDir="var(--nsr-direction1)"
				align="center"
				background="linear-gradient(135deg, var(--nsr-color19), var(--nsr-color20))"
				color="white"
			>
				<FormLabel htmlFor="userNameRef">User: </FormLabel>
				<Box position="relative" width="100%">
					<Input
						id="userName"
						type="text"
						placeholder="Debe tener 5 letras min"
						isRequired
						ref={userNameRef}
						onChange={() => {
							handleInputChangeRegister(
								userName,
								isValidPassword,
								name,
								lastName,
                                email,
								isValidEmail,
								dispatch
							);
						}}
					/>
					{userName.length < 5 && userName !== "" && (
						<Text
							color="var(--nsr-color3)"
							fontWeight="bold"
							fontSize="11px"
							position="absolute"
							top="45px"
							left="0"
						>
							MIN 5 LETRAS
						</Text>
					)}
				</Box>
				<FormLabel htmlFor="passwordRef" marginTop="var(--nsr-margin2)">
					Password:{" "}
				</FormLabel>
				<Box position="relative" width="100%">
					<Input
						id="password"
						type="text"
						placeholder="1º MAYUS Y 5 LETRAS"
						isRequired
						ref={passwordRef}
						onChange={() => {
							handleInputChangeRegister(
								userName,
								isValidPassword,
								name,
								lastName,
                email,
								isValidEmail,
								dispatch
							);
						}}
					/>
					{!/^(?=.*[A-Z]).{5,}$/.test(password) && password !== "" && (
						<Text
							color="var(--nsr-color3)"
							fontWeight="bold"
							fontSize="11px"
							position="absolute"
							top="45px"
							left="0"
						>
							1º MAYUS Y 5 LETRAS
						</Text>
					)}
				</Box>
				<FormLabel htmlFor="nameRef" marginTop="var(--nsr-margin2)">
					Name:{" "}
				</FormLabel>
				<Input
					id="nameRef"
					type="text"
					placeholder="Escribe tu nombre"
					isRequired
					onChange={() => {
						handleInputChangeRegister(
							userName,
							isValidPassword,
							name,
							lastName,
              email,
							isValidEmail,
							dispatch
						);
					}}
					ref={nameRef}
				/>
				<FormLabel htmlFor="lastNameRef" marginTop="var(--nsr-margin2)">
					LastName:{" "}
				</FormLabel>
				<Input
					id="lastNameRef"
					type="text"
					placeholder="Escribe tu apellido"
					isRequired
					onChange={() => {
						handleInputChangeRegister(
							userName,
							isValidPassword,
							name,
							lastName,
              email,
							isValidEmail,
							dispatch
						);
					}}
					ref={lastNameRef}
				/>
				<FormLabel htmlFor="emailRef" marginTop="var(--nsr-margin2)">
					Email:{" "}
				</FormLabel>
				<Input
					id="emailRef"
					type="email"
					placeholder="Escribe tu email"
					isRequired
					onChange={() => {
						handleInputChangeRegister(
							userName,
							isValidPassword,
							name,
							lastName,
              email,
							isValidEmail,
							dispatch
						);
					}}
					ref={emailRef}
				/>

				<FormLabel htmlFor="imageRef" marginTop="var(--nsr-margin2)">
					Picture:{" "}
				</FormLabel>
				<Input
					id="imageRef"
					type="file"
					isRequired
					onChange={() => {
						handleInputChangeRegister(
							userName,
							isValidPassword,
							name,
							lastName,
              email,
							isValidEmail,
							dispatch
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
						transform: "scale(1.1)",
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

				<Button
					bgGradient="linear(to-br, var(--nsr-color13), var(--nsr-color14), var(--nsr-color15))"
					marginTop="var(--nsr-margin2)"
					color="var(--nsr-color1)"
					_hover={{
						transform: "scale(1.1)",
						transition: "var(--nsr-transition)",
					}}
					isDisabled={isButtonDisabledRegister}
					onClick={() => {
						handleSubmitRegister(
							userName,
							password,
							name,
							lastName,
							email,
							avatar,
							toast,
							navigate,
							dispatch,
						);
					}}
					isLoading={isLoadingRegister}
					loadingText="Loading"
					colorScheme="var(--nsr-color5)"
					variant="outline"
					spinnerPlacement="start"
				>
					SEND
				</Button>
			</FormControl>
		</Stack>
	);
};

export default Register;
