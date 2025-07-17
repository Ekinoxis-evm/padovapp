import Link from "next/link"
import { Shirt, ScanLine, Calendar, ShoppingBag, Sparkles, ArrowRight, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Visual Design */}
      <section className="relative luxury-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-padova-olive/5"></div>
        <div className="relative px-6 pt-20 pb-24 md:px-12 md:pt-32 md:pb-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm text-padova-olive-dark px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg border border-white/30">
              <Star className="w-4 h-4 fill-current" />
              <span>Experiencia Premium Padova</span>
              <Sparkles className="w-4 h-4" />
            </div>
            
            {/* Main Title with Enhanced Typography */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-playfair leading-none">
              <span className="text-padova-navy block">
                Padova
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-light text-padova-olive block mt-2">
                Luxury Fashion
              </span>
            </h1>
            
            {/* Enhanced Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-stone-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Lujo mediterráneo con artesanía colombiana.
              <br className="hidden md:block" />
              <span className="text-padova-olive-dark font-medium">Tu guardarropa digital te espera.</span>
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href="/scan"
                className="btn-primary group text-lg px-8 py-4"
              >
                <ScanLine className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Escanear Producto</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/shop"
                className="btn-secondary text-lg px-8 py-4"
              >
                Explorar Colección
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-stone-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-padova-olive rounded-full"></div>
                <span>Made in Colombia</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-padova-olive rounded-full"></div>
                <span>Calidad Premium</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-padova-olive rounded-full"></div>
                <span>Diseño Mediterráneo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview with Enhanced Design */}
      <section className="px-6 py-20 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair text-padova-navy">
              Nuestras Colecciones
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Descubre la elegancia mediterránea en cada pieza, inspirada en los paisajes toscanos y la costa dorada.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* TUSCAN SOUL Collection - Enhanced */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 bg-white">
              <div className="relative bg-gradient-to-br from-stone-50 to-stone-100 p-12 h-80 flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-padova-cream/30 to-padova-olive/10 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute top-4 right-4 bg-white/90 text-padova-olive-dark px-3 py-1 rounded-full text-xs font-semibold">
                  NUEVA
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl md:text-4xl font-bold font-playfair text-padova-navy mb-4">TUSCAN SOUL</h3>
                  <p className="text-lg text-stone-600 mb-6">Alma toscana, corazón colombiano</p>
                  <div className="inline-flex items-center space-x-2 text-padova-olive-dark font-medium">
                    <Sparkles className="w-5 h-5" />
                    <span>Colección Exclusiva</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-stone-600 mb-6 text-lg leading-relaxed">
                  Inspirada en los paisajes toscanos, esta colección captura la esencia mediterránea con siluetas fluidas y colores naturales que celebran la artesanía colombiana.
                </p>
                <Link href="/shop" className="inline-flex items-center space-x-2 text-padova-olive-dark font-semibold hover:text-padova-navy transition-colors group">
                  <span>Ver colección</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* COSTA D&apos;ORO Collection - Enhanced */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 bg-white">
              <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 p-12 h-80 flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/40 to-amber-100/40 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute top-4 right-4 bg-amber-100/90 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
                  ÚLTIMAS
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl md:text-4xl font-bold font-playfair text-padova-navy mb-4">COSTA D&apos;ORO</h3>
                  <p className="text-lg text-stone-600 mb-6">Costa dorada, elegancia atemporal</p>
                  <div className="inline-flex items-center space-x-2 text-padova-olive-dark font-medium">
                    <ShoppingBag className="w-5 h-5" />
                    <span>Piezas Limitadas</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-stone-600 mb-6 text-lg leading-relaxed">
                  Piezas doradas que reflejan la calidez del Mediterráneo, perfectas para momentos especiales y ocasiones únicas con el toque distintivo de la moda colombiana.
                </p>
                <Link href="/shop" className="inline-flex items-center space-x-2 text-padova-olive-dark font-semibold hover:text-padova-navy transition-colors group">
                  <span>Ver colección</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Grid */}
      <section className="px-6 py-20 md:px-12 luxury-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-padova-navy">
              Tu experiencia Padova
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Herramientas premium para una experiencia de moda sin igual
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <Link href="/closet" className="group">
              <div className="card p-8 text-center group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-padova-olive/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-padova-olive group-hover:text-white transition-all duration-300">
                  <Shirt className="w-10 h-10 text-padova-olive group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-xl text-padova-navy mb-3">Mi Closet</h3>
                <p className="text-stone-600 leading-relaxed">
                  Organiza tu guardarropa digital y descubre nuevas combinaciones con IA
                </p>
              </div>
            </Link>

            <Link href="/scan" className="group">
              <div className="card p-8 text-center group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-padova-olive/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-padova-olive group-hover:text-white transition-all duration-300">
                  <ScanLine className="w-10 h-10 text-padova-olive group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-xl text-padova-navy mb-3">Escanear</h3>
                <p className="text-stone-600 leading-relaxed">
                  Escanea productos para información instantánea y comparación de precios
                </p>
              </div>
            </Link>

            <Link href="/events" className="group">
              <div className="card p-8 text-center group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-padova-olive/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-padova-olive group-hover:text-white transition-all duration-300">
                  <Calendar className="w-10 h-10 text-padova-olive group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-xl text-padova-navy mb-3">Eventos</h3>
                <p className="text-stone-600 leading-relaxed">
                  Únete a eventos exclusivos y experiencias de moda premium
                </p>
              </div>
            </Link>

            <Link href="/shop" className="group">
              <div className="card p-8 text-center group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-padova-olive/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-padova-olive group-hover:text-white transition-all duration-300">
                  <ShoppingBag className="w-10 h-10 text-padova-olive group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-xl text-padova-navy mb-3">Tienda</h3>
                <p className="text-stone-600 leading-relaxed">
                  Explora colecciones exclusivas con recomendaciones personalizadas
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile App Spacing */}
      <div className="lg:hidden h-20"></div>
    </div>
  )
}
