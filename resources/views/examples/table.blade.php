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
                <div class="columns is-multiline">
                    <div class="column is-half">
                        <pre class="is-paddingless"
                            v-hljs>
                            <code class="js">
vue-table path="/examples/table/init"
    :custom-render="customRender"
    :filters="filters"
    :intervals="intervals"
    @excel="$toastr.info('You just pressed Excel', 'Event')"
    @create="$toastr.success('You just pressed Create', 'Event')"
    @edit="$toastr.warning('You just pressed Edit', 'Event')"
    @destroy="$toastr.error('You just pressed Delete', 'Event')"
    id="example"
vue-table
                            </code>
                        </pre>
                        <pre class="is-paddingless"
                            v-hljs>
                            <code class="js">
vue-filter :options="activeOptions"
    icons
    title="Active"
    v-model="filters.examples.is_active"
vue-filter
                            </code>
                        </pre>
                        <pre class="is-paddingless"
                            v-hljs>
                            <code class="js">
vue-select-filter title="Seniority"
    :options="seniorityOptions"
    v-model="filters.examples.seniority"
vue-select-filter
                            </code>
                        </pre>
                        <pre class="is-paddingless"
                            v-hljs>
                            <code class="js">
date-interval-filter
    title="Hired Between"
    :min="intervals.examples.hired_at.min"
    @update-min="intervals.examples.hired_at.min = $event"
    :max="intervals.examples.hired_at.max"
    @update-max="intervals.examples.hired_at.max = $event"
date-interval-filter
                            </code>
                        </pre>
                        <pre class="is-paddingless"
                            v-hljs>
                            <code class="js">
interval-filter
    title="Salary"
    type="number"
    :min="intervals.examples.salary.min"
    @update-min="intervals.examples.salary.min = $event"
    :max="intervals.examples.salary.max"
    @update-max="intervals.examples.salary.max = $event"
interval-filter
                            </code>
                        </pre>
                        <pre class="is-paddingless"
                            v-hljs>
                            <code class="json">
// exampleTable.json
{
    "routePrefix": "examples.table",
    "readSuffix": "data",
    "writeSuffix": null,
    "name": "Enso Vue Datatable Example",
    "icon": ["fab", "vuejs"],
    "crtNo": true,
    "buttons": [
        {
            "type": "global",
            "icon": "file-excel",
            "class": "is-outlined",
            "event": "excel",
            "label": "Excel"
        },
        {
            "type": "global",
            "icon": "plus",
            "class": "is-success",
            "event": "create",
            "label": "Create"
        },
        {
            "type": "row",
            "icon": "pencil-alt",
            "class": "is-warning",
            "event": "edit"
        },
        {
            "type": "row",
            "icon": "trash-alt",
            "class": "is-danger",
            "event": "destroy",
            "confirmation" : true,
            "message" : "This is you custom confirmation. Are you sure?"
        }
    ],
    "columns": [
        {
            "label": "Name",
            "name": "name",
            "data": "examples.name",
            "meta": [
                "searchable",
                "sortable"
            ]
        }, {
            "label": "Position",
            "name": "position",
            "data": "examples.position",
            "meta": [
                "searchable",
                "sortable"
            ]
        }, {
            "label": "Seniority",
            "name": "seniority",
            "data": "examples.seniority",
            "meta": [
                "sortable"
            ]
        }, {
            "label": "Project",
            "name": "project",
            "data": "examples.project",
            "meta": [
                "searchable",
                "sortable",
                "render"
            ]
        }, {
            "label": "Salary",
            "name": "salary",
            "data": "examples.salary",
            "meta": [
                "searchable",
                "sortable",
                "total"
            ]
        }, {
            "label": "Taxes",
            "name": "taxes",
            "data": "examples.taxes",
            "meta": [
                "searchable",
                "sortable",
                "total"
            ]
        }, {
            "label": "Active",
            "name": "is_active",
            "data": "examples.is_active",
            "meta": [
                "boolean",
                "sortable"
            ]
        }, {
            "label": "Hired Since",
            "name": "hired_at",
            "data": "examples.hired_at",
            "meta": [
                "date",
                "sortable"
            ]
        }
    ]
}
                            </code>
                        </pre>
                    </div>
                    <div class="column is-half">
                        <pre class="is-paddingless"
                            v-hljs>
                            <code class="php">
