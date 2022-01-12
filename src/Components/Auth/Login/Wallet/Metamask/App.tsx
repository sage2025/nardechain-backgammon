import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import theme from "./theme";
import Layout from "./components_metamask/Layout";
// import ConnectButton from "./components_metamask/ConnectButton";
import AccountModal from "./components_metamask/AccountModal";
import "@fontsource/inter";

function App() {
  const { isOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        {/* <ConnectButton handleOpenModal={onOpen} /> */}
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
