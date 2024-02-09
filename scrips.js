const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyValueToConvert = document.querySelector(".currency-value-to-convert") /*valor a ser convertido */
const currencyConvert = document.querySelector(".currency-converter") //primeiro input

// converter de real para...
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConverted = document.querySelector(".currency-value") /*valor convertido */
    

    let dolarToday = 4.98
    let euroToday = 5.36
    let libraToday = 6.28
    let bitcoinToday = 208.862
    let realToday = 1

    //convertendo de dolar para outras moedas
    
    if (currencyConvert.value=="dolar" && currencySelect.value=="euro"){
        euroToday=1.08
    }
    if (currencyConvert.value=="dolar" && currencySelect.value=="real"){
        realToday=0.20
    }
    if (currencyConvert.value=="dolar" && currencySelect.value=="dolar"){
        dolarToday=1
    }
    if (currencyConvert.value=="dolar" && currencySelect.value=="libra"){
        libraToday=1.26
    }
    if (currencyConvert.value=="dolar" && currencySelect.value=="bitcoin"){
        bitcoinToday=45.568
    }

    //convertendo de euro para outras moedas

    if (currencyConvert.value=="euro" && currencySelect.value=="dolar"){
        dolarToday= 0.93
    }
    if (currencyConvert.value=="euro" && currencySelect.value=="euro"){
        euroToday= 1
    }
    if (currencyConvert.value=="euro" && currencySelect.value=="libra"){
        libraToday= 1.19
    }
    if (currencyConvert.value=="euro" && currencySelect.value=="real"){
        realToday= 0.19
    }
    if (currencyConvert.value=="euro" && currencySelect.value=="bitcoin"){
        bitcoinToday= 42.229,63 
    }

    //convertendo de libra para outras moedas
    if (currencyConvert.value=="libra" && currencySelect.value=="dolar"){
        dolarToday= 0.93
    }
    if (currencyConvert.value=="libra" && currencySelect.value=="euro"){
        euroToday= 1
    }
    if (currencyConvert.value=="libra" && currencySelect.value=="libra"){
        libraToday= 1
    }
    if (currencyConvert.value=="libra" && currencySelect.value=="real"){
        realToday= 0.19
    }
    if (currencyConvert.value=="libra" && currencySelect.value=="bitcoin"){
        bitcoinToday= 42.229,63 
    }


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8 
        }).format(inputCurrencyValue / bitcoinToday)
    }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    if (currencySelect.value == "real") {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / realToday)
        }
}



// formatando dolar
function dolarFor() {
    const currencyConvert = document.querySelector(".currency-converter") //primeiro input
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    if (currencyConvert.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

}
// formatando euro
function euroFor() {
    const currencyConvert = document.querySelector(".currency-converter") //primeiro input
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    if (currencyConvert.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
}
// formatando libra
function libraFor() {
    const currencyConvert = document.querySelector(".currency-converter") //primeiro input
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    if (currencyConvert.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
}









function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "assets/dolar.png"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "assets/euro.png"
    }

    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "assets/libra.png"
    }

    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "assets/bitcoin.png"
    }
    if (currencySelect.value == "real"){
        currencyName.innerHTML = "Real brasileiro"
        currencyImage.src = "assets/real.png"
    }

    convertValues()


}

function changeCurrencyToConvert(){
    const currencyNamer = document.getElementById("currency")
    const currencyImager = document.querySelector(".currency-img-to-convert")
    const currencyConvert = document.querySelector(".currency-converter") //primeiro input

    if (currencyConvert.value == "real"){
        currencyNamer.innerHTML = "Real brasileiro"
        currencyImager.src = "assets/real.png"

    }

    if (currencyConvert.value == "dolar"){
        currencyNamer.innerHTML = "Dólar americano"
        currencyImager.src = "assets/dolar.png"
        dolarFor()
    }

    if (currencyConvert.value == "euro"){
        currencyNamer.innerHTML = "Euro"
        currencyImager.src = "assets/euro.png"
        euroFor()
    }

    if (currencyConvert.value == "libra"){
        currencyNamer.innerHTML = "Libra"
        currencyImager.src = "assets/libra.png"
        libraFor()
    }

    if (currencyConvert.value == "bitcoin"){
        currencyNamer.innerHTML = "Bitcoin"
        currencyImager.src = "assets/bitcoin.png"
        bitcoinFor()
    }

}

currencySelect.addEventListener("change", changeCurrency)
currencyConvert.addEventListener("change", changeCurrencyToConvert)
convertButton.addEventListener("click", convertValues)
