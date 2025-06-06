import { useState } from "react";
import { Upload, Plus, Eye, Save, Image as ImageIcon, DollarSign, Tag, Star } from "lucide-react";

export default function Creator() {
  const [form, setForm] = useState({ 
    name: "", 
    description: "", 
    image: "", 
    price: "",
    brand: "",
    category: "shoes",
    rating: "4.5"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert(`✅ Product "${form.name}" has been successfully added to the catalog!`);
    setForm({ 
      name: "", 
      description: "", 
      image: "", 
      price: "",
      brand: "",
      category: "shoes",
      rating: "4.5"
    });
    setShowPreview(false);
    setIsSubmitting(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, you'd upload to a cloud service
      const reader = new FileReader();
      reader.onload = (event) => {
        setForm({ ...form, image: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const isFormValid = form.name && form.description && form.image && form.price && form.brand;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <Plus className="h-12 w-12" />
            Creator Panel
          </h1>
          <p className="text-xl opacity-90">
            Add new products to your shoes and watches collection
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Add New Product</h2>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <Eye className="h-4 w-4" />
                <span>{showPreview ? 'Hide' : 'Show'} Preview</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Nike Air Max 270"
                />
              </div>

              {/* Brand and Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                    Brand *
                  </label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    required
                    value={form.brand}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Nike"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select 
                    id="category"
                    name="category" 
                    value={form.category} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="shoes">👟 Shoes</option>
                    <option value="watches">⌚ Watches</option>
                  </select>
                </div>
              </div>

              {/* Price and Rating */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                    Price (USD) *
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="number"
                      id="price"
                      name="price"
                      required
                      min="0"
                      step="0.01"
                      value={form.price}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="150.00"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  <div className="relative">
                    <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <select 
                      id="rating"
                      name="rating" 
                      value={form.rating} 
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="5.0">5.0 - Excellent</option>
                      <option value="4.9">4.9 - Outstanding</option>
                      <option value="4.8">4.8 - Very Good</option>
                      <option value="4.7">4.7 - Good</option>
                      <option value="4.6">4.6 - Good</option>
                      <option value="4.5">4.5 - Average</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={form.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe the product features, benefits, and style..."
                />
              </div>

              {/* Image Upload */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Image *
                </label>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://example.com/image.jpg or upload below"
                  />
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">
                        <span className="text-blue-600 font-medium">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    <span>Adding Product...</span>
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    <span>Add Product to Catalog</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Preview Section */}
          <div className={`${showPreview ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <Eye className="h-6 w-6" />
                <span>Product Preview</span>
              </h3>
              
              {isFormValid ? (
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    {form.image ? (
                      <img 
                        src={form.image} 
                        alt={form.name || 'Product preview'}
                        className="w-full h-64 object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center";
                        }}
                      />
                    ) : (
                      <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                        <ImageIcon className="h-16 w-16 text-gray-400" />
                      </div>
                    )}
                    
                    {form.brand && (
                      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {form.brand}
                      </div>
                    )}
                    
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium text-white ${
                      form.category === 'shoes' 
                        ? 'bg-blue-500/80 backdrop-blur-sm' 
                        : 'bg-orange-500/80 backdrop-blur-sm'
                    }`}>
                      {form.category === 'shoes' ? '👟 Shoes' : '⌚ Watch'}
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        {form.name || 'Product Name'}
                      </h3>
                      <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-700">{form.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {form.description || 'Product description will appear here...'}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`text-3xl font-bold ${
                        form.category === 'shoes' ? 'text-blue-600' : 'text-orange-600'
                      }`}>
                        ${form.price ? parseFloat(form.price).toLocaleString() : '0'}
                      </span>
                      
                      <button className={`px-6 py-2 rounded-full font-medium ${
                        form.category === 'shoes'
                          ? 'bg-blue-600 text-white'
                          : 'bg-orange-600 text-white'
                      }`}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <ImageIcon className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p>Fill out the form to see a preview</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-blue-800 mb-4">📝 Instructions for Adding Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-700">
            <div>
              <h4 className="font-semibold mb-2">Image Guidelines:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Use high-quality images (min 800x800px)</li>
                <li>• White or neutral backgrounds work best</li>
                <li>• Show the product from the best angle</li>
                <li>• Ensure good lighting and clear details</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Content Tips:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Write detailed, engaging descriptions</li>
                <li>• Include key features and benefits</li>
                <li>• Use authentic brand names</li>
                <li>• Set competitive but fair pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
