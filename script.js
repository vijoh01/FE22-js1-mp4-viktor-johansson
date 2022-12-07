
$(() => {
    
    let animation = {
        targets: 'path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        opacity: 0.8,
        delay: 500,
        direction: 'alternate',
        loop: true
    }

    let showLetters = {
        targets: '#letter-container svg',
        translateY: 1000,
        easing: 'linear',
        delay: anime.stagger(500),
        direction: 'alternate',
        endDelay: 1000,
        loop: true,
       
    }

    let shrink = {
        targets: '#arrows',
        easing: 'linear',
        direction: 'alternate',
        translateX: ['-50rem', 0],
        endDelay: 1000,
        delay: 500,
        duration: 3000,
        loop: true,
       
    }
    anime(animation);

    anime(showLetters);
    anime(shrink);
});
