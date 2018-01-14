<template>
    <div class="container">
        <div class="error-container has-text-grey">
            <div class="error-title">Page Not Found</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NotFound',
};

</script>

<style>

    .error-container {
        display:flex;
        justify-content: center;
        align-items: center;
        height: 50%;
        font-weight: 100;
    }

    .error-title {
        font-size: 5rem;
    }

</style>
