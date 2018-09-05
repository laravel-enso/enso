<template>

    <div class="column login">
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
                        <input class="input"
                            type="email"
                            :class="{ 'is-danger': hasErrors, 'is-success': isSuccessful }"
                            :placeholder="__('Email')"
                            v-model="email"
                            @input="hasErrors=false"
                            v-focus>
                        <span class="icon is-small is-left">
                            <fa icon="envelope"/>
                        </span>
                        <span class="icon is-small is-right has-text-success"
                            v-if="isSuccessful">
                            <fa icon="check"/>
                        </span>
                        <span class="icon is-small is-right has-text-danger"
                            v-if="hasErrors">
                            <fa icon="exclamation-triangle"/>
                        </span>
                    </div>
                </div>
                <div class="field" v-if="isLogin || isReset">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input"
                            type="password"
                            :class="{ 'is-danger': hasErrors, 'is-success': isSuccessful }"
                            :placeholder="__('Password')"
                            v-model="password"
                            @input="hasErrors=false">
                        <span class="icon is-small is-left">
                            <fa icon="lock"/>
                        </span>
                        <span class="icon is-small is-right has-text-success"
                            v-if="isSuccessful">
                            <fa icon="check"/>
                        </span>
                        <span class="icon is-small is-right has-text-danger"
                            v-if="hasErrors">
                            <fa icon="exclamation-triangle"/>
                        </span>
                        <slot name="password-strength"
                            :password="password"
                            :has-password="hasPassword"/>
                    </div>
                </div>
                <div class="field" v-if="isReset">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input"
                            type="password"
                            :class="{ 'is-danger': hasErrors, 'is-success': isSuccessful }"
                            :placeholder="__('Repeat Password')"
                            v-model="passwordConfirmation"
                            @input="hasErrors=false">
                        <span class="icon is-small is-left">
                            <fa icon="lock"/>
                        </span>
                        <span class="icon is-small is-right has-text-success"
                            v-if="isSuccessful">
                            <fa icon="check"/>
                        </span>
                        <span class="icon is-small is-right has-text-danger"
                            v-if="hasErrors">
                            <fa icon="exclamation-triangle"/>
                        </span>
                        <span class="icon is-small is-right has-text-success"
                            v-if="match && !hasErrors">
                            <fa icon="check"/>
                        </span>
                    </div>
                </div>
                <div class="field" v-if="isLogin">
                    <div class="control">
                        <label class="checkbox">
                        <input type="checkbox"
                            v-model="remember">
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
            <router-link :to="{ name: 'password.email' }"
                class="is-pulled-right"
                v-if="isLogin">
                {{ __('Forgot password') }}
            </router-link>
            <div class="is-clearfix"/>
        </div>
    </div>

</template>

<script>

import { mapState } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faCheck, faExclamationTriangle, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

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

    data() {
        return {
            loading: false,
            email: '',
            password: '',
            passwordConfirmation: null,
            remember: false,
            hasErrors: false,
            isSuccessful: false,
        };
    },

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
                params = Object.assign({ password: this.password }, params);
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

    .column.login {
         max-width: 400px;
    }

    figure.logo {
        display: inline-block;
    }

</style>
