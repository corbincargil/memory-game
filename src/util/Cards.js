import billPic from '../characters/bill.webp';
import bolsaPic from '../characters/bolsa.webp';
import casperPic from '../characters/casper.webp';
import chuckPic from '../characters/chuck.webp';
import crazy8Pic from '../characters/crazy8.webp';
import ernestoPic from '../characters/ernesto.webp';
import francescaPic from '../characters/francesca.webp';
import gomezPic from '../characters/gomez.webp';
import gusPic from '../characters/gus.webp';
import hankPic from '../characters/hank.webp';
import hectorPic from '../characters/hector.webp';
import howardPic from '../characters/howard.webp';
import huellPic from '../characters/huell.webp';
import jimmyPic from '../characters/jimmy.webp';
import joeyPic from '../characters/joey.webp';
import kaiPic from '../characters/kai.webp';
import kevinPic from '../characters/kevin.webp';
import kimPic from '../characters/kim.webp';
import laloPic from '../characters/lalo.webp';
import lylePic from '../characters/lyle.webp';
import mikePic from '../characters/mike.webp';
import nachoPic from '../characters/nacho.webp';
import nguyenPic from '../characters/nguyen.webp';
import paigePic from '../characters/paige.webp';
import richardPIc from '../characters/richard.webp';
import staceyPic from '../characters/stacey.webp';
import suzannePic from '../characters/suzanne.webp';
import tyrusPic from '../characters/tyrus.webp';
import victorPic from '../characters/victor.webp';
import wernerPic from '../characters/werner.webp';
import CardGrid from '../components/CardGrid';

//import shuffle function
import shuffle from './shuffle';


//factory function to create a card for each character
const characterCard = (name, pic, tier, id, counter=0) => {
    return { pic, name, tier, id, counter};
};

const bill = characterCard(
    'Bill Oakley',
    billPic,
    '4',
    1
);

const bolsa = characterCard(
    'Juan Bolsa',
    bolsaPic,
    '3',
    2
);

const casper = characterCard(
    'Casper',
    casperPic,
    '4',
    3
)

const chuck = characterCard(
    'Chuck McGill',
    chuckPic,
    '1.5',
    4
);

const crazy8 = characterCard(
    'Krazy-8',
    crazy8Pic,
    '4',
    5
);

const ernesto = characterCard(
    'Ernesto',
    ernestoPic,
    '4',
    6
);

const francesca = characterCard(
    'Francesca Liddy',
    francescaPic,
    '3',
    7
);

const gomez = characterCard(
    'Steve "Gomie" Gomez',
    gomezPic,
    '2',
    8
);

const gus = characterCard(
    'Gus Fring',
    gusPic,
    '1',
    9
);

const hank = characterCard(
    'Hank Schrader',
    hankPic,
    '1.5',
    10
);

const hector = characterCard(
    'Hector Salamanca',
    hectorPic,
    '1.5',
    11
);

const howard = characterCard(
    'Howard Hamlin',
    howardPic,
    '1',
    12
);

const huell = characterCard(
    'Huell Babineaux',
    huellPic,
    '2',
    13
);

const jimmy = characterCard(
    'Jimmy McGill',
    jimmyPic,
    '1',
    14
);

const joey = characterCard(
    'Joey Dixon',
    joeyPic,
    '4',
    15
);

const kai = characterCard(
    'Kai',
    kaiPic,
    '5',
    16
);

const kevin = characterCard(
    'Kevin Watchell',
    kevinPic,
    '3',
    17
);

const kim = characterCard(
    'Kim Wexler',
    kimPic,
    1,
    18
);

const lalo = characterCard(
    'Lalo Salamanca',
    laloPic,
    '1.5',
    19
);

const lyle = characterCard(
    'Lyle',
    lylePic,
    '5',
    20
);

const mike = characterCard(
    'Mike Ehrmantraut',
    mikePic,
    '1',
    21
);

const nacho = characterCard(
    'Ignacio "Nacho" Varga',
    nachoPic,
    '1.5',
    22
);

const nguyen = characterCard(
    'Mrs. Nguyen',
    nguyenPic,
    '5',
    23
);

const paige = characterCard(
    'Paige Novick',
    paigePic,
    '3',
    24
);

const richard = characterCard(
    'Richard Schweikart',
    richardPIc,
    '2',
    25
);

const stacey = characterCard(
    'Stacey Ehrmantraut',
    staceyPic,
    '5',
    26
);

const suzanne = characterCard(
    'Suzanne Ericsen',
    suzannePic,
    '5',
    27
);

const tyrus = characterCard(
    'Tyrus Kitt',
    tyrusPic,
    '2',
    28
);

const victor = characterCard(
    'Victor',
    victorPic,
    '3',
    29
);

const werner = characterCard(
    'Werner Ziegler',
    wernerPic,
    '2',
    30
);

//alphabetical array of cards
let fullDeck = [bill, bolsa, casper, chuck, crazy8, ernesto, francesca, gomez, gus, hank, hector, howard, huell, jimmy, joey, kai, kevin, kim, lalo, lyle, mike, nacho, nguyen, paige, richard, stacey, suzanne, tyrus, victor, werner];

//filter cards based on round
const deck1 = fullDeck.filter(card => card.tier == 1);
const deck2 = fullDeck.filter(card => card.tier == 1.5);
const deck3 = fullDeck.filter(card => card.tier == 2);
const deck4 = fullDeck.filter(card => card.tier == 3);
const deck5 = fullDeck.filter(card => card.tier == 4);
const deck6 = fullDeck.filter(card => card.tier == 5);

//shuffle order of cards

export const deckOne = deck1;
export  const deckTwo = deck2;
export  const deckThree = deck3;
export  const deckFour = deck4;
export const deckFive = deck5;
export const deckSix = deck6;


//Tier 1 characters
// -Gus
// -Howard
// -Jimmy
// -Kim
// -Mike


//Tier 1.5 characters
// -Hank
// -Hector
// -Nacho
// -Lalo
// -Chuck

//Tier 2 characters
// -Gomez
// -Huell
// -Richard
// -Tyrus
// -Werner

//Tier 3 characters
// -Kevin
// -Francesca
// -Paige
// -Victor
// -Bolsa

//Tier 4 characters
// -Bill
// -Casper
// -Crazy8
// -Ernesto
// -Joey

//Tier 5 characters
// -Kai
// -Lyle
// -Nguyen
// -Stacey
// -Suzanne

