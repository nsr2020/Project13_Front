import {  Flex, Tab, TabList, Tabs} from "@chakra-ui/react";
import Login from "./Login";
import Register from "./Register";

const Forms = ({dispatch, form, isLoadingLogin, isButtonDisabledLogin,isLoadingRegister, isButtonDisabledRegister}) => {

  return (
    <Flex justify="center" align="center" flexDir="var(--nsr-direction1)" 
    gap="var(--nsr-gap1)">
    <Flex justify="center" align="center" flexDir="row" 
    gap="var(--nsr-gap1)" marginTop="var(--nsr-margin4)">
    <Tabs variant='soft-rounded' colorScheme='teal' transition="all 0.5s">
  <TabList>
    <Tab color="var(--nsr-color1)" transition="var(--nsr-transition)" onClick={()=>dispatch({type:"IS_LOGIN_FORM"})}>Login</Tab>
    <Tab color="var(--nsr-color1)" transition="var(--nsr-transition)" onClick={()=>dispatch({type:"IS_LOGIN_FORM"})}>Register</Tab>
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