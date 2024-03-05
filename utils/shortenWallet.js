export function shortWallet(wallet) {
    const firstPart = wallet.substring(0, 8);
    const secondPart = wallet.substring(wallet.length - 8, wallet.length);
    return `${firstPart}...${secondPart}`;
}