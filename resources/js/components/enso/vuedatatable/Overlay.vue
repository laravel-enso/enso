<template>

    <div class="overlay is-overlay">
        <div class="overlay-loader"/>
    </div>

</template>

<script>

export default {
    name: 'Overlay',
};

</script>

<style scoped>

    .overlay {
        background: rgba(255, 255, 255, 0.4);
        display: flex;
    }

    .overlay-loader {
        margin: auto;
        -webkit-animation: spinAround 500ms infinite linear;
        animation: spinAround 500ms infinite linear;
        border-radius: 50%;
        content: "";
        width: 2em;
        height: 2em;
        border: 2px solid#f44336;
        border-right-color: transparent;
        border-top-color: transparent;
    }

</style>
