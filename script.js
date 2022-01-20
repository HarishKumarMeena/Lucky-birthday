var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");
var output = document.querySelector("#output");

checkButton.addEventListener("click", function luckyOrNot() {

    var sum = 0;

    for (var i = 0; i < (dateOfBirth.value).length; i++) {
        if ((dateOfBirth.value).charAt(i) != '-')
            sum += parseInt((dateOfBirth.value).charAt(i));
    }

    var luckyOrNot = (sum % parseInt(luckyNumber.value));

    if (luckyOrNot === 0)
        output.innerHTML = luckyNumber.value + " is lucky 😉";

    else
        output.innerHTML = luckyNumber.value + " is not that lucky 😇";

})
