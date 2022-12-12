
$(() => {
    let animation = [anime({
        targets: 'path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 20000,
        opacity: 0.8,
        delay: 500,
        direction: 'alternate',
        loop: true
    }),

    anime({
        targets: '#letter-container svg',
        translateY: 1000,
        opacity: 1,
        easing: 'linear',
        delay: anime.stagger(500),
        scale: 1.1,
        direction: 'alternate',
        endDelay: 2000,
        loop: true,
    }),

    anime({
        targets: '#arrows',
        easing: 'linear',
        direction: 'alternate',
        translateX: ['-42rem', 0],
        endDelay: 2000,
        delay: 500,
        duration: 3000,
        easing: 'steps(6)',
        loop: true,
    }),

    anime({
        targets: '#text-container',
        backgroundColor: 'hsl(100, 40%, 80%)',
        keyframes: [{ filter: 'drop-shadow(50px 50px 0px rgb(78, 156, 201))' },
        { filter: 'drop-shadow(-50px -50px 0px rgb(78, 156, 201)) grayscale(80%)' }],
        ease: 'easeInOutSine',
        endDelay: 500,
        delay: 500,
        duration: 10000,
        direction: 'alternate',
        loop: true,
        pause: true
    })];

    animation.forEach((ani) => ani.pause());
    
    let playing;

    $('#buttons').click((e) => {
        e.preventDefault();
        
        if (e.target.id == "play") {
            if (!playing) {
                animation.forEach((ani) => ani.play());
                return playing = true;
            }
            animation.forEach((ani) => ani.pause());
            return playing = false;
        }
        animation.forEach((ani) => { ani.restart(); playing = false; ani.pause() });

    });
});
