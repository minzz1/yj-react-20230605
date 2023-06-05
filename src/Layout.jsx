import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import {FcHome, FcBusinessContact} from "react-icons/fc";
import {AiOutlineProfile, AiFillApple, AiOutlineArrowLeft} from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";

const GNB = [
  { title : "홈", href: "/", icon: FcHome},
  { title : "프로필", href: "/profile", icon:AiOutlineProfile },
  { title : "연락처", href: "/contact", icon:FcBusinessContact }
]


export default function Layout({children, canGoBack, title}) {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  const handleClick = () => {
    // console.log("실행되나?")
    navigate(-1)
  }
  return (
    <>
    <Box w="full" display="flex" justifyContent={"center"}>
      <VStack w={"sm"}>
        {/* 헤더 */}
        <Box display="flex" 
                  justifyContent="center" 
                  alignItems="center"
                  w="inherit" h="120px" 
                  bg="yellow.200" 
                  position="fixed" 
                  top={0}
                  zIndex={9}
        >
            {
              canGoBack ? <Text>{title}</Text> : (<AiFillApple size={64} />)
            }
            {
              canGoBack ? 
              <Box onClick={handleClick} position="absolute" left="40px" cursor="pointer">
              <AiOutlineArrowLeft size="24px" />
            </Box>  : null
            }
            {/* conGoBack 있을때 Box 보이고 없을때 null 삼항연산자 이용  */}
            {
              canGoBack ? null :   
            <Box w="inherit" h="120px" bg="red.200" position="fixed" bottom={0}>
              <HStack h="inherit" justifyContent="space-around" alignItems="center">
                {GNB.map((item) =>   (       
                 <Box w="full">
                  <Link to={item.href}>
                  <VStack>
                  <item.icon size={24} color={location.pathname === item.href ? "red" : "white"} />
                    <Text color={location.pathname === item.href ? "red.600" : "white"}>{item.title}</Text>
                  </VStack>
                  </Link>
                </Box>
                ))}
              </HStack>
            </Box>
            }
        </Box>
        {/* 본문 */}
        {children}
        {/* tail*/}
        
      </VStack>
    </Box>
    </>
  );
}

