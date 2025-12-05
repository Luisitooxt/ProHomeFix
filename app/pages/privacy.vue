<template>
  <NuxtLayout>
    <!-- Hero -->
    <section class="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC00Yy0xLjEgMC0yIC45LTIgMnY0YzAgMS4xLjkgMiAyIDJoNGMxLjEgMCAyLS45IDItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl mb-6">
          <Icon name="heroicons:shield-check" class="w-12 h-12 text-white" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Aviso de Privacidad
        </h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Tu confianza es lo más importante para nosotros. Protegemos tus datos personales
          con responsabilidad y transparencia.
        </p>
      </div>
    </section>

    <!-- Aviso de Privacidad -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Nota -->
        <div class="mb-8 bg-blue-50 border border-blue-100 rounded-2xl p-5 flex gap-4">
          <div class="mt-1">
            <Icon name="heroicons:information-circle" class="w-7 h-7 text-blue-600" />
          </div>
          <div>
            <h2 class="text-lg font-semibold text-slate-900 mb-1">Resumen General</h2>
            <p class="text-sm text-slate-700 leading-relaxed">
              Este Aviso de Privacidad explica cómo ProHomeFix recopila, utiliza, protege
              y, en su caso, comparte tus datos personales conforme a la legislación aplicable
              en materia de protección de datos personales en México.
            </p>
          </div>
        </div>

        <div class="space-y-10 text-slate-800">
          <!-- 1. Identidad -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:building-office" class="w-7 h-7 text-blue-600 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                1. Identidad y domicilio del responsable
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-2">
              ProHomeFix (en lo sucesivo, “la Plataforma”), es el responsable del tratamiento de tus
              datos personales. Para efectos del presente Aviso de Privacidad, podrás contactarnos a través
              de nuestro formulario de contacto dentro de la web o mediante los medios de contacto
              que se muestran en el sitio oficial.
            </p>
            <p class="text-slate-700 text-sm leading-relaxed">
              Este Aviso de Privacidad es aplicable a los usuarios que contratan servicios, a los
              profesionales registrados en la Plataforma y a cualquier persona que proporcione datos
              personales a ProHomeFix.
            </p>
          </section>

          <!-- 2. Datos que recabamos -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:identification" class="w-7 h-7 text-purple-600 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                2. Datos personales que recabamos
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              Los datos personales que ProHomeFix puede recabar incluyen, de manera enunciativa pero
              no limitativa, los siguientes:
            </p>
            <div class="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 class="font-semibold text-slate-900 mb-2">a) Datos de identificación</h3>
                <ul class="list-disc list-inside space-y-1 text-slate-700">
                  <li>Nombre completo</li>
                  <li>Correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Dirección de domicilio (para brindar el servicio)</li>
                  <li>Identificación oficial (en caso de verificación de profesionales)</li>
                </ul>
              </div>
              <div>
                <h3 class="font-semibold text-slate-900 mb-2">b) Datos de servicio</h3>
                <ul class="list-disc list-inside space-y-1 text-slate-700">
                  <li>Información sobre los servicios solicitados</li>
                  <li>Historial de servicios contratados</li>
                  <li>Preferencias, comentarios y calificaciones</li>
                  <li>Información de facturación (en caso de requerir factura)</li>
                </ul>
              </div>
            </div>
            <p class="text-slate-700 text-sm leading-relaxed mt-4">
              ProHomeFix no recaba deliberadamente datos personales sensibles, salvo en aquellos casos
              en los que sea estrictamente necesario y con el consentimiento expreso del titular.
            </p>
          </section>

          <!-- 3. Finalidades -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:clipboard-document-check" class="w-7 h-7 text-green-600 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                3. Finalidades del tratamiento de datos personales
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              Tus datos personales serán utilizados para las siguientes finalidades primarias, necesarias
              para la prestación del servicio:
            </p>
            <ul class="list-disc list-inside space-y-1 text-slate-700 mb-4">
              <li>Creación y administración de tu cuenta en la Plataforma.</li>
              <li>Vinculación entre clientes y profesionales de servicios domésticos.</li>
              <li>Gestión, seguimiento y confirmación de servicios contratados.</li>
              <li>Atención a dudas, aclaraciones y soporte al usuario.</li>
              <li>Cobro de servicios y gestión de pagos.</li>
            </ul>
            <p class="text-slate-700 leading-relaxed mb-3">
              Adicionalmente, podremos utilizar tus datos para las siguientes finalidades secundarias:
            </p>
            <ul class="list-disc list-inside space-y-1 text-slate-700 mb-4">
              <li>Envío de notificaciones, promociones y ofertas relacionadas con la Plataforma.</li>
              <li>Encuestas de satisfacción y mejora continua del servicio.</li>
              <li>Estadísticas internas y análisis de uso de la Plataforma.</li>
            </ul>
            <p class="text-slate-700 text-sm leading-relaxed">
              Si no deseas que tus datos se utilicen para fines secundarios, podrás manifestarlo en
              cualquier momento a través de los medios de contacto indicados en este Aviso.
            </p>
          </section>

          <!-- 4. Cookies -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:globe-alt" class="w-7 h-7 text-orange-500 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                4. Uso de cookies y tecnologías similares
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              ProHomeFix utiliza cookies y tecnologías similares para mejorar la experiencia del usuario,
              recordar tus preferencias y analizar el uso de la Plataforma.
            </p>
            <ul class="list-disc list-inside space-y-1 text-slate-700 mb-4">
              <li>Cookies estrictamente necesarias para el funcionamiento del sitio.</li>
              <li>Cookies de análisis para comprender el rendimiento y uso de la Plataforma.</li>
              <li>Cookies de personalización para mostrar contenido relevante.</li>
            </ul>
            <p class="text-slate-700 text-sm leading-relaxed">
              Puedes configurar tu navegador para deshabilitar o eliminar las cookies; sin embargo, esto
              podría afectar el correcto funcionamiento de algunas funciones de la Plataforma.
            </p>
          </section>

          <!-- 5. Transferencias -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:arrows-right-left" class="w-7 h-7 text-blue-500 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                5. Transferencias de datos personales
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              ProHomeFix únicamente compartirá tus datos personales con terceros cuando sea necesario
              para cumplir con las finalidades descritas en este Aviso o por mandato legal, por ejemplo:
            </p>
            <ul class="list-disc list-inside space-y-1 text-slate-700 mb-4">
              <li>
                Con los profesionales registrados en la Plataforma, para la correcta prestación del servicio
                solicitado (por ejemplo, dirección y datos de contacto).
              </li>
              <li>Con proveedores de servicios de pago y facturación.</li>
              <li>Con autoridades competentes, cuando así lo establezca la ley.</li>
            </ul>
            <p class="text-slate-700 text-sm leading-relaxed">
              En todos los casos, ProHomeFix procurará que los terceros mantengan estrictas medidas de
              confidencialidad y protección de datos personales.
            </p>
          </section>

          <!-- 6. Derechos ARCO -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:document-text" class="w-7 h-7 text-emerald-600 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                6. Derechos ARCO y medios para ejercerlos
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              Como titular de los datos personales, tienes derecho a:
            </p>
            <ul class="list-disc list-inside space-y-1 text-slate-700 mb-4">
              <li>Acceder a tus datos personales en posesión de ProHomeFix.</li>
              <li>Rectificar tus datos cuando sean inexactos o incompletos.</li>
              <li>Cancelar tus datos cuando consideres que no se requieren para alguna de las finalidades señaladas.</li>
              <li>Oponerte al tratamiento de tus datos para fines específicos.</li>
            </ul>
            <p class="text-slate-700 text-sm leading-relaxed mb-2">
              Para ejercer tus derechos ARCO, así como para revocar el consentimiento otorgado, podrás
              contactarnos a través del formulario de contacto disponible en la Plataforma, indicando:
            </p>
            <ul class="list-disc list-inside space-y-1 text-slate-700 text-sm mb-2">
              <li>Nombre completo y medio de contacto para responder a tu solicitud.</li>
              <li>Descripción clara del derecho que deseas ejercer.</li>
              <li>Copia de una identificación oficial (en caso de requerirse).</li>
            </ul>
            <p class="text-slate-700 text-sm leading-relaxed">
              Atenderemos tu solicitud en los plazos establecidos por la legislación aplicable y te
              informaremos sobre el resultado del proceso.
            </p>
          </section>

          <!-- 7. Seguridad -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:lock-closed" class="w-7 h-7 text-indigo-600 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                7. Medidas de seguridad
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              ProHomeFix implementa medidas de seguridad administrativas, técnicas y físicas
              razonables para proteger tus datos personales contra daño, pérdida, alteración,
              destrucción o uso no autorizado.
            </p>
            <p class="text-slate-700 text-sm leading-relaxed">
              No obstante, ningún sistema es completamente seguro; por ello, te recomendamos que también
              protejas tu información utilizando contraseñas robustas y no compartiendo tus credenciales
              de acceso con terceros.
            </p>
          </section>

          <!-- 8. Cambios -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:arrow-path" class="w-7 h-7 text-pink-500 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                8. Cambios al Aviso de Privacidad
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              ProHomeFix se reserva el derecho de realizar modificaciones o actualizaciones al presente
              Aviso de Privacidad en cualquier momento, para atender cambios legislativos, políticas
              internas o nuevos requerimientos para la prestación de nuestros servicios.
            </p>
            <p class="text-slate-700 text-sm leading-relaxed">
              Cualquier cambio sustancial será publicado en la Plataforma. Te recomendamos revisarlo
              periódicamente para estar al tanto de cómo protegemos tu información.
            </p>
          </section>

          <!-- 9. Aceptación -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:hand-thumb-up" class="w-7 h-7 text-green-500 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                9. Aceptación del Aviso de Privacidad
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              Al utilizar la Plataforma de ProHomeFix, registrarte como usuario o profesional, o
              proporcionarnos tus datos personales por cualquier medio, se entiende que has leído,
              comprendido y aceptado los términos del presente Aviso de Privacidad.
            </p>
            <p class="text-slate-700 text-sm leading-relaxed">
              Si no estás de acuerdo con este Aviso, te recomendamos abstenerte de utilizar la
              Plataforma o contactar con nosotros para resolver cualquier duda.
            </p>
          </section>
        </div>

        <!-- CTA Legal / Contacto -->
        <div class="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-10 text-center text-white">
          <h3 class="text-2xl font-bold mb-3">¿Tienes dudas sobre tu privacidad?</h3>
          <p class="text-blue-100 mb-6 max-w-2xl mx-auto">
            Si deseas más información sobre cómo protegemos tus datos o quieres ejercer tus derechos ARCO,
            contáctanos a través de la sección de contacto en ProHomeFix.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Ir a Contacto
          </NuxtLink>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Aviso de Privacidad - ProHomeFix',
  meta: [
    {
      name: 'description',
      content:
        'Aviso de Privacidad de ProHomeFix. Conoce cómo protegemos y utilizamos tus datos personales al conectar hogares con profesionales de confianza.',
    },
  ],
})
</script>
