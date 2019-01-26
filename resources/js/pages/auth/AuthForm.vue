<template>
    <div class="login">
        <div class="box has-padding-medium">
            <h3 class="title is-3 has-text-black has-text-centered has-margin-bottom-medium">
                <figure class="image is-24x24 logo">
                    <img src="/images/logo.svg">
                </figure>
                {{ meta.appName }}
            </h3>
            <form class="has-margin-bottom-medium"
                @submit.prevent="submit()">
                <div class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input v-model="email"
                            v-focus
                            class="input"
                            type="email"
                            :class="{ 'is-danger': hasErrors, 'is-success': isSuccessful }"
                            :placeholder="__('Email')"
                            @input="hasErrors=false">
                        <span class="icon is-small is-left">
                            <fa icon="envelope"/>
                        </span>
                        <span v-if="isSuccessful"
                            class="icon is-small is-right has-text-success">
                            <fa icon="check"/>
                        </span>
                        <span v-if="hasErrors"
                            class="icon is-small is-right has-text-danger">
                            <fa icon="exclamation-triangle"/>
                        </span>
                    </div>
                </div>
                <div v-if="isLogin || isReset" class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input v-model="password"
                            class="input"
                            type="password"
                            :class="{ 'is-danger': hasErrors, 'is-success': isSuccessful }"
                            :placeholder="__('Password')"
                            @input="hasErrors=false">
                        <span class="icon is-small is-left">
                            <fa icon="lock"/>
                        </span>
                        <span v-if="isSuccessful"
                            class="icon is-small is-right has-text-success">
                            <fa icon="check"/>
                        </span>
                        <span v-if="hasErrors"
                            class="icon is-small is-right has-text-danger">
                            <fa icon="exclamation-triangle"/>
                        </span>
                        <slot name="password-strength"
                            :password="password"
                            :has-password="hasPassword"/>
                    </div>
                </div>
                <div v-if="isReset" class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input v-model="passwordConfirmation"
                            class="input"
                            type="password"
                            :class="{ 'is-danger': hasErrors, 'is-success': isSuccessful }"
                            :placeholder="__('Repeat Password')"
                            @input="hasErrors=false">
                        <span class="icon is-small is-left">
                            <fa icon="lock"/>
                        </span>
                        <span v-if="isSuccessful"
                            class="icon is-small is-right has-text-success">
                            <fa icon="check"/>
                        </span>
                        <span v-if="hasErrors"
                            class="icon is-small is-right has-text-danger">
                            <fa icon="exclamation-triangle"/>
                        </span>
                        <span v-if="match && !hasErrors"
                            class="icon is-small is-right has-text-success">
                            <fa icon="check"/>
                        </span>
                    </div>
                </div>
                <div v-if="isLogin" class="field">
                    <div class="control">
                        <label class="checkbox">
                        <input v-model="remember"
                            type="checkbox">
                            {{ __('Remember me') }}
                        </label>
                    </div>
                </div>
                <div class="field">
                    <button class="button is-primary is-fullwidth"
                        :class="{ 'is-loading': loading }"
                        type="submit"
                        @click.prevent="submit()">
                        <span class="icon is-small">
                            <fa :icon="isReset ? 'lock' : 'user'"/>
                        </span>
                        <span>{{ __(action) }}</span>
                    </button>
                </div>
            </form>
            <router-link v-if="isLogin"
                :to="{ name: 'password.email' }"
                class="is-pulled-right">
                {{ __('Forgot password') }}
            </router-link>
            <div class="is-clearfix"/>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faEnvelope, faCheck, faExclamationTriangle, faLock, faUser,
} from '@fortawesome/free-solid-svg-icons';

library.add([
    faEnvelope, faCheck, faExclamationTriangle, faLock, faUser,
]);

export default {
    name: 'AuthForm',

    props: {
        isLogin: {
            type: Boolean,
            default: false,
        },
        isReset: {
            type: Boolean,
            default: false,
        },
        action: {
            type: String,
            required: true,
        },
        route: {
            type: String,
            required: true,
        },
    },

    data: () => ({
        loading: false,
        email: '',
        password: '',
        passwordConfirmation: null,
        remember: false,
        hasErrors: false,
        isSuccessful: false,
    }),

    computed: {
        ...mapState(['meta']),
        token() {
            return this.isReset
                ? this.$route.params.token
                : null;
        },
        hasPassword() {
            return this.password !== null && this.password.length;
        },
        match() {
            return this.hasPassword
                && this.password === this.passwordConfirmation;
        },
        postParams() {
            let params = {
                email: this.email,
            };

            if (this.isLogin) {
                params = Object.assign({
                    password: this.password,
                    remember: this.remember,
                }, params);
            }

            if (this.isReset) {
                params = Object.assign({
                    password: this.password,
                    password_confirmation: this.passwordConfirmation,
                    token: this.token,
                }, params);
            }

            return params;
        },
    },

    methods: {
        submit() {
            this.loading = true;
            this.isSuccessful = false;
            this.hasErrors = false;

            axios.post(route(this.route), this.postParams)
                .then(({ data }) => {
                    this.loading = false;
                    this.isSuccessful = true;
                    this.$emit('success', data);
                }).catch((error) => {
                    this.loading = false;
                    this.hasErrors = true;

                    const { status, data } = error.response;

                    if (status === 401) {
                        this.$toastr.error(data.message);
                        return;
                    }

                    if (status === 422) {
                        this.reportValidationErrors(data);
                        return;
                    }

                    throw error;
                });
        },
        reportValidationErrors(data) {
            if (!data.errors) {
                this.$toastr.error(data.message);
                return;
            }

            if (data.errors.email) {
                this.$toastr.error(data.errors.email[0]);
            }

            if (data.errors && data.errors.password) {
                this.$toastr.error(data.errors.password[0]);
            }
        },
    },
};

</script>

<style lang="scss" scoped>

    .login {
         max-width: 400px;
         margin: auto;
    }

    figure.logo {
        display: inline-block;
    }

</style>
