let nameTag = document.getElementById("nameTag");
let measureValue = document.getElementById("measureValue");

let orcamentos = new Array();

function freeQuote() {
    if(nameTag && measureValue){

        //take value of input 
        let value = nameTag.value;
        let measureValueValue = measureValue.value;
        
        // medium price of one blind
        const defaultPricePerMeter = 230;
        
        let estimatedBudget = (defaultPricePerMeter * measureValueValue);  
        if(localStorage.hasOwnProperty("orcamentos")){
            //catch the orcamento's values from localstorage 
            //string converted to object
            orcamentos = JSON.parse(localStorage.getItem("orcamentos"));

        }
        // add array item
        orcamentos.push({name: value, estimatedBudget})
        //save to localStorage
        localStorage.setItem('orcamentos', JSON.stringify(orcamentos));



        document.getElementById("historicalContainer").insertAdjacentHTML('afterbegin', 
            `
            <section class="pastBudgets">
                <p>Nome: ${value}</p>
                <p>Orçamento Estimado: R$ ${estimatedBudget.toFixed(2)}</p>
            </section>
            `);

    } else {
        console.error("Elemento com ID 'nameTag' e 'measureValue' não encontrado.");
    }
}