<template>
    <i class="fa fa-times pull-right btn-box-tool input-clear"
        @click="clearInput">
    </i>
</template>

<script>

    export default {
        props: {
            element: {
                type: String,
                required: true
            }
        },
        methods: {
            clearInput: function() {
                $(this.element).val('').change();
            }
        }
    }

</script>

<style>

    .input-clear {
        cursor: pointer;
    }

</style>