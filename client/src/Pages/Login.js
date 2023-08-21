import React, { useEffect, useState } from 'react'
import AuthStructure from '../structure/AuthStructure'
import { Button, Input } from '@chakra-ui/react'
import axios from 'axios'
const Login = () => {
  const [userDetail, setDetails] = useState({
    email: "",
    password: ""
  })
  useEffect(() => {
    axios.get("http://localhost:8000/user/blog/64e1f51ceb78efe84b97adcc")
  }, [])
  const login = async () => {
    try {
      const { data } = await axios.post('http://localhost:8000/admin/user/login', userDetail)
      localStorage.setItem("data", JSON.stringify(data))

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AuthStructure bname="Login">
      <Input
        value={userDetail.email}
        onChange={(e) => setDetails({
          ...userDetail,
          email: e.target.value
        })}
        type='email'
        placeholder='Email'
        size='md'
        my="2"
      />
      <Input value={userDetail.password}
        type="password"
        onChange={(e) => setDetails({
          ...userDetail,
          password: e.target.value
        })}
        placeholder='Password'
        size='md'
        my="2"
      />
      <Button width={"30%"} onClick={login} m="auto" bg="purple.700" color={"#fff"}>Login</Button>
    </AuthStructure>
  )
}

export default Login