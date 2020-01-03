const globalReset = false;
const delayBase = 200;

export default {
    'CONTENT_LEFTWARD': {
        delay: delayBase,
        distance: '3rem',
        origin: 'right',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'CONTENT_LEFTWARD_DELAY_100': {
        delay: delayBase+100,
        distance: '3rem',
        origin: 'right',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'CONTENT_LEFTWARD_DELAY_200': {
        delay: delayBase+200,
        distance: '3rem',
        origin: 'right',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'CONTENT_RIGHTWARD': {
        delay: delayBase,
        distance: '3rem',
        origin: 'left',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'CONTENT_UPWARD': {
        delay: delayBase,
        distance: '3rem',
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    }
}
