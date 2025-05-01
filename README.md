# ArtBlock - NFT Marketplace

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/yourusername/artblock/ci.yml?branch=main)
![GitHub issues](https://img.shields.io/github/issues/yourusername/artblock)
![GitHub stars](https://img.shields.io/github/stars/yourusername/artblock)
![GitHub forks](https://img.shields.io/github/forks/yourusername/artblock)

<p align="center">
  <img src="assets/logo.png" alt="ArtBlock Logo" width="200">
</p>

ArtBlock is a simple NFT marketplace that enables creators to showcase and sell their digital assets securely using blockchain technology.

## 🚀 Demo

Check out the live demo: [ArtBlock Demo](https://yourusername.github.io/artblock)

<p align="center">
  <img src="assets/screenshot.png" alt="ArtBlock Screenshot" width="600">
</p>

## ✨ Features

- 🖼️ Frontend display of NFT listings with images and metadata
- 👩‍🎨 Artist profiles and collections
- 🔍 Filtering NFTs by category, price, and search terms
- 👛 Mock wallet connection functionality
- 📝 Smart contract for NFT transactions

## 🛠️ Technologies Used

- MERN Stack (MongoDB, Express.js, React.js, Node.js) architecture
- HTML, CSS & JavaScript for the frontend
- Web3 integration for blockchain simulation
- Solidity for the smart contract

## 📁 Project Structure

```
ArtBlock/
├── index.html            # Main HTML file
├── css/                  # CSS styles
├── js/                   # JavaScript files
│   ├── script.js         # Main JavaScript functionality
│   ├── nft-data.js       # Mock NFT data
│   ├── artist-data.js    # Mock artist data
│   └── web3-mock.js      # Mock Web3 integration
├── contracts/            # Solidity smart contracts
│   └── NFTMarketplace.sol # Main marketplace contract
├── assets/               # Images and other static assets
├── .github/              # GitHub templates and workflows
└── docs/                 # Documentation
```

## 🏗️ MERN Stack Implementation

This project is designed to be expanded into a full MERN stack application. See [MERN_IMPLEMENTATION.md](MERN_IMPLEMENTATION.md) for detailed information on the planned architecture.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/artblock.git
   cd artblock
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:8080`

## 🖥️ Frontend Features

- Responsive design for different screen sizes
- Modern UI with smooth animations
- Filter NFTs by category, price range
- Search functionality
- View artist profiles

## 📝 Smart Contract

The project includes a Solidity smart contract that demonstrates:

- NFT minting
- Listing NFTs for sale
- Buying NFTs
- Marketplace fee implementation
- Contract ownership management

**Note:** The smart contract is provided for demonstration purposes only and is not deployed on any blockchain.

## 🛣️ Roadmap

- [ ] Integrate with actual blockchain network
- [ ] Add user authentication
- [ ] Implement NFT creation functionality
- [ ] Add bidding and auction features
- [ ] Develop backend server with Express.js and MongoDB
- [ ] Migrate frontend to React.js for improved interactivity

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Naman Bhayana** - *Initial work* - [Your GitHub](https://github.com/naman-bhayana)

## 🙏 Acknowledgements

- NFT images sourced from Unsplash
- User avatars from RandomUser.me
- Icons from Font Awesome
- Mock data structure inspired by popular NFT marketplaces 