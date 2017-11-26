<template>

    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p class="level">
                    <span class="level-item">
                        <strong>
                            {{ meta.appName }} v{{ meta.version }}
                        </strong>&nbsp;built with&nbsp;
                        <span class="icon has-text-danger">
                            <i class="fa fa-heart"></i>
                        </span>+&nbsp;
                        <a href="https://bulma.io"
                            target="_blank">
                            <img src="/images/bulma-logo.png"
                                alt="Made with Bulma"
                                width="80">
                        </a>&nbsp;+
                        <a href="https://laravel.com"
                            target="_blank">
                            <img src="/images/laravel-badge.png"
                                alt="Made with Laravel"
                                width="28"
                                height="28">
                        </a>&nbsp;+
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
                            <i class="fa fa-github"></i>
                        </span>
                    </a>
                </p>
            </div>
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

    @media screen and (max-width: 1007px) {
        .footer {
            margin-left: 0;
        }
    }

</style>
