import refs from './refs.js';

refs.coastads.value = numeric(refs.coastads.value);


let incomeResult = 0;

refs.coastads.addEventListener('focus', (e) => {
    e.target.value = e.target.value.replace(/\s/g, '');
});


    refs.coastads.addEventListener('input', (e) => {
        refs.coastads.value = takeSpace(e.target.value);

        localStorage.setItem('coastads', e.target.value);

        if (refs.income.value !== '') {
            incomeResult = (+e.target.value / takeSpace(refs.income.value)) * 100;

            refs.incomeResult.textContent = `${incomeResult.toFixed(2)} %`;
        }

        else {
            return
        }

    })


refs.coastads.addEventListener('blur', (e) => {
    e.target.value = numeric(e.target.value);
})



refs.income.addEventListener('focus', (e) => {
    e.target.value = takeSpace(e.target.value);
});


refs.income.addEventListener('input', (e) => {
    refs.income.value = takeSpace(e.target.value);

    localStorage.setItem('income', e.target.value);

    let roasResult = 0;

    if (refs.coastads.value !== '') {
        incomeResult = (takeSpace(refs.coastads.value) / e.target.value) * 100;

        refs.incomeResult.textContent = `${incomeResult.toFixed(2)} %`;


        roasResult = +e.target.value / takeSpace(refs.coastads.value) * 100;

        refs.roasResult.textContent = `${Math.round(roasResult)} %`;

        let roastText = roasResult / 100;
        refs.roastText.textContent = `Каждая потраченная гривна приносит дохода: ${roastText.toFixed(2)} грн.`;

    }

    else {
        return
    }

})

refs.income.addEventListener('blur', (e) => {
    e.target.value = numeric(e.target.value);
})


refs.views.addEventListener('input', (e) => {
    e.target.value = takeSpace(e.target.value);

    localStorage.setItem('views', e.target.value);
    
    let viewResult = 0;
    
    if (refs.income.value) {
        viewResult = takeSpace(refs.coastads.value) / +e.target.value * 1000;
        refs.viewResult.textContent = `${viewResult.toFixed(2)} грн.`
    }
})


refs.clicks.addEventListener('input', (e) => {
    e.target.value = takeSpace(e.target.value);
    localStorage.setItem('clicks', e.target.value);
    
    let clickResult = 0;
    let clickCoast = 0;

    clickResult = +e.target.value / +refs.views.value * 100;
    clickCoast = takeSpace(refs.coastads.value) / +e.target.value;

    if (refs.views.value) {
        refs.ctrResult.textContent = `${clickResult.toFixed(2)} %`;
    }
    refs.clickCoast.textContent = `${clickCoast.toFixed(2)} грн.`;
})


refs.transaction.addEventListener('input', (e) => {
e.target.value = takeSpace(e.target.value);
localStorage.setItem('transaction', e.target.value);


let conversion = 0;
let coastTransaction = 0;

if (refs.clicks.value) {
    conversion = +e.target.value / +refs.clicks.value * 100;
    
    refs.conversionResult.textContent = `${conversion.toFixed(2)} %`
}

if (refs.coastads.value) {
    coastTransaction = takeSpace(refs.coastads.value) / +e.target.value;
    
    refs.coastTransaction.textContent = `${coastTransaction.toFixed(2)} грн.`
}


})


refs.sales.addEventListener('input', (e) => {
    e.target.value = takeSpace(e.target.value);
    localStorage.setItem('sales', e.target.value);

    

    let salesResult = 0;
    let coastSales = 0;
    let avarageCheck = 0;

    if (refs.transaction.value) {
        salesResult = +e.target.value / +refs.transaction.value * 100;

        refs.salesResult.textContent = `${salesResult.toFixed(2)} %`
    }

    if (refs.coastads.value) {
        coastSales = takeSpace(refs.coastads.value) / +e.target.value;

        refs.coastSales.textContent = `${coastSales.toFixed(2)} грн.`
    }

    if (refs.income.value) {
        avarageCheck = takeSpace(refs.income.value) / +e.target.value;

        refs.avarageCheck.textContent = `${avarageCheck.toFixed(2)} грн.`
    }
})


// if (localStorage.getItem('coastads')) {
//     refs.coastads.value = numeric(localStorage.getItem('coastads'));
// }

// if (localStorage.getItem('income')) {
//     refs.income.value = numeric(localStorage.getItem('income'));
// }

// if (localStorage.getItem('views')) {
//     refs.views.value = localStorage.getItem('views');
// }

// if (localStorage.getItem('clicks')) {
//     refs.clicks.value = localStorage.getItem('clicks');
// }

// if (localStorage.getItem('transaction')) {
//     refs.transaction.value = localStorage.getItem('transaction');
// }

// if (localStorage.getItem('sales')) {
//     refs.sales.value = localStorage.getItem('sales');
// }




function takeSpace(num) {
    return num.replace(/\s/g, '');
}

function numeric(data) {
    return data.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


 