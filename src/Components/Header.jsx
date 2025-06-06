import { Link } from "react-router-dom";
import { Watch, Footprints, Heart, Phone, UserCog } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold hover:text-blue-300 transition-colors">
            <div className="flex items-center">
              <Footprints className="h-8 w-8 text-blue-400" />
              <Watch className="h-8 w-8 text-orange-400 -ml-2" />
            </div>
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              ShoeTIme
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center space-x-1 hover:text-blue-300 transition-colors font-medium"
            >
              <span>Home</span>
            </Link>
            <Link 
              to="/products" 
              className="flex items-center space-x-1 hover:text-blue-300 transition-colors font-medium"
            >
              <span>Products</span>
            </Link>
            <Link 
              to="/wishlist" 
              className="flex items-center space-x-1 hover:text-blue-300 transition-colors font-medium"
            >
              <Heart className="h-4 w-4" />
              <span>Wishlist</span>
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center space-x-1 hover:text-blue-300 transition-colors font-medium"
            >
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </Link>
            <Link 
              to="/creator" 
              className="flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 font-medium"
            >
              <UserCog className="h-4 w-4" />
              <span>Creator Panel</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
