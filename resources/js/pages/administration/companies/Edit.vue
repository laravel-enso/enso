<template>

    <div class="columns is-centered">
        <div class="column is-three-quarters is-full-touch">
            <enso-form class="box has-background-light raises-on-hover animated fadeIn"
                @loaded="companyId = $refs.form.routeParam('company')"
                ref="form">
                <template slot="mandatary_id"
                    slot-scope="{ field, errors, i18n }">
                    <select-field :errors="errors"
                        :field="field"
                        :i18n="i18n"
                        :params="{ company_id: companyId }"/>
                </template>
            </enso-form>

            <accessories v-if="companyId">
                <template slot-scope="{ count }">
                    <tab keep-alive
                        id="People">
                        <people controls
                            :id="companyId"
                            @update="$set(count, 'people', $refs.people.count)"
                            ref="people"/>
                    </tab>
                    <tab keep-alive
                        id="Addresses">
                        <addresses controls
                            type="LaravelEnso\Companies\app\Models\Company"
                            :id="companyId"
                            @update="$set(count, 'addresses', $refs.addresses.count)"
                            ref="addresses"/>
                    </tab>
                    <tab keep-alive
                        id="Comments">
                        <comments controls
                            type="LaravelEnso\Companies\app\Models\Company"
                            :id="companyId"
                            @update="$set(count, 'comments', $refs.comments.count)"
                            ref="comments"/>
                    </tab>
                    <tab keep-alive
                        id="Discussions">
                        <discussions controls
                            type="LaravelEnso\Companies\app\Models\Company"
                            :id="companyId"
                            @update="$set(count, 'discussions', $refs.discussions.count)"
                            ref="discussions"/>
                    </tab>
                    <tab keep-alive
                        id="Documents">
                        <documents controls
                            type="LaravelEnso\Companies\app\Models\Company"
                            :id="companyId"
                            @update="$set(count, 'documents', $refs.documents.count)"
                            ref="documents"/>
                    </tab>
                </template>
            </accessories>
        </div>
    </div>

</template>

<script>

import Accessories from '../../../components/enso/bulma/Accessories.vue';
import Tab from '../../../components/enso/bulma/Tab.vue';
import Addresses from '../../../components/enso/addresses/Addresses.vue';
import Comments from '../../../components/enso/comments/Comments.vue';
import Discussions from '../../../components/enso/discussions/Discussions.vue';
import Documents from '../../../components/enso/documents/Documents.vue';
import People from '../../../components/enso/companies/People.vue';
import EnsoForm from '../../../components/enso/vueforms/EnsoForm.vue';
import SelectField from '../../../components/enso/vueforms/fields/SelectField.vue';

export default {
    components: {
        EnsoForm,
        SelectField,
        Accessories,
        Tab,
        Addresses,
        Comments,
        Discussions,
        Documents,
        People,
    },

    data: () => ({
        companyId: null,
    }),
};

</script>
