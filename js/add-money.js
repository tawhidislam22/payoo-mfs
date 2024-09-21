document.getElementById('add-money-btn').
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

})