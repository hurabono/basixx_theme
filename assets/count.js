$('.qtycard .btnqty').on('click', function(){
  var qty = parseInt($(this).parent('.qtycard').find('.quantity-input').val());
  if($(this).hasClass('qtyplus')) {
    qty++;
  }else {
    if(qty > 1) {
      qty--;
    }
  }
  qty = (isNaN(qty))?1:qty;
  $(this).parent('.qtycard').find('.quantity-input').val(qty);
});