document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    excecuteForm(event.target['new-task-description'].value)
    form.reset();
  })
});

function excecuteForm(todoActivities){
  let p = document.createElement('p');
  let aButton = document.createElement('button')
  aButton.addEventListener('click', deleteActivities)
  aButton.textContent = 'X'
  p.textContent = `${todoActivities}  `;
  p.appendChild(aButton)
  let ul = document.querySelector('#tasks')
  ul.append(p)

}

function deleteActivities(e) {
  e.target.parentNode.remove();
}