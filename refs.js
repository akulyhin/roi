const refs = {
    coastads: document.getElementById('coastads'),
    income: document.getElementById('income'),
    views: document.getElementById('views'),
    clicks: document.getElementById('clicks'),
    transaction: document.getElementById('transaction'),
    sales: document.getElementById('sales'),
    calculatorInputs: document.querySelectorAll('.calculator input'),
    btnCalc: document.querySelector('.btn-calc'),
// Result
    incomeResult: document.querySelector('.income-result span'),
    viewResult: document.querySelector('.view-result'),
    ctrResult: document.querySelector('.ctr-result'),
    clickCoast: document.querySelector('.click-coast-result'),
    roasResult: document.querySelector('.roas-result'),
    roastText: document.querySelector('.roast-text'),
    conversionResult: document.querySelector('.conversion-result'),
    salesResult: document.querySelector('.sales-result'),
    coastTransaction: document.querySelector('.coast-transaction-result'),
    coastSales: document.querySelector('.coast-sales-result'),
    avarageCheck: document.querySelector('.avarage-check'),

    desiredAmount: document.getElementById('desiredAmount'),
    desiredRange: document.getElementById('desiredRange'),
    staticAmount: document.getElementById('static'),

    // icons
    bgConversion: document.getElementById('bg-conversion')
}

export default refs;