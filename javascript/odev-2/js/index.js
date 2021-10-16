function showAlert(alertType) {
  if (alertType == 'showNullInputError') {
    $('.error').toast('show')
  }
}

function checkedListItem(item) {
  item.target.classList.toggle('checked') //toggle class
}

function deleteListItem(item) {
  let li = item.target.parentElement
  li.style.display = 'none'
}

function newElement() {
  let inputText = document.querySelector('#task').value
  if (inputText.length < 1) {
    return showAlert('showNullInputError')
  }
  let ul_DOM = document.querySelector('#list')

  let li_DOM = document.createElement('li')
  let liText = document.createTextNode(inputText)

  li_DOM.appendChild(liText)
  li_DOM.setAttribute('onclick', 'checkedListItem(event)')

  //add close button
  let span = document.createElement('span')
  let text = document.createTextNode('\u00D7')
  span.className = 'close'
  span.setAttribute('onclick', 'deleteListItem(event)')
  span.appendChild(text)
  li_DOM.appendChild(span)

  //add li to ul
  ul_DOM.appendChild(li_DOM)
  $('.success').toast('show')
  document.querySelector('#task').value = ''
}
