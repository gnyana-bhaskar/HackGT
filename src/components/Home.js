import React from 'react'
import {
  Box,
  Flex,
  Input,
  Square,
  Text,
  Center,
  Button,
  HStack
} from "@chakra-ui/react";
import { ReactComponent as Grocer } from "../media/shopper.svg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
      <Box>
        <Flex bg="gray.200"
            borderRadius="12px"
            p={4}
            align="center"
            direction="column" >
          <Text mb={8} fontSize="2xl" fontWeight="bold">
            Optimizing the distribution of grocery waste for sustainablity shit cuz we need earth to live 
          </Text>

          <Link to= "/inventoryupdate" direction='column'>
            <Button variant="solid" bg="teal.900" size="lg">
              <Text color="white">GROCERY STORE </Text>
            </Button>
          </Link>
        </Flex>
        <Flex >
          <Box height="500px" width="50%" bg="gray.200" textAlign="center"> 
            <Text justifySelf="center" fontSize="2xl" marginTop="100px" ml= "10px" mr="10px">
            Lorem ipsum is placeholder text commonly used in the graphic, 
            print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, 
            print, and publishing industries for previewing layouts and visual mockups.
            </Text>
          </Box>
          <Box  as = {Grocer} height="500px" width="50%" bg="gray.200" textAlign="center">
          </Box>
        </Flex>
        <Flex >
        <Box  as = {Grocer} height="500px" width="50%" bg="gray.200" textAlign="center">
          </Box>
          <Box height="500px" width="50%" bg="gray.200" textAlign="center"> 
            <Text justifySelf="center" fontSize="2xl" marginTop="100px" ml= "10px" mr="10px">
            Lorem ipsum is placeholder text commonly used in the graphic, 
            print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, 
            print, and publishing industries for previewing layouts and visual mockups.
            </Text>
          </Box>
        </Flex>
        <Flex >
          <Box height="500px" width="50%" bg="gray.200" textAlign="center"> 
            <Text justifySelf="center" fontSize="2xl" marginTop="100px" ml= "10px" mr="10px">
            Lorem ipsum is placeholder text commonly used in the graphic, 
            print, and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder text commonly used in the graphic, 
            print, and publishing industries for previewing layouts and visual mockups.
            </Text>
          </Box>
          <Box  as = {Grocer} height="500px" width="50%" bg="gray.200" textAlign="center">
          </Box>
        </Flex>
        
      </Box>

  );
};

export default Home;
