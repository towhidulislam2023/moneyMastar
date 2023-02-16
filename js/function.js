function getValueFromTextFeild(textFeildId) {
    const textFeildElement = document.getElementById(textFeildId);
    const textFeildElementValue = textFeildElement.innerText;
    const textFeildvalue = parseFloat(textFeildElementValue);
    return textFeildvalue;
}
function getValueFromInputFeild(inputFeildId) {
    const inputFeildElement = document.getElementById(inputFeildId);
    const inputFeildElementValue = inputFeildElement.value;
    inputFeildElement.value = '';
    const inputFeildvalue = parseInt(inputFeildElementValue);
    if (isNaN(inputFeildvalue)) {
        alert('hello bul keno des')
        return;
    }
    else if (inputFeildvalue < 0) {
        alert('Only Positive Number')
        return;
    }
    return inputFeildvalue;

}
function setvalueInTextFeild(textFeildId, value) {
    const textFeildElement = document.getElementById(textFeildId)
    textFeildElement.innerText = value;
}

// function calculateTotalExp(feild1, feild2, feild3) {
//     const foodExpe = getValueFromInputFeild(feild1);
//     const rentExp = getValueFromInputFeild(feild2);
//     const clothesExp = getValueFromInputFeild(feild3);
//     const totalExpenses = foodExpe + rentExp + clothesExp;
//     return totalExpenses;

// }
