import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
    return (
        <Box width={"100%"} p="4" bg="purple.400" >
            <Box width={"90%"} m="auto" display={"flex"} justifyContent={"space-between"}>
                <Box>
                    <Heading as="h4" size={"md"} color={"#fff"}>
                        Personal Blogging App
                    </Heading>
                </Box>
                <Box color={"#fff"}>
                    {window.location.pathname.substring(1).toLowerCase() === 'login' ? "Sign Up" : "Login"}

                </Box>
            </Box>
        </Box>
    )
}

export default Header