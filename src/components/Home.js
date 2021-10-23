import React from 'react'
import {
  Box,
  Flex,
  Input,
  Square,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Home = () => {


  return (
      <Box overflow="scroll">
        <Flex bg="gray.200"
            borderRadius="12px"
            p={4}
            align="center"
            direction="column">
          <Text mb={8} fontSize="2xl" fontWeight="bold">
            Minimizing grocery waste by optimizing it's distribution
          </Text>

          <Link to= "/inventoryupdate" direction='column'>
            <Button variant="solid" bg="teal.900" size="lg">
              <Text color="white">GROCERY STORE </Text>
            </Button>
          </Link>
        </Flex>
      </Box>

  );
};

export default Home;
