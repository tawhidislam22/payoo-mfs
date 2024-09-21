function getInputFieldValueById(id){
    const idValue=document.getElementById(id).value;
    const idValueNumber=parseFloat(idValue);
    return idValueNumber;
}

function getTextFieldValueById(id){
    const idValue=document.getElementById(id).innerText;
    const idValueNumber=parseFloat(idValue);
    return idValueNumber;
}

function showSectionById(id){
    document.getElementById('add-money-from').classList.add('hidden')
    document.getElementById('cash-out-from').classList.add('hidden')
    document.getElementById('transaction-container').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden');
}