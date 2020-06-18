// ------------- Create Row Table(Product) ---------------

$('#rowProduct').click(function () {
    addProduct()
});

let countRow = 0;

function addProduct() {
    countRow++;

    let addProduct = `
    <tr>
        <td><textarea></textarea></td>
        <td><input class="text-center" id="product${countRow}" class="product" type="text"></td>
        <td><input class="text-center" id="quntity${countRow}" type="text" value="0"></td>
        <td><input class="text-center" id="unitPrice${countRow}" type="text" value="0"></td>
        <td><input class="text-center" id="tax${countRow}" type="text" readonly value="0"></td>
        <td><input class="text-center" id="price${countRow}" name="price" readonly value="0"></td>
    </tr>
    `
    $('#tableBody').append(addProduct);
}

// -----------  Calcute Price Of Any Product ------------

$('#tableBody').on("change", function () {

    $('#tableBody tr').each(function () {

        $.each($(this), function (i, element) {

            let quntity = parseInt($(`input[id=quntity${countRow}]`).val());
            let unitPrice = parseInt($(`#unitPrice${countRow}`).val());
            let tax = quntity * unitPrice  * 0.09;
            $(`#tax${countRow}`).val(tax);
            let price = quntity * unitPrice + tax;
            $(`input[id=price${countRow}]`).val(price);
        });
    });

    billGenerator()
});


//------------- Calculate Total Prices ---------------

function billGenerator() {
    let priceProduct = 0;
    $.each($(`input[name=price]`), function (index, element) {
        priceProduct += parseInt($(this).val());
    });

    $("#totalPrice").val(priceProduct);
}