import { MdOutlineDashboard } from "react-icons/md";
import { LuArrowDownUp } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Stack, HStack, Icon, Text, Heading, Box } from "@chakra-ui/react";

const SideNavbar = () => {
  const navLinks = [
    {
      icon: MdOutlineDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: LuArrowDownUp,
      text: "Transactions",
      link: "/",
    },
  ];

  return (
    <Stack
      spacing={4}
      p={4}
      boxShadow="sm"
      maxW="16rem"
      h="100vh"
      justify="space-between"
    >
      {/* Top Section */}
      <Box>
        <Heading fontSize="12px" as="h1" pt="56px" textAlign="center">
          @DOSUMCODING
        </Heading>

        <Box mt="6">
          {navLinks.map((res, index) => (
            <HStack
              mx="6"
              key={index}
              spacing={3}
              py={3}
              px={2}
              borderRadius="md"
              cursor="pointer"
              _hover={{
                bg: "#F3F3F7",
                color: "#000000",
              }}
            >
              <Icon as={res.icon} boxSize={5} />
              <Text>{res.text}</Text>
            </HStack>
          ))}
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box px={6} pb={4}>
        <HStack
          spacing={2}
          justify="center"
          py={2}
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: "#F3F3F7", color: "#000000" }}
        >
          <Icon as={MdOutlineSupportAgent} boxSize={5} />
          <Text fontSize="sm" color="gray.500">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default SideNavbar;
