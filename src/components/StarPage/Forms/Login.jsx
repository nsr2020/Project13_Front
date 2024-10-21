import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Box,
	Text,
} from "@chakra-ui/react";
import { handleChangeInputLogin, handleSubmitLogin } from "../../../reducer/StartPageReducer/startPage.action";
import { useLogin } from "../../../services/useLogin";
import { useStartPage } from "../../../services/useStartPage";

const Login = () => {

	const {dispatch,isLoadingLogin,isButtonDisabledLogin}=useStartPage()
    const {toast,navigate,userNameRef,passwordRef,
        userName,password,isValidPassword} = useLogin()
	return (
		<>
			<Stack
				border="3px solid black"
				width="100%"
				padding="var(--nsr-padding2)"
				borderRadius="var(--nsr-bradius2)"
				gap="var(--nsr-gap1)"
				background="linear-gradient(135deg, var(--nsr-color19), var(--nsr-color20))"
				pos="relative"
			>
				<h2 style={{ color: "var(--nsr-color2)" }}>LOGIN</h2>
				<FormControl
					display="flex"
					flexDir="column"
					align="center"
					background="linear-gradient(135deg, var(--nsr-color19), var(--nsr-color20))"
					color="var(--nsr-color1)"
					pos="relative"
				>
					<FormLabel htmlFor="userName">User: </FormLabel>
					<Box position="relative" width="100%">
						<Input
							id="userName"
							type="text"
							placeholder="Debe tener 5 letras min"
							isRequired
							ref={userNameRef}
							onChange={()=>{
                            handleChangeInputLogin(userName,isValidPassword,dispatch)
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

					<FormLabel htmlFor="password" marginTop="var(--nsr-margin3)">
						Password:{" "}
					</FormLabel>
					<Box position="relative" width="100%">
						<Input
							id="password"
							type="password"
							placeholder="5 letras y una mayúscula"
							pattern="^(?=.*[A-Z]).{5,}$"
							isRequired
							ref={passwordRef}
							onChange={()=>{
                                handleChangeInputLogin(userName,isValidPassword,dispatch)
                                }}
						/>
						{!/^(?=.*[A-Z]).{5,}$/.test(password) && password !== "" && (
							<Text
								color="var(--nsr-color3)"
								fontWeight="bold"
								fontSize="12px"
								position="absolute"
								top="45px"
								left="0"
							>
								1ª MAYUS Y MIN 5 LETRAS
							</Text>
						)}
					</Box>

					<Button
						bgGradient="linear(to-br, #f9eb0a, #ec008c, #005caf)"
						marginTop="var(--nsr-margin3)"
						color="var(--nsr-color1)"
						_hover={{
							transform: "scale(1.1)",
							transition: "var(--nsr-transition)",
						}}
						onClick={() => {
							handleSubmitLogin(
								userName,
								password,
								toast,
								navigate,
								dispatch,
								
							);
						}}
						isDisabled={isButtonDisabledLogin}
						isLoading={isLoadingLogin}
						loadingText="Loading"
						colorScheme="var(--nsr-color5)"
						variant="outline"
						spinnerPlacement="start"
					>
						SEND
					</Button>
				</FormControl>
			</Stack>
		</>
	);
};

export default Login;
