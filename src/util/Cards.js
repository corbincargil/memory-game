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

//import shuffle function
import shuffle from './shuffle';


//factory function to create a card for each character
const characterCard = (name, pic, tier, id) => {
    return { pic, name, tier, id};
};

const bill = characterCard(
    'Bill Oakley',
    billPic,
    '3',
    1
);

const bolsa = characterCard(
    'Juan Bolsa',
    bolsaPic,
    '2',
    2
);

const casper = characterCard(
    'Casper',
    casperPic,
    '3',
    3
)

const chuck = characterCard(
    'Chuck McGill',
    chuckPic,
    '1',
    4
);

const crazy8 = characterCard(
    'Krazy-8',
    crazy8Pic,
    '3',
    5
);

const ernesto = characterCard(
    'Ernesto',
    ernestoPic,
    '3',
    6
);

const francesca = characterCard(
    'Francesca Liddy',
    francescaPic,
    '2',
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
    '1',
    10
);

const hector = characterCard(
    'Hector Salamanca',
    hectorPic,
    '1',
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
    '2',
    15
);

const kai = characterCard(
    'Kai',
    kaiPic,
    '3',
    16
);

const kevin = characterCard(
    'Kevin Watchell',
    kevinPic,
    '2',
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
    '1',
    19
);

const lyle = characterCard(
    'Lyle',
    lylePic,
    '3',
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
    '1',
    22
);

const nguyen = characterCard(
    'Mrs. Nguyen',
    nguyenPic,
    '3',
    23
);

const paige = characterCard(
    'Paige Novick',
    paigePic,
    '2',
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
    '3',
    26
);

const suzanne = characterCard(
    'Suzanne Ericsen',
    suzannePic,
    '3',
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
    '2',
    29
);

const werner = characterCard(
    'Werner Ziegler',
    wernerPic,
    '2',
    30
);

//alphabetical array of cards
let cards = [bill, bolsa, casper, chuck, crazy8, ernesto, francesca, gomez, gus, hank, hector, howard, huell, jimmy, joey, kai, kevin, kim, lalo, lyle, mike, nacho, nguyen, paige, richard, stacey, suzanne, tyrus, victor, werner];

//shuffle order of cards
shuffle(cards);

export default cards;

//Tier 1 characters
// -Chuck
// -Gus
// -Hank
// -Hector
// -Howard
// -Jimmy
// -Kim
// -Lalo
// -Mike
// -Nacho

//Tier 2 characters
// -Bolsa
// -Francesca
// -Gomez
// -Huell
// -Kevin
// -Paige
// -Richard
// -Tyrus
// -Victor
// -Werner

//Tier 3 characters
// -Bill
// -Casper
// -Crazy8
// -Ernesto
// -Joey
// -Kai
// -Lyle
// -Nguyen
// -Stacey
// -Suzanne

