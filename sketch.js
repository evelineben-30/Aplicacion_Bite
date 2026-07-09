// Manejo de Navegación del Tab Bar de Bite
function changeView(viewId) {
    // Quitar estados activos anteriores
    document.querySelectorAll('.app-view').forEach(view => {
        view.classList.remove('active');
    });
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.classList.remove('active');
    });

    // Activar nueva vista seleccionada
    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
        targetView.classList.add('active');
    }

    // Activar icono correspondiente en el Tab Bar
    const tabs = document.querySelectorAll('.tab-item');
    if (viewId === 'inicio') tabs[0].classList.add('active');
    if (viewId === 'agregar') {
        tabs[1].classList.add('active');
        resetCameraFlow(); // Regresar al estado inicial de cámara limpia
    }
    if (viewId === 'progreso') tabs[2].classList.add('active');
    if (viewId === 'tips') tabs[3].classList.add('active');
}

// Resetear flujo de la cámara
function resetCameraFlow() {
    document.getElementById('step-camera').classList.remove('hidden');
    document.getElementById('step-analysis').classList.add('hidden');
    document.getElementById('analysis-result-box').classList.add('hidden');
    document.getElementById('btn-confirm-next').classList.add('hidden');
}

// Flujo de simulación de reconocimiento por IA
function triggerAnalysis() {
    document.getElementById('step-camera').classList.add('hidden');
    document.getElementById('step-analysis').classList.remove('hidden');
    
    document.getElementById('analysis-title').innerText = "Analizando comida...";
    document.getElementById('spinner').classList.remove('hidden');

    // Simulación del tiempo de procesamiento de la IA (3 segundos)
    setTimeout(() => {
        document.getElementById('spinner').classList.add('hidden');
        document.getElementById('analysis-title').innerText = "¡Procesado con éxito!";
        document.getElementById('analysis-result-box').classList.remove('hidden');
        document.getElementById('btn-confirm-next').classList.remove('hidden');
    }, 2500);
}

// Solución Heurística: Botón Cancelar regresa al Home de forma segura
function cancelRegistration() {
    resetCameraFlow();
    changeView('inicio');
}

// Al dar "Listo" avanza automáticamente al historial para verificar el registro
function confirmFood() {
    alert("¡Buen registro! Tu comida ha sido guardada.");
    changeView('progreso');
}