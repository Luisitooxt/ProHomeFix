<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">

    <!-- Header -->
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <a href="/">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Icon name="heroicons:wrench-screwdriver" class="w-6 h-6 text-white" />
            </div>
          </a>
          <a href="/" class="text-2xl font-bold text-slate-800">ProHomeFix</a>
        </div>
        <div class="hidden md:flex space-x-8">
          <NuxtLink href="/marketplace" class="text-slate-600 hover:text-slate-900 transition">Servicios</NuxtLink>
          <NuxtLink href="/how" class="text-slate-600 hover:text-slate-900 transition">Cómo funciona</NuxtLink>
          <NuxtLink href="/contact" class="text-slate-600 hover:text-slate-900 transition">Contacto</NuxtLink>
        </div>
        <button
            @click="showLoginModal = true"
            class="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium">
          Iniciar Sesión
        </button>
      </nav>
    </header>

    <slot />

    <!-- Modal de Inicio de Sesión -->
    <Teleport to="body">
      <Transition name="modal">
        <div
            v-if="showLoginModal"
            class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            @click.self="showLoginModal = false">
          <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            <!-- Botón cerrar -->
            <button
                @click="showLoginModal = false"
                class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition">
              <Icon name="heroicons:x-mark" class="w-6 h-6" />
            </button>

            <!-- Contenido del modal -->
            <div class="text-center mb-8">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="heroicons:wrench-screwdriver" class="w-8 h-8 text-white" />
              </div>
              <h2 class="text-2xl font-bold text-slate-800">Bienvenido de vuelta</h2>
              <p class="text-slate-600 mt-2">Inicia sesión para continuar</p>
            </div>

            <form @submit.prevent="handleLogin" class="space-y-5">
              <!-- Email -->
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">
                  Correo electrónico
                </label>
                <input
                    type="email"
                    v-model="loginForm.email"
                    placeholder="tu@email.com"
                    class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required>
              </div>

              <!-- Contraseña -->
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">
                  Contraseña
                </label>
                <input
                    type="password"
                    v-model="loginForm.password"
                    placeholder="••••••••"
                    class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required>
              </div>

              <!-- Recordarme / Olvidé contraseña -->
              <div class="flex items-center justify-between text-sm">
                <label class="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" class="rounded border-slate-300 text-blue-600 focus:ring-blue-500">
                  <span class="text-slate-600">Recordarme</span>
                </label>
                <a href="#" class="text-blue-600 hover:text-blue-700 font-medium">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <!-- Botón de inicio de sesión -->
              <button
                  type="submit"
                  class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-[1.02] transition">
                Iniciar Sesión
              </button>
            </form>

            <!-- Divisor -->
            <div class="relative my-6">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-slate-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-4 bg-white text-slate-500">o continúa con</span>
              </div>
            </div>

            <!-- Botones de redes sociales -->
            <div class="grid grid-cols-2 gap-3">
              <button class="flex items-center justify-center space-x-2 px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition">
                <Icon name="logos:google-icon" class="w-5 h-5" />
                <span class="text-sm font-medium text-slate-700">Google</span>
              </button>
              <button class="flex items-center justify-center space-x-2 px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition">
                <Icon name="logos:facebook" class="w-5 h-5" />
                <span class="text-sm font-medium text-slate-700">Facebook</span>
              </button>
            </div>

            <!-- Registro -->
            <p class="text-center text-sm text-slate-600 mt-6">
              ¿No tienes cuenta?
              <a href="#" class="text-blue-600 hover:text-blue-700 font-medium">
                Regístrate gratis
              </a>
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="heroicons:wrench-screwdriver" class="w-5 h-5 text-white" />
              </div>
              <span class="text-xl font-bold">ProHomeFix</span>
            </div>
            <p class="text-slate-400">
              Tu solución de confianza para servicios domésticos profesionales.
            </p>
          </div>

          <div>
            <h4 class="font-bold mb-4">Compañía</h4>
            <ul class="space-y-2 text-slate-400">
              <li><NuxtLink to="/about" class="hover:text-white transition">Acerca de</NuxtLink></li>
              <li><NuxtLink to="/jobs" class="hover:text-white transition">Unete a Nosotros!</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold mb-4">Legal</h4>
            <ul class="space-y-2 text-slate-400">
              <li><NuxtLink to="/privacy" class="hover:text-white transition">Privacidad</NuxtLink></li>
              <li><NuxtLink to="/terms" class="hover:text-white transition">Términos</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-white transition">Contacto</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2025 ProHomeFix. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showLoginModal = ref(false)
const loginForm = ref({
  email: '',
  password: ''
})

const handleLogin = () => {
  console.log('Login attempt:', loginForm.value)
  // Aquí irá tu lógica de autenticación
  alert('Funcionalidad de login en desarrollo')
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.9);
}
</style>