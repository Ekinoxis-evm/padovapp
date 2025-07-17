import Link from "next/link"
import { Shirt, ScanLine, Calendar, ShoppingBag, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen luxury-gradient">
      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-16 md:px-12 md:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white text-padova-olive-dark px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-stone-200">
            <Sparkles className="w-4 h-4" />
            <span>Bienvenida a la experiencia Padova</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair">
            <span className="text-padova-navy">
              Padova
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Lujo mediterráneo con artesanía colombiana. 
            <br className="hidden md:block" />
            Tu guardarropa digital te espera.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/scan"
              className="btn-primary flex items-center space-x-2"
            >
              <ScanLine className="w-5 h-5" />
              <span>Escanear Producto</span>
            </Link>
            
            <Link
              href="/shop"
              className="btn-secondary"
            >
              Explorar Colección
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="px-6 py-16 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-playfair text-padova-navy">
            Nuestras Colecciones
          </h2>
          <p className="text-center text-stone-600 mb-12 max-w-2xl mx-auto">
            Descubre la elegancia mediterránea en cada pieza, inspirada en los paisajes toscanos y la costa dorada.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* TUSCAN SOUL Collection */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-br from-stone-100 to-stone-200 p-8 h-64 flex flex-col justify-center items-center relative">
                <div className="absolute inset-0 padova-hero-gradient"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold font-playfair text-padova-navy mb-2">TUSCAN SOUL</h3>
                  <p className="text-stone-600 mb-4">Alma toscana, corazón colombiano</p>
                  <div className="inline-flex items-center space-x-1 text-padova-olive-dark text-sm font-medium">
                    <span>Nueva colección</span>
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-stone-600 mb-4">
                  Inspirada en los paisajes toscanos, esta colección captura la esencia mediterránea con siluetas fluidas y colores naturales.
                </p>
                <Link href="/shop" className="text-padova-olive-dark font-semibold hover:text-padova-navy transition-colors">
                  Ver colección →
                </Link>
              </div>
            </div>

            {/* COSTA D'ORO Collection */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 h-64 flex flex-col justify-center items-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 to-amber-100/30"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold font-playfair text-padova-navy mb-2">COSTA D'ORO</h3>
                  <p className="text-stone-600 mb-4">Costa dorada, elegancia atemporal</p>
                  <div className="inline-flex items-center space-x-1 text-padova-olive-dark text-sm font-medium">
                    <span>Últimas unidades</span>
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-stone-600 mb-4">
                  Piezas doradas que reflejan la calidez del Mediterráneo, perfectas para momentos especiales y ocasiones únicas.
                </p>
                <Link href="/shop" className="text-padova-olive-dark font-semibold hover:text-padova-navy transition-colors">
                  Ver colección →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-16 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair text-padova-navy">
            Tu experiencia Padova
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/closet" className="group">
              <div className="card p-6 text-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-padova-olive/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-padova-olive group-hover:text-white transition-colors">
                  <Shirt className="w-8 h-8 text-padova-olive group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-lg text-padova-navy mb-2">Mi Closet</h3>
                <p className="text-stone-600 text-sm">
                  Organiza tu guardarropa digital y descubre nuevas combinaciones
                </p>
              </div>
            </Link>

            <Link href="/scan" className="group">
              <div className="card p-6 text-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-padova-olive/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-padova-olive group-hover:text-white transition-colors">
                  <ScanLine className="w-8 h-8 text-padova-olive group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-lg text-padova-navy mb-2">Escanear</h3>
                <p className="text-stone-600 text-sm">
                  Escanea productos para obtener información instantánea y precios
                </p>
              </div>
            </Link>

            <Link href="/events" className="group">
              <div className="card p-6 text-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-padova-olive/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-padova-olive group-hover:text-white transition-colors">
                  <Calendar className="w-8 h-8 text-padova-olive group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-lg text-padova-navy mb-2">Eventos</h3>
                <p className="text-stone-600 text-sm">
                  Únete a eventos exclusivos y experiencias de moda únicas
                </p>
              </div>
            </Link>

            <Link href="/shop" className="group">
              <div className="card p-6 text-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-padova-olive/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-padova-olive group-hover:text-white transition-colors">
                  <ShoppingBag className="w-8 h-8 text-padova-olive group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-lg text-padova-navy mb-2">Tienda</h3>
                <p className="text-stone-600 text-sm">
                  Explora nuestras colecciones y encuentra tu próxima pieza favorita
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
