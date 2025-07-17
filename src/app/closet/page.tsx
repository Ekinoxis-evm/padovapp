'use client'

import { useState } from "react"
import { Shirt, Search, Filter, Grid3X3, List, Plus, Star, Calendar, Palette } from "lucide-react"

const mockItems = [
  {
    id: 1,
    name: "Blusa Tuscan Soul",
    category: "Blusas",
    color: "Dorado",
    season: "Primavera",
    purchaseDate: "2024-01-15",
    image: "/api/placeholder/300/400",
    collection: "TUSCAN SOUL",
    worn: 3,
    rating: 5
  },
  {
    id: 2,
    name: "Vestido Costa D'Oro",
    category: "Vestidos",
    color: "Beige",
    season: "Verano",
    purchaseDate: "2024-02-20",
    image: "/api/placeholder/300/400",
    collection: "COSTA D'ORO",
    worn: 1,
    rating: 4
  },
  {
    id: 3,
    name: "Falda Mediterránea",
    category: "Faldas",
    color: "Terracota",
    season: "Otoño",
    purchaseDate: "2024-03-10",
    image: "/api/placeholder/300/400",
    collection: "TUSCAN SOUL",
    worn: 5,
    rating: 5
  },
  {
    id: 4,
    name: "Pantalón Elegante",
    category: "Pantalones",
    color: "Negro",
    season: "Todo el año",
    purchaseDate: "2024-01-05",
    image: "/api/placeholder/300/400",
    collection: "COSTA D'ORO",
    worn: 8,
    rating: 4
  }
]

const categories = ["Todos", "Blusas", "Vestidos", "Faldas", "Pantalones"]

export default function ClosetPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = mockItems.filter(item => {
    const matchesCategory = selectedCategory === "Todos" || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen luxury-gradient">
      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-lg border-b border-stone-200 z-10 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold font-playfair text-stone-800 mb-2">
                Mi Closet
              </h1>
              <p className="text-stone-600">
                {filteredItems.length} prendas en tu guardarropa digital
              </p>
            </div>

            <button className="btn-primary">
              <Plus className="w-4 h-4 mr-2" />
              Agregar Prenda
            </button>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input
                type="text"
                placeholder="Buscar en tu closet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center space-x-2 px-4 py-2 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filtros</span>
              </button>

              <div className="flex bg-stone-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex space-x-1 mt-6 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-amber-100 text-amber-800'
                    : 'text-stone-600 hover:text-amber-700 hover:bg-stone-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-6">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="card group cursor-pointer overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-stone-100 to-stone-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shirt className="w-16 h-16 text-stone-400" />
                  </div>
                  
                  {/* Collection Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                    {item.collection}
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 right-3 flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < item.rating ? 'text-amber-400 fill-current' : 'text-stone-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-stone-800 mb-1 group-hover:text-amber-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-stone-600 mb-2">{item.category} • {item.color}</p>
                  
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>Usado {item.worn} veces</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Palette className="w-3 h-3" />
                      <span>{item.season}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="card p-6 cursor-pointer hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-stone-100 to-stone-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shirt className="w-8 h-8 text-stone-400" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg text-stone-800 mb-1">{item.name}</h3>
                        <p className="text-stone-600 mb-2">{item.category} • {item.color} • {item.collection}</p>
                        
                        <div className="flex items-center space-x-4 text-sm text-stone-500">
                          <span>Comprado: {new Date(item.purchaseDate).toLocaleDateString('es-CO')}</span>
                          <span>Usado {item.worn} veces</span>
                          <span>{item.season}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < item.rating ? 'text-amber-400 fill-current' : 'text-stone-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Shirt className="w-16 h-16 text-stone-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-stone-600 mb-2">No se encontraron prendas</h3>
            <p className="text-stone-500">Prueba ajustando tus filtros o agrega nuevas prendas a tu closet</p>
            <button className="btn-primary mt-4">
              <Plus className="w-4 h-4 mr-2" />
              Agregar Primera Prenda
            </button>
          </div>
        )}
      </div>
    </div>
  )
} 