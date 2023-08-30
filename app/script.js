const ageInputBox = document.querySelector('#users-age')
const calculateBtn = document.querySelector('#calculate-btn')
const resultDiv = document.querySelector('#eligibility-result')

// calling a function when the button gets clicked
calculateBtn.addEventListener('click', function() {
    let result = '';

    const userAge = ageInputBox.value;
    if (!userAge) {
        console.log('Please enter an age')
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
    resultDiv.innerHTML = '<h3>'+result+'</h3>'
})