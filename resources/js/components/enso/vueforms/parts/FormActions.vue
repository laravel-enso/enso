<template>

    <div class="actions">
        <a :class="['button', data.actions.back.button.class]"
            @click="$router.go(-1)"
            v-if="data.actions.back">
            <span class="is-hidden-mobile">
                {{ i18n('Back') }}
            </span>
            <span class="icon">
                <fa :icon="data.actions.back.button.icon"/>
            </span>
            <span class="is-hidden"/>
        </a>
        <a :class="['button', data.actions.destroy.button.class]"
            :disabled="data.actions.destroy.forbidden"
            @click="modal = !data.actions.destroy.forbidden"
            v-if="data.actions.destroy">
            <span class="is-hidden-mobile">
                {{ i18n(data.actions.destroy.button.label) }}
            </span>
            <span class="icon">
                <fa :icon="data.actions.destroy.button.icon"/>
            </span>
            <span class="is-hidden"/>
        </a>
        <a :class="['button', data.actions.show.button.class]"
            :disabled="data.actions.show.forbidden"
            @click="!data.actions.show.forbidden ? show() : null"
            v-if="data.actions.show">
            <span class="is-hidden-mobile">
                {{ i18n(data.actions.show.button.label) }}
            </span>
            <span class="icon">
                <fa :icon="data.actions.show.button.icon"/>
            </span>
            <span class="is-hidden"/>
        </a>
        <a :class="['button', data.actions.create.button.class]"
            :disabled="data.actions.create.forbidden"
            @click="!data.actions.create.forbidden ? create() : null"
            v-if="data.actions.create">
            <span class="is-hidden-mobile">
                {{ i18n(data.actions.create.button.label) }}
            </span>
            <span class="icon">
                <fa :icon="data.actions.create.button.icon"/>
            </span>
            <span class="is-hidden"/>
        </a>
        <slot name="actions"/>
        <button :class="[
                'button is-pulled-right',
                data.actions.store.button.class, { 'is-loading': loading }
            ]"
            :disabled="data.actions.store.forbidden || errors.any()"
            type="submit"
            v-if="data.actions.store">
            <span class="is-hidden-mobile">
                {{ i18n(data.actions.store.button.label) }}
            </span>
            <span class="icon">
                <fa :icon="data.actions.store.button.icon"/>
            </span>
            <span class="is-hidden"/>
        </button>
        <button :class="[
                'button is-pulled-right',
                data.actions.update.button.class, { 'is-loading': loading }
            ]"
            :disabled="data.actions.update.forbidden || errors.any()"
            type="submit"
            v-if="data.actions.update">
            <span class="is-hidden-mobile">
                {{ i18n(data.actions.update.button.label) }}
            </span>
            <span class="icon">
                <fa :icon="data.actions.update.button.icon"/>
            </span>
            <span class="is-hidden"/>
        </button>
        <div class="is-clearfix"/>
        <modal :i18n="i18n"
            :message="data.actions.destroy.button.message"
            :show="modal"
            @close="modal = false"
            @commit="destroy()"
            v-if="modal && data.actions.destroy"/>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faEye, faPlus, faCheck, faArrowLeft }
    from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal.vue';

library.add(faTrashAlt, faEye, faPlus, faCheck, faArrowLeft);

export default {
    name: 'FormActions',

    components: { Modal },

    props: {
        data: {
            type: Object,
            required: true,
        },
        formData: {
            type: Function,
            required: true,
        },
        errors: {
            type: Object,
            required: true,
        },
        i18n: {
            type: Function,
            required: true,
        },
        params: {
            type: Object,
            default: null,
        },
    },

    data: () => ({
        modal: false,
        loading: false,
    }),

    computed: {
        path() {
            return this.data.method === 'post'
                ? this.data.actions.store.path
                : this.data.actions.update.path;
        },
    },

    methods: {
        show() {
            const { show } = this.data.actions;

            this.$emit('show');

            this.$router.push({
                name: show.route,
                params: this.data.routeParams,
            });
        },
        create() {
            this.$emit('create');

            this.$router.push({
                name: this.data.actions.create.route,
                params: this.data.routeParams,
            });
        },
        submit() {
            this.loading = true;

            axios[this.data.method](this.path, this.formData())
                .then(({ data }) => {
                    this.loading = false;
                    this.$toastr.success(data.message);
                    this.$emit('submit');

                    if (data.redirect) {
                        this.$router.push({
                            name: data.redirect,
                            params: { ...data.param, ...this.data.routeParams },
                        });
                    }
                }).catch((error) => {
                    const { status, data } = error.response;
                    this.loading = false;

                    if (status === 422) {
                        this.errors.set(data.errors);
                        this.$nextTick(() => this.$emit('focus-error'));
                        return;
                    }

                    this.handleError(error);
                });
        },
        destroy() {
            this.modal = false;
            this.loading = true;

            axios.delete(this.data.actions.destroy.path)
                .then(({ data }) => {
                    this.loading = false;
                    this.$toastr.success(data.message);
                    this.$emit('destroy');

                    if (data.redirect) {
                        this.$router.push({
                            name: data.redirect,
                            params: this.data.routeParams,
                        });
                    }
                }).catch((error) => {
                    this.loading = false;
                    this.handleError(error);
                });
        },
    },
};

</script>
