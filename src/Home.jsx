import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const dataTour = [
    {
      text: "6월 이벤트", 
      image: "https://images.unsplash.com/photo-1683178255538-42fce6e51d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
    },
    {
      text: "7월 이벤트", 
      image: "https://images.unsplash.com/photo-1682407579782-248f1d3f2dae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
    },
    {
      text: "8월 이벤트",
      image: "https://images.unsplash.com/photo-1674824959440-09442ed75a8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
  ];
  
  const dataName = [
    {
      text: "JIN",
      image: ""
    },
    {
      text: "JK",
      image: ""
    },
    {
      text: "JIMIN",
      image: ""
    },
    {
      text: "V",
      image: ""
    },
  ];
  
export default function Home(){
    return ( 
    <>
        <Layout>
            <VStack spacing={8} w="inherit"  py="140px" px={4} alignItems={"flex-start"}>
            {/* 최신 상품 컨테이너*/}
            <VStack w="full" alignItems="flex-start">
                <Text fontWeight={600} fontSize={24}>
                방탄소년단
                </Text>
                <Grid
                gap={1}
                gridTemplateColumns={"repeat(2, 1fr)"} w="full">
                {dataName.map((list, k) => ( 
                    <GridItem
                    key={k}
                    h="200px" 
                    border="1px" 
                    rounded={"md"} 
                    borderColor="gray.300"
                    backgroundImage="url('https://weverse-phinf.pstatic.net/MjAyMjEyMjdfMjgg/MDAxNjcyMTE4NjI0MTc3._7h8pD5BAJeG3nFBDmn7LWpWbeO0UGqGVyOPIOvRvfYg.Vf4hUdsxNjedphg87zGKvBDeto8dkH67i8AKNIct0z4g.JPEG/cb5ba4ab-c7bd-4f72-a07a-b2c0b52e6d5a.jpeg?type=s468_468_stopgif')"
                    backgroundSize={"cover"}
                    backgroundPosition={"center center"}
                    position="relative"
                    overflow={"hidden"}
                    >
                      <Link to="/detail">
                        <Box position="absolute" top={0} left={0} w="full" h="full" bg="rgba(0,0,0,0.2)">
                          <Text color="white" position="absolute" w="full" align="center" fontWeight={600}>
                          {list.text}
                          </Text>
                        </Box>
                      </Link>
                    </GridItem>
                ))}
                </Grid>
            </VStack>
            {/* 이벤트 컨테이너*/}
            <VStack w="full" alignItems={"flex-start"}>
                <Text fontWeight={600} fontSize={24}>
                이벤트
                </Text>
                <Grid w="full" gap={2}>
                {dataTour.map((item, i) => ( 
                    <GridItem 
                    key={i}
                    rounded={"lg"} w="full" h="120px" bg="yellow.200"
                    backgroundImage={`url(${item.image})`}
                    backgroundPosition={"center center"}
                    backgroundSize={"cover"}
                    position={"relative"}
                    >
                      <Link to="/detail"> 
                      {/* detail 페이지로 링트 넘어가기 */}
                        <Box position={"absolute"}
                          top={0} left={0} w="full" h="full"
                          bgGradient={"linear(to-b, rgba(255,255,255,0.1), rgba(255,255,255,0.9))"}
                          >
                          <Text position="absolute" top="50%" left="50%" transform={"translate(-50%, -50%)"}
                              fontWeight={600}
                              fontSize="20"
                              color="#575fcf"
                          >
                              {item.text}
                          </Text>
                        </Box>
                      </Link>
                    </GridItem>
                    ))
                }
                </Grid>
            </VStack>
            </VStack>
        </Layout>
    </>
)}