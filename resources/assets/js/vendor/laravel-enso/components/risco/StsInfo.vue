<template>
    <div class="box box-primary" v-cloak>

        <div class="box-header">
            <div class="box-title">
                {{i18n["Status Data"]}}

            </div>
        </div>

        <div class="box-body" style="">

            <div class="row">
                <div class="col-md-6">
                    <address >
                        <div v-for="item in details">
                            <strong><span v-html="item.key"></span></strong> <span v-html="item.value"></span><br>
                        </div>
                    </address>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        details: {
            type: Array,
            default: function () {
                return [];
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