import { Button, Flex} from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Forms = () => {
  const [form, setForm] = useState("Login")
  const handleClick = (info) => {
    if(info === "Login"){
      setForm("Login")
    }else{
      setForm("Register")
    }
  }

  return (
    <Flex justify="center" align="center" flexDir="column" gap="10">
    <Flex justify="center" align="center" flexDir="row" gap="10" marginTop="40px">
    <Button
    colorScheme='teal'
    _hover={{
        transform: "scale(1.1)",
        transition: "all 0.5s",
      }}
      onClick={()=>{handleClick("Login")}}
    >Login</Button>
    <Button 
    colorScheme='teal'
    _hover={{
        transform: "scale(1.1)",
        transition: "all 0.5s",
      }}
      onClick={()=>{handleClick("Register")}}
    >Register</Button>
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