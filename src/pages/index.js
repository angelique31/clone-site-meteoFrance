import { getJoke } from '../utils/api';
/**
 * Fonction qui permet d'initialiser les données
 */
async function init() {
    const data =  await getJoke();
    
    displayJoke(data);
}
init();


/**
 * Fonction qui permet l'affichage des blagues 
 */
const displayJoke = (joke) =>{
    const content = document.querySelector('#content');
    content.textContent = joke;
};
