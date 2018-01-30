<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>

        <link rel="icon" href="/favicon.ico"/>
        <link id="theme" rel="stylesheet" type="text/css" href="/themes/clean/bulma.min.css">
        <link href="{{ mix('css/enso.css') }}" rel="stylesheet" type="text/css"/>

    </head>
    <body>

        <div id="app">
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
                        <vue-filter :options="activeOptions"
                            icons
                            title="Active"
                            v-model="filters.examples.is_active">
                        </vue-filter>
                    </div>
                    <div class="column is-one-fifth">
                        <vue-select-filter title="Seniority"
                            :options="seniorityOptions"
                            v-model="filters.examples.seniority">
                        </vue-select-filter>
                    </div>
                    <div class="column is-two-fifths">
                        <date-interval-filter
                            title="Hired Between"
                            :min="intervals.examples.hired_at.min"
                            @update-min="intervals.examples.hired_at.min = $event"
                            :max="intervals.examples.hired_at.max"
                            @update-max="intervals.examples.hired_at.max = $event">
                        </date-interval-filter>
                    </div>
                    <div class="column is-one-fifth">
                        <interval-filter
                            title="Salary"
                            type="number"
                            :min="intervals.examples.salary.min"
                            @update-min="intervals.examples.salary.min = $event"
                            :max="intervals.examples.salary.max"
                            @update-max="intervals.examples.salary.max = $event">
                        </interval-filter>
                    </div>
                </div>
                <vue-table path="/examples/table/init"
                    :custom-render="customRender"
                    :filters="filters"
                    :intervals="intervals"
                    @excel="$toastr.info('You just pressed Excel', 'Event')"
                    @create="$toastr.success('You just pressed Create', 'Event')"
                    @edit="$toastr.warning('You just pressed Edit', 'Event')"
                    @destroy="$toastr.error('You just pressed Delete', 'Event')"
                    id="example">
                </vue-table>

                <tabs alignment="centered">
                    <tab-panel id="front end">
                        <tabs alignment="centered">
                            <tab-panel id="vue-table">
                                <div class="columns">
                                    <div class="column is-half is-offset-one-quarter">
                                        @include('examples.partials.vueTable')
                                    </div>
                                </div>
                            </tab-panel>
                            <tab-panel id="vue-filter">
                                <div class="columns">
                                    <div class="column is-half is-offset-one-quarter">
                                        @include('examples.partials.vueFilter')
                                    </div>
                                </div>
                            </tab-panel>
                            <tab-panel id="vue-select-filter">
                                <div class="columns">
                                    <div class="column is-half is-offset-one-quarter">
                                        @include('examples.partials.vueSelectFilter')
                                    </div>
                                </div>
                            </tab-panel>
                            <tab-panel id="date-interval-filter">
                                <div class="columns">
                                    <div class="column is-half is-offset-one-quarter">
                                        @include('examples.partials.dateIntervalFilter')
                                    </div>
                                </div>
                            </tab-panel>
                            <tab-panel id="interval-filter">
                                <div class="columns">
                                    <div class="column is-half is-offset-one-quarter">
                                        @include('examples.partials.intervalFilter')
                                    </div>
                                </div>
                            </tab-panel>
                            <tab-panel id="example.js">
                                <div class="columns">
                                    <div class="column is-three-fifths is-offset-one-fifth">
                                        @include('examples.partials.exampleJs')
                                    </div>
                                </div>
                            </tab-panel>
                        </tabs>
                    </tab-panel>
                    <tab-panel id="back end">
                        <tabs alignment="centered">
                            <tab-panel id="routes">
                                <div class="columns">
                                    <div class="column is-half is-offset-one-quarter">
                                        @include('examples.partials.routes')
                                    </div>
                                </div>
                            </tab-panel>
                            <tab-panel id="model">
                                <div class="columns">
                                    <div class="column is-half is-offset-one-quarter">
                                        @include('examples.partials.model')
                                    </div>
                                </div>
                            </tab-panel>
                            <tab-panel id="controller">
                                <div class="columns">
                                    <div class="column is-half is-offset-one-quarter">
                                        @include('examples.partials.controller')
                                    </div>
                                </div>
                            </tab-panel>
                            <tab-panel id="template">
                                <div class="columns">
                                    <div class="column is-half is-offset-one-quarter">
                                        @include('examples.partials.template')
                                    </div>
                                </div>
                            </tab-panel>
                        </tabs>
                    </tab-panel>
                </tabs>
            </div>
        </div>

        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
        <script src="/js/example.js"></script>

    </body>
</html>
