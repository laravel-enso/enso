<template>
    <div class="container">
        <div class="error-container has-text-grey">
            <div class="error-title">
                {{ __('You are not authorized here') }}
                <fa class="has-text-danger"
                    icon="ban"/>
            </div>
        </div>
    </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBan } from '@fortawesome/free-solid-svg-icons';

library.add([
    faBan,
]);

export default {
    name: 'Unauthorized',

    created() {

    },
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
        font-size: 3rem;
    }

</style>
