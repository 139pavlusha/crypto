let $options = document.querySelectorAll('li');
let $radio = document.querySelectorAll('input[type=radio]');

for (let i = 0; i < 25; i++) {
  $radio[i].addEventListener('click', () => {
    if (!document.querySelectorAll('details')[0].hasAttribute("open") && $radio[i].checked)
    console.log('-')
      document.querySelectorAll('details')[0].setAttribute("open", "open")
  });
}

for (let i = 25; i < 50; i++) {
  $radio[i].addEventListener('click', () => {
    if (!document.querySelectorAll('details')[1].hasAttribute("open") && $radio[i].checked)
      document.querySelectorAll('details')[1].setAttribute("open", "open")
  });
}


// document.addEventListener('click', () => {
//     if (document.querySelectorAll('details')[0].hasAttribute("open") || document.querySelectorAll('details')[1].hasAttribute("open")){
//       document.querySelectorAll('details')[0].removeAttribute("open")
//       document.querySelectorAll('details')[1].removeAttribute("open")
//     }
//   });



