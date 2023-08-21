import React from 'react'
import { Button, Input } from '@chakra-ui/react'
import AuthStructure from '../structure/AuthStructure'

const Signup = () => {
  return (
    <AuthStructure bname="Sign up">
      <Input placeholder='First Name' size='md' my="2" />
      <Input placeholder='Last Name' size='md' my="2" />
      <Input placeholder='Email' size='md' my="2" />
      <Input placeholder='Password' size='md' my="2" />
      <Input placeholder='Repeat Password' size='md' my="2" />
      <Button width={"30%"} m="auto" bg="purple.700" color={"#fff"}>Sign up</Button>
    </AuthStructure>

  )
}

export default Signup