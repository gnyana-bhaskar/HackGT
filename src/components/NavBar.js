import React from "react";
import { Heading, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <Flex
      align="center"
      justify="space-between"
      padding="30px"
      color="white"
      bgColor="purple.900"
      height="20px"
      boxShadow="rgba(0, 0, 0, 0.3) 0px 4px 5px"
      zIndex={10}
      {...props}
    >
      <Flex
      align="center"
      width="350px"
      >
        <Link to="/">
          <Heading as="h1" size="md" letterSpacing={"-.1rem"}>
          Name
          </Heading>
        </Link>
        <Link to="/browse">
        <Button
        ml={6}
        size="sm"
        rounded="md"
        mr={2}
        color={["primary.500", "primary.500", "white", "white"]}
        bg={["DarkSlateBlue", "DarkSlateBlue", "primary.800", "primary.800"]}
        _hover={{
          bg: [
            "primary.100",
            "primary.100",
            "primary.600",
            "primary.600",
          ],
        }}
        >
          Browse
        </Button>
        </Link>
        <Link to="/go-live">
          <Button
          size="sm"
          rounded="md"
          color={["primary.500", "primary.500", "white", "white"]}
          bg={["DarkSlateBlue", "DarkSlateBlue", "primary.800", "primary.800"]}
          _hover={{
            bg: [
              "primary.100",
              "primary.100",
              "primary.600",
              "primary.600",
            ],
          }}
          >
            Something
          </Button>
        </Link>
      </Flex>
    </Flex>

  );
};

export default NavBar;
