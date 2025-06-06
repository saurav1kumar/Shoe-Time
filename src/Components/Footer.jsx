import { Link } from "react-router-dom";
import { Watch, Footprints, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold mb-4">
              <div className="flex items-center">
                <Footprints className="h-8 w-8 text-blue-400" />
                <Watch className="h-8 w-8 text-orange-400 -ml-2" />
              </div>
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                ShoeTIme
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your ultimate destination for premium shoes, comfortable slippers, trendy crocs and luxury watches. 
              Step up your game with our carefully curated collection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/shoetime786?igsh=MTR1aGV6eGV6eHQ4bw==" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-400 hover:text-white transition-colors">
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/creator" className="text-gray-400 hover:text-white transition-colors">
                  Creator Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Men Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Women Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Men Slippers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Women Slippers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Crocs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Men Watches
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Women Watches
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Delivering All Over India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-sm">+91 9034168366</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-sm">ansh.1.9.0.1.11@gmail.com</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 ShoeTIme. All rights reserved. Crafted with ❤️ for style enthusiasts.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Returns & Exchanges
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-500 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">SSL</span>
              </div>
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-5 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">✓</span>
              </div>
              <span>Authentic Products</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-5 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">24/7</span>
              </div>
              <span>WhatsApp Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-5 bg-orange-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">COD</span>
              </div>
              <span>Cash on Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
