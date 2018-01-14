<template>

    <div class="aside">
        <slot></slot>
    </div>

</template>

<script>

export default {
    name: 'VueAside',
};

</script>

<style lang="scss">

    div.aside {
        p.menu-label {
            font-size: 0.8rem;
        }

        position: fixed;
        bottom: 0;
        top: 50px;
        padding-top: 20px;
        padding-bottom: 20px;
        width: 180px;
        -webkit-box-shadow: 0px 0px 5px 1px rgba(133,133,133,1);
        -moz-box-shadow: 0px 0px 5px 1px rgba(133,133,133,1);
        box-shadow: 0px 0px 5px 1px rgba(133,133,133,1);
        font-size: 0.9em;
        max-height: 100vh;
        z-index: 2;
        overflow-y: auto;
        overflow-x: hidden;
    }

</style>
