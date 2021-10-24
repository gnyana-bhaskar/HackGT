import { Link } from "react-router-dom";
import { Flex, Stack, Spacer, Center, Text, Box, Square, Color } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import React,{useState,useEffect} from 'react';
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";



const Dashboard = () => {
   
    return(
        <Box height="860px" bg="gray.200" width="1425px">
            <Stack display="flex" justifyContent="center" alignItems="center" >
                
                <Text fontWeight="bold" fontSize="3xl" mt="10">
                    DASHBOARD
                </Text>
            <Link to="/inventoryview" > 
            <Box bg="purple.900" w="50%" p={10} color="white" borderRadius={10} shadow="dark-lg" height="20px" width= {750}>
                Inventory
            </Box>
            </Link>
            <Link to="/cv">
            <Box bg="purple.900" w="50%" p={10} color="white" borderRadius={10} shadow="dark-lg" height="20px" width= {750} >
                Inventory Update
                </Box>
                </Link>
            <Box bg="purple.900" w="50%" p={10} color="white" borderRadius={10} shadow="dark-lg" height="20px" width= {750}>
                UV sensor
                </Box>
                <Link to="/tab">
                <Box bg="purple.900" w="50%" p={10} color="white" borderRadius={10} shadow="dark-lg" height="20px" width= {750}> 
                analytics
                </Box>
                </Link>
                <Link to="/maps">
                <Box bg="purple.900" w="50%" p={10} color="white" borderRadius={10} shadow="dark-lg" height="20px" width= {750} >
                donations
                </Box>


                </Link>
            
                </Stack>
                </Box>
            

    );

};
export default Dashboard;