// routes/web.php
Route::namespace('Examples')
    ->prefix('examples')->as('examples.')
    ->group(function () {
        Route::view('table', 'examples.table')->name('table');

        Route::prefix('table')->as('table.')
            ->group(function () {
                Route::get('init', 'TableController@init')
                    ->name('init');
                Route::get('data', 'TableController@data')
                    ->name('data');
            });
    });
                            </code>
                        </pre>
                        <pre class="is-paddingless"
                            v-hljs>
                            <code>
// Example.php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Example extends Model
{
    protected $casts = ['is_active' => 'boolean'];
}

                            </code>
                        </pre>
                        <pre class="is-paddingless"
                            v-hljs>
                            <code class="php">
// TableController.php
namespace App\Http\Controllers\Examples;

use App\Example;
use App\Http\Controllers\Controller;
use LaravelEnso\VueDatatable\app\Traits\Datatable;

class TableController extends Controller
{
    use Datatable;

    private const Template = __DIR__.'/exampleTable.json';

    public function query()
    {
        return Example::select(\DB::raw(
            'id as "dtRowId", name, position, seniority, project,
            salary, taxes, is_active, hired_at'
        ));
    }
}
                            </code>
                        </pre>
                        <pre class="is-paddingless"
                            v-hljs>
                            <code class="php">
// example.js
import Vue from 'vue';
import axios from 'axios';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faVuejs } from '@fortawesome/fontawesome-free-brands/shakable.es';
import { faCheck, faTimes } from '@fortawesome/fontawesome-free-solid/shakable.es';
import store from './store';
import VueTable from './components/enso/vuedatatable/VueTable.vue';
import VueFilter from './components/enso/bulma/VueFilter.vue';
import VueSelectFilter from './components/enso/bulma/VueSelectFilter.vue';
import IntervalFilter from './components/enso/bulma/IntervalFilter.vue';
import DateIntervalFilter from './components/enso/bulma/DateIntervalFilter.vue';
import Toastr from './components/enso/bulma/toastr';
import './modules/enso/directives/hljs';

import './modules/enso/mixins/errorHandler';

require('highlight.js/styles/atom-one-light.css');

fontawesome.library.add(faVuejs, faCheck, faTimes);

Vue.component('fa', FontAwesomeIcon);

Vue.use(Toastr, {
    position: 'right',
    duration: 3000,
    closeButton: true,
});

window.axios = axios;

new Vue({
    store,

    components: {
        VueTable, VueFilter, VueSelectFilter,
        IntervalFilter, DateIntervalFilter,
    },

    data() {
        return {
            activeOptions: [
                { value: true, label: 'check', class: 'has-text-success' },
                { value: false, label: 'times', class: 'has-text-danger' },
            ],
            seniorityOptions: {
                1: 'Assistant',
                2: 'Associate',
                3: 'Staff Member',
                4: 'Senior',
                5: 'Partner',
            },
            filters: {
                examples: {
                    is_active: null,
                    seniority: null,
                },
            },
            intervals: {
                examples: {
                    hired_at: {
                        min: null,
                        max: null,
                        dbDateFormat: 'Y-m-d',
                    },
                    salary: {
                        min: null,
                        max: null,
                    },
                },
            },
        };
    },

    methods: {

        customRender(row, column) {
            switch (column.name) {
            case 'project':
                if (row.project === 'Enso SPA') return `<span class="tag is-table-tag is-success">${row[column.name]}</span>`;

                return row.project === 'AdminLTE'
                    ? `<span class="tag is-table-tag is-info">${row[column.name]}</span>`
                    : `<span class="tag is-table-tag is-danger">${row[column.name]}</span>`;
            default:
                this.$toastr.warning(`render for column ${column.name} is not defined.`);
                return this.row[column.name];
            }
        },
    },
}).$mount('#app');
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>

        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
        <script src="/js/example.js"></script>

    </body>
</html>
