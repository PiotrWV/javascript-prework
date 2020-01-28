function playGame(playerInput) {

    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }


        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }



    function displayResult(argComputerMove, argPlayerMove) {

        console.log('moves:', argComputerMove, argPlayerMove);

        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);


        if (playerInput > 3) {
            printMessage('nieznany ruch');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrałeś')
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Ja wygrałem');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Mamy remis');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Ja wygrałem');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrałeś');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Mamy remis');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Ja wygrałem');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrałeś')
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Mamy remis');
        }
    }



    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);


    printMessage('Mój ruch to: ' + computerMove);

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(randomNumber);

    getMoveName();
    getdisplayResult();


}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame('rock')
}) {

    playGame();

}

document.getElementById('play-paper').addEventListener('click', function () {
    playGame('paper')
}) {

    playGame();

}

document.getElementById('play-scissors').addEventListener('click', function () {
    playGame('scissors')
}) {

    playGame();

}
