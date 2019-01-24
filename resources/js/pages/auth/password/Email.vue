<template>
    <auth-form action="Send a reset password link"
        route="password.email"
        @success="$toastr.success($event.status)"/>
</template>

<script>

import AuthForm from '../AuthForm.vue';

export default {
    name: 'Email',

    components: { AuthForm },
};

</script>
