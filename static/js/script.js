// Base de datos de piezas de computadora
const COMPUTER_PARTS = {
    "procesadores": {
        "gama_alta": [
            {
                "nombre": "AMD Ryzen 9 7950X3D",
                "precio": "~$700 USD",
                "caracteristicas": "16 núcleos, 32 hilos, cache 3D V-Cache, excelente para juegos y productividad",
                "ventajas": "Mejor rendimiento en juegos, multitarea excepcional, eficiencia energética",
                "desventajas": "Precio elevado, requiere enfriamiento potente",
                "uso_recomendado": "Gaming de alto rendimiento, streaming, edición de video"
            },
            {
                "nombre": "Intel Core i9-14900K",
                "precio": "~$580 USD",
                "caracteristicas": "24 núcleos (8P+16E), hasta 6.0 GHz boost, socket LGA1700",
                "ventajas": "Alto rendimiento en single-core, excelente para gaming, overclocking",
                "desventajas": "Alto consumo energético, requiere buen sistema de enfriamiento",
                "uso_recomendado": "Gaming competitivo, trabajo intensivo"
            }
        ],
        "gama_media": [
            {
                "nombre": "AMD Ryzen 5 5600X",
                "precio": "~$180 USD",
                "caracteristicas": "6 núcleos, 12 hilos, excelente relación calidad-precio",
                "ventajas": "Rendimiento excelente para gaming, precio accesible, eficiente",
                "desventajas": "Ya no es lo más nuevo, límites en multitarea extrema",
                "uso_recomendado": "Gaming 1080p/1440p, trabajo general"
            },
            {
                "nombre": "Intel Core i5-13600K",
                "precio": "~$300 USD",
                "caracteristicas": "14 núcleos (6P+8E), excelente rendimiento single-core",
                "ventajas": "Gran rendimiento en juegos, buena multitarea, precio razonable",
                "desventajas": "Consumo energético medio-alto",
                "uso_recomendado": "Gaming, productividad media-alta"
            }
        ],
        "gama_baja": [
            {
                "nombre": "AMD Ryzen 5 5500",
                "precio": "~$100 USD",
                "caracteristicas": "6 núcleos, 12 hilos, sin PCIe 4.0",
                "ventajas": "Precio muy accesible, rendimiento decente",
                "desventajas": "Sin PCIe 4.0, menor rendimiento que versiones superiores",
                "uso_recomendado": "Presupuestos ajustados, gaming básico"
            },
            {
                "nombre": "Intel Core i3-13100F",
                "precio": "~$100 USD",
                "caracteristicas": "4 núcleos, 8 hilos, sin gráficos integrados",
                "ventajas": "Muy económico, suficiente para gaming básico",
                "desventajas": "Limitado para multitarea, requiere GPU dedicada",
                "uso_recomendado": "PCs básicas de oficina, gaming entry-level"
            }
        ]
    },
    "tarjetas_graficas": {
        "gama_alta": [
            {
                "nombre": "NVIDIA RTX 4090",
                "precio": "~$1600 USD",
                "caracteristicas": "24GB GDDR6X, DLSS 3, ray tracing excepcional",
                "ventajas": "Mejor GPU del mercado, rendimiento excepcional en 4K",
                "desventajas": "Precio muy elevado, alto consumo energético (450W)",
                "uso_recomendado": "Gaming 4K, trabajo profesional con GPU"
            },
            {
                "nombre": "AMD RX 7900 XTX",
                "precio": "~$950 USD",
                "caracteristicas": "24GB GDDR6, excelente para gaming 1440p/4K",
                "ventajas": "Mejor relación precio-rendimiento que RTX 4090, 24GB VRAM",
                "desventajas": "Ray tracing inferior a NVIDIA, consumo alto",
                "uso_recomendado": "Gaming de alto rendimiento, 1440p/4K"
            }
        ],
        "gama_media": [
            {
                "nombre": "NVIDIA RTX 4060",
                "precio": "~$300 USD",
                "caracteristicas": "8GB GDDR6, DLSS 3, eficiente energéticamente",
                "ventajas": "Precio razonable, DLSS 3, bajo consumo",
                "desventajas": "Solo 8GB VRAM puede limitar en algunos juegos modernos",
                "uso_recomendado": "Gaming 1080p/1440p, streaming"
            },
            {
                "nombre": "AMD RX 7600",
                "precio": "~$270 USD",
                "caracteristicas": "8GB GDDR6, FSR support, buena relación calidad-precio",
                "ventajas": "Precio competitivo, rendimiento sólido para 1080p",
                "desventajas": "Ray tracing limitado, solo 8GB VRAM",
                "uso_recomendado": "Gaming 1080p, presupuesto medio"
            }
        ],
        "gama_baja": [
            {
                "nombre": "NVIDIA GTX 1660 Super",
                "precio": "~$200 USD",
                "caracteristicas": "6GB GDDR6, sin ray tracing, arquitectura antigua",
                "ventajas": "Precio accesible, suficiente para gaming básico",
                "desventajas": "Sin DLSS, sin ray tracing, tecnología antigua",
                "uso_recomendado": "Gaming 1080p básico, presupuestos muy ajustados"
            },
            {
                "nombre": "AMD RX 6600",
                "precio": "~$220 USD",
                "caracteristicas": "8GB GDDR6, soporte FSR, buena para presupuestos",
                "ventajas": "Mejor que GTX 1660 Super, precio razonable",
                "desventajas": "Rendimiento limitado en juegos AAA modernos",
                "uso_recomendado": "Gaming 1080p, presupuesto ajustado"
            }
        ]
    },
    "ram": {
        "gama_alta": [
            {
                "nombre": "Corsair Dominator Platinum DDR5 6000MHz 32GB",
                "precio": "~$150 USD",
                "caracteristicas": "DDR5, 6000MHz, 32GB (2x16GB), baja latencia",
                "ventajas": "Alta velocidad, excelente para gaming y productividad",
                "desventajas": "Precio elevado, requiere motherboard DDR5",
                "uso_recomendado": "PCs de alto rendimiento, gaming competitivo"
            }
        ],
        "gama_media": [
            {
                "nombre": "Corsair Vengeance LPX DDR4 3600MHz 16GB",
                "precio": "~$50 USD",
                "caracteristicas": "DDR4, 3600MHz, 16GB (2x8GB), buena relación calidad-precio",
                "ventajas": "Precio accesible, velocidad adecuada para gaming",
                "desventajas": "DDR4 (tecnología anterior a DDR5)",
                "uso_recomendado": "Gaming general, productividad"
            }
        ],
        "gama_baja": [
            {
                "nombre": "G.Skill Aegis DDR4 3200MHz 16GB",
                "precio": "~$40 USD",
                "caracteristicas": "DDR4, 3200MHz, 16GB (2x8GB), básica",
                "ventajas": "Muy económica, suficiente para uso general",
                "desventajas": "Velocidad limitada, sin RGB",
                "uso_recomendado": "PCs básicas, presupuestos ajustados"
            }
        ]
    },
    "fuentes_alimentacion": {
        "gama_alta": [
            {
                "nombre": "Corsair RM850x 850W 80+ Gold",
                "precio": "~$130 USD",
                "caracteristicas": "850W, 80+ Gold, modular, 10 años garantía",
                "ventajas": "Alta eficiencia, modular, muy confiable",
                "desventajas": "Precio elevado",
                "uso_recomendado": "Builds de alto rendimiento, sistemas con GPU potente"
            }
        ],
        "gama_media": [
            {
                "nombre": "EVGA 650 B5 650W 80+ Bronze",
                "precio": "~$60 USD",
                "caracteristicas": "650W, 80+ Bronze, semi-modular",
                "ventajas": "Buena relación calidad-precio, confiable",
                "desventajas": "Eficiencia menor que Gold, potencia limitada",
                "uso_recomendado": "Builds medianas, gaming estándar"
            }
        ],
        "gama_baja": [
            {
                "nombre": "EVGA 500 W1 500W 80+ White",
                "precio": "~$40 USD",
                "caracteristicas": "500W, 80+ White, no modular",
                "ventajas": "Muy económica",
                "desventajas": "Eficiencia baja, potencia limitada, no modular",
                "uso_recomendado": "Solo para builds básicas, no recomendada para gaming"
            }
        ]
    },
    "placas_base": {
        "gama_alta": [
            {
                "nombre": "ASUS ROG Strix X670E-E Gaming",
                "precio": "~$500 USD",
                "caracteristicas": "Socket AM5, PCIe 5.0, WiFi 6E, múltiples M.2",
                "ventajas": "Todas las características premium, excelente para overclocking",
                "desventajas": "Precio muy elevado, puede ser excesivo para muchos",
                "uso_recomendado": "Builds flagship, entusiastas"
            }
        ],
        "gama_media": [
            {
                "nombre": "MSI B650 Tomahawk WiFi",
                "precio": "~$200 USD",
                "caracteristicas": "Socket AM5, PCIe 4.0, WiFi 6, buen VRM",
                "ventajas": "Buena relación calidad-precio, características modernas",
                "desventajas": "Sin PCIe 5.0 completo",
                "uso_recomendado": "Builds gaming medianas-altas"
            }
        ],
        "gama_baja": [
            {
                "nombre": "ASRock B550M Pro4",
                "precio": "~$90 USD",
                "caracteristicas": "Socket AM4, PCIe 3.0, básica pero funcional",
                "ventajas": "Muy económica, suficiente para builds básicas",
                "desventajas": "Características limitadas, PCIe 3.0",
                "uso_recomendado": "Builds económicas, AM4"
            }
        ]
    },
    "almacenamiento": {
        "gama_alta": [
            {
                "nombre": "Samsung 990 PRO 2TB NVMe PCIe 4.0",
                "precio": "~$180 USD",
                "caracteristicas": "2TB, hasta 7450 MB/s lectura, PCIe 4.0",
                "ventajas": "Velocidad excepcional, alta capacidad, confiable",
                "desventajas": "Precio elevado",
                "uso_recomendado": "Gaming, trabajo profesional"
            }
        ],
        "gama_media": [
            {
                "nombre": "WD Blue SN580 1TB NVMe PCIe 4.0",
                "precio": "~$60 USD",
                "caracteristicas": "1TB, hasta 4150 MB/s lectura, buena relación calidad-precio",
                "ventajas": "Precio razonable, velocidad adecuada",
                "desventajas": "Velocidad menor que gama alta",
                "uso_recomendado": "Uso general, gaming"
            }
        ],
        "gama_baja": [
            {
                "nombre": "Kingston NV2 500GB NVMe PCIe 4.0",
                "precio": "~$30 USD",
                "caracteristicas": "500GB, velocidad básica, PCIe 4.0",
                "ventajas": "Muy económica",
                "desventajas": "Baja capacidad, velocidad limitada",
                "uso_recomendado": "Presupuestos ajustados, sistema operativo básico"
            }
        ]
    }
};

