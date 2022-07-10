let $options = document.querySelectorAll('ul label');
for (let i = 0; i < $options.length; i++) {
  $options[i].addEventListener('click', () => {
    document.querySelectorAll('details')[0].removeAttribute("open")
    document.querySelectorAll('details')[1].removeAttribute("open")
  });
}