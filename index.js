window.onload = () =>{
  
let deck = new Deck();

deck.shuffle();

var card1 = document.getElementById("img1");
var card2 = document.getElementById("img2");

console.log(card1);
console.log(card2);


card1.src = deck.cards[0].frontImage;
card2.src = deck.cards[1].frontImage;  
}
