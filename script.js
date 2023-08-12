
//let chave = "chave1"
//sessionStorage.setItem(chave, 'valor novo');

//let lerChave = localStorage.getItem(chave);
//console.log(lerChave)

//let array=[1,2,3,4,5]
//localStorage.setItem(array,JSON.stringify(array));

//objeto
//let dados ={nome:"Fiap", telefone:"11111"}
//localStorage.setItem('info', JSON.stringify(dados))

//criar as listas de dados:
let listadados=[]


//criando as bases (Construtor):
function Campos(campo1, campo2, campo3){
    this.campo1 = campo1
    this.campo2 = campo2
    this.campo3 = campo3
}

//disparar o botao com o Dom:

const btnEnviar = document.querySelector("#btnSumit");

//evento click:
btnEnviar.addEventListener('click', () =>{
    const inputCampo1 = document.querySelector("#campo1");
    const inputCampo2 = document.querySelector("#campo2");
    const inputCampo3 = document.querySelector("#campo3");

    
    //instanciando o construtor
    let info = new Campos(inputCampo1.value,inputCampo2.value,inputCampo3.value);

    //lista de usuarios recebendo o objeto
    listadados.push(info)
    //armazenando a lista de usuarios convertidos em JSON
    localStorage.setItem('dados',JSON.stringify(listadados))
})

