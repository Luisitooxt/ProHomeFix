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
            <button class="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium">
            Iniciar Sesión
            </button>
        </nav>
        </header>
        <slot />
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