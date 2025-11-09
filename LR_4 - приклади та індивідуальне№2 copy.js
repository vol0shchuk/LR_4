//Приклади
//Завдання №1

let book = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    isRead: true,
    bookInfo() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`);
    }
};

book.isRead = !book.isRead;
book. bookInfo();

//Завдання №2

let library = [
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997, isRead: true },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: false },
    { title: "1984", author: "George Orwell", year: 1949, isRead: true }
];

function displayLibrary() {
    library.forEach (book => {
        console. log(`Назва: ${book.title}, Автор: ${book.author}, Piк видання: ${book.year}, Прочитана: ${book.isRead ? "Тak" : "Hi"}`);
    });
}


//Завдання №3

library.push({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: false }) ;
displayLibrary();

library. sort((a, b) => a.year - b.year);
console. log( "Відсортовані книги за роком видання:", library);

let unreadBooks = library. filter(book => !book. isRead);
console. log( "Непрочитані книги:", unreadBooks);

let tolkienBook = library. find(book => book.author === "J.R.R. Tolkien");
console. log ("Книга Толкіна:", tolkienBook);

//Завдання №4
function addBookToLibrary() {
    let title = prompt ("Введіть назву книги:");
    let author = prompt ("Введіть автора книги:") ;
    let year = +prompt ( "Введіть рік видання книги:");
    let isRead = confirm("Чи прочитана книга?");
    
    library.push({ title, author, year, isRead }) ;
    displayLibrary();
}

addBookToLibrary();

//Індивідуальні завдання

//Завдання №2

//-----------метод markAsRead
library.forEach(book => {
    book.markAsRead = function() {
        this.isRead = true;
    };
});

library[1].markAsRead();
console.log("Після прочитання:", library[1]);

//-----------Функція середнього року
function calculateAverageYear() {
    let sum = library.reduce((acc, book) => acc + book.year, 0);
    return Math.round(sum / library.length);
}

console.log("Середній рік видання:", calculateAverageYear());
