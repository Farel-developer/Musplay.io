const modal = document.querySelector('.modal')
const btnBox = document.querySelector('.btn-box')
const closeBtn = document.querySelector('.close-modal')
const showModal = document.querySelectorAll('.show-modal')
const overlay = document.querySelector('.overlay')

const openModal = function(e) {
  if (e.target = showModal) {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
  }
}
const closeModal = function() {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

btnBox.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal()
  }
})

//alert('view this in desktop 🖥️ mode !')



function submit() {
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let rePassword = document.getElementById("rePassword").value
  let p = document.getElementById("p")
  localStorage.setItem("Name", name)
  localStorage.setItem("E-mail : ", email)
  localStorage.setItem("Password : ", password)
  localStorage.setItem("Repassword : ", rePassword)
  console.log(localStorage)

  p.innerHTML = "<p>Hey</p>" + name + "!" + "<p> Your account is being created ! </p><br><p>To view your Password and info go to the console and check your local storage</p>"

}