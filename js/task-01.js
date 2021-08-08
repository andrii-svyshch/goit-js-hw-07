const categoriesItemsRef = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesItemsRef.length} категории.`);

categoriesItemsRef.forEach(category => {
  console.log(`Категория: ${category.querySelector('h2').textContent}`);
  console.log(
    `Количество элементов:${category.querySelectorAll('ul>li').length}`,
  );
});
