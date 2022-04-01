const questions = [
  {
    question: "Which countries raced against each other to reach the Moon first?",
    optionA: "America and Britain",
    optionB: "Britain and Russia",
    optionC: "America and Russia",
    optionD: "Britain and Germany",
    correctOption: "optionC"
    },
    {
    question: "What species was the first to orbit the Earth?",
    optionA: "Monkey",
    optionB: "Dog",
    optionC: "Cat",
    optionD: "Rabbit",
    correctOption: "optionB"
    },
    {
    question: "What was the name of the first dog to orbit the Earth?",
    optionA: "Albert",
    optionB: "Stephen",
    optionC: "Isabelle",
    optionD: "Laika",
    correctOption: "optionD"
    },
    {
    question: "What was the name of the first man to go into Space?",
    optionA: "Yuri Gagarin",
    optionB: "Scott Kelly",
    optionC: "Viktor Patsayev",
    optionD: "Harrison Schmitt",
    correctOption: "optionA"
    },
    {
    question: "What year was the first man successfully sent into Space?",
    optionA: "1955",
    optionB: "1961",
    optionC: "1969",
    optionD: "1967",
    correctOption: "optionB"
    },
    {
    question: "Who was the first astronaut to walk on the Moon?",
    optionA: "Alan Shepard",
    optionB: "Aleksey Leonov",
    optionC: "Neil Armstrong",
    optionD: "John Glenn",
    correctOption: "optionC"
    },
    {
    question: "What was the name of the ship to land on the Moon?",
    optionA: "Apollo 11",
    optionB: "Vostok 1",
    optionC: "Mercury-Atlas 6",
    optionD: "Voshkod 2",
    correctOption: "optionA"
    },
    {
    question: "What was the name of the first probe sent into Space?",
    optionA: "Voyager 1",
    optionB: "Explorer 1",
    optionC: "Mariner9",
    optionD: "Sputnik 1",
    correctOption: "optionD"
    },
    {
    question: "What year was the first probe sent into Space?",
    optionA: "1955",
    optionB: "1957",
    optionC: "1961",
    optionD: "1977",
    correctOption: "optionB"
    },
    {
    question: "What is the name of the probe that has travelled in Space, further than any human-made object?",
    optionA: "Mercury-Atlas 6",
    optionB: "Sputnik",
    optionC: "Mariner 9",
    optionD: "Voyager 1",
    correctOption: "optionD"
    },
    {
    question: "What year was Voyager 1 sent into orbit?",
    optionA: "1970",
    optionB: "1969",
    optionC: "1977",
    optionD: "1975",
    correctOption: "optionC"
    },
    {
    question: "What was the name of the first space station?",
    optionA: "Mir",
    optionB: "Skylab",
    optionC: "International Space Station",
    optionD: "Salyut 1",
    correctOption: "optionD"
    },
    {
    question: "What was the first space station to be assembled in orbit?",
    optionA: "Mir",
    optionB: "Skylab",
    optionC: "International Space Station",
    optionD: "Tiangong 1",
    correctOption: "optionA"
    },
    {
    question: "What is the name of the most successfully ongoing space station?",
    optionA: "Salyut 7",
    optionB: "International Space Station",
    optionC: "Skylab",
    optionD: "Harmony",
    correctOption: "optionB"
    },
    {
    question: "What year did the International Space Station launch?",
    optionA: "1986",
    optionB: "1982",
    optionC: "1998",
    optionD: "1994",
    correctOption: "optionC"
    },
    {
    question: "What year did Mir space station and crash?",
    optionA: "1996-2000",
    optionB: "1977-1985",
    optionC: "1981-1995",
    optionD: "1986-1998",
    correctOption: "optionD"
    },
    {
    question: "What was the purpose of the Japanese Hayabusa spacecraft?",
    optionA: "To collect samples of an asteroid near Earth",
    optionB: "To change the trajectory of an asteroid",
    optionC: "For humans to walk on the asteroid",
    optionD: "To search for alien life",
    correctOption: "optionA"
    },
    {
    question: "When was the Hayabusa spacecraft launched?",
    optionA: "2002",
    optionB: "2003",
    optionC: "2005",
    optionD: "2008",
    correctOption: "optionB"
    },
    {
    question: "What is the name of the most popular rover on Mars",
    optionA: "Atlas",
    optionB: "Glados",
    optionC: "Curiosity",
    optionD: "George",
    correctOption: "optionC"
    },
    {
    question: "When was Curiosity deployed?",
    optionA: "2011",
    optionB: "2014",
    optionC: "2009",
    optionD: "2012",
    correctOption: "optionD"
    },
    
  
  ]
  
  
  let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions
  
  function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
  //app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
  }
  
  
  let questionNumber = 1 //holds the current question number
  let playerScore = 0  //holds the player score
  let wrongAttempt = 0 //amount of wrong answers picked by player
  let indexNumber = 0 //will be used in displaying next question
  
  // function for displaying next question in the array to dom
  //also handles displaying players and quiz information to dom
  function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
  
  }
  
  
  function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null
  
    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
  
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }
  
    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
  
        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
  }
  
  
  
  //called when the next button is called
  function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
  //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
  }
  
  //sets options background back to null after display the right/wrong colors
  function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
  }
  
  // unchecking all radio buttons for next question(can be done with map or foreach loop also)
  function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
  }
  
  // function for when all questions being answered
  function handleEndGame() {
    let remark = null
    let remarkColor = null
  
    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100
  
    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
  
  }
  
  //closes score modal, resets game and reshuffles questions
  function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
  }
  
  //function to close warning modal
  function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
  }