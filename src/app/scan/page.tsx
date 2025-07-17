"use client"

import { useState } from "react"
import { Camera, ScanLine, ShoppingBag, Heart, Star, Plus, X, CheckCircle, Info } from "lucide-react"

const mockScanResults = [
  {
    id: 1,
    name: "Blusa Saira Natural",
    collection: "TUSCAN SOUL",
    price: 199900,
    originalPrice: null,
    category: "Blusas",
    colors: ["Natural", "Coffee"],
    sizes: ["XS", "S", "M", "L", "XL"],
    availability: "En Stock",
    rating: 4.8,
    reviews: 24,
    description: "Elegante blusa en lino natural con silueta fluida. Perfecta para un look mediterráneo sofisticado.",
    features: ["100% Lino Natural", "Corte fluido", "Mangas 3/4", "Acabados artesanales"],
    inCloset: false
  },
  {
    id: 2,
    name: "Vestido Zafira Verde Oliva",
    collection: "TUSCAN SOUL",
    price: 389900,
    originalPrice: null,
    category: "Vestidos",
    colors: ["Verde Oliva", "Navy"],
    sizes: ["XS", "S", "M", "L"],
    availability: "En Stock",
    rating: 4.9,
    reviews: 18,
    description: "Vestido midi en tejido natural con inspiración mediterránea. Ideal para ocasiones especiales.",
    features: ["Tejido Natural", "Largo midi", "Escote en V", "Cintura ajustable"],
    inCloset: true
  }
]

