document.getElementById('cash-out-btn').
addEventListener('click',function(event){
    event.preventDefault();
    const cashOutAmount=document.getElementById('cash-out-amount').value;
    const cashOutAmountNumber=parseFloat(cashOutAmount);
    const pinNumber=document.getElementById('pin-num').value;
    if(pinNumber==='1234'){
        const amount=document.getElementById('balance').innerText;
        let amountNumber=parseFloat(amount);
        amountNumber-=cashOutAmountNumber;
        document.getElementById('balance').innerText=amountNumber;
    }
    else{
        alert('Please Enter Your Correct Number');
    }
})