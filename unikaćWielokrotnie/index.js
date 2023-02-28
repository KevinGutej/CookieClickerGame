let biscuitsPerSec = 0;
let biscuitsPerClick = 1;

$( document ).ready(function() {
    let biscuitAmount = window.localStorage.getItem("biscuitAmount");
    if(biscuitAmount == NaN || biscuitAmount == undefined || biscuitAmount == null)
    {
        biscuitAmount = 0;
    }
    else {
        $('#biscuit-counter').text(biscuitAmount);
    }
    
});


$('#main-circle').click(function () {
    const biscuitAmount = parseInt( $('#biscuit-counter').text() ,10 ) + 1;
    $('#biscuit-counter').text(biscuitAmount);
    window.localStorage.setItem("biscuitAmount", biscuitAmount);
});

const purchase = function(itemId) {
    const item = $('#items li')[itemId];
    let itemPrice = item.find('.item-price').text() - 0;
    let itemCounter = item.find('.item-counter').text() - 0;
    let biscuitAmount = parseInt($('#biscuit-counter').text(), 10);
    biscuitAmount -= price;
    itemPrice++;
    itemCounter++;
    const itemType = item.dataset.itemType;
    if(itemType == 'biscuitsPerSec')
    {

    }
}




