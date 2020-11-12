# Laravel Enso's Changelog

## 4.4.0

This release further decouples ui packages and introduces automatic asset 
discovery and registration as well as various other improvements. 
This also means breaking changes, so please read through the entire changelog.

### Front-end

All packages which depend on the `ui` package have had their dependency versions updated. 

Also, the `icons.js` files have been moved from the `bulma` folder one level up, since icons are css framework agnostic.

The packages thus affected have been updated to their next respective major version.

#### auth (new)
- extracted assets (components, pages, routes, store) from the ui package

#### bookmarks (new)
- extracted assets (components) from the ui package

#### charts
- improved chart update
- fixed chart redraw on dataset changes
- improves yAxis callback handling

#### data-import
- fixed select params label

#### datepicker
- added new 'value-updated' event on component value change
- improved enso datepicker alt-format handling

#### filters
- updated eslint config

#### forms
- implemented field related methods that controls the field's meta.hidden attributes by showField and hideField
- reused these methods inside the showTab/hideTab methods, while avoiding forceUpdate after each meta.hidden change
- fields methods are independent of tabs/sections and target all form fields
- adds ability to handle nested fields withing the form template
- displays default field for a custom field if the slot is empty

#### io (new)
- extracted assets (components) from the ui package

#### localisation
- extracted assets (components) from the ui package

#### notifications (new)
- extracted assets (components, pages, routes) from the ui package

#### tasks (new)
- front-end for the new task management package

#### themes
- added flags background color
- made options having warning text more visible in vue-filter

#### tutorials
- extracted assets (components) from the ui package

#### tree-view
- small cleanup


#### user-groups (new)
- extracted assets (pages, routes) from the ui package

#### users (new)
- extracted assets (components, pages, routes) from the ui package

#### ui
- implemented automatic registration for package:
    - routes
    - icons
    - custom registration logic
    - store
- extracted various assets to existing or new packages as required

### Back-end

#### activity-log
- fixed test name

#### avatars
- improved avatar generation during tests, to use a locally generated avatar vs doing
a gravatar fetch, which speeds up tests
- fixed gravatar warning message

#### charts
- added `autoYMin()` helper
- added support for gridlines
- switched `xAxisConfig` parameter order and made dataset optional; 
- added `disableAutoRadius()` in bubble; added `datalabels` config setter
- improved chart customization
- added method return types and typed parameters

#### cli
- the generated routes now use controller classes

#### departments
- removes leftover namespace

#### enums
- added the option to have the key validated when getting a value (disabled by default)
- added the option to have localisation on/off per enum as opposed to all enums,
by adding a `$localisation` variable with the desired value in your enum;

#### forms
- the Form service now uses the `when` trait so actions may be chained conditionally 

#### io
- fixed the variable name within the `BroadcastServiceProvider`

#### core
- data-import is no longer required and becomes optional

#### currencies
- fixed CurrencySeeder namespace

#### control-panel
- switched to using Laravel's Http instead of Guzzle
- refactored services & fixed invalid response edge case bug 

#### helpers
- small refactor in `FactoryResolver`

#### products
- added data-import missing dependency

#### select
- fixed bug for multiple select-filter where values were missing due to failed collection merging

#### tasks (new)
- task management package

#### tables
- refines export done notification

#### upgrade
- added pre-migration option for the upgrade command; upgrades that run pre-migration 
are also visible in the status report
- refactored the `MigratesStructure` contract
- fixed missing `Priority` column in the status report

### Upgrade steps

As this new release cleaned up the `@enso-ui/ui` package and simplified icon and route
registration, a bit of cleanup is also required in the local project.

Also, a new `php artisan enso:upgrade --before-migration` command is available that 
is meant be used to run upgrade commands **before** the `php artisan migrate` command,
which should help with complex upgrade scenarios.  


To upgrade:
- within `client/.env` the following entry must be added:
    - `VUE_APP_PROFILE=bulma`
    The `.env` file must also be available during the build stage, 
    so take that into account if using CI flows.    
- the `@core` alias has been renamed to `@ui`, so update all usages, including
    - local resources (pages, components)
    - the `client/.eslintrc.js` file
- bump at least the following dependencies within `client\package.json`:
    - `@enso-ui/activity-log": "^3.0`
    - `"@enso-ui/bulma": "^4.0",`
    - `"@enso-ui/calendar": "^3.0",`
    - `"@enso-ui/data-import": "^3.0",`
    - `"@enso-ui/how-to": "^3.0",`
    - `"@enso-ui/tasks": "^2.0",`
    - `"@enso-ui/tutorials": "^3.0",`
    - `"@enso-ui/ui": "^4.0",`
    - `"eslint-config-airbnb-base": "14.2.0",`
    Depending on your project requirement, the following dependencies might also need bumping:
    - `todo`
- remove any package icon imports from `client/src/js/app.js`, as they're no longer required
- unless using them in your local resources, you may remove package aliases from `client/vue.config.js`
- within the `composer.json` `scripts/post-update-cmd` section add the command:
    - `"php artisan enso:upgrade:status"`
- the `data-import` package has been made optional, if you still require it, add it to:
    - `composer.json` : `"laravel-enso/data-import": "^5.0",`
    - `package.json`: `"@enso-ui/data-import": "^3.0",`    
- remove the following files as they're no longer required:
    - `client/src/js/store.js`
    - `client/src/js/router.js`
- look within this [commit]() and update:
    - `client/src/js/enso.js`
    - `client/src/js/localState.js`
- run `composer update`
- run `yarn`, `yarn upgrade && yarn` to ensure you have the latest package versions and patches are applied. If necessary, update your patch files
- `php artisan migrate`
- `composer dump-autoload`
- `php artisan enso:upgrade`
- in `Envoyer` and/or during your deployment process, add the new command:
    `php artisan enso:upgrade --before-migration`
- update the Enso version to `4.4.0` in `config/enso/config.php`
