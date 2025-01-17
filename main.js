const backgroundMusic = document.getElementById('background-music');
const playMusicButton = document.getElementById('play-music-button');
const pauseMusicButton = document.getElementById('pause-music-button');

function showPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.classList.add('hidden'));
    document.getElementById(`page-${pageNumber}`).classList.remove('hidden');
}

function makeChoice(choice) {
    switch(choice) {
        case 'one':
            showPage(1);
            break;
        case 'two':
            showPage(2);
            break;
        case 'three':
            showPage(3);
            break;
        case 'four':
            showPage(4);
            break;
        case 'five':
            showPage(5);
            break;
        case 'six':
            showPage(6);
            break;
        case 'seven':
            showPage(7);
            break;
        case 'eight':
            showPage(8);
            break;
        case 'nine':
            showPage(9);
            break;
        default:
            break;
    }
}

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        playMusicButton.style.display = 'none';
        pauseMusicButton.style.display = 'inline-block';
    } else {
        backgroundMusic.pause();
        playMusicButton.style.display = 'inline-block';
        pauseMusicButton.style.display = 'none';
    }
}

