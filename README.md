<!--h--> 
# Laravel Enso
[![StyleCI](https://styleci.io/repos/95136264/shield?branch=master)](https://styleci.io/repos/95136264)
[![Stories in In Progress](https://badge.waffle.io/laravel-enso/Enso.png?label=in%20progress&title=In%20Progress)](https://waffle.io/laravel-enso/Enso)
<!--/h-->

*Hit the ground running when building your new Laravel project with boilerplate and extra functionality out of the box!*

&nbsp;

<!--h-->
### Official Documentation
Check out the official documentation [here](https://docs.laravel-enso.com/).
<!--/h-->
 
### Demo

[Demo application](https://laravel-enso.com), just login with user: `admin@login.com` and password: `password` 


### Installation Steps

1. Download the project with `git clone https://github.com/laravel-enso/Enso.git`

2. Run in the project folder `composer install`

3. Configure `.env` file. Run `php artisan key:generate`

4. Run `php artisan migrate`

5. Login into the project with user: `admin@login.com`, password: `password`

6. (optional) Setup the `config/laravel-enso.php` and the `config/labels.php` files

7. (optional) `npm install` / `npm run dev` 

Enjoy!

### With enso you get

- [Customizable and powerful data-tables](https://github.com/laravel-enso/DataTable):
    - server side, with multi-argument, 
    - full column search 
    - sublime snippet for table template 
    - server-side excel export for every tables - coming soon
- [Bootstrap select](https://github.com/laravel-enso/Select) - server side builder with parameters conditioning, including pivot parameters
- Advanced owner / [roles](https://github.com/laravel-enso/RoleManager) / [permissions](https://github.com/laravel-enso/PermissionManager) structure 
- [Log management](https://github.com/laravel-enso/LogManager) -  view, download, clear
- User [action logger](https://github.com/laravel-enso/ActionLogger), so you can keep track of who's done what
- User [impersonation](https://github.com/laravel-enso/Impersonate) function, via middleware
- Bootstrap Tour powered [tutorials](https://github.com/laravel-enso/TutorialManager)
- [Localisation support](https://github.com/laravel-enso/Localisation)
- [Charts component](https://github.com/laravel-enso/Charts) with server side data builder
- [Comments component](https://github.com/laravel-enso/CommentsManager) with support for tagging users
- [Documents component](https://github.com/laravel-enso/DocumentsManager) with upload, download and inline view
- Ability to [track](https://github.com/laravel-enso/TrackWho) who created, updated and deleted models, using traits
- [File uploader](https://github.com/laravel-enso/FileManager) and file management library with VueJS front end component
- [Avatar functionality](https://github.com/laravel-enso/AvatarManager) for all users
- Ability to track the [different versions of a model](https://github.com/laravel-enso/HistoryTracker) through its lifetime
- Front-end date-picker, time-picker and type-ahead components VueJS
- User application preferences - every user has the ability to choose his theme (from 10 variants), set the menu style, app language and more
- Queueable jobs
- Push notifications - working out of the box (requires Pusher)
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
 - application-section wide, via the menu visibility, depending on the user's role. The users that don't have access to a certain menu, can't see it. The check is made before each menu redraw. This level doesn't block access to the routes, it just affects the visibility of the menus
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
- users have an active or inactive status, where inactive users cannot login or make requests into the application (but can set/reset their password) 

#### Preferences

The mechanism allows saving and loading upon every request the user's preferences for several aspects of the application.
- the preferences can be updated from the right-hand sidebar. From here the user can also reset the preferences to default.
- the user's preferences are store in the `preferences` table, under `value` column in JSON format.
- list of preferences
    - `lang` - the user's language
    - `theme` - the currently selected theme
    - `dtStateSave` - flag for saving the state/preferences for each data-table within the application (for up to 90 days)
    - `fixedHeader` - flag for setting the header fixed or scrollable
    - `collapsedSidebar` - flag for setting the starting position of the main sidebar extended or collapsed

#### Translations

A light translation service is available for the front-end, that may be called from any page or VueJS component
- the service endpoint is:  (GET) `home/getTranslations` 
- takes a list of however many string parameters
- gives back a JSON object, when the property names are the given parameters, and their values are their translated values

The service uses the Laravel `__()` translation method/mechanism in order to get the translated values.

#### Environment
- config
    - within the configuration file `config/larave-enso.php` various options may be set, such as the folders used for storing uploads, avatars, etc. the caching duration and the timestamps format when displaying them


#### Telemetry   
- the implicit `login` event that Laravel fires on a user's login triggers a listener that stores the user's ip, user-agent and timestamps inside the `logins` table



#### Exceptions    
- where needed, `EnsoException` instances are thrown. \EnsoException is also a Facade.
- depending on the type of the request (ajax or non ajax) a different response is returned
   
   

### Thanks

Built with with <span style="color:red"> &#10084;&#65039;</span>, crafted on Laravel 5.4, Bootstrap 3.3.7, Vuejs 2.x and:

[AdminLTE](https://adminlte.io), [DataTables](https://datatables.net), 
[Bootswatch Paper](https://bootswatch.com), [Chartjs](http://chartjs.org), 
[Font awesome](http://fontawesome.io), [Toastr.js](http://codeseven.github.io/toastr), 
[Particles.js](http://vincentgarreau.com/particles.js), [Nprogress.js](http://ricostacruz.com/nprogress), 
[Bootstrap Tour](http://bootstraptour.com), [Bootstrap Select](https://silviomoreto.github.io/bootstrap-select), 
[Bootstrap Datepicker](https://bootstrap-datepicker.readthedocs.io)

Special thanks to [Taylor Otwell](https://laravel.com/), [Jeffrey Way](https://laracasts.com), [Evan You](https://vuejs.org/), [Allan Jardine](https://datatables.net) and [Abdullah Almsaeed](https://adminlte.io/).


<!--h-->
### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

This package is released under the MIT license.
<!--/h-->