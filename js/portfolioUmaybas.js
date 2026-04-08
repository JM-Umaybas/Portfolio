// Type In Effect for Intro Tagline
const p = document.querySelector('.introTagline');
const text = "Computer Engineering Student • Beginner Programmer • Tech Enthusiast";
function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        setTimeout(() => {
            element.textContent = ""; 
            textTypingEffect(element, text, 0); 
        }, 3000);
        return;
    }

    setTimeout(() => textTypingEffect(p, text, i + 1), 50);
}
textTypingEffect(p, text);

/* 
 * NOTE TO SIR:
 * I leave this note if in case its needed.
 * Learning Reference: 
 * https://www.youtube.com/watch?v=MiTJnYHX3iA
 */