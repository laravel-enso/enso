<template>

    <div class="vdt-overlay is-overlay">
        <div class="vdt-overlay-loader"
            :style="overlay">
        </div>
    </div>

</template>

<script>

export default {
    name: 'Overlay',

    computed: {
        overlay() {
            return {
                border: '2px solid #00d1b2',
                'border-right-color': 'transparent',
                'border-top-color': 'transparent',
            };
        },
    },
};

</script>

<style>

    .vdt-overlay {
        background: rgba(255, 255, 255, 0.4);
        display: flex;
    }

    .vdt-overlay-loader {
        margin: auto;
        -webkit-animation: spinAround 500ms infinite linear;
        animation: spinAround 500ms infinite linear;
        border-radius: 290486px;
        content: "";
        display: block;
        position: relative;
        width: 2em;
        height: 2em;
    }

</style>
