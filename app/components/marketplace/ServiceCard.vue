<template>
  <NuxtLink 
    :to="{ name: 'marketplace-id', params: { id: service.id } }"
    class="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
  >
    <!-- Image -->
    <div class="relative h-48 overflow-hidden">
      <img 
        :src="service.image" 
        :alt="service.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div v-if="service.featured" class="absolute top-3 left-3">
        <span class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <Icon name="heroicons:star-solid" class="w-3 h-3" />
          Destacado
        </span>
      </div>
      <div class="absolute top-3 right-3">
        <span :class="[service.provider.verified ? 'bg-green-500' : 'bg-gray-500', 'text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1']">
          <Icon :name="service.provider.verified ? 'heroicons:check-badge-solid' : 'heroicons:user'" class="w-3 h-3" />
          {{ service.provider.verified ? 'Verificado' : 'Sin verificar' }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-5">
      <!-- Category Badge -->
      <div class="mb-2">
        <span class="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
          {{ service.categoryLabel }}
        </span>
      </div>

      <!-- Title -->
      <h3 class="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
        {{ service.title }}
      </h3>

      <!-- Description -->
      <p class="text-sm text-slate-600 mb-4 line-clamp-2">
        {{ service.shortDescription }}
      </p>

      <!-- Provider Info -->
      <div class="flex items-center gap-2 mb-4">
        <img 
          :src="service.provider.avatar" 
          :alt="service.provider.name"
          class="w-8 h-8 rounded-full"
        />
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-slate-900 truncate">{{ service.provider.name }}</p>
          <div class="flex items-center gap-1">
            <Icon name="heroicons:star-solid" class="w-3 h-3 text-yellow-400" />
            <span class="text-xs text-slate-600">{{ service.rating }}</span>
            <span class="text-xs text-slate-400">({{ service.reviewsCount }})</span>
          </div>
        </div>
      </div>

      <!-- Location & Availability -->
      <div class="flex items-center justify-between mb-4 text-xs text-slate-600">
        <div class="flex items-center gap-1">
          <Icon name="heroicons:map-pin" class="w-3 h-3" />
          <span>{{ service.location }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="heroicons:clock" class="w-3 h-3" />
          <span>{{ service.availability }}</span>
        </div>
      </div>

      <!-- Price & CTA -->
      <div class="flex items-center justify-between pt-4 border-t border-slate-100">
        <div>
          <p class="text-xs text-slate-500">{{ service.priceType }}</p>
          <p class="text-2xl font-bold text-slate-900">${{ service.price.toLocaleString() }}</p>
        </div>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium text-sm">
          Ver detalles
        </button>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>