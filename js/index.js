let clickerCounter = 0;

let $optionsList = document.querySelectorAll('.custom-select ul');
let $radio = document.querySelectorAll('input[type=radio]');
let $selects = document.querySelectorAll('.select-input');

function rewriteSelects () {
  for (let i = 0; i < 50; i++) {
    if ($radio[i].checked){
      // $selects[1].removeChild($selects[1].firstChild);
      if (i < 25) 
      {
        if ($selects[0].firstChild != null) $selects[0].removeChild($selects[0].firstChild);
        $selects[0].insertAdjacentHTML('beforeend', $radio[i].title);
      }
      else 
      {
        if ($selects[1].firstChild != null) $selects[1].removeChild($selects[1].firstChild);
        $selects[1].insertAdjacentText('beforeend', $radio[i].title);
      }
    }
  }
}
rewriteSelects();

let selectOpen1 = false
$selects[0].addEventListener('click', () => {
  $optionsList[1].className = 'list-close';
  selectOpen2 = false
  document.getElementById('select-input-buy').className = "select-input";
  if (selectOpen1) $optionsList[0].className = 'list-close';
  else $optionsList[0].className = '';
  if (selectOpen1) document.getElementById('select-input-sell').className = "select-input";
  else document.getElementById('select-input-sell').className = "select-input rotate";
  selectOpen1 = !selectOpen1;
  rewriteSelects();
});

let selectOpen2 = false
$selects[1].addEventListener('click', () => {
  $optionsList[0].className = 'list-close';
  selectOpen1 = false
  document.getElementById('select-input-sell').className = "select-input";
  if (selectOpen2) $optionsList[1].className = 'list-close';
  else $optionsList[1].className = '';
  if (selectOpen2) document.getElementById('select-input-buy').className = "select-input";
  else document.getElementById('select-input-buy').className = "select-input rotate";
  selectOpen2 = !selectOpen2;
  rewriteSelects();
});

document.addEventListener('click', function(event) {
  if (!$selects[1].contains(event.target) && !$selects[0].contains(event.target)) {
    selectOpen1 = selectOpen2 = false;
    $optionsList[0].className = 'list-close';
    $optionsList[1].className = 'list-close';
    document.getElementById('select-input-sell').className = "select-input";
    document.getElementById('select-input-buy').className = "select-input";
    rewriteSelects();
  }
});




