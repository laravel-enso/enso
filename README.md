<!--h-->
# Laravel Enso
[![StyleCI](https://styleci.io/repos/95136264/shield?branch=master)](https://styleci.io/repos/95136264)
[![Stories in In Progress](https://badge.waffle.io/laravel-enso/Enso.png?label=in%20progress&title=In%20Progress)](https://waffle.io/laravel-enso/Enso)
<!--/h-->

*Hit the ground running when building your new Laravel SPA project with boilerplate and extra functionality out of the box!*

&nbsp;

[![Screenshot](https://laravel-enso.github.io/enso/screenshots/bulma_cap000_thumb.png)](https://laravel-enso.github.io/enso/screenshots/bulma_cap000.png)

For the v1.x / adminlte version, take a look at the **[adminlte](https://github.com/laravel-enso/Enso/tree/adminlte)** branch.

<!--h-->
### Official Documentation

The documentation for v2.x is in the process of being updated.

<!--/h-->

### Installation Steps

1. Download the project with `git clone https://github.com/laravel-enso/Enso.git`

2. Run in the project folder `composer install`

3. Configure `.env` file. Run `php artisan key:generate`

4. Run `php artisan migrate`

5. Login into the project with user: `admin@laravel-enso.com`, password: `password`

6. (optional) Setup the configuration files as needed, in `config/enso/*.php`

7. (optional) `npm install` / `npm run dev` / `hmr` /...

Enjoy!

### With Enso you get
A solid starting project, based on [Laravel](https://laravel.com) 5.5, [VueJS](https://vuejs.org) 2, [Bulma](https://bulma.io), integrated themes from [Bulmaswatch](https://jenil.github.io/bulmaswatch), all the VueJS goodies such as [VueEx](https://vuex.vuejs.org/en) and [VueRouter](https://router.vuejs.org/en), [Datatables](https://datatables.net/) and more, with features like: 

- [Customizable and powerful datatables](https://github.com/laravel-enso/DataTable):
    - server side, with multi-argument,
    - full column search
    - customizable column visibility
    - state save for each table, for certain options and preferences, with the option to reset everything to default
    - automatic action buttons generation, depending on user permissions
    - custom action buttons as needed
    - responsive priority setting for columns, when used on smaller screens
    - beautiful tag rendering for boolean flag columns
    - easy display of flag/type columns values
    - server-side excel export for every table
    - sublime snippet for table template
- [Vue select](https://github.com/laravel-enso/Select) - server side builder with parameter conditioning, including pivot parameters, built as a wrapper for [Vue-multiselect](https://github.com/monterail/vue-multiselect)
- Advanced owners / [roles](https://github.com/laravel-enso/RoleManager) / [permissions](https://github.com/laravel-enso/PermissionManager) structure
- [Log management](https://github.com/laravel-enso/LogManager) -  view, download, clear
- User [action logger](https://github.com/laravel-enso/ActionLogger), so you can keep track of who's done what
- User [impersonation](https://github.com/laravel-enso/Impersonate) for easy support and debugging
- Application interface [tutorials](https://github.com/laravel-enso/TutorialManager) based on the awesome [Intro.js](http://introjs.com) 
- [Localisation support](https://github.com/laravel-enso/Localisation)
- [Charts component](https://github.com/laravel-enso/Charts) with server side data builder, based on [Chart.js](http://www.chartjs.org)
- [Comments component](https://github.com/laravel-enso/CommentsManager) with support for tagging users
- [Documents component](https://github.com/laravel-enso/DocumentsManager) with upload, download and inline view
- Ability to [track](https://github.com/laravel-enso/TrackWho) who created, updated and deleted models, using traits
- [File uploader](https://github.com/laravel-enso/FileManager) and file management library
- [Avatar functionality](https://github.com/laravel-enso/AvatarManager) for all users
- Ability to track the [different versions of a model](https://github.com/laravel-enso/HistoryTracker) through its lifetime
- Front-end date-picker and time-picker, based on [Flatpickr](https://chmln.github.io/flatpickr)
- Server-side type-ahead
- User application-wide preferences - every user has the ability to choose his theme (from 10 variants), set the menu style, app language and more
- Queueable jobs
- Push notifications - working out of the box (requires [Pusher](https://pusher.com))
- Automatic breadcrumbs generation
- Application-wide timestamp formatting customization through the configuration file
- many more helpers and hidden gems

**fully working in less than 5 minutes!**

&nbsp;
&nbsp;
&nbsp;


### Under the Hood

#### Authentication
 - the standard Laravel authentication is used, via email & password

#### Authorization
 - application wide, checking user status: active/inactive. The check is made for every request, via a middleware. The inactive status prevents the user from logging in and making requests. If an user becomes inactive while he's still logged in, at his next request he'll be logged out and redirected to the login page with a notification
 - application-section wide, via the menu's visibility, depending on the user's role. The users that don't have access to a certain menu, can't see it. This level doesn't block access to the routes, it just affects the visibility of the menus
 - application-section wide, depending on permitted access to routes, which is tied to the user's role and the associated permissions for that role. The check is made for each request, via a middleware. If the user is not allowed on a route a 403 response is given back and a `laravel.log` entry is made.
 - content specific, via gates & policies. The check is made locally, when and where gates & policies are used

#### Middleware & Middleware Groups
- for the routes within the application, the 'core' middleware group is applied
- the 'core' group contains the middleware below, presented in the order they're applied:
    - `verify-active-state` - checks users's status (active/inactive)
    - `action-logger` - logs for each request the user's id, route, url, the HTTP verb and the timestamps
    - `verify-route-access` - authorizes the access to a route
    - `impersonate` - starts and stops the [impersonation](https://github.com/laravel-enso/Impersonate) of a user, when needed
    - `set-language` - sets the user's chosen language ([localisation](https://github.com/laravel-enso/Localisation))

#### Owners, [Roles](https://github.com/laravel-enso/RoleManager) & Users
- users represent the operators using the application
- roles are collections of permissions
- owners are user groups, and can represent departments, types, and even companies
- an owner can have many users
- an owner can have many roles
- an user has **just one owner** and **just one role**
- the role of a user may only be one of the roles available for its owner
- users have an active or inactive status, where inactive users cannot login or make requests in the application (but can set/reset their password)

#### Preferences

The mechanism allows saving and loading of the user's preferences for several aspects of the application.
- the preferences can be updated from the right-hand sidebar. From there the user can also reset the preferences to default.
- the user's preferences are stored in the `preferences` table, under `value` column, in JSON format.
- list of preferences
    - `lang` - the user's language
    - `theme` - the currently selected theme    

#### Translations
Are loaded at application load, and refreshed as needed


#### Environment
- config
    - within the configuration file `config/larave-enso.php` various options may be set, such as the folders used for storing uploads, avatars, etc. the caching duration and the timestamps format when displaying them


#### Telemetry
- the implicit `login` event that Laravel fires on a user's login triggers a listener that stores the user's ip, user-agent and timestamps inside the `logins` table



#### Exceptions
- when needed, the exceptions thrown are as specific as possible. 
- a pseudo generic exception, `EnsoException`, is also available. \EnsoException is also a Facade.
- since requests are supposed to be ajax, JSON responses are given back 



### Thanks

Built with with <span style="color:red"> &#10084;&#65039;</span>, crafted on Laravel 5.5, Bulma 0.6, Vuejs 2.x and:

[DataTables](https://datatables.net),
[Bulmaswatch](https://jenil.github.io/bulmaswatch/), [Chart.js](http://chartjs.org),
[Font awesome](http://fontawesome.io), [Toastr.js](http://codeseven.github.io/toastr),
[Nprogress.js](http://ricostacruz.com/nprogress),
[Intro.js](http://introjs.com/), [Vue-multiselect](https://github.com/monterail/vue-multiselect),
[Flatpickr](https://chmln.github.io/flatpickr/), [Bulma-Extensions](https://wikiki.github.io/bulma-extensions/overview)

Special thanks to [Taylor Otwell](https://laravel.com/), [Jeffrey Way](https://laracasts.com), [Evan You](https://vuejs.org/), [Allan Jardine](https://datatables.net) and [Jeremy Thomas](https://bulma.io).


<!--h-->
### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
<!--/h-->