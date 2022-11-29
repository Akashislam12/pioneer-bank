
//It is a login handelar

const loginBtn = document.getElementById('Login')
const loginArea = document.getElementById('login-area')
const subminArea = document.getElementById('submit-area')
const tranJection = document.getElementById('tranjection-area')

loginBtn.addEventListener('click',()=>{
    loginArea.style.display = 'none'
    tranJection.style.display = 'block'
})

//It is deposit click handelar

const dipositBtn = document.getElementById('depositBtn')
const dipositNumber = document.getElementById('depositNumber')
const dipositCurrent = document.getElementById('dipositcurrent')
const balanceAmount = document.getElementById('balanceamount')

dipositBtn.addEventListener('click',()=>{
    const dipositNum = dipositNumber.value;
    const dipositNum2 = parseFloat(dipositNum)
    const dipositCurr = dipositCurrent.innerText;
    const dipositCurr2 = parseFloat(dipositCurr)
    const totalAmount =  dipositNum2 + dipositCurr2;
    dipositCurrent.innerText = totalAmount

    const balanceValue = balanceAmount.innerText
    const balanceFlot = parseFloat(balanceValue)
    const totalBalance = dipositNum2 + balanceFlot;
    balanceAmount.innerText = totalBalance


    dipositNumber.value = "";

})


//withdrow function here
const withdrowNumber = document.getElementById('withdrowNumber')
const withdrowBtn = document.getElementById('withdrowBtn')
const withdrowAmount = document.getElementById('withdrowamount')
const bala = document.getElementById('withdrowamount')

withdrowBtn.addEventListener('click',()=>{
    const withdrowValue = withdrowNumber.value
    const withdrowNumbers = parseFloat(withdrowValue)
    const withrowamounts = withdrowAmount.innerText
    const withdrowamountNumber = parseFloat(withrowamounts)
    const totalValue = withdrowNumbers + withdrowamountNumber
    withdrowAmount.innerText = totalValue

   
    const balanceValueText = balanceAmount.innerText
    const balanceFlotNumber = parseFloat(balanceValueText)
    const totalvalue = balanceFlotNumber -1 * withdrowNumbers
    balanceAmount.innerText = totalvalue
    
    

    withdrowNumber.value = ""
})