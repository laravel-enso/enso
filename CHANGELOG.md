## Laravel Enso's Changelog

### 2.11.2

Soon you will be able to get Laravel-Enso on existing projects by running `composer require laravel-enso/core`...

#### Changes and Upgrade steps:

- cleans `preferences.json`, now it contains only global settings

Moves the remaining demo files / classes / routes into the `examples` package:
    -  `app/Classes/LocalState.php` (delete your local one if not used)
    -  `app/Http/Controllers/ChartController.php` (delete your local one if not used)
    -  `app/Http/Controllers/ChartController.php` (delete your local one if not used)
    -  `app/Importers/*` (delete your local one if not used). If you stil want to use the example importer update in `/config/enso/imports.php` the template path to `'template' => 'vendor/laravel-enso/examples/src/app/Imports/Templates/owners.json',`
    - `routes/api.php` is now empty
    - dashboard Index.vue file

Finally, moves into core:
    - the front-end route for dashboard
    - the dashboard structure migration (delete your local one)
    - an empty dasbhoard `Index.vue` file

- after updating run `art vendor:publish --tag=enso-preferences --force`;

### 2.11.1

This update adds the WIP touch layout. Run `php artisan enso:clear-preferences` after the update.

### 2.11.0

This version is a step forward in the direction of abstracting Enso from a clean Laravel project.

Changes and upgrade instructions:

- update in your `composer.json` the `core` requirement to `"laravel-enso/core": "3.0.*",`
- the examples were moved in a dedicated `examples` package. to upgrade remove everyting related to examples:
    - remove the files (copy everything below in one take and paste it into the terminal)
        ```
        rm app/Example.php
        rm -R app/Http/Controllers/Examples
        rm database/factories/ExampleFactory.php
        rm database/migrations/2018_01_29_204255_create_examples_table.php
        rm -R resources/views/examples
        rm -R resources/assets/js/tableExample.js
        rm -R resources/assets/js/selectExample.js
        ```
    - remove the routes under the `Examples` namespace from `routes/web.php` file:
        ```php
        Route::namespace('Examples')
            ->prefix('examples')->as('examples.')
            ->group(function () {
                Route::view('table', 'examples.table.index')->name('table');

                Route::prefix('table')->as('table.')
                    ->group(function () {
                        Route::get('init', 'TableController@init')->name('init');
                        Route::get('data', 'TableController@data')->name('data');
                        Route::get('exportExcel', 'TableController@exportExcel')->name('exportExcel');
                    });

                Route::view('select', 'examples.select.index')->name('select');

                Route::prefix('select')->as('select.')
                    ->group(function () {
                        Route::get('employee', 'EmployeeSelectController@options')->name('employee');
                    });
            });
        ```
    - remove from webpack the following lines:
        ```js
        .js('resources/js/tableExample.js', 'public/js')
        .js('resources/js/selectExample.js', 'public/js')
        ```
    - if you still need examples in your project run `composer require laravel-enso/examples` and put back the two lines in `webpack.js`.
- the `Owner` & `User` models were moved to `core`. To upgrade
    - remove `app/Owner.php`. If in the future you will need customization over this model you can create it locally but be sure to extend the one from core.
    - update `app/User.php` content to:
        ```php
        <?php

            namespace App;

            use LaravelEnso\Core\app\Models\User as EnsoUser;

            class User extends EnsoUser
            {
                //
            }
        ```
        If you have customizations add it as well
- the form and tables (buiders, template, controllers) and the corresponding routes were moved to the `core` package. To upgrade remove the following files/routes:
    - `app/Forms/Builders/UserForm.php`
    - `app/Forms/Builders/OwnerForm.php`
    - `app/Forms/Templates/user.php`
    - `app/Forms/Templates/owner.php`
    - `app/Tables/Builders/OwnerTable.php`
    - `app/Tables/Builders/UserTable.php`
    - `app/Tables/Templates/owners.php`
    - `app/Tables/Templates/users.php`
    - `app/Http/Controllers/Administration/*`
    - `app/Http/Requests/ValidateOwnerRequest.php`
    - `app/Http/Requests/ValidateUserRequest.php`
    - `database/migrations/2017_01_01_108000_create_owners_table.php`
    - `database/migrations/2018_01_29_204255_create_examples_table.php`
    - from the `api.php` remove the lines related to user & owner:
        ```php
        Route::middleware(['auth', 'core'])
            ->group(function () {
                Route::namespace('Administration')
                    ->prefix('administration')->as('administration.')
                    ->group(function () {
                        Route::namespace('Owner')
                            ->prefix('owners')->as('owners.')
                            ->group(function () {
                                Route::get('initTable', 'OwnerTableController@init')
                                    ->name('initTable');
                                Route::get('getTableData', 'OwnerTableController@data')
                                    ->name('getTableData');
                                Route::get('exportExcel', 'OwnerTableController@excel')
                                    ->name('exportExcel');

                                Route::get('selectOptions', 'OwnerSelectController@options')
                                    ->name('selectOptions');
                            });

                        Route::resource('owners', 'Owner\OwnerController', ['except' => ['show', 'index']]);

                        Route::namespace('User')
                            ->prefix('users')->as('users.')
                            ->group(function () {
                                Route::get('initTable', 'UserTableController@init')
                                    ->name('initTable');
                                Route::get('getTableData', 'UserTableController@data')
                                    ->name('getTableData');
                                Route::get('exportExcel', 'UserTableController@excel')
                                    ->name('exportExcel');

                                Route::get('selectOptions', 'UserSelectController@options')
                                    ->name('selectOptions');
                            });

                        Route::resource('users', 'User\UserController', ['except' => ['index']]);
                    });
            });
        ```
- the user & owner tests were moved to the `core` package. to upgrade:
    - add in your `phpunit.xml` the `core` test suite
        ```xml
        <testsuite name="core">
            <directory suffix="Test.php">./vendor/laravel-enso/core/tests/features</directory>
        </testsuite>
        ```
    - remove `tests/Feature/OwnerTest.php`
    - remove `tests/Feature/UserTest.php`
- the `UserPolicy` was moved to the `core` package and consolidated with the `ImpersonatePolicy`. Also the `Horizon` authentication was moved to the `core` `AuthServiceProvider` upgrade:
    - remove `app/Policies/UserPolicy.php`
    - update `app/Providers/AuthServiceProvider.php` to to following content:
        ```php
        <?php

        namespace App\Providers;

        use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

        class AuthServiceProvider extends ServiceProvider
        {
            protected $policies = [
                //
            ];

            public function boot()
            {
                $this->registerPolicies();
            }
        }

        ```
