let biscuitsPerSec = 0;
let biscuitsPerClick = 1;
let biscuitAmount;
const UNIVERSAL_PRICE_FACTOR = 1.1;

$( document ).ready(function() {
    biscuitAmount = window.localStorage.getItem("biscuitAmount");
    if(biscuitAmount == NaN || biscuitAmount == undefined || biscuitAmount == null)
    {
        biscuitAmount = 0;
    }
    $('#biscuit-counter').text(biscuitAmount);
    
});


$('#main-circle').click(function () {
    biscuitAmount++;
    $('#biscuit-counter').text(biscuitAmount);
    window.localStorage.setItem("biscuitAmount", biscuitAmount);
});

const purchase = function(itemId) {
    const item = $('#items li')[itemId];
    let itemPrice = item.find('.item-price').text() - 0;
    let itemCounter = item.find('.item-counter').text() - 0;
    const effectValue = item.find('.effect-value').text() - 0;
    biscuitAmount -= itemPrice;
    itemPrice *= UNIVERSAL_PRICE_FACTOR;
    itemCounter++;
    const itemType = item.dataset.itemType;
    if(itemType == 'biscuitsPerSec')
    {
        biscuitsPerSec += effectValue;
    }else if(itemType == 'biscuitsPerClick') {
        biscuitsPerClick += effectValue;
    }
}

$('.click-to-buy').click(function () {
    console.log($(this))
    console.log($(this).parent())
    console.log($(this).parent().dataset)
    console.log($(this).parent().attr('data-itemId'))
    console.log($(this).parent().attr('data-itemId').slice(-1) - 0)
    const parentId = $(this).parent().attr('data-itemId').slice(-1) - 0; 
    purchase(parentId)
;})




