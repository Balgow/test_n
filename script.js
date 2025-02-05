const messages = [
    "Неге птишка?",
    "Э? көтбок!!",
    "Бытшытынды шығарам",
    "Пожалуйста принцесса ия деші",
    "Плиз плиз овалым менің",
    "Сенің көтің боқ",
    "Все давай, это последняя кнопка",
    "Ха, көтбоқ, сеніп калдыңго ия?",
    "Көтеніңе саусақ тығамыыыыннн",
    "Жанымсол, ай лув ю ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    yesButton.textContent = "Ия";
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}