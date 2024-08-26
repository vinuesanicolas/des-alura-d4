// Generar un número aleatorio entre 0 y 10
let secretNumber = Math.floor(Math.random() * 11);
let attempts = 3;

console.log("¡Bienvenido al juego de adivinar el número!");

// Bucle del juego
while (attempts > 0) {
  let guess = prompt(`Tienes ${attempts} intentos. ¿Cuál es tu número?`);

  // Comprobar si el usuario adivinó el número
  if (parseInt(guess) === secretNumber) {
    console.log("¡Felicidades, has acertado!");
    break;
  } else {
    attempts--;
    console.log(`Lo siento, ese no es el número. Te quedan ${attempts} intentos.`);
  }
}

// Si se han agotado los intentos, mostrar el número secreto
if (attempts === 0) {
  console.log(`Lo siento, has agotado tus intentos. El número secreto era ${secretNumber}.`);
}