// Piezas que NO se recomiendan
const PIEZAS_NO_RECOMENDADAS = {
    "fuentes_genéricas": {
        "problema": "Fuentes de alimentación genéricas sin certificación 80+",
        "razon": "Baja eficiencia, riesgo de fallos, pueden dañar componentes",
        "alternativa": "Buscar fuentes certificadas 80+ Bronze mínimo (EVGA, Corsair, Seasonic)"
    },
    "ram_genérica": {
        "problema": "RAM sin marca conocida o de muy baja frecuencia",
        "razon": "Inestabilidad del sistema, menor rendimiento, falta de garantía",
        "alternativa": "Marcas reconocidas: Corsair, G.Skill, Kingston, Crucial"
    },
    "placas_base_muy_baratas": {
        "problema": "Placas base extremadamente económicas de marcas desconocidas",
        "razon": "VRM pobres, características limitadas, problemas de compatibilidad",
        "alternativa": "Marcas confiables: ASUS, MSI, Gigabyte, ASRock (gama media)"
    }
};

// Builds completas de PC
const PC_BUILDS = {
    "economica": {
        "nombre": "PC Gaming Económica",
        "precio_total": "~$600-700 USD",
        "descripcion": "Perfecta para gaming en 1080p y trabajo básico",
        "componentes": [
            { "tipo": "Procesador", "nombre": "AMD Ryzen 5 5500", "precio": "~$100 USD", "descripcion": "6 núcleos, 12 hilos, suficiente para gaming básico y multitarea ligera" },
            { "tipo": "Tarjeta Gráfica", "nombre": "AMD RX 6600", "precio": "~$220 USD", "descripcion": "8GB GDDR6, excelente para gaming 1080p, soporta FSR" },
            { "tipo": "RAM", "nombre": "G.Skill Aegis DDR4 3200MHz 16GB", "precio": "~$40 USD", "descripcion": "16GB (2x8GB), suficiente para gaming y aplicaciones básicas" },
            { "tipo": "Placa Base", "nombre": "ASRock B550M Pro4", "precio": "~$90 USD", "descripcion": "Socket AM4, compatible con Ryzen 5000, características básicas" },
            { "tipo": "Almacenamiento", "nombre": "Kingston NV2 500GB NVMe PCIe 4.0", "precio": "~$30 USD", "descripcion": "500GB NVMe, suficiente para sistema operativo y algunos juegos" },
            { "tipo": "Fuente de Alimentación", "nombre": "EVGA 650 B5 650W 80+ Bronze", "precio": "~$60 USD", "descripcion": "650W, certificación 80+ Bronze, suficiente para esta build" },
            { "tipo": "Gabinete", "nombre": "Gabinete básico ATX", "precio": "~$50-60 USD", "descripcion": "Gabinete con buena ventilación, suficiente espacio" }
        ]
    },
    "accesible": {
        "nombre": "PC Gaming Accesible/Media",
        "precio_total": "~$1000-1200 USD",
        "descripcion": "Excelente para gaming 1080p/1440p y productividad",
        "componentes": [
            { "tipo": "Procesador", "nombre": "AMD Ryzen 5 5600X", "precio": "~$180 USD", "descripcion": "6 núcleos, 12 hilos, excelente rendimiento gaming y productividad" },
            { "tipo": "Tarjeta Gráfica", "nombre": "NVIDIA RTX 4060", "precio": "~$300 USD", "descripcion": "8GB GDDR6, DLSS 3, ray tracing, perfecta para gaming 1080p/1440p" },
            { "tipo": "RAM", "nombre": "Corsair Vengeance LPX DDR4 3600MHz 16GB", "precio": "~$50 USD", "descripcion": "16GB (2x8GB) DDR4 3600MHz, excelente relación calidad-precio" },
            { "tipo": "Placa Base", "nombre": "MSI B550 Tomahawk", "precio": "~$140 USD", "descripcion": "Socket AM4, buen VRM, PCIe 4.0, características modernas" },
            { "tipo": "Almacenamiento", "nombre": "WD Blue SN580 1TB NVMe PCIe 4.0", "precio": "~$60 USD", "descripcion": "1TB NVMe, velocidad adecuada, suficiente espacio para juegos" },
            { "tipo": "Fuente de Alimentación", "nombre": "Corsair RM650 650W 80+ Gold", "precio": "~$90 USD", "descripcion": "650W, certificación 80+ Gold modular, muy confiable" },
            { "tipo": "Gabinete", "nombre": "NZXT H510 Flow", "precio": "~$80 USD", "descripcion": "Gabinete con buen flujo de aire, diseño moderno" },
            { "tipo": "Enfriamiento", "nombre": "Cooler CPU básico o stock", "precio": "~$0-30 USD", "descripcion": "El Ryzen 5600X incluye cooler, opcional mejorar con aftermarket" }
        ]
    },
    "cara": {
        "nombre": "PC Gaming Premium/Alta Gama",
        "precio_total": "~$2500-3000 USD",
        "descripcion": "Máximo rendimiento para gaming 4K, streaming y trabajo profesional",
        "componentes": [
            { "tipo": "Procesador", "nombre": "AMD Ryzen 9 7950X3D", "precio": "~$700 USD", "descripcion": "16 núcleos, 32 hilos, cache 3D V-Cache, mejor rendimiento gaming del mercado" },
            { "tipo": "Tarjeta Gráfica", "nombre": "NVIDIA RTX 4090", "precio": "~$1600 USD", "descripcion": "24GB GDDR6X, DLSS 3, ray tracing excepcional, mejor GPU del mercado" },
            { "tipo": "RAM", "nombre": "Corsair Dominator Platinum DDR5 6000MHz 32GB", "precio": "~$150 USD", "descripcion": "32GB (2x16GB) DDR5, alta velocidad, ideal para gaming y multitarea" },
            { "tipo": "Placa Base", "nombre": "ASUS ROG Strix X670E-E Gaming", "precio": "~$500 USD", "descripcion": "Socket AM5, PCIe 5.0 completo, WiFi 6E, múltiples M.2, características premium" },
            { "tipo": "Almacenamiento", "nombre": "Samsung 990 PRO 2TB NVMe PCIe 4.0", "precio": "~$180 USD", "descripcion": "2TB NVMe, velocidades excepcionales (7450 MB/s), perfecto para gaming y trabajo" },
            { "tipo": "Fuente de Alimentación", "nombre": "Corsair RM850x 850W 80+ Gold", "precio": "~$130 USD", "descripcion": "850W, certificación 80+ Gold, totalmente modular, 10 años garantía" },
            { "tipo": "Gabinete", "nombre": "Lian Li O11 Dynamic EVO", "precio": "~$150 USD", "descripcion": "Gabinete premium con excelente flujo de aire, diseño elegante" },
            { "tipo": "Enfriamiento", "nombre": "AIO 240mm o 360mm", "precio": "~$100-150 USD", "descripcion": "Enfriamiento líquido AIO para mantener el CPU a bajas temperaturas" }
        ]
    }
};

