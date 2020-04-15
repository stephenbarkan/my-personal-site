const contactLink = document.getElementById("contact");
const chatWindow = document.getElementById("chat-window")
const messagesList = document.getElementById("chat-messages")
const chatControls = document.getElementById("chat-controls")
const nextButton = document.getElementById("nextButton")
const nextButtonWrapper = document.getElementById("next-button-wrapper")
const inputFields = document.querySelectorAll(`#chat-controls textarea`)
const form = document.getElementById('contact-form')
let editButtons = []
let formSubmit = null
let formClear = null
let state = 0
const states = ["yourName", "yourMessage", "yourEmail", "confirm"]

let userName = ""

const typingBubble = document.createElement("div")
typingBubble.classList.add("typingDots", "fromThem")
typingBubble.innerHTML = `<div class="message typing"><p><span>•</span><span>•</span><span>•</span></p></div>`

const confirmModalTemplate = document.getElementById("confirmModal")
var confirmModal = confirmModalTemplate.content.cloneNode(true)

let responses = [
  `Okay, ${userName}! What do you want to say to me?`,
  `Okay, that's pretty cool. Will you give me your email so I can reply to you?`,
  ``
]

chatWindow.setAttribute("data-state", states[0])

function chatPush(origin, message) {
  let originClass

  if (origin == "user") {
    originClass = "fromMe"
  } else {
    originClass = "fromThem"
  }

  const newBubble = document.createElement("div")
  newBubble.classList.add(originClass)

  if (originClass == "fromMe") {
    newBubble.innerHTML = `<div class='message'><div><button class='message-edit'>Edit</button></div><p data-field="${states[state]}"` + ">" + message + "</p></div>"
  } else {
    newBubble.innerHTML = `<div class='message'><p>` + message + `</div>`
  }
  messagesList.appendChild(newBubble)
  showLatestMessage()
}


function updateEditButtons() {
  editButtons = document.querySelectorAll('.message-edit')
  editButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const el = e.target
      const message = el.closest(".message");
      const editable = message.querySelector("p")


      editMessage(el, message, editable)
    })
  })
}

const editMessage = function (el, message, editable) {

  let isEditable = editable.getAttribute("contenteditable")
  let newContent

  if (editable.innerText !== "") {
    editable.toggleAttribute("contenteditable")
    if (isEditable === null) {
      message.setAttribute("tabindex", "0")
      message.classList.add("editable")
      el.innerText = "Save"
    } else {
      newContent = editable.innerText
      message.removeAttribute("tabindex")
      message.classList.remove("editable")
      el.innerText = "Edit"
      inputFields.forEach(field => {
        if (field.id == editable.getAttribute("data-field")) {
          field.innerHTML = newContent
        }
      })
    }
  }
}



inputFields.forEach(inputField => {
  inputField.addEventListener("keydown", function (e) {
    if (inputField.value) {
      if (e.which == 13) {
        e.preventDefault()
        event.stopPropagation()
        nextButton.click()
        nextButton.classList.add("animating")
      }
    }
  })
  inputField.addEventListener("keyup", () => {
    inputValueCheck()
  })
})

function inputValueCheck() {
  if (inputFields[state].value) {
    nextButtonWrapper.classList.remove('disabled')
    nextButton.setAttribute("tabindex", "0")
  } else {
    nextButtonWrapper.classList.add('disabled')
    nextButton.setAttribute("tabindex", "-1")
  }
}


nextButton.addEventListener("click", function (e) {
  e.preventDefault()
  nextButton.classList.add('animating')
  nextButton.addEventListener('animationend', () => {
    nextButton.classList.remove('animating')
    nextButton.blur()
  })
  message = document.querySelector(`#${states[state]}`).value

  if (message) {
    chatPush("user", message)
    updateEditButtons()
    saveName()
    updateState()


    if (state < states.length - 1) {
      addTypingBubble()
      setTimeout(function () {
        removeTypingBubble()
        chatPush("you", responses[(state % 4) - 1])
      }, 2500)

    } else {
      addTypingBubble()
      setTimeout(function () {
        removeTypingBubble()
        addConfirmBox()
      }, 2500)
    }

  }
})

function showLatestMessage() {
  messagesList.lastChild.scrollIntoView({
    behavior: 'smooth',
    block: 'end'
  })
}

const addTypingBubble = function () {
  chatControls.classList.add("pointer-events-none")
  setTimeout(function () {
    messagesList.appendChild(typingBubble);
    showLatestMessage();
  }, 500);
}

const removeTypingBubble = function () {
  chatControls.classList.remove("pointer-events-none")
  messagesList.removeChild(typingBubble)
  inputFields[state].focus()
}

const addConfirmBox = function () {
  messagesList.appendChild(confirmModal.cloneNode(true))
  showLatestMessage();
  formSubmit = document.querySelector("#formSubmit")
  confirmBox = document.querySelector("#confirmBox")
  formClear = document.querySelector("#formClear")

  formSubmit.addEventListener("click", (e) => {
    formSubmit.setAttribute('disabled', 'true')
    e.preventDefault()

    const formData = new FormData(form);
    fetch(form.getAttribute('action'), {
        method: 'POST',
        headers: {
          'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'enctype': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData).toString()
      })
      .then(res => {
        if (res) {
          formSubmit.blur()
          confirmBox.classList.add("opacity-50", "pointer-events-none")
          addTypingBubble()
          setTimeout(function () {
            removeTypingBubble()
            chatPush("you", `Awesome, thanks, ${userName}! I'll get back to you soon.`)
          }, 2500)
        }
      });
  });



}

function saveName() {
  inputFields.forEach(field => {
    if (field.name === "yourName") {
      let str = field.value
      let words = str.split(" ")
      userName = words[0]
      responses[0] = `Oh, hey, ${userName}! What's up?`
    }
  })
}

function updateState() {
  state = (state + 1) % 4
  currentState = states[state % 4]
  chatWindow.setAttribute("data-state", currentState)
  inputValueCheck()
}


contactLink.addEventListener("click", function () {
  addTypingBubble()
  setTimeout(function () {
    removeTypingBubble()
    chatPush("you", "Hello, Stephen here! 👋 Who are you?")
  }, 2500)
}, {
  once: true
})