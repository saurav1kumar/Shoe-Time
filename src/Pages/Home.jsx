import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Truck, RefreshCw, ShoppingCart, MessageCircle } from "lucide-react";
import products from "../Data/products";

export default function Home() {
  const featuredMenShoes = products.filter(p => p.category === "men-shoes").slice(0, 3);
  const featuredWomenShoes = products.filter(p => p.category === "women-shoes").slice(0, 3);
  const featuredMenWatches = products.filter(p => p.category === "men-watches").slice(0, 3);
  const featuredWomenWatches = products.filter(p => p.category === "women-watches").slice(0, 3);
  const featuredCrocs = products.filter(p => p.category === "crocs").slice(0, 3);

  const handleWhatsAppContact = (product, action) => {
    const message = action === 'buy' 
      ? `Hi! I'm interested in buying the ${product.name} (₹${product.price.toLocaleString('en-IN')}). Could you please provide more details about pricing and availability?`
      : `Hi! I'd like to know more about the ${product.name}. Can you help me with details?`
    
    const whatsappNumber = "919034168366"; // Updated with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const ProductCard = ({ product }) => (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
          {product.brand}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-green-600">
            ₹{product.price.toLocaleString('en-IN')}
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-gray-600 font-medium">{product.rating}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => handleWhatsAppContact(product, 'buy')}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} />
            Buy Now
          </button>
          <button
            onClick={() => handleWhatsAppContact(product, 'contact')}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <MessageCircle size={16} />
            Contact
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Step Up.<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Stay Timeless.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Discover our exclusive collection of premium shoes, comfortable slippers, trendy crocs and luxury watches — curated to elevate your every moment with style and sophistication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              <span>Explore Collection</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Men's Shoes Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Men's Premium Footwear</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Step into comfort and style with our carefully selected men's shoes collection
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredMenShoes.map((shoe) => (
                <ProductCard key={shoe.id} product={shoe} />
              ))}
            </div>
          </div>

          {/* Women's Shoes Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Women's Premium Footwear</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Elegant and comfortable shoes designed for the modern woman
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredWomenShoes.map((shoe) => (
                <ProductCard key={shoe.id} product={shoe} />
              ))}
            </div>
          </div>

          {/* Crocs Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Comfort Crocs Collection</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Ultimate comfort meets iconic style in our Crocs collection
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCrocs.map((croc) => (
                <ProductCard key={croc.id} product={croc} />
              ))}
            </div>
          </div>

          {/* Men's Watches Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Men's Luxury Timepieces</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Precision and elegance crafted for the discerning gentleman
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredMenWatches.map((watch) => (
                <ProductCard key={watch.id} product={watch} />
              ))}
            </div>
          </div>

          {/* Women's Watches Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Women's Elegant Timepieces</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Sophisticated designs that complement your unique style
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredWomenWatches.map((watch) => (
                <ProductCard key={watch.id} product={watch} />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose ShoeTIme?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to providing you with the best shopping experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Shield className="h-8 w-8 text-blue-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Authentic Products</h3>
              <p className="text-gray-600">100% authentic products from authorized dealers</p>
            </div>
            <div className="text-center group">
              <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Truck className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery across India with tracking</p>
            </div>
            <div className="text-center group">
              <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <RefreshCw className="h-8 w-8 text-purple-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Easy Returns</h3>
              <p className="text-gray-600">Hassle-free returns within 7 days</p>
            </div>
            <div className="text-center group">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <MessageCircle className="h-8 w-8 text-orange-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">WhatsApp support available anytime</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
