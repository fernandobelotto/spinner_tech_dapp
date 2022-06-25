import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Divider,
  Heading,
  HStack,
  Input,
  Text,
  theme,
  VStack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";
import InstallMetamask from "./components/InstallMetamask";
import { useName } from "./hooks/use-name";
import { useSignerData } from "./hooks/use-signer";

export function App() {
  const { address, ethAmount, error, network } = useSignerData();
  const { name, newName, setNewName, writeName, loading } = useName();

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Container p={5}>
        {error ? (
          <InstallMetamask />
        ) : (
          <Box p={10} border="1px solid" borderColor="gray.500" shadow="md">
            <VStack spacing={8}>
              <Heading>Name is: {name}</Heading>
              <Text>Use then input and button bellow to set a new name</Text>
              <HStack>
                <Input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="type here the new name"
                />
                <Button
                  onClick={writeName}
                  size="md"
                  isLoading={loading}
                  loadingText="loading..."
                >
                  Set Name
                </Button>
              </HStack>
              <Divider />
              <Text>Network: {network}</Text>
              <Text>Address: {address}</Text>
              <Text>Eth Amount: {ethAmount}</Text>
            </VStack>
          </Box>
        )}
      </Container>
    </ChakraProvider>
  );
}
