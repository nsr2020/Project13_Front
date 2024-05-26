import {  Flex, Tab, TabList, Tabs} from "@chakra-ui/react";
import Login from "./Login";
import Register from "./Register";

const Forms = ({dispatch, form, isLoadingLogin, isButtonDisabledLogin,isLoadingRegister, isButtonDisabledRegister}) => {

  return (
    <Flex justify="center" align="center" flexDir="column" gap="10">
    <Flex justify="center" align="center" flexDir="row" gap="10" marginTop="40px">
    <Tabs variant='soft-rounded' colorScheme='teal' transition="all 0.5s">
  <TabList>
    <Tab color="white" transition="all 0.5s" onClick={()=>dispatch({type:"IS_LOGIN_FORM"})}>Login</Tab>
    <Tab color="white" transition="all 0.5s" onClick={()=>dispatch({type:"IS_LOGIN_FORM"})}>Register</Tab>
  </TabList>
</Tabs>
    </Flex>
      {form ? (
        <Login dispatch={dispatch} isLoadingLogin={isLoadingLogin} isButtonDisabledLogin={isButtonDisabledLogin}
        />
      ):(
        <Register dispatch={dispatch} isLoadingRegister={isLoadingRegister} isButtonDisabledRegister={isButtonDisabledRegister}/>
      )}
</Flex>
  )
}
export default Forms