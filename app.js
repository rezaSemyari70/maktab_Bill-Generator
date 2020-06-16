$('input').on("change", function () {
    calcutePrice()
});

function calcutePrice() {
    let quntity = parseInt($('#quntity').val());
    let unitPrice = parseInt($('#unitPrice').val());
    let tax = parseInt($('#unitPrice').val() * 0.09);
    $('#tax').val(tax);
    let price = (quntity * unitPrice) + tax;
    $('#price').val(price)
}