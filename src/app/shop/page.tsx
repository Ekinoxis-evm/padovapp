"use client"

import { useState } from "react"
import { Search, Filter, Heart, Star, ShoppingBag } from "lucide-react"

// Mock product data based on Padova's actual collections
const products = [
  {
    id: 1,
    name: "Blusa Saira Natural",
    collection: "TUSCAN SOUL",
    price: 199900,
    originalPrice: null,
    rating: 4.8,
    reviews: 24,
    image: "blusa-saira",
    colors: ["Natural", "Coffee"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
    category: "Blusas"
  },
  {
    id: 2,
    name: "Vestido Zafira Verde Oliva",
    collection: "TUSCAN SOUL", 
    price: 389900,
    originalPrice: null,
    rating: 4.9,
    reviews: 18,
    image: "vestido-zafira",
    colors: ["Verde Oliva", "Navy"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
    category: "Vestidos"
  },
  {
    id: 3,
    name: "Blazer New Arde Lino Natural",
    collection: "COSTA D&apos;ORO",
    price: 419900,
    originalPrice: null,
    rating: 4.7,
    reviews: 32,
    image: "blazer-arde",
    colors: ["Natural", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: false,
    category: "Blazers"
  },
  {
    id: 4,
    name: "Pantalón Cala Taupe",
    collection: "TUSCAN SOUL",
    price: 339900,
    originalPrice: null,
    rating: 4.8,
    reviews: 15,
    image: "pantalon-cala",
    colors: ["Taupe", "Verde Oliva", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: false,
    category: "Pantalones"
  },
  {
    id: 5,
    name: "Falda Vera Natural",
    collection: "TUSCAN SOUL",
    price: 259900,
    originalPrice: null,
    rating: 4.6,
    reviews: 21,
    image: "falda-vera",
    colors: ["Natural"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true,
    category: "Faldas"
  },
  {
    id: 6,
    name: "Crop Top Alma Blanco",
    collection: "COSTA D&apos;ORO",
    price: 209900,
    originalPrice: null,
    rating: 4.5,
    reviews: 28,
    image: "crop-alma",
    colors: ["Blanco", "Natural"],
    sizes: ["XS", "S", "M", "L"],
    isNew: false,
    category: "Blusas"
  }
]

const categories = ["Todos", "Blusas", "Vestidos", "Pantalones", "Faldas", "Blazers"]
const collections = ["Todas", "TUSCAN SOUL", "COSTA D&apos;ORO"]

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedCollection, setSelectedCollection] = useState("Todas")
  const [wishlist, setWishlist] = useState<number[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory
    const matchesCollection = selectedCollection === "Todas" || product.collection === selectedCollection
    
    return matchesSearch && matchesCategory && matchesCollection
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-padova-cream pt-4 pb-24 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-padova-navy font-playfair mb-2">
            Nuestra Tienda
          </h1>
          <p className="text-stone-600">
            Descubre las últimas colecciones de lujo mediterráneo
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-padova-olive/20 focus:border-padova-olive outline-none transition-colors"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors flex items-center space-x-2"
            >
              <Filter className="w-5 h-5 text-stone-600" />
              <span className="hidden sm:inline text-stone-600">Filtros</span>
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="bg-white rounded-lg p-6 shadow-sm border border-stone-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-padova-navy mb-3">Categoría</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="text-padova-olive focus:ring-padova-olive/20"
                        />
                        <span className="text-stone-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-padova-navy mb-3">Colección</h3>
                  <div className="space-y-2">
                    {collections.map((collection) => (
                      <label key={collection} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="collection"
                          value={collection}
                          checked={selectedCollection === collection}
                          onChange={(e) => setSelectedCollection(e.target.value)}
                          className="text-padova-olive focus:ring-padova-olive/20"
                        />
                        <span className="text-stone-700">{collection}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-stone-600">
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Product Image */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-50/50 to-stone-100/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-padova-olive/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <ShoppingBag className="w-8 h-8 text-padova-olive" />
                    </div>
                    <p className="text-stone-500 text-sm">{product.image}</p>
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {product.isNew && (
                    <span className="bg-padova-olive text-white text-xs font-medium px-2 py-1 rounded-full">
                      Nuevo
                    </span>
                  )}
                  <span className="bg-white/90 text-padova-navy text-xs font-medium px-2 py-1 rounded-full">
                    {product.collection}
                  </span>
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`w-4 h-4 ${
                      wishlist.includes(product.id) 
                        ? 'text-red-500 fill-red-500' 
                        : 'text-stone-400'
                    }`} 
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-padova-navy mb-1 line-clamp-2 group-hover:text-padova-olive transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm text-stone-600">{product.rating}</span>
                  <span className="text-sm text-stone-400">({product.reviews})</span>
                </div>

                {/* Colors */}
                <div className="flex items-center space-x-1 mb-3">
                  <span className="text-xs text-stone-500">Colores:</span>
                  <div className="flex space-x-1">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className={`w-4 h-4 rounded-full border border-stone-200 ${
                          color === 'Natural' ? 'bg-stone-200' :
                          color === 'Verde Oliva' ? 'bg-padova-olive' :
                          color === 'Navy' ? 'bg-padova-navy' :
                          color === 'Coffee' ? 'bg-amber-800' :
                          color === 'Taupe' ? 'bg-padova-taupe' :
                          'bg-white'
                        }`}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-xs text-stone-400">+{product.colors.length - 3}</span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-padova-navy">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-stone-400 line-through ml-2">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full mt-4 btn-primary text-sm">
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <ShoppingBag className="w-16 h-16 text-stone-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-stone-600 mb-2">
              No se encontraron productos
            </h3>
            <p className="text-stone-500">
              Intenta ajustar los filtros o términos de búsqueda
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 