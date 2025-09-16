async function newQuote() {
  try {
    // Fetch quotes from local JSON file
    const response = await fetch("simpsons.json");
    const data = await response.json();

    // Get a random quote from the array
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex];

    // Update the HTML content with the fetched quote
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `<p>"${quote.quote}" - ${quote.character}</p>`;

    // Create and append the character image
    const characterImage = document.createElement("img");
    characterImage.src = quote.image;
    characterImage.style.width = "200px";
    characterImage.style.height = "auto";
    characterImage.alt = quote.character;
    quoteDisplay.appendChild(characterImage);

    // Create and append the "Inspire Me Again" button
    const inspireMeAgainButton = document.createElement("button");
    inspireMeAgainButton.textContent = "Inspire Me Again!";
    inspireMeAgainButton.onclick = newQuote;
    quoteDisplay.appendChild(inspireMeAgainButton);
  } catch (error) {
    console.error("Error fetching quote:", error);
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML =
      "<p>Failed to fetch quote. Please try again later.</p>";
  }
}