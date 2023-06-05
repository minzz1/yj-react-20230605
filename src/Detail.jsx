import { Box, Text, VStack, Image } from "@chakra-ui/react";
import Layout from "./Layout";
import KakaoMap from "./KakaoMap";

export default function Detail() {
    return (
    <Layout canGoBack title="디테일 페이지">
        <VStack py="110px" bg="gray.800" w="full" spacing={8} >
            <Box>
                <Image src="https://plus.unsplash.com/premium_photo-1683804835928-d15dbc86e29d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"/>
            </Box>
            <VStack w="full" alignItems="flex-start" px={4} spacing={1}>
                <Text color="white" fontSize={20} fontWeight={700}>대구 스파벨리</Text>
                <Text color="white">대구 최고의 여름 테마파크</Text>
            </VStack>
            <Box w="full" h="2px" bg="gray.700"></Box>
            <VStack w="full" alignItems="flex-start" px={4} spacing={1}>
                <Text color="white" fontWeight={700}>운영시간</Text>
                <Text color="white" fontSize={14}>10:00 ~ 17:00</Text>
            </VStack>
            <VStack w="full" alignItems="flex-start" px={4} spacing={1}>
                <Text color="white" fontWeight={700}>입장인원</Text>
                <Text color="white" fontSize={14}>120명</Text>
            </VStack>
            <VStack w="full" alignItems="flex-start" px={4} spacing={1}>
                <Text color="white" fontWeight={700}>입장요금</Text>
                <Text color="white" fontSize={14}>20,000원</Text>
            </VStack>
            {/*카카오 맵 불러오기 */}
            <KakaoMap />
        </VStack>
    </Layout>
)}