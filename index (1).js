console.log("RULES--> S= snake, W= water, G= gun\n\n")
const alphabet = "SWG"
// let b = alphabet[Math.floor(Math.random() * alphabet.length)]
let comp = 0
let player = 0
while (comp < 5 && player < 5) {
  let b = alphabet[Math.floor(Math.random() * alphabet.length)]
  let a = prompt("ENTER YOUR CHOICE: ")
  console.log(b)
  if(a != 'S' && a != 'W' && a!= 'G'){
    console.log("Choose the Correct Choice!!")
  }
  else if (b == a) {
    console.log("TIE")
  }
  else if ((b == 'W' && a == 'S') || (b == 'S' && a == 'G') || (b == 'G' && a == 'W') ) {
    console.log("WINNER")
    player++
  } else {
    console.log("LOOSER")
    comp++
  }
}
if(comp==5){
  console.log("YOU LOOSE, BETTER LUCK NEXT TINE :(")
}
else{
  console.log("YEAH, YOU WON !!!");
}
console.log("COMP = ",comp + " PLAYER = ",player);

