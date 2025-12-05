export const mockServices = [
  {
    id: 1,
    title: "Reparación de Fugas de Agua",
    category: "plomeria",
    categoryLabel: "Plomería",
    description: "Servicio profesional de detección y reparación de fugas de agua en tuberías, llaves y sanitarios. Incluye revisión completa del sistema.",
    shortDescription: "Reparación rápida y garantizada de fugas de agua",
    price: 500,
    priceType: "Desde",
    rating: 4.8,
    reviewsCount: 127,
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80",
    provider: {
      id: 1,
      name: "Juan Pérez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
      rating: 4.9,
      completedJobs: 234,
      verified: true,
      phone: "442-123-4567",
      experience: "10 años de experiencia"
    },
    location: "Querétaro Centro",
    availability: "Disponible hoy",
    featured: true,
    responseTime: "30 min",
    includes: [
      "Diagnóstico gratuito",
      "Garantía de 6 meses",
      "Material incluido",
      "Servicio a domicilio"
    ]
  },
  {
    id: 2,
    title: "Instalación de Calentador",
    category: "plomeria",
    categoryLabel: "Plomería",
    description: "Instalación profesional de calentadores de agua eléctricos y de gas. Incluye conexión, pruebas de seguridad y garantía.",
    shortDescription: "Instalación segura y certificada de calentadores",
    price: 1200,
    priceType: "Desde",
    rating: 4.9,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    provider: {
      id: 1,
      name: "Juan Pérez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
      rating: 4.9,
      completedJobs: 234,
      verified: true,
      phone: "442-123-4567",
      experience: "10 años de experiencia"
    },
    location: "Toda la ciudad",
    availability: "Agenda con 2 días",
    featured: false,
    responseTime: "1 hora",
    includes: [
      "Material de instalación",
      "Pruebas de seguridad",
      "Garantía de 1 año",
      "Limpieza del área"
    ]
  },
  {
    id: 3,
    title: "Fabricación de Muebles a Medida",
    category: "carpinteria",
    categoryLabel: "Carpintería",
    description: "Diseño y fabricación de muebles personalizados para tu hogar u oficina. Closets, libreros, escritorios y más.",
    shortDescription: "Muebles personalizados de alta calidad",
    price: 3500,
    priceType: "Desde",
    rating: 5.0,
    reviewsCount: 64,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    provider: {
      id: 2,
      name: "Carlos Martínez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
      rating: 5.0,
      completedJobs: 156,
      verified: true,
      phone: "442-234-5678",
      experience: "15 años de experiencia"
    },
    location: "Querétaro y alrededores",
    availability: "Agenda con 1 semana",
    featured: true,
    responseTime: "2 horas",
    includes: [
      "Diseño personalizado",
      "Visita a domicilio",
      "Materiales premium",
      "Instalación incluida"
    ]
  },
  {
    id: 4,
    title: "Reparación de Puertas y Ventanas",
    category: "carpinteria",
    categoryLabel: "Carpintería",
    description: "Reparación y mantenimiento de puertas y ventanas de madera. Cambio de chapas, ajustes y barnizado.",
    shortDescription: "Reparación experta de puertas y ventanas",
    price: 400,
    priceType: "Desde",
    rating: 4.7,
    reviewsCount: 92,
    image: "https://images.unsplash.com/photo-1534237886190-ced735ca4b73?w=800&q=80",
    provider: {
      id: 2,
      name: "Carlos Martínez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
      rating: 5.0,
      completedJobs: 156,
      verified: true,
      phone: "442-234-5678",
      experience: "15 años de experiencia"
    },
    location: "Zona centro y sur",
    availability: "Disponible mañana",
    featured: false,
    responseTime: "45 min",
    includes: [
      "Evaluación sin costo",
      "Herramientas incluidas",
      "Garantía 3 meses",
      "Servicio rápido"
    ]
  },
  {
    id: 5,
    title: "Limpieza Profunda de Casa",
    category: "limpieza",
    categoryLabel: "Limpieza",
    description: "Limpieza profunda y detallada de toda tu casa. Incluye cocina, baños, habitaciones, ventanas y áreas comunes.",
    shortDescription: "Limpieza completa y detallada",
    price: 800,
    priceType: "Desde",
    rating: 4.9,
    reviewsCount: 203,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    provider: {
      id: 3,
      name: "María López",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      rating: 4.9,
      completedJobs: 567,
      verified: true,
      phone: "442-345-6789",
      experience: "8 años de experiencia"
    },
    location: "Toda la ciudad",
    availability: "Disponible hoy",
    featured: true,
    responseTime: "15 min",
    includes: [
      "Productos de limpieza",
      "Equipo profesional",
      "Personal capacitado",
      "Seguro de responsabilidad"
    ]
  },
  {
    id: 6,
    title: "Limpieza de Oficinas",
    category: "limpieza",
    categoryLabel: "Limpieza",
    description: "Servicio de limpieza para oficinas y espacios comerciales. Limpieza diaria, semanal o mensual disponible.",
    shortDescription: "Mantén tu oficina impecable",
    price: 600,
    priceType: "Desde",
    rating: 4.8,
    reviewsCount: 145,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    provider: {
      id: 3,
      name: "María López",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      rating: 4.9,
      completedJobs: 567,
      verified: true,
      phone: "442-345-6789",
      experience: "8 años de experiencia"
    },
    location: "Zona empresarial",
    availability: "Horarios flexibles",
    featured: false,
    responseTime: "30 min",
    includes: [
      "Limpieza de escritorios",
      "Sanitización de baños",
      "Aspirado de alfombras",
      "Recolección de basura"
    ]
  },
  {
    id: 7,
    title: "Instalación Eléctrica Residencial",
    category: "electricidad",
    categoryLabel: "Electricidad",
    description: "Instalación y reparación de sistemas eléctricos residenciales. Contactos, lámparas, tableros y más.",
    shortDescription: "Instalaciones eléctricas seguras y certificadas",
    price: 450,
    priceType: "Desde",
    rating: 4.7,
    reviewsCount: 98,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80",
    provider: {
      id: 4,
      name: "Roberto Sánchez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
      rating: 4.8,
      completedJobs: 312,
      verified: true,
      phone: "442-456-7890",
      experience: "12 años de experiencia"
    },
    location: "Querétaro completo",
    availability: "Disponible hoy",
    featured: false,
    responseTime: "1 hora",
    includes: [
      "Material básico incluido",
      "Certificación CFE",
      "Garantía de trabajo",
      "Revisión completa"
    ]
  },
  {
    id: 8,
    title: "Pintura Interior y Exterior",
    category: "pintura",
    categoryLabel: "Pintura",
    description: "Servicio profesional de pintura para interiores y exteriores. Preparación de superficies, aplicación y acabados.",
    shortDescription: "Dale nueva vida a tus espacios",
    price: 2500,
    priceType: "Desde",
    rating: 4.9,
    reviewsCount: 176,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80",
    provider: {
      id: 5,
      name: "Luis Ramírez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luis",
      rating: 4.9,
      completedJobs: 289,
      verified: true,
      phone: "442-567-8901",
      experience: "18 años de experiencia"
    },
    location: "Toda la zona metropolitana",
    availability: "Agenda con 3 días",
    featured: true,
    responseTime: "2 horas",
    includes: [
      "Cotización sin costo",
      "Pintura de calidad",
      "Preparación de muros",
      "Limpieza final"
    ]
  }
]

export const categories = [
  { id: 'plomeria', name: 'Plomería', icon: 'heroicons:wrench-screwdriver', color: 'bg-blue-500' },
  { id: 'carpinteria', name: 'Carpintería', icon: 'heroicons:hammer', color: 'bg-amber-600' },
  { id: 'limpieza', name: 'Limpieza', icon: 'heroicons:sparkles', color: 'bg-green-500' },
  { id: 'electricidad', name: 'Electricidad', icon: 'heroicons:bolt', color: 'bg-yellow-500' },
  { id: 'pintura', name: 'Pintura', icon: 'heroicons:paint-brush', color: 'bg-purple-500' }
]