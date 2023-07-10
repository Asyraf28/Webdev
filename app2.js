function calculateCost(){
    var menuItem = document.getElementsByName('menu');
    var totalCost = 0;

    for(var i=0; i<menuItem.length; i++){
        if(menuItem[i].checked){
            totalCost += parseInt(menuItem[i].value);
            menuItem[i].parentNode.style.backgroundColor = 'green';
            menuItem[i].parentNode.style.color = 'white';
        } else {
            menuItem[i].parentNode.style.backgroundColor = 'white';
            menuItem[i].parentNode.style.color = 'initial';
        }
    }

    document.getElementById('totalCost').innerHTML = '<span class="left">Total:</span><span class="right">Rp'
    +totalCost.toLocaleString()+'</span>'
}