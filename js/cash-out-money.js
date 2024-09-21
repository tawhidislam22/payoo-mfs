// with out function cash out 
/* document.getElementById('cash-out-btn').
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
}) */
// with function cash out

document.getElementById('cash-out-btn').
addEventListener('click',function(event){
    event.preventDefault();
    const cashOutAmountNumber=getInputFieldValueById('cash-out-amount');
    const pinNumber=getInputFieldValueById('pin-num');
    if(isNaN(cashOutAmountNumber)){
        alert('please enter a number');
        return;
    }
    if(pinNumber===1234){
        let amountNumber=getTextFieldValueById('balance');
        if(cashOutAmountNumber>amountNumber){
            alert('You do not have enough money to cash out');
            return;
        }
        amountNumber-=cashOutAmountNumber;
        document.getElementById('balance').innerText=amountNumber;

        const div=document.createElement('div');
        div.classList.add('bg-red-600');
        div.classList.add('text-gray-400');
        div.innerHTML=`
        <h4 class="text-2xl font-semibold">Cash Out</h4>
        <p> ${cashOutAmountNumber}Tk. Withdraw New Balance:${amountNumber}</p>
        `;
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Please Enter Your Correct Pin Number');
    }
})