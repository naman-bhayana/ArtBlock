// Mock Ethereum provider for demonstration purposes
window.mockEthereum = {
    isMetaMask: true,
    
    // Mock request method to simulate MetaMask interactions
    request: async function(params) {
        if (params.method === 'eth_requestAccounts') {
            // Simulate the wallet connection response
            return ['0x742d35Cc6634C0532925a3b844Bc454e4438f44e'];
        }
        
        if (params.method === 'eth_getBalance') {
            // Return a mock balance in Wei (10 ETH)
            return '0x8AC7230489E80000';
        }
        
        if (params.method === 'eth_chainId') {
            // Return Ethereum mainnet chain ID
            return '0x1';
        }
        
        return null;
    },
    
    // Mock event handling
    on: function(eventName, callback) {
        console.log(`Registered event listener for: ${eventName}`);
        // We're not actually triggering these events in this demo
    }
};

// Mock Smart Contract for NFT marketplace
class MockNFTMarketplaceContract {
    constructor() {
        this.nfts = NFT_DATA;
        this.owners = {};
        this.sales = {};
        
        // Initialize sales and owners
        this.nfts.forEach(nft => {
            this.sales[nft.id] = {
                forSale: true,
                price: nft.price
            };
            this.owners[nft.id] = nft.creator.id;
        });
    }
    
    // Get NFT details by ID
    async getNFT(id) {
        const nft = this.nfts.find(n => n.id === id);
        return nft ? { ...nft } : null;
    }
    
    // Buy an NFT
    async buyNFT(id, buyer, value) {
        const nft = await this.getNFT(id);
        
        if (!nft) {
            throw new Error("NFT does not exist");
        }
        
        if (!this.sales[id].forSale) {
            throw new Error("NFT is not for sale");
        }
        
        if (parseFloat(value) < parseFloat(this.sales[id].price)) {
            throw new Error("Insufficient funds");
        }
        
        // Update ownership
        this.owners[id] = buyer;
        this.sales[id].forSale = false;
        
        // Return transaction receipt
        return {
            transactionHash: `0x${Math.random().toString(16).substring(2, 10)}`,
            blockNumber: Math.floor(Math.random() * 1000000),
            from: buyer,
            to: this.owners[id],
            gasUsed: Math.floor(Math.random() * 100000),
            status: true
        };
    }
    
    // List NFT for sale
    async listForSale(id, owner, price) {
        if (this.owners[id] !== owner) {
            throw new Error("You don't own this NFT");
        }
        
        this.sales[id] = {
            forSale: true,
            price: price
        };
        
        return {
            success: true,
            message: "NFT listed for sale"
        };
    }
}

// Initialize the mock contract
window.nftMarketplaceContract = new MockNFTMarketplaceContract(); 