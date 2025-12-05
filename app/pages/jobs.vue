<template>
  <NuxtLayout>
    <!-- Hero Section -->
    <section class="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC00Yy0xLjEgMC0yIC45LTIgMnY0YzAgMS4xLjkgMiAyIDJoNGMxLjEgMCAyLS45IDItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-white">
            <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="heroicons:briefcase" class="w-4 h-4" />
              Únete a nuestro equipo
            </div>
            <h1 class="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Crece tu negocio con
              <span class="block text-blue-200">ProHomeFix</span>
            </h1>
            <p class="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Conéctate con miles de clientes que necesitan tus servicios profesionales. 
              Aumenta tus ingresos y expande tu cartera de clientes.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button 
                @click="scrollToForm"
                class="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition transform hover:scale-105 shadow-2xl text-lg flex items-center justify-center gap-2"
              >
                Regístrate Ahora
                <Icon name="heroicons:arrow-right" class="w-5 h-5" />
              </button>
              <a 
                href="tel:442-123-4567"
                class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition backdrop-blur-sm text-lg flex items-center justify-center gap-2"
              >
                <Icon name="heroicons:phone" class="w-5 h-5" />
                Llámanos
              </a>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white rounded-xl p-6 text-center">
                  <div class="text-4xl font-bold text-blue-600 mb-2">+40%</div>
                  <p class="text-sm text-slate-600 font-semibold">Más Ingresos</p>
                </div>
                <div class="bg-white rounded-xl p-6 text-center">
                  <div class="text-4xl font-bold text-purple-600 mb-2">500+</div>
                  <p class="text-sm text-slate-600 font-semibold">Profesionales</p>
                </div>
                <div class="bg-white rounded-xl p-6 text-center">
                  <div class="text-4xl font-bold text-green-600 mb-2">10k+</div>
                  <p class="text-sm text-slate-600 font-semibold">Trabajos/Mes</p>
                </div>
                <div class="bg-white rounded-xl p-6 text-center">
                  <div class="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                  <p class="text-sm text-slate-600 font-semibold">Soporte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            ¿Por qué unirte a ProHomeFix?
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            Ofrecemos las mejores herramientas y beneficios para hacer crecer tu negocio
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="benefit in benefits"
            :key="benefit.title"
            class="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 hover:shadow-lg transition"
          >
            <div :class="['inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6', benefit.color]">
              <Icon :name="benefit.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">{{ benefit.title }}</h3>
            <p class="text-slate-700 leading-relaxed">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Cómo funciona
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            Únete en 4 simples pasos y comienza a recibir solicitudes
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="(step, index) in steps" :key="index" class="relative">
            <div class="bg-white rounded-2xl p-8 text-center h-full shadow-md hover:shadow-lg transition">
              <div
                :class="[
                  'w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg',
                  step.color
                ]"
              >
                {{ index + 1 }}
              </div>
              <Icon :name="step.icon" :class="['w-12 h-12 mx-auto mb-4', step.iconColor]" />
              <h3 class="text-lg font-bold text-slate-900 mb-3">{{ step.title }}</h3>
              <p class="text-slate-600 text-sm">{{ step.description }}</p>
            </div>
            <div
              v-if="index < steps.length - 1"
              class="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent -ml-4 z-0"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Categorías disponibles
          </h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            Únete en tu especialidad y empieza a recibir solicitudes
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="category in categories"
            :key="category.name"
            :class="[
              'rounded-2xl p-6 text-center hover:shadow-lg transition cursor-pointer',
              category.bgColor
            ]"
          >
            <Icon :name="category.icon" :class="['w-12 h-12 mx-auto mb-4', category.iconColor]" />
            <h3 class="text-lg font-bold text-slate-900 mb-2">{{ category.name }}</h3>
            <p class="text-sm text-slate-600">{{ category.demand }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Requirements -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Requisitos para unirte
            </h2>
            <p class="text-lg text-slate-600 mb-8">
              Buscamos profesionales comprometidos con la excelencia. Estos son los requisitos básicos:
            </p>
            <div class="space-y-4">
              <div
                v-for="req in requirements"
                :key="req"
                class="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm"
              >
                <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="heroicons:check" class="w-5 h-5 text-green-600" />
                </div>
                <p class="text-slate-700 font-medium">{{ req }}</p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 border-2 border-blue-100">
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <Icon name="heroicons:shield-check" class="w-12 h-12 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-slate-900 mb-2 text-lg">Verificación Rápida</h3>
                  <p class="text-slate-700">Proceso de verificación en menos de 48 horas</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <Icon name="heroicons:academic-cap" class="w-12 h-12 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-slate-900 mb-2 text-lg">Capacitación Gratuita</h3>
                  <p class="text-slate-700">Acceso a cursos y talleres de mejora continua</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <Icon name="heroicons:banknotes" class="w-12 h-12 text-green-600 flex-shrink-0" />
                <div>
                  <h3 class="font-bold text-slate-900 mb-2 text-lg">Pagos Seguros</h3>
                  <p class="text-slate-700">Depósitos directos sin intermediarios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Lo que dicen nuestros profesionales
          </h2>
          <p class="text-xl text-slate-600">
            Historias de éxito reales
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            class="bg-slate-50 rounded-2xl p-8"
          >
            <div class="flex items-center gap-1 mb-4">
              <Icon
                v-for="i in 5"
                :key="i"
                name="heroicons:star-solid"
                class="w-5 h-5 text-yellow-400"
              />
            </div>
            <p class="text-slate-700 mb-6 leading-relaxed italic">
              "{{ testimonial.quote }}"
            </p>
            <div class="flex items-center gap-3">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full"
              />
              <div>
                <p class="font-bold text-slate-900">{{ testimonial.name }}</p>
                <p class="text-sm text-slate-600">{{ testimonial.profession }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Registration Form -->
    <section id="registro" class="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Regístrate ahora
          </h2>
          <p class="text-xl text-slate-600">
            Completa el formulario y nos pondremos en contacto contigo
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Personal Info -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="form-field"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">
                  Teléfono *
                </label>
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  class="form-field"
                  placeholder="442-123-4567"
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="form-field"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">
                  Ciudad *
                </label>
                <input
                  v-model="form.city"
                  type="text"
                  required
                  class="form-field"
                  placeholder="Querétaro"
                />
              </div>
            </div>

            <!-- Professional Info -->
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">
                Categoría / Especialidad *
              </label>
              <select
                v-model="form.category"
                required
                class="form-field"
              >
                <option value="">Selecciona una categoría</option>
                <option v-for="cat in categories" :key="cat.name" :value="cat.name">
                  {{ cat.name }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">
                Años de experiencia *
              </label>
              <select
                v-model="form.experience"
                required
                class="form-field"
              >
                <option value="">Selecciona</option>
                <option value="1-2">1-2 años</option>
                <option value="3-5">3-5 años</option>
                <option value="6-10">6-10 años</option>
                <option value="10+">Más de 10 años</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">
                Cuéntanos sobre tu experiencia y servicios *
              </label>
              <textarea
                v-model="form.message"
                required
                rows="4"
                class="form-field form-textarea"
                placeholder="Describe tu experiencia, certificaciones y los servicios que ofreces..."
              ></textarea>
            </div>

            <div class="flex items-start gap-3">
              <input
                v-model="form.terms"
                type="checkbox"
                required
                id="terms"
                class="form-checkbox"
              />
              <label for="terms" class="text-sm text-slate-600">
                Acepto los términos y condiciones y autorizo el procesamiento de mis datos personales para fines de registro.
              </label>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              :class="[
                'w-full py-4 rounded-xl font-bold text-lg transition transform',
                isSubmitting 
                  ? 'bg-slate-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 shadow-lg'
              ]"
            >
              {{ isSubmitting ? 'Enviando...' : 'Enviar Solicitud' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Preguntas Frecuentes
          </h2>
        </div>

        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-slate-50 rounded-xl overflow-hidden"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-100 transition"
            >
              <span class="font-bold text-slate-900">{{ faq.question }}</span>
              <Icon
                :name="activeFaq === index ? 'heroicons:chevron-up' : 'heroicons:chevron-down'"
                class="w-5 h-5 text-slate-600 flex-shrink-0 ml-4"
              />
            </button>
            <div
              v-show="activeFaq === index"
              class="px-6 pb-4 text-slate-700 leading-relaxed"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click="showSuccessModal = false"
    >
      <div class="bg-white rounded-2xl max-w-md w-full p-8 text-center" @click.stop>
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="heroicons:check" class="w-10 h-10 text-green-600" />
        </div>
        <h3 class="text-2xl font-bold text-slate-900 mb-2">¡Solicitud Enviada!</h3>
        <p class="text-slate-600 mb-6">
          Hemos recibido tu solicitud. Nuestro equipo la revisará y te contactará en las próximas 48 horas.
        </p>
        <button
          @click="showSuccessModal = false"
          class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Entendido
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Únete como Profesional - ProHomeFix',
  meta: [
    {
      name: 'description',
      content:
        'Crece tu negocio uniéndote a ProHomeFix. Conéctate con miles de clientes y aumenta tus ingresos hasta un 40%.',
    },
  ],
})

const form = ref({
  name: '',
  phone: '',
  email: '',
  city: '',
  category: '',
  experience: '',
  message: '',
  terms: false,
})

const isSubmitting = ref(false)
const showSuccessModal = ref(false)
const activeFaq = ref(null)

const benefits = [
  {
    icon: 'heroicons:chart-bar',
    color: 'bg-blue-600',
    title: 'Más Clientes',
    description:
      'Accede a miles de clientes potenciales buscando activamente tus servicios en tu área',
  },
  {
    icon: 'heroicons:banknotes',
    color: 'bg-green-600',
    title: 'Mejores Ingresos',
    description:
      'Aumenta tus ingresos hasta un 40% con un flujo constante de trabajos bien pagados',
  },
  {
    icon: 'heroicons:calendar',
    color: 'bg-purple-600',
    title: 'Agenda Flexible',
    description:
      'Tú decides cuándo trabajar. Acepta solo los trabajos que te convengan',
  },
  {
    icon: 'heroicons:shield-check',
    color: 'bg-blue-500',
    title: 'Seguridad',
    description: 'Pagos garantizados y protección contra clientes problemáticos',
  },
  {
    icon: 'heroicons:device-phone-mobile',
    color: 'bg-orange-600',
    title: 'App Móvil',
    description: 'Gestiona todos tus trabajos desde tu smartphone de manera fácil',
  },
  {
    icon: 'heroicons:chat-bubble-left-right',
    color: 'bg-pink-600',
    title: 'Soporte 24/7',
    description:
      'Nuestro equipo siempre está disponible para ayudarte cuando lo necesites',
  },
]

const steps = [
  {
    icon: 'heroicons:document-text',
    iconColor: 'text-blue-600',
    color: 'bg-blue-600',
    title: 'Completa el Registro',
    description: 'Llena el formulario con tu información profesional',
  },
  {
    icon: 'heroicons:clipboard-document-check',
    iconColor: 'text-purple-600',
    color: 'bg-purple-600',
    title: 'Verificación',
    description: 'Validamos tu identidad y experiencia profesional',
  },
  {
    icon: 'heroicons:academic-cap',
    iconColor: 'text-green-600',
    color: 'bg-green-600',
    title: 'Capacitación',
    description: 'Conoce la plataforma y mejores prácticas',
  },
  {
    icon: 'heroicons:rocket-launch',
    iconColor: 'text-orange-600',
    color: 'bg-orange-600',
    title: '¡Comienza!',
    description: 'Empieza a recibir solicitudes de clientes',
  },
]

const categories = [
  {
    name: 'Plomería',
    icon: 'heroicons:wrench-screwdriver',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    demand: 'Alta demanda',
  },
  {
    name: 'Carpintería',
    icon: 'mingcute:hammer-fill',
    iconColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    demand: 'Alta demanda',
  },
  {
    name: 'Limpieza',
    icon: 'heroicons:sparkles',
    iconColor: 'text-green-600',
    bgColor: 'bg-green-50',
    demand: 'Muy alta demanda',
  },
  {
    name: 'Electricidad',
    icon: 'heroicons:bolt',
    iconColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    demand: 'Alta demanda',
  },
  {
    name: 'Pintura',
    icon: 'heroicons:paint-brush',
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    demand: 'Media demanda',
  },
  {
    name: 'Jardinería',
    icon: 'heroicons:scissors',
    iconColor: 'text-green-700',
    bgColor: 'bg-green-50',
    demand: 'Media demanda',
  },
  {
    name: 'Mudanzas',
    icon: 'heroicons:truck',
    iconColor: 'text-blue-700',
    bgColor: 'bg-blue-50',
    demand: 'Alta demanda',
  },
  {
    name: 'Aire Acondicionado',
    icon: 'heroicons:sparkles',
    iconColor: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    demand: 'Alta demanda',
  },
]

const requirements = [
  'Mayor de 18 años con identificación oficial vigente',
  'Experiencia comprobable en tu área (mínimo 2 años)',
  'Herramientas propias y en buen estado',
  'Disponibilidad para trabajar en la zona metropolitana',
  'Actitud profesional y compromiso con la calidad',
  'Smartphone con acceso a internet',
]

const testimonials = [
  {
    name: 'Roberto Sánchez',
    profession: 'Plomero',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto',
    quote:
      'Desde que me uní a ProHomeFix mis ingresos aumentaron un 45%. La plataforma es fácil de usar y siempre hay trabajo disponible.',
  },
  {
    name: 'Luis García',
    profession: 'Carpintero',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luis',
    quote:
      'Lo mejor es que yo decido cuándo trabajar. Puedo aceptar los proyectos que más me interesan y el pago siempre es puntual.',
  },
  {
    name: 'Ana Martínez',
    profession: 'Limpieza Profesional',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anna',
    quote: 'Impresionante forma de trabajar, la mejor empresa',
  },
]

const faqs = [
  {
    question: '¿Cuánto tarda el proceso de verificación?',
    answer:
      'Usualmente completamos la verificación en menos de 48 horas hábiles después de recibir toda tu documentación.',
  },
  {
    question: '¿Tiene algún costo registrarme en ProHomeFix?',
    answer:
      'El registro es completamente gratuito. Solo cobramos una pequeña comisión por cada trabajo completado a través de la plataforma.',
  },
  {
    question: '¿Puedo elegir qué trabajos aceptar?',
    answer:
      'Sí. Tú tienes el control total y decides qué solicitudes aceptar en función de tu disponibilidad y zona de trabajo.',
  },
  {
    question: '¿Cómo y cuándo recibo mis pagos?',
    answer:
      'Los pagos se realizan de forma segura mediante transferencia bancaria una vez que el trabajo ha sido marcado como completado por el cliente.',
  },
]

const scrollToForm = () => {
  if (process.client) {
    const el = document.getElementById('registro')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

const handleSubmit = async () => {
  if (isSubmitting.value) return
  isSubmitting.value = true

  try {
    // Aquí podrías hacer un fetch/axios a tu API
    await new Promise(resolve => setTimeout(resolve, 800))

    showSuccessModal.value = true

    // Reset sencillo del formulario
    form.value = {
      name: '',
      phone: '',
      email: '',
      city: '',
      category: '',
      experience: '',
      message: '',
      terms: false,
    }
  } finally {
    isSubmitting.value = false
  }
}

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>

<style scoped>
/* -------- FORM CAMPOS (sin Tailwind) -------- */

.form-field {
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid #cbd5e1; /* slate-300 */
  font-size: 0.95rem;
  color: #0f172a; /* slate-900 */
  background-color: #ffffff;
  transition: border-color 0.15s ease, box-shadow 0.15s ease, background-color 0.15s ease;
  box-sizing: border-box;
}

.form-field:focus {
  outline: none;
  border-color: #2563eb; /* blue-600 */
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.25);
  background-color: #ffffff;
}

/* Placeholders más visibles */
.form-field::placeholder {
  color: #475569; /* slate-600 */
  opacity: 1;
}

/* Textarea ajustes extra */
.form-textarea {
  resize: vertical;
  min-height: 120px;
}

/* Checkbox */
.form-checkbox {
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 0.35rem;
  border: 1px solid #cbd5e1;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  position: relative;
  margin-top: 0.2rem;
  background-color: #ffffff;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}

.form-checkbox:checked {
  background-color: #2563eb; /* blue-600 */
  border-color: #1d4ed8; /* blue-700 */
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.25);
}

.form-checkbox:checked::after {
  content: '✓';
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f9fafb; /* almost white */
  font-size: 0.75rem;
  font-weight: 700;
}
</style>