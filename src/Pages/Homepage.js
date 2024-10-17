import React, { useEffect } from 'react';
import { Box, Center, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import { ChatIcon } from '@chakra-ui/icons'
import { useHistory } from "react-router";

const Homepage = () => {

    const history = useHistory();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));

        if (user) history.push("/chats");
    }, [history]);

    return (
        <Container maxW='xl' centerContent>
            <Box
                display="flex"
                justifyContent="center"
                p={3}
                bg={"white"}
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
            >
                <Center>
                    <Text fontSize='4xl'
                        fontFamily="Work sans" color="black">
                        ConVo - Let's ConnEct !
                        <ChatIcon w={8} h={8} m="10px" color="blue.200" />
                    </Text>
                </Center>
            </Box>
            <Box
                bg="white"
                w="100%"
                p={4}
                borderRadius="lg"
                borderWidth="1px"
                color="black"
            >
                <Tabs isFitted variant="soft-rounded">
                    <TabList mb="1em">
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default Homepage
