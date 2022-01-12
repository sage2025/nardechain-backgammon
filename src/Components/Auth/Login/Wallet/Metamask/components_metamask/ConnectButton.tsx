import { useEffect } from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";

type Props = {
  handleOpenModal: any;
  setConn: any;
};

const ConnectButton = ({ handleOpenModal, setConn }: Props) => {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  // useEffect(() => {
  //   setConn(account);
  // }, [account])
  function handleConnectWallet() {
    activateBrowserWallet();
  }
  console.log(account, "acc")
  return account ? 
  (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="white" fontSize="md">
          {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
        </Text>
      </Box>
      <Button
        onClick={handleOpenModal}
        bg="rgb(255, 254, 110)"
        border="1px solid transparent"
        _hover={{
          border: "0px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />
      </Button>
    </Box>
  ) : (
    <Button
      onClick={handleConnectWallet}
      bg="rgb(255, 254, 110)"
      color="rgb(182, 76, 28)"
      fontSize="sm"
      fontWeight="700"
      border="1px solid transparent"
      width="150px"
      height="30px"
      _hover={{
        borderColor: "white.700",
        color: "blue.400",
      }}

    >
      METAMASK
    </Button>
  );
}

export default ConnectButton;