// ensure all dom content and libraries are loaded before running
document.addEventListener("DOMContentLoaded", onload);

// returns a simulated book file in JSON format
// book pages are stored in an array

var currentPage = 3;
var book; 
function getBook() {
    var book = {
        bookId: 187,
        title: "Test Book For Page Turn",
        subject: "Children",
        author: "Cindy Lou Who",
        year: 1937,
        pages: [
			{
			    page: 1,
			    head: "The Cat Jumped Over the Hat",
			    html: "<b>Page One</b><br>" +
					"<h3> The Cat Jumped Over the Hat</h3>" +
					"There once was a little cat that jumped over a<br>" +
					"hat.  Once the cat got over the hat, it tripped<br>" +
					"over a baseball bat.<br>" +
					'<img src="http://www.photosforclass.com/download/pixabay-2024026" ' +
					'alt="cat" width="200">',
			    imgs: [
					"http://www.photosforclass.com/download/pixabay-2024026",
			    ],
			    audio: [],
			},
			{
			    page: 2,
			    head: "The Dog Walked in the Fog",
			    html: "<b>Page Two</b><br>" +
					"<h3> The Dog Walked in the Fog</h3>" +
					"There once was a big dog that went for a long walk in<br>" +
					"the fog.  The dog could not see through the fog and it<br>" +
					"stepped on a frog.<br>" +
					'<img src="http://www.photosforclass.com/download/pixabay-2029284" ' +
					'alt="dog" width="200">',
			    imgs: [
					"http://www.photosforclass.com/download/pixabay-2029284",
			    ],
			    audio: [],
			},
			{
			    page: 3,
			    head: "The Goat Rowed a Boat",
			    html: "<b>Page Three</b><br>" +
					"<h3> The Goat in a Boat </h3>" +
					"The goat rowed a small wooden boat across the archduke's moat <br>" +
					"All of a sudden the boad decided to no longer float and the.<br>" +
					"the goat had to put on his life coat<br>" +
					'<img src="http://www.photosforclass.com/download/pixabay-297028" ' +
					'alt="goat" width="200">',
			    imgs: [
					"http://www.photosforclass.com/download/pixabay-297028",
			    ],
			    audio: [],

			},
			{
			    page: 4,
			    head: "A Second Cat Jumped Over the Hat",
			    html: "<b>Page Four</b><br>" +
					"<h3> A Second Cat Jumped Over the Hat</h3>" +
					"There was a second little cat that jumped over the<br>" +
					"same hat.  Once the cat got over the hat, it tripped<br>" +
					"over the same baseball bat.<br>" +
					'<img src="http://www.photosforclass.com/download/pixabay-30746" ' +
					'alt="cat2" width="200">',
			    imgs: [
					"http://www.photosforclass.com/download/pixabay-30746",
			    ],
			    audio: [],
			},
			{
			    page: 5,
			    head: "The Frog Walked in the Fog",
			    html: "<b>Page Five</b><br>" +
					"<h3> The Frog Walked in the Fog</h3>" +
					"There once was a little frog that went for a long walk in<br>" +
					"the fog.  The frog could not see through the fog and it<br>" +
					"hopped into a dog.<br>" +
					'<img src="http://www.photosforclass.com/download/pixabay-2740933" ' +
					'alt="frog" width="200">',
			    imgs: [
					"http://www.photosforclass.com/download/pixabay-2740933",
			    ],
			    audio: [],
			},
        ]
    }

    // log the book file to the console
    console.log("book", book);

    // return the JSON book file
    return book
}


// takes book and page number as parameters
// finds page number in book's page array
// returns the page as JSON

function nextButton() {

    currentPage = currentPage + 1;
    if (currentPage > 5) {
        currentPage = 5;
    }

   var page1= getBookPage(book, currentPage);

    renderPage(page1);

}



function backButton() {

    currentPage = currentPage - 1;
    if (currentPage < 1) {
        currentPage = 1;
    }
    var page1=getBookPage(book, currentPage);
    renderPage(page1);
  
}


function getBookPage(book, pageNumber) {
    for (var i = 0; i < book.pages.length; i++) {
        if (+book.pages[i].page === +pageNumber) {
            console.log("page", book.pages[i]);
            return book.pages[i];
        }
    }
}

// takes a page as parameter
// will put the page's html in the document's 'page' div
function renderPage(page) {
    var node = document.getElementById("page");

    node.innerHTML = page.html;
}

// once dom content is loaded, functions below will run
function onload() {
    // fetch a book file
     book = getBook();
    // go to page 3 of book
    var page = getBookPage(book, currentPage)
    renderPage(page);
}// JavaScript source code
