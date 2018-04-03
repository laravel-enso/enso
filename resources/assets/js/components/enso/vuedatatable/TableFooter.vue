<template>

    <tfoot>
        <tr>
            <td v-if="template.crtNo"></td>
            <td class="has-text-centered has-text-weight-bold"
                v-if="
                    template.columns[0].meta.visible
                    && !template.columns[0].meta.hidden
                ">
                {{ i18n("Total") }}
            </td>
            <td :class="[
                'has-text-weight-bold',
                template.columns[i].money
                    ? 'is-money'
                    : 'has-text-centered'
            ]"
                v-for="i in template.columns.length - 1"
                :key="i"
                v-if="
                    template.columns[i].meta.visible
                    && !template.columns[i].meta.hidden
                    && !template.columns[i].meta.rogue
                ">
                <span v-if="template.columns[i].meta.total">
                    <span v-if="template.columns[i].money">
                        {{ body.total[template.columns[i].name] }}
                    </span>
                    <span :class="template.align"
                        v-else>
                        {{ numberFormat(body.total[template.columns[i].name]) }}
                    </span>
                </span>
            </td>
            <td v-if="template.actions"></td>
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

<style>
    .is-money {
        text-align: right;
        font-family: monospace;
    }
</style>

