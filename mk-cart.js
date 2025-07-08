document.addEventListener('DOMContentLoaded', function () {
 document.querySelectorAll('.item-quantity').forEach(function (container) {
  const minusBtn = container.querySelector('.qty-minus');
  const plusBtn = container.querySelector('.qty-plus');
  const qtyEl = container.querySelector('.qty');

  plusBtn.addEventListener('click', function () {
   let qty = parseInt(qtyEl.textContent);
   qtyEl.textContent = qty + 1;
  });

  minusBtn.addEventListener('click', function () {
   let qty = parseInt(qtyEl.textContent);
   if (qty > 1) {
    qtyEl.textContent = qty - 1;
   }
  });
 });
});