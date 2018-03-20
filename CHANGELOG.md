## Laravel Enso's Changelog

### 2.4.0
Refactors the enso.js file into dedicated modules.
Adds to the Vue prototype the `__` helper from localisation. Refactors the whole project to use the new helper - removes the mapGetters(['locale/__'])
Improves VueTable, VueForm and VueSelect to autodetect if the new `__` helper is available. This way we don't need to pass the helper every time.
Prepares the FE for the new auto-add-missing-key feature discussed [here](https://github.com/laravel-enso/Core/pull/45)
Moves the `debounce` prop for vuedatatable in the backend. Now `debounce` is a config option with a default of 100 (ms) that can be configured for everytable in its template.
To upgrade be sure that in your composer.json you have "laravel-enso/core": "2.3.*",

### 2.3.15
Brings back the ValidateUserRequest / ValidateOwnerRequest (deleted by mistake).
Updates composer and npm dependecies.

### 2.3.14
Greatly improves the datatables performance for big databases. The package can now handle tens of millions of records by using the new `fullInfoRecordLimit` config option. Read more in the docs.
Improves vuecomponents, vuetable and vueform.
Updates composer and npm dependecies.

### 2.3.13
Adds custom layout for form sections.
Fixes laravel-enso/select #11.

### 2.3.12
Breaking change: Upgrades the form builder to support sections. Beware, you will have to upgrade all the templates and wrapt the current `columns` / `fields` attributes in an `sections` array with at least one object (for only one section). Please look at the template.json example to understand the new structure. [another example](https://github.com/laravel-enso/FormBuilder/issues/9#issuecomment-373896117). Don't forget to also publish the new `forms.php` config file.
Fixes a bug when clearing the vuetable search field.
Updates all composer and npm dependencies.

### 2.3.11
Adds tutorials examples

### 2.3.10
Improves the vuetable to handle array values for its external filters
Upgrades the clear control for all input elements to bulma's default.

### 2.3.9
Small breaking change: The `$class` property from the vue select controllers is now changed to `$model`. You need to update this for `UserSelectController`.
Adds localisation and debounce props for the vueselect component.
Fixes laravel-enso/formbuilder#19
Fixes laravel-enso/vuedatatable#38
Updates all npm and composer packages

### 2.3.8
Improves the vuetable responsive calculation strategy.
Adds clear-button for typeahead.

### 2.3.7
Replaces the lib for detecting table resize.
Fixes lodash imports all over the project.

### 2.3.6
Adds hungarian language
Improves the the typeahead / laravel-enso/vuecomponents#12
Fixes the dataimport layout / laravel-enso/dataimport#13
Fixes the vuetable total when is crtNo is missing / laravel-enso/vuedatatable#32
Fixes the vuetable hidden controls when missing crtNo / laravel-enso/vuedatatable#36
Adds to the vuetable ability to have a scoped slot when using the `slot` meta attribute. The slot can be accessed using the name of the column. The props available are the `column` object and the `value` / laravel-enso/vuedatatable#34
Adds rogue columns to vuetable / laravel-enso/vuedatatable#33
Adds tooltips for vuetable header / laravel-enso/vuedatatable#31
Adds tooltips for vueform labels / laravel-enso/formbuilder#18
Improves the vuetable reponsiveness directive.

### 2.3.5
Closes laravel-enso/core#43, #44.
Fixes a modal and notification wrappers classes.

### 2.3.4
Improves the main modal component. Now the component uses a render function to make the modal a direct child of the body.
Upgrades the modal for vuedatatable and formbuilder.

### 2.3.3
Fixes laravel-enso/enso#66
Adds mongolian language

### 2.3.2
Fixes laravel-enso/enso#64

### 2.3.1
Fixes laravel-enso/vuedatatable#29.
Fixes laravel-enso/enso#63.
Fixes laravel-enso/enso#56

Puts all the auth routes to the except array for `VerifyCsrfToken` middleware
```
protected $except = ['api/login', 'api/password/email', 'api/password/reset'];
```
(you should do this step manually for existing projects)

### 2.3.0
Please follow the upgrade [instructions](https://github.com/laravel-enso/Enso/issues/62)

### 2.2.2
Packages updates. Bug fixes

### 2.2.1
Fixes bug in VueSelect & adds auto scroll when using keyboard navigation.

### 2.2.0
Removes vue-multiselect dependency. VueSelect has been rebuild from scratch and is now bulma themed. The option list builder has been upgraded too. Helpers/Enum has now an select() method that maps the $data to the expected format. VueSelect now uses an array of objects with the following format: [{id: 3, name: 'Label'}]. Select docs will be updated soon.
Upgrades the whole project for VueSelect, including the example page.
Fixes laravel-enso/vuedatatable#53
Fixes laravel-enso/enso#54
Fixes laravel-core/core#41

### 2.1.35
Adds `is_active` to languages table. A command will run "post-install" / "post-update".
Footer is now customizable larvel-enso/enso#52.
Adds Arabic Language.

### 2.1.34
Fixes the z-index problem for select / filters clear control.

### 2.1.33
Vue Routing refactor.
Vue files refactor to be compliant with eslint@4.3.0
Fixes #34, #38.
Renames init route `getAppName` => `getMeta`

### 2.1.32
Updates Laravel to 5.6.5.
Updates composer / npm packages.
Fixes the shadow for sidebars.

### 2.1.31
Adds Brazillian Portuguese localisation.

### 2.1.30
Updates all dependencies.
Improves vuedatatable's hidden columns.
Improves the typeahead component.
Fixes bug.

### 2.1.29
Upgrades date-fns to v2.0.0.alpha.7 to make full use of tree-shaking.

### 2.1.28
Adds back Sentry.

### 2.1.27
Fixes `vuedatatable` bug when building buttons for users w/o permissions.
Fixes user create form default value for the role select.

### 2.1.26
The app is now managed by Forge. Adds Horizon & Redis for jobs, cache.

### 2.1.25
Adds favicon notifications. Dont forget to npm install --save `favico.js`
Refactors `vuecomponents`. We don't want to enforce unnecessary classes where we can avoid it.
Adds to the `formbuilder` a new wrapper `<vue-form-ss>` that handles the ajax request for the form object. Adds a bunch of helpers methods for the builder. The documentatio will be updated soon, until then you can check any of the forms from the project. `laravel-enso/formbuilder#11'

### 2.1.24
Upgrades Laravel to 5.6 :). All the files from the local project are updated too.
Upgrades `laravel-mix` to 2.0.
Improves the `imagetransformer` package. Now uses for optimization `spatie/image-optimizer`. Adds `width` and `height` public methods.
Improves the use of `flags-icon-css`. The project now includes only the needed flags...
Improves the `fileuploader.vue` component - adds validation errors reporting (422).
Fixes bugs.

### 2.1.23
Fixes the `user_agent` column from the `logins` table, now its text. We use a command for this that executes at `post-cmd-install`/`post-cmd-update`.
Improves shadow for navbar / sidebar / settings bar.
Improves sticky footer, now uses flex instead of js.
Updates `dataimport` to the new version that uses `box/spout` instead of `Maatwebsite/Laravel-Excel`. There are breaking changes here, please read the `dataimport` docs.
Updates packages.

### 2.1.22
Extracted the `VueSelect.vue` and `VueSelectFilter.vue` to the Select package.
Packages update.

Note: the Vue components move means that you should update throughout your pages/components the import path to the 
select components and then delete the leftover components from the `vueforms` and `bulma` folders respectively: 
 
...`/vueforms/VueSelect.vue` to ...`/select/VueSelect.vue`
...`/bulma/VueSelectFilter.vue` to ...`/select/VueSelectFilter.vue`


### 2.1.21
Major update in DataImport. Improves interface, replaces Maatwebsite/Excel with Bos/Spout. The packages is now faster and cleaner.
Updates documentation for most of the packages.
Update composer and npm packages.
Note: Unfortunately we tagged wrongly "laravel-enso/menumanager" with 2.1.29 instead of 2.1.21. If you have the project already installed please correct this manually.

### 2.1.20
Fixes `core.index` route.
Packages update.

### 2.1.19
Adds Tabs/Tab vue components.
Makes Notifications sticky.
Improves example page.
Adds `optionsLimit` prop to VueSelect.
Fixes bugs.

### 2.1.18
Packages update.
Fixes VueSelect css.

### 2.1.17
Adds showcase for VueDatatable. The example Will be updated further.

### 2.1.16
Laravel Enso just got rid of jQuery, for good by replacing `atwho`, the latest dependency that was relying on jQuery, with a brand new custom component.
Fixes error reporting in auth views.
Adds zxcvbn for measuring password complexity.

### 2.1.15
Transitions are now fixed / more consistent.
The new toastr uses now Bulma's `notification` class instead of `message`.

### 2.1.14

Adds collapse animation for card.
Adds `extendedDocumentTitle` option to the `enso/config.php`. If this is set true it concats the app's name to the `document.title`. `document.title` is now translated.
Adds `icon` and `clickable` meta attributes for vudedatatable. `icon` is for rendering fa5 icons, while `clickable` can be used to customize behaviour when clicking specific cells from the table. The docs for vuedatatable will be extended soon to cover the new options.
Removes `favicon.ico` and `logo.svg` from the publishable resources. Now you can replace those with custom ones.
Packages update

### 2.1.13

Update to the core package AddressesManager to 2.2.0, which now uses the list of countries from 
[webpatser/laravel-countries](https://github.com/webpatser/laravel-countries).

Note that since the old list and the new list are different, this is a breaking change for the existing addresses (backup your data before upgrading). We include a command that will setup the new countries table for you post-install.

### 2.1.12
Packages update

### 2.1.11
Replaced `moment.js` with the great `date-fns`.

### 2.1.10
Imports missing icons.
Adds shadow to the toastr.

### 2.1.9
We're both happy and sad...
Happy because we have finally ditched the old `toastr` lib ($. dependent) and replaced it with our new toastr/message component.
Sad because this introduces a small breaking change. If you still want to use the old toastr you will have to include it yourself (hopefully not)., or you can just replace all the `toastr.${type}` occurencies with `this.$toastr.${type}` and go *nouveau* :).
This version also fixes the fa5 import - it now uses the `shakable.es` resource.

### 2.1.8
The overlay is now red, as Nprogress.
Package updates

### 2.1.7

#### General
Registers globally the FontAwesomeIcon as 'fa'. It can be used anywhere in the project with `<fa icon="icon"></fa>`, as long as the needed icon is imported in that file.
Adds a new file where new menu icons should be registered `resources/assets/js/pages/layout/sidebar/icons/app`
Includes a command that will run automatically and update all the icons from the `menus` table to the new format.
Updates all the form & table json templates to work with fa5 icons.

#### VueDatatable & FormBuilder
Changes the config file to work with the new style of including fa5 icons. Be sure to overwrite / update the old config file!

### 2.1.6
Upgrades the card vue component.
Minor layout fixes for vuedatatable and formbuilder.

### 2.1.5
Adds placeholder attribute for select field in formbuilder.
Fixes placeholder prop for VueSelect.
Refactors lolcalisation text edit vue.
Fixes routes in AddressesManager.
Package updates.

### 2.1.4
Updates npm dependencies / compiles.
Fixes Select List Option builder merging problem.
Fixes Addresses published form path.

### 2.1.3
Fixes VueDatatable nrcrt alignment.

### 2.1.2
Package updates

### 2.1.1
Fixes Role.php permissions and menus syncing.
Upgrades VueDatatable to the fa5 version.

### 2.1.0

#### General
This version brings a major BE refactor for all the packages.
The separation between the M and the C in MVC is much clearer now.
Routes cleanup.
The vue components that were hosted in the generic `laravel-enso/vuecomponents` package and were belonging to specific packages where moved accordingly.
The BE tests are up to date.
Frontend refactor for all dropdowns.
Upgrades icons to Font Awesome 5 in the whole project / packages.

Note: If you have this project already, after pulling the current version and before installing the new packages two commands will run automatically to ensure route compatibility and font awesome icon upgrade for the legacy db table `menus` (composer.json -> "pre-install-cmd")

#### Formbuilder
Slighly refactored and brings a dedicated `ModelForm` object.
Docs update comming soon.

#### Select
All the properties were renamed.

#### Filemanager
Improves the interface.

#### VueDatatables
Dropdowns refactored.

#### Vuecomponents
Introduces the `Dropdown` component for bulma.

#### 2.0.35

Lots of visual improvements and layout fixes.
Adds profile menu link on touch devices.

#### 2.0.34

Package updates

### 2.0.33

#### Core
The custom code for all Enso Exceptions is now 555 instead of 455.
Removes unused `ProfilePageController` structure.
Renames `LogsSuccessfulLoginListener` to `LoginLoggerListener`
Fixes redirect to login page after logout

#### DataImport
Refactors the config. Refactor error reporting and adds missing translations.

#### FileManager
Updates the folder structure to follow Laravel format. Improves the interface of the `FileManager` class.

#### Helpers
Updates the folder structure to follow Laravel format.
Moves `EnsoException` class to the Helpers package.
`EnsoException` is excepted from the Handler's report method and therefor is extended by all the project's custom exceptions.

#### Select
Refactors the main class

#### VueComponents
Fixes the file uploader when consecutive multiple uploads are needed
Fixes documents download

#### General
Adds custom exceptions that extend `EnsoException` were the latter was previously used. Improves the error reporting  localisation.
Refactor and clean up code in migrations, Controllers / Services.


#### Upgrade instructions:   
 - remove manually the `administration.users.updateProfile` route from the permissions menu
 - rename the dataimport config file from `importing.php` to `imports.php`. Remove `validationLabels` entry from `imports.php`. Place configs at the parent level - follow the format of the config from the package.
 - update the namespace for the classes provided by the helpers package: `Obj`, `Enum`, `IsActive` trait and `EnsoException`

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

