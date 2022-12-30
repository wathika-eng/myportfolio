const scriptURL = 'https://script.google.com/macros/s/AKfycbyfubl_KbNS7CaGD9j3rULSt_gOjyLj89YhG0leM5oI7wDFs-lt7yro1cevYv6-hBTy/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { msg.innerHTML = "Message sent successfully!"
    setTimeout(function() {
        msg.innerHTML = ""
    },6000) 
    form.reset()
})
      .catch(error => console.error('Error!', error.message))
  })