async function sendToWorker() {
    const inputValue = document.getElementById('inputValue').value;

    if (!inputValue) {
        alert("Por favor, introduce un número.");
        return;
    }

    // Llamada al Worker de Cloudflare
    try {
        const response = await fetch('https://your-worker-url.workers.dev/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input: parseInt(inputValue) })
        });

        const result = await response.json();
        document.getElementById('result').textContent = `Resultado: ${result.result}`;
    } catch (error) {
        console.error('Error al contactar con el Worker:', error);
        alert("Hubo un error al obtener la respuesta de la IA.");
    }
}
