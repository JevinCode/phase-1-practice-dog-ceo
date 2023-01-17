const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";


fetchJSON(imgUrl).then(images => images.message.forEach(img => {
    const container = document.getElementById('dog-image-container');
    const ig = document.createElement('img');
    ig.src = img;
    container.append(ig);
}));

fetchJSON(breedUrl).then(data => listBreeds(data.message));

function fetchJSON(url) {
    return fetch(url).then(response => response.json());
}

function listBreeds(breeds) {
    for(let breed in breeds) {
        const li = document.createElement('li');
        li.addEventListener('click', listColorizer);
        li.textContent = breed;
        if(breeds[breed].length > 0) {
            const ul = document.createElement('ul');
            breeds[breed].forEach(dog => {
                const li = document.createElement('li');
                li.addEventListener('click', listColorizer);
                li.textContent = dog;
                ul.append(li);
            });
            li.append(ul);
        }
        const list = document.getElementById('dog-breeds');
        list.append(li);
    }
}

function listColorizer(event) {
    event.target.style = 'color: red';
}