let score = 0;
let points = 10;

let questions = document.body.childNodes;
let questionIterator = 3;

function correct(button){
    score+=points;
    button.style.backgroundColor = "green"
    let answers = button.parentNode;
    let siblings = answers.childNodes;
    siblings.forEach(answer => {
        answer.disabled = true;
    });

    questionIterator+=2;
    console.log(questions[questionIterator]);
    questions[questionIterator].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest"});
}
function incorrect(button){
    score-=points;
    button.style.backgroundColor = "red"
    let answers = button.parentNode;
    let siblings = answers.childNodes;
    siblings.forEach(answer => {
        answer.disabled = true;
    });
}

function submit(button){
    button.innerHTML = "Grade: " + score;
}