<template>
    <div class="row">
        <div :class="columnsClass" v-for="column in grid">
            <div v-for="(element, index) in column">
                <chart v-if="element.type === 'chart'"
                    :type="element.data.type"
                    :source="element.data.source"
                    :params="params"
                    :ref="element.type + '-' + index"
                    :collapsed="element.data.collapsed">
                </chart>
                <data-table v-if="element.type === 'table'"
                    :source="element.data.source"
                    :ref="element.type + '-' + index"
                    :id="element.type + '-' + index">
                    <span slot="data-table-title">Cheltuieli cu termen depasit</span>
                </data-table>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            params: {
                type: Object
            }
        },

        computed: {
            columnsClass() {
                return 'col-md-' + (12 / this.grid.length);
            }
        },

        data() {
            return {
                labels: null,
                grid: Store.user.preferences.local.dashboard.grid,
            }
        }
    }

</script>