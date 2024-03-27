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
        1: 'Japan',
        2: 'Azerbaijan',
        3: 'Australia',
        4: 'Canada',
    }]

function next() {
    if (count == 3) {
        document.querySelector('div').className = 'none';

        document.body.innerHTML += '<h1 id="congrats">Congratulations the questions are over!</h1>'
    }

    document.querySelector('h1').innerText = textArr[count];
    document.querySelectorAll('label').forEach(function (element) {
        element.innerText = `${answArr[count][count2]}`;
        count2++
    })
    count2 = 1;
    count++;
}