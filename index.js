const questions = [
    {
        'question': 'Which of the following keywords is used to define a variable in Javascript: ',
        'a': 'var',
        'b': 'let',
        'c': 'Both a and b',
        'd': 'None of above',
        'correct': 'c'
    },
    {
        'question': 'Programs stored in ROM are called :',
        'a': 'Hard disk',
        'b': 'Primary',
        'c': 'Secondary',
        'd': 'All of the above',
        'correct': 'c'
    },
    {
        'question': 'Which one of these stores more data than a DVD ?',
        'a': 'CD Rom',
        'b': 'Blue Ray Disk',
        'c': 'Floppy',
        'd': 'Red Ray Disk',
        'correct': 'b'
    },
    {
        'question': 'Computer Monitor is also known as: ',
        'a': 'DVU',
        'b': 'UVD',
        'c': 'VDU',
        'd': 'CCTV',
        'correct': 'c'
    },
    {
        'question': 'Eight Bits make up a:',
        'a': 'byte',
        'b': 'megabyte',
        'c': 'killobyte',
        'd': 'None',
        'correct': 'a'
    },
    {
        'question': 'Computer Program is also known as:',
        'a': 'Signal',
        'b': 'Software',
        'c': 'Procedure',
        'd': 'Debugger',
        'correct': 'b'
    },
    {
        'question': 'The output of compiler is called: ',
        'a': 'The program',
        'b': 'Source Code',
        'c': 'Linked Code',
        'd': 'Object Code',
        'correct': 'd'
    },
    {
        'question': 'Variales are created in: ',
        'a': 'RAM',
        'b': 'ROM',
        'c': 'Hard Disk',
        'd': 'Cache',
        'correct': 'a'
    },
    {
        'question': 'Java is the Product of: ',
        'a': 'Microsoft',
        'b': 'IBM',
        'c': 'Sun System',
        'd': 'Hewlett',
        'correct': 'c'
    },
    {
        'question': 'a+=b is equivalent to: ',
        'a': 'a.b+=a',
        'b': 'b.a=+b',
        'c': 'a=a+b',
        'd': 'b=b+a;',
        'correct': 'c'
    },
    {
        'question': 'In if Statement, false is represented by: ',
        'a': '0',
        'b': '1',
        'c': '2',
        'd': '3',
        'correct': 'a'
    },
    {
        'question': 'A loop within a loop is called: ',
        'a': 'Nested Loop',
        'b': 'Complex Loop',
        'c': 'Infinit Loop',
        'd': 'None',
        'correct': 'a'
    },
    {
        'question': 'This means to increase the value of: ',
        'a': 'Modulus',
        'b': 'Increment',
        'c': 'Decrement',
        'd': 'None',
        'correct': 'b'
    },
    {
        'question': 'A built-in function: ',
        'a': 'Cannot be redefined',
        'b': 'Can be redefined',
        'c': 'Cannot return a value',
        'd': 'Should be redefined',
        'correct': 'a'
    },
    {
        'question': 'The Scope of Variables is refers to ',
        'a': 'Length of variable',
        'b': 'Name of variable',
        'c': 'Accessibility of variable',
        'd': 'Data type of variable',
        'correct': 'c'
    },
]

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionBox = document.querySelectorAll(".options")
const loadquestions = () => {
    if (index === total) {

        return endQuiz();

    }
    reset();
    const data = questions[index];
    quesBox.innerHTML = `${index + 1}. ${data.question}`
    optionBox[0].nextElementSibling.innerHTML = data.a;
    optionBox[1].nextElementSibling.innerHTML = data.b;
    optionBox[2].nextElementSibling.innerHTML = data.c;
    optionBox[3].nextElementSibling.innerHTML = data.d;
}


const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;

    }
    else {
        wrong++;
    }

    index++;
    loadquestions()
}
const getAnswer = () => {
    let answer;

    optionBox.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
            

        }
    )

    return answer;

}

const reset = () => {
    optionBox.forEach(
        (input) => {
            input.checked = false;
        }

    )

}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align: center">
    <h3>The End</h3>  
    <h2>${right} / ${total} are Correct </h2>
    </div>
    `
}
let timeLeft = 600;
let timer = setInterval(function () {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft - minutes * 60;
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById('timer').innerHTML = displayMinutes + ":" + displaySeconds;
    timeLeft--;
    if (timeLeft < 0) {
        clearInterval(timer);
        alert("Time's up!");
    }
    if (index === questions.length) {
        clearInterval(timer);
    }
}, 1000);




loadquestions()