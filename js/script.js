// DOM Elements
const connectWalletBtn = document.getElementById('connectWallet');
const nftGrid = document.getElementById('nft-grid');
const artistsGrid = document.getElementById('artists-grid');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const searchInput = document.getElementById('search-nft');

// Global variables
let currentAccount = null;
let nfts = [];
let artists = [];
let filteredNfts = [];

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
});

// Initialize the application
function init() {
    // Load NFT and artist data
    loadNFTs();
    loadArtists();
    
    // Set up event listeners
    setupEventListeners();
    
    // Check if Web3 is available
    checkWeb3();
}

// Load NFT data
function loadNFTs() {
    // In a real app, this would be fetched from an API or blockchain
    nfts = NFT_DATA;
    filteredNfts = [...nfts];
    renderNFTs(filteredNfts);
}

// Load artists data
function loadArtists() {
    // In a real app, this would be fetched from an API
    artists = ARTIST_DATA;
    renderArtists(artists);
}

// Set up event listeners
function setupEventListeners() {
    // Connect wallet button
    connectWalletBtn.addEventListener('click', connectWallet);
    
    // Filters
    categoryFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    searchInput.addEventListener('input', applyFilters);
}

// Check if Web3 is available
function checkWeb3() {
    // This is just a mock implementation
    // In a real app, you would check if the browser has Web3 and if the user has MetaMask installed
    console.log('Checking Web3 availability...');
}

// Connect wallet function
async function connectWallet() {
    try {
        // In a real app, this would connect to MetaMask or other wallet providers
        const accounts = await window.mockEthereum.request({ method: 'eth_requestAccounts' });
        handleAccountsChanged(accounts);
        connectWalletBtn.textContent = 'Wallet Connected';
        connectWalletBtn.disabled = true;
    } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Failed to connect wallet. Please make sure you have a Web3 wallet installed.');
    }
}

// Handle accounts changed
function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        console.log('Please connect to a wallet');
    } else {
        currentAccount = accounts[0];
        console.log('Connected account:', currentAccount);
    }
}

// Apply filters to NFTs
function applyFilters() {
    const category = categoryFilter.value;
    const price = priceFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    
    filteredNfts = nfts.filter(nft => {
        // Category filter
        if (category !== 'all' && nft.category !== category) {
            return false;
        }
        
        // Price filter
        if (price !== 'all') {
            const nftPrice = parseFloat(nft.price);
            if (price === 'low' && nftPrice >= 0.1) return false;
            if (price === 'medium' && (nftPrice < 0.1 || nftPrice > 0.5)) return false;
            if (price === 'high' && nftPrice <= 0.5) return false;
        }
        
        // Search filter
        if (searchTerm && !nft.name.toLowerCase().includes(searchTerm) && 
            !nft.creator.name.toLowerCase().includes(searchTerm)) {
            return false;
        }
        
        return true;
    });
    
    renderNFTs(filteredNfts);
}

// Render NFTs to the grid
function renderNFTs(nftsToRender) {
    nftGrid.innerHTML = '';
    
    if (nftsToRender.length === 0) {
        nftGrid.innerHTML = '<p class="no-results">No NFTs found matching your criteria</p>';
        return;
    }
    
    nftsToRender.forEach(nft => {
        const nftCard = document.createElement('div');
        nftCard.className = 'nft-card';
        
        nftCard.innerHTML = `
            <div class="nft-image">
                <img src="${nft.image}" alt="${nft.name}">
            </div>
            <div class="nft-content">
                <h3 class="nft-title">${nft.name}</h3>
                <div class="nft-creator">
                    <div class="creator-avatar">
                        <img src="${nft.creator.avatar}" alt="${nft.creator.name}">
                    </div>
                    <div class="creator-name">by ${nft.creator.name}</div>
                </div>
                <div class="nft-price">
                    <div class="eth-price">${nft.price} ETH</div>
                    <button class="buy-btn">Buy Now</button>
                </div>
            </div>
        `;
        
        // Add event listener to buy button
        const buyBtn = nftCard.querySelector('.buy-btn');
        buyBtn.addEventListener('click', () => {
            if (!currentAccount) {
                alert('Please connect your wallet first');
                return;
            }
            buyNFT(nft);
        });
        
        nftGrid.appendChild(nftCard);
    });
}

// Render artists to the grid
function renderArtists(artistsToRender) {
    artistsGrid.innerHTML = '';
    
    artistsToRender.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.className = 'artist-card';
        
        let nftPreviews = '';
        artist.nftPreviews.forEach(preview => {
            nftPreviews += `
                <div class="artist-nft-preview">
                    <img src="${preview}" alt="NFT by ${artist.name}">
                </div>
            `;
        });
        
        artistCard.innerHTML = `
            <div class="artist-avatar">
                <img src="${artist.avatar}" alt="${artist.name}">
            </div>
            <h3 class="artist-name">${artist.name}</h3>
            <p class="artist-sales">${artist.sales} Sales</p>
            <div class="artist-nfts">
                ${nftPreviews}
            </div>
            <button class="follow-btn">Follow</button>
        `;
        
        // Add event listener to follow button
        const followBtn = artistCard.querySelector('.follow-btn');
        followBtn.addEventListener('click', () => {
            followArtist(artist);
        });
        
        artistsGrid.appendChild(artistCard);
    });
}

// Buy NFT function
function buyNFT(nft) {
    // In a real app, this would interact with a smart contract
    console.log(`Buying NFT: ${nft.name} for ${nft.price} ETH`);
    alert(`This is a demo. In a real app, you would now purchase "${nft.name}" for ${nft.price} ETH.`);
}

// Follow artist function
function followArtist(artist) {
    console.log(`Following artist: ${artist.name}`);
    alert(`You are now following ${artist.name}`);
} 