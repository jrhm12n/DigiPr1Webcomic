const toggleBtn = document.getElementById('mode-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('code-mode');
    body.classList.toggle('art-mode');
    
    if (body.classList.contains('art-mode')) {
        toggleBtn.textContent = 'CÓDIGO';
    } else {
        toggleBtn.textContent = 'ARTE';
    }
});

const typewriterElements = document.querySelectorAll('.typewriter p');
let delay = 0;

typewriterElements.forEach((el, index) => {
    const text = el.textContent;
    el.textContent = '';
    el.style.opacity = '1';
    
    setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
            el.textContent += text.charAt(i);
            i++;
            if (i >= text.length) clearInterval(interval);
        }, 20);
    }, delay);
    
    delay += text.length * 20 + 500;
});

function generateVerse() {
    const name = document.getElementById('username').value;
    const output = document.getElementById('custom-verse');
    
    if (!name) {
        output.textContent = 'Por favor, escribe tu nombre primero.';
        return;
    }
    
    const verses = [
        `Para ${name}, que busca en el código lo que yo encontré: la belleza del error.`,
        `${name}, tu nombre es ahora variable en mi memoria: constante, no olvidado.`,
        `En la sintaxis del mundo, ${name}, tú eres la excepción que confirma la regla.`,
        `Para ${name}: que tus bugs sean siempre features, y tus errores, puertas.`
    ];
    
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];
    
    output.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
        output.textContent += randomVerse.charAt(i);
        i++;
        if (i >= randomVerse.length) clearInterval(interval);
    }, 50);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