// Función para obtener saludo según la hora del día
function obtenerSaludo() {
    const hora = new Date().getHours();
    if (hora >= 6 && hora < 12) {
        return "¡Buenos días!";
    } else if (hora >= 12 && hora < 20) {
        return "¡Buenas tardes!";
    } else {
        return "¡Buenas noches!";
    }
}

const INTRO_MESSAGE = "¡Hola! Soy Megafort, tu asistente personal en todo lo relacionado con piezas de computadoras. Si estás buscando las mejores piezas para tu PC, las opciones más asequibles o incluso si quieres evitar algunas malas elecciones, ¡estoy aquí para ayudarte!";

// Referencias a elementos DOM
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const suggestionButtons = document.querySelectorAll('.suggestion-btn');

// Función para crear efecto de partículas en botones
function createParticleEffect(element) {
    const rect = element.getBoundingClientRect();
    const particles = 8;
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.borderRadius = '50%';
        particle.style.background = i % 2 === 0 ? '#00f3ff' : '#ff00ff';
        particle.style.left = rect.left + rect.width / 2 + 'px';
        particle.style.top = rect.top + rect.height / 2 + 'px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.boxShadow = `0 0 10px ${i % 2 === 0 ? '#00f3ff' : '#ff00ff'}`;
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / particles;
        const velocity = 50 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let x = 0;
        let y = 0;
        let opacity = 1;
        
        function animate() {
            x += vx * 0.1;
            y += vy * 0.1;
            opacity -= 0.02;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        }
        
        animate();
    }
}

