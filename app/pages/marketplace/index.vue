<template>
  <NuxtLayout>
   
  <div class="min-h-screen bg-slate-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Search Bar -->
        <div class="flex gap-4">
          <div class="flex-1 relative">
            <Icon name="heroicons:magnifying-glass" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Buscar servicios..."
              class="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              @input="filterServices"
            />
          </div>
          <button 
            @click="showFilters = !showFilters"
            class="px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-lg font-medium text-slate-700 flex items-center gap-2 transition"
          >
            <Icon name="heroicons:adjustments-horizontal" class="w-5 h-5" />
            Filtros
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex gap-8">
        <!-- Filters Sidebar -->
        <aside v-if="showFilters" class="w-64 flex-shrink-0">
          <div class="bg-white rounded-xl shadow-sm p-6 sticky top-8">
            <div class="flex items-center justify-between mb-6">
              <h3 class="font-bold text-slate-900">Filtros</h3>
              <button 
                @click="clearFilters"
                class="text-sm text-blue-600 hover:text-blue-700"
              >
                Limpiar
              </button>
            </div>

            <!-- Category Filter -->
            <div class="mb-6">
              <h4 class="font-semibold text-slate-900 mb-3">Categoría</h4>
              <div class="space-y-2">
                <label 
                  v-for="category in categories" 
                  :key="category.id"
                  class="flex items-center gap-2 cursor-pointer"
                >
                  <input 
                    type="checkbox" 
                    :value="category.id"
                    v-model="selectedCategories"
                    @change="filterServices"
                    class="w-4 h-4 text-blue-600 rounded"
                  />
                  <Icon :name="category.icon" class="w-4 h-4 text-slate-600" />
                  <span class="text-sm text-slate-700">{{ category.name }}</span>
                </label>
              </div>
            </div>

            <!-- Price Filter -->
            <div class="mb-6">
              <h4 class="font-semibold text-slate-900 mb-3">Precio máximo</h4>
              <input 
                v-model="maxPrice"
                type="range" 
                min="0" 
                max="5000" 
                step="100"
                @input="filterServices"
                class="w-full"
              />
              <div class="flex justify-between text-sm text-slate-600 mt-2">
                <span>$0</span>
                <span class="font-semibold text-blue-600">${{ maxPrice }}</span>
                <span>$5,000</span>
              </div>
            </div>

            <!-- Rating Filter -->
            <div class="mb-6">
              <h4 class="font-semibold text-slate-900 mb-3">Calificación mínima</h4>
              <div class="space-y-2">
                <label 
                  v-for="rating in [5, 4, 3]" 
                  :key="rating"
                  class="flex items-center gap-2 cursor-pointer"
                >
                  <input 
                    type="radio" 
                    :value="rating"
                    v-model="minRating"
                    @change="filterServices"
                    class="w-4 h-4 text-blue-600"
                  />
                  <div class="flex items-center gap-1">
                    <Icon 
                      v-for="i in 5" 
                      :key="i"
                      name="heroicons:star-solid" 
                      :class="i <= rating ? 'text-yellow-400' : 'text-slate-300'"
                      class="w-4 h-4"
                    />
                  </div>
                  <span class="text-sm text-slate-700">y más</span>
                </label>
              </div>
            </div>

            <!-- Verified Only -->
            <div>
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="verifiedOnly"
                  @change="filterServices"
                  class="w-4 h-4 text-blue-600 rounded"
                />
                <Icon name="heroicons:check-badge-solid" class="w-4 h-4 text-green-500" />
                <span class="text-sm text-slate-700">Solo verificados</span>
              </label>
            </div>
          </div>
        </aside>

        <!-- Services Grid -->
        <main class="flex-1">
          <!-- Results Count -->
          <div class="flex items-center justify-between mb-6">
            <p class="text-slate-600">
              <span class="font-semibold text-slate-900">{{ filteredServices.length }}</span> servicios encontrados
            </p>
            <select 
              v-model="sortBy"
              @change="sortServices"
              class="px-4 py-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured">Destacados</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="rating">Mejor calificación</option>
              <option value="reviews">Más reseñas</option>
            </select>
          </div>

          <!-- Services Grid -->
          <div v-if="filteredServices.length > 0" class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <ServiceCard 
              v-for="service in filteredServices" 
              :key="service.id"
              :service="service"
            />
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-16">
            <Icon name="heroicons:magnifying-glass" class="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-slate-900 mb-2">No se encontraron servicios</h3>
            <p class="text-slate-600 mb-6">Intenta ajustar los filtros o la búsqueda</p>
            <button 
              @click="clearFilters"
              class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Limpiar filtros
            </button>
          </div>
        </main>
      </div>
    </div>
  </div>

  </NuxtLayout>

</template>

<script setup>
import { mockServices, categories } from '~/data/mockServices'
import ServiceCard from '~/components/marketplace/ServiceCard.vue'
definePageMeta({
  layout: 'default',
});
const searchQuery = ref('')
const selectedCategories = ref([])
const maxPrice = ref(5000)
const minRating = ref(0)
const verifiedOnly = ref(false)
const sortBy = ref('featured')
const showFilters = ref(true)
const filteredServices = ref([])

onMounted(() => {
  filteredServices.value = [...mockServices]
  sortServices()
})

const filterServices = () => {
  let result = [...mockServices]

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(service => 
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.categoryLabel.toLowerCase().includes(query)
    )
  }

  // Category filter
  if (selectedCategories.value.length > 0) {
    result = result.filter(service => 
      selectedCategories.value.includes(service.category)
    )
  }

  // Price filter
  result = result.filter(service => service.price <= maxPrice.value)

  // Rating filter
  if (minRating.value > 0) {
    result = result.filter(service => service.rating >= minRating.value)
  }

  // Verified filter
  if (verifiedOnly.value) {
    result = result.filter(service => service.provider.verified)
  }

  filteredServices.value = result
  sortServices()
}

const sortServices = () => {
  const result = [...filteredServices.value]
  
  switch (sortBy.value) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      result.sort((a, b) => b.price - a.price)
      break
    case 'rating':
      result.sort((a, b) => b.rating - a.rating)
      break
    case 'reviews':
      result.sort((a, b) => b.reviewsCount - a.reviewsCount)
      break
    case 'featured':
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
      break
  }
  
  filteredServices.value = result
}

const clearFilters = () => {
  searchQuery.value = ''
  selectedCategories.value = []
  maxPrice.value = 5000
  minRating.value = 0
  verifiedOnly.value = false
  sortBy.value = 'featured'
  filteredServices.value = [...mockServices]
  sortServices()
}
</script>