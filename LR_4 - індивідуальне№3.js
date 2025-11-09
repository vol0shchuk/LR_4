// Колекція картин

// Завдання 1 — створення об'єкта
let painting = {
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: 1503,
    style: "Renaissance",
    inMuseum: true,
    paintingInfo() {
        console.log(`Назва: ${this.title}, Художник: ${this.artist}, Рік: ${this.year}, Стиль: ${this.style}, В музеї: ${this.inMuseum ? "Так" : "Ні"}`);
    },
    markAsExhibited() {
        this.inMuseum = true;
    }
};

painting.paintingInfo();
painting.inMuseum = !painting.inMuseum;
painting.paintingInfo();

// Завдання 2 — масив картин

let gallery = [
    { title: "Starry Night", artist: "Vincent van Gogh", year: 1889, style: "Post-Impressionism", inMuseum: true },
    { title: "The Persistence of Memory", artist: "Salvador Dalí", year: 1931, style: "Surrealism", inMuseum: false },
    { title: "Guernica", artist: "Pablo Picasso", year: 1937, style: "Cubism", inMuseum: true }
];

function displayGallery() {
    gallery.forEach(p => {
        console.log(`Назва: ${p.title}, Художник: ${p.artist}, Рік: ${p.year}, Стиль: ${p.style}, В музеї: ${p.inMuseum ? "Так" : "Ні"}`);
    });
}

// Завдання 3

gallery.push({ title: "The Scream", artist: "Edvard Munch", year: 1893, style: "Expressionism", inMuseum: false });
displayGallery();

gallery.sort((a, b) => a.year - b.year);
console.log("Відсортовані за роком:", gallery);

let notInMuseum = gallery.filter(p => !p.inMuseum);
console.log("Картини НЕ в музеї:", notInMuseum);

let picassoPainting = gallery.find(p => p.artist === "Pablo Picasso");
console.log("Знайдена картина Пікассо:", picassoPainting);

// Завдання 4 — взаємодія з користувачем

function addPaintingToGallery() {
    let title = prompt("Введіть назву картини:");
    let artist = prompt("Введіть художника:");
    let year = +prompt("Введіть рік створення:");
    let style = prompt("Введіть стиль картини:");
    let inMuseum = confirm("Чи виставлена картина в музеї?");

    gallery.push({ title, artist, year, style, inMuseum });
    displayGallery();
}

// Індивідуальні завдання

// 1. Додаємо метод markAsExhibited до ВСІХ картин
gallery.forEach(p => {
    p.markAsExhibited = function () {
        this.inMuseum = true;
    };
});

// 2. Функція підрахунку середнього року
function calculateAverageYear() {
    let sum = gallery.reduce((acc, p) => acc + p.year, 0);
    return Math.round(sum / gallery.length);
}

console.log("Середній рік створення картин:", calculateAverageYear());
