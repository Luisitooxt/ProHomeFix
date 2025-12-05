<template>
  <NuxtLayout>
    <!-- Hero -->
    <section class="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
      <div
        class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC00Yy0xLjEgMC0yIC45LTIgMnY0YzAgMS4xLjkgMiAyIDJoNGMxLjEgMCAyLS45IDItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"
      ></div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          class="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl mb-6"
        >
          <Icon name="heroicons:scale" class="w-12 h-12 text-white" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Términos y Condiciones
        </h1>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Te invitamos a leer detenidamente estos Términos y Condiciones antes de utilizar la
          plataforma ProHomeFix.
        </p>
      </div>
    </section>

    <!-- Contenido principal -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Nota -->
        <div class="mb-8 bg-purple-50 border border-purple-100 rounded-2xl p-5 flex gap-4">
          <div class="mt-1">
            <Icon name="heroicons:exclamation-triangle" class="w-7 h-7 text-purple-600" />
          </div>
          <div>
            <h2 class="text-lg font-semibold text-slate-900 mb-1">Acuerdo entre tú y ProHomeFix</h2>
            <p class="text-sm text-slate-700 leading-relaxed">
              Al acceder, navegar o utilizar ProHomeFix, aceptas quedar vinculado por los presentes
              Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, te recomendamos no
              utilizar la plataforma.
            </p>
          </div>
        </div>

        <div class="space-y-10 text-slate-800">
          <!-- 1. Objeto -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:bookmark-square" class="w-7 h-7 text-blue-600 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                1. Objeto de la Plataforma
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed">
              ProHomeFix es una plataforma digital que facilita la conexión entre usuarios que
              requieren servicios domésticos (como plomería, electricidad, limpieza, entre otros) y
              profesionales independientes o empresas que ofrecen dichos servicios. ProHomeFix no es
              empleador de los profesionales ni presta directamente los servicios contratados, sino que
              actúa como un intermediario tecnológico.
            </p>
          </section>

          <!-- 2. Aceptación -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:check-badge" class="w-7 h-7 text-green-600 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                2. Aceptación de los Términos
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-3">
              El uso de la Plataforma implica que has leído, entendido y aceptas los presentes Términos
              y Condiciones, así como el Aviso de Privacidad. ProHomeFix se reserva el derecho de
              actualizar o modificar estos Términos en cualquier momento.
            </p>
            <p class="text-slate-700 text-sm leading-relaxed">
              Las modificaciones entrarán en vigor desde su publicación en la Plataforma. El uso
              continuado de la misma después de dichos cambios constituye tu aceptación de las nuevas
              condiciones.
            </p>
          </section>

          <!-- 3. Registro y cuentas -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:user-circle" class="w-7 h-7 text-indigo-600 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                3. Registro de usuario y cuenta
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              Para utilizar ciertas funcionalidades de ProHomeFix, puede ser necesario crear una
              cuenta de usuario o de profesional. Al hacerlo, te comprometes a:
            </p>
            <ul class="list-disc list-inside space-y-1 text-slate-700 mb-4">
              <li>Proporcionar información veraz, completa y actualizada.</li>
              <li>Mantener la confidencialidad de tu nombre de usuario y contraseña.</li>
              <li>Notificar a ProHomeFix sobre cualquier uso no autorizado de tu cuenta.</li>
            </ul>
            <p class="text-slate-700 text-sm leading-relaxed">
              Eres responsable de toda actividad que ocurra en tu cuenta. ProHomeFix podrá suspender o
              cancelar cuentas que incumplan estos Términos o hagan un uso inadecuado de la Plataforma.
            </p>
          </section>

          <!-- 4. Uso permitido -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:cursor-arrow-rays" class="w-7 h-7 text-orange-500 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                4. Uso permitido de la Plataforma
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-3">
              Te comprometes a utilizar ProHomeFix únicamente para fines lícitos y conforme a la
              normativa aplicable. En particular, queda prohibido:
            </p>
            <ul class="list-disc list-inside space-y-1 text-slate-700 mb-4">
              <li>Utilizar la Plataforma para actividades fraudulentas o engañosas.</li>
              <li>Suplantar la identidad de otra persona o proporcionar información falsa.</li>
              <li>Interferir con el funcionamiento de ProHomeFix o intentar acceder a áreas restringidas.</li>
              <li>Realizar actos que puedan dañar, deshabilitar o sobrecargar la infraestructura.</li>
            </ul>
            <p class="text-slate-700 text-sm leading-relaxed">
              ProHomeFix se reserva el derecho de restringir, suspender o cancelar el acceso a usuarios
              que contravengan estas disposiciones.
            </p>
          </section>

          <!-- 5. Servicios y relación con profesionales -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:briefcase" class="w-7 h-7 text-blue-500 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                5. Servicios contratados a través de ProHomeFix
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              Los servicios que se contratan a través de la Plataforma son prestados directamente por
              profesionales independientes o empresas (“Profesionales”), no por ProHomeFix. Al contratar
              un servicio:
            </p>
            <ul class="list-disc list-inside space-y-1 text-slate-700 mb-4">
              <li>Reconoces que la ejecución del trabajo es responsabilidad del Profesional.</li>
              <li>Te comprometes a proporcionar información clara y suficiente sobre el servicio requerido.</li>
              <li>Deberás verificar que el trabajo realizado cumple con tus expectativas antes de marcarlo como completado.</li>
            </ul>
            <p class="text-slate-700 text-sm leading-relaxed">
              ProHomeFix puede establecer políticas de garantía o soporte, pero no asume la ejecución
              directa de los trabajos.
            </p>
          </section>

          <!-- 6. Pagos y facturación -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:banknotes" class="w-7 h-7 text-emerald-600 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                6. Pagos, comisiones y facturación
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              Los precios de los servicios podrán mostrarse en la Plataforma o acordarse entre el
              usuario y el Profesional, según el modelo de servicio. En general:
            </p>
            <ul class="list-disc list-inside space-y-1 text-slate-700 mb-4">
              <li>Podrán aplicarse comisiones por el uso de la Plataforma.</li>
              <li>Los pagos se gestionarán a través de los métodos autorizados por ProHomeFix.</li>
              <li>En caso de requerir factura, deberás proporcionar tus datos fiscales correctos.</li>
            </ul>
            <p class="text-slate-700 text-sm leading-relaxed">
              Cualquier cargo no reconocido deberá reportarse de inmediato a ProHomeFix y/o al proveedor
              de pagos correspondiente para su revisión.
            </p>
          </section>

          <!-- 7. Opiniones y calificaciones -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:star" class="w-7 h-7 text-yellow-500 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                7. Opiniones, reseñas y contenido generado por el usuario
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              ProHomeFix puede permitir que los usuarios dejen reseñas, calificaciones o comentarios
              sobre los Profesionales y servicios. Al hacerlo, te comprometes a:
            </p>
            <ul class="list-disc list-inside space-y-1 text-slate-700 mb-4">
              <li>Expresar opiniones basadas en tu experiencia real.</li>
              <li>No utilizar lenguaje ofensivo, difamatorio o discriminatorio.</li>
              <li>No publicar información confidencial o de terceros sin su autorización.</li>
            </ul>
            <p class="text-slate-700 text-sm leading-relaxed">
              ProHomeFix podrá moderar, editar o eliminar contenido que considere inapropiado o que
              infrinja estos Términos.
            </p>
          </section>

          <!-- 8. Propiedad intelectual -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:academic-cap" class="w-7 h-7 text-purple-600 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                8. Propiedad intelectual
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              Todos los derechos de propiedad intelectual relacionados con ProHomeFix, incluyendo
              marcas, logotipos, diseño, código, textos, imágenes y otros elementos, son propiedad de
              ProHomeFix o de sus licenciantes.
            </p>
            <p class="text-slate-700 text-sm leading-relaxed">
              Queda prohibida la reproducción, distribución, modificación o uso no autorizado de
              cualquier contenido de la Plataforma, salvo autorización expresa y por escrito de
              ProHomeFix.
            </p>
          </section>

          <!-- 9. Responsabilidad y limitación -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:shield-exclamation" class="w-7 h-7 text-red-500 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                9. Responsabilidad y limitación
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              ProHomeFix realiza esfuerzos razonables para mantener la Plataforma disponible y
              funcionando correctamente; sin embargo, no garantiza que esté libre de errores,
              interrupciones o fallas técnicas.
            </p>
            <p class="text-slate-700 text-sm leading-relaxed mb-2">
              En la medida permitida por la ley aplicable, ProHomeFix no será responsable por:
            </p>
            <ul class="list-disc list-inside space-y-1 text-slate-700 text-sm mb-4">
              <li>Daños indirectos, incidentales, especiales o consecuenciales.</li>
              <li>Acciones u omisiones de los Profesionales o usuarios.</li>
              <li>Pérdida de datos, ingresos, reputación o cualquier otro perjuicio derivado del uso de la Plataforma.</li>
            </ul>
            <p class="text-slate-700 text-sm leading-relaxed">
              Nada en estos Términos excluye la responsabilidad que no pueda ser limitada conforme a la
              legislación aplicable.
            </p>
          </section>

          <!-- 10. Terminación -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:power" class="w-7 h-7 text-slate-700 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                10. Suspensión y terminación
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              ProHomeFix podrá suspender temporalmente o cancelar definitivamente el acceso a la
              Plataforma a cualquier usuario que:
            </p>
            <ul class="list-disc list-inside space-y-1 text-slate-700 mb-4">
              <li>Incumpla estos Términos y Condiciones.</li>
              <li>Realice actividades fraudulentas, ilegales o que afecten a otros usuarios o Profesionales.</li>
              <li>Utilice la Plataforma de manera contraria a su objeto.</li>
            </ul>
            <p class="text-slate-700 text-sm leading-relaxed">
              El usuario también puede solicitar la cancelación de su cuenta mediante los medios de
              contacto disponibles en la Plataforma.
            </p>
          </section>

          <!-- 11. Ley aplicable -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:scale" class="w-7 h-7 text-blue-700 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                11. Legislación aplicable y jurisdicción
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              Estos Términos y Condiciones se regirán e interpretarán de conformidad con las leyes
              vigentes en los Estados Unidos Mexicanos.
            </p>
            <p class="text-slate-700 text-sm leading-relaxed">
              Para la interpretación y cumplimiento de los mismos, las partes se someten a la
              jurisdicción de los tribunales competentes de la ciudad que ProHomeFix determine, renunciando
              a cualquier otro fuero que pudiera corresponderles por razón de su domicilio presente o futuro.
            </p>
          </section>

          <!-- 12. Contacto -->
          <section class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div class="flex items-start gap-3 mb-4">
              <Icon name="heroicons:envelope" class="w-7 h-7 text-teal-600 mt-1" />
              <h2 class="text-2xl font-bold text-slate-900">
                12. Contacto
              </h2>
            </div>
            <p class="text-slate-700 leading-relaxed mb-4">
              Si tienes dudas, comentarios o solicitudes relacionadas con estos Términos y Condiciones,
              puedes ponerte en contacto con ProHomeFix a través de la sección de contacto disponible en
              la Plataforma.
            </p>
            <p class="text-slate-700 text-sm leading-relaxed">
              Te recomendamos revisar también nuestro Aviso de Privacidad para conocer cómo protegemos
              tus datos personales.
            </p>
          </section>
        </div>

        <!-- CTA final -->
        <div class="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-10 text-center text-white">
          <h3 class="text-2xl font-bold mb-3">¿Tienes alguna pregunta sobre estos Términos?</h3>
          <p class="text-blue-100 mb-6 max-w-2xl mx-auto">
            Nuestro equipo está listo para apoyarte y resolver cualquier duda sobre el uso de ProHomeFix.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Contactar a ProHomeFix
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
  title: 'Términos y Condiciones - ProHomeFix',
  meta: [
    {
      name: 'description',
      content:
        'Términos y Condiciones de uso de la plataforma ProHomeFix. Conoce las reglas, responsabilidades y condiciones para utilizar nuestros servicios.',
    },
  ],
})
</script>
