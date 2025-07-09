import React from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import "./Topnavbar.css";

const TopNavbar = () => {
  return (
    <Box className="top-navbar">
      <Flex align="center" className="top-navbar-content">
        <Heading size="md" className="top-navbar-title">
          Dashboard
        </Heading>
        <Spacer />
        <IconButton
          icon={<FiUser />}
          variant="ghost"
          aria-label="User"
          className="top-navbar-icon"
        />
      </Flex>
    </Box>
  );
};

export default TopNavbar;
