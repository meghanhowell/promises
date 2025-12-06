
/*let jokesAPI = 'https://official-joke-api.appspot.com/random_joke';
let programming = 'https://official-joke-api.appspot.com/jokes/programming/random'

//1.1 random joke
async function jokes() {
    try {
        const response = await fetch(jokesAPI);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        console.log('Setup: ' + data.setup);
        console.log('Punchline: ' + data.punchline);
        console.log('---'); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

//jokes();

/*1.2 multiple jokes
for(let i = 0; i < 10; i++) {
fetch(jokesAPI)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error fetching data:', error)); 
}

// 1.3 jokes by type

//async function ProgrammingJokes() {
    for(let i = 0; i < 10; i++) {
        try {
            const response = await fetch(programming);
            const data = await response.json();
            console.log(`Joke ${i + 1}:`, data);
        } catch (error) {
            console.error ('Error fetching data:', error);
        }
}
}
ProgrammingJokes()

1.4 stretch goal 


async function randomJokes() {
const jokePromises = [
    fetch(jokesAPI), 
    fetch(jokesAPI), 
    fetch(jokesAPI),
    fetch(jokesAPI),
];
try{
    const responses = await Promise.all(jokePromises);
    console.log('Fetched Jokes:', responses);
    return responses;
} catch (error) {
    console.error('Error fetching jokes', error);
    throw error;
}

}
randomJokes()

//1.5. stretch goal helper 

async function getJokes() {
    console.log('Fetching 5 jokes...');
    for(let j = 0; j < 5; j++) {
      
        await jokes();
    }
}
getJokes() */

//2.1 new deck

let deckAPI = ' https://deckofcardsapi.com/api/deck/new/';
let drawCard = 'https://deckofcardsapi.com/api/deck/qwwwx5twd9i4/draw/?count=1'
let multipleCards = 'https://deckofcardsapi.com/api/x98a2lv8j9x5/draw/?count=5'
let shuffleDeck = 'https://deckofcardsapi.com/api/deck/qwwwx5twd9i4/shuffle/'

async function newDeck() {
    try {
        const response = await fetch(deckAPI)
        if (!response.ok) {
            throw new error('Error');
        }
        const data = await response.json();
        console.log('Deck ID:  ' + data.deck_id)
    } catch {
        console.error('Error fetching deck')
    }
}
newDeck()

//2.2 draw one card

/*async function drawOneCard() {
    
    const results = await fetch(drawCard) 
     if (!results.ok) {
     throw new error('Error');
        }
        const data = await results.json();
        const card = data.cards[0];


        console.log('Suit: ' + card.suit)
        console.log('Value: ' + card.value)
}
//drawOneCard()*/

//2.3 multiple cards

/*async function drawFiveCards() {
    for(let i = 0; i < 5; i++) {
    const cards = await fetch (multipleCards)
     if (!cards.ok) {
     throw new error('Error');
        }
        const data = await cards.json();
        const card = data.cards[0];
        console.log('Suit: ' + card.suit)
        console.log('Value: ' + card.value)
    } 
}
    drawFiveCards()*/

    //2.4 shuffle and redraw


/*async function performDeckOperations() { // Wrap main logic in an async function
  try {

    const shuffle = await fetch(shuffleDeck);
    if (!shuffle.ok) {
      throw new Error('Error during shuffle: ' + shuffle.statusText);
    }
    await shuffle.json();
    console.log('Deck shuffled successfully.');


    console.log('Attempting to draw cards...');
    const drawResponse = await fetch(multipleCards);
    if (!drawResponse.ok) {
      throw new Error(`Draw failed with status: ${drawResponse.status}`);
    }
    const data = await drawResponse.json();

    if (!data.success) {
      throw new Error(`API error: ${data.error}`);
    }

    console.log('Cards drawn successfully:');
    data.cards.forEach((card, index) => {
      console.log(`Card ${index + 1}: Value: ${card.value}, Suit: ${card.suit}`);
    });

  } catch (error) {

    console.error('An error occurred during the deck operation:', error.message);
  }
}
performDeckOperations();*/

//2.5 array of cards

async function dealCards() {
    const url = 'https://deckofcardsapi.com/api/deck/2wqh3t9wi39r/draw/?count=4';

    try {
        const response = await fetch(url);

        // CRITICAL STEP: Check if the response was successful (HTTP status 2xx)
        if (!response.ok) {
            // It's often better to check response.text() or response.json() 
            // even when it's not 'ok' to get specific error details from the API.
            const errorBody = await response.text(); 
            throw new Error(`HTTP error! status: ${response.status}. Body: ${errorBody}`);
        }

        // If the response was OK, proceed with parsing the JSON
        const data = await response.json(); 

        if (!data.success) {
            console.error('Failed to draw cards:', data.error);
            return;
        }
        
        // Success! You can now use the 'data' object (e.g., console.log(data.cards))
        console.log("Successfully drew cards:", data.cards); 

    } catch (error) {
        console.error('An error occurred during the card dealing process:', error.message);
    }
}

// Call the function to run the logic
dealCards();