<template>

	<div>
		<slot></slot>
	</div>

</template>

<script>

export default {
    name: 'VueAside',
};

</script>

<style>

	.aside {;
        position: fixed;
        bottom: 0;
        top: 50px;
        padding-top: 25px;
        padding-bottom: 50px;
        width: 180px;
        -webkit-box-shadow: 0px 0px 5px 1px rgba(133,133,133,1);
        -moz-box-shadow: 0px 0px 5px 1px rgba(133,133,133,1);
        box-shadow: 0px 0px 5px 1px rgba(133,133,133,1);
        font-size: 0.9rem;
        max-height: 100vh;
        z-index: 1025;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .aside p.menu-label {
        font-size: 0.8rem;
    }

</style>
