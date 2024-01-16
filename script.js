function createDeck() {
  const suits = ['♠', '♣', '♥', '♦'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const deck = [];

  for (const suit of suits) {
    for (const value of values) {
      deck.push({ suit, value });
    }
  }

  return deck;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startRandomGame() {
  const deck = createDeck();
  const shuffledDeck = shuffleArray(deck);

  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = ''; // Clear the previous cards

  // Display three random cards on the game board
  for (let i = 0; i < 3; i++) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const symbolElement = document.createElement('div');
    symbolElement.classList.add('symbol');
    symbolElement.innerText = shuffledDeck[i].suit;
    cardElement.appendChild(symbolElement);

    const numberElement = document.createElement('div');
    numberElement.classList.add('number');
    numberElement.innerText = shuffledDeck[i].value;
    cardElement.appendChild(numberElement);

    const bottomNumberElement = document.createElement('div');
    bottomNumberElement.classList.add('number', 'bottom');
    bottomNumberElement.innerText = shuffledDeck[i].value;
    cardElement.appendChild(bottomNumberElement);

    gameBoard.appendChild(cardElement);
  }
}