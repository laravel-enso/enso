# Laravel Enso
[![StyleCI](https://styleci.io/repos/95136264/shield?branch=master)](https://styleci.io/repos/95136264)

*Hit the ground running when building your new Laravel project with boilerplate and extra functionality out of the box!*


### With enso you get

- [Customizable and powerful data-tables](https://github.com/laravel-enso/DataTable):
    - server side, with multi-argument, 
    - full column search 
    - sublime snippet for table template 
    - server side excel export for every tables - coming soon
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
- many more helpers and hidden gems

***fully working in less than 5 minutes!***
<br>



### Demo

[Demo application](https://laravel-enso.com), just login with user: `admin@login.com` and password: `password` 

### Installation Steps

1. Download the project with `git clone https://github.com/laravel-enso/Enso.git`

2. Run in the project folder `composer install`

3. Configure `.env` file. Run `php artisan key:generate`

4. Run `php artisan migrate`

5. Setup the `config/laravel-enso.php` file

6. (optional) `npm install` / `npm run dev`

7. Login into the project with user: `admin@login.com`, password: `password`

Enjoy!







Built with with &#10084;&#65039;, crafted on Laravel 5.4, Bootstrap 3.3.7, Vuejs 2.x and:

[AdminLTE](https://adminlte.io), [DataTables](https://datatables.net), 
[Bootswatch Paper](https://bootswatch.com), [Chartjs](http://chartjs.org), 
[Font awesome](http://fontawesome.io), [Toastr.js](http://codeseven.github.io/toastr), 
[Particles.js](http://vincentgarreau.com/particles.js), [Nprogress.js](http://ricostacruz.com/nprogress), 
[Bootstrap Tour](http://bootstraptour.com), [Bootstrap Select](https://silviomoreto.github.io/bootstrap-select), 
[Bootstrap Datepicker](https://bootstrap-datepicker.readthedocs.io)

Special thanks to [Taylor Otwell](https://laravel.com/), [Jeffrey Way](https://laracasts.com), [Evan You](https://vuejs.org/), [Allan Jardine](https://datatables.net) and [Abdullah Almsaeed](https://adminlte.io/)...


### Contributions

are welcome. Pull requests are great, but issues are good too.

### License

Laravel Enso Core is released under the MIT license.
