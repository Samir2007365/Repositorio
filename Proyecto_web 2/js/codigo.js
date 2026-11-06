document.addEventListener('DOMContentLoaded', () => {
    console.log("SysWiki cargado y listo. Inicializando filtros en tiempo real...");

    // 1. Lógica de búsqueda global (index.html)
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const inputVal = document.getElementById('busqueda-global').value.trim();
            if (inputVal !== "") {
                alert(`Buscando en la Wiki general el término: "${inputVal}"`);
            } else {
                alert("Por favor, ingresa un término de búsqueda válido.");
            }
        });
    }

    // 2. Lógica y filtrado dinámico para Linux (linux.html)
    const filterLinuxForm = document.getElementById('filter-linux-form');
    const inputLinux = document.getElementById('filtro-linux');

    if (inputLinux) {
        // Filtrado en tiempo real mientras el usuario escribe
        inputLinux.addEventListener('input', () => {
            const textoBusqueda = inputLinux.value.toLowerCase().trim();
            const filas = document.querySelectorAll('table tbody tr');

            filas.forEach(fila => {
                const contenidoFila = fila.textContent.toLowerCase();
                if (contenidoFila.includes(textoBusqueda)) {
                    fila.style.display = '';
                } else {
                    fila.style.display = 'none';
                }
            });
        });
    }

    if (filterLinuxForm) {
        // Acción al presionar Enter o hacer clic en "Filtrar" sin recargar la página
        filterLinuxForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const termino = inputLinux.value.trim();
            if (termino !== "") {
                alert(`Filtro aplicado para Linux: "${termino}"`);
            } else {
                alert("Por favor, ingresa un comando de Linux para filtrar.");
            }
        });
    }

    // 3. Lógica y filtrado dinámico para Windows (windows.html)
    const filterWindowsForm = document.getElementById('filter-windows-form');
    const inputWindows = document.getElementById('filtro-windows');

    if (inputWindows) {
        // Filtrado en tiempo real mientras el usuario escribe
        inputWindows.addEventListener('input', () => {
            const textoBusqueda = inputWindows.value.toLowerCase().trim();
            const filas = document.querySelectorAll('table tbody tr');

            filas.forEach(fila => {
                const contenidoFila = fila.textContent.toLowerCase();
                if (contenidoFila.includes(textoBusqueda)) {
                    fila.style.display = '';
                } else {
                    fila.style.display = 'none';
                }
            });
        });
    }

    if (filterWindowsForm) {
        // Acción al presionar Enter o hacer clic en "Filtrar" sin recargar la página
        filterWindowsForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const termino = inputWindows.value.trim();
            if (termino !== "") {
                alert(`Filtro aplicado para Windows: "${termino}"`);
            } else {
                alert("Por favor, ingresa un comando de Windows para filtrar.");
            }
        });
    }
});