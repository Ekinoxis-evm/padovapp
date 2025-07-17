"use client"

import { useState } from "react"
import { Calendar, MapPin, Users, Clock, Star, Heart, ArrowRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Lanzamiento Colección TUSCAN SOUL",
    description: "Descubre nuestra nueva colección inspirada en los paisajes toscanos y la artesanía mediterránea.",
    date: "2024-02-15",
    time: "18:00",
    location: "Showroom Padova, Cali",
    address: "Av. 9A Norte #16-46, Granada, Cali",
    capacity: 50,
    registered: 32,
    price: 0,
    category: "Lanzamiento",
    featured: true,
    rating: 4.9,
    reviews: 24,
    image: "tuscan-soul-launch"
  },
  {
    id: 2,
    title: "Trunk Show Exclusivo COSTA D'ORO",
    description: "Experiencia VIP con acceso anticipado a piezas únicas de nuestra colección dorada.",
    date: "2024-02-22",
    time: "19:30",
    location: "Hotel Intercontinental Cali",
    address: "Av. Colombia #2-72, Cali",
    capacity: 30,
    registered: 18,
    price: 150000,
    category: "VIP",
    featured: false,
    rating: 5.0,
    reviews: 12,
    image: "costa-doro-trunk"
  },
  {
    id: 3,
    title: "Taller de Styling Personal",
    description: "Aprende a crear looks únicos con piezas Padova. Incluye sesión de styling personalizada.",
    date: "2024-03-01",
    time: "15:00",
    location: "Estudio Padova",
    address: "Calle 70 Norte #5B-08, Cali",
    capacity: 15,
    registered: 8,
    price: 200000,
    category: "Taller",
    featured: false,
    rating: 4.8,
    reviews: 15,
    image: "styling-workshop"
  },
  {
    id: 4,
    title: "Fashion Brunch Mediterráneo",
    description: "Experiencia gastronómica mediterránea mientras descubres nuestras últimas creaciones.",
    date: "2024-03-08",
    time: "11:00",
    location: "Restaurante Terracota",
    address: "Zona Rosa, Cali",
    capacity: 40,
    registered: 25,
    price: 120000,
    category: "Social",
    featured: true,
    rating: 4.7,
    reviews: 18,
    image: "fashion-brunch"
  }
]

const categories = ["Todos", "Lanzamiento", "VIP", "Taller", "Social"]

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (eventId: number) => {
    setWishlist(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    )
  }

  const filteredEvents = events.filter(event => 
    selectedCategory === "Todos" || event.category === selectedCategory
  )

  const formatPrice = (price: number) => {
    if (price === 0) return "Gratis"
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('es-CO', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  const getAvailableSpots = (capacity: number, registered: number) => {
    return capacity - registered
  }

  return (
    <div className="min-h-screen bg-padova-cream pt-4 pb-24 lg:pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-padova-navy font-playfair mb-2">
            Eventos Padova
          </h1>
          <p className="text-stone-600">
            Únete a experiencias únicas de moda y descubre nuestro mundo mediterráneo
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-padova-olive text-white shadow-md"
                    : "bg-white text-stone-600 hover:bg-stone-50 hover:text-padova-navy border border-stone-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Events */}
        {selectedCategory === "Todos" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-padova-navy font-playfair mb-6">
              Eventos Destacados
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {events.filter(event => event.featured).map((event) => (
                <div key={event.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Event Image */}
                  <div className="relative h-48 bg-gradient-to-br from-stone-100 to-stone-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-stone-50/50 to-stone-100/50 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-padova-olive/10 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Calendar className="w-8 h-8 text-padova-olive" />
                        </div>
                        <p className="text-stone-500 text-sm">{event.image}</p>
                      </div>
                    </div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-padova-olive text-white text-xs font-medium px-3 py-1 rounded-full">
                        Destacado
                      </span>
                    </div>

                    {/* Wishlist */}
                    <button
                      onClick={() => toggleWishlist(event.id)}
                      className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Heart 
                        className={`w-4 h-4 ${
                          wishlist.includes(event.id) 
                            ? 'text-red-500 fill-red-500' 
                            : 'text-stone-400'
                        }`} 
                      />
                    </button>
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-padova-olive bg-padova-olive/10 px-2 py-1 rounded-full">
                        {event.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm text-stone-600">{event.rating}</span>
                        <span className="text-sm text-stone-400">({event.reviews})</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-padova-navy mb-2 group-hover:text-padova-olive transition-colors">
                      {event.title}
                    </h3>
                    
                    <p className="text-stone-600 mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-stone-600">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-stone-600">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-stone-600">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-stone-600">
                        <Users className="w-4 h-4" />
                        <span>{getAvailableSpots(event.capacity, event.registered)} cupos disponibles</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-padova-navy">
                        {formatPrice(event.price)}
                      </div>
                      <button className="btn-primary flex items-center space-x-2">
                        <span>Registrarse</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Events */}
        <div>
          <h2 className="text-2xl font-bold text-padova-navy font-playfair mb-6">
            {selectedCategory === "Todos" ? "Todos los Eventos" : `Eventos de ${selectedCategory}`}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Event Image */}
                <div className="relative h-40 bg-gradient-to-br from-stone-100 to-stone-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-50/50 to-stone-100/50 flex items-center justify-center">
                    <div className="text-center">
                      <Calendar className="w-8 h-8 text-padova-olive mx-auto mb-1" />
                      <p className="text-stone-500 text-xs">{event.image}</p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      event.category === 'VIP' ? 'bg-yellow-100 text-yellow-800' :
                      event.category === 'Lanzamiento' ? 'bg-padova-olive text-white' :
                      event.category === 'Taller' ? 'bg-blue-100 text-blue-800' :
                      'bg-stone-100 text-stone-800'
                    }`}>
                      {event.category}
                    </span>
                  </div>

                  {/* Wishlist */}
                  <button
                    onClick={() => toggleWishlist(event.id)}
                    className="absolute top-3 right-3 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Heart 
                      className={`w-3 h-3 ${
                        wishlist.includes(event.id) 
                          ? 'text-red-500 fill-red-500' 
                          : 'text-stone-400'
                      }`} 
                    />
                  </button>
                </div>

                {/* Event Details */}
                <div className="p-4">
                  <h3 className="font-semibold text-padova-navy mb-1 line-clamp-2 group-hover:text-padova-olive transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-stone-600 text-sm mb-3 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="space-y-1 mb-3 text-xs text-stone-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{getAvailableSpots(event.capacity, event.registered)} cupos</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-bold text-padova-navy">
                      {formatPrice(event.price)}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-stone-600">{event.rating}</span>
                    </div>
                  </div>

                  <button className="w-full btn-primary text-sm">
                    Registrarse
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-stone-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-stone-600 mb-2">
              No hay eventos disponibles
            </h3>
            <p className="text-stone-500">
              Intenta seleccionar una categoría diferente
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 