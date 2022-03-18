let range = document.getElementById('calculation__sale-range');
let saleAllEl = document.querySelectorAll('.calculation__sale-item');
let totalSum = document.getElementById('calculation__total-sum');
let cashbackAllEl = document.querySelectorAll('.calculation__sale-sum-item');
let cashbackSumActiveZero = document.getElementById('sale-sum_zero');
let cashbackSumActive2 = document.getElementById('sale-sum_2');
let cashbackSumActive4 = document.getElementById('sale-sum_4');

// Удаление у всех элементов "Visibility"
function removeVisibility() {
  saleAllEl.forEach((el) => {
    el.style.visibility = 'hidden';    
  })
}
// Удаление у всех элементов зеленого цвета
function removeColor() {
  cashbackAllEl.forEach((el) => {
    el.style.color = '#d2d2d3';    
  })
}

saleAllEl.forEach((el) => {
  el.style.visibility = 'hidden';    
})





// Поведение при выборе количества покупок
range.onchange = function() {	
  removeVisibility();
  removeColor();
  let rangeValue = range.value;
  console.log(rangeValue);

  if (rangeValue <= 4) {
    totalSum.innerHTML = 2000 + ' ₽';
    cashbackSumActive2.style.color = '#8dbd57';   
  } 
  if (rangeValue <= 1) {
    totalSum.innerHTML = 0 + ' ₽';
    removeColor();
  } 
  if (rangeValue >= 5) {
    totalSum.innerHTML = 4000 + ' ₽';
    cashbackSumActive4.style.color = '#8dbd57';
  } 
  

  let saleId = 'sale' + rangeValue;
  let saleIdEl = document.getElementById(saleId);    
  saleIdEl.style.visibility = 'visible';  
 }









// JS
// SUM CHANGE
// let range = document.getElementById('myRange');
// let result = document.getElementById('calculation__sum-change');
// let resultValue = range.value;
// let calcMonthSum = document.getElementById('calculation__month-sum');
// range.onchange = function() {	
// 	let resultSum = range.value * 0.04;
// 	result.innerHTML = range.value;
// 	calcMonthSum.innerHTML = resultSum + '<span> ₽</span>';
// }