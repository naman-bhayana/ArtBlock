// Mock NFT data
const NFT_DATA = [
    {
        id: 1,
        name: "Cosmic Voyager",
        category: "art",
        price: "0.25",
        image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        description: "Explore the vastness of the cosmic universe through this digital masterpiece.",
        creator: {
            id: 1,
            name: "AstralArtist",
            avatar: "https://randomuser.me/api/portraits/women/42.jpg"
        }
    },
    {
        id: 2,
        name: "Digital Dreams",
        category: "art",
        price: "0.15",
        image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "A surreal journey through the subconscious mind, rendered in vibrant digital colors.",
        creator: {
            id: 2,
            name: "DreamScaper",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        }
    },
    {
        id: 3,
        name: "Neon Wilderness",
        category: "photography",
        price: "0.08",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Urban photography with a neon twist, capturing the energy of the city at night.",
        creator: {
            id: 3,
            name: "NightLens",
            avatar: "https://randomuser.me/api/portraits/women/63.jpg"
        }
    },
    {
        id: 4,
        name: "Pixel Punk",
        category: "collectibles",
        price: "0.75",
        image: "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        description: "One of the original crypto collectibles, featuring unique pixel art character.",
        creator: {
            id: 4,
            name: "CryptoPunks",
            avatar: "https://randomuser.me/api/portraits/men/91.jpg"
        }
    },
    {
        id: 5,
        name: "Harmony in Blue",
        category: "music",
        price: "0.12",
        image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        description: "An original musical composition visualized through generative art.",
        creator: {
            id: 5,
            name: "AudioVisual",
            avatar: "https://randomuser.me/api/portraits/women/22.jpg"
        }
    },
    {
        id: 6,
        name: "Abstract Emotions",
        category: "art",
        price: "0.35",
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        description: "A vibrant expression of human emotions through abstract digital art.",
        creator: {
            id: 6,
            name: "EmotiveArtist",
            avatar: "https://randomuser.me/api/portraits/men/45.jpg"
        }
    },
    {
        id: 7,
        name: "Urban Fragments",
        category: "photography",
        price: "0.09",
        image: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2555&q=80",
        description: "Fragments of urban life captured in a series of interconnected photographs.",
        creator: {
            id: 7,
            name: "UrbanLens",
            avatar: "https://randomuser.me/api/portraits/women/76.jpg"
        }
    },
    {
        id: 8,
        name: "Digital Sunset",
        category: "art",
        price: "0.18",
        image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "A stunning digital rendering of a sunset over a fantastical landscape.",
        creator: {
            id: 8,
            name: "SunsetArtist",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg"
        }
    },
    {
        id: 9,
        name: "Retro Beats",
        category: "music",
        price: "0.14",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "A collection of retro-inspired beats with a visual representation.",
        creator: {
            id: 9,
            name: "RetroProducer",
            avatar: "https://randomuser.me/api/portraits/men/55.jpg"
        }
    },
    {
        id: 10,
        name: "Digital Feline",
        category: "collectibles",
        price: "0.55",
        image: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
        description: "A unique digital cat collectible with rare traits and distinctive features.",
        creator: {
            id: 10,
            name: "CryptoKitties",
            avatar: "https://randomuser.me/api/portraits/women/89.jpg"
        }
    },
    {
        id: 11,
        name: "Futuristic City",
        category: "art",
        price: "0.42",
        image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        description: "A detailed vision of a futuristic cityscape with flying vehicles and towering structures.",
        creator: {
            id: 11,
            name: "FutureVision",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg"
        }
    },
    {
        id: 12,
        name: "Nature's Symphony",
        category: "photography",
        price: "0.11",
        image: "https://images.unsplash.com/photo-1542326891-50b14105a80b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80",
        description: "A breathtaking collection of nature photographs synchronized with natural sounds.",
        creator: {
            id: 12,
            name: "NaturePhotographer",
            avatar: "https://randomuser.me/api/portraits/women/33.jpg"
        }
    },
    {
        id: 13,
        name: "Geometric Abstraction",
        category: "art",
        price: "0.28",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
        description: "Exploration of form and color through geometric abstraction in digital space.",
        creator: {
            id: 1,
            name: "AstralArtist",
            avatar: "https://randomuser.me/api/portraits/women/42.jpg"
        }
    },
    {
        id: 14,
        name: "Cyber Dystopia",
        category: "art",
        price: "0.33",
        image: "https://images.unsplash.com/photo-1578305035108-1ef3bb6c8478?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        description: "A haunting vision of a cyberpunk world where technology has taken over.",
        creator: {
            id: 11,
            name: "FutureVision",
            avatar: "https://randomuser.me/api/portraits/men/11.jpg"
        }
    },
    {
        id: 15,
        name: "Sound Waves",
        category: "music",
        price: "0.19",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "A visual representation of soundwaves transformed into digital art.",
        creator: {
            id: 5,
            name: "AudioVisual",
            avatar: "https://randomuser.me/api/portraits/women/22.jpg"
        }
    },
    {
        id: 16,
        name: "Electric Dreams",
        category: "art",
        price: "0.22",
        image: "https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        description: "Vibrant electrical patterns creating a dreamlike digital landscape.",
        creator: {
            id: 2,
            name: "DreamScaper",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        }
    }
]; 