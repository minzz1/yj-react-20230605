import { Box, Button, Input, Radio, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";
import { useState } from "react";

export default function Contact (){
    return ( 
    <Layout>
        <VStack py={"140px"} w={"full"} alignItems={"flex-start"} px={4} spacing={6}>
            <Text fontWeight={700} fontSize={20} >
                무료상담신청
            </Text>
            <VStack as="form" w="full" alignItems={"flex-start"}>
                <Text>이름</Text>
                <Input placeholder="이름을 입력해 주세요"/>
            </VStack>
            <VStack w="full" alignItems={"flex-start"}>
                <Text>연락처</Text>
                <Input placeholder="연락처를 입력해 주세요"/>
            </VStack>
            <VStack w="full" alignItems={"flex-start"}>
                <Text>E-mail</Text>
                <Input placeholder="E-mail 입력해 주세요"/>
            </VStack>
            <RadioGroup >
                <Stack direction='row'>
                    <Radio value='1'>남성</Radio>
                    <Radio value='2'>여성</Radio>
                </Stack>
            </RadioGroup>
            <Button colorScheme='blue'>전송하기</Button>
        </VStack>
    </Layout>
)}