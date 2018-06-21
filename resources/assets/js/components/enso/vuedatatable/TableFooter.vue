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
                { 'is-money' : template.columns[i].money },
                template.columns[i].align
                    ? template.aligns[template.columns[i].align]
                    : template.align
            ]"
                v-for="i in template.columns.length - 1"
                :key="i"
                v-if="
                    template.columns[i].meta.visible
                    && !template.columns[i].meta.hidden
                    && !template.columns[i].meta.rogue
                ">
                <span v-if="template.columns[i].meta.total">
                    {{
                        template.columns[i].money
                            ? body.total[template.columns[i].name]
                            : numberFormat(body.total[template.columns[i].name])
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

