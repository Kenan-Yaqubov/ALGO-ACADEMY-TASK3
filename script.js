let textArr = ['What is the capital of America?', 'What is the name of conitinent where Brazil is?', 'What is the name of native country of kengourus?'];
let count = 0;
let count2 = 1;
let answArr = [
    {
        1: 'New york',
        2: 'Michigan',
        3: 'Chicago',
        4: 'Washington',
    },

    {
        1: 'Australia',
        2: 'Europe',
        3: 'South America',
        4: 'Africa',
    },

    {
        1: 'Australia',
        2: 'Azerbaijan',
        3: 'Japan',
        4: 'Canada',
    }]

let answerVariants = []
let correcrAnswers = ['b', 'd', 'c', 'a']
function answerCheck(x) {
    radio = x;
    answerVariants.push(x.dataset.variant)
}

function next(x) {
    if (count == 3) {
        for(let i = 0; i < answerVariants.length; i++){
            if(answerVariants[i] != correcrAnswers[i]){
                answerVariants.shift()
            }
        }
        document.querySelector('div').className = 'none';
        x.innerText = 'Submit';
        document.body.innerHTML += `<h1 id="congrats">Congratulations the questions are over!</h1><h1>${answerVariants.length} / ${correcrAnswers.length}</h1>`;
    }
    
    document.querySelector('h1').innerText = textArr[count];
    document.querySelectorAll('label').forEach(function (element) {
        element.innerText = `${answArr[count][count2]}`;
        count2++
        radio.checked = false;
    })
    count2 = 1;
    count++;
}