export default function Scan() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState<typeof mockScanResults[0] | null>(null)
  const [wishlist, setWishlist] = useState<number[]>([])
  const [showCamera, setShowCamera] = useState(false)

  const startScanning = () => {
    setIsScanning(true)
    setShowCamera(true)
    
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false)
      setScanResult(mockScanResults[Math.floor(Math.random() * mockScanResults.length)])
    }, 3000)
  }

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const addToCloset = () => {
    if (scanResult) {
      // Simulate adding to closet
      console.log("Added to closet:", scanResult.name)
      // You would integrate with your closet state management here
    }
  }

  const resetScan = () => {
    setScanResult(null)
    setShowCamera(false)
  }

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-padova-navy font-playfair mb-2">
            Escáner Padova
          </h1>
          <p className="text-stone-600">
            Escanea productos para obtener información instantánea y precios
          </p>
        </div>

        {!showCamera && !scanResult && (
          <div className="text-center">
            {/* Scan Button */}
            <div className="mb-8">
              <button
                onClick={startScanning}
                className="btn-primary bg-gradient-to-br from-padova-navy to-padova-olive text-white px-8 py-6 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 mx-auto"
              >
                <ScanLine className="w-8 h-8" />
                <span>Iniciar Escaneo</span>
              </button>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200 mb-8">
              <h2 className="text-xl font-semibold text-padova-navy mb-4 font-playfair">
                ¿Cómo funciona?
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-padova-olive/10 rounded-full flex items-center justify-center mx-auto">
                    <Camera className="w-8 h-8 text-padova-olive" />
                  </div>
                  <h3 className="font-semibold text-padova-navy">1. Escanea</h3>
                  <p className="text-stone-600 text-sm">
                    Apunta tu cámara hacia el código de barras o QR del producto
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-padova-olive/10 rounded-full flex items-center justify-center mx-auto">
                    <Info className="w-8 h-8 text-padova-olive" />
                  </div>
                  <h3 className="font-semibold text-padova-navy">2. Descubre</h3>
                  <p className="text-stone-600 text-sm">
                    Obtén información detallada, precios y disponibilidad
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-padova-olive/10 rounded-full flex items-center justify-center mx-auto">
                    <Plus className="w-8 h-8 text-padova-olive" />
                  </div>
                  <h3 className="font-semibold text-padova-navy">3. Agrega</h3>
                  <p className="text-stone-600 text-sm">
                    Añade a tu closet, wishlist o carrito de compras
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-padova-olive/10 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5 text-padova-olive" />
                  </div>
                  <h3 className="font-semibold text-padova-navy">Información de Producto</h3>
                </div>
                <p className="text-stone-600 text-sm">
                  Obtén detalles completos sobre precios, tallas disponibles, colores y características del producto.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-padova-olive/10 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-padova-olive" />
                  </div>
                  <h3 className="font-semibold text-padova-navy">Gestión Inteligente</h3>
                </div>
                <p className="text-stone-600 text-sm">
                  Agrega automáticamente productos a tu closet digital o wishlist para una experiencia personalizada.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Camera View */}
        {showCamera && (
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-2xl overflow-hidden relative">
              {/* Camera Simulation */}
              <div className="absolute inset-0 flex items-center justify-center">
                {isScanning ? (
                  <div className="text-center">
                    <div className="relative">
                      <div className="w-32 h-32 border-4 border-padova-olive border-dashed rounded-lg flex items-center justify-center animate-pulse">
                        <ScanLine className="w-12 h-12 text-padova-olive animate-bounce" />
                      </div>
                      <div className="absolute inset-0 border-4 border-padova-olive rounded-lg animate-ping opacity-30"></div>
                    </div>
                    <p className="text-white mt-4 font-medium">Escaneando producto...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Camera className="w-16 h-16 text-white/60 mx-auto mb-4" />
                    <p className="text-white/80">Apunta hacia el código del producto</p>
                  </div>
                )}
              </div>

              {/* Scanning Overlay */}
              {isScanning && (
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-padova-olive to-transparent animate-pulse"></div>
                  <div className="absolute inset-0 border-2 border-padova-olive/30 rounded-2xl"></div>
                </div>
              )}
            </div>

            {/* Cancel Button */}
            <button
              onClick={resetScan}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <X className="w-5 h-5 text-stone-600" />
            </button>
          </div>
        )}

        {/* Scan Result */}
        {scanResult && (
          <div className="space-y-6">
            {/* Success Message */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <div>
                <h3 className="font-semibold text-green-800">¡Producto encontrado!</h3>
                <p className="text-green-700 text-sm">Información del producto actualizada</p>
              </div>
            </div>

            {/* Product Details */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-stone-100 to-stone-200">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-50/50 to-stone-100/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-padova-olive/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ShoppingBag className="w-10 h-10 text-padova-olive" />
                    </div>
                    <p className="text-stone-500">{scanResult.name}</p>
                  </div>
                </div>
                
                {/* Collection Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-padova-olive text-white text-xs font-medium px-3 py-1 rounded-full">
                    {scanResult.collection}
                  </span>
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(scanResult.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      wishlist.includes(scanResult.id) 
                        ? 'text-red-500 fill-red-500' 
                        : 'text-stone-400'
                    }`} 
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-padova-navy font-playfair mb-1">
                      {scanResult.name}
                    </h2>
                    <p className="text-stone-600">{scanResult.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-padova-navy">
                      {formatPrice(scanResult.price)}
                    </div>
                    {scanResult.originalPrice && (
                      <div className="text-stone-400 line-through">
                        {formatPrice(scanResult.originalPrice)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold text-stone-700">{scanResult.rating}</span>
                  </div>
                  <span className="text-stone-500">({scanResult.reviews} reseñas)</span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    scanResult.availability === 'En Stock' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {scanResult.availability}
                  </span>
                </div>

                {/* Description */}
                <p className="text-stone-600 mb-6">
                  {scanResult.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-semibold text-padova-navy mb-3">Características</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {scanResult.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-stone-600">
                        <CheckCircle className="w-4 h-4 text-padova-olive" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Colors and Sizes */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-padova-navy mb-3">Colores Disponibles</h3>
                    <div className="flex flex-wrap gap-2">
                      {scanResult.colors.map((color, index) => (
                        <div key={index} className="flex items-center space-x-2 bg-stone-50 px-3 py-1 rounded-full">
                          <div className={`w-4 h-4 rounded-full border border-stone-200 ${
                            color === 'Natural' ? 'bg-stone-200' :
                            color === 'Verde Oliva' ? 'bg-padova-olive' :
                            color === 'Navy' ? 'bg-padova-navy' :
                            color === 'Coffee' ? 'bg-amber-800' :
                            'bg-white'
                          }`} />
                          <span className="text-sm text-stone-700">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-padova-navy mb-3">Tallas Disponibles</h3>
                    <div className="flex flex-wrap gap-2">
                      {scanResult.sizes.map((size, index) => (
                        <span key={index} className="bg-stone-50 text-stone-700 px-3 py-1 rounded-full text-sm">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={addToCloset}
                    className={`flex-1 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                      scanResult.inCloset
                        ? 'bg-green-100 text-green-800 border border-green-200'
                        : 'btn-secondary'
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                    <span>{scanResult.inCloset ? 'En tu Closet' : 'Agregar a Closet'}</span>
                  </button>
                  
                  <button className="flex-1 btn-primary">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>

            {/* New Scan Button */}
            <div className="text-center">
              <button
                onClick={resetScan}
                className="btn-secondary"
              >
                <ScanLine className="w-5 h-5 mr-2" />
                Escanear Otro Producto
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 