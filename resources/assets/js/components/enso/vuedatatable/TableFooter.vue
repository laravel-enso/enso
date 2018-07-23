<template>

    <tfoot>
        <tr>
            <td v-if="template.crtNo"/>
            <td class="has-text-centered is-bold"
                v-if="
                    template.columns[0].meta.visible
                    && !template.columns[0].meta.hidden
                ">
                {{ i18n("Total") }}
            </td>
            <td :class="[
                    'is-bold',
                    { 'is-money' : visibleColumns[i].money },
                    visibleColumns[i].align
                        ? template.aligns[visibleColumns[i].align]
                        : template.align
                ]"
                v-for="i in visibleColumns.length - 1"
                :key="i"
                v-if="
                    visibleColumns[i].meta.visible
                    && !visibleColumns[i].meta.hidden
                    && !visibleColumns[i].meta.rogue
                ">
                <span v-if="visibleColumns[i].meta.total">
                    {{
                        visibleColumns[i].money
                            ? body.total[visibleColumns[i].name]
                            : numberFormat(body.total[visibleColumns[i].name])
                    }}
                </span>
            </td>
            <td v-if="template.actions"/>
        </tr>
    </tfoot>

</template>

<script>

export default {
    name: 'TableFooter',

    props: {
        template: {
            type: Object,
            required: true,
        },
        body: {
            type: Object,
            required: true,
        },
        i18n: {
            type: Function,
            required: true,
        },
    },

    computed: {
        visibleColumns() {
            return this.template.columns
                .filter(({ meta }) => !meta.rogue);
        },
    },

    methods: {
        numberFormat(value) {
            const x = value.toString().split('.');
            let x1 = x[0];
            const x2 = x.length > 1 ? `.${x[1]}` : '';
            const rgx = /(\d+)(\d{3})/;

            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1,$2');
            }

            return x1 + x2;
        },
    },
};

</script>

<style scoped>
    .is-money {
        font-family: monospace;
    }
</style>

