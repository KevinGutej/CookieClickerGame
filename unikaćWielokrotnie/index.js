let biscuitsPerSec = 0;
let biscuitsPerClick = 1;



$('#main-circle').click(function () {
    $('#cookie-counter').text( parseInt( $('#cookie-counter').text() ,10 ) + 1 );
});

const purchase = function(itemId) {
    const item = $('#items li')[itemId];
    let itemPrice = item.find('.item-price').text() - 0;
    let itemCounter = item.find('.item-counter').text() - 0;
    let cookieAmount = parseInt($('#cookie-counter').text(), 10);
    cookieAmount -= price;
    itemPrice++;
    itemCounter++;
    const itemType = item.dataset.itemType;
    if(itemType == 'biscuitsPerSec')
    {

    }
}

