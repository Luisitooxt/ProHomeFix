<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Back Button -->
    <div class="bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <NuxtLink to="/marketplace" class="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 w-fit">
          <Icon name="heroicons:arrow-left" class="w-5 h-5" />
          Volver al marketplace
        </NuxtLink>
      </div>
    </div>

    <div v-if="service" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Image -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <img :src="service.image" :alt="service.title" class="w-full h-96 object-cover" />
          </div>

          <!-- Title & Category -->
          <div class="bg-white rounded-xl shadow-sm p-6">
            <div class="flex items-start justify-between mb-4">
              <div>
                <span class="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {{ service.categoryLabel }}
                </span>
                <h1 class="text-3xl font-bold text-slate-900 mt-3">{{ service.title }}</h1>
              </div>
              <div v-if="service.featured" class="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                <Icon name="heroicons:star-solid" class="w-4 h-4" />
                Destacado
              </div>
            </div>

            <!-- Rating & Location -->
            <div class="flex items-center gap-6 text-sm">
              <div class="flex items-center gap-1">
                <Icon name="heroicons:star-solid" class="w-5 h-5 text-yellow-400" />
                <span class="font-semibold">{{ service.rating }}</span>
                <span class="text-slate-600">({{ service.reviewsCount }} reseñas)</span>
              </div>
              <div class="flex items-center gap-1 text-slate-600">
                <Icon name="heroicons:map-pin" class="w-5 h-5" />
                {{ service.location }}
              </div>
              <div class="flex items-center gap-1 text-slate-600">
                <Icon name="heroicons:clock" class="w-5 h-5" />
                {{ service.availability }}
              </div>
            </div>
          </div>

          <!-- Description -->
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h2 class="text-xl font-bold text-slate-900 mb-4">Descripción del servicio</h2>
            <p class="text-slate-700 leading-relaxed">{{ service.description }}</p>
          </div>

          <!-- What's Included -->
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h2 class="text-xl font-bold text-slate-900 mb-4">¿Qué incluye?</h2>
            <div class="grid md:grid-cols-2 gap-3">
              <div 
                v-for="(item, index) in service.includes" 
                :key="index"
                class="flex items-center gap-2"
              >
                <Icon name="heroicons:check-circle-solid" class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-slate-700">{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Provider Info -->
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h2 class="text-xl font-bold text-slate-900 mb-4">Sobre el proveedor</h2>
            <div class="flex items-start gap-4">
              <img 
                :src="service.provider.avatar" 
                :alt="service.provider.name"
                class="w-20 h-20 rounded-full"
              />
              <div class="flex-1">
                <div class="flex items-center gap-2 mb-2">
                  <h3 class="text-lg font-bold text-slate-900">{{ service.provider.name }}</h3>
                  <Icon 
                    v-if="service.provider.verified" 
                    name="heroicons:check-badge-solid" 
                    class="w-6 h-6 text-green-500" 
                  />
                </div>
                <div class="flex items-center gap-4 text-sm text-slate-600 mb-3">
                  <div class="flex items-center gap-1">
                    <Icon name="heroicons:star-solid" class="w-4 h-4 text-yellow-400" />
                    <span class="font-semibold">{{ service.provider.rating }}</span>
                  </div>
                  <span>{{ service.provider.completedJobs }} trabajos completados</span>
                </div>
                <p class="text-slate-700 mb-3">{{ service.provider.experience }}</p>
                <div class="flex items-center gap-2">
                  <Icon name="heroicons:phone" class="w-4 h-4 text-slate-600" />
                  <span class="text-slate-700">{{ service.provider.phone }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Reviews Section -->
          <div class="bg-white rounded-xl shadow-sm p-6">
            <h2 class="text-xl font-bold text-slate-900 mb-4">Reseñas de clientes</h2>
            <div class="space-y-4">
              <!-- Sample Reviews -->
              <div v-for="i in 3" :key="i" class="border-b border-slate-100 pb-4 last:border-0">
                <div class="flex items-center gap-2 mb-2">
                  <img 
                    :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=Review${i}`" 
                    class="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p class="font-semibold text-slate-900">Cliente {{ i }}</p>
                    <div class="flex items-center gap-1">
                      <Icon 
                        v-for="j in 5" 
                        :key="j"
                        name="heroicons:star-solid" 
                        class="w-4 h-4 text-yellow-400"
                      />
                    </div>
                  </div>
                </div>
                <p class="text-slate-700 text-sm">Excelente servicio, muy profesional y puntual. Lo recomiendo ampliamente.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Booking Card (Sticky) -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl shadow-lg p-6 sticky top-8">
            <div class="text-center mb-6">
              <p class="text-sm text-slate-600 mb-1">{{ service.priceType }}</p>
              <p class="text-4xl font-bold text-slate-900">${{ service.price.toLocaleString() }}</p>
            </div>

            <div class="space-y-3 mb-6">
              <div class="flex items-center justify-between py-2 border-b border-slate-100">
                <span class="text-sm text-slate-600">Tiempo de respuesta</span>
                <span class="text-sm font-semibold text-slate-900">{{ service.responseTime }}</span>
              </div>
              <div class="flex items-center justify-between py-2 border-b border-slate-100">
                <span class="text-sm text-slate-600">Disponibilidad</span>
                <span class="text-sm font-semibold text-slate-900">{{ service.availability }}</span>
              </div>
              <div class="flex items-center justify-between py-2">
                <span class="text-sm text-slate-600">Ubicación</span>
                <span class="text-sm font-semibold text-slate-900">{{ service.location }}</span>
              </div>
            </div>

            <button 
              @click="showBookingModal = true"
              class="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg mb-3"
            >
              Solicitar Servicio
            </button>

            <button class="w-full bg-slate-100 text-slate-700 py-3 rounded-lg hover:bg-slate-200 transition font-medium flex items-center justify-center gap-2">
              <Icon name="heroicons:phone" class="w-5 h-5" />
              Contactar proveedor
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Service Not Found -->
    <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <Icon name="heroicons:exclamation-triangle" class="w-16 h-16 text-slate-300 mx-auto mb-4" />
      <h2 class="text-2xl font-bold text-slate-900 mb-2">Servicio no encontrado</h2>
      <p class="text-slate-600 mb-6">El servicio que buscas no está disponible</p>
      <NuxtLink to="/marketplace" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
        Volver al marketplace
      </NuxtLink>
    </div>

    <!-- Booking Modal -->
    <div 
      v-if="showBookingModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click.self="showBookingModal = false"
    >
      <div class="bg-white rounded-2xl max-w-md w-full p-8">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-2xl font-bold text-slate-900">Solicitar Servicio</h3>
          <button 
            @click="showBookingModal = false"
            class="text-slate-400 hover:text-slate-600"
          >
            <Icon name="heroicons:x-mark" class="w-6 h-6" />
          </button>
        </div>

        <form @submit.prevent="handleBooking" class="space-y-4">
          <!-- Name -->
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Nombre completo</label>
            <input 
              v-model="bookingForm.name"
              type="text" 
              required
              class="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
            />
          </div>

          <!-- Phone -->
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
            <input 
              v-model="bookingForm.phone"
              type="tel" 
              required
              class="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="442-123-4567"
            />
          </div>

          <!-- Date -->
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Fecha preferida</label>
            <input 
              v-model="bookingForm.date"
              type="date" 
              required
              :min="minDate"
              class="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- Address -->
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Dirección</label>
            <textarea 
              v-model="bookingForm.address"
              required
              rows="2"
              class="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Calle, número, colonia..."
            ></textarea>
          </div>

          <!-- Details -->
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Detalles adicionales</label>
            <textarea 
              v-model="bookingForm.details"
              rows="3"
              class="w-full px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Describe el problema o trabajo a realizar..."
            ></textarea>
          </div>

          <!-- Submit -->
          <button 
            type="submit"
            class="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg"
          >
            Confirmar Solicitud
          </button>
        </form>

        <p class="text-xs text-slate-500 text-center mt-4">
          El proveedor se pondrá en contacto contigo para confirmar los detalles
        </p>
      </div>
    </div>

    <!-- Success Modal -->
    <div 
      v-if="showSuccessModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click="showSuccessModal = false"
    >
      <div class="bg-white rounded-2xl max-w-md w-full p-8 text-center">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="heroicons:check" class="w-10 h-10 text-green-600" />
        </div>
        <h3 class="text-2xl font-bold text-slate-900 mb-2">¡Solicitud Enviada!</h3>
        <p class="text-slate-600 mb-6">
          {{ service.provider.name }} recibirá tu solicitud y se pondrá en contacto contigo pronto.
        </p>
        <button 
          @click="showSuccessModal = false"
          class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Entendido
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { mockServices } from '~/data/mockServices'

const route = useRoute()
const serviceId = parseInt(route.params.id)
const service = mockServices.find(s => s.id === serviceId)

const showBookingModal = ref(false)
const showSuccessModal = ref(false)

const bookingForm = ref({
  name: '',
  phone: '',
  date: '',
  address: '',
  details: ''
})

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

const handleBooking = () => {
  console.log('Booking submitted:', bookingForm.value)
  showBookingModal.value = false
  showSuccessModal.value = true
  
  // Reset form
  setTimeout(() => {
    bookingForm.value = {
      name: '',
      phone: '',
      date: '',
      address: '',
      details: ''
    }
  }, 500)
}
</script>