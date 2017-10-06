<template>
    <div class="box box-primary" v-cloak>

        <div class="box-header">
            <div class="box-title">
                {{ i18n["Financial Data"] }}

            </div>
        </div>

        <div class="box-body" style="">

            <div class="row">
                <div class="col-md-6">
                    <address >

                        <div v-for="item in details.companyData ">
                            <strong><span v-html="item.key"></span></strong> <span v-html="item.value"></span><br>
                        </div>

                    </address>
                </div>

                <div class="col-md-6">
                    <address >
                        <div v-for="item in details.caenData ">
                            <strong><span v-html="item.key"></span></strong> <span v-html="item.value"></span><br>
                        </div>

                    </address>
                </div>
            </div>

            <hr>

            <div class="row">
                <div class="col-md-12">
                    <div class="row">

                        <div class="col-md-3" v-for="item in details.financialData">
                            <address >
                                {{ i18n["Year / Month"] }}: <strong> <span v-html="item.year + '/' + item.month"></span></strong><br>

                                <div v-for="subitem in item.details ">
                                    <strong><span v-html="subitem.key"></span></strong> <span v-html="subitem.value"></span><br>
                                </div>

                            </address>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        details: {
            type: Object,
            default: function () {
                return {
                    a: 0
                };
            }
        },
        i18n: {
            type: Object,
            default: function () {
                return {};
            }
        }
    }
}
</script>

<style>
</style>