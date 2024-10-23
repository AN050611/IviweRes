document.getElementById('start').onclick = function() {
    const cellNumber = document.getElementById('cell').value;
    const takeaway = document.getElementById('ta').checked;
    const stayIn = document.getElementById('si').checked;
    const msg = document.getElementById('msg')

    if (!cellNumber || (!takeaway && !stayIn)) {
        msg.textContent=`Please fill in all details to able to place your order.`;
        return;
    }

    localStorage.setItem('cellNumber', cellNumber);
    localStorage.setItem('orderType', takeaway ? 'Takeaway' : 'Stay In');

    
    window.location.href = 'order.html';
};
