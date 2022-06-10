import{
    deckOne,
    deckTwo,
    deckThree,
    deckFour,
    deckFive,
    deckSix
} from './cards';
import shuffle from './shuffle';

export default function selectDeck(round) {
    let selectedDeck= [];
    if (round ==6) {
        selectedDeck = deckSix;
    } else if (round == 5) {
        selectedDeck = deckFive;
    } else if (round == 4) {
        selectedDeck = deckFour;
    } else if (round == 3) {
        selectedDeck = deckThree;
    } else if (round == 2) {
        selectedDeck = deckTwo;
    } else {
        selectedDeck = deckOne;
    }
    shuffle(selectedDeck);
    return selectedDeck;
}
