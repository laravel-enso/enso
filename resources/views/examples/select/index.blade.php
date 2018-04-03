<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>

        <link rel="icon" href="/favicon.ico"/>
        <link id="theme" rel="stylesheet" type="text/css" href="/themes/clean/bulma.min.css">
        <link href="{{ mix('css/enso.css') }}" rel="stylesheet" type="text/css"/>
    </head>
    <body>

        <div id="app"
            v-cloak>
            <nav class="navbar has-bottom-top-large" role="navigation" aria-label="main navigation">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://laravel-enso.com">
                            <img src="/images/logo.svg" alt="Laravel Enso" width="28" height="28">
                            <h4 class="title is-4 has-margin-left-small">
                                Enso
                            </h4>
                        </a>
                    </div>
                    <div class="navbar-start">
                        <a class="navbar-item" href="/examples/table">
                            Vue Datatable
                        </a>
                        <a class="navbar-item" href="#">
                            Vue Select
                        </a>
                    </div>
                    <div class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item is-hidden-desktop-only" href="https://github.com/laravel-enso/select" target="_blank">
                                <span class="icon" style="color: #333;">
                                    <fa :icon="['fab', 'github']" size="lg"></fa>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <section class="hero is-primary is-bold is-small">
                <div class="hero-body">
                    <div class="container">
                        <p class="title">
                            Vue Select
                        </p>
                        <p class="subtitle">
                            Example of different scenarios with the vue select component.
                        </p>
                        <p>For more action visit <a href="https://laravel-enso.com"><u>laravel-enso.com</u></a> and use <b>admin@laravel-enso.com</b> & <b>password</b> for login.</p>
                    </div>
                </div>
            </section>
            <div class="container has-margin-top-large">
                <div class="columns">
                    <div class="column is-4">
                        <label class="label">Simple Select</label>
                        <vue-select :options="seniorityOptions"
                            v-model="simple">
                        </vue-select>
                    </div>
                    <div class="column has-margin-top-medium">
                        <pre>v-model=@{{ simple }}</pre>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-4">
                        <label class="label">Multiple Select</label>
                        <vue-select :options="seniorityOptions"
                            multiple
                            v-model="multiple">
                        </vue-select>
                    </div>
                    <div class="column has-margin-top-medium">
                        <pre>v-model=@{{ JSON.stringify(multiple) }}</pre>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-4">
                        <label class="label">Simple Select Server Side</label>
                        <vue-select source="/examples/select/employee"
                            v-model="simpleSS">
                        </vue-select>
                    </div>
                    <div class="column has-margin-top-medium">
                        <pre>v-model=@{{ simpleSS || 'null' }}</pre>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-4">
                        <label class="label">Multiple Select Server Side</label>
                        <vue-select source="/examples/select/employee"
                            multiple
                            v-model="multipleSS">
                        </vue-select>
                        
                    </div>
                    <div class="column has-margin-top-medium">
                        <pre>v-model=@{{ JSON.stringify(multipleSS) }}</pre>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-4">
                        <label class="label">Inter-dependent Master</label>
                        <vue-select :options="seniorityOptions"
                            multiple
                            v-model="multipleMaster">
                        </vue-select>
                    </div>
                    <div class="column has-margin-top-medium">
                        <pre>v-model=@{{ JSON.stringify(multipleMaster) }}</pre>
                    </div>
                    <div class="column is-4">
                        <label class="label">Inter-dependent Server Side Slave</label>
                        <vue-select source="/examples/select/employee"
                            multiple
                            :params="{ seniority: multipleMaster }"
                            v-model="multipleSlave">
                        </vue-select>
                    </div>
                    <div class="column has-margin-top-medium">
                        <pre>v-model=@{{ JSON.stringify(multipleSlave) }}</pre>
                    </div>
                </div>
                <div class="has-text-centered has-margin-large">
                    <button class="button is-outlined is-info"
                        @click="showCode = !showCode">
                        <span v-if="showCode">
                            Hide Code
                        </span>
                        <span v-else>
                            Show Code
                        </span>
                    </button>
                </div>
                <transition appear
                    enter-active-class="zoomIn"
                    leave-active-class="zoomOut">
                    <tabs class="animated"
                        alignment="centered"
                        v-if="showCode">
                        <span slot="label" slot-scope="props">
                            @{{ props.tab.label }}
                            <span :class="[ 'tag', props.tab.class ]">@{{ props.tab.tag }}</span>
                        </span>
                        <tab :id="{ label: 'front end', class: 'is-info', tag: 'mixt' }">
                            Soon...
                        </tab>
                        <tab :id="{ label: 'back end', class: 'is-info', tag: 'mixt' }">
                            Soon...
                        </tab>
                    </tabs>
                </transition>
            </div>
                <footer class="footer">
                <div class="container">
                    <div class="content has-text-centered">
                        <p><strong>Vue Datatable</strong> from <a href="https://laravel-enso.com">Laravel Enso</a></p>
                        <p>
                            <a href="https://github.com/laravel-enso/enso" target="_blank">
                                <span class="icon" style="color: #333;">
                                    <fa :icon="['fab', 'github']" size="lg"></fa>
                                </span>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>

        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
        <script src="{{ mix('js/selectExample.js') }}"></script>

    </body>
</html>
