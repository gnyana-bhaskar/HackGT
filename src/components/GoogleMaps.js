import { Flex } from "@chakra-ui/layout";
import React from "react";
 

const MyElement = () => (
  <Flex>  

  <iframe
  width="100%"
  height="900"
  frameborder="0" style={{border:0}}
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDDPSxqwhi0djGNE8OlTS_qJKsED1JcCpc&q=food+banks+near+me&zoom=9&libraries=places" allowfullscreen>
  </iframe>
  </Flex>
);


export default MyElement;
