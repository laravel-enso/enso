<template>

    <div class="aside">
        <slot/>
    </div>

</template>

<script>

export default {
    name: 'VueAside',
};

</script>

<style lang="scss">

    div.aside {
        position: fixed;
        bottom: 0;
        top: 50px;
        padding-top: 20px;
        padding-bottom: 20px;
        width: 180px;
        font-size: 0.85em;
        max-height: 100vh;
        z-index: 2;
        -webkit-box-shadow: 0 2px 3px hsla(0,0%,4%,.1);
        box-shadow: 0 2px 3px hsla(0,0%,4%,.1);
        transition: width .5s ease;

        &.is-collapsed {
            width: 56px;
        }
    }

</style>
