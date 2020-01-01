const globalReset = 'true'; // FOR DEBUGGING PURPOSES

export default {
    'CONTENT_LEFTWARD': {
        distance: '3rem',
        origin: 'right',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'CONTENT_RIGHTWARD': {
        distance: '3rem',
        origin: 'left',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'CONTENT_UPWARD': {
        distance: '3rem',
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    }
}
