import React from 'react'
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
const Breadcrumbs = ({ bradcrumb, height }) => {
    return (
        <Box bg='#fff' w='100%' display={"flex"} alignItems={"center"} px={4} height={height} color='#000' shadow={"sm"}>
            <Box width={"90%"} m="auto">
                <Heading as='h1' m="0" p="0" size='2xl'>
                    {bradcrumb}
                </Heading>
            </Box>
        </Box>
    )
}

export default Breadcrumbs