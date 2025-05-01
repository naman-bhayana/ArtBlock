// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title NFTMarketplace
 * @dev A simple NFT marketplace contract
 */
contract NFTMarketplace is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    // Fee percentage (out of 10000, so 250 = 2.5%)
    uint256 public marketplaceFee = 250;
    
    // NFT marketplace listing
    struct Listing {
        uint256 price;
        address seller;
        bool isActive;
    }
    
    // Mapping from token ID to listing info
    mapping(uint256 => Listing) public listings;
    
    // Events
    event NFTListed(uint256 indexed tokenId, address indexed seller, uint256 price);
    event NFTSold(uint256 indexed tokenId, address indexed seller, address indexed buyer, uint256 price);
    event NFTUnlisted(uint256 indexed tokenId, address indexed seller);
    
    constructor() ERC721("ArtBlock NFTs", "ABNFT") {}
    
    /**
     * @dev Mints a new NFT and adds it to the marketplace
     * @param tokenURI Token URI for the NFT metadata
     * @param price Initial listing price
     * @return tokenId The newly minted token ID
     */
    function createNFT(string memory tokenURI, uint256 price) public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        
        _mint(msg.sender, newTokenId);
        
        // Create listing
        listings[newTokenId] = Listing({
            price: price,
            seller: msg.sender,
            isActive: true
        });
        
        emit NFTListed(newTokenId, msg.sender, price);
        
        return newTokenId;
    }
    
    /**
     * @dev Allows a user to buy an NFT
     * @param tokenId The token ID of the NFT to purchase
     */
    function buyNFT(uint256 tokenId) public payable {
        Listing memory listing = listings[tokenId];
        require(listing.isActive, "NFT not listed for sale");
        require(msg.value >= listing.price, "Insufficient funds");
        
        address seller = listing.seller;
        
        // Calculate and transfer the fee
        uint256 fee = (listing.price * marketplaceFee) / 10000;
        uint256 sellerAmount = listing.price - fee;
        
        // Transfer NFT to buyer
        _transfer(seller, msg.sender, tokenId);
        
        // Transfer funds to seller
        payable(seller).transfer(sellerAmount);
        
        // Remove listing
        delete listings[tokenId];
        
        emit NFTSold(tokenId, seller, msg.sender, listing.price);
    }
    
    /**
     * @dev Allows a seller to update the price of their NFT
     * @param tokenId The token ID of the NFT
     * @param newPrice The new price
     */
    function updateListing(uint256 tokenId, uint256 newPrice) public {
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        require(listings[tokenId].isActive, "NFT not listed");
        
        listings[tokenId].price = newPrice;
        
        emit NFTListed(tokenId, msg.sender, newPrice);
    }
    
    /**
     * @dev Allows a seller to remove their NFT from the marketplace
     * @param tokenId The token ID of the NFT
     */
    function cancelListing(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        require(listings[tokenId].isActive, "NFT not listed");
        
        delete listings[tokenId];
        
        emit NFTUnlisted(tokenId, msg.sender);
    }
    
    /**
     * @dev Allows the owner to update the marketplace fee
     * @param newFee The new fee percentage (out of 10000)
     */
    function updateMarketplaceFee(uint256 newFee) public onlyOwner {
        require(newFee <= 1000, "Fee too high"); // Max 10%
        marketplaceFee = newFee;
    }
    
    /**
     * @dev Allows the owner to withdraw marketplace fees
     */
    function withdrawFees() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");
        
        payable(owner()).transfer(balance);
    }
} 