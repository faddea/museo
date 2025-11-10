// Animación para secciones
gsap.registerPlugin(ScrollTrigger);

        // Navbar aparece desde arriba
        gsap.from("nav", {
            y: -80,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Header textos
        gsap.from("header h1, header h2, header p", {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            delay: 0.5
        });

        // Secciones fade in
        gsap.utils.toArray(".fade-section").forEach(section => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                }
            });
        });

        // Fade-Up (títulos y párrafos)
        gsap.utils.toArray(".fade-up").forEach(el => {
            gsap.from(el, {
                opacity: 0,
                y: 40,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%"
                }
            });
        });
        
 // Seleccionamos el texto
  const textEl = document.getElementById("animated-text");
  const textContent = textEl.textContent;
  textEl.textContent = ""; // Limpiamos el texto original

  // Animación de escritura
  gsap.to(textEl, {
    duration: textContent.length * 0.05, // duración basada en cantidad de caracteres
    text: textContent,
    ease: "none",
    onUpdate: function() {
      // Esto permite que se vea caracter por caracter
      textEl.textContent = textContent.substr(0, Math.floor(this.progress() * textContent.length));
    }
  });

  

// Animación texto interactivo

// Función para separar cada letra en un span
        const wrapTextInSpans = (node) => {
            const text = node.textContent;
            node.innerHTML = '';
            const letters = [];
            for (const ch of text) {
                if (ch === ' ') {
                    const s = document.createElement('span');
                    s.className = 'space';
                    s.innerHTML = '&nbsp;';
                    node.appendChild(s);
                } else {
                    const span = document.createElement('span');
                    span.className = 'split-letter';
                    span.textContent = ch;
                    node.appendChild(span);
                    letters.push(span);
                }
            }
            return letters;
        };

        // Tomamos el elemento
        const animatedSpan = document.getElementById('animated-span');
        const letters = wrapTextInSpans(animatedSpan);

        // Animación de "scatter" al pasar el mouse sobre cualquier letra
        function scatter() {
            gsap.to(letters, {
                duration: 1,
                x: () => gsap.utils.random(-50, 50),
                y: () => gsap.utils.random(-50, 50),
                rotation: () => gsap.utils.random(-45, 45),
                scale: () => gsap.utils.random(0.7, 1.3),
                ease: "expo.out",
                stagger: 0.02
            });
        }

        // Volver a posición original
        function restore() {
            gsap.to(letters, {
                duration: 0.8,
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1,
                ease: "power3.out",
                stagger: 0.02
            });
        }

        // Cada letra dispara la animación
        letters.forEach(letter => {
            letter.addEventListener('mouseenter', scatter);
            letter.addEventListener('mouseleave', restore);
        });

        // Entrada inicial suave
        gsap.from(letters, {
            duration: 0.9,
            y: 20,
            opacity: 0,
            ease: "power2.out",
            stagger: 0.03
        });



// ultimo borrar

