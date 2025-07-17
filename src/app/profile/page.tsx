'use client'

import { useState } from "react"
import { User, Camera, Edit, Shield, Bell, CreditCard, MapPin, Phone, Mail } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="min-h-screen luxury-gradient p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-playfair text-stone-800 mb-2">
            Mi Perfil
          </h1>
          <p className="text-stone-600">
            Gestiona tu información personal y preferencias
          </p>
        </div>

        {/* Profile Card */}
        <div className="card p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Avatar Section */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
                  <User className="w-16 h-16 text-amber-700" />
                </div>
                <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
                  <Camera className="w-4 h-4 text-stone-600" />
                </button>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-stone-800 mb-1">María Elena Rodríguez</h2>
                  <p className="text-stone-600">Cliente VIP • Miembro desde 2023</p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="btn-secondary"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  {isEditing ? 'Cancelar' : 'Editar'}
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-stone-500" />
                    <div>
                      <p className="text-sm text-stone-500">Email</p>
                      <p className="font-medium">maria.rodriguez@email.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-stone-500" />
                    <div>
                      <p className="text-sm text-stone-500">Teléfono</p>
                      <p className="font-medium">+57 300 123 4567</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-stone-500" />
                    <div>
                      <p className="text-sm text-stone-500">Ubicación</p>
                      <p className="font-medium">Cali, Colombia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-stone-500" />
                    <div>
                      <p className="text-sm text-stone-500">NIT</p>
                      <p className="font-medium">123.456.789-0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Security Settings */}
          <div className="card p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-red-100 to-red-50 w-10 h-10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-stone-800">Seguridad</h3>
                <p className="text-sm text-stone-600">Configuración de seguridad</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-stone-100">
                <div>
                  <p className="font-medium text-stone-800">Verificación de email</p>
                  <p className="text-sm text-stone-600">Verificado ✓</p>
                </div>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                  Activo
                </div>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-stone-100">
                <div>
                  <p className="font-medium text-stone-800">Verificación SMS</p>
                  <p className="text-sm text-stone-600">Verificado ✓</p>
                </div>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                  Activo
                </div>
              </div>

              <button className="w-full text-left py-3 text-amber-700 font-medium hover:text-amber-800 transition-colors">
                Cambiar contraseña →
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="card p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 w-10 h-10 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-stone-800">Notificaciones</h3>
                <p className="text-sm text-stone-600">Preferencias de notificación</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-stone-800">Eventos nuevos</p>
                  <p className="text-sm text-stone-600">Recibir alertas de eventos</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-stone-800">Nuevos productos</p>
                  <p className="text-sm text-stone-600">Nuevas colecciones</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-stone-800">Ofertas especiales</p>
                  <p className="text-sm text-stone-600">Promociones exclusivas</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="card p-6 mt-6">
          <h3 className="font-semibold text-lg text-stone-800 mb-6">Preferencias de Estilo</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Talla preferida
              </label>
              <select className="w-full px-3 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>XS</option>
                <option selected>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Estilo preferido
              </label>
              <select className="w-full px-3 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Casual</option>
                <option selected>Elegante</option>
                <option>Formal</option>
                <option>Bohemio</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Colores favoritos
              </label>
              <select className="w-full px-3 py-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Neutrales</option>
                <option selected>Tierra y dorados</option>
                <option>Pasteles</option>
                <option>Vibrantes</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 