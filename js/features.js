//without function feature

/*document.getElementById('add-money-show-from-btn').
addEventListener('click',function(){
    document.getElementById('cash-out-from').classList.add('hidden');
    document.getElementById('add-money-from').classList.remove('hidden');
})

document.getElementById('cash-out-show-from-btn').
addEventListener('click',function(){
    document.getElementById('cash-out-from').classList.remove('hidden');
    document.getElementById('add-money-from').classList.add('hidden');
})*/
//with function feature

document.getElementById('add-money-show-from-btn').
addEventListener('click',function(){
    showSectionById('add-money-from');
})

document.getElementById('cash-out-show-from-btn').
addEventListener('click',function(){
    showSectionById('cash-out-from');
})
document.getElementById('transaction-show-btn').
addEventListener('click',function(){
    showSectionById('transaction-container');
})