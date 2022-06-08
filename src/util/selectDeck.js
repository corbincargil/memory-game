import{
    deckOne,
    deckTwo,
    deckThree,
    deckFour,
    deckFive
} from './cards';
import shuffle from './shuffle';

export default function selectDeck(round) {
    let selectedDeck;
    if (round == 5) {
        selectedDeck = deckFive;
    } else if (round == 2) {
        selectedDeck = deckTwo;
    } else if (round == 3) {
        selectedDeck = deckThree;
    } else if (round == 4) {
        selectedDeck = deckFour;
    } else {
        selectedDeck = deckOne;
    }
    shuffle(selectedDeck);
    return selectedDeck;
}
