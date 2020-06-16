

//-----------------  Function Add Product  ---------------------
$('#rowProduct').click(function (e) {
    addProduct()
});


function addProduct() {
    let addProduct = `
    <tr>
        <td><textarea></textarea></td>
        <td><input class="text-center" id="product" type="text"></td>
        <td><input class="text-center" id="quntity" type="text" value=""></td>
        <td><input class="text-center" id="unitPrice" type="text" value=""></td>
        <td><input class="text-center" id="tax" type="text" readonly value=""></td>
        <td><input class="text-center" id="price" name="price" readonly value="0"></td>
    </tr>
    `
    $('#tableBody').append(addProduct);
    calcutePrice()
}


$('#tableBody').on("change", function () {
    calcutePrice()
});

function calcutePrice() {
    let quntity = parseInt($('#quntity').val());
    let unitPrice = parseInt($('#unitPrice').val());
    let tax = parseInt($('#unitPrice').val() * 0.09);
    $('#tax').val(tax);
    let price = (quntity * unitPrice) + tax;
    $('#price').val(price);

    billGenerator()
}

function billGenerator() {
    let priceProduct = 0;
    $.each($("input[id=price]"), function (index, element) {
        priceProduct += parseInt($(this).val());
    });
    console.log(typeof(priceProduct));
    
    $("#totalPrice").val(priceProduct);
}