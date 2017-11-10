<template>

    <modal :show="show"
        card
        @commit-action="save()">
        <span slot="header">
            <span class="icon">
                <i class="fa fa-address-card-o"></i>
            </span>
            <span v-if="editMode">{{ __('Edit') }}</span>
            <span v-else>{{ __('Create') }}</span>
        </span>
        <span slot="body">
            <div class="field">
                <label class="label">{{ __('First Name') }}</label>
                <p v-if="errors.first_name"
                    class="help is-danger is-pulled-right">
                    {{ errors.first_name[0] }}
                </p>
                <div class="control has-icons-right">
                    <input class="input"
                        :class="{ 'is-danger': errors.first_name }"
                        v-model="contact.first_name"
                        type="text">
                    <span class="icon is-small is-right"
                        v-if="errors.first_name">
                        <i class="fa fa-warning"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">{{ __('Last Name') }}</label>
                <p v-if="errors.last_name"
                    class="help is-danger is-pulled-right">
                    {{ errors.last_name[0] }}
                </p>
                <div class="control has-icons-right">
                    <input class="input"
                        :class="{ 'is-danger': errors.last_name }"
                        v-model="contact.last_name"
                        type="text">
                    <span class="icon is-small is-right"
                        v-if="errors.last_name">
                        <i class="fa fa-warning"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">{{ __('Email') }}</label>
                <p v-if="errors.email"
                    class="help is-danger is-pulled-right">
                    {{ errors.email[0] }}
                </p>
                <div class="control has-icons-right">
                    <input class="input"
                        :class="{ 'is-danger': errors.email }"
                        v-model="contact.email"
                        type="text">
                    <span class="icon is-small is-right"
                        v-if="errors.email">
                        <i class="fa fa-warning"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">{{ __('Phone') }}</label>
                <p v-if="errors.phone"
                    class="help is-danger is-pulled-right">
                    {{ errors.phone[0] }}
                </p>
                <div class="control has-icons-right">
                    <input class="input"
                        :class="{ 'is-danger': errors.phone }"
                        v-model="contact.phone"
                        type="text">
                    <span class="icon is-small is-right"
                        v-if="errors.phone">
                        <i class="fa fa-warning"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">{{ __('Observations') }}</label>
                <p v-if="errors.obs"
                    class="help is-danger is-pulled-right">
                    {{ errors.obs[0] }}
                </p>
                <div class="control has-icons-right">
                    <input class="input"
                        :class="{ 'is-danger': errors.obs }"
                        v-model="contact.obs"
                        type="text">
                    <span class="icon is-small is-right"
                        v-if="errors.obs">
                        <i class="fa fa-warning"></i>
                    </span>
                </div>
            </div>
            <div class="field">
                <label class="label">{{ __('Active') }}</label>
                <p v-if="errors.is_active"
                    class="help is-danger is-pulled-right">
                    {{ errors.is_active[0] }}
                </p>
                <span>
                    <input id="contact_is_active"
                        class="toggle"
                        v-model="contact.is_active"
                        type="checkbox">
                    <label for="contact_is_active" class="toggle-input"><i></i></label>
                </span>
            </div>
        </span>
        <span slot="footer">
            <button class="button"
                @click="$emit('closed')">
                {{ __("Cancel") }}
            </button>
            <button class="button is-success"
                @click="save()">
                {{ __("Save") }}
            </button>
        </span>
    </modal>

</template>

<script>

import { mapGetters } from 'vuex';
import Modal from '../bulma/Modal.vue';

export default {
    name: 'ContactForm',

    components: { Modal },

    props: {
        show: {
            type: Boolean,
            required: true,
        },
        id: {
            default: null,
        },
        type: {
            type: String,
            default: '',
        },
        contact: {
            type: Object,
            required: true,
        },
    },

    computed: {
        ...mapGetters('locale', ['__']),
        editMode() {
            return !!this.contact.id;
        },
    },

    data() {
        return {
            errors: {},
        };
    },

    methods: {
        save() {
            return this.editMode ? this.update() : this.store();
        },
        store() {
            axios.post(route('core.contacts.store', [], false), {
                contact: this.contact, id: this.id, type: this.type,
            }).then(({ data }) => {
                this.$emit('store', data);
            }).catch((error) => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }

                this.handleError(error);
            });
        },
        update() {
            axios.patch(route('core.contacts.update', this.contact.id, false), {
                contact: this.contact, id: this.id, type: this.type,
            }).then(() => {
                this.$emit('update', this.contact);
            }).catch((error) => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }

                this.handleError(error);
            });
        },
    },
};

</script>
