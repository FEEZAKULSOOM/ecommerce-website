// dummyData.js
// Add these imports at the top of your file
import beauty from "./assets/beauty.png";
import beauty1 from "./assets/beauty1.png";
import makeup from "./assets/makeup.png";
import shampoo from "./assets/shampoo.png";
import coat from "./assets/coat.png";
import shirt from "./assets/shirt.png";
import pant from "./assets/pant.png";
import fashion from "./assets/fashion.png";
import fashion1 from "./assets/fashion1.png";
import shoe1 from "./assets/shoe1.png";
import shoe from "./assets/shoe.png";
import sport from "./assets/sport.png";
import sport1 from "./assets/sport1.png";
import sport2 from "./assets/sport2.png";
import sport3 from "./assets/sport3.png";
import sports from "./assets/sports.png";
import dryer from "./assets/dryer.png";
import hp from "./assets/hp.png";
import laptop from "./assets/laptop.png";
import phone from "./assets/phone.png";
import watch from "./assets/watch.png";
import glasses from "./assets/glasses.png";
import kitchen from "./assets/kitchen.png";
import kitchen1 from "./assets/kitchen1.png";
import kitchen2 from "./assets/kitchen2.png";
import kitchen3 from "./assets/kitchen3.png";
import kitchens from "./assets/kitchens.png";

export const products = [
    // BEAUTY PRODUCTS
    {
        id: 1,
        name: "Rose Gold Serum",
        price: 2999,
        category: "Beauty",
        image: beauty,
        brand: "ROSE",
        rating: 4.5,
        description: "Hydrating facial serum with vitamin C"
    },
    {
        id: 2,
        name: "Beauty Glow Cream",
        price: 3499,
        category: "Beauty",
        image: beauty1,
        brand: "Glow",
        rating: 4.6,
        description: "Radiance boosting day cream"
    },
    {
        id: 3,
        name: "Matte Lipstick Set",
        price: 2499,
        category: "Beauty",
        image: makeup,
        brand: "ColorPop",
        rating: 4.4,
        description: "Set of 3 long-lasting matte lipsticks"
    },
    {
        id: 4,
        name: "Silk Shampoo",
        price: 1999,
        category: "Beauty",
        image: shampoo,
        brand: "KANE CARE",
        rating: 4.3,
        description: "Sulfate-free nourishing shampoo"
    },
    // FASHION PRODUCTS
    {
        id: 5,
        name: "Winter Sale Coat",
        price: 8999,
        category: "Fashion",
        image: coat,
        brand: "Urban",
        rating: 4.2,
        description: "Warm wool-blend winter coat"
    },
    {
        id: 6,
        name: "Casual Shirt",
        price: 3999,
        category: "Fashion",
        image: shirt,
        brand: "Lh",
        rating: 4.0,
        description: "Cotton casual shirt for men"
    },
    {
        id: 7,
        name: "Slim Fit Jeans",
        price: 4999,
        category: "Fashion",
        image: pant,
        brand: "Denim Co",
        rating: 4.3,
        description: "Classic blue slim fit jeans"
    },
    {
        id: 8,
        name: "Elegant Dress",
        price: 7999,
        category: "Fashion",
        image: fashion,
        brand: "Elegance",
        rating: 4.7,
        description: "Evening party dress"
    },
    {
        id: 9,
        name: "Trending Shoe",
        price: 2999,
        category: "Fashion",
        image: fashion1,
        brand: "Trendy",
        rating: 4.1,
        description: "Latest Trending Shoe"
    },
    // SHOES
    {
        id: 10,
        name: "NIKE FLYKNIT",
        price: 14999,
        category: "Shoes",
        image: shoe1,
        brand: "Nike",
        rating: 4.8,
        description: "Premium running shoes"
    },
    {
        id: 11,
        name: "Classic Sneakers",
        price: 5999,
        category: "Shoes",
        image: shoe,
        brand: "Sporty",
        rating: 4.4,
        description: "Everyday casual sneakers"
    },
    // SPORTS
    {
        id: 12,
        name: "Basketball",
        price: 2999,
        category: "Sports",
        image: sport,
        brand: "Pro",
        rating: 4.5,
        description: "Official size basketball"
    },
    {
        id: 13,
        name: "Cricket Bat & Ball",
        price: 3499,
        category: "Sports",
        image: sport1,
        brand: "Grip",
        rating: 4.4,
        description: "Professional cricket set with leather ball"
    },
    {
        id: 14,
        name: "Tennis Racket",
        price: 2499,
        category: "Sports",
        image: sport2,
        brand: "Flex",
        rating: 4.3,
        description: "Lightweight tennis racket"
    },
    {
        id: 15,
        name: "Mountain Bicycle",
        price: 14999,
        category: "Sports",
        image: sport3,
        brand: "Hydro",
        rating: 4.2,
        description: "21-speed mountain bicycle"
    },
    {
        id: 16,
        name: "Training Kit",
        price: 7999,
        category: "Sports",
        image: sports,
        brand: "Active",
        rating: 4.6,
        description: "Complete sports training set"
    },
    // ELECTRONICS
    {
        id: 17,
        name: "Hair Dryer Pro",
        price: 4999,
        category: "Electronics",
        image: dryer,
        brand: "Style",
        rating: 4.3,
        description: "Professional ionic hair dryer"
    },
    {
        id: 18,
        name: "Wireless Headphones",
        price: 6999,
        category: "Electronics",
        image: hp,
        brand: "HP",
        rating: 4.6,
        description: "Noise cancelling Bluetooth headphones"
    },
    {
        id: 19,
        name: "Gaming Laptop",
        price: 39999,
        category: "Electronics",
        image: laptop,
        brand: "Case",
        rating: 4.2,
        description: "High performance gaming laptop"
    },
    {
        id: 20,
        name: "Smartphone",
        price: 59999,
        category: "Electronics",
        image: phone,
        brand: "Tech",
        rating: 4.7,
        description: "5G smartphone"
    },
    {
        id: 21,
        name: "Smart Watch",
        price: 19999,
        category: "Electronics",
        image: watch,
        brand: "Wear",
        rating: 4.5,
        description: "Fitness tracking smart watch"
    },
    {
        id: 22,
        name: "Sunglasses",
        price: 8999,
        category: "Electronics",
        image: glasses,
        brand: "Vision",
        rating: 4.3,
        description: "UV protection sunglasses"
    },
    // KITCHEN
    {
        id: 23,
        name: "Pressure Cooker",
        price: 7999,
        category: "Kitchen",
        image: kitchen,
        brand: "Chef",
        rating: 4.6,
        description: "5-liter stainless steel pressure cooker"
    },
    {
        id: 24,
        name: "Electric Kitchen Mixer",
        price: 3499,
        category: "Kitchen",
        image: kitchen1,
        brand: "Cook",
        rating: 4.4,
        description: "Handheld electric mixer with 5 speeds"
    },
    {
        id: 25,
        name: "Mixer Grinder",
        price: 8999,
        category: "Kitchen",
        image: kitchen2,
        brand: "Home",
        rating: 4.5,
        description: "500W mixer grinder"
    },
    {
        id: 26,
        name: "Non-Stick Pan Set",
        price: 14999,
        category: "Kitchen",
        image: kitchen3,
        brand: "Kitchen",
        rating: 4.7,
        description: "3-piece non-stick frying pan set"
    },
    {
        id: 27,
        name: "Utensils Set",
        price: 4999,
        category: "Kitchen",
        image: kitchens,
        brand: "HomeChef",
        rating: 4.3,
        description: "Complete kitchen utensils set"
    }
];
