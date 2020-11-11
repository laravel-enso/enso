window.addEventListener('local-state-fetched', ({ detail }) => {
    console.log(detail);
});

// eslint-disable-next-line
Bus.subscribe('stateFetched', ({ context, state }) => {});
