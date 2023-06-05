import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

export default function KakaoMap () {
     {/* 페이지 로딩 되자마자 실행되는 훅 함수?
    첫번째 인수 = 함수, 두번쨰 인수 = 배열 */}
     useEffect( () => {
        const mapContainer = document.getElementById('map')
        const mapOption = { 
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        }
        const map = new window.kakao.maps.Map(mapContainer, mapOption) // 지도를 생성합니다
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat = position.coords.latitude // 위도
                const lon = position.coords.longitude; // 경도

                const locPosition = new window.kakao.maps.LatLng(lat, lon),
                message = '<div style="padding:5px;">여기에 계신가요?!</div>';

                displayMarker(locPosition, message);
            });
        } else {
            var locPosition = new window.kakao.maps.LatLng(33.450701, 126.570667),    
             message = 'geolocation을 사용할수 없어요..'
        
            displayMarker(locPosition, message);
        }

        function displayMarker(locPosition, message) {

            // 마커를 생성합니다
            const marker = new window.kakao.maps.Marker({  
                map: map, 
                position: locPosition
            }); 
            
            const iwContent = message, // 인포윈도우에 표시할 내용
                iwRemoveable = true;
        
            // 인포윈도우를 생성합니다
            const infowindow = new window.kakao.maps.InfoWindow({
                content : iwContent,
                removable : iwRemoveable
            });
            
            // 인포윈도우를 마커위에 표시합니다 
            infowindow.open(map, marker);
            
            // 지도 중심좌표를 접속위치로 변경합니다
            map.setCenter(locPosition);      
        }    
        // const markerPosition  = new window.kakao.maps.LatLng(33.450701, 126.570667); 
        // const marker = new window.kakao.maps.Marker({
        //     position: markerPosition
        // });
        //  marker.setMap(map);
     }, [ ]);
    return <Box as="div"  w="full" h="300px" id="map"></Box>
}