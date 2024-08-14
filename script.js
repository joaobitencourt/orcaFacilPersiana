//converção
let lengthMeters =  document.getElementById("lengthMeters");
let widthMeters = document.getElementById("widthMeters");

// orçamento
let nameTag = document.getElementById("nameTag");
let measureValue = document.getElementById("measureValue");

let orcamentos = new Array();

function freeQuote() {
    if(nameTag && measureValue){

        //take value of input 
        // Substitui a vírgula por um ponto para tratar decimais corretamente
        let value = nameTag.value;
        let measureValueValue = parseFloat(measureValue.value.replace(',', '.'));
        
        //validando se o campo só tem numeros
        if(isNaN(measureValueValue)){
            alert("Entrada inválida: o campo 'Tamahho em m²' só é permitido números ");
            return;
        }

        //validação do campo nome se está vazio
        if (value === null || value === undefined || value === '') {
            alert("Entrada inválida: O campo nome deve ser preenchido.");
            return;
        }

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

function convert(){
    if (lengthMeters && widthMeters) {
        
        //catch vlaues 
        // Substitui a vírgula por um ponto para tratar decimais corretamente
        let length = parseFloat(lengthMeters.value.replace(',', '.'));
        let width = parseFloat(widthMeters.value.replace(',', '.'));

       // Validar se os valores são números
        if (isNaN(length) || isNaN(width)) {
            alert("Entrada inválida: comprimento e largura devem ser números.");
            return;
        }

        //converting
        let convertMeters = ((length * width ));

        measureValue.value = convertMeters; 

        console.log(convertMeters);
    }
}

