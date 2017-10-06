<template>

    <modal :show="show"
        header
        @cancel-action="$emit('closed')"
        @commit-action="save()"
        :container-style="{'max-width': '350px'}">
        <span slot="header">
            <i class="fa fa-address-card-o"></i>
            <span v-if="editMode">{{ labels.edit }}</span>
            <span v-else>{{ labels.create }}</span>
        </span>
        <span slot="body">
            <div class="form-group" :class="{'has-error' : errors.first_name}">
                <label>{{ labels.firstName }}</label>
                <small class="text-danger" style="float:right;">
                    {{ errors.first_name ? errors.first_name[0] : null }}
                </small>
                <input type="text"
                    v-focus
                    class="form-control text-center margin-bottom-xs"
                    v-model="contact.first_name">
            </div>
            <div class="form-group" :class="{'has-error' : errors.last_name}">
                <label>{{ labels.lastName }}</label>
                <small class="text-danger" style="float:right;">
                    {{ errors.last_name ? errors.last_name[0] : null }}
                </small>
                <input type="text"
                    class="form-control text-center margin-bottom-xs"
                    v-model="contact.last_name">
            </div>
            <div class="form-group" :class="{'has-error' : errors.email}">
                <label>{{ labels.email }}</label>
                <small class="text-danger" style="float:right;">
                    {{ errors.email ? errors.email[0] : null }}
                </small>
                <input type="text"
                    class="form-control text-center margin-bottom-xs"
                    v-model="contact.email">
            </div>
            <div class="form-group" :class="{'has-error' : errors.phone}">
                <label>{{ labels.phone }}</label>
                <small class="text-danger" style="float:right;">
                    {{ errors.phone ? errors.phone[0] : null }}
                </small>
                <input type="text"
                    class="form-control text-center margin-bottom-xs"
                    v-model="contact.phone">
            </div>
            <div class="form-group" :class="{'has-error' : errors.obs}">
                <label>{{ labels.observations }}</label>
                <small class="text-danger" style="float:right;">
                    {{ errors.obs ? errors.obs[0] : null }}
                </small>
                <input type="text"
                    class="form-control text-center margin-bottom-xs"
                    v-model="contact.obs">
            </div>
            <div class="form-group">
                <label>{{ labels.isActive }}</label>
                <input :id="'is_active' + _uid"
                    class="toggle form-control"
                    type="checkbox"
                    v-model="contact.is_active">
                <label :for="'is_active' + _uid" class="toggle-input"><i></i></label>
            </div>
        </span>
    </modal>

</template>

<script>

    export default {
        props: {
            show: {
                type: Boolean,
                required: true
            },
            id: {
                default: null
            },
            type: {
                type: String,
                default: ""
            },
            contact: {
                type: Object,
                required: true
            }
        },

        computed: {
            editMode() {
                return this.contact.id ? true : false;
            }
        },

        data() {
            return {
                errors: {},
                labels: Store.labels
            };
        },

        methods: {
            save() {
                return this.editMode ? this.update() : this.store();
            },
            store() {
                axios.post('/core/contacts', {contact: this.contact, id: this.id, type: this.type}).then(response => {
                    this.$emit('store', response.data);
                }).catch(error => {
                    this.reportEnsoException(error);
                    if (error.response.data.errorBag) {
                        this.errors = error.response.data.errorBag;
                    }
                });
            },
            update(index) {
                axios.patch('/core/contacts/' + this.contact.id, {contact: this.contact, id: this.id, type: this.type}).then(response => {
                    this.$emit('update', this.contact);
                }).catch(error => {
                    this.reportEnsoException(error);
                    if (error.response.data.errorBag) {
                        this.errors = error.response.data.errorBag;
                    }
                });
            },
        }
    }

</script>