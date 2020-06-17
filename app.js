// ------------- Create Row Table(Product) ---------------

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
}


// -----------  Calcute Price Of Any Product ------------

$('#tableBody').on("change", function () {
    $('table tr').each(function() {
        let quntity = parseInt($(this).find("td").eq(2).val());    
        let unitPrice = parseInt($(this).find("td").eq(3).val());    
        let tax = unitPrice * 0.09; 
        let price = (quntity * unitPrice) + tax;
        
        $('#price').val(price);
    });

    billGenerator()
});


//------------- Calculate Total Prices ---------------

function billGenerator() {
    let priceProduct = 0;
    $.each($("input[id=price]"), function (index, element) {
        priceProduct += parseInt($(this).val());
    });
    console.log(typeof (priceProduct));

    $("#totalPrice").val(priceProduct);
}