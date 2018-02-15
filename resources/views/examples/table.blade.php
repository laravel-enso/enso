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
                    </div>
                    <div class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item is-hidden-desktop-only" href="https://github.com/laravel-enso/vuedatatable" target="_blank">
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
                            Vue Datatable
                        </p>
                        <p class="subtitle">
                            Example of a custom datatable with blazing fast server-side processing for 100k records.
                        </p>
                        <p>For more action visit <a href="https://laravel-enso.com"><u>laravel-enso.com</u></a> and use <b>admin@laravel-enso.com</b> & <b>password</b> for login.</p>
                    </div>
                </div>
            </section>
            <div class="container has-margin-top-large">
                <div class="columns">
                    <div class="column is-one-fifth">
                        <vue-filter class="box"
                            :options="activeOptions"
                            icons
                            title="Active"
                            v-model="filters.examples.is_active">
                        </vue-filter>
                    </div>
                    <div class="column is-one-fifth">
                        <vue-select-filter class="box"
                            title="Seniority"
                            :options="seniorityOptions"
                            v-model="filters.examples.seniority">
                        </vue-select-filter>
                    </div>
                    <div class="column is-two-fifths">
                        <date-interval-filter class="box"
                            title="Hired Between"
                            :min="intervals.examples.hired_at.min"
                            @update-min="intervals.examples.hired_at.min = $event"
                            :max="intervals.examples.hired_at.max"
                            @update-max="intervals.examples.hired_at.max = $event">
                        </date-interval-filter>
                    </div>
                    <div class="column is-one-fifth">
                        <interval-filter class="box"
                            title="Salary"
                            type="number"
                            :min="intervals.examples.salary.min"
                            @update-min="intervals.examples.salary.min = $event"
                            :max="intervals.examples.salary.max"
                            @update-max="intervals.examples.salary.max = $event">
                        </interval-filter>
                    </div>
                </div>
                <vue-table class="box"
                    path="/examples/table/init"
                    :custom-render="customRender"
                    :filters="filters"
                    :intervals="intervals"
                    @clicked="clicked"
                    @excel="$toastr.info('You just pressed Excel', 'Event')"
                    @create="$toastr.success('You just pressed Create', 'Event')"
                    @edit="$toastr.warning('You just pressed Edit', 'Event')"
                    @destroy="$toastr.error('You just pressed Delete', 'Event')"
                    id="example">
                </vue-table>
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
                            <tabs alignment="centered">
                                <span slot="label" slot-scope="props">
                                    @{{ props.tab.label }}
                                    <span :class="[ 'tag', props.tab.class ]">@{{ props.tab.tag }}</span>
                                </span>
                                <tab :id="{ label: 'vue-table', class: 'is-warning', tag: 'req' }">
                                    <div class="columns">
                                        <div class="column is-half is-offset-one-quarter">
                                            @include('examples.partials.vueTable')
                                        </div>
                                    </div>
                                </tab>
                                <tab :id="{ label: 'vue-filter', class: 'is-success', tag: 'opt' }">
                                    <div class="columns">
                                        <div class="column is-half is-offset-one-quarter">
                                            @include('examples.partials.vueFilter')
                                        </div>
                                    </div>
                                </tab>
                                <tab :id="{ label: 'vue-select-filter', class: 'is-success', tag: 'opt' }">
                                    <div class="columns">
                                        <div class="column is-half is-offset-one-quarter">
                                            @include('examples.partials.vueSelectFilter')
                                        </div>
                                    </div>
                                </tab>
                                <tab :id="{ label: 'date-interval-filter', class: 'is-success', tag: 'opt', active: false }">
                                    <div class="columns">
                                        <div class="column is-half is-offset-one-quarter">
                                            @include('examples.partials.dateIntervalFilter')
                                        </div>
                                    </div>
                                </tab>
                                <tab :id="{ label: 'interval-filter', class: 'is-success', tag: 'opt' }">
                                    <div class="columns">
                                        <div class="column is-half is-offset-one-quarter">
                                            @include('examples.partials.intervalFilter')
                                        </div>
                                    </div>
                                </tab>
                                <tab :id="{ label: 'example.js', class: 'is-info', tag: 'info' }">
                                    <div class="columns">
                                        <div class="column is-three-fifths is-offset-one-fifth">
                                            @include('examples.partials.exampleJs')
                                        </div>
                                    </div>
                                </tab>
                            </tabs>
                        </tab>
                        <tab :id="{ label: 'back end', class: 'is-info', tag: 'mixt' }">
                            <tabs alignment="centered">
                                <span slot="label" slot-scope="props">
                                    @{{ props.tab.label }}
                                    <span :class="[ 'tag', props.tab.class ]">@{{ props.tab.tag }}</span>
                                </span>
                                <tab :id="{ label: 'routes', class: 'is-warning', tag: 'req' }">
                                    <div class="columns">
                                        <div class="column is-half is-offset-one-quarter">
                                            @include('examples.partials.routes')
                                        </div>
                                    </div>
                                </tab>
                                <tab :id="{ label: 'model', class: 'is-warning', tag: 'req' }">
                                    <div class="columns">
                                        <div class="column is-half is-offset-one-quarter">
                                            @include('examples.partials.model')
                                        </div>
                                    </div>
                                </tab>
                            <tab :id="{ label: 'controller', class: 'is-warning', tag: 'req' }"
                                    active>
                                    <div class="columns">
                                        <div class="column is-half is-offset-one-quarter">
                                            @include('examples.partials.controller')
                                        </div>
                                    </div>
                                </tab>
                                <tab :id="{ label: 'template', class: 'is-warning', tag: 'req' }">
                                    <div class="columns">
                                        <div class="column is-half is-offset-one-quarter">
                                            @include('examples.partials.template')
                                        </div>
                                    </div>
                                </tab>
                                <tab :id="{ label: 'enum', class: 'is-success', tag: 'opt' }">
                                    <div class="columns">
                                        <div class="column is-half is-offset-one-quarter">
                                            @include('examples.partials.enum')
                                        </div>
                                    </div>
                                </tab>
                            </tabs>
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
        <script src="{{ mix('js/example.js') }}"></script>

    </body>
</html>
