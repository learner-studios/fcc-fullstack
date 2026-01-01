let questions = [
{
"category": "Godzilla Movies",
"question": "How tall is Godzilla in the 2008 movie?",
"choices": ["A. 2 feet", "B. 355 feet", "C. 500 feet"],
"answer": "C. 500 feet",
},
{
"category": "Studio Ghibli Films",
"question": "In 'My Neighbor Totoro', what is the name of the large, friendly forest spirit?",
"choices": ["A. Tora Tora Tora", "B. King Totoro", "C. Forest Guardian"],
"answer": "B. King Totoro",
},
{
"category": "Avatar: The Last Airbender - Cartoon Series",
"question": "What is the name of the main character in Avatar: The Last Airbender?",
"choices": ["A. Aang", "B. Katara", "C. Sokka"],
"answer": "A. Aang",
},
{
"category": "Apothecary Diaries",
"question": "What is the profession of the main character, Maomao, in 'Apothecary Diaries'?",
"choices": ["A. Apothecary", "B. Doctor", "C. Nurse"],
"answer": "A. Apothecary",
},
{
"category": "Demon Slayer",
"question": "What is the name of the main protagonist in 'Demon Slayer'?",
"choices": ["A. Zenitsu", "B. Tanjiro Kamado", "C. Inosuke Hashibira"],
"answer": "B. Tanjiro Kamado",
}
];

function getRandomQuestion(questions){
    let arrayChoice = Math.floor(Math.random() * questions.length);
    return questions[arrayChoice];
}

function getRandomComputerChoice(choices){
  let computerArrayChoice = Math.floor(Math.random() * choices.length);
  return choices[computerArrayChoice];
}

function getResults(questionObj, computerChoice){
    if(computerChoice === questionObj.answer){
      return "The computer's choice is correct!";
    }
    else {
      return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
    }
}

console.log(getRandomQuestion(questions));
console.log(getRandomComputerChoice(questions[0].choices));
console.log(getResults(getRandomQuestion(questions), getRandomComputerChoice(questions[0].choices)));