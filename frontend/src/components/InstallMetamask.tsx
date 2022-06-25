import { VStack, Heading, Link, Box } from "@chakra-ui/react";
import React from "react";

export default function InstallMetamask() {
  return (
    <Box p={10} border="1px solid" borderColor="gray.500" shadow="md">
      <VStack spacing={2}>
        <Heading>Please, install metamask</Heading>
        <Link href="https://metamask.io/" target="_blank">
          Here is the link
        </Link>
      </VStack>
    </Box>
  );
}
