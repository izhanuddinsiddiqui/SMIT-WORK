function getUserInput() {
    const title = prompt("Enter Product Title:");
    const description = prompt("Enter Product Description:");
    const buttonTitle = prompt("Enter Button Title:");
    const buttonLink = prompt("Enter Button Link:");
    const imageLink = prompt("Enter Image Link (absolute URL):");

    document.getElementById("productTitle").textContent = title;
    document.getElementById("productDescription").textContent = description;
    document.getElementById("productButton").textContent = buttonTitle;
    document.getElementById("productButton").href = buttonLink;
    document.getElementById("productImage").src = imageLink;
}

getUserInput();