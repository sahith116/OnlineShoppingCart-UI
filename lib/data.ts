import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    brand: 'AudioTech',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
    rating: 4.8,
    reviews: 124,
    inStock: true
  },
  {
    id: '2',
    title: 'Smart Fitness Watch',
    price: 199,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    brand: 'FitTech',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and 7-day battery life. Track your health and fitness goals.',
    rating: 4.6,
    reviews: 89,
    inStock: true
  },
  {
    id: '3',
    title: 'Minimalist Backpack',
    price: 79,
    originalPrice: 99,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    brand: 'UrbanStyle',
    description: 'Sleek and functional backpack perfect for work, travel, or daily use. Made with durable materials and thoughtful design.',
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: '4',
    title: 'Organic Skincare Set',
    price: 49,
    image: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Beauty',
    brand: 'NaturalGlow',
    description: 'Complete organic skincare routine with cleansers, moisturizers, and serums. All-natural ingredients for healthy skin.',
    rating: 4.9,
    reviews: 203,
    inStock: true
  },
  {
    id: '5',
    title: 'Professional Camera Lens',
    price: 599,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    brand: 'LensMax',
    description: 'High-quality professional camera lens for stunning photography. Perfect for both amateur and professional photographers.',
    rating: 4.8,
    reviews: 67,
    inStock: true
  },
  {
    id: '6',
    title: 'Luxury Silk Scarf',
    price: 89,
    image: 'https://images.pexels.com/photos/934067/pexels-photo-934067.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    brand: 'SilkLux',
    description: 'Elegant silk scarf with beautiful patterns. Perfect accessory for any outfit, made with premium quality silk.',
    rating: 4.5,
    reviews: 45,
    inStock: true
  },
  {
    id: '7',
    title: 'Ergonomic Office Chair',
    price: 249,
    originalPrice: 299,
    image: 'https://images.pexels.com/photos/586095/pexels-photo-586095.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Home',
    brand: 'ComfortDesk',
    description: 'Premium office chair with lumbar support and adjustable features. Designed for comfort during long work sessions.',
    rating: 4.7,
    reviews: 178,
    inStock: true
  },
  {
    id: '8',
    title: 'Artisan Coffee Beans',
    price: 24,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Food',
    brand: 'BrewMaster',
    description: 'Premium single-origin coffee beans, expertly roasted for the perfect cup. Rich flavor and aromatic experience.',
    rating: 4.6,
    reviews: 92,
    inStock: true
  },
  {
    id: '9',
    title: 'Wireless Charging Pad',
    price: 39,
    image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    brand: 'PowerTech',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.',
    rating: 4.4,
    reviews: 134,
    inStock: true
  },
  {
    id: '10',
    title: 'Designer Sunglasses',
    price: 159,
    originalPrice: 199,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fashion',
    brand: 'StyleVision',
    description: 'Trendy designer sunglasses with UV protection. Perfect blend of style and functionality for any occasion.',
    rating: 4.5,
    reviews: 78,
    inStock: true
  },
  {
    id: '11',
    title: 'Smart Home Speaker',
    price: 129,
    image: 'https://images.pexels.com/photos/4790268/pexels-photo-4790268.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Electronics',
    brand: 'SmartSound',
    description: 'Voice-controlled smart speaker with premium audio quality. Control your smart home and enjoy your favorite music.',
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: '12',
    title: 'Yoga Mat Premium',
    price: 69,
    image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Health',
    brand: 'ZenFit',
    description: 'High-quality yoga mat with superior grip and cushioning. Perfect for yoga, pilates, and fitness routines.',
    rating: 4.8,
    reviews: 89,
    inStock: true
  }
];

export const categories = ['Electronics', 'Fashion', 'Beauty', 'Home', 'Food', 'Health'];
export const brands = ['AudioTech', 'FitTech', 'UrbanStyle', 'NaturalGlow', 'LensMax', 'SilkLux', 'ComfortDesk', 'BrewMaster', 'PowerTech', 'StyleVision', 'SmartSound', 'ZenFit'];