const CompanyEdit = () => import('../../../pages/administration/companies/Edit.vue');

export default {
    name: 'administration.companies.edit',
    path: ':id/edit',
    component: CompanyEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Company',
    },
};
