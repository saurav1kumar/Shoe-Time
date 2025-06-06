import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useWishlist } from "../Components/Wishlist";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="bg-gray-100 rounded-full p-8 w-32 h-32 mx-auto mb-6 flex items-center justify-center">
            <Heart className="h-16 w-16 text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Wishlist is Empty</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Start building your wishlist by adding products you love. 
            We'll save them here for you to review later.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            <ShoppingBag className="h-5 w-5" />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <Heart className="h-12 w-12 fill-current" />
            My Wishlist
          </h1>
          <p className="text-xl opacity-90">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} you've saved for later
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-8">
        {/* Wishlist Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <h2 className="text-2xl font-bold text-gray-800">
              Your Saved Items ({wishlist.length})
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={clearWishlist}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              <Trash2 className="h-4 w-4" />
              <span>Clear All</span>
            </button>
            <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Brand Badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.brand}
                </div>
                
                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors transform hover:scale-110"
                >
                  <Heart className="h-4 w-4 fill-current" />
                </button>
              </div>
              
              {/* Product Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-bold ${
                    product.category === 'shoes' ? 'text-blue-600' : 'text-orange-600'
                  }`}>
                    ${product.price.toLocaleString()}
                  </span>
                  <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className={`flex-1 py-2 px-4 rounded-full font-medium transition-all ${
                    product.category === 'shoes'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-orange-600 hover:bg-orange-700 text-white'
                  }`}>
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Purchase?</h3>
            <p className="text-gray-600 mb-6">
              Add your favorite items to cart and complete your purchase with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Continue Shopping</span>
              </Link>
              <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105">
                Add All to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
