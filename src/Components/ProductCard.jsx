import { useState } from 'react';
import { Heart, ShoppingCart, MessageCircle } from 'lucide-react';
import { useWishlist } from './Wishlist';

const ProductCard = ({ product }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isLiked, setIsLiked] = useState(isInWishlist(product.id));

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isLiked) {
      removeFromWishlist(product.id);
      setIsLiked(false);
    } else {
      addToWishlist(product);
      setIsLiked(true);
    }
  };

  const handleWhatsAppContact = (action) => {
    let message = "";

    if (action === 'buy') {
      message = `Hi! I'm interested in buying the "${product.name}" priced at ₹${product.price.toLocaleString('en-IN')}. Could you please provide more details about pricing and availability?`;
    } else {
      message = `Hi! I'd like to know more about the "${product.name}". Can you help me with the details?`;
    }

    const whatsappNumber = "919034168366"; // Include country code without + symbol
    const encodedMessage = encodeURIComponent(message);

    // Use web.whatsapp.com to ensure compatibility with desktops
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Wishlist Heart Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-all duration-200 ${
            isLiked
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart
            size={20}
            className={isLiked ? 'fill-current' : ''}
          />
        </button>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
            {product.category.replace('-', ' ')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Brand & Name */}
        <div className="mb-3">
          <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
            {product.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-bold text-green-600">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Buy Now Button */}
          <button
            onClick={() => handleWhatsAppContact('buy')}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Buy Now
          </button>

          {/* Contact Button */}
          <button
            onClick={() => handleWhatsAppContact('contact')}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
