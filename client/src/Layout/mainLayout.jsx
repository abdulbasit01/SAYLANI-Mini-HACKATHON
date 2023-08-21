import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from './header'

const MainLayout = ({ children }) => {
    return (
        <Box height={"100vh"}>
            <Header />
            {children}
        </Box>
    )
}

export default MainLayout