- update the `Owner` model import in the following files:
    - `app/Imports/Importers/OwnerImporter.php`
    - `config/enso/addresses.php` (if the case)
    - `config/enso/contacts.php`  (if the case)
    - `config/enso/comments.php`  (if the case)
    - `config/enso/documents.php`  (if the case)
    - `config/enso/discussions.php`  (if the case)
    - `config/enso/config.php` (the ownerModel  key)
    - `database/factories/UserFactory.php`
    - `database/seeds/OwnerSeeder.php`
    - `database/seeds/UserSeeder.php`
- Note: If you used the `Owner` class for morphable packages, update in the `addresses`, `contacts`, `comments`, `documents` tables `morphable_type` from `App\Owner` to `LaravelEnso\Core\app\Models\Owner`

### 2.10.8

- adds `laravel-enso/discussions`.

Steps for adding discussions in an existing project:

- `composer required laravel-enso/discussions`
- `php artisan vendor:publish --tag="discussions-config" and then configure your desired model.
- `yarn add quill`
- `yarn add vue-quill-editor`
- compile
- add to `/resources/js/pages/administration/owners/Edit.vue` the `discussions` prop to `morphable-container`

### 2.10.7

#### Changes

- moves `FileUploader.vue` & `Uploader.vue` from `laravel-enso/vuecomponents` to `laravel-enso/filemanager` 
- adds a new `MorphableContainer.vue` component. An use example can be seen in owner's edit page
- renames old `Addresses.vue` to `AddressesCard.vue`. Adds new `Addresses.vue` component to work with `MorphableContainer`
- renames old `Contacts.vue` to `ContactsCard.vue`. Adds new `Contacts.vue` component to work with `MorphableContainer`

#### Upgrading existing projects:

- update `/resources/js/pages/administration/owners/Edit.vue` to match the file from the repo to use the new `MorphableContainer.vue`
- run `php artisan enso:documents:remove-deprecated-permissions`

### 2.10.6

- adds the new `Files` menu. The users can see their files in a centralised way.
- adds datatable and files integration. Your exports can now be downloaded from the app.
- for existing projects run:
- `composer require laravel-enso/dataexport`
- `composer update` 
- `php artisan migrate`
- `npm run dev`

### 2.10.5

#### Changes & Fixes

##### Helpers
- adds a `JsonParser` helper class that is used now by dataimport, vuedatatable & formbuilder

##### Dataimport
- improves the template validations
- improves the uploaded file validation
- updates the config file - adds option to toggle validations depending the env (vuedatatable style)
- implements `JsonParser`

##### StructureManager
- fixes tests
- adds missing classes to structuremanager's table stub (index.vue)

#### Core, VueDatatable, FormBuilder, Localisation
- implements `JsonParser`
##### General
- fixes issue in user form where the encrypted password was sent to front-end

#### Upgrade an existing project
- update in `composer.json`: "laravel-enso/dataimport": "2.4.*",
- `composer update`
- `npm run dev`
- update the `config/enso/imports.php` to match the enhanced structure

### 2.10.4

- fixes structure manager to match the new resources folder
- fixes toastr css

### 2.10.3

- fixes user form template (`app/Forms/Templates/user.json`) `password` & `password_confirmation` fields hidden property - it needs to be a boolean. Update this manually in your local project.

- changes the unique-request-at-once-rule implemented in v2.10.1 to apply only on non `get` requests. I'm still waiting feedback for this ;)

- fixes some edge cases potential bugs in `vue-select` and `vue-form`

### 2.10.2

Laravel 5.7 adds, as usual, small changes to the core / config files. A new thing is the flat resources folder.

This update aligns everything in Enso with Laravel 5.7's changes.

Updating an existing project:

- move everything from `resources/assets/*` to `resources/*`
- manually update/add the following files to match the ones from Enso's repo:
    - `app/Http/Controllers/Auth/VerificationController.php`
    - `app/Http/Kernel.php`
    - `app/Http/Middleware/Authenticate.php`
    - `app/Http/Middleware/VerifyCsrfToken.php`
    - `app/Providers/RouteServiceProvider.php`
    - `config/app.php`
    - `config/enso/config.php`
    - `config/hashing.php`
    - `config/logging.php`
    - `config/services.php`
    - `config/session.php`
    - `tests/CreatesApplication.php`
    - `webpack.mix.js`

- update in `composer.json`
    - `"laravel-enso/charts": "2.5.*",`
    - `"laravel-enso/core": "2.15.*",`

### 2.10.1

Laravel 5.7 upgrade

We decided to cleanup the project's root and to try to make Enso installable on any existing or new Laravel application. This is a direction / objective that we'll follow in the near future.

#### Changes

- Laravel 5.7 upgrade :)
- improved Enso's `Toastr`, now allowing 6 positions (desktop corners)
- new preferences setting that for customizing the toastr position
- bulma dropdown now hides after a selection is made by default. Has a new `hides-manually` prop
- updated the vuedatatable style selector and columns visibility dropdowns
- updated the dropdowns from setttings (right aside bar)
- moves the auth controllers to the core package, leaving the ones from the base project back to Laravel's original.
- removed the deprecated `Nprogress.vue` component from `vue-components` repo
- replaces `nprogress` dependency with an in house progress bar implementation that is integrated in the core. Now the animation is indeed controlled and the effect more natural
- adds a `requests` array to the app's state that tracks all the pending requests. From now on the application won't allow a second requests to the same endpoint / method before receiving the response for the initial one. Le me know your thoughs on this...
- adds the missing `StructureManager` tests to `phpunit.xml`
- adds desktop notifications - ref laravel-enso/enso#136

#### Upgrading an existing project

- first be sure that you follow [L5.7 upgrade guide](https://laravel.com/docs/5.7/upgrade)
- update in your `composer.json`: `"laravel/framework": "5.7.*",`
- update in your `composer.json`: `"sentry/sentry-laravel": "dev-laravel-57@dev",`
- unless you already customized the auth routes already remove from your `api.php` routes file the whole route group under the `Auth` namespace. - now they are loaded from the core package
- replace the four auth controllers with the ones from this repo (`app/Http/Controllers/Auth/*`)
- add to your `phpunit.xml` the test suite for `StructureManager`
- run `php artisan enso:clear-preferences`
- run `php artisan vendor:publish --tag=enso-preferences --force`
- remove `nprogress` from your `package.json` and run `yarn upgrade`

### 2.10.0

This is a mostly a back end refactor.

Among the goals:
- dropping all the accessors (appends) that were using relationships in favor of getters
- adding query scopes where they were missing
- implementing resources ... something that we wanted for months
- making all FormBuilders DRY
- cleaning up and aligning all the service providers
- refined tests
- improving the form request validators
- getting the project mature...

#### Additions & Changes

##### Activity Log
- refactored main query into scopes

##### AddressesManager
- adds `Address` resource
- adds `buildingTypes` and resource attributes to the config

##### AvatarMangager
- drops the `getAvatarIdAttribute`.
- adds an `created` event listener on the `User` model which automagically generates a new avatar for every created user
- adds the `generateAvatar()` method that can be called on any User. Note, in order to use this method you will have to be authenticated because the avatar relies on the `File` model that uses the `CreatedBy` trait.
- adds `php artisan enso:avatars:generate` - command that generates all the missing avatars

##### CommentsManager
- adds `Comment` resource. Major backend refactor

##### Core
- `Resource::withoutWrapping()` was added in the `AppServiceProvider`. Let's hope that this is a good decision :)
- `avatarId` was removed from the user's model `protected $fillable` array. Don't forget to do the same in your existing project(s). Read **Upgrade Instructions** for more details
- adds a `Team` resource
- adds the `Update` command

##### DocumentsManager:
- added document request validation
- added a new `ordered()` scope (most recent first)
- added the `Document` resource

#### HowToVideo
- clean up, added resources

##### TrackWho
- we have now a `TrackWho` resource and a `trackWho` config (publishable). You can customize the attributes in the `TrackWho` resource from the config.

##### FileManager
- added the `File` resource.

##### FormBuilder
- fixed a validation for multiple selects with mutated value.

#### RolesManager
- turned the `getRoleListAttribute` accessor into a getter - `rolesList()` in `HasRoles` trait. Updated the formbuilders for the models that were using this trait to use the getter instead of the accessor

#### Upgrade Instructions *~ 3-5 mins*
- update in composer.json: "laravel-enso/core": "2.14.*"
- run `composer update`
- run `php artisan enso:update` - this command will align some inconsistent column types and clear unused columns
- remove the `avatarId` field from the `protected $fillable` array in your `App\User` model
- update the avatar column definition in your `app/Forms/Templates/users.json` table template to
```json
{
    "label": "",
    "name": "avatarId",
    "data": "avatars.avatarId",
    "meta": ["slot"],
    "class": "is-paddingless"
},
```
- remove from the same template (`users.json`) the deprecated `avatarId` from the appends array. The result should be `"appends": ["fullName"],`
- update in `app/Tables/Builders/UserTable.php` the query method to:
```php
public function query()
{
    return User::select(\DB::raw(
            'users.id, users.id as "dtRowId", avatars.id as avatarId, owners.name as owner,
            users.first_name, users.last_name, users.phone, users.email, roles.name as role,
            users.is_active'
        ))->join('owners', 'users.owner_id', '=', 'owners.id')
        ->join('roles', 'users.role_id', '=', 'roles.id')
        ->leftJoin('avatars', 'users.id', '=', 'avatars.user_id');
}
```
- replace both `app/Forms/Builders/OwnerForm.php` & `app/Forms/Builders/UserForm.php` with the ones from the repo (this is not mandatory, and must be done with care if you have already customized your local builders)
```
- sync the `config/enso/config.php` keys with the keys from `vendor/laravel-enso/core/src/config/config.php`
- replace `tests/Feature/OwnerTest.php` &&  `tests/Feature/UserTest.php` with the one from the repo - or manually update if you have local changes
- modify the slot rendering in `resources/assets/js/pages/administration/users/Index.vue` to
```vue
<img class="is-rounded"
    :src="avatarLink(row.avatarId)"
    v-if="row.avatarId">
```
- add in 'database/seeds/UserSeeder.php` after the actual seed the following line`\Artisan::call('enso:avatars:generate');`

### 2.9.0

This version is a major backend refactor. It has breaking changes so read carefully the needed steps for upgrading existing projects. We created an artisan command that does all the hard work during the upgrade, so don't worry.

#### Changes

##### File System
- the file system has been rewritten around a single `FileManager` class that makes full use of Laravel's `UploadedFile` class
- there is a `files` table now that keeps track of all the files in the application. The `File` model has a polymorphic 'attachable` relationship to any needed model.
- to develop new packages that work with file uploads all you need is the new `HasFile` trait and implementing the `Attachable` contract. 
The trait creates a `file` `morphOne` relationship to the base model and makes available all the needed methods: `inline()`, `download()`, `upload(UploadedFile $file)`. There are also helpers (check the contract / trait) and protected properties that can be used for configuring the specific of the model related to files, like:
    - `folder`: string the storage folder for the model's files
    - `mimeTypes`: array
    - `extensions`: array
    - `resizeImages`: array(width, height)
    - `optimizeImages`: boolean
- the trait adds a `deleting` event on the base model that makes sure the to associated files are delelted on `$model->delete()`
- when the env is testing `FileManager` uses a `testing` folder
- upgraded packages: AvatarManager, DataImport, DocumentsManager, FileManager, HowToVideos

##### Seeders
- until now the app was using migrations instead of seeders for inserting the default roles, owner and user. This version adds seeders for roles, default user, default owners, and countries (for the addresses package)
- the seeders can be published with `php artisan vendor:publish --tag=enso-seeders`. Use the `--force` flag if needed.

#### Roles
- we have now a `php artisan enso:roles:sync` command that will help keeping the all the environments up to date.

#### Upgrade steps for existing projects

- update in composer.json the following:
    - "laravel-enso/core": "2.13.*",
    - "laravel-enso/dataimport": "2.3.*",
    - "laravel-enso/documentsmanager": "2.3.*",
    - "laravel-enso/howtovideos": "2.1.*",
- run `composer update`
- run `php artisan migrate`
- run `php artisan enso:filemanager:upgrade`. This command will translate all the tables from the old format to the new one. It's recommended to make a backup of the database before the update, just to be sure that nothing goes wrong.
- run `php artisan vendor:publish --tag=enso-seeders --force` to update the seeders (Database, Role, Owner & User) if you didn't make any customizations to the existing ones.

##### Files & Folders to delete
- remove the `insert_default_owner` & `insert_default_user` migrations
- remove the `app/storage/temp` folder, it's no longer needed

##### Files that need to be replaced & edited according to the repo
- sync the `config/enso/config.php` keys with the keys from `vendor/laravel-enso/core/src/config/config.php`
- replace `tests/Feature/OwnerTest.php` with the one from the repo.
- replace `tests/Feature/UserTest.php` with the one from the repo.
- replace `resources/assets/js/pages/administration/users/Index.vue` with the one from the repo.
- edit `storage/app/.gitignore` file and replace `temp` with `testing`
- add in `app/User.php` the `avatarId` attribute to fillable
- add in `app/Tables/Builders/UserTable.php` `users.id` to the table select (`users.id, users.id as "dtRowId"`). We need this for showing the avatar in the users index table
- replace `app/Tables/Templates/users.json` with the one from the repo.

#### Notes
- this is a pretty heavy upgrade, if you find any problems open issues in github, issues for this upgrade will be prioritized

### 2.8.29
- adds ability to delete individual notifications
- for existing projects run `php artisan enso:notifications:add-missing-permissions`

### 2.8.28
- fixes a series of small bugs in stub filling for StructureMigration
- adds "selectable" to the vue table - check the [example table](https://www.laravel-enso.com/examples/table)
- improves the form build when having an edit form. Now you can mutate field values for edit forms too with the `values()` method using the fluent syntax
- updates all composer & npm dependencies

### 2.8.27

#### Notifications improvements

- adds a notifications index page that allows control over notifications from mobile devices too
- adds an icon attribute in the notification array
- to upgrade an existing project run `php artisan enso:notifications:add-missing-permission`

### 2.8.26

#### Bug Fixes / Improvements for VueTable

- header label is now clickable for sortable columns
- overlay is moved to cover the whole component
- fixes slots for hidden columns in responsive mode
- auto refreshes the hidden columns in expanded rows on resize

### 2.8.25

#### Bug Fixes
- VueSelect's search input padding
- ActivityLog's timeline background
- rotation of the burger on mobile devices
- missing args in store module `auth.js`

### 2.8.24

- fixes table export file name

### 2.8.23

- major redesign of vue-table component. The title / icon props were removed.

Upgrade steps to make your current project look like the demo.
    - update in `datatable.php`
        - **row** button classes to `is-row-button` (optional, old classes still work)
        - **global** button classes to null (optional)
        - `'style' => [ 'default' => ['hover', 'center'] ... ]`
    - update in all custom buttons in your templates, if it's the case
    - remove the `icon` and `name` props from all your table templates
    - replace all `vue-table` components class from `box` to `is-raised is-rounded`
    - add to all `vue-form` components `is-raised` class
    - compile all themes (uncomment everything from webpack.mix.js and run `yarn production` / `npm run prod`)

### 2.8.22

- improves user `show` page
- adds `.is-raised` helper
- adds link to author's profile in activity log

### 2.8.21

- adds ability to change the password from the user form. Users can change only their own password.

To upgrade an existing project you will have to copy by hand from a fresh Enso project the following files:

- `app/Forms/Builders/UserForm.php`
- `app/Forms/Templates/user.json`
- `app/Http/Controllers/Administration/User/UserController.php`
- `app/Http/Requests/ValidateUserRequest.php`
- `app/Policies/UserPolicy.php`
- `resources/assets/js/pages/administration/users/Edit.vue`

### 2.8.20

- adds the `Support Services` & `Sponsor` sections
- fixes a bug related to activitLog's FE route
- updates composer.json and packages.json dependencies

### 2.8.19

- improves the Teams menu
- adds the new Activity Log menu.

Now you can audit your user's activity within the application from the new menu.

To upgrade an existing project update in your `composer.json`: "laravel-enso/core": "2.12.*" and after the update run the migrations. If you want smarter logging for contacts, addresses, comments & documents update their configs matching the ones from a blank project.

The documentation will be updated soon.

Meanwhile, take a look at the new `LogActivity` trait. For examples peek at the `User` model from a blank project and for polymorphic relations at the `Comment` model from the `CommentsManager` packages.

### 2.8.18

- adds custom totals in VueTable.

### 2.8.17

- upgrades Laravel to 5.6.31
- adds `app/Http/Middleware/CheckForMaintenanceMode.php` to the project. In an existing project you should copy it by hand if needed.
- improves the `users/Show.vue` controls
- improves the navbar, adds notifications indicator - WIP

### 2.8.16

- bugfixes
- dependencies update

### 2.8.15

- updates documentation
- updates composer and npm dependencies
- Breaking Change: updates fontawesome to 5.2.x. Please read FA [upgrade instructions](https://github.com/FortAwesome/Font-Awesome/blob/master/UPGRADING.md#50x-to-510)

Upgrade steps:
- update in `composer.json`:
    - core: `"laravel-enso/core": "2.11.*",`
    - charts: "laravel-enso/charts": "2.4.*",
- run composer update
- update in your packages.json file the fontawesome deps (replace the old with):
```json
"@fortawesome/fontawesome-free": "^5.2.0",
"@fortawesome/fontawesome-svg-core": "^1.2.2",
"@fortawesome/free-brands-svg-icons": "^5.2.0",
"@fortawesome/free-regular-svg-icons": "^5.2.0",
"@fortawesome/free-solid-svg-icons": "^5.2.0",
"@fortawesome/vue-fontawesome": "^0.1.1",
```

- replace in your whole project:
    - `import fontawesome from '@fortawesome/fontawesome'` with `import { library } from '@fortawesome/fontawesome-svg-core'`
    - `import FontAwesomeIcon from` with `import { FontAwesomeIcon } from`
    - `@fortawesome/fontawesome-free-regular/shakable.es` with `@fortawesome/free-regular-svg-icons`
    - `@fortawesome/fontawesome-free-solid/shakable.es` with `@fortawesome/free-solid-svg-icons`
    - `@fortawesome/fontawesome-free-brands/shakable.es` with `@fortawesome/free-brands-svg-icons`
    - `fontawesome.library.add` with `library.add`

### 2.8.14

- we have just launched the new documentation [website](https://docs.laravel-enso.com)
- on touch devices the menu hides once an option is selected
- refactor in menu drawing, the code is now DRY
- fixes bug in dataimport for rows that were ending in null cells
- cleans deprecated commands
- composer and node dependencies update

### 2.8.13

- upgrades the vue select to use Bulma's tag list in multiselect mode
- adds teams management. User can now be organized in teams. To enable the teams menu run `php artisan migrate`
- fixes the login redirect bug when session is expired and page is reloaded
- fixes inconsistency in vueSelect when the query became `null` instead of `''`, and unwanted requests were made
- hides the delete button for tags when the component is disabled

### 2.8.12

- updates json assertions in tests to work with Laravel's latest changes (laravel/framework#b41330319e954852d62bf955ca201ae371c29bce)
- You should manually update the `OwnerTest` & `UserTest` in existing projects.
- adds `InfoBox` and `InfoItem` in `vuecomponents`

### 2.8.11

- adds `laravolt/avatar` for creating default avatars. Avatars can be "refreshed" now
- vuedatatable: adds `dateFormat` template attribute for individual columns
- improves the overall flow for the structuremanager CLI
- fixes / improves tests (adds tests for structuremanager)
- fixes an edge case bug in vueselect multiple when clicking outside of the dropdown with no options selected

### 2.8.10

- adds animated hamburger for the main menu
- animates the notification dropdown arrow
- moves the Owner & User Tests in the local project & updates the phpunit.xml (**NOTE** you will have to do this yourself in an existing project)
- fixes laravel-enso/vuedatatable#67

### 2.8.9

- adds validations to structure manager's CLI
- updates the breadcrumbs for bulma 0.7.*
- improves the Enum, now it can handle constants
- fixes the comment manager dropdown (atwho)
- sets the card position to static (card.vue)
- fixes dataimport summary loading bug

### 2.8.8

#### VueDatatable

NOTE: we removed the unused `writeSuffix` template attribute. Make sure that you remove it from all the existing templates.

#### StructureManager

Finalizes the implementation for `php artisan enso:make:structure` - a CLI designed to help creating new ready for production Enso structures in minutes.

From the CLI you easily generate the following files:

- model
- `create_structure_for_model` migration
- front-end route files for crud actions `index`, `create`, `edit`, `show`
- crud views boilerplate
- form structure:
    - builder
    - json template boilerplate
    - request validator,
    - controller
- table structure:
    - builder
    - json template boilerplate
    - controller
- select structure
    - controller

and the needed backend routes (api.php)

#### RoleManager

Adds the new system that allows roles management in development with the posibility to easily sync them with the live instance of the app though a seeder.

To run the syncronization, after generating each config file run on the live instance `php artisan db:seed --class=RoleSeeder.php

To use this run `php artisan enso:roles:add-missing-permission` after upgrading, and publish the [seeder]in your local project: `php artisan vendor-publish --tag=roles-seeder`

### 2.8.7

- compiles all the themes with latest bulma & bulma-extensions
- fixes navbar shadow

### 2.8.6

Pay attention, has one breaking change. See the upgrade section below.

#### Contacts
- removes the obsolete `DropCreatedBy` command for contacts
- add the position field to the form & table
- moves the observations under a hoverable info icon
- changes the observations form field to a textarea

#### Comments

- removes the obsolete `UpdateCommentsTable` command for comments
- raises the pagination default from 5 to 100

#### Core
 
- removes the obsolete `DBRenameReserved` command

#### DocumentsManager

- removes the obsolete `UpdateDocumentsPermissions` command
- adds authorization for link generation

#### FormBuilder

- adds the `resize` boolean template attribute for textareas in formbuilder
- moves the validation error messages under the field

#### RoleManager

- refactors the `HasRoles` trait - breaking change

#### PermissionsManager

- removes the obsolete `AddMissingPermissions` command

#### StructureManager

- finally adds a CLI for handling new structures. This is work in progress so what you see is what you get :)
To play with it run `php artisan enso:make:structure`.

#### General

- updates composer and npm dependencies

#### Upgrade an existing project

- Replace in your project's OwnerController file form
```
$owner->updateWithRoles(
    $request->all(),
    $request->get('roleList')
);
```

to

```
$owner->updateWithRoles($request->validated());
```

and do the same for `storeWithRoles`
### 2.8.5

- brings back the `webpack.mix.js` file
- fixes a bug in vuedatatable when saved start position is > total filtered

### 2.8.4

#### Core
- refactors the FE menu initialisation
- fixes a bug when toggling menu visibility for touch devices

#### Charts
- add support for vertical labels & removes skipping labels
- fully reactive when datasets / labels change, including in structure

#### VueDatatable
- adds auth()->onceUsingId() for export jobs, useful for authorization
- fixes the `align` attribute for hidden columns in responsive mode

#### General
- updates composer and npm dependencies

### 2.8.3

- adds `align` attribute for columns in vuedatatable templates
- removes the old alignment functionality from the FE
- removes the deprecated `customRender` function prop in favour of `slot` || `class`

### 2.8.2

#### Improvements

- upgrades composer and npm dependencies

#### Core
- adds jessenger/date as a requirement
- adds `showQuote` flag to `config/enso/config.php` which allows disabling the qoute from the home page
- after password reset the user is redirected to the login page

#### Localisation
- integrates jessenger/date with the `SetLanguage` middleware.

#### Vuedatatable
- adds a `request()` getter in table builders classes
- adds a `class` option for columns in template
- make the `loading` boolean flag available in scoped slots
- fixes a bug when exporting with rogue columns

#### Formbuilder
- adds `Number` to vueswitch's `value` type

### 2.8.1
- fixes a routing problem for the login page.
- updates packages

### 2.8.0
This release is one of the biggest upgrades in a long time
- better organization for the FE files
- tons of bugs fixed on both the FE and the BE
- heavy refactoring
- flows optimisation

Changes overview:
- separated site layouts: `Auth`, `Home`, `Default`
- better management of transitions between different UI stages, such as authentication to main
- optimizations to the app routing 
- middleware is now used for the router; The users access will be filtered in the front-end too, based on their permissions; This means that all the FE permissions must be present in the `permissions` table and attached to the according roles. In the near future you'll be able to also add your own middleware too
- improved nprogress usage - applied through a router middleware 
- all layouts show the loading progress bar
- easier access to the nprogress object via the router, previous management via events has been removed as is no longer necessary
- refactored the authentication pages with the reuse of common elements
- the login, password reset and home pages are also themed
- resolved a situation where the login form would not be visible until refresh
- resolved visual issues during theme loading 
- improved the 'Page not found' page; added the 'Unauthorized' page
- improved title management for pages with a dedicated middleware, fixed issue where the title was missing in some scenarios and also translation issues
- addressed a role configurator bug when having more than one menu with the same name
- moved the logic for handling missing translation keys to the store `localisation` module
- many other front-end cleanup & optimizations 
- tree permission builder refactor for the back-end role configurator
- added logic to handle front-end only permissions, with no corresponding back-end routes

For an existing project the upgrade estimated time is ~ 5min. **TESTED**

To upgrade a project do the following:
* update `composer.json` for the new core version to `2.10.*` (please double check all the enso requirements against a composer.json from a fresh project)
* run `composer update`
* run `php artisan enso:add-missing-permissions`
* make sure to manually add to the permissions table all the FE-only permissions and attach them to the according roles
* following is the reorganized structure (read with care!!!) of the core application layout files:
    - `js/core` 
        - `structure`: the structural sub-components of the app
            - `navbar` (top)
            - `sidebar` (left) -> bring your own `/icons/app.js` file under this folder
            - `settings` (right sidebar)
            - `AppFooter.vue`: -> use your own file
            - `Breadcrumbs.vue`
            - `PageHeader.vue`
            - `VueAside.vue`
        - `App.vue`
        - `NotFound.vue`
        - `Router.vue` -> Update the path to this file in all the routes / pages that use the Router
        - `Unauthorized.vue`

* remove the old `js/pages/layout` with all its content

* nprogress usage
    - if using the nprogess events, replace old logic as these events have been removed:
        - `nprogress-add-request`
        - `nprogress-add-response`
        - `nprogress-done`
    - the nprogress instance is now directly available in the Vue root instance with `this.$router.app.$nprogress` with `incRequests()` / `incResponses()` methods

* middleware
    - the referenced files are:
        - `js/middleware/before/allow.js` -> used for restricting access on forbidden routes
        - `js/middleware/before/auth.js`
        - `js/middleware/before/nprogress.js`
        - `js/middleware/before/guest.js`
        - `js/middleware/after/nprogress.js`
        - `js/middleware/after/documentTitle.js`        
    
* authentication pages/components, will be published automatically on update
    - the referenced files are:
        - `js/pages/auth/AuthForm.vue`
        - `js/pages/auth/Login.vue`
        - `js/pages/auth/password/Email.vue`
        - `js/pages/auth/password/Reset.vue`
    
* dashboard
    - the referenced file is:
        - `js/pages/dashboard/Index.vue` -> it needs to be copied from the Enso repository, overwriting the existing file

* administration routes
    - the referenced files are:
        - `js/routes/administration.js`
        - `js/routes/administration/owners.js`
        - `js/routes/administration/users.js`
    - the above files have been updated and need to be copied from the Enso repository,  overwriting the existing files

* run `npm run dev`
* sync the routes in `routes/api.php` with the ones from a fresh project

### 2.7.12
- fixes the publishing path for `HowToVideo.vue`
- fixes keys in `Documents.vue`
- refactors CommentsManager with a breaking change.
To update an existing project first change the composer requirement to : "laravel-enso/commentsmanager": "2.3.*", and after the update run `php artisan enso:comments:update-table`

### 2.7.11
General BE refactor.

Steps for upgrade:
- update in your composer.json file the requirement for core: `"laravel-enso/core": "2.9.*"`
- `php artisan enso:update-action-logs-table`
- `composer update`
- `php artisan vendor:publish --tag=charts-config --force` for an updated color list.
- optionally list of files with small refactors which can be manually replaced from a fresh project: 'UserController.php', 'UserSelectController.php', 'ValidateOwnerRequest.php', 'ValidateUserRequest.php', 'User.php'

### 2.7.10
We finally ported the 'How To Videos' menu from to the SPA version of Enso.

To use it in an existing project do the following steps:
- `composer update`
- `composer require laravel-enso/howtovideos`
- `php artisan vendor:publish --tag=howToVideos-storage`
- `npm install --save vue-video-player`
- compile
- add in your `config/enso/config.php`, to the `paths` array the following entry: `'howToVideos' => 'howToVideos'`
- add in `storage/app/.gitignore` => `!howToVideos/`

### 2.7.9
- improves `laravel-enso/versioning` - read the updated documentation. It's a breaking change so be sure to update the code accordingly, and then in composer.json also update the require for `"laravel-enso/versioning": "1.1.*"`
- fixes a bug in auth.vue

### 2.7.8
- improves the mail templates
- adds to `config/enso/config.php` the following keys that are used for links in all the email notifications:
    - 'facebook' => ''
    - 'googleplus' => ''
    - 'twitter' => ''

To make use of the new templates in an existing project do the following steps:
    - publish the assets with `php artisan vendor:publish --tag=enso-mail-assets` (with `--force` if needed)
    - add the keys mentioned above to the `config/enso/config.php` file
    - update in `config/mail.php` the key `markdown.theme` from `default` to `enso`

### 2.7.7
- adds the ability to set a local state in the same request that builds Enso's state, by using the new config option `stateBuilder`. To use this feature point `stateBuilder` to a class that implements `LaravelEnso\Core\app\Contracts\StateBuilder` contract, and then make sure that you have the `resources/assets/js/localState.js` plugin, that should look like this:
    ```
    export default (context, state) => {
        // initalise the local state
    };
    ```
    where `state` is the what your local `StateBuilder` is returning.
- refactors `GuestController` by adding a `GuestState` Response
- adds the new laravel-enso/versioning package
- improves compatibility with PostgreSQL by renaming columns that are named with reserved words:
    - renames the "order" column to "order_index" in "menus" and "tutorials" tables
    - renames in "permissions" table the "default" column to "is_default"

Upgrade instructions:
- update `composer.json` to require `"laravel-enso/core": "2.8.*"`
- run `composer update`
- run `php artisan enso:db-rename-reserved` to update the database tables (`permissions`, `tutorials`, `menus`).
- update all your structure migrations (including Dashboard) / db seeders the columns accordingly `["order" => "order_index", "default" => "is_default"]`

### 2.7.6

- fixes missing login redirect
- removes the obsolete created_by column in laravel-enso/contacts

For existing projects first update your `composer.json` to require:`"laravel-enso/contacts": "2.2.*"` and after updating run `php artisan enso:contacts:drop-created-by` to drop the fk/column.

### 2.7.5
- removes the created_by column in addressesmanager
- upgrades the share link modal for documents
- updates all composer / npm  packages

For existing projects first update your `composer.json` to require:`"laravel-enso/addressesmanager": "2.3.*"` and after updating run `php artisan enso:addresses:drop-created-by` to drop the fk/column.

### 2.7.4
- adds temporary link generation to Documents. To use this feature do the following steps:
    - run `php artisan enso:update-documents-permissions`
    - and after attach the desired roles to the new `core.documents.link` permission
    - you also have to add to the `documents.php` config file the new `linkExpiration` option
    - make sure that you have the lastest `app/Http/Kernel.php` file, or add `'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,` to the `protected $routeMiddleware` array
- fixes localisation in auth views
- adds `disable-clear` prop to vue-select
- in structuremanager the created / deletion is wrapped now in transactions; adds generic exception when attribute validation in not passed
- removes the old and unused `config/enso/labels.php`. Make sure that you seach your whole project for `config('enso.labels` and clean everything up.

### 2.7.3
- the new structuremanager has now validations for all properties.
- all the tests are updated to use the new `ownerModel` option from the config.

Upgrade instructions:
- be sure that every `create_structure_migration` in your project that creates a menu has in the menu array the `order` key. You can default it to 999.

### 2.7.2
- refines the `Responsable` implementation
- adds `config('enso.config.ownerModel')` option to the config. By default it point to `App\Owner` class
- updates all the packages to use the new `ownerModel` option in config
- refactors the structuremanager package
- fixes a bug in tutorial.vue

Upgrade instructions:

- Copy from a fresh project the 'app\Http\Controllers\ChartController.php'. Copy the `resources/assets/js/pages/dashboard/Index.vue` component as well, if you didn't already for v2.7.1. Sorry about that, but what I did to the poor charts was an abomination and I had to roll it back.

### 2.7.1
- implements `Responsable` contract in the whole project
- refactors the BE

Upgrade instructions and detailed changes:

#### Enso
    - renamed the `DashboardController` to `ChartController` and shortened all the routes / methods names for charts. Copy from a fresh project the 'app\Http\Controllers\ChartController.php' and remove the old `DashboardController.php`. Copy the `resources/assets/js/pages/dashboard/Index/vue` component as well.
    - update the `routes/api.php` to reflect the changes. Check `api.php` from a fresh project to see the exact changes.
    - update requirement in composer.json: "laravel-enso/core": "2.7.*",
    - update requirement in composer.json: "laravel-enso/charts": "2.3.*",

#### Core
    - run `php artisan enso:clear-preferences'
    - publish the new preferences.json from the core package (with --force)
    
#### Charts
    - Charts implements now the `Responsable` contract. You don't need to call `get()` anymore in your controller

#### Comments
    - rename `editableTimeLimitInHours` to `editableTimeLimit` in `config/comments.php`

#### Documents
    - rename `editableTimeLimitInHours` to `editableTimeLimit` in `config/documents.php`

#### Forms
    - adds `route-params` prop that replaces the functionality of the old `params`
    - the old `params` prop is now and object and it's passed down to `vue-form`.
    - update the owner / user views (create / edit) accordingly, and the other files from your project where you are using `vue-form-ss`

### 2.7.0
We finally decided to start refactoring the store.

#### Breaking Changes:
- refines user preferences. Now we have the ability to store local prefs using the view's route name. Docs will be updated soon.
- refactors the store modules
    - `locale.js` was renamed to `localisation.js` 
    - `preferences.js` is now responsible for everything related
    - `navbar.js` was renamed to `menu.js`

#### Upgrade steps:
- run `php artisan enso:clear-preferences` to truncate the preferences table
- update composer.json requirement for "laravel-enso/core" : "2.6.*"
- run composer update

#### Updates composer and npm packages.
- Bulma 0.7.1 ;)

### 2.6.13
- repairs the tests, closes laravel-enso/enso#97
- splits the factories into dedicated files

### 2.6.12
- adds taggable to vue-select - closes laravel-enso/select#14
- fixes laravel-enso/enso#80
- fixes laravel-enso/dataimport#59
- closes laravel-enso/vuedatatable#60

### 2.6.11
- adds mail templates concept - https://github.com/laravel-enso/Core/issues/56#issuecomment-387168277
- moves the users / owners migrations from core to enso
- closes laravel-enso/vuedatatable#59

#### Updates composer and npm packages.

### 2.6.10

#### Updates

- updates IntroJS use.

#### Fixes

- fixes disabled state for vue-select
- fixes laravel-enso/enso#92
- fixes laravel-enso/formbuilder#35
- hides sections w/o visible fields in formbuilder
- adds reactive min/max to datepicker
- improves dataimport for some edge cases

#### Updates composer and npm packages.

### 2.6.9

Improves the Enum class by adding an optional attributes method that can be used to set the default `$data` array.

Adds "actions" to `vue-table`. Now you can define a global button responsible for a custom action for all the filtered rows. Check the docs for more details

Improves the `vue-form` sections. Adds `show` helper. `show`, `hide`, `disable`, `readonly` can take now an array of fields too.

Fixes the modal's close button when using the card version.

Adds disabled state for `vue-select`

### 2.6.8

#### Fixes
- the notification/toastr overflow-x.
- money bug where was not updated on `value` change from parent

#### Enhancements:
- improves the `vue-form` and `vue-table` mobile layout by removing the text labels from global buttons.
- adds `is-reverse-moble` helper for columns.

#### Updates composer and npm packages.

### 2.6.7

#### Enhancements:
- Adds a "view" button to `vue-form`. Please read https://github.com/laravel-enso/FormBuilder/issues/30
- improves the file uploader scoped slot
- adds `disabled` state for tabs
- adds `is-danger` and `is-warning` boolean props for `datepicker`
- adds animations to comments & documents.
- sets vue-filter's `off-label` default to "".
- enhances and also fixes :), the `UserPolicy` and `UserController`. For existing projects you should copy the two files from this repo.
- implemented the new FE helper`canAccess` where there was the case
- removes `app.scss` from the core packages. This file is the entry point for the local project's scss customization.

#### Fixes:
- scroll bug for the menu.
- dataimport index layout.
- various other small bugs.

#### Updates composer and npm packages.

### 2.6.6
Fixes the permissions index table.

### 2.6.5
Updates vuedatatable to 1.1.x. This version separates the query from the Table controller in a dedicated ModelTable class. Now the Tables folder follows the structure from the Forms folder, with two subfolders, Builder and Templates. The readme will be updated soon, meanwhile you can check examples from the project.

For exising projects:
    - update in the composer.json "laravel-enso/vuedatatable": "1.1.*"
    - copy the UserTableController and OwnerTableController from this repo
    - copy the app/Tables folder from this repo
    - refactor all exising tables following the new style

### 2.6.4
Fixes bug in DocumentsCard / CommentsCard with loading flag.

Fixes the collapsed menu label.

Updates composer and npm packages.

### 2.6.3
Splits Documents.vue in two separate components. Now we have DocumentsCard as a wrapper and Documents.vue for custom implementations. The same for Comments.vue.

Upgrading existing projects:
    - Update in your composer.json: "laravel-enso/commentsmanager": "2.2.*" and "laravel-enso/documentsmanager": "2.2.*",
    - Update owners\Edit.vue from this repo, and any other views that use the updated components.

### 2.6.2
Improves notifications for vuedatable and comment tags.

Closes laravel-enso/vuedatatable#27

### 2.6.1
Fixes i18n import for date-fns.

### 2.6.0
Replaces `tightenco/ziggy` with an own implementation of the `route` helper. The new helper returns the directly the name route (string). Docs will be updated soon.

Improves the mechanism for switching themes.

Adds i18n support for date-fns. You can use the wrapper from `resources/assets/js/modules/enso/plugins/date-fns`.

Removes the global filter `timeFromNow`. Use instead the `formatDistance` wrapper from the above plugins dir.

Adds adds in the ajax errorHandler `loading = false` if the property exists.

The Card component now accepts both String and Object type for the icon prop.

The vue select autodetects if there is a global function `route` available. If the helper is present, the `source` prop is expected to be a named route and if not, an uri. (only when using the component with serverside)

Adds a dedicated modal for dataimport.

Existing projects:
    - Copy the `PermissionsUpdate` command from the latest release
    - Run `php artisan enso:permissions:update`
    - The new implementation for `route` should be compatible with ziggy's in most of the cases, but please test carefully after upgrade
    - don't forget to replace all occurencies of `timeFromNow`
    - update in `composer.json`: "laravel-enso/core": "2.5.*"

### 2.5.9
Adds a global helper for the FE called `canAccess(route)` than can be used to conditionally display sensible elements in the UI. The helper returns a boolean, and matches the allowed permissions for the user's role.

Allows full configuration over the theme list. You can add, remove or comment themes from `enso/themes.php`. From this version the config for themes is not merged anymore with the default one.

Updates the default datepicker theme to light, in the clean theme.
Improves the new `money` component.

Improves `vue-table` handling of `money` type.

Closes: 
    - laravel-enso/vuedatatable#46
    - laravel-enso/vuedatatable#47

Existing projects:
    - run `php artisan cleanup:permissions` to remove `core.home` (not used anymore).

And since v2.5.8, but missed in the changelog:
    - make sure that you get the new webpack.min.js file from this repo.
    - uncomment lines 12 - 32 and run `npm run prod` to compile and minimize all the themes, and after comment the lines back

### 2.5.8
Upgrades the system for switching themes.

Integrates the flatpickr themes with bulmaswatch, closes laravel-enso/formbuilder#25.

Refactors all old customRender functions to the new slot, in vue-table.

Updates composer / npm depedencies.

Changes the tag color for multiple select to info.

### 2.5.7
Adds money type for the formbuilder and vuedatatable packages. To upgrade you need to `npm install --save accounting-js`. The docs will be updated soon.

Changes the `__` from being defined extending the prototype to a mixin. This allows cleaner auto-detecting for the independend components.

Adds the `weekdays` prop to datepicker.

Closes:
    - laravel-enso/vuedatatables#1
    - laravel-enso/enso#86

### 2.5.6
Fixes laravel-enso/localisation#38

### 2.5.5

Adds localisation for the auth pages.

Adds localisation for the datepicker component.

Existing projects upgrade: - remove from `routes/api.php` the `getMeta` route (lines 3 to 5)

```
Route::get('/getMeta', function () {
    return ['appName' => config('app.name')];
})->name('getMeta');
```

Bug Fixes:
    - laravel-enso/formbuilder#24
    - laravel-enso/contacts#10
    - laravel-enso/permissionmanager#14
    - laravel-enso/localisation #35
    - laravel-enso/localisation #36

### 2.5.4
Adds "php artisan vendor:publish --tag='localisation-lang-files'" to composer.json "post-update-cmd". Please add this to existing projects by hand. This is needed to publish that laravel's native lang files when new languages are added.

Removes the auto merge when a new key is added.

Adds a Merge button for localisation that runs `php artisan localisation:merge`. This is available only in `env=local`.

Renames the localisation command from add-route to add-routes, as now it's responsibile for adding the merge route too.

Update composer / npm packages.

And finally adds an issue template for the github repo!

### 2.5.3
Adds enso json lang files to the assets that are published after every composer update. Executes the localisation:merge command after each composer update.

Updates major versions for npm / composer packages.

For existing projects: be sure that you copy the "post-update-cmd" section from laravel-enso/enso/composer.json to your composer.json.

### 2.5.2
Finally updates the charts lib. To upgrade run `npm install --save chartjs-plugin-datalabels file-saver`.

Add to composer.json requirements: "laravel-enso/charts": "2.2.*".

Copy from the demo project the updated `DashboardController`.

Improves the "select" package by adding the `trackBy` property in the BE. laravel-enso/select#13.

Fixes laravel-enso/localisation#28

### 2.5.1
Fix menu overflow-x.

### 2.5.0
Adds collapsible menu.

Adds switch in the settings bar for menu state. The state is saved in user's preferences.

Closes laravel-enso/localisation#15

For existing projects:
- update "composer.json" to require "laravel-enso/core" 2.4.*;
- run `php artisan vendor:publish --force` and choose the following tags:
    "core-preferences", "localisation-assets", "localisation-config", "localisation-lang-files"
- run `php artisan localisation:merge` to make sure that you have the newest lang files.
- run `php artisan localisation:add-route` for the new auto-collection-of-the-missing-keys ;)
- truncate the preferences table.

### 2.4.2
Changes the warning class to bulma's default.

Updates packages.

Fixes:
    - laravel-enso/impersonate#3
    -laravel-enso/core#46. Adds UserPolicy. For existing projects you should do the following steps:

Existing Projects:
- copy App\Policies\UserPolicy
- update App\Providers\AuthServiceProvider
- update App\Http\Controllers\Administration\UserController (update and destroy methods).

### 2.4.1
Fixes #76.

Adds filter for missing translation in Localisation/EditTexts

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

Fixes:
    - laravel-enso/formbuilder#19
    - laravel-enso/vuedatatable#38

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
\
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

Fixes:
    - laravel-enso/vuedatatable#53
    - laravel-enso/enso#54
    - laravel-core/core#41

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

