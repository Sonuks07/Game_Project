score = 0;
cross = true;

audio=new Audio('game.mp3');
audiogo=new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("key code is:", e.keyCode)
    if (e.keyCode == 38) {
        sonu = document.querySelector('.sonu');
        sonu.classList.add('animateSonu');
        setTimeout(() => {
            sonu.classList.remove('animateSonu')
        }, 700);
    }
    if (e.keyCode == 39) {
        sonu = document.querySelector('.sonu');
        sonuX = parseInt(window.getComputedStyle(sonu, null).getPropertyValue('left'));
        sonu.style.left = sonuX + 112 + "px";
    }
    if (e.keyCode == 37) {
        sonu = document.querySelector('.sonu');
        sonuX = parseInt(window.getComputedStyle(sonu, null).getPropertyValue('left'));
        sonu.style.left = (sonuX - 112) + "px";
    }
}
setInterval(() => {
    sonu = document.querySelector('.sonu');
    gameOver = document.querySelector('.gameOver');
    monster = document.querySelector('.monster');

    dx = parseInt(window.getComputedStyle(sonu, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(sonu, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(monster, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(monster, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 113 && offsetY < 52) {
        gameOver.innerHTML="Game Over - Reload to start over"
        monster.classList.remove('monsterAni')
        audiogo.play();
       setTimeout(() => {
        audio.pause();
       }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 100;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(monster, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            monster.style.animationDuration = newDur + 's';
            console.log('New animation duration', newDur)
        }, 500);

    }
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score" + score
}