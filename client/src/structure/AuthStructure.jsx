import React from 'react'
import Breadcrumbs from '../components/breadcrumbs'
import { Box, Stack } from '@chakra-ui/react'

const AuthStructure = ({ children, bname }) => {
    return (
        <Box height={"90vh"}>
            <Breadcrumbs height={"15vh"} bradcrumb={bname} />
            <Box height={"75vh"} display={"flex"} alignItems={"center"}>
                <Box shadow={"lg"} outline={"2"} width={"30%"} p="4" m="auto">
                    <Stack spacing={3}>
                        {children}
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default AuthStructure