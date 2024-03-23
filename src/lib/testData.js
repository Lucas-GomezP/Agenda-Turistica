export const municipios = [
  {
    id_municipio: 1,
    nombre_municipio: 'Nacion del Fuego'
  },
  {
    id_municipio: 2,
    nombre_municipio: 'Nacion del Agua'
  },
  {
    id_municipio: 3,
    nombre_municipio: 'Nacion del Aire'
  },
  {
    id_municipio: 4,
    nombre_municipio: 'Nacion de la Tierra'
  }
]

export const localidad = [
  {
    id_localidad: 1,
    nombre_localidad: 'Academia de Tierra Control del Maestro Yu'
  },
  {
    id_localidad: 2,
    nombre_localidad: 'Acantilados Negros'
  },
  {
    id_localidad: 3,
    nombre_localidad: 'Abadia del sur'
  },
  {
    id_localidad: 4,
    nombre_localidad: 'Industrias Futuro'
  },
  {
    id_localidad: 5,
    nombre_localidad: 'Isla Kyoshi'
  },
  {
    id_localidad: 6,
    nombre_localidad: 'Mar del Este'
  },
  {
    id_localidad: 7,
    nombre_localidad: 'Bahia Camaleon'
  },
  {
    id_localidad: 8,
    nombre_localidad: 'Oasis de las Palmeras Brumosas'
  },
  {
    id_localidad: 9,
    nombre_localidad: 'Palacio Real de la Nacion Del Fuego'
  },
  {
    id_localidad: 10,
    nombre_localidad: 'Prision de Ba Sing Se'
  },
  {
    id_localidad: 11,
    nombre_localidad: 'Complejo de la Tribu Agua del Sur'
  },
  {
    id_localidad: 12,
    nombre_localidad: 'Rio Jang Hui'
  }
]

