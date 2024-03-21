let url = "https://api.quotable.io/random";
let quote = document.getElementById("quote");
let author = document.getElementById("author");

async function getQuote() {
  quote.textContent = "Loading...";
  author.textContent = "";

  try {
    let response = await fetch(url);
    let data = await response.json();

    quote.textContent = data.content;
    author.textContent = data.author;
  } catch (error) {
    console.error("Error fetching quote:", error);
    quote.textContent = "Failed to fetch quote.";
  }
}

getQuote();

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " ---- by " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=400"
  );
}
