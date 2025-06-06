import { useState } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import products from "../Data/products";
import ProductCard from "../Components/ProductCard";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "brand":
          return a.brand.localeCompare(b.brand);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const menShoesCount = products.filter(p => p.category === "men-shoes").length;
  const womenShoesCount = products.filter(p => p.category === "women-shoes").length;
  const menSlippersCount = products.filter(p => p.category === "men-slippers").length;
  const womenSlippersCount = products.filter(p => p.category === "women-slippers").length;
  const crocsCount = products.filter(p => p.category === "crocs").length;
  const menWatchesCount = products.filter(p => p.category === "men-watches").length;
  const womenWatchesCount = products.filter(p => p.category === "women-watches").length;

  const categories = [
    { key: "all", label: "All Products", count: products.length, color: "bg-blue-600" },
    { key: "men-shoes", label: "Men Shoes", count: menShoesCount, color: "bg-blue-600" },
    { key: "women-shoes", label: "Women Shoes", count: womenShoesCount, color: "bg-pink-600" },
    { key: "men-slippers", label: "Men Slippers", count: menSlippersCount, color: "bg-green-600" },
    { key: "women-slippers", label: "Women Slippers", count: womenSlippersCount, color: "bg-purple-600" },
    { key: "crocs", label: "Crocs", count: crocsCount, color: "bg-orange-600" },
    { key: "men-watches", label: "Men Watches", count: menWatchesCount, color: "bg-gray-600" },
    { key: "women-watches", label: "Women Watches", count: womenWatchesCount, color: "bg-rose-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Collection</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover premium shoes, slippers, crocs and luxury watches carefully curated for style and quality
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products or brands..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Sort Controls */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="brand">Sort by Brand</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${
                    viewMode === "grid" ? "bg-white shadow-sm" : "text-gray-600"
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${
                    viewMode === "list" ? "bg-white shadow-sm" : "text-gray-600"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.key
                    ? `${category.color} text-white`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {filteredProducts.length} Products Found
            {selectedCategory !== "all" && (
              <span className="text-base font-normal text-gray-600 ml-2">
                in {categories.find(c => c.key === selectedCategory)?.label}
              </span>
            )}
          </h2>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Filter className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSortBy("name");
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
