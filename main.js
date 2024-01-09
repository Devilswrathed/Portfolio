document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typing-text');
    const textContent = "Hello, my name is:";
    const delayBetweenAnimations = 1000; // Adjust the delay between animations (milliseconds)

    function type() {
        let charIndex = 0;

        function typeCharacter() {
            const currentText = textContent.slice(0, charIndex + 1);
            textElement.textContent = currentText;

            if (charIndex < textContent.length) {
                charIndex++;
                setTimeout(typeCharacter, 150); // Adjust the typing speed (milliseconds)
            } else {
                // Animation complete, start backspacing
                setTimeout(backspace, delayBetweenAnimations);
            }
        }

        function backspace() {
            let currentText = textElement.textContent;

            if (currentText.length > 0) {
                currentText = currentText.slice(0, -1);
                textElement.textContent = currentText;
                setTimeout(backspace, 50); // Adjust the backspacing speed (milliseconds)
            } else {
                // Backspacing complete, start typing again
                setTimeout(type, delayBetweenAnimations);
            }
        }

        typeCharacter();
    }

    // Initial start
    type();
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.mainInfo');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    sections.forEach((section) => {
        observer.observe(section);
    });
});



