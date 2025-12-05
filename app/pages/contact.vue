<template>
  <NuxtLayout>
    <!-- Hero / Encabezado -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Texto -->
        <div>
          <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Contáctanos
            <span
              class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            >
              estamos listos para ayudarte
            </span>
          </h1>
          <p class="text-lg text-slate-600 mb-6">
            ¿Tienes una emergencia en casa o quieres una cotización? 
            Escríbenos y un especialista de ProHomeFix se pondrá en contacto contigo.
          </p>

          <!-- Datos de contacto rápidos -->
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Icon name="heroicons:phone-arrow-up-right" class="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-700">Atención telefónica</p>
                <p class="text-slate-600 text-sm">Lun - Dom · 8:00 a 21:00 hrs</p>
                <p class="text-slate-900 font-medium">+52 55 0000 0000</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <Icon name="heroicons:envelope" class="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-700">Correo electrónico</p>
                <p class="text-slate-600 text-sm">Respuesta en menos de 24 horas</p>
                <p class="text-slate-900 font-medium">soporte@prohomefix.com</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <Icon name="heroicons:chat-bubble-left-right" class="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p class="text-sm font-semibold text-slate-700">Chat y WhatsApp</p>
                <p class="text-slate-600 text-sm">Ideal para dudas rápidas y seguimiento</p>
                <p class="text-slate-900 font-medium">+52 55 1111 1111</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulario -->
         <div>
          <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-slate-100">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold text-slate-900">
                Envíanos un mensaje
              </h2>
              <span class="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold">
                Respuesta en &lt; 24 hrs
              </span>
            </div>

            <form @submit.prevent="handleSubmit" id="#contact-form" class="space-y-5">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Nombre completo
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Ej. José Luis Gomez"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-slate-400"
                />
              </div>

              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="tucorreo@ejemplo.com"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-slate-400"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    required
                    placeholder="+52 7441917034"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm placeholder-slate-400"
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-4">
                <div class="form-group">
                  <label class="form-label">
                    Tipo de servicio
                  </label>
                  <select v-model="form.serviceType" class="form-select">
                    <option value="">Selecciona una opción</option>
                    <option value="plomeria">Plomería</option>
                    <option value="carpinteria">Carpintería</option>
                    <option value="limpieza">Limpieza</option>
                    <option value="electricidad">Electricidad</option>
                    <option value="pintura">Pintura</option>
                    <option value="otros">Otro servicio</option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1">
                    Nivel de urgencia
                  </label>
                  <div class="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      class="text-xs px-3 py-2 rounded-xl border transition text-center"
                      :class="form.urgency === 'normal'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-slate-200 text-slate-700 bg-slate-50'"
                      @click="form.urgency = 'normal'"
                    >
                      Normal
                    </button>
                    <button
                      type="button"
                      class="text-xs px-3 py-2 rounded-xl border transition text-center"
                      :class="form.urgency === 'pronto'
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-slate-200 text-slate-700 bg-slate-50'"
                      @click="form.urgency = 'pronto'"
                    >
                      Pronto
                    </button>
                    <button
                      type="button"
                      class="text-xs px-3 py-2 rounded-xl border transition text-center"
                      :class="form.urgency === 'urgente'
                        ? 'bg-red-600 text-white border-red-600'
                        : 'border-slate-200 text-slate-700 bg-slate-50'"
                      @click="form.urgency = 'urgente'"
                    >
                      Urgente
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">
                  Describe tu necesidad
                </label>
                <textarea
                  v-model="form.message"
                  rows="4"
                  required
                  placeholder="Cuéntanos qué pasa en tu hogar: ubicación del problema, cuándo inició, qué ya intentaste, etc."
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none placeholder-slate-400"
                ></textarea>
              </div>

              <div class="flex items-start gap-2">
                <input
                  v-model="form.acceptPolicy"
                  type="checkbox"
                  id="acceptPolicy"
                  class="mt-1 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <label for="acceptPolicy" class="text-xs text-slate-600">
                  Acepto que ProHomeFix use mis datos para contactarme y ofrecerme una solución
                  al servicio solicitado.
                </label>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting || !form.acceptPolicy"
                class="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Icon
                  v-if="!isSubmitting"
                  name="heroicons:paper-airplane"
                  class="w-5 h-5"
                />
                <Icon
                  v-else
                  name="line-md:loading-loop"
                  class="w-5 h-5 animate-spin"
                />
                <span>
                  {{ isSubmitting ? 'Enviando mensaje...' : 'Enviar mensaje' }}
                </span>
              </button>

              <p
                v-if="successMessage"
                class="text-sm text-green-600 text-center mt-2"
              >
                {{ successMessage }}
              </p>
            </form>
          </div>
        </div>




      </div>
    </section>

    <!-- Información adicional / Cobertura -->
    <section class="bg-slate-50 border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="md:col-span-2">
            <h2 class="text-xl font-bold text-slate-900 mb-2">
              Zonas de cobertura
            </h2>
            <p class="text-slate-600 mb-4 text-sm">
              Actualmente damos servicio en las principales zonas urbanas. 
              Si tu colonia no aparece, contáctanos y buscaremos apoyarte.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 text-xs rounded-full bg-white border border-slate-200 text-slate-700">
                Zona Centro
              </span>
              <span class="px-3 py-1 text-xs rounded-full bg-white border border-slate-200 text-slate-700">
                Zona Norte
              </span>
              <span class="px-3 py-1 text-xs rounded-full bg-white border border-slate-200 text-slate-700">
                Zona Sur
              </span>
              <span class="px-3 py-1 text-xs rounded-full bg-white border border-slate-200 text-slate-700">
                Zona Poniente
              </span>
              <span class="px-3 py-1 text-xs rounded-full bg-white border border-slate-200 text-slate-700">
                Zona Oriente
              </span>
            </div>
          </div>

          <div>
            <h2 class="text-xl font-bold text-slate-900 mb-2">
              Horario de atención
            </h2>
            <p class="text-slate-600 text-sm mb-3">
              Nuestro equipo de soporte está disponible para ayudarte:
            </p>
            <ul class="text-sm text-slate-700 space-y-1">
              <li>Lunes a Viernes: 8:00 am - 9:00 pm</li>
              <li>Sábados: 9:00 am - 8:00 pm</li>
              <li>Domingos: emergencias programadas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped>
