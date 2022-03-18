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
    el.style.color = '#989898';
  })
}
// Удаление у всех элементов зеленого цвета
function removeColor() {
  cashbackAllEl.forEach((el) => {
    el.style.color = '#d2d2d3';
  })
}

// Поведение при выборе количества покупок
range.onchange = function () {
  removeVisibility();
  removeColor();
  let rangeValue = range.value; 
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
  saleIdEl.style.color = '#ffb13b';
}
