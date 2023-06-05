import { Avatar, Box, Center, HStack, Text, Tooltip, VStack } from "@chakra-ui/react";

import Layout from "./Layout";

export default function Profile(){
    return (
    <Layout>
        <VStack as="from" bg="gray.400" minH="100vh" py="140px" spacing={6} px={4} w="full">
            <VStack spacing={6}>
                <Avatar name='Dan' src='https://bit.ly/dan-abramov'  size="xl" />
                <VStack spacing={0}>
                <Text fontSize={20} fontWeight={600}>Dan</Text>
                <Text fontSize={14}>방탄소년단 매니저를 꿈꾸는 Dan</Text>
                </VStack>
                <HStack w="80%" textAlign="center">
                    <Box border="1px" rounded="xl" px="20px" py="1" w="140px" >Contact</Box>
                    <Box border="1px" rounded="xl" px="20px" py="1" w="140px" >Follow</Box>
                </HStack>  
                <VStack>

                </VStack>
            </VStack>
        </VStack>
    </Layout>
)}