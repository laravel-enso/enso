const ContactsIndex = () => import('../../pages/administration/contacts/Index.vue');

export default {
    name: 'core.contacts.index',
    path: 'contacts',
    component: ContactsIndex,
    meta: {
        breadcrumb: 'contacts',
        title: 'Contacts Index',
    },
};
