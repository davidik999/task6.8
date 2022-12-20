let element = document.querySelector('a');

element.addEventListener('click', (event) => {
    event.preventDefault();
    element.textContent=prompt();
})
