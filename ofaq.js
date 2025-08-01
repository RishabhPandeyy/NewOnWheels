// Toggle FAQ Answer
function toggleAnswer(id) {
    const answer = document.getElementById(`answer${id}`);
    const question = document.querySelector(`#answer${id}`).previousElementSibling;
  
    answer.classList.toggle('active');
    question.classList.toggle('active');
  }