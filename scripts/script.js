$(document).ready(function(){
    var items = localStorage.getItem('order');
    if(items) {
        $('.nocontent').hide();
        var  obj = JSON.parse(items);
        $('#orderCount').text(obj.length);
        $.each(obj, function( index, value ) {
            $('#cartContent').append("<div class='row container'><div class='col-2'><img src='images/"+value.name+".png' class='img-fluid'></div><div class='col-10'><p>"+value.name+"</p><strong><p>P "+value.price+"</p></strong></div></div>");
            $('#myDiv').append("<div class='row container'><div class='col-2'><img src='images/"+value.name+".png' class='img-fluid'></div><div class='col-10'><p>"+value.name+"</p><strong><p>P "+value.price+"</p></strong></div></div>");
        });
    }


    $('.addtocart').click(function() {
        var items = localStorage.getItem('order');
        if(items) {
            var  items = JSON.parse(items);
            items.push({ "name": $(this).data('name'), "price":$(this).data('price'), "quantity":$('.'+$(this).data('name')).val()});
        } else {
            items = [{ "name": $(this).data('name'), "price":$(this).data('price'), "quantity":$('.'+$(this).data('name')).val()}];
        }
        localStorage.setItem('order', JSON.stringify(items));
        window.location.href = "file:///C:/Users/wargodz009/personals/rona/shoppingCart.html";
    });
});