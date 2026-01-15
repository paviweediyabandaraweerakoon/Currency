function openTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

function convertUnits() {
    const val = parseFloat(document.getElementById('unitInput').value);
    const type = document.getElementById('unitType').value;
    let result = 0;

    if (isNaN(val)) { result = 0; }
    else if (type === 'length') result = val / 1000 + " km";
    else if (type === 'weight') result = val * 1000 + " g";
    else if (type === 'temp') result = (val * 9/5) + 32 + " °F";

    document.getElementById('unitResult').innerText = result;
}

async function convertCurrency() {
    const amount = document.getElementById('currInput').value;
    const currency = document.getElementById('currType').value;
    
    
    const rates = { "LKR": 300, "EUR": 0.92, "GBP": 0.79 };
    
    if (amount > 0) {
        let converted = amount * rates[currency];
        document.getElementById('currResult').innerText = converted.toFixed(2) + " " + currency;
    }
}