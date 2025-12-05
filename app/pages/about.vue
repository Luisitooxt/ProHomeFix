<template>
  <NuxtLayout>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC00Yy0xLjEgMC0yIC45LTIgMnY0YzAgMS4xLjkgMiAyIDJoNGMxLjEgMCAyLS45IDItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl mb-6">
          <Icon name="heroicons:building-office" class="w-12 h-12 text-white" />
        </div>
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
          Sobre ProHomeFix
        </h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Conectando hogares con profesionales de confianza desde 2020
        </p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <Icon name="heroicons:rocket-launch" class="w-8 h-8 text-blue-600" />
            </div>
            <h2 class="text-4xl font-bold text-slate-900 mb-6">Nuestra Misión</h2>
            <p class="text-lg text-slate-700 leading-relaxed mb-4">
              Facilitar el acceso a servicios domésticos profesionales y confiables, 
              transformando la manera en que las personas cuidan y mantienen sus hogares.
            </p>
            <p class="text-lg text-slate-700 leading-relaxed">
              Creemos que cada hogar merece atención profesional de calidad, por eso 
              conectamos a los mejores técnicos con las familias que los necesitan, 
              garantizando transparencia, seguridad y excelencia en cada servicio.
            </p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 border-2 border-blue-100">
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:check" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="font-bold text-slate-900 mb-2">Calidad Garantizada</h3>
                  <p class="text-slate-700">Profesionales verificados y certificados</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:check" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="font-bold text-slate-900 mb-2">Confianza Total</h3>
                  <p class="text-slate-700">Transparencia en precios y procesos</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:check" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="font-bold text-slate-900 mb-2">Atención Rápida</h3>
                  <p class="text-slate-700">Respuesta en menos de 24 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-12 border-2 border-purple-100">
            <div class="text-center">
              <Icon name="heroicons:light-bulb" class="w-20 h-20 text-purple-600 mx-auto mb-6" />
              <blockquote class="text-2xl font-semibold text-slate-900 mb-4">
                "Ser la plataforma líder en México para servicios domésticos profesionales"
              </blockquote>
              <p class="text-slate-700 leading-relaxed">
                Innovando constantemente para ofrecer la mejor experiencia tanto 
                a nuestros clientes como a nuestros profesionales asociados.
              </p>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
              <Icon name="heroicons:eye" class="w-8 h-8 text-purple-600" />
            </div>
            <h2 class="text-4xl font-bold text-slate-900 mb-6">Nuestra Visión</h2>
            <p class="text-lg text-slate-700 leading-relaxed mb-4">
              Convertirnos en la primera opción a nivel nacional cuando alguien necesita 
              un servicio para su hogar, reconocidos por nuestra calidad, confiabilidad 
              y compromiso con la excelencia.
            </p>
            <p class="text-lg text-slate-700 leading-relaxed">
              Aspiramos a crear un ecosistema donde profesionales y clientes puedan 
              conectar de manera simple, segura y eficiente, elevando los estándares 
              de la industria de servicios domésticos.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nuestra Historia
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            De una idea simple a una plataforma que transforma hogares
          </p>
        </div>

        <div class="relative">
          <!-- Timeline -->
          <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200"></div>
          
          <div class="space-y-12">
            <!-- 2020 -->
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="md:text-right">
                <div class="bg-white rounded-2xl p-8 shadow-md inline-block">
                  <h3 class="text-2xl font-bold text-slate-900 mb-3">2020 - El Comienzo</h3>
                  <p class="text-slate-700 leading-relaxed">
                    ProHomeFix nace en Querétaro con la visión de conectar profesionales 
                    del hogar con familias que necesitan servicios confiables. Comenzamos 
                    con 15 profesionales y un compromiso: calidad garantizada.
                  </p>
                </div>
              </div>
              <div class="flex justify-center md:justify-start">
                <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                  2020
                </div>
              </div>
            </div>

            <!-- 2021 -->
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="md:order-2">
                <div class="bg-white rounded-2xl p-8 shadow-md inline-block">
                  <h3 class="text-2xl font-bold text-slate-900 mb-3">2021 - Crecimiento</h3>
                  <p class="text-slate-700 leading-relaxed">
                    Alcanzamos los 100 profesionales verificados y más de 5,000 servicios 
                    completados. Expandimos nuestras categorías incluyendo electricidad, 
                    jardinería y pintura.
                  </p>
                </div>
              </div>
              <div class="md:order-1 flex justify-center md:justify-end">
                <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                  2021
                </div>
              </div>
            </div>

            <!-- 2022 -->
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="md:text-right">
                <div class="bg-white rounded-2xl p-8 shadow-md inline-block">
                  <h3 class="text-2xl font-bold text-slate-900 mb-3">2022 - Expansión</h3>
                  <p class="text-slate-700 leading-relaxed">
                    Lanzamos nuestra plataforma digital completamente renovada. Llegamos 
                    a 300+ profesionales y superamos los 15,000 servicios completados con 
                    una calificación promedio de 4.8 estrellas.
                  </p>
                </div>
              </div>
              <div class="flex justify-center md:justify-start">
                <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                  2022
                </div>
              </div>
            </div>

            <!-- 2024 -->
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div class="md:order-2">
                <div class="bg-white rounded-2xl p-8 shadow-md inline-block">
                  <h3 class="text-2xl font-bold text-slate-900 mb-3">2024 - Liderazgo</h3>
                  <p class="text-slate-700 leading-relaxed">
                    Hoy contamos con más de 500 profesionales verificados, hemos completado 
                    más de 10,000 servicios y mantenemos una calificación de 4.9 estrellas. 
                    Somos la plataforma de confianza en Querétaro.
                  </p>
                </div>
              </div>
              <div class="md:order-1 flex justify-center md:justify-end">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                  2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nuestros Valores
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            Los principios que guían cada decisión que tomamos
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
              <Icon name="heroicons:shield-check" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Confianza</h3>
            <p class="text-slate-700">
              Cada profesional es verificado y cada servicio está garantizado
            </p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-2xl mb-6">
              <Icon name="heroicons:star" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Excelencia</h3>
            <p class="text-slate-700">
              Buscamos la perfección en cada detalle y en cada interacción
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-2xl mb-6">
              <Icon name="heroicons:heart" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Compromiso</h3>
            <p class="text-slate-700">
              Con nuestros clientes, profesionales y la comunidad que servimos
            </p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-lg transition">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-2xl mb-6">
              <Icon name="heroicons:light-bulb" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Innovación</h3>
            <p class="text-slate-700">
              Mejoramos constantemente para ofrecer la mejor experiencia
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nuestro Equipo
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            Las personas detrás de ProHomeFix
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div v-for="member in team" :key="member.name" class="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition">
            <img 
              :src="member.avatar" 
              :alt="member.name"
              class="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 class="text-xl font-bold text-slate-900 mb-1">{{ member.name }}</h3>
            <p class="text-blue-600 font-semibold mb-3">{{ member.role }}</p>
            <p class="text-slate-600 text-sm leading-relaxed">{{ member.bio }}</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h3 class="text-3xl font-bold mb-4">Únete a Nuestro Equipo</h3>
          <p class="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            ¿Eres un profesional apasionado por lo que haces? Únete a nuestra red de expertos
          </p>
          <NuxtLink 
            to="/marketplace"
            class="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition"
          >
            Conviértete en Profesional
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ProHomeFix en Números
          </h2>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold text-blue-600 mb-2">500+</div>
            <p class="text-slate-700 font-semibold">Profesionales Verificados</p>
          </div>
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold text-purple-600 mb-2">10k+</div>
            <p class="text-slate-700 font-semibold">Servicios Completados</p>
          </div>
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold text-green-600 mb-2">4.9</div>
            <p class="text-slate-700 font-semibold">Calificación Promedio</p>
          </div>
          <div class="text-center">
            <div class="text-5xl md:text-6xl font-bold text-orange-600 mb-2">98%</div>
            <p class="text-slate-700 font-semibold">Clientes Satisfechos</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC00Yy0xLjEgMC0yIC45LTIgMnY0YzAgMS4xLjkgMiAyIDJoNGMxLjEgMCAyLS45IDItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Listo para experimentar la diferencia?
        </h2>
        <p class="text-xl text-blue-100 mb-10 leading-relaxed">
          Descubre por qué miles de hogares confían en ProHomeFix
        </p>
        <NuxtLink 
          to="/marketplace"
          class="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition transform hover:scale-105 shadow-2xl text-lg"
        >
          Explorar Servicios
        </NuxtLink>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: 'default',
});

useHead({
  title: 'Sobre Nosotros - ProHomeFix',
  meta: [
    {
      name: 'description',
      content: 'Conoce la historia, misión y valores de ProHomeFix. Conectando hogares con profesionales de confianza desde 2020.'
    }
  ]
});

const team = [
  {
    name: 'María González',
    role: 'CEO & Fundadora',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    bio: 'Visionaria con 15 años de experiencia en tecnología y servicios. Apasionada por conectar personas.'
  },
  {
    name: 'Carlos Ramírez',
    role: 'Director de Operaciones',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    bio: 'Experto en logística y procesos. Garantiza la calidad de cada servicio en nuestra plataforma.'
  },
  {
    name: 'Ana Martínez',
    role: 'Directora de Experiencia',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
    bio: 'Especialista en customer success. Se asegura de que cada cliente tenga una experiencia excepcional.'
  }
]
</script>