export const eventos = [
  {
    id_evento: 1,
    nombre_evento: 'Fiesta de Primavera',
    id_usuario: 1,
    id_municipio: 1,
    id_localidad: 3,
    direccion: 'Calle Flores #123',
    fecha_inicio: '2024-03-25',
    mes_estimado: 'Marzo',
    hora: '20:00:00',
    id_tipo_evento: 1,
    descripcion: 'Una fiesta para dar la bienvenida a la primavera.',
    palabras_claves: 'Fiesta, Primavera, Diversión',
    id_estado: 1,
    imagen: 'https://marketplace.canva.com/EAFEBm3khfo/1/0/1131w/canva-black-blue-modern-party-night-club-flyer-IF0d5Es4t6c.jpg'
  },
  {
    id_evento: 2,
    nombre_evento: 'Concierto en el Parque',
    id_usuario: 2,
    id_municipio: 2,
    id_localidad: 7,
    direccion: 'Parque Central',
    fecha_inicio: '2024-03-25',
    mes_estimado: 'Marzo',
    hora: '18:30:00',
    id_tipo_evento: 2,
    descripcion: 'Disfruta de música en vivo al aire libre en nuestro hermoso parque.',
    palabras_claves: 'Concierto, Música, Parque',
    id_estado: 1,
    imagen: 'https://img.elegantflyer.com/templates/preview/sunday-service-premium-psd-flyer-template-2-119966.jpg'
  },
  {
    id_evento: 3,
    nombre_evento: 'Taller de Cocina',
    id_usuario: 3,
    id_municipio: 3,
    id_localidad: 11,
    direccion: 'Avenida Principal #456',
    fecha_inicio: '2024-03-25',
    mes_estimado: 'Marzo',
    hora: '15:00:00',
    id_tipo_evento: 3,
    descripcion: 'Aprende nuevas recetas y técnicas de cocina con nuestros chefs expertos.',
    palabras_claves: 'Taller, Cocina, Aprendizaje',
    id_estado: 1,
    imagen: 'https://brandpacks.com/wp-content/uploads/edd/2020/11/winter-event-flyer-template-psd-vector-photoshop-illustrator.jpg'
  },
  {
    id_evento: 4,
    nombre_evento: 'Feria Artesanal',
    id_usuario: 4,
    id_municipio: 4,
    id_localidad: 4,
    direccion: 'Plaza del Pueblo',
    fecha_inicio: '2024-04-05',
    mes_estimado: 'Abril',
    hora: '11:00:00',
    id_tipo_evento: 4,
    descripcion: 'Explora la creatividad de los artesanos locales en nuestra feria.',
    palabras_claves: 'Feria, Artesanal, Creatividad',
    id_estado: 1,
    imagen: 'https://psdfreebies.com/wp-content/uploads/2021/03/Summer-Time-Party-Event-Flyer-PSD-Preview-730x1024.jpg'
  },
  {
    id_evento: 5,
    nombre_evento: 'Charla sobre Sostenibilidad',
    id_usuario: 1,
    id_municipio: 2,
    id_localidad: 9,
    direccion: 'Centro Comunitario',
    fecha_inicio: '2024-04-10',
    mes_estimado: 'Abril',
    hora: '17:30:00',
    id_tipo_evento: 5,
    descripcion: 'Únete a la conversación sobre cómo podemos ser más sostenibles en nuestra comunidad.',
    palabras_claves: 'Sostenibilidad, Charla, Comunidad',
    id_estado: 1,
    imagen: 'https://assets.visme.co/templates/blockinfographics/fullsize/i_Event-Flyer-Checklist-Infographic_full.jpg'
  },
  {
    id_evento: 6,
    nombre_evento: 'Carrera Solidaria',
    id_usuario: 2,
    id_municipio: 3,
    id_localidad: 6,
    direccion: 'Paseo del Río',
    fecha_inicio: '2024-04-15',
    mes_estimado: 'Abril',
    hora: '08:00:00',
    id_tipo_evento: 6,
    descripcion: 'Corre por una buena causa y apoya a organizaciones benéficas locales.',
    palabras_claves: 'Carrera, Solidaridad, Comunidad',
    id_estado: 1,
    imagen: 'https://edit.org/img/blog/lnc-free-networking-flyer-design-template.webp'
  },
  {
    id_evento: 7,
    nombre_evento: 'Noche de Cine al Aire Libre',
    id_usuario: 3,
    id_municipio: 1,
    id_localidad: 12,
    direccion: 'Parque de la Paz',
    fecha_inicio: '2024-03-28',
    mes_estimado: 'Marzo',
    hora: '19:00:00',
    id_tipo_evento: 1,
    descripcion: 'Disfruta de una película bajo las estrellas con amigos y familiares.',
    palabras_claves: 'Cine, Noche, Familia',
    id_estado: 1,
    imagen: 'https://www.creativefabrica.com/wp-content/uploads/2020/09/14/Music-Festival-Flyer-Template-V3-Graphics-5475238-2-580x386.jpg'
  },
  {
    id_evento: 8,
    nombre_evento: 'Feria Gastronómica',
    id_usuario: 4,
    id_municipio: 4,
    id_localidad: 2,
    direccion: 'Calle Principal #789',
    fecha_inicio: '2024-04-02',
    mes_estimado: 'Abril',
    hora: '12:00:00',
    id_tipo_evento: 2,
    descripcion: ' Prueba deliciosas comidas de diferentes culturas en nuestra feria gastronómica.',
    palabras_claves: 'Feria, Gastronomía, Comida',
    id_estado: 1,
    imagen: 'https://media.istockphoto.com/id/1329348008/vector/business-leaflet-brochure-flyer-template-design-set-corporate-flyer-template-a4-size.jpg?s=612x612&w=0&k=20&c=3lTMm8huKHDGfhTyKwNtyj-8aSQueS3LyCEX1m1aiH4='
  },
  {
    id_evento: 9,
    nombre_evento: 'Exposición de Arte',
    id_usuario: 1,
    id_municipio: 2,
    id_localidad: 5,
    direccion: 'Galería de Arte Municipal',
    fecha_inicio: '2024-03-28',
    mes_estimado: 'Marzo',
    hora: '16:00:00',
    id_tipo_evento: 3,
    descripcion: 'Descubre el talento artístico local en nuestra exposición de arte.',
    palabras_claves: 'Exposición, Arte, Cultura',
    id_estado: 1,
    imagen: 'https://images.creativemarket.com/0.1.0/ps/7588265/580/386/m1/fpnw/wm0/01_creative-market-upcoming-events-flyer-templates-kinzi21-.jpg?1&s=e806059bd06561bd0fde04b6f5856886'
  },
  {
    id_evento: 10,
    nombre_evento: 'Torneo de Ajedrez',
    id_usuario: 2,
    id_municipio: 3,
    id_localidad: 10,
    direccion: 'Club de Ajedrez',
    fecha_inicio: '2024-04-08',
    mes_estimado: 'Abril',
    hora: '10:00:00',
    id_tipo_evento: 4,
    descripcion: 'Demuestra tus habilidades en nuestro torneo de ajedrez y compite por premios.',
    palabras_claves: 'Torneo, Ajedrez, Competencia',
    id_estado: 1,
    imagen: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/upcoming-events-flyer-design-template-61ed8bcf85c5e2b9d0826e6ef0ff3941_screen.jpg?ts=1698305051'
  },
  {
    id_evento: 11,
    nombre_evento: 'Festival de Jazz',
    id_usuario: 3,
    id_municipio: 1,
    id_localidad: 1,
    direccion: 'Teatro Municipal',
    fecha_inicio: '2024-03-19',
    mes_estimado: 'Marzo',
    hora: '21:00:00',
    id_tipo_evento: 5,
    descripcion: 'Sumérgete en el mundo del jazz con actuaciones en vivo de talentosos músicos.',
    palabras_claves: 'Festival, Jazz, Música',
    id_estado: 1,
    imagen: 'https://as1.ftcdn.net/v2/jpg/02/89/93/58/1000_F_289935812_xCIEEo2bzXC4dT8kbA4A41GEUdZXXCrL.jpg'
  },
  {
    id_evento: 12,
    nombre_evento: 'Feria de Libros Usados',
    id_usuario: 4,
    id_municipio: 4,
    id_localidad: 8,
    direccion: 'Plaza del Mercado',
    fecha_inicio: '2024-04-12',
    mes_estimado: 'Abril',
    hora: '13:30:00',
    id_tipo_evento: 6,
    descripcion: 'Encuentra tesoros literarios a precios asequibles en nuestra feria de libros usados.',
    palabras_claves: 'Feria, Libros, Literatura',
    id_estado: 1,
    imagen: 'https://images.freecreatives.com/wp-content/uploads/2016/12/Summer-Event-Planner-Flyer.jpg'
  },
  {
    id_evento: 13,
    nombre_evento: 'Taller de Fotografía',
    id_usuario: 1,
    id_municipio: 2,
    id_localidad: 11,
    direccion: 'Centro Cultural',
    fecha_inicio: '2024-03-26',
    mes_estimado: 'Marzo',
    hora: '14:00:00',
    id_tipo_evento: 1,
    descripcion: 'Aprende técnicas de fotografía y captura momentos inolvidables con nuestra guía experta.',
    palabras_claves: 'Taller, Fotografía, Aprendizaje',
    id_estado: 1,
    imagen: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/2659/posts/32136/image-upload/professional%20fundraiser%20flyer%20template%20intro.jpg'
  },
  {
    id_evento: 14,
    nombre_evento: 'Presentación de Teatro Infantil',
    id_usuario: 2,
    id_municipio: 3,
    id_localidad: 3,
    direccion: 'Casa de la Cultura',
    fecha_inicio: '2024-04-18',
    mes_estimado: 'Abril',
    hora: '16:30:00',
    id_tipo_evento: 2,
    descripcion: 'Disfruta de una tarde mágica con divertidas actuaciones teatrales para niños.',
    palabras_claves: 'Teatro, Infantil, Diversión',
    id_estado: 1,
    imagen: 'https://images.template.net/278195/Industrial-Aesthetic-Header-edit-online.jpg'
  },
  {
    id_evento: 15,
    nombre_evento: 'Conferencia sobre Innovación Tecnológica',
    id_usuario: 3,
    id_municipio: 1,
    id_localidad: 9,
    direccion: 'Centro de Convenciones',
    fecha_inicio: '2024-03-24',
    mes_estimado: 'Marzo',
    hora: '18:00:00',
    id_tipo_evento: 3,
    descripcion: 'Explora las últimas tendencias en innovación tecnológica con expertos de la industria.',
    palabras_claves: 'Conferencia, Innovación, Tecnología',
    id_estado: 1,
    imagen: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/corporate-business-masterclass-event-flyer-design-template-d8b290ed612651c0e0aff048f85fb41f_screen.jpg?ts=1681255725'
  },
]

export const tipo_de_eventos = [
  {
    id_tipo_evento: 1,
    nombre_tipo_de_evento: 'Conciertos y Espectaculos'
  },
  {
    id_tipo_evento: 2,
    nombre_tipo_de_evento: 'Talleres y Seminarios'
  },
  {
    id_tipo_evento: 3,
    nombre_tipo_de_evento: 'Ferias y Mercados'
  },
  {
    id_tipo_evento: 4,
    nombre_tipo_de_evento: 'Conferencias y Charlas'
  },
  {
    id_tipo_evento: 5,
    nombre_tipo_de_evento: 'Deportes y Actividades al Aire Libre'
  },
  {
    id_tipo_evento: 6,
    nombre_tipo_de_evento: 'Arte y Cultura'
  },
]