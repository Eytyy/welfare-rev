const xhr = new XMLHttpRequest();
xhr.open('GET', './data.json', true);
xhr.addEventListener('load', () => {
  console.log('Done', xhr.status);
});
xhr.send(null);
