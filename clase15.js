var contador = 0
const LLueve = () => Math.random() < 0.25

do{
    contador ++
} while (!LLueve())

(contador === 1) ?
console.log(`Fui a ver si llovia ${contador} vez`) : console.log(`Fui a ver si llovia ${contador} veces`)