// Función para agregar mensaje del usuario
function addUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `
        <div class="message-content">
            <div class="message-header">
                <strong>Tú</strong>
            </div>
            <p>${escapeHtml(message)}</p>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    
    // Efecto de entrada futurista
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateX(30px) scale(0.9)';
    setTimeout(() => {
        messageDiv.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateX(0) scale(1)';
    }, 10);
    
    scrollToBottom();
}

// Función para agregar mensaje del bot
function addBotMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    
    // Convertir markdown básico a HTML
    const formattedMessage = formatMessage(message);
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <div class="message-header">
                <strong>Megafort</strong>
            </div>
            ${formattedMessage}
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    
    // Efecto de entrada futurista para el bot
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateX(-30px) scale(0.9)';
    setTimeout(() => {
        messageDiv.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateX(0) scale(1)';
    }, 10);
    
    scrollToBottom();
}

// Función para mostrar indicador de escritura
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="message-content">
            <span></span><span></span><span></span>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    scrollToBottom();
}

// Función para ocultar indicador de escritura
function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Función para formatear mensaje (markdown básico)
function formatMessage(text) {
    // Convertir **texto** a <strong>
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convertir saltos de línea a <br> o <p>
    text = text.split('\n\n').map(paragraph => {
        if (paragraph.trim()) {
            // Si tiene listas, mantenerlas
            if (paragraph.includes('- ')) {
                return '<p>' + paragraph.replace(/\n- /g, '</p><ul><li>').replace(/\n\n/g, '</li></ul>') + '</li></ul>';
            }
            return '<p>' + paragraph.replace(/\n/g, '<br>') + '</p>';
        }
        return '';
    }).join('');
    
    return text;
}

// Función para escapar HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Función para hacer scroll al final
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Funciones de lógica del chatbot
function detectarTipoPieza(mensaje) {
    const mensaje_lower = mensaje.toLowerCase();
    
    const tipos = {
        "procesadores": ["procesador", "cpu", "ryzen", "intel core", "amd", "intel"],
        "tarjetas_graficas": ["tarjeta gráfica", "gpu", "rtx", "gtx", "rx", "graphics", "video"],
        "ram": ["ram", "memoria", "ddr4", "ddr5"],
        "fuentes_alimentacion": ["fuente", "psu", "alimentación", "power supply"],
        "placas_base": ["placa base", "motherboard", "mobo", "placa madre"],
        "almacenamiento": ["disco", "ssd", "nvme", "hdd", "almacenamiento", "hard drive"]
    };
    
    for (const [tipo, palabras_clave] of Object.entries(tipos)) {
        for (const palabra of palabras_clave) {
            if (mensaje_lower.includes(palabra)) {
                return tipo;
            }
        }
    }
    
    return null;
}

function detectarPresupuesto(mensaje) {
    const mensaje_lower = mensaje.toLowerCase();
    
    // Palabras clave para presupuesto bajo
    if (["barato", "económico", "asequible", "bajo", "poco", "ajustado", "limitado"].some(palabra => mensaje_lower.includes(palabra))) {
        return "gama_baja";
    }
    
    // Palabras clave para presupuesto alto
    if (["mejor", "top", "premium", "alto", "caro", "lo mejor"].some(palabra => mensaje_lower.includes(palabra))) {
        return "gama_alta";
    }
    
    // Por defecto, gama media
    return "gama_media";
}

function detectarUso(mensaje) {
    const mensaje_lower = mensaje.toLowerCase();
    
    if (mensaje_lower.includes("gaming") || mensaje_lower.includes("juego")) {
        return "gaming";
    } else if (mensaje_lower.includes("trabajo") || mensaje_lower.includes("productividad") || mensaje_lower.includes("oficina")) {
        return "productividad";
    } else if (mensaje_lower.includes("streaming")) {
        return "streaming";
    } else if (mensaje_lower.includes("edición") || mensaje_lower.includes("video")) {
        return "edicion";
    }
    
    return null;
}

function buscarPieza(tipoPieza, gama = null) {
    tipoPieza = tipoPieza.toLowerCase().replace(/\s/g, "_");
    
    if (!COMPUTER_PARTS[tipoPieza]) {
        return null;
    }
    
    const piezas = COMPUTER_PARTS[tipoPieza];
    
    if (gama) {
        gama = gama.toLowerCase();
        if (piezas[gama]) {
            return piezas[gama];
        }
        return null;
    }
    
    // Si no se especifica gama, devolver todas
    const resultado = [];
    for (const gama_key of ["gama_alta", "gama_media", "gama_baja"]) {
        if (piezas[gama_key]) {
            resultado.push(...piezas[gama_key]);
        }
    }
    return resultado;
}

function formatearRespuestaPiezas(piezas, tipoPieza) {
    if (!piezas || piezas.length === 0) {
        return "No encontré piezas que coincidan. ¿Podrías ser más específico?";
    }
    
    let respuesta = `**${tipoPieza.replace(/_/g, ' ')}:**\n\n`;
    
    for (const pieza of piezas) {
        respuesta += `• **${pieza.nombre}** ${pieza.precio}\n`;
        respuesta += `  ${pieza.caracteristicas}\n`;
        
        if (piezas.length === 1 && pieza.uso_recomendado) {
            respuesta += `  Uso: ${pieza.uso_recomendado}\n`;
        }
        
        respuesta += "\n";
    }
    
    return respuesta;
}

function verificarPiezaNoRecomendada(mensaje) {
    const mensaje_lower = mensaje.toLowerCase();
    
    if (mensaje_lower.includes("genérica") || mensaje_lower.includes("genérico")) {
        if (mensaje_lower.includes("fuente") || mensaje_lower.includes("psu") || mensaje_lower.includes("alimentación")) {
            return PIEZAS_NO_RECOMENDADAS["fuentes_genéricas"];
        } else if (mensaje_lower.includes("ram") || mensaje_lower.includes("memoria")) {
            return PIEZAS_NO_RECOMENDADAS["ram_genérica"];
        } else if (mensaje_lower.includes("placa") || mensaje_lower.includes("motherboard")) {
            return PIEZAS_NO_RECOMENDADAS["placas_base_muy_baratas"];
        }
    }
    
    return null;
}

function generarRespuestaBuildsCompletas() {
    let respuesta = "📦 **Tres opciones de builds:**\n\n";
    
    // Build Económica
    respuesta += `💰 **${PC_BUILDS.economica.nombre}** - ${PC_BUILDS.economica.precio_total}\n`;
    respuesta += `${PC_BUILDS.economica.descripcion}\n`;
    for (const componente of PC_BUILDS.economica.componentes) {
        respuesta += `• ${componente.tipo}: ${componente.nombre} ${componente.precio}\n`;
    }
    
    respuesta += `\n---\n\n`;
    
    // Build Accesible
    respuesta += `💎 **${PC_BUILDS.accesible.nombre}** - ${PC_BUILDS.accesible.precio_total}\n`;
    respuesta += `${PC_BUILDS.accesible.descripcion}\n`;
    for (const componente of PC_BUILDS.accesible.componentes) {
        respuesta += `• ${componente.tipo}: ${componente.nombre} ${componente.precio}\n`;
    }
    
    respuesta += `\n---\n\n`;
    
    // Build Premium
    respuesta += `⚡ **${PC_BUILDS.cara.nombre}** - ${PC_BUILDS.cara.precio_total}\n`;
    respuesta += `${PC_BUILDS.cara.descripcion}\n`;
    for (const componente of PC_BUILDS.cara.componentes) {
        respuesta += `• ${componente.tipo}: ${componente.nombre} ${componente.precio}\n`;
    }
    
    return respuesta;
}

function procesarMensaje(mensajeUsuario) {
    const mensaje = mensajeUsuario.trim();
    
    if (!mensaje) {
        return 'Por favor, escribe un mensaje.';
    }
    
    const mensaje_lower = mensaje.toLowerCase();
    
    // Saludos iniciales con reconocimiento de hora
    if (["hola", "hi", "saludos"].some(palabra => mensaje_lower.includes(palabra)) || 
        mensaje_lower.includes("buenos días") || mensaje_lower.includes("buenas tardes") || 
        mensaje_lower.includes("buenas noches") || mensaje_lower.includes("buen día") ||
        mensaje_lower.includes("buena tarde") || mensaje_lower.includes("buena noche")) {
        const saludo = obtenerSaludo();
        return `${saludo} ${INTRO_MESSAGE}\n\n¿En qué puedo ayudarte hoy? Puedo recomendarte piezas individuales o ayudarte a armar una PC completa.`;
    }
    
    // Detectar si pregunta por armar una PC
    if (mensaje_lower.includes("armar") && (mensaje_lower.includes("pc") || mensaje_lower.includes("computadora") || mensaje_lower.includes("computador"))) {
        return generarRespuestaBuildsCompletas();
    }
    
    // Verificar si menciona piezas no recomendadas
    const piezaNoRecomendada = verificarPiezaNoRecomendada(mensaje);
    if (piezaNoRecomendada) {
        let respuesta = `⚠️ **Advertencia sobre ${piezaNoRecomendada.problema}:**\n\n`;
        respuesta += `**Problema:** ${piezaNoRecomendada.razon}\n\n`;
        respuesta += `**Alternativa recomendada:** ${piezaNoRecomendada.alternativa}`;
        return respuesta;
    }
    
    // Detectar tipo de pieza
    const tipoPieza = detectarTipoPieza(mensaje);
    
    if (!tipoPieza) {
        return "No estoy seguro de qué pieza estás buscando. ¿Podrías ser más específico?\n\n" +
               "Puedo ayudarte con:\n" +
               "- Procesadores (CPU)\n" +
               "- Tarjetas gráficas (GPU)\n" +
               "- Memoria RAM\n" +
               "- Fuentes de alimentación\n" +
               "- Placas base (Motherboard)\n" +
               "- Almacenamiento (SSD/HDD)\n\n" +
               "Solo menciona qué necesitas y tu presupuesto aproximado.";
    }
    
    // Detectar presupuesto
    const presupuesto = detectarPresupuesto(mensaje);
    
    // Buscar piezas
    let piezas;
    if (presupuesto) {
        piezas = buscarPieza(tipoPieza, presupuesto);
    } else {
        // Si no detecta presupuesto específico, mostrar opciones de todas las gamas
        piezas = buscarPieza(tipoPieza);
    }
    
    let respuesta = formatearRespuestaPiezas(piezas, tipoPieza);
    
    // Agregar contexto según el uso detectado
    const uso = detectarUso(mensaje);
    if (uso === "gaming" && presupuesto === "gama_baja") {
        respuesta += "\n\n🎮 **Nota para gaming:** Para una mejor experiencia de gaming, considera ";
        respuesta += "invertir más en la tarjeta gráfica si tu presupuesto lo permite.";
    }
    
    return respuesta;
}

// Función para enviar mensaje
function sendMessage() {
    const message = userInput.value.trim();
    
    if (!message) {
        return;
    }
    
    // Efecto visual al enviar
    createParticleEffect(sendButton);
    
    // Agregar mensaje del usuario
    addUserMessage(message);
    userInput.value = '';
    
    // Deshabilitar botón mientras se procesa
    sendButton.disabled = true;
    showTypingIndicator();
    
    // Simular procesamiento con delay
    setTimeout(() => {
        const respuesta = procesarMensaje(message);
        hideTypingIndicator();
        addBotMessage(respuesta);
        sendButton.disabled = false;
        userInput.focus();
    }, 500 + Math.random() * 500); // Delay entre 500ms y 1000ms para simular procesamiento
}

// Event listeners
sendButton.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Botones de sugerencias
suggestionButtons.forEach(button => {
    button.addEventListener('click', () => {
        createParticleEffect(button);
        const query = button.getAttribute('data-query');
        userInput.value = query;
        setTimeout(() => sendMessage(), 100);
    });
    
    // Efecto hover adicional
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
    });
});

// Efecto de carga inicial
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 1s ease-out';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});

// Efecto de brillo en el input cuando está activo
userInput.addEventListener('focus', () => {
    userInput.parentElement.style.filter = 'drop-shadow(0 0 20px rgba(0, 243, 255, 0.5))';
});

userInput.addEventListener('blur', () => {
    userInput.parentElement.style.filter = 'none';
});

// Enfocar el input al cargar
setTimeout(() => {
    userInput.focus();
}, 500);
