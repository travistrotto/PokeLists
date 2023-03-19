// Find the divs under each p with a generation's name
const gen1Div = document.querySelector('#gen1');
const gen2Div = document.querySelector('#gen2');
const gen3Div = document.querySelector('#gen3');
// + Add more divs for other generations here

// Find the ListSelected div
const listSelectedDiv = document.querySelector('.ListSelected');

// Keep track of the selected images
const selectedImages = [];

// Load images from each folder separately
const folders = ['gen1', 'gen2', 'gen3'];
folders.forEach(folder => {
    // Load images from the folder
    images.forEach(image => {
        // Create a new img element
        const img = document.createElement('img');
        img.src = `img/regular/${folder}/${image}`;
        img.alt = image.split('.')[0];
        img.classList.add('sprite');

        // Add an event listener to log the image name when it is clicked
        img.addEventListener('click', () => {
            // Remove the "selected" class from any previously selected image
            const selectedImg = document.querySelector('.selected');
            if (selectedImg) {
                selectedImg.classList.remove('selected');
            }
            // Add the "selected" class to the clicked image
            img.classList.add('selected');
            console.log(img.alt);

            // Add the selected image to the selectedImages array
            selectedImages.push(img);

            // Create a new img element for the selected image and append it to the ListSelected div
            const selectedImgElement = document.createElement('img');
            selectedImgElement.src = img.src;
            selectedImgElement.alt = img.alt;
            listSelectedDiv.appendChild(selectedImgElement);
        });

        // Add the img element to the appropriate div based on the folder name
        if (folder === 'gen1') {
            gen1Div.appendChild(img);
        } else if (folder === 'gen2') {
            gen2Div.appendChild(img);
        } else if (folder === 'gen3') {
            gen3Div.appendChild(img);
        }
        // + Add more conditions for other generations here
    });
});
