import {  Flex, Tab, TabList, Tabs} from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Forms = () => {
  const [form, setForm] = useState("Login")
  const handleClickForm = (info) => {
    if(info === "Login"){
      setForm("Login")
    }else{
      setForm("Register")
    }
  }

  return (
    <Flex justify="center" align="center" flexDir="column" gap="10">
    <Flex justify="center" align="center" flexDir="row" gap="10" marginTop="40px">
    <Tabs variant='soft-rounded' colorScheme='teal' transition="all 0.5s">
  <TabList>
    <Tab color="white" transition="all 0.5s" onClick={()=>{handleClickForm("Login")}}>Login</Tab>
    <Tab color="white" transition="all 0.5s" onClick={()=>{handleClickForm("Register")}}>Register</Tab>
  </TabList>
</Tabs>
    </Flex>
      {form === "Login" ? (
        <Login/>
      ):(
        <Register/>
      )}
</Flex>
  )
}

export default Forms