// Selecting elements
const resultDiv = document.getElementById('results');
const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    let searched_breed = searchBox.value.trim().toLowerCase();
    let url = `https://dog.ceo/api/breed/${searched_breed}/images`;

    
    resultDiv.innerHTML = "";

    fetch(url)
      .then(res => {
        if (!res.ok) {  
          throw new Error("The breed not found");  
        }
        return res.json();
      })
      .then(data => {
        const images = data.message;
        if (!images || images.length === 0) {
          throw new Error("The breed not found"); 
        }
        displayImage(images);  
      })
      .catch(error => {
        displayErrorMessage(error.message);  
      });

    
    searchBox.value = "";
});

// Function to display images
function displayImage(images) {
    resultDiv.innerHTML = "";  

    const img = document.createElement('img');
    img.classList.add('dog-image');
    img.src = images[0];
    resultDiv.appendChild(img);

    let currentIndex = 0;
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      img.src = images[currentIndex];
    }, 5000);
}


function displayErrorMessage(message) {
    resultDiv.innerHTML = `<p class="error-message">${message}</p>`;  // Show error instead of image
}
