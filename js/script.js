const title = document.getElementById('title');

title.addEventListener('mouseover', function () {
    title.textContent = 'Hello, I am Mulubrhan!';
});

title.addEventListener('mouseout', function () {
    title.textContent = 'I am Mulubrhan';
});