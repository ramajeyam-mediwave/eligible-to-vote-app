const ageInputBox = document.querySelector('#users-age')
const calculateBtn = document.querySelector('#calculate-btn')
const resultDiv = document.querySelector('#eligibility-result')

function printToResult(text) {
    if (text) {
        resultDiv.innerHTML = '<h3>'+text+'</h3>'
    }

    // if (!text) {
    //     return;
    // }
    // resultDiv.innerHTML = '<h3>'+text+'</h3>'

}

// calling a function when the button gets clicked
calculateBtn.addEventListener('click', function() {
    let result = '';

    const userAge = ageInputBox.value;
    if (!userAge) {
        printToResult('Please enter an age')
        return;
    }
   

    if (userAge < 18) {
        console.log('age is ', userAge)
        console.log('You are not eligible to vote')
        // resultDiv.innerHTML = '<h3>You are not eligible to vote</h3>'
        result = 'You are not eligible to vote'
    } else {
        console.log('You are eligible to vote')
        // resultDiv.innerHTML = '<h3>You are eligible to vote</h3>'
        result = 'You are eligible to vote'
    }
    
    // concatenation
    printToResult(result)
})