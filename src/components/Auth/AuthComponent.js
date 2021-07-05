import React from 'react';
import {  Box, Flex, Text, FormControl, FormLabel, Input, Heading, Link, Button } from "@chakra-ui/react";
import AuthHook from "./AuthHook";

const AuthComponent = () => {
  const {onChangeInput} = AuthHook()
  return (
    <Flex alignItems="center" justifyContent="center" h="100vh" w="100%">
      <Box minW="400px">
        <Heading mb="15">Signup</Heading>
        <FormControl id="user-name" isRequired mb="15">
          <FormLabel>User Name</FormLabel>
          <Input placeholder="User Name" type="text" name="userName" onChange={onChangeInput} />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input placeholder="Password" type="password" name="password" onChange={onChangeInput} />
        </FormControl>
        <div style={{marginTop:"15px", float:"right"}}>
          <Button mr="5">Submit</Button>
          <Link href="#">
            Login
          </Link>
        </div>
      </Box>
    </Flex>
  )
}

export default AuthComponent
