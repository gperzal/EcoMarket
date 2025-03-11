import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

const Header = () => {
  const bgColor = useColorModeValue("brand.primary.500", "brand.primary.800");
  const textColor = useColorModeValue("white", "white");
  const hoverColor = useColorModeValue("brand.secondary.300", "brand.secondary.200");
  const dividerColor = useColorModeValue("whiteAlpha.400", "whiteAlpha.400");

  const links = [
    { to: "/seguro-simple", text: "SeguroSimple", icon: FiExternalLink },
    { to: "/play-simple", text: "PlaySimple", icon: FiExternalLink },
    { to: "/eco-express", text: "EcoExpress", icon: FiExternalLink },
    { to: "/banco-simple", text: "BancoSimple", icon: FiExternalLink },
  ];

  return (
    <Box
      bg={bgColor}
      color={textColor}
      py={2}
      px={6}
      display={{ base: "none", md: "flex" }}
      justifyContent="center"
      alignItems="center"
      fontSize="sm"
      fontWeight="medium"
      boxShadow="sm"
    >
      <HStack spacing={6} divider={
        <Text color={dividerColor}>|</Text>
      }>
        {links.map((link, index) => (
          <Link to={link.to} key={index}>
            <Flex 
              align="center" 
              transition="all 0.2s"
              _hover={{ color: hoverColor }}
              p={1}
            >
              <Text>{link.text}</Text>
              <Icon as={link.icon} ml={1} fontSize="xs" />
            </Flex>
          </Link>
        ))}
      </HStack>
    </Box>
  );
};


export default Header;
