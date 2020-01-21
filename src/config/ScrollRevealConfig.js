const globalReset = true;
const delayBase = 20;

export default {
    'CONTENT_LEFTWARD': {
        delay: delayBase,
        distance: '5rem',
        duration: 1000,
        origin: 'right',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'CONTENT_LEFTWARD_DELAY_100': {
        delay: delayBase+100,
        distance: '5rem',
        duration: 1000,
        origin: 'right',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'CONTENT_LEFTWARD_DELAY_200': {
        delay: delayBase+200,
        duration: 1000,
        distance: '5rem',
        origin: 'right',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'CONTENT_RIGHTWARD': {
        delay: delayBase,
        distance: '5rem',
        duration: 1000,
        origin: 'left',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'CONTENT_UPWARD': {
        delay: delayBase,
        distance: '3rem',
        duration: 800,
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    }
}
