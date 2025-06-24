const feedbackOpen = document.querySelector('.header__chat');
const feedback = document.querySelector('.feedback');
const feedbackClose = feedback.querySelector('.feedback__btn-item');
const contactChat = document.querySelector('.contact__chat');

contactChat.addEventListener('click', function () {
   feedback.classList.add('shows');
});

feedbackOpen.addEventListener('click', function () {
   feedback.classList.add('shows');
});

feedbackClose.addEventListener('click', function () {
    feedback.classList.remove('shows');
});

document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      feedback.classList.remove('shows');  
    }
});

document.body.addEventListener('click', function (evt) {
  if (!feedback.contains(evt.target) && evt.target !== feedbackOpen && evt.target !== contactChat) {
    feedback.classList.remove('shows');
  } 
});

feedback.addEventListener('click', function (evt) {
    evt.stopPropagation();
});