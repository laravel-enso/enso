<template>

        <auth-form is-reset
            action="Set a new password"
            route="password.reset"
            @success="$toastr.success($event.status)">
            <p slot="password-strength"
                slot-scope="{ hasPassword, password }"
                class="help">
                <transition enter-active-class="zoomIn"
                    leave-active-class="zoomOut">
                    <svg class="animated"
                        width="100%"
                        height="5"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        v-if="hasPassword">
                        <rect v-for="i in 5"
                            width="15%"
                            height="4"
                            stroke-width="4"
                            :x="2.5 + (i-1) * 15 + (i-1) * 5 + '%'"
                            :key="i"
                            :stroke="
                                i <= score(hasPassword, password) + 1
                                    ? 'green'
                                    : 'orangered'
                            "/>
                    </svg>
                </transition>
            </p>
        </auth-form>

</template>

<script>

import zxcvbn from 'zxcvbn';
import AuthForm from '../AuthForm.vue';

export default {
    name: 'Reset',

    components: { AuthForm },

    methods: {
        score(hasPassword, password) {
            return hasPassword
                ? zxcvbn(password).score
                : 6;
        },
    },
};

</script>
