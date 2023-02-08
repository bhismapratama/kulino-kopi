let menu = document.querySelector('#menu-bar')//untuk ambil elemen id menu bar
let navbar = document.querySelector('.navbar')// untuk ambil elemen class navbar

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle')//mengambil bagian navbar ^^
})

const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split("")
        .map(
            (letter, idx) =>
                `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
        )
        .join("");
})