document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensaje enviado. Nos pondremos en contacto pronto.");
    form.reset();
  });

  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');  // Cambié 'active' por 'open'
  });
});
 
 document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.carousel-track');

    track.addEventListener('mouseenter', () => {
      track.classList.add('paused');
    });

    track.addEventListener('mouseleave', () => {
      track.classList.remove('paused');
    });
  });

 document.addEventListener("DOMContentLoaded", function () {
    const argentinaCoords = [-34.59846860118958, -58.37577445862274];
    

    // Crear el mapa
const map = L.map('mapa-kme', {
  center: argentinaCoords,
  zoom: 3,
  scrollWheelZoom: false, // Bloquear scroll del mouse
    zoomControl: false, // <<<< DESACTIVAR los controles por defecto

  worldCopyJump: true
});

map.touchZoom.disable();


// Añadir capa base
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri'
}).addTo(map);

// Añadir solo UNA VEZ los controles de zoom
L.control.zoom({
  position: 'topright'
}).addTo(map);

  // Corregir tamaño si el mapa aparece más tarde
  setTimeout(() => {
    map.invalidateSize();
  }, 300);

  function panMap(x, y) {
  // 'map' es tu objeto Leaflet
  map.panBy([x, y], {animate: true});
}
    

  const markerArgentina = L.marker(argentinaCoords).addTo(map);

  markerArgentina.bindPopup(`
    <div style="background-color: #333; color: white; padding: 10px; border-radius: 8px; max-width: 250px;">
      <h4 style="color: #ff6f00; margin-top: 0;">KME Argentina (Buenos Aires)</h4>
      <p style="margin: 0;">Av. Cordoba 632, piso 8 of A,  CABA, Argentina</p>
    </div>
  `);

  markerArgentina.on('popupopen', function () {
    map.setView(argentinaCoords, 15, { animate: true });
  });

  // Coordenadas aproximadas por país
  const otrasOficinas = [
    { lat: 41.3275, lng: 19.8189 }, // Albania
    { lat: 36.7529, lng: 3.0420 },  // Algeria
    { lat: -8.8390, lng: 13.2894 }, // Angola
    { lat: 17.1200, lng: -61.8449 }, // Barbuda
    { lat: -33.8688, lng: 151.2093 }, // Australia
    { lat: 48.2082, lng: 16.3738 }, // Austria
    { lat: 26.0667, lng: 50.5577 }, // Bahrain
    


    { lat: 44.1517, lng: 17.2714 }, // Herzegovina

    //BRASIL

    
{ lat: -22.9068, lng: -43.1729 }, // Rio de Janeiro
{ lat: -19.9167, lng: -43.9345 }, // Belo Horizonte
{ lat: -3.7172,  lng: -38.5433 }, // Fortaleza
{ lat: -8.0476,  lng: -34.8770 }, // Recife
{ lat: -23.9608, lng: -46.3336 }, // Santos
{ lat: -32.0350, lng: -52.0986 }, // Rio Grande
{ lat: -8.3910,  lng: -34.9913 }, // Suape (cerca de Recife)
{ lat: -3.1170,  lng: -60.0250 },  // Manaos

    { lat: 42.6977, lng: 23.3219 }, // Bulgaria
    { lat: 11.5621, lng: 104.8885 }, // Cambodia
    { lat: -33.4489, lng: -70.6693 }, // Chile

    // China
    { lat: 39.9042, lng: 116.4074 }, // China
    { lat: 31.2304, lng: 121.4737 }, // Shanghai
    { lat: 22.5431, lng: 114.0579 }, // Shenzhen
    { lat: 23.1291, lng: 113.2644 }, // Guangzhou
    { lat: 29.5630, lng: 106.5516 }, // Chongqing
    { lat: 34.3416, lng: 108.9398 }, // Xi'an
    { lat: 36.0671, lng: 120.3826 }, // Qingdao
{ lat: 29.8683, lng: 121.5440 }, // Ningbo
{ lat: 24.4798, lng: 118.0894 }, // Xiamen
{ lat: 22.3193, lng: 114.1694 }, // Hong Kong


    { lat: 4.7110, lng: -74.0721 }, // Colombia
    { lat: 49.8175, lng: 15.4730 }, // Republic (assumed Czech Republic)
    { lat: 9.7489, lng: -83.7534 }, // Costa Rica
    { lat: 45.1, lng: 15.2 }, // Croatia
    { lat: 35.1856, lng: 33.3823 }, // Cyprus
    { lat: 55.6761, lng: 12.5683 }, // Denmark
    { lat: 11.8251, lng: 42.5903 }, // Djibouti
    { lat: -0.1807, lng: -78.4678 }, // Ecuador
    
    { lat: -17.7134, lng: 178.0650 }, // Fiji
    
    { lat: 23.8103, lng: 90.4125 },   // Dhaka, Bangladesh
  { lat: 13.0827, lng: 80.2707 },   // Chennai, India
  { lat: 6.9271, lng: 79.8612 },    // Colombo, Sri Lanka
  { lat: 19.7515, lng: 75.7139 },   // Maharashtra, India
  { lat: 24.8607, lng: 67.0011 },   // Karachi, Pakistan
  { lat: 34.5553, lng: 69.2075 },   // Kabul, Afghanistan
  { lat: 24.4539, lng: 54.3773 },   // Abu Dhabi, UAE
  { lat: 26.4207, lng: 50.0888 },   // Dammam, Saudi Arabia
  { lat: 29.3759, lng: 47.9774 },   // Kuwait City, Kuwait
  { lat: 29.5320, lng: 35.0063 },   // Aqaba, Jordan
  { lat: 30.0444, lng: 31.2357 },   // Cairo, Egypt
  { lat: 33.8938, lng: 35.5018 },   // Beirut, Lebanon
  { lat: 32.7940, lng: 34.9896 },   // Haifa, Israel
  { lat: 32.0853, lng: 34.7818 },   // Tel Aviv, Israel
  { lat: 31.9454, lng: 35.9284 },   // Amman, Jordan
  { lat: 31.8014, lng: 34.6435 },   // Ashdod, Israel
  { lat: 32.8872, lng: 13.1913 },   // Tripoli, Libya
  { lat: 33.5731, lng: -7.5898 },   // Casablanca, Morocco
  { lat: -1.2921, lng: 36.8219 },   // Nairobi, Kenya
  { lat: -26.2041, lng: 28.0473 },  // Johannesburg, South Africa
  { lat: -29.8587, lng: 31.0218 },  // Durban, South Africa
  { lat: -33.9249, lng: 18.4241 },  // Cape Town, South Africa
  { lat: 41.0082, lng: 28.9784 },   // Istanbul, Turkey
  { lat: 37.9838, lng: 23.7275 },   // Athens, Greece
  { lat: 52.2297, lng: 21.0122 },   // Warsaw, Poland
  { lat: 44.8378, lng: -0.5792 },   // Bordeaux, France
  { lat: 45.8336, lng: 1.2611 },    // Limoges, France
  { lat: 45.7640, lng: 4.8357 },    // Lyon, France
  { lat: 43.2965, lng: 5.3698 },    // Marseille, France
  { lat: 48.6500, lng: 2.4167 },    // Ris-Orangis, France
  { lat: 49.4944, lng: 0.1079 },     // Le Havre, France

    { lat: 41.7151, lng: 44.8271 }, // Georgia
    { lat: 52.5200, lng: 13.4050 }, // Germany
    { lat: 5.6037, lng: -0.1870 }, // Ghana
    
    { lat: 13.4443, lng: 144.7937 }, // Guam
    { lat: 18.9712, lng: -72.2852 }, // Haiti
    { lat: 47.4979, lng: 19.0402 }, // Hungary
   
   
    { lat: 33.3152, lng: 44.3661 }, // Iraq
    { lat: 53.3498, lng: -6.2603 }, // Ireland
   
    { lat: 32.0213, lng: 34.7991 }, // Habanaim (assumed city in Israel)

    { lat: 41.9028, lng: 12.4964 }, // Italy
    { lat: 18.1096, lng: -77.2975 }, // Jamaica

    // Japón
{ lat: 35.6895, lng: 139.6917 }, // Tokio

// Corea del Sur
{ lat: 37.5665, lng: 126.9780 }, // Seúl

// Camboya
{ lat: 11.5449, lng: 104.8922 }, // Phnom Penh (capital de Camboya)

// Filipinas
{ lat: 10.3333, lng: 123.9333 }, // Mandaue City

// Tailandia
{ lat: 13.7563, lng: 100.5018 }, // Bangkok

// Malasia
{ lat: 3.0738, lng: 101.5183 }, // Selangor


    { lat: 31.9454, lng: 35.9284 }, // Jordan
   
    { lat: 56.9496, lng: 24.1052 }, // Latvia
    
    { lat: 54.6872, lng: 25.2797 }, // Lithuania
    { lat: -18.8792, lng: 47.5079 }, // Madagascar
    { lat: 3.1390, lng: 101.6869 }, // Malaysia
    { lat: 14.6415, lng: -61.0242 }, // Martinique

    { lat: -20.3484, lng: 57.5522 }, // Mauritius
    
    
    { lat: 21.9162, lng: 95.9560 }, // Myanmar
    { lat: 52.3676, lng: 4.9041 }, // Netherlands
    { lat: -36.8485, lng: 174.7633 }, // New Zealand
    { lat: 59.9139, lng: 10.7522 }, // Norway
    { lat: 23.5859, lng: 58.4059 }, // Oman
    
    { lat: 8.9824, lng: -79.5199 }, // Panama
    { lat: 52.2297, lng: 21.0122 }, // Poland
    { lat: 38.7223, lng: -9.1393 }, // Portugal
    { lat: 18.2208, lng: -66.5901 }, // Puerto Rico
    { lat: 44.4268, lng: 26.1025 }, // Romania
    { lat: 44.7866, lng: 20.4489 }, // Serbia
    { lat: 1.3521, lng: 103.8198 }, // Singapore
    { lat: 48.1486, lng: 17.1077 }, // Slovakia
    { lat: 46.0569, lng: 14.5058 }, // Slovenia
   
    { lat: 40.4637, lng: -3.7492 }, // Spain
    
    { lat: 59.3293, lng: 18.0686 }, // Sweden
    { lat: 46.8182, lng: 8.2275 }, // Switzerland
    { lat: 23.6978, lng: 120.9605 }, // Taiwan
    { lat: 38.8610, lng: 71.2761 }, // Tajikistan
    
    { lat: 33.8869, lng: 9.5375 }, // Tunisia
    { lat: 24.0000, lng: 53.0000 }, // Emirates (approximate)
    { lat: 51.5072, lng: -0.1276 }, // United Kingdom

    // United States

    { lat: 37.0902, lng: -95.7129 }, // United States
    { lat: 40.7128, lng: -74.0060 },  // Nueva York
{ lat: 34.0522, lng: -118.2437 }, // Los Ángeles
{ lat: 41.8781, lng: -87.6298 },  // Chicago
{ lat: 29.7604, lng: -95.3698 },  // Houston
{ lat: 33.4484, lng: -112.0740 },  // Phoenix
{ lat: 26.0902, lng: -80.1111 }, // Port Everglades
    { lat: 32.0809, lng: -81.0912 }, // Savannah
    { lat: 28.5383, lng: -81.3792 }, // Orlando
    { lat: 27.9506, lng: -82.4572 }, // Tampa
    { lat: 43.6615, lng: -70.2553 }, // Portland, ME
    { lat: 41.6032, lng: -73.0877 }, // Connecticut
    { lat: 39.9526, lng: -75.1652 }, // Philadelphia
    { lat: 41.5801, lng: -71.4774 }, // Rhode Island
    { lat: 40.4173, lng: -82.9071 }, // Ohio (central)
    { lat: 41.4993, lng: -81.6944 }, // Cleveland
    { lat: 42.3314, lng: -83.0458 }, // Detroit
    { lat: 42.7325, lng: -84.5555 }, // Michigan
    { lat: 40.4406, lng: -79.9959 }, // Pittsburgh
    { lat: 39.9612, lng: -82.9988 }, // Columbus, Ohio
    { lat: 39.1031, lng: -84.5120 }, // Cincinnati, Kentucky
    { lat: 39.7684, lng: -86.1581 }, // Indianapolis
    { lat: 38.2527, lng: -85.7585 }, // Louisville
    { lat: 43.0389, lng: -87.9065 }, // Milwaukee
    { lat: 44.5000, lng: -89.5000 }, // Wisconsin (aprox)
    { lat: 36.1627, lng: -86.7816 }, // Nashville
    { lat: 35.1495, lng: -90.0490 }, // Memphis
    { lat: 30.4213, lng: -87.2169 }, // Pensacola
    { lat: 39.7392, lng: -104.9903 }, // Denver
    { lat: 29.4241, lng: -98.4936 }, // San Antonio
    { lat: 32.2226, lng: -110.9747 }, // Tucson
    { lat: 33.4484, lng: -112.0740 }, // Phoenix
    { lat: 40.7608, lng: -111.8910 }, // Salt Lake City
    { lat: 43.6150, lng: -116.2023 }, // Boise
    { lat: 36.1699, lng: -115.1398 }, // Las Vegas
    { lat: 32.7157, lng: -117.1611 }, // San Diego
    { lat: 37.7749, lng: -122.4194 }, // San Francisco
    { lat: 39.5296, lng: -119.8138 }, // Reno
    { lat: 45.5051, lng: -122.6750 }, // Portland, Oregon
    { lat: 47.6588, lng: -117.4260 }, // Spokane
    { lat: 47.6062, lng: -122.3321 }, // Seattle
    // México
    { lat: 19.1903, lng: -96.1533 }, // Veracruz
    { lat: 22.4000, lng: -97.9333 }, // Altamira
    // Canadá
    { lat: 43.651070, lng: -79.347015 }, // Ontario (Toronto)
  
    { lat: -12.0500, lng: -77.1333 }, // Callao, Perú
    { lat: -34.9011, lng: -56.1645 }, // Uruguay
    // Vietnam
{ lat: 21.0285, lng: 105.8542 }, // Hanoi
{ lat: 10.7769, lng: 106.7009 }, // Ho Chi Minh / Saigon
  ];

  otrasOficinas.forEach(coord => {
    L.circleMarker([coord.lat, coord.lng], {
      radius: 5,
      fillColor: "#ff6f00",
      color: "#ff6f00",
      weight: 1,
      opacity: 1,
      fillOpacity: 1
    }).addTo(map);
  });
});

 document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 150;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  });



  //TRADUCCCION

