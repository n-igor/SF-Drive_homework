// import '../style/style.scss';

// questions block
const questions = document.querySelectorAll('.questions__item'),
  questionText = document.querySelectorAll('.questions__text'),
  questionArrow = document.querySelectorAll('.questions__item img'),
  answer = document.querySelectorAll('.questions__answers');
questions.forEach((question, i) => {
  question.addEventListener('click', () => {
    answer[i].classList.toggle('questions__answers_hide');
    if (!answer[i].classList.contains('questions__answers_hide')) {
      questionText[i].classList.add('questions__answers-active');
      questionArrow[i].src = 'images/arrow-top.svg';
    } else {
      questionText[i].classList.remove('questions__answers-active');
      questionArrow[i].src = 'images/arrow-down.svg';
    }
  });
});
