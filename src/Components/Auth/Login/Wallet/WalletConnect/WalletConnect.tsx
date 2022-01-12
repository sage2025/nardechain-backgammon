import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const RPC_URLS: { [chainId: number]: string } = {
    1: process.env.RPC_URL_1 as string,
    4: process.env.RPC_URL_4 as string
}

export const walletconnect = new WalletConnectConnector({
    rpc: {  56: "https://bsc-dataseed.binance.org", },
    qrcode: true
})