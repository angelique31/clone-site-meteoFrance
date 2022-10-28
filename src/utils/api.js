import configData from '../configs/data';

export async function getJoke() {
    return fetch(configData.url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data.value);
            return data.value;
        });

}


// const content = document.querySelector('#content');
// fetch('https://api.chucknorris.io/jokes/random').then((res) => res.json())
//     .then((data) => content.textContent = data.value);
