// https://www.omnicalculator.com/conversion/acres-to-hectares-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const haRadio = document.getElementById('haRadio');
const acRadio = document.getElementById('acRadio');

let ha;
let ac = v; 

// labels of the inpust
const variable = document.getElementById('variable');

haRadio.addEventListener('click', function() {
  variable.textContent = 'ac';
  ac = v;
  result.textContent = '';
});

acRadio.addEventListener('click', function() {
  variable.textContent = 'ha';
  ha = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(haRadio.checked)
    result.textContent = `ha = ${computeha().toFixed(5)}`;

  else if(acRadio.checked)
    result.textContent = `ac = ${computeac().toFixed(5)}`;
})

// calculation

function computeha() {
  return Number(ac.value) / 2.471;
}

function computeac() {
  return Number(ha.value) * 2.471;
}