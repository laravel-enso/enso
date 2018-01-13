## Enso Changelog

### 2.0.32

Package updates
...

### 2.0.30

refactors the addresses routes

To upgrade do the following steps:
* update the migration batch number for `2017_12_07_150655_create_structure_for_addresses` to the latest batch + 1
* run `php artisan migrate:rollback`
* run `php artisan migrate`
* ensure that all the roles have the permissions set correctly for addresses
* manually remove the addresses.list permission

### 2.0.29
Various small fixes and cleanup for addresses

Upgraded the contacts component to use the vue-form. New routes and permissions 
were added and contacts structure migration has been changed (new edit and create permissions) 

To upgrade, the following steps are necessary:
* edit the migrations table record 2017_01_01_148000_create_structure_for_contacts, and set a high batch, say 999
* execute once `php artisan migrate:rollback` (so only THAT migration will be rolled back)
* execute `php artisan migrate`, so the new permissions will be inserted
* ensure that all the roles have the permissions set correctly for contacts

### 2.0.28

Upgrades the ios-switch to a new vue-switch component that is hosted in the formbuilder package

### 2.0.27
Addresses module is now included by default and is available in the owner edit page  
Packages update

### 2.0.26
Improved VueForm
Packages update

### 2.0.24

Fixes login error toastr
Packages update

...

### 2.0.20

#### News

Finally decided to start keeping a changelog for the main project.

#### Improvements

- pages, routes and store are not under `enso` subfolder anymore in order to maintain coherence when extending the project
- dynamic loading for store and routes via `storeImporter` and `routeImporter` helper functions
- lazy loading for routes
- removed the old prototypes and refactored the code accordingly
- visual refactor for `VueForm`, `VueSelect`, `Comments` and `Documents`. `Contacts` and `Addresses` will follow shortly
- improved the Formbuilder with full validation of the template
- new component: `Popup`
- major cleanup of all components, libs, imports
- jQuery is now used only in `Comments/Inputor.vue` until we find a js only lib to replace at.js

#### Improvements

- under `assets/js`, for `pages`, `routes` and `store` the intermediate `enso` folder was removed, in order to maintain coherence when extending the project
- dynamic loading for store and routes via `storeImporter` and `routeImporter` helper functions
- lazy loading for routes
- removes the old `modules/enso/prototypes` and refactores the code accordingly
- visual refactor for `VueForm`, `VueSelect`, `Comments` and `Documents`. `Contacts` and `Addresses` will follow shortly
- improved the Formbuilder with full validation of the template
- new component: `Popup`
- major cleanup of all components, libs, imports
- jQuery is now used only in `Comments/Inputor.vue` until we find a js only lib to replace `at.js`