const translations = {
  es: {
    
     "hero.title": "Movilidad con Visión de Futuro",
    "hero.text": "Somos el aliado estratégico que tu logística necesita.",
    "hero.button": "Conocé nuestros servicios",
    "video.unsupported": "Tu navegador no soporta videos HTML5.",

    // Navbar
    "navbar.servicios": "Servicios",
    "navbar.porque": "¿Por qué elegirnos?",
    "navbar.nosotros": "Nosotros",
    "navbar.contacto": "Contacto",
    "navbar.cotizacion": "Solicitar cotización",
    "porque.title": "¿Por qué elegirnos?",
    "porque.text": "Nuestros Clientes nos eligen por nuestra solidez operativa, atención cercana y capacidad de adaptación en un entorno dinámico. Trabajamos con altos estándares de calidad, priorizando la innovación, la transparencia y la excelencia en el servicio.",
    "porque.benefit1": "Rapidez",
    "porque.benefit2": "Transparencia",
    "porque.benefit3": "Experiencia",
    "porque.benefit4": "Atención personalizada",
    "porque.benefit5": "Flexibilidad y adaptabilidad",
    "porque.benefit6": "Seguridad en el transporte",
    "porque.benefit7": "Optimización de costos",
    "servicios.title": "Nuestros Servicios",
    "servicios.description": "En KME INTERNATIONAL ofrecemos soluciones logísticas integrales, adaptadas a las necesidades específicas de tu negocio. Nuestro compromiso es acompañarte en cada etapa del proceso, asegurando eficiencia, trazabilidad y confianza desde el origen hasta el destino final. Con miles de operaciones exitosas y una red global de aliados, tu carga está en manos expertas.",
    "servicios.land_title": "Transporte Terrestre",
    "servicios.land_text": "Soluciones puerta a puerta con cobertura nacional e internacional. Coordinación, seguimiento y seguro del contenedor incluidos.",
    "servicios.air_title": "Transporte Aéreo",
    "servicios.air_text": "Tus cargas urgentes viajan con nosotros de forma rápida, segura y con visibilidad total. Ideal para operaciones que no pueden esperar.",
    "servicios.sea_title": "Transporte Marítimo",
    "servicios.sea_text": "Coordinamos importaciones y exportaciones con eficiencia, incluyendo asesoría en documentación y trámites aduaneros.",
    "servicios.download_btn": "Descargar Brochure",
    "Oficinas":"OFICINAS GLOBALES",
    "Oficina":"Oficinas",
    "Oficinas":"OFICINAS GLOBALES",
    "Paises":"Paises",
    "cta.title": "Agenda tu Reunión con KME",
    "cta.description": "Agenda una reunión con cualquiera de nuestras sedes y recibe asesoramiento personalizado para tus necesidades de transporte y comercio exterior.",
    "cta.select_service_label": "Seleccione el servicio*",
    "cta.select_service_option": "Seleccione un servicio",
    "cta.option_land": "Transporte Terrestre",
    "cta.option_sea": "Transporte Marítimo",
    "cta.option_air": "Transporte Aéreo",
    "cta.select_office_label": "Seleccione una sede*",
    "cta.select_office_option": "Seleccione una sede",
    "cta.office_ba": "Capital Federal",
    "cta.book_button": "Agendar reunión",
     "contact.offices_title": "Nuestras oficinas",
    "contact.office_ba": "Ciudad Autónoma de Buenos Aires",
    "contact.office_address": "Av. Córdoba 632, Piso 8 of A C1054AAS Cdad. Autónoma de Buenos Aires",
    "contact.form_title": "¿Querés decirnos algo?",
    "contact.form_subtitle": "Completá el formulario y contactate con nosotros",
    "contact.placeholder_name": "Nombre completo",
    "contact.placeholder_email": "Email",
    "contact.placeholder_message": "Mensaje",
    "contact.submit_button": "Enviar",
     "footer.description": "Soluciones en logística internacional, personalizadas para cada cliente.",
    "footer.nav_title": "Navegación",
    "footer.nav_home": "Inicio",
    "footer.nav_services": "Servicios",
    "footer.nav_about": "Nosotros",
    "footer.nav_contact": "Contacto",
    "footer.contact_title": "Contacto",
    "footer.contact_address": "Buenos Aires: Av. Córdoba 632, Piso 8 of A C1054AAS Cdad. Autónoma de Buenos Aires",
    "footer.contact_whatsapp": "Whatsapp: +54 9 11 2341-5533",
    "footer.follow_us": "Seguinos",
    "footer.rights": "&copy; 2025 KME International S.A. Todos los derechos reservados.",
  },
  en: {
    "hero.title": "Mobility with a Vision for the Future",
    "hero.text": "We are the strategic partner your logistics needs.",
    "hero.button": "Explore our services",
    "video.unsupported": "Your browser does not support HTML5 video.",

    // Navbar
    "navbar.servicios": "Services",
    "navbar.porque": "Why choose us?",
    "navbar.nosotros": "About us",
    "navbar.contacto": "Contact",
    "navbar.cotizacion": "Request a quote",
    "porque.title": "Why choose us?",
    "porque.text": "Our clients choose us for our operational strength, close attention, and adaptability in a dynamic environment. We work with high quality standards, prioritizing innovation, transparency, and service excellence.",
    "porque.benefit1": "Speed",
    "porque.benefit2": "Transparency",
    "porque.benefit3": "Experience",
    "porque.benefit4": "Personalized attention",
    "porque.benefit5": "Flexibility and adaptability",
    "porque.benefit6": "Transport security",
    "porque.benefit7": "Cost optimization",
    "servicios.title": "Our Services",
    "servicios.description": "At KME INTERNATIONAL we offer comprehensive logistics solutions tailored to your business needs. Our commitment is to accompany you at every stage of the process, ensuring efficiency, traceability, and confidence from origin to final destination. With thousands of successful operations and a global network of partners, your cargo is in expert hands.",
    "servicios.land_title": "Land Transportation",
    "servicios.land_text": "Door-to-door solutions with national and international coverage. Includes coordination, tracking, and container insurance.",
    "servicios.air_title": "Air Transportation",
    "servicios.air_text": "Your urgent cargo travels with us quickly, securely, and with full visibility. Ideal for time-critical operations.",
    "servicios.sea_title": "Maritime Transportation",
    "servicios.sea_text": "We coordinate imports and exports efficiently, including advice on documentation and customs procedures.",
    "servicios.download_btn": "Download Brochure",
    "Oficinas":"Global Logistics",
    "Oficina":"Offices",
    "Paises":"Countries",
     "cta.title": "Schedule your Meeting with KME",
    "cta.description": "Schedule a meeting at any of our offices and receive personalized advice for your transportation and foreign trade needs.",
    "cta.select_service_label": "Select a service*",
    "cta.select_service_option": "Select a service",
    "cta.option_land": "Land Transportation",
    "cta.option_sea": "Maritime Transportation",
    "cta.option_air": "Air Transportation",
    "cta.select_office_label": "Select an office*",
    "cta.select_office_option": "Select an office",
    "cta.office_ba": "Buenos Aires (Capital)",
    "cta.book_button": "Schedule meeting",
    "contact.offices_title": "Our Offices",
    "contact.office_ba": "Buenos Aires City",
    "contact.office_address": "Av. Córdoba 632, 8th Floor, Office A, C1054AAS, Buenos Aires, Argentina",
    "contact.form_title": "Want to tell us something?",
    "contact.form_subtitle": "Fill out the form and get in touch with us",
    "contact.placeholder_name": "Full name",
    "contact.placeholder_email": "Email",
    "contact.placeholder_message": "Message",
    "contact.submit_button": "Send",
    "footer.description": "Customized international logistics solutions for each client.",
    "footer.nav_title": "Navigation",
    "footer.nav_home": "Home",
    "footer.nav_services": "Services",
    "footer.nav_about": "About Us",
    "footer.nav_contact": "Contact",
    "footer.contact_title": "Contact",
    "footer.contact_address": "Buenos Aires: Av. Córdoba 632, 8th Floor, Office A, C1054AAS, Buenos Aires, Argentina",
    "footer.contact_whatsapp": "WhatsApp: +54 9 11 2341-5533",
    "footer.follow_us": "Follow us",
    "footer.rights": "&copy; 2025 KME International S.A. All rights reserved."
  }
};

function updateLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector("#btn-es").addEventListener("click", () => updateLanguage("es"));
  document.querySelector("#btn-en").addEventListener("click", () => updateLanguage("en"));
});
