import { Button } from "@chakra-ui/react";
import React from "react";
import { Layout } from "../mycomponents/Layout";
import { Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Layout>
      <Heading as="h1">Welcome to Payapula's Site</Heading>
      <Button colorScheme="green">Sample</Button>
    </Layout>
  );
};

export default Index;
