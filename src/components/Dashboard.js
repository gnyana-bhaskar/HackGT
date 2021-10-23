import { Link } from "react-router-dom";
import { Flex, Stack, Spacer, Center, Text, Box, Square, Color } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import React,{useState,useEffect} from 'react';

const Dashboard = () => {
    return(
            <Stack display="flex" justifyContent="center" alignItems="center" >
                <Text fontWeight="bold" fontSize="3xl">
                    Dashboard
                </Text>
            <Box bg="green.800" w="50%" p={10} color="white" borderRadius={10} shadow="lg">
                Inventory
            </Box>
            <Box bg="green.800" w="50%" p={10} color="white" borderRadius={10} shadow="lg">
                UV sensor
                </Box>
                <Box bg="green.800" w="50%" p={10} color="white" borderRadius={10} shadow="lg"> 
                analytics
                </Box>
                <Box bg="green.800" w="50%" p={10} color="white" borderRadius={10} shadow="lg">
                donations
                </Box>
                </Stack>

    );

};
export default Dashboard;
