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
                            :class="{ 'is-danger': hasErrors, 'is-success': isSuccessful }"
                            type="email"
                            :placeholder="__('Email')"
                            v-model="email">
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
                <div class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input"
                            :class="{ 'is-danger': hasErrors, 'is-success': isSuccessful }"
                            type="password"
                            :placeholder="__('Password')"
                            v-model="password">
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
                        <p class="help">
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
                                        :stroke="i <= score + 1 ? 'green' : 'orangered'"
                                        stroke-width="4"
                                        :x="2.5 + (i-1) * 15 + (i-1) * 5 + '%'"
                                        :key="i"/>
                                </svg>
                            </transition>
                        </p>
                    </div>
                </div>
                <div class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input"
                            :class="{ 'is-danger': hasErrors, 'is-success': isSuccessful }"
                            type="password"
                            :placeholder="__('Repeat Password')"
                            v-model="passwordConfirmation">
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
                <div class="field">
                    <button class="button is-primary is-fullwidth"
                        :class="{ 'is-loading': loading }"
                        type="submit"
                        @click.prevent="submit()">
                        <span class="icon is-small">
                            <fa icon="lock"/>
                        </span>
                        <span>{{ __('Set password') }}</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';
import zxcvbn from 'zxcvbn';
import fontawesome from '@fortawesome/fontawesome';
import { faEnvelope, faCheck, faExclamationTriangle, faLock }
    from '@fortawesome/fontawesome-free-solid/shakable.es';

fontawesome.library.add(faEnvelope, faCheck, faExclamationTriangle, faLock);

export default {
    name: 'Reset',

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

    computed: {
        ...mapState(['meta']),
        hasPassword() {
            return this.password !== null && this.password.length;
        },
        match() {
            return this.hasPassword && this.password === this.passwordConfirmation;
        },
        score() {
            return this.hasPassword
                ? zxcvbn(this.password).score
                : 6;
        },
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
                this.$toastr.success(data.status);
                setTimeout(() => this.$router.push({ name: 'login' }));
            }).catch((error) => {
                this.loading = false;
                this.hasErrors = true;

                const { status, data } = error.response;

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
                    this.$toastr.error(data.errors.email[0]);
                }

                if (data.errors.password) {
                    this.$toastr.error(data.errors.password[0]);
                }

                return;
            }

            this.$toastr.error(data.message);
        },
    },
};

</script>
