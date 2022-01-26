const imagesLoaded = require('imagesloaded');

// Clamps a value between an upper and lower bound
const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;

// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => clamp((x - a) * (d - c) / (b - a) + c, Math.min(c,d), Math.max(c,d));

// Viewport size
const calcWinsize = () => {
    return { width: window.innerWidth, height: window.innerHeight };
};

// Preload images
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

// from https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
const isObject = (object) => object != null && typeof object === 'object';
const deepEqual = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if ( areObjects && !deepEqual(val1, val2) || !areObjects && val1 !== val2 ) {
            return false;
        }
    }
    return true;
} 

export {
    clamp,
    map,
    calcWinsize,
    preloadImages,
    deepEqual
};