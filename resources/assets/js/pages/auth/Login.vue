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
                        v-model="email"
                        @keypress.down="hasErrors=false">
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
                        v-model="password"
                        @keypress.down="hasErrors=false">
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
                <div class="control">
                    <label class="checkbox">
                      <input type="checkbox"
                        v-model="remember">
                      Remember me
                    </label>
                </div>
            </div>
            <div class="field">
                <button class="button is-primary is-fullwidth"
                    :class="{ 'is-loading': loading }"
                    type="submit"
                    @click.prevent="submit()">
                    <span class="icon is-small">
                        <fa icon="user"></fa>
                    </span>
                    <span>Login</span>
                </button>
            </div>
        </form>
        <router-link :to="{ name: 'password.email' }"
            class="is-pulled-right">
            Forgot password
        </router-link>
    </div>

</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import fontawesome from '@fortawesome/fontawesome';
import {
    faEnvelope, faCheck, faExclamationTriangle, faLock, faUser,
} from '@fortawesome/fontawesome-free-solid/shakable.es';

fontawesome.library.add([
    faEnvelope, faCheck, faExclamationTriangle, faLock, faUser,
]);

export default {
    name: 'Login',

    props: {
        appName: {
            type: String,
            required: true,
        },
    },

    computed: {
        ...mapGetters('auth', ['lastRoute']),
    },

    data() {
        return {
            loading: false,
            email: '',
            password: '',
            remember: false,
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
    },

    methods: {
        ...mapActions('auth', ['login']),
        submit() {
            this.loading = true;
            this.isSuccessful = false;
            this.hasErrors = false;

            axios.post('/api/login', { email: this.email, password: this.password }).then(() => {
                this.loading = false;
                this.isSuccessful = true;
                setTimeout(() => {
                    this.login();
                    this.$emit('login');

                    if (!this.lastRoute) {
                        this.$router.replace('/');
                        return;
                    }

                    this.$router.replace({ name: this.lastRoute });
                    this.$store.commit('auth/setLastRoute', null);
                }, 1000);
            }).catch((error) => {
                this.loading = false;
                this.hasErrors = true;

                const { status, data } = error.response;

                if (status === 401) {
                    this.$toastr.error(data.message);
                    return;
                }

                if (status === 422) {
                    this.reportLoginError(data);
                    return;
                }

                throw error;
            });
        },
        reportLoginError(data) {
            if (data.errors) {
                if (data.errors.email) {
                    this.$toastr.error(data.errors.email);
                }

                if (data.errors && data.errors.password) {
                    this.$toastr.error(data.errors.password[0]);
                }

                return;
            }

            this.$toastr.error(data.message);
        },
    },
};

</script>
