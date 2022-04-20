const btnMobile = document.getElementById('btn')

function toggleMenu(){ 
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)

function expandText() {
  var pontos = document.getElementById('seeMore')
  var maisTexto = document.getElementById('moreText')
  var textResume = document.getElementById('textResume')
  

  if(maisTexto.style.display === "none") {
    pontos.style.display = "none"
    maisTexto.style.display = "inline"
    textResume.style.textIndent = '1rem'
    
    textResume.style.transition = '.5s'
    
  } else {
    pontos.style.display = "inline"
    maisTexto.style.display = "none"
    textResume.style.textIndent = '0'
  }
  
  
}

function createTopic() { 
  var contentShare = document.getElementById('share')
  var form = document.getElementById('form')

  form.style.display = 'inline'
  contentShare.style.display = 'none'

}

function showComments() { 
  var moreComments = document.getElementById('moreComments')
  var like = document.getElementById('likes')
  var answers = document.getElementById('answers')

  if(moreComments.style.display === "none") {
    moreComments.style.display = 'inline'
    like.innerHTML = '4 likes'
    answers.innerHTML = '4 respostas'
  } else {
    moreComments.style.display = 'none'
    like.innerHTML = '1 like'
    answers.innerHTML = '1 resposta'
  }
}

function newComment() { 
  let form = document.getElementById('form')
  let sendTopic = document.getElementById('sendTopic') 

  form.style.display = 'none'
  sendTopic.style.display = 'inline'
}

function createNewTopic() { 
  let form = document.getElementById('form')
  let sendTopic = document.getElementById('sendTopic') 

  if(form.style.display === 'none') {
    form.style.display = 'inline'
    sendTopic.style.display = 'none'
  } else { 
    form.style.display = 'none'
    sendTopic.style.display = 'inline'
  }
}