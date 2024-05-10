//ler arquivo externo usando node
//vamos usar a lib fs (file system)

const fs=require('fs');

//fs.readFile('./dados.csv', (erro,data)=>{
//    if(erro){
//        console.log(erro);
//    }else{
//        console.log(data.toString());
// }
//})
//console.log("Segunda operação")
//usando método síncrono

//let dados =fs.readFileSync('../aula 02/dados.csv');
// console.log(dados.toString());
// console.log('Segunda operação');

//SIMULANDO CAMINHO ERRADO
let dados = "";
if(fs.existsSync('../aula 02/dadoss.csv')){
    dados =fs.readFileSync('../aula 02/dados.csv');
    console.log(dados.toString());
}else{
    console.log("Arquivo não encontrado");
}
console.log("fim");
