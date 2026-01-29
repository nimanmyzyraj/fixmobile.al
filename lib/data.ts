export type Product = {
  id: string;
  name: string;
  brand: string;
  category: "phones" | "laptops" | "tablets" | "accessories";
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  inStock: boolean;
  featured?: boolean;
};

export type Service = {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
};

export const products: Product[] = [
  // Phones
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "phones",
    price: 1199,
    originalPrice: 1299,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&h=500&fit=crop",
    description:
      "The most powerful iPhone ever with A17 Pro chip, titanium design, and advanced camera system.",
    specs: [
      { label: "Display", value: "6.7-inch Super Retina XDR" },
      { label: "Chip", value: "A17 Pro" },
      { label: "Storage", value: "256GB" },
      { label: "Camera", value: "48MP Main + 12MP Ultra Wide" },
      { label: "Battery", value: "Up to 29 hours video playback" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "samsung-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "phones",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&h=500&fit=crop",
    description:
      "Galaxy AI is here. The ultimate smartphone with built-in S Pen and advanced AI features.",
    specs: [
      { label: "Display", value: "6.8-inch Dynamic AMOLED 2X" },
      { label: "Chip", value: "Snapdragon 8 Gen 3" },
      { label: "Storage", value: "256GB" },
      { label: "Camera", value: "200MP Main + 12MP Ultra Wide" },
      { label: "Battery", value: "5000mAh" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "google-pixel-8-pro",
    name: "Google Pixel 8 Pro",
    brand: "Google",
    category: "phones",
    price: 999,
    originalPrice: 1099,
    image:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&h=500&fit=crop",
    description:
      "The best of Google AI, the best Pixel camera ever, and 7 years of updates.",
    specs: [
      { label: "Display", value: "6.7-inch LTPO OLED" },
      { label: "Chip", value: "Google Tensor G3" },
      { label: "Storage", value: "128GB" },
      { label: "Camera", value: "50MP Main + 48MP Ultra Wide" },
      { label: "Battery", value: "5050mAh" },
    ],
    inStock: true,
  },
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    category: "phones",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop",
    description:
      "Flagship killer with Hasselblad camera and blazing fast charging.",
    specs: [
      { label: "Display", value: "6.82-inch LTPO AMOLED" },
      { label: "Chip", value: "Snapdragon 8 Gen 3" },
      { label: "Storage", value: "256GB" },
      { label: "Camera", value: "50MP Main + 64MP Periscope" },
      { label: "Battery", value: "5400mAh with 100W charging" },
    ],
    inStock: true,
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    category: "phones",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=500&fit=crop",
    description: "Dynamic Island, 48MP camera, and USB-C. Newphoria awaits.",
    specs: [
      { label: "Display", value: "6.1-inch Super Retina XDR" },
      { label: "Chip", value: "A16 Bionic" },
      { label: "Storage", value: "128GB" },
      { label: "Camera", value: "48MP Main + 12MP Ultra Wide" },
      { label: "Battery", value: "Up to 20 hours video playback" },
    ],
    inStock: true,
  },
  // Laptops
  {
    id: "macbook-pro-16",
    name: "MacBook Pro 16-inch",
    brand: "Apple",
    category: "laptops",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
    description:
      "Supercharged by M3 Pro or M3 Max chip. Built for demanding workflows.",
    specs: [
      { label: "Display", value: "16.2-inch Liquid Retina XDR" },
      { label: "Chip", value: "Apple M3 Pro" },
      { label: "Memory", value: "18GB Unified Memory" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Battery", value: "Up to 22 hours" },
    ],
    inStock: true,
    featured: true,
  },
  {
    id: "dell-xps-15",
    name: "Dell XPS 15",
    brand: "Dell",
    category: "laptops",
    price: 1799,
    originalPrice: 1999,
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&h=500&fit=crop",
    description:
      "Stunning 15.6-inch OLED display with Intel Core Ultra processors.",
    specs: [
      { label: "Display", value: "15.6-inch 3.5K OLED" },
      { label: "Processor", value: "Intel Core Ultra 7" },
      { label: "Memory", value: "16GB DDR5" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Graphics", value: "Intel Arc Graphics" },
    ],
    inStock: true,
  },
  {
    id: "lenovo-thinkpad-x1",
    name: "Lenovo ThinkPad X1 Carbon",
    brand: "Lenovo",
    category: "laptops",
    price: 1649,
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=500&fit=crop",
    description: "Legendary ThinkPad reliability meets modern performance.",
    specs: [
      { label: "Display", value: "14-inch 2.8K OLED" },
      { label: "Processor", value: "Intel Core Ultra 7" },
      { label: "Memory", value: "16GB LPDDR5" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Weight", value: "1.24 kg" },
    ],
    inStock: true,
  },
  {
    id: "hp-spectre-x360",
    name: "HP Spectre x360 14",
    brand: "HP",
    category: "laptops",
    price: 1399,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
    description: "2-in-1 convertible with stunning design and OLED display.",
    specs: [
      { label: "Display", value: "14-inch 2.8K OLED Touch" },
      { label: "Processor", value: "Intel Core Ultra 5" },
      { label: "Memory", value: "16GB LPDDR5" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Form Factor", value: "2-in-1 Convertible" },
    ],
    inStock: true,
  },
  {
    id: "asus-rog-zephyrus",
    name: "ASUS ROG Zephyrus G16",
    brand: "ASUS",
    category: "laptops",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=500&fit=crop",
    description:
      "Gaming powerhouse with RTX 4070 and stunning Nebula HDR display.",
    specs: [
      { label: "Display", value: "16-inch ROG Nebula HDR" },
      { label: "Processor", value: "Intel Core i9-14900HX" },
      { label: "Memory", value: "32GB DDR5" },
      { label: "Storage", value: "1TB SSD" },
      { label: "Graphics", value: "NVIDIA RTX 4070" },
    ],
    inStock: true,
    featured: true,
  },
  // Tablets
  {
    id: "ipad-pro-12",
    name: "iPad Pro 12.9-inch",
    brand: "Apple",
    category: "tablets",
    price: 1099,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
    description:
      "The ultimate iPad experience with M2 chip and Liquid Retina XDR display.",
    specs: [
      { label: "Display", value: "12.9-inch Liquid Retina XDR" },
      { label: "Chip", value: "Apple M2" },
      { label: "Storage", value: "256GB" },
      { label: "Camera", value: "12MP Wide + 10MP Ultra Wide" },
      { label: "Connectivity", value: "Wi-Fi 6E" },
    ],
    inStock: true,
  },
  {
    id: "samsung-tab-s9",
    name: "Samsung Galaxy Tab S9 Ultra",
    brand: "Samsung",
    category: "tablets",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500&h=500&fit=crop",
    description: "Massive 14.6-inch display with S Pen included.",
    specs: [
      { label: "Display", value: "14.6-inch Dynamic AMOLED 2X" },
      { label: "Chip", value: "Snapdragon 8 Gen 2" },
      { label: "Storage", value: "256GB" },
      { label: "S Pen", value: "Included" },
      { label: "Battery", value: "11200mAh" },
    ],
    inStock: true,
  },
  // Accessories
  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2nd Gen)",
    brand: "Apple",
    category: "accessories",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&h=500&fit=crop",
    description:
      "Active Noise Cancellation, Adaptive Audio, and Personalized Spatial Audio.",
    specs: [
      { label: "Noise Cancellation", value: "Active" },
      { label: "Battery Life", value: "6 hours (30 with case)" },
      { label: "Connectivity", value: "Bluetooth 5.3" },
      { label: "Water Resistance", value: "IPX4" },
    ],
    inStock: true,
  },
  {
    id: "samsung-buds-3-pro",
    name: "Samsung Galaxy Buds3 Pro",
    brand: "Samsung",
    category: "accessories",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
    description: "Intelligent ANC with 360 Audio for immersive sound.",
    specs: [
      { label: "Noise Cancellation", value: "Intelligent ANC" },
      { label: "Battery Life", value: "7 hours (30 with case)" },
      { label: "Audio", value: "360 Audio" },
      { label: "Water Resistance", value: "IP57" },
    ],
    inStock: true,
  },
];

export const phoneServices: Service[] = [
  {
    id: "phone-screen-repair",
    name: "Screen Replacement",
    description:
      "Cracked or broken screen? We replace screens for all major phone brands with original quality parts.",
    price: "From $79",
    duration: "1-2 hours",
    icon: "screen",
  },
  {
    id: "phone-battery-replacement",
    name: "Battery Replacement",
    description:
      "Restore your phone's battery life with a brand new battery. Quick turnaround guaranteed.",
    price: "From $49",
    duration: "30-60 minutes",
    icon: "battery",
  },
  {
    id: "phone-charging-port",
    name: "Charging Port Repair",
    description:
      "Fix loose connections or damaged charging ports for reliable charging every time.",
    price: "From $39",
    duration: "1-2 hours",
    icon: "charging",
  },
  {
    id: "phone-water-damage",
    name: "Water Damage Recovery",
    description:
      "Professional water damage assessment and repair. The sooner you bring it, the better the chances.",
    price: "From $99",
    duration: "24-48 hours",
    icon: "water",
  },
  {
    id: "phone-camera-repair",
    name: "Camera Repair",
    description:
      "Fix blurry photos, cracked camera lenses, or camera not working issues.",
    price: "From $59",
    duration: "1-2 hours",
    icon: "camera",
  },
  {
    id: "phone-speaker-repair",
    name: "Speaker & Mic Repair",
    description:
      "Can't hear calls or people can't hear you? We fix all audio-related issues.",
    price: "From $45",
    duration: "1-2 hours",
    icon: "speaker",
  },
];

export const computerServices: Service[] = [
  {
    id: "laptop-screen-repair",
    name: "Screen Replacement",
    description:
      "Replace cracked, broken, or malfunctioning laptop screens with high-quality displays.",
    price: "From $149",
    duration: "2-4 hours",
    icon: "screen",
  },
  {
    id: "laptop-battery-replacement",
    name: "Battery Replacement",
    description:
      "Extend your laptop's life with a new battery. We stock batteries for most major brands.",
    price: "From $79",
    duration: "1-2 hours",
    icon: "battery",
  },
  {
    id: "laptop-keyboard-repair",
    name: "Keyboard Replacement",
    description:
      "Replace damaged, sticky, or non-responsive keyboards. Full keyboard or individual keys.",
    price: "From $89",
    duration: "2-3 hours",
    icon: "keyboard",
  },
  {
    id: "laptop-ssd-upgrade",
    name: "SSD/RAM Upgrade",
    description:
      "Speed up your laptop with an SSD upgrade or add more RAM for better performance.",
    price: "From $99",
    duration: "1-2 hours",
    icon: "upgrade",
  },
  {
    id: "laptop-virus-removal",
    name: "Virus & Malware Removal",
    description:
      "Complete system scan and removal of viruses, malware, and unwanted software.",
    price: "From $69",
    duration: "2-4 hours",
    icon: "virus",
  },
  {
    id: "laptop-data-recovery",
    name: "Data Recovery",
    description:
      "Recover lost or deleted files from damaged or corrupted hard drives.",
    price: "From $129",
    duration: "24-72 hours",
    icon: "data",
  },
  {
    id: "laptop-os-install",
    name: "OS Installation",
    description:
      "Fresh Windows or macOS installation with all drivers and essential software.",
    price: "From $59",
    duration: "2-3 hours",
    icon: "os",
  },
  {
    id: "laptop-fan-cleaning",
    name: "Fan Cleaning & Thermal Paste",
    description:
      "Prevent overheating with professional cleaning and thermal paste replacement.",
    price: "From $49",
    duration: "1-2 hours",
    icon: "fan",
  },
];
