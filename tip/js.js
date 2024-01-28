

function calculateTip() {
    var billAmount = parseFloat(document.getElementById('bill_amount').value);
    var serviceRate = parseFloat(document.getElementById('service_rate').value);
    var chargeRate= parseFloat(document.getElementById('chargeRate').value);

    var tipAmount = billAmount * (serviceRate / 100);
    var totalAmount = billAmount + tipAmount;

    document.getElementById('bill').textContent = billAmount.toFixed(2);
    document.getElementById('chargeRate').innerHTML = serviceRate + "%";

    tip = tipAmount / serviceRate
    document.getElementById('tipp').innerHTML = tipAmount
}

