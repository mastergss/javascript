/*Cálculo do IMC*/
var massa = 90
var altura = 1.85
console.log(`Você tem ${massa} Kg e sua altura é ${altura} m.`)

/* método mais conhecido
var indMasAlt = (massa / altura ** 2).toFixed(4) */
// Nick Trefethen 2013 - fórmula mais precisa
var indMasAlt = (1.3 * massa / altura ** 2.5).toFixed(4)
if (indMasAlt < 17) {
    console.log(`Seu índice de massa corporal IMC é ${indMasAlt}Kg/m². Você está muito abaixo do Peso.`)
} else if (indMasAlt < 18.49) {
    console.log(`Seu índice de massa corporal IMC é ${indMasAlt}Kg/m². Você está abaixo do Peso.`)
    
} else if (indMasAlt < 24.99) {
    console.log(`Seu índice de massa corporal IMC é ${indMasAlt}Kg/m². Você está com Peso normal.`)
    
} else if (indMasAlt < 29.99) {
    console.log(`Seu índice de massa corporal IMC é ${indMasAlt}Kg/m². Você está acima do Peso.`)
    
} else if (indMasAlt < 34.99) {
    console.log(`Seu índice de massa corporal IMC é ${indMasAlt}Kg/m². Você está com Obesidade I.`)
    
} else if (indMasAlt < 39.99) {
    console.log(`Seu índice de massa corporal IMC é ${indMasAlt}Kg/m². Você está com Obesidade II (severa).`)
    
} else {
    console.log(`Seu índice de massa corporal IMC é ${indMasAlt}Kg/m². Você está com Obesidade III (mórbida).`)
}
