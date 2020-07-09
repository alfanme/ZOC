const option = document.querySelector('.option');

function goBack() {
    window.history.back();
}

function showOption() {
    option.classList.toggle('active');
}