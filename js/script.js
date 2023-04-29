const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const API_URL = 'https://icanhazdadjoke.com/';

async function getJoke() {
  try {
    jokeEl.innerText = 'Updating...';
    btnEl.disabled = true;
    btnEl.innerText = 'Loading...';

    const res = await fetch(API_URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await res.json();
    btnEl.disabled = false;
    btnEl.innerText = 'Tell Me a joke';

    jokeEl.innerText = data.joke;
  } catch (error) {
    jokeEl.innerText = 'An Error happened, try again later';
    btnEl.disabled = false;
    btnEl.innerText = 'Tell Me a joke';
  }
}

btnEl.addEventListener('click', getJoke);
