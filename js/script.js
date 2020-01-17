let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
    playerMove = 'kamień';
} else if {
    playerMove = 'papier';
} else if {
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

if (playerInput > 3) {
    printMessage('nieznany ruch');
} else if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrałeś')
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Ja wygrałem');
} else if (computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('Mamy remis');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Ja wygrałem');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrałeś');
} else if (computerMove == 'papier' && playerMove == 'papier') {
    printMessage('Mamy remis');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Ja wygrałem');
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrałeś')
} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
    printMessage('Mamy remis');
}
