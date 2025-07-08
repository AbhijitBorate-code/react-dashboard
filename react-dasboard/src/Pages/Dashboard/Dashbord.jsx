import React from 'react';
import { Box } from '@chakra-ui/react'; // ✅ OK now because ChakraProvider is set
import SideNavbar from '../../Components/Sidebar/Sidebar';
const Dashboard = () => {
  return <Box as="h2">
    <SideNavbar/>
  </Box>;
};

export default Dashboard;
