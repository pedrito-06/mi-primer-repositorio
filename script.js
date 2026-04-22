/**
 * Datos de ejemplo para la lista de tareas.
 * En una aplicación real, estos datos podrían venir de una API o LocalStorage.
 */
const tasks = [
    {
        id: 1,
        title: "ayudar a rodrigo a su transferencia de genero",
        description: "Tengo que ayudar a rodrigo a su cambio de genero y yo sere el primero en estrenarlo ",
        status: "completada"
    },
    {
        id: 2,
        title: "chingarme a vadhir",
        description: "Lamentablemente me voy a tener que chingar a vadhir por motivo de falta de pago",
        status: "pendiente"
    },
    {
        id: 3,
        title: "verme con mi famlilia",
        description: "Pedir cita para la revisión anual. Preferiblemente para un martes por la tarde.",
        status: "pendiente"
    },
    {
        id: 4,
        title: "raparme a coco",
        description: "Aparentemente es algo lamentablmentente que me voy a rapar por mi foto de mi cartilla y disparar 20 cartuchos con un fusil de asalto ligero",
        status: "pendiente"
    },
    {
        id: 5,
        title: "Obtener mi cartilla militar liberada y meterme a telmex",
        description: "Añadir la última certificación de Diseño de Interfaces y revisar los datos de contacto.",
        status: "pendiente"
    }
];

/**
 * Función para renderizar las tareas en el DOM.
 */
function renderTasks() {
    const taskListContainer = document.getElementById('task-list');
    
    // Limpiar el contenedor antes de renderizar (por si acaso)
    taskListContainer.innerHTML = '';

    tasks.forEach(task => {
        // Crear elemento de la tarjeta
        const card = document.createElement('article');
        card.className = 'task-card';

        // Determinar clases de estado
        const isCompleted = task.status === 'completada';
        const badgeClass = isCompleted ? 'status-completed' : 'status-pending';
        const statusLabel = isCompleted ? 'Completado' : 'En progreso';

        // Construir el contenido HTML
        card.innerHTML = `
            <div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
            </div>
            <span class="status-badge ${badgeClass}">${statusLabel}</span>
        `;

        // Añadir al DOM
        taskListContainer.appendChild(card);
    });
}

// Ejecutar el renderizado cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de tareas cargado correctamente.");
    renderTasks();
})