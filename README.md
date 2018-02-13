<!--h-->
# Laravel Enso
[![StyleCI](https://styleci.io/repos/95136264/shield?branch=master)](https://styleci.io/repos/95136264)
[![Stories in In Progress](https://badge.waffle.io/laravel-enso/Enso.png?label=in%20progress&title=In%20Progress)](https://waffle.io/laravel-enso/Enso)
<!--/h-->

*Hit the ground running when building your new Laravel SPA project with boilerplate and extra functionality out of the box!*

&nbsp;

[![Watch the demo](https://laravel-enso.github.io/enso/screenshots/bulma_cap000_thumb.png)](https://laravel-enso.github.io/enso/videos/bulma_quick_walkthrough.webm)

<sup>click on the photo to view a short demo in compatible browsers</sup>

### Important

If you are using this project please consult the **[changelog](https://github.com/laravel-enso/Enso/blob/master/CHANGELOG.md)** on every update.

For the v1.x / adminlte version, take a look at the **[adminlte](https://github.com/laravel-enso/Enso/tree/adminlte)** branch.

<!--h-->
### Official Documentation

The documentation is available [here](https://docs.laravel-enso.com).
Note that most sections have short demo clips.

<!--/h-->

### Take It For A Spin

You may try out a live demo installation by visiting [laravel-enso.com](https://www.laravel-enso.com) 
and logging in with `admin@laravel-enso.com` and `password`. 

### Installation Steps

1. Download the project with `git clone https://github.com/laravel-enso/Enso.git`

2. Run in the project folder `composer install`

3. Configure the `.env` file. Run `php artisan key:generate`

4. Run `php artisan migrate`

5. Login into the project with user: `admin@laravel-enso.com`, password: `password`

6. (optional) Setup the configuration files as needed, in `config/enso/*.php`

7. (optional) `npm install` / `npm run dev` / `hmr` /...

Enjoy!

IMPORTANT NOTE: Due to laravel mix limitations, when using `hmr`,  
you need to comment lines 3-to-7 inside `webpack.mix.js` in order for it to work correctly. 
Don't forget to uncomment them back when building without hot module replacement.

### Using Enso for Your Project

1. Follow the steps above to install & setup
2. If you find Enso suited for building a project with it, delete the .git folder, run `git init`, 
and use a dedicated repo for your custom project
4. Develop
5. To update run `composer update` / `npm update` and compile
6. Breaking changes in the dependencies? Update your custom code then update the new versions in `composer.json` and run `composer update`
7. Need another new project ? Start again from the first step

Note: When we must make breaking changes to the packages, we increase the minor version. 
Due to how dependencies are defined, composer will not update the dependencies for you in that case, 
that's why you need to look at the changelog, be aware of the changes, update your code and then manually update 
the dependencies' minor version, so that you can continue to receive updates.  

### With Enso you get
A solid starting project, based on [Laravel](https://laravel.com) 5.6, [VueJS](https://vuejs.org) 2, 
[Bulma](https://bulma.io), integrated themes from [Bulmaswatch](https://jenil.github.io/bulmaswatch), 
all the VueJS goodies such as [VueEx](https://vuex.vuejs.org/en) and [VueRouter](https://router.vuejs.org/en), 
with features like: 

- [Customizable and powerful datatables](https://github.com/laravel-enso/VueDatatable):
    - JSON templates
    - server side
    - multi-argument full column search
    - customizable column visibility
    - state save in localStorage for each table
    - automatic action buttons generation, depending on user permissions
    - custom action buttons as needed
    - beautiful tag rendering for boolean flag columns
    - easy display of flag/type columns values
    - server-side excel export for every table

- [Beautiful forms](https://github.com/laravel-enso/Formbuilder):
    - JSON templates
    - server side
    - validation
    - customizable
    
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
- User, application-wide preferences - every user has the ability to choose his theme (from 10 variants), set the menu style, app language and more
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

&nbsp;
#### Authentication
 - the standard Laravel authentication is used, via email & password

&nbsp; 
#### Stateful vs Stateless
Since we wanted to log data about our users and their requests, as well as check various permissions, the concept of a
'truly' stateless and secure API backend becomes impossible.

From a security standpoint we did not feel that a RESTful would not be more secure but probably even less safe.

Finally, from our own internal tests we concluded that we had no performance issues related to having the 
application stateful, especially since we don't aim to build applications of Twitter's scale.

In conclusion, even though at a point during the development we had the back-end set up as an API using JWT, 
in the end we designed it stateful since session is stored in the DB or in files, depending on your chosen setup.   
 
&nbsp;
#### Session management
- since Enso is built on top of a Laravel back-end, we are using the provided session management

&nbsp;
#### Security
- since Laravel is using HttpOnly cookies and an additional CSRF token, this should provide protection against both XSS and CSRF attacks
- remember that when working with VueJS, the v-html directive is XSS vulnerable, so it should be used only with sanitized/safe data   

&nbsp;
#### Authorization
 - application wide, checking user status: active/inactive. The check is made for every request, via a middleware. The inactive status prevents the user from logging in and making requests. If an user becomes inactive while he's still logged in, at his next request he'll be logged out and redirected to the login page with a notification
 - application-section wide, via the menu's visibility, depending on the user's role. The users that don't have access to a certain menu, can't see it. This level doesn't block access to the routes, it just affects the visibility of the menus
 - application-section wide, depending on permitted access to routes, which is tied to the user's role and the associated permissions for that role. The check is made for each request, via a middleware. If the user is not allowed on a route a 403 response is given back and a `laravel.log` entry is made.
 - content specific, via gates & policies. The check is made locally, when and where gates & policies are used

&nbsp;
#### Middleware & Middleware Groups
- for the routes within the application, the 'core' middleware group is applied
- the 'core' group contains the middleware below, presented in the order they're applied:
    - `verify-active-state` - checks users's status (active/inactive)
    - `action-logger` - logs for each request the user's id, route, url, the HTTP verb and the timestamps
    - `verify-route-access` - authorizes the access to a route
    - `impersonate` - starts and stops the [impersonation](https://github.com/laravel-enso/Impersonate) of a user, when needed
    - `set-language` - sets the user's chosen language ([localisation](https://github.com/laravel-enso/Localisation))

&nbsp;
#### Owners, [Roles](https://github.com/laravel-enso/RoleManager) & Users
- users represent the operators using the application
- roles are collections of permissions
- owners are user groups, and can represent departments, types, and even companies
- an owner can have many users
- an owner can have many roles
- an user has **just one owner** and **just one role**
- the role of a user may only be one of the roles available for its owner
- users have an active or inactive status, where inactive users cannot login or make requests in the application (but can set/reset their password)

&nbsp;
#### Preferences
The mechanism allows saving and loading of the user's preferences for several aspects of the application.
- the preferences can be updated from the right-hand sidebar. From there the user can also reset the preferences to default.
- the user's preferences are stored in the `preferences` table, under `value` column, in JSON format.
- list of preferences
    - `lang` - the user's language
    - `theme` - the currently selected theme    

&nbsp;
#### Translations
Are loaded at application load, and refreshed as needed

&nbsp;
#### Environment
- config
    - within the configuration enso folder `config/enso` you'll find configuration files for the various laravel-enso packages 
    - inside 'config.php' various options may be set, such as the folders used for storing uploads, avatars, etc. the caching duration and the timestamps format when displaying them, the app version displayed in the footer and more 

&nbsp;
#### Telemetry
- the implicit `login` event that Laravel fires on a user's login triggers a listener that stores the user's ip, user-agent and timestamps inside the `logins` table

&nbsp;
#### Exceptions
- when needed, the exceptions thrown are as specific as possible
- since requests are supposed to be ajax, JSON responses are given back 

### Usage Notes
Please note that because we want to keep the compiled size down, throughout the enso ecosystem, 
icons are imported selectively.

What this means for you is that the necessary icons should be imported inside your components/pages. 
If you want to import FA icons globally (not recommended) the place to include them is: 

`resources/assets/js/app.js`

For menus, icons should be imported in:
`assest/js/pages/layout/sidebar/icons/app.js`

For languages, flag icons should be imported in:
`resources/assets/sass/flags.scss`

### Thanks

Built with with <span style="color:red"> &#10084;&#65039;</span>, crafted on Laravel 5.6, Bulma 0.6, Vuejs 2.5 and:

[Vue Router](https://router.vuejs.org/en), [Vuex](https://vuex.vuejs.org/en/), [Axios](https://github.com/axios/axios),
[Font awesome 5](https://fontawesome.com), [Animate.css](https://daneden.github.io/animate.css/), 
[Bulmaswatch](https://jenil.github.io/bulmaswatch), [Bulma-Extensions](https://wikiki.github.io/bulma-extensions/overview),
[Nprogress.js](http://ricostacruz.com/nprogress), [Vue-multiselect](https://github.com/monterail/vue-multiselect),
[Intro.js](http://introjs.com/),  [Chart.js](http://chartjs.org), [Flatpickr](https://chmln.github.io/flatpickr/), 

Special thanks to [Taylor Otwell](https://laravel.com/), [Jeffrey Way](https://laracasts.com), [Evan You](https://vuejs.org/) and [Jeremy Thomas](https://bulma.io).

<!--h-->
### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
<!--/h-->