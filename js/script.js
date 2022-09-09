const input = document.querySelector('#link');
const btn = document.querySelector('button');
const result = document.querySelector('.resultado');

btn.addEventListener('click', (event) => {
  result.innerHTML = '';
  event.preventDefault();
  new QRCode(result, input.value);
});
