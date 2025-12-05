<template>
  <NuxtLayout>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    

    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
        <Icon name="heroicons:question-mark-circle" class="w-12 h-12 text-blue-600" />
      </div>
      <h1 class="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
        ¿Cómo funciona
        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          ProHomeFix?
        </span>
      </h1>
      <p class="text-xl text-slate-600 max-w-2xl mx-auto">
        Conectar con profesionales de confianza nunca fue tan fácil. Sigue estos simples pasos.
      </p>
    </section>

    <!-- Steps Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="space-y-20">
        <!-- Step 1 -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div :class="['order-2 md:order-1']">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-2xl font-bold text-2xl mb-6">
              1
            </div>
            <h2 class="text-3xl font-bold text-slate-900 mb-4">
              Busca el servicio que necesitas
            </h2>
            <p class="text-lg text-slate-600 mb-6">
              Explora nuestro catálogo de servicios domésticos. Desde plomería hasta limpieza, 
              tenemos profesionales verificados listos para ayudarte.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle-solid" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span class="text-slate-700">Filtra por categoría, precio y ubicación</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle-solid" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span class="text-slate-700">Lee reseñas de otros clientes</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle-solid" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span class="text-slate-700">Compara precios y disponibilidad</span>
              </li>
            </ul>
          </div>
          <div class="order-1 md:order-2">
            <div class="bg-white rounded-2xl shadow-xl p-8">
              <div class="relative">
                <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200">
                  <Icon name="heroicons:magnifying-glass" class="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <div class="space-y-3">
                    <div class="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3">
                      <Icon name="heroicons:wrench-screwdriver" class="w-8 h-8 text-blue-500" />
                      <div class="flex-1">
                        <p class="font-semibold text-slate-900">Plomería</p>
                        <p class="text-sm text-slate-600">45 servicios</p>
                      </div>
                    </div>
                    <div class="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3">
                      <Icon name="heroicons:sparkles" class="w-8 h-8 text-green-500" />
                      <div class="flex-1">
                        <p class="font-semibold text-slate-900">Limpieza</p>
                        <p class="text-sm text-slate-600">38 servicios</p>
                      </div>
                    </div>
                    <div class="bg-white rounded-lg p-4 shadow-sm flex items-center gap-3">
                      <Icon name="heroicons:hammer" class="w-8 h-8 text-amber-600" />
                      <div class="flex-1">
                        <p class="font-semibold text-slate-900">Carpintería</p>
                        <p class="text-sm text-slate-600">32 servicios</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="bg-white rounded-2xl shadow-xl p-8">
              <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
                <div class="bg-white rounded-xl p-6 shadow-lg mb-4">
                  <div class="flex items-center gap-4 mb-4">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Provider" 
                      class="w-16 h-16 rounded-full"
                    />
                    <div class="flex-1">
                      <p class="font-bold text-slate-900">Juan Pérez</p>
                      <div class="flex items-center gap-1">
                        <Icon name="heroicons:star-solid" class="w-4 h-4 text-yellow-400" />
                        <span class="text-sm font-semibold">4.9</span>
                        <span class="text-sm text-slate-600">(234 reseñas)</span>
                      </div>
                    </div>
                    <Icon name="heroicons:check-badge-solid" class="w-8 h-8 text-green-500" />
                  </div>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between">
                      <span class="text-slate-600">Precio desde:</span>
                      <span class="font-bold text-slate-900">$500</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-slate-600">Disponibilidad:</span>
                      <span class="font-semibold text-green-600">Hoy</span>
                    </div>
                  </div>
                </div>
                <button class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
          <div>
            <div class="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-2xl font-bold text-2xl mb-6">
              2
            </div>
            <h2 class="text-3xl font-bold text-slate-900 mb-4">
              Revisa el perfil del profesional
            </h2>
            <p class="text-lg text-slate-600 mb-6">
              Conoce a fondo al profesional antes de contratar. Ve su experiencia, 
              calificaciones y trabajos anteriores.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle-solid" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span class="text-slate-700">Perfiles verificados con documentación</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle-solid" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span class="text-slate-700">Calificaciones reales de clientes anteriores</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle-solid" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span class="text-slate-700">Galería de trabajos completados</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-2xl font-bold text-2xl mb-6">
              3
            </div>
            <h2 class="text-3xl font-bold text-slate-900 mb-4">
              Solicita el servicio
            </h2>
            <p class="text-lg text-slate-600 mb-6">
              Completa un formulario simple con los detalles de tu solicitud. 
              El profesional se pondrá en contacto contigo rápidamente.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle-solid" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span class="text-slate-700">Elige fecha y hora preferidas</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle-solid" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span class="text-slate-700">Describe el trabajo a realizar</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle-solid" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span class="text-slate-700">Recibe confirmación inmediata</span>
              </li>
            </ul>
          </div>
          <div class="order-1 md:order-2">
            <div class="bg-white rounded-2xl shadow-xl p-8">
              <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200">
                <Icon name="heroicons:calendar" class="w-12 h-12 text-green-600 mb-4" />
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
                    <div class="bg-white rounded-lg p-3 border border-slate-200">
                      <p class="text-slate-400">Tu nombre completo</p>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">Fecha</label>
                    <div class="bg-white rounded-lg p-3 border border-slate-200">
                      <p class="text-slate-400">Selecciona una fecha</p>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-slate-700 mb-2">Detalles</label>
                    <div class="bg-white rounded-lg p-3 border border-slate-200 h-20">
                      <p class="text-slate-400">Describe el problema...</p>
                    </div>
                  </div>
                  <button class="w-full bg-green-600 text-white py-3 rounded-lg font-semibold">
                    Enviar Solicitud
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="bg-white rounded-2xl shadow-xl p-8">
              <div class="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 border-2 border-orange-200">
                <div class="text-center mb-6">
                  <div class="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                    <Icon name="heroicons:check" class="w-12 h-12 text-green-600" />
                  </div>
                  <h3 class="text-2xl font-bold text-slate-900 mb-2">¡Servicio Completado!</h3>
                  <p class="text-slate-600">Trabajo realizado el 15 de Dic, 2024</p>
                </div>
                <div class="bg-white rounded-lg p-4 mb-4">
                  <div class="flex items-center justify-between mb-3">
                    <span class="text-slate-700">Total pagado:</span>
                    <span class="text-2xl font-bold text-slate-900">$500</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-slate-600">
                    <Icon name="heroicons:check-badge-solid" class="w-4 h-4 text-green-500" />
                    <span>Pago procesado de forma segura</span>
                  </div>
                </div>
                <div class="text-center">
                  <p class="text-sm text-slate-600 mb-3">¿Cómo fue tu experiencia?</p>
                  <div class="flex justify-center gap-2">
                    <Icon name="heroicons:star-solid" class="w-8 h-8 text-yellow-400" />
                    <Icon name="heroicons:star-solid" class="w-8 h-8 text-yellow-400" />
                    <Icon name="heroicons:star-solid" class="w-8 h-8 text-yellow-400" />
                    <Icon name="heroicons:star-solid" class="w-8 h-8 text-yellow-400" />
                    <Icon name="heroicons:star-solid" class="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-2xl font-bold text-2xl mb-6">
              4
            </div>
            <h2 class="text-3xl font-bold text-slate-900 mb-4">
              Recibe el servicio y califica
            </h2>
            <p class="text-lg text-slate-600 mb-6">
              El profesional llega a tu domicilio en la fecha acordada. Una vez completado 
              el trabajo, puedes calificar la experiencia.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle-solid" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span class="text-slate-700">Pago seguro después del servicio</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle-solid" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span class="text-slate-700">Garantía en todos los trabajos</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle-solid" class="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <span class="text-slate-700">Califica y deja tu opinión</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">
            Beneficios adicionales
          </h2>
          <p class="text-xl text-slate-600">
            Todo lo que necesitas para contratar con confianza
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-slate-50 rounded-2xl p-8 text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Icon name="heroicons:shield-check" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">100% Seguro</h3>
            <p class="text-slate-600">
              Todos los profesionales están verificados y cuentan con seguro de responsabilidad
            </p>
          </div>

          <div class="bg-slate-50 rounded-2xl p-8 text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Icon name="heroicons:currency-dollar" class="w-8 h-8 text-green-600" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Precios Justos</h3>
            <p class="text-slate-600">
              Compara precios transparentes sin costos ocultos ni sorpresas
            </p>
          </div>

          <div class="bg-slate-50 rounded-2xl p-8 text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <Icon name="heroicons:chat-bubble-left-right" class="w-8 h-8 text-purple-600" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">Soporte 24/7</h3>
            <p class="text-slate-600">
              Nuestro equipo está disponible para ayudarte en cualquier momento
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
        <h2 class="text-4xl font-bold mb-6">
          ¿Listo para empezar?
        </h2>
        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Miles de hogares ya confían en ProHomeFix. Únete hoy y descubre la forma más fácil de contratar servicios domésticos.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/marketplace" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition transform hover:scale-105">
            Explorar Servicios
          </NuxtLink>
          <NuxtLink to="/contact" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition">
            Contáctanos
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: 'default',
});
useHead({
  title: 'Cómo Funciona - ProHomeFix',
  meta: [
    {
      name: 'description',
      content: 'Descubre cómo funciona ProHomeFix. Conecta con profesionales verificados en 4 simples pasos.'
    }
  ]
})
</script>