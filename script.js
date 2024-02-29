async function newQuote() {
  try {
    const response = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const data = await response.json();

    // Assuming the API returns an array of quotes, we'll take the first one
    const quote = data[0];

    // Update the HTML content with the fetched quote
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `<p>"${quote.quote}" - ${quote.character}</p>`;

    // Create and append the character image
    const characterImage = document.createElement("img");
    characterImage.src = quote.image;
    characterImage.style.width = "200px"; // Adjust width as needed
    characterImage.style.height = "auto"; // Automatically adjust height to maintain aspect ratio
    quoteDisplay.appendChild(characterImage);

    // Create and append the "Inspire Me Again" button
    const inspireMeAgainButton = document.createElement("button");
    inspireMeAgainButton.textContent = "Inspire Me Again!";
    inspireMeAgainButton.onclick = newQuote; // Set the click event to call newQuote() again
    quoteDisplay.appendChild(inspireMeAgainButton);
  } catch (error) {
    console.error("Error fetching quote:", error);
    // Optionally, update the HTML to display an error message
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML =
      "<p>Failed to fetch quote. Please try again later.</p>";
  }
}
