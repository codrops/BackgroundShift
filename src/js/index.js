import { map, calcWinsize, preloadImages, deepEqual } from './utils';
import LocomotiveScroll from 'locomotive-scroll';

const MAX_SCROLL_DISTANCE = 400;
const LAYER_BOUNDS = {min: 0, max: 101}; // percentage values
const shiftEl = document.querySelector('.shift');
let shiftDirection = 'h';
if ( shiftEl.classList.contains('shift--vertical') ) {
    shiftDirection = 'v';
}
else if ( shiftEl.classList.contains('shift--rotated') ) {
    shiftDirection = 'r';    
}
const layers = [...shiftEl.querySelectorAll('.shift__layer-inner')];
const triggerEl = document.querySelector('#trigger');

let currentScroll = 0;
let winsize;
let triggerTop;
let cache = {};
let layersTranslation = {x: 0, y: 0};

const calcTriggerTop = () => triggerEl.getBoundingClientRect()['top']+currentScroll;

const init = () => {
    winsize = calcWinsize(); 
    triggerTop = calcTriggerTop();
};

// Preload images then remove loader (loading class) from body
preloadImages('.projects__img, .footer__img, .intro__gallery-item').then(() => {
    document.body.classList.remove('loading');

    const lscroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: {smooth: true},
        tablet: {smooth: true}
    });
    
    init();

    // Locomotive Scroll event
    lscroll.on('scroll', obj => {
        currentScroll = obj.scroll.y;
        layersTranslation.x = shiftDirection !== 'v' ? 0 : map(((currentScroll+winsize.height)-triggerTop), 0, MAX_SCROLL_DISTANCE, -1*LAYER_BOUNDS.max, LAYER_BOUNDS.min);
        layersTranslation.y = shiftDirection === 'v' ? 0 : map(((currentScroll+winsize.height)-triggerTop), 0, MAX_SCROLL_DISTANCE, shiftDirection === 'h' ? LAYER_BOUNDS.max : -1*LAYER_BOUNDS.max, LAYER_BOUNDS.min);

        // only update for different values
        if ( cache.layersTranslation && deepEqual(layersTranslation, cache.layersTranslation) ) {
            layers.forEach(layer => layer.style.transform = `translate3d(${layersTranslation.x}%, ${layersTranslation.y}%, 0)`);
        }
        // cache the last translation
        cache.layersTranslation = layersTranslation;
    });

    window.addEventListener('resize', init);

});

