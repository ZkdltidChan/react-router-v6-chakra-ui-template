import React, {
    // 
} from "react";
import {
    useColorModeValue,
    Container,
    Flex,
    Heading,
    Input,
    FormControl,
    FormLabel,
    VStack,
    Button,
    Divider,
    HStack,
    Text,
} from "@chakra-ui/react";
import { FaTwitter, FaDiscord } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'


// TODO: input onchange, submit from, api request
const LoginFrom = () => (
    <VStack w="100%" spacing={4}>
        <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
        </FormControl>
        <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
        </FormControl>
        <Button colorScheme="linkedin" onClick={() => console.log("test")}>Login</Button>
    </VStack>
)

// TODO: third party login api
const ThirdPartyLogin = () => {
    const LoginWithGoogle = () => (
        <Button bg="white" variant="outline" leftIcon={<FcGoogle />} onClick={() => console.log("login with google")}>
            Login With Google
        </Button>
    )
    const LoginWithTwitter = () => (
        <Button colorScheme='twitter' leftIcon={<FaTwitter />} onClick={() => console.log("login with twitter")}>
            Login With Twitter
        </Button>
    )
    return (
        <VStack w="100%">
            <LoginWithGoogle />
            <LoginWithTwitter />
        </VStack>
    )
}

const Login = () => {
    return (
        <>
            <Container p={3} py={5}>
                <VStack>
                    <Flex
                        shadow="xl"
                        rounded="lg"
                        p={8}
                        maxW="lg"
                        minW={{ base: "100%", md: "md" }}
                        justify="center"
                        bg={useColorModeValue('white', 'gray.700')}
                    >
                        <VStack w="100%" spacing={5}>
                            <Heading textAlign="center">
                                Login
                            </Heading>
                            <LoginFrom />
                            <Divider />
                            <ThirdPartyLogin />
                        </VStack>
                    </Flex>
                </VStack>
            </Container>
        </>
    )
}
export default Login;