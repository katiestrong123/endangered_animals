document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  
  const coolForm = document.querySelector('#new-item-form');
  coolForm.addEventListener('submit', handleFormSubmit);


  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAll);
})
const createReadingItem = function(form) {
  const readingListItem = document.createElement('li');
  const title = document.createElement('h1');
  title.textContent = form.title.value;
  readingListItem.appendChild(title);
  const author = document.createElement('h2');
  author.textContent = form.author.value;
  readingListItem.appendChild(author);
  const category = document.createElement('h3');
  category.textContent = form.category.value;
  readingListItem.appendChild(category);
  return readingListItem;
}
const handleFormSubmit = function(event) {
  event.preventDefault();
  const readingItem = createReadingItem(event.target);
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingItem);
}
const handleDeleteAll = function (event) {
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';
}