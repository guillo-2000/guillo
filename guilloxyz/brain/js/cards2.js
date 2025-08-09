const card = document.getElementById("none");
const cardname = document.getElementById("cardname");

const other = document.getElementById("other");
const othername = document.getElementById("othername");

const result = document.getElementById("result");
const refresh = document.getElementById("refresh");

let cards = [
    "a_",
    "two_",
    "tri_",
    "four_",
    "fiv_",
    "six_",
    "sevn_",
    "eig_",
    "nin_",
    "ten_",
    "j_",
    "q_",
    "k_",
];

let _cards = [
    "Ace of ",
    "Two of ",
    "Three of ",
    "Four of ",
    "Five of ",
    "Six of ",
    "Seven of ",
    "Eight of ",
    "Nine of ",
    "Ten of ",
    "Jack of ",
    "Queen of ",
    "King of ",
 
]

let suits = [
    "tr",
    "sp",
    "hr",
    "dm"
];

let _suits = [
    "Clubs",
    "Spades",
    "Hearts",
    "Diamonds"
];


function randomCard() {
    if (card.id == "none") {

        //User's card
        var randomCardIndex = Math.floor(Math.random() * cards.length);
        var randomSuitIndex = Math.floor(Math.random() * suits.length);

        card.id = cards[randomCardIndex] + suits[randomSuitIndex];
        cardname.innerHTML = _cards[randomCardIndex] + _suits[randomSuitIndex];

        //Opponent's card

        var _randomCardIndex = Math.floor(Math.random() * cards.length);
        var _randomSuitIndex = Math.floor(Math.random() * suits.length);

        //Just making sure they don't get the exact same card
        if ((cards[_randomCardIndex] + suits[_randomSuitIndex]) == card.id) {

            while ((cards[_randomCardIndex] + suits[_randomSuitIndex]) == card.id) {

                _randomCardIndex = Math.floor(Math.random() * cards.length);
                _randomSuitIndex = Math.floor(Math.random() * suits.length);

            };

        };

        other.id = cards[_randomCardIndex] + suits[_randomSuitIndex];
        othername.innerHTML = _cards[_randomCardIndex] + _suits[_randomSuitIndex];

        console.log(card.id);
        console.log(other.id);

        if (randomCardIndex < _randomCardIndex) {

            result.innerHTML = "You won! ";

        } else {

            if (randomCardIndex > _randomCardIndex) {

                result.innerHTML = "You lost... ";

            } else {

                result.innerHTML = "You tied! ";

            };

        };

        refresh.innerHTML = "Refresh this page to give it another go!"

    };
    
};
