<<<<<<< Updated upstream
import Bus from '@enso-ui/ui/src/core/bus';
=======
window.addEventListener('local-state-fetched', ({ detail }) => {
    console.log(detail);
});
>>>>>>> Stashed changes

// eslint-disable-next-line
Bus.subscribe('stateFetched', ({ context, state }) => {});
