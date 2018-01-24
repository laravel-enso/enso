<template>

    <div class="column box login">
        <h3 class="title is-3 has-text-black has-text-centered has-margin-bottom-medium">
            <figure class="image is-24x24 logo">
                <img src="/images/logo.svg"/>
            </figure>
            {{ appName }}
        </h3>
        <form class="has-margin-bottom-medium"
            @submit.prevent="submit()">
            <div class="field">
                <div class="control has-icons-left has-icons-right">
                    <input class="input"
                        :class="{ 'is-danger': hasErrors, 'is-success': isSuccessful }"
                        type="email"
                        placeholder="Email"
                        v-model="email">
                    <span class="icon is-small is-left">
                        <fa icon="envelope"></fa>
                    </span>
                    <span class="icon is-small is-right has-text-success"
                        v-if="isSuccessful">
                        <fa icon="check"></fa>
                    </span>
                    <span class="icon is-small is-right has-text-danger"
                        v-if="hasErrors">
                        <fa icon="exclamation-triangle"></fa>
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control has-icons-left has-icons-right">
                    <input class="input"
                        :class="{ 'is-danger': hasErrors, 'is-success': isSuccessful }"
                        type="password"
                        placeholder="Password"
                        v-model="password">
                    <span class="icon is-small is-left">
                        <fa icon="lock"></fa>
                    </span>
                    <span class="icon is-small is-right has-text-success"
                        v-if="isSuccessful">
                        <fa icon="check"></fa>
                    </span>
                    <span class="icon is-small is-right has-text-danger"
                        v-if="hasErrors">
                        <fa icon="exclamation-triangle"></fa>
                    </span>
                </div>
            </div>
            <div class="field">
                <div class="control has-icons-left has-icons-right">
                    <input class="input"
                        :class="{ 'is-danger': hasErrors, 'is-success': isSuccessful }"
                        type="password"
                        placeholder="Repeat Password"
                        v-model="passwordConfirmation">
                    <span class="icon is-small is-left">
                        <fa icon="lock"></fa>
                    </span>
                    <span class="icon is-small is-right has-text-success"
                        v-if="isSuccessful">
                        <fa icon="check"></fa>
                    </span>
                    <span class="icon is-small is-right has-text-danger"
                        v-if="hasErrors">
                        <fa icon="exclamation-triangle"></fa>
                    </span>
                </div>
            </div>
            <div class="field">
                <button class="button is-primary is-fullwidth"
                    :class="{ 'is-loading': loading }"
                    type="submit"
                    @click.prevent="submit()">
                    <span class="icon is-small">
                        <fa icon="lock"></fa>
                    </span>
                    <span>Login</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import {
    faEnvelope, faCheck, faExclamationTriangle, faLock,
} from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(faEnvelope, faCheck, faExclamationTriangle, faLock);

export default {
    name: 'Email',

    props: {
        appName: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            loading: false,
            email: null,
            password: null,
            passwordConfirmation: null,
            token: this.$route.params.token,
            hasErrors: false,
            isSuccessful: false,
        };
    },

    watch: {
        email: {
            handler() {
                this.hasErrors = false;
            },
        },
        password: {
            handler() {
                this.hasErrors = false;
            },
        },
        passwordConfirmation: {
            handler() {
                this.hasErrors = false;
            },
        },
    },

    methods: {
        submit() {
            this.loading = true;
            this.isSuccessful = false;
            this.hasErrors = false;

            const params = {
                email: this.email,
                password: this.password,
                password_confirmation: this.passwordConfirmation,
                token: this.token,
            };

            axios.post('/api/password/reset', params).then(({ data }) => {
                this.loading = false;
                this.isSuccessful = true;
                toastr.success(data.status);
                setTimeout(() => this.$router.push({ name: 'login' }));
            }).catch((error) => {
                this.loading = false;
                this.hasErrors = true;

                const { status, data } = error.response;

                if (status === 422) {
                    if (data.errors) {
                        if (data.errors.email) {
                            toastr.error(data.errors.email);
                        }

                        if (data.errors.password) {
                            toastr.error(data.errors.password);
                        }

                        return;
                    }

                    toastr.error(data.message);

                    return;
                }

                throw error;
            });
        },
    },
};

</script>
