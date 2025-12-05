<template>
  <NuxtLayout>
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center overflow-hidden">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"></div>
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC00Yy0xLjEgMC0yIC45LTIgMnY0YzAgMS4xLjkgMiAyIDJoNGMxLjEgMCAyLS45IDItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div class="mb-8 inline-block">
          <div class="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
            ✨ Profesionales verificados a tu alcance
          </div>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Soluciones para tu hogar
          <span class="block text-blue-200">cuando las necesitas</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          ProHomeFix conecta tu hogar con los mejores profesionales en plomería, carpintería, limpieza y más. Calidad garantizada, siempre.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink 
            to="/marketplace"
            class="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition transform hover:scale-105 shadow-2xl flex items-center gap-2 text-lg"
          >
            Explorar Servicios
            <Icon name="heroicons:arrow-right" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink 
            to="/how"
            class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition backdrop-blur-sm text-lg"
          >
            ¿Cómo funciona?
          </NuxtLink>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
            <div class="text-blue-200 text-sm md:text-base">Profesionales</div>
          </div>
          <div class="text-center border-x border-white/20">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">10k+</div>
            <div class="text-blue-200 text-sm md:text-base">Servicios Completados</div>
          </div>
          <div class="text-center">
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">4.9</div>
            <div class="text-blue-200 text-sm md:text-base">Calificación Promedio</div>
          </div>
        </div>
      </div>

      <!-- Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="rgb(248, 250, 252)"/>
        </svg>
      </div>
    </section>

    <!-- Services Showcase -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Servicios Destacados
          </h2>
          <p class="text-xl text-slate-600 max-w-2xl mx-auto">
            Profesionales calificados en las áreas que más necesitas
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <NuxtLink
            v-for="service in services"
            :key="service.id"
            to="/marketplace"
            :class="[
              'group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer'
            ]"
          >
            <div :class="[service.color, 'w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform']">
              <Icon :name="service.icon" class="w-10 h-10 text-white" />
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">
              {{ service.name }}
            </h3>
            <p class="text-slate-600 mb-4">{{ service.description }}</p>
            <div class="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
              <span>Ver servicios</span>
              <Icon name="heroicons:arrow-right" class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </NuxtLink>
        </div>

        <div class="text-center">
          <NuxtLink 
            to="/marketplace"
            class="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            Ver Todos los Servicios
            <Icon name="heroicons:arrow-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, Rápido y Seguro
          </h2>
          <p class="text-xl text-slate-600 max-w-2xl mx-auto">
            Contrata profesionales en solo 3 pasos
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-12">
          <div class="relative">
            <div class="flex flex-col items-center text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                1
              </div>
              <Icon name="heroicons:magnifying-glass" class="w-16 h-16 text-blue-600 mb-4" />
              <h3 class="text-xl font-bold text-slate-900 mb-3">Busca el Servicio</h3>
              <p class="text-slate-600">
                Explora nuestro catálogo y encuentra el profesional perfecto para tu necesidad
              </p>
            </div>
            <div class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent -ml-6"></div>
          </div>

          <div class="relative">
            <div class="flex flex-col items-center text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                2
              </div>
              <Icon name="heroicons:calendar" class="w-16 h-16 text-purple-600 mb-4" />
              <h3 class="text-xl font-bold text-slate-900 mb-3">Agenda tu Cita</h3>
              <p class="text-slate-600">
                Selecciona fecha y hora, describe tu necesidad y confirma la solicitud
              </p>
            </div>
            <div class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-transparent -ml-6"></div>
          </div>

          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
              3
            </div>
            <Icon name="heroicons:check-circle" class="w-16 h-16 text-green-600 mb-4" />
            <h3 class="text-xl font-bold text-slate-900 mb-3">Recibe el Servicio</h3>
            <p class="text-slate-600">
              El profesional llega a tu domicilio y resuelve tu problema con garantía
            </p>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink 
            to="/how"
            class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
          >
            Ver más detalles
            <Icon name="heroicons:arrow-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ¿Por qué ProHomeFix?
          </h2>
          <p class="text-xl text-slate-600 max-w-2xl mx-auto">
            La plataforma de confianza para el cuidado de tu hogar
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(feature, index) in features" :key="index" class="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition text-center">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl mb-6">
              <Icon :name="feature.icon" class="w-10 h-10 text-blue-600" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">{{ feature.title }}</h3>
            <p class="text-slate-600 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof / Testimonials -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p class="text-xl text-slate-600">
            Miles de hogares satisfechos confían en ProHomeFix
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="bg-slate-50 rounded-2xl p-8">
            <div class="flex items-center gap-1 mb-4">
              <Icon v-for="j in 5" :key="j" name="heroicons:star-solid" class="w-5 h-5 text-yellow-400" />
            </div>
            <p class="text-slate-700 mb-6 leading-relaxed">
              "Excelente servicio, el profesional llegó puntual y resolvió el problema de manera rápida y eficiente. Totalmente recomendado."
            </p>
            <div class="flex items-center gap-3">
              <img 
                :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=Client${i}`" 
                class="w-12 h-12 rounded-full"
              />
              <div>
                <p class="font-bold text-slate-900">Cliente {{ i }}</p>
                <p class="text-sm text-slate-600">Querétaro, QRO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC00Yy0xLjEgMC0yIC45LTIgMnY0YzAgMS4xLjkgMiAyIDJoNGMxLjEgMCAyLS45IDItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Listo para comenzar?
        </h2>
        <p class="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
          Únete a miles de hogares que ya confían en ProHomeFix para el cuidado de su hogar. Solicita tu primer servicio hoy.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/marketplace"
            class="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition transform hover:scale-105 shadow-2xl text-lg"
          >
            Explorar Servicios
          </NuxtLink>
          <a 
            href="tel:442-123-4567"
            class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition backdrop-blur-sm text-lg flex items-center justify-center gap-2"
          >
            <Icon name="heroicons:phone" class="w-5 h-5" />
            Llamar ahora
          </a>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: 'default',
});

const services = [
  {
    id: 'plomeria',
    name: 'Plomería',
    icon: 'heroicons:wrench-screwdriver',
    description: 'Reparaciones y mantenimiento de instalaciones de agua y gas',
    color: 'bg-blue-500'
  },
  {
    id: 'carpinteria',
    name: 'Carpintería',
    icon: 'mingcute:hammer-fill',
    description: 'Muebles a medida, reparaciones y acabados profesionales',
    color: 'bg-amber-600'
  },
  {
    id: 'limpieza',
    name: 'Limpieza',
    icon: 'heroicons:sparkles',
    description: 'Limpieza profunda y mantenimiento para tu hogar u oficina',
    color: 'bg-green-500'
  }
]

const features = [
  { 
    icon: 'heroicons:shield-check', 
    title: 'Profesionales Verificados', 
    description: 'Todos nuestros técnicos pasan por un riguroso proceso de verificación y cuentan con certificaciones vigentes' 
  },
  { 
    icon: 'heroicons:clock', 
    title: 'Respuesta Inmediata', 
    description: 'Atención rápida y profesional. La mayoría de solicitudes son atendidas en menos de 24 horas' 
  },
  { 
    icon: 'heroicons:star', 
    title: 'Garantía de Calidad', 
    description: 'Todos los trabajos incluyen garantía. Si no estás satisfecho, trabajamos hasta que lo estés' 
  }
]
</script>