import React from 'react';
import { Box } from '@chakra-ui/react'; // ✅ OK now because ChakraProvider is set

const Dashboard = () => {
  return <Box bg="gray.100">Hello from Dashboard</Box>;
};

export default Dashboard;
