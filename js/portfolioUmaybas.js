// Type In Effect for Intro Tagline
const effect = document.querySelector('.typeInEffect');
const text = "Jan Marc Umaybas";
function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length - 1) {
        setTimeout(() => {
            element.textContent = ""; 
            textTypingEffect(element, text, 0); 
        }, 8000);
        return;
    }

    setTimeout(() => textTypingEffect(effect, text, i + 1), 50);
}
textTypingEffect(effect, text);

/* 
 * NOTE TO SIR:
 * I leave this note if in case its needed.
 * Learning Reference: 
 * https://www.youtube.com/watch?v=MiTJnYHX3iA
 */