.placeholder-slate-400{
  color: black;
  font-weight: 700;
}

/* Contenedor principal */
.form-group {
  margin-bottom: 1rem; /* Espaciado estándar */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

/* Etiqueta (Label) */
/* Replica: block text-sm font-medium text-slate-700 mb-1 */
.form-label {
  display: block;
  font-size: 0.875rem; /* 14px */
  font-weight: 500;    /* Medium */
  color: #334155;      /* Slate 700 */
  margin-bottom: 0.25rem; /* 4px */
}

/* Select Input */
/* Replica: w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-white */
.form-select {
  width: 100%;
  padding: 0.75rem 1rem; /* Vertical 12px, Horizontal 16px */
  font-size: 0.875rem;   /* 14px */
  line-height: 1.25rem;
  color: #1e293b;        /* Color de texto por defecto oscuro */
  background-color: #ffffff;
  border: 1px solid #e2e8f0; /* Slate 200 */
  border-radius: 0.75rem;    /* rounded-xl (12px) */
  appearance: none;          /* Limpia estilos nativos del navegador */
  
  /* Para mantener la flecha del select al usar appearance: none */
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem; /* Espacio para la flecha */
  
  transition: all 0.2s ease-in-out;
}

/* Estado Focus (Al hacer clic) */
/* Replica: focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 */
.form-select:focus {
  outline: none;
  border-color: #3b82f6; /* Blue 500 */
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); /* Ring Blue 500 con opacidad */
}

</style>

<script setup>
const form = ref({
  name: '',
  email: '',
  phone: '',
  serviceType: '',
  urgency: 'normal',
  message: '',
  acceptPolicy: false
})

const isSubmitting = ref(false)
const successMessage = ref('')

definePageMeta({
  layout: 'default'
})

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    urgency: 'normal',
    message: '',
    acceptPolicy: false
  }
}

const handleSubmit = async () => {
  if (!form.value.acceptPolicy) return

  try {
    isSubmitting.value = true
    successMessage.value = ''

    // Aquí puedes integrar:
    // - llamada a API
    // - envío de correo
    // - integración con servicio de tickets, etc.
    console.log('Formulario enviado:', form.value)

    // Simulación de envío
    setTimeout(() => {
      successMessage.value = '¡Gracias! Hemos recibido tu mensaje y te contactaremos muy pronto.'
      resetForm()
      isSubmitting.value = false
    }, 800)
  } catch (error) {
    console.error(error)
    isSubmitting.value = false
  }
}
</script>
