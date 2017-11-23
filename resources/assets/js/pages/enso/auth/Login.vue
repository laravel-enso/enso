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
                        <i class="fa fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right has-text-success"
                        v-if="isSuccessful">
                        <i class="fa fa-check"></i>
                    </span>
                    <span class="icon is-small is-right has-text-error"
                        v-if="hasErrors">
                        <i class="fa fa-warning has-text-danger"></i>
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
                        <i class="fa fa-lock"></i>
                    </span>
                    <span class="icon is-small is-right has-text-success"
                        v-if="isSuccessful">
                        <i class="fa fa-check"></i>
                    </span>
                    <span class="icon is-small is-right"
                        v-if="hasErrors">
                        <i class="fa fa-warning has-text-danger"></i>
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
                        <i class="fa fa-user"></i>
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

import { mapActions } from 'vuex';

export default {
    name: 'Login',

    props: {
        appName: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            loading: false,
            email: '',
            password: '',
            remember: false,
            hasErrors: null,
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
                    this.login(this.remember);
                    this.$emit('login');
                    this.$router.replace('/');
                }, 1000);
            }).catch((error) => {
                this.loading = false;
                this.hasErrors = true;

                const { status, data } = error.response;

                if (status === 401) {
                    toastr.error(data.message);
                    return;
                }

                if (status === 422) {
                    toastr.error(data.email);
                    return;
                }

                throw error;
            });
        },
    },
};

</script>
