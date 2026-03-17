//crie um programa com uma condicional composta para avaliar o deempenho escolar entre "excelemte", "otimo", "bom", "regular" ou "ruim". dependendo da nota

let nota = 70 

if ( nota >= 90) {
    console.log (`Excelente`) 
} else if ( nota < 90 && nota >=75) {
    console.log (`Otimo`) 
} else if ( nota < 75 && nota >=65){
    console.log (`bom`) 
}
 else if ( nota < 65 && nota >=50) {
        console.log (`regular`)
  } else{
    console.log (`ruim`)
  }