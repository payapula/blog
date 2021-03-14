import { Button, useColorMode } from "@chakra-ui/react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <div>Welcome to Payapula's Blog!!</div>
      <Button colorScheme="green">Sample</Button>
      <Button colorScheme="teal">Sample</Button>
      <Button colorScheme="red">Sample</Button>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </>
  );
};

export default Index;
