//without function add money section

/* document.getElementById('add-money-btn').
addEventListener('click',function(event){
    event.preventDefault();
    const addMoney=document.getElementById('add-amount').value;
    const addMoneyNumber=parseFloat(addMoney);
    const pinNumber=document.getElementById('pin-number').value;
    pinNum=parseFloat(pinNumber);
    if(pinNum===1234){
        const amount=document.getElementById('balance').innerText;
        let amountNumber=parseFloat(amount);
        amountNumber+=addMoneyNumber;
        document.getElementById('balance').innerText=amountNumber;
    }else{
        alert('Please enter your correct password');
    }

}) */

//with function add money
document.getElementById('add-money-btn').
addEventListener('click',function(event){
    event.preventDefault();
    const addBalance=getInputFieldValueById('add-amount');
    const pinNumber=getInputFieldValueById('pin-number');
    if(isNaN(addBalance)){
        alert('please enter a number');
        return;
    }
    if(pinNumber===1234){
        let amountNumber=getTextFieldValueById('balance');
        amountNumber+=addBalance;
        
        document.getElementById('balance').innerText=amountNumber;

        const p=document.createElement('p');
        p.innerText=`Cash Out:${addBalance} Tk. New Balance:${amountNumber}
        `;
        document.getElementById('transaction-container').appendChild(p);
    }else{
        alert('Please enter your correct password');
    }
})