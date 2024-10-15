document.querySelectorAll('.services-box').forEach(box => {
    const button = box.querySelector('.btn');
    const text = box.querySelector('p');

    // Esconder o texto inicialmente
    text.style.display = 'none';

    button.addEventListener('click', () => {
        if (text.style.display === 'none') {
            text.style.display = 'block';
            button.textContent = 'Read less'; // Mudar texto do botão
        } else {
            text.style.display = 'none';
            button.textContent = 'Read more'; // Reverter texto do botão
        }
    });
});
