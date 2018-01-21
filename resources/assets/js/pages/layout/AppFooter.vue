<template>

    <footer class="footer">
        <div class="content has-text-centered">
            <p class="level">
                <span class="level-item">
                    <strong class="has-margin-right-small">
                        {{ meta.appName }} v{{ meta.version }}
                    </strong>built with
                    <span class="icon has-text-danger has-margin-left-small has-margin-right-small">
                        <i class="fas fa-heart"></i>
                    </span>+
                    <a href="https://bulma.io"
                        class="has-margin-left-small has-margin-right-small"
                        target="_blank">
                        <img src="/images/bulma-logo.png"
                            alt="Made with Bulma"
                            width="80">
                    </a>+
                    <a href="https://laravel.com"
                        class="has-margin-left-small has-margin-right-small"
                        target="_blank">
                        <img src="/images/laravel-badge.png"
                            alt="Made with Laravel"
                            width="28"
                            height="28">
                    </a>+
                    <a href="https://vuejs.org"
                        target="_blank">
                        <img src="/images/vue-badge.png"
                            alt="Made with Vue"
                            width="28"
                            height="28">
                    </a>
                </span>
            </p>
            <p>
                <a href="https://github.com/laravel-enso/enso"
                    target="_blank">
                    <span class="icon">
                        <i class="fab fa-github"></i>
                    </span>
                </a>
            </p>
        </div>
    </footer>

</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'AppFooter',

    computed: {
        ...mapState(['meta']),
    },
};

</script>

<style>

    .footer {
        margin-left: 180px;
        z-index: 1;
    }

    @media screen and (max-width: 1023px) {
        .footer {
            margin-left: 0;
        }
    }

</style>
