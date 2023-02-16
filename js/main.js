document.getElementById('calculateBtn').addEventListener('click', function () {
    const foodExpe = getValueFromInputFeild('foodExpensesInputFeild');
    const rentExp = getValueFromInputFeild('rentExpensesInputFeild');
    const clothesExp = getValueFromInputFeild('clothesExpensesInputFeild');
    const income = getValueFromInputFeild('incomeInputFeild')
    if (isNaN(income)) {
        alert('plaease Input Valid Number')
        return;

    }
    const totalExpenses = foodExpe + rentExp + clothesExp;
    const balance = income - totalExpenses;

    if (totalExpenses > income) {
        alert('Your Expenses is Gather Than Your Income')
        return;
    }
    else {
        setvalueInTextFeild('balanceTextFeild', balance)
        setvalueInTextFeild('totalExpensesTextFeild', totalExpenses)
        setvalueInTextFeild('IncomeTextFeild',income)


    }

    // 
    // console.log(typeof wantedParsentageAmount);
})
document.getElementById('saveFromIncome').addEventListener('click', function () {
    const wantedParsentageAmount = getValueFromInputFeild('parsentInputFeild')
    if (isNaN(wantedParsentageAmount)) {
        alert("input is string")
        return;
        
    }
    console.log(typeof wantedParsentageAmount);
    const income = getValueFromTextFeild('IncomeTextFeild');
    if (isNaN(income)) {
        alert("input is string")
        return;
        
    }
    const expences = getValueFromTextFeild('totalExpensesTextFeild')
    const balance = income - expences;
    const parsentValue = income * (wantedParsentageAmount / 100);
    const remainingBalance = balance - parsentValue;
    if (wantedParsentageAmount > 100) {
        alert('১০০% এর বেশি save করা সম্ভব না')
        return;
    }
    else if (parsentValue > balance) {
        alert('You Have Not Sufficent Balance To Saving')
        return;
    }
    else {
        setvalueInTextFeild('savingTextFeild', parsentValue)
        setvalueInTextFeild('RemainingTextFeild', remainingBalance);
    }

})
// foodExpensesInputFeild
// rentExpensesInputFeild
// clothesExpensesInputFeild

document.getElementById('clear').addEventListener('click', function () {
   location.reload()


})
