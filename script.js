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
    cashbackSumActive2.style.color = '#8dbd57';
  }
  if (rangeValue <= 1) {
    removeColor();
  }
  if (rangeValue >= 5) {
    cashbackSumActive4.style.color = '#8dbd57';
  }
  let numbRangeValue = Number(rangeValue);

  switch (numbRangeValue) {
    case 0:
      totalSum.innerHTML = 0 + ' ₽';
      break;
    case 1: // foo равно 0, случай соответствует выражению и эти инструкции будут выполнены
      totalSum.innerHTML = 0 + ' ₽';
      break; // В конце расположен break, поэтому выполнение не перейдёт к случаю 'case 2:'
    case 2: // В случае 'case 0:' не было break, инструкции данного случая также будут выполнены
      totalSum.innerHTML = 2000 + ' ₽';
      break; // В конце расположен break, поэтому выполнение не перейдёт к случаю 'case 2:'
    case 3:
      totalSum.innerHTML = 4000 + ' ₽';
      break;
    case 4:
      totalSum.innerHTML = 6000 + ' ₽';
      break;
    case 5:
      totalSum.innerHTML = 10000 + ' ₽';
      break;
    case 6:
      totalSum.innerHTML = 14000 + ' ₽';
      break;
    case 7:
      totalSum.innerHTML = 18000 + ' ₽';
      break;
    case 8:
      totalSum.innerHTML = 22000 + ' ₽';
      break;
    case 9:
      totalSum.innerHTML = 26000 + ' ₽';
      break;
    case 10:
      totalSum.innerHTML = 30000 + ' ₽';
      break;
    case 11:
      totalSum.innerHTML = 34000 + ' ₽';
      break;
    case 12:
      totalSum.innerHTML = 38000 + ' ₽';
      break;
    case 13:
      totalSum.innerHTML = 42000 + ' ₽';
      break;
    case 14:
      totalSum.innerHTML = 46000 + ' ₽';
      break;
    case 15:
      totalSum.innerHTML = 50000 + ' ₽';
      break;
    case 16:
      totalSum.innerHTML = 54000 + ' ₽';
      break;
    case 17:
      totalSum.innerHTML = 58000 + ' ₽';
      break;
    case 18:
      totalSum.innerHTML = 62000 + ' ₽';
      break;
    case 19:
      totalSum.innerHTML = 66000 + ' ₽';
      break;
    case 20:
      totalSum.innerHTML = 70000 + ' ₽';
      break;
    case 21:
      totalSum.innerHTML = 74000 + ' ₽';
      break;
    case 22:
      totalSum.innerHTML = 78000 + ' ₽';
      break;
    case 23:
      totalSum.innerHTML = 82000 + ' ₽';
      break;
    case 24:
      totalSum.innerHTML = 86000 + ' ₽';
      break;
    case 25:
      totalSum.innerHTML = 90000 + ' ₽';
      break;
  }
  let saleId = 'sale' + rangeValue;
  let saleIdEl = document.getElementById(saleId);
  saleIdEl.style.visibility = 'visible';
  saleIdEl.style.color = '#ffb13b';
}
