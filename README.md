# Laravel Enso

[![StyleCI](https://styleci.io/repos/95136264/shield?branch=master)](https://styleci.io/repos/95136264)
[![Backers on Open Collective](https://opencollective.com/Enso/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/Enso/sponsors/badge.svg)](#sponsors) [![Waffle.io - Columns and their card count](https://badge.waffle.io/laravel-enso/Enso.svg?columns=all)](https://waffle.io/laravel-enso/Enso)
[![Build Status](https://travis-ci.org/laravel-enso/Enso.svg?branch=master)](https://travis-ci.org/laravel-enso/Enso)

**Hit the ground running when building your new Laravel SPA project with boilerplate and extra functionality out of the box!**

&nbsp;

[![Watch the demo](https://laravel-enso.github.io/enso/screenshots/bulma_cap000_thumb.png)](https://laravel-enso.github.io/enso/videos/bulma_quick_walkthrough.webm)

<sup>click on the photo to view a short demo in compatible browsers</sup>

### Important

If you are using this project please consult the **[changelog](https://github.com/laravel-enso/Enso/blob/master/CHANGELOG.md)** on every update.

For the v1.x / adminlte version, take a look at the **[adminlte](https://github.com/laravel-enso/Enso/tree/adminlte)** branch.

### Official Documentation

The documentation is available [here](https://docs.laravel-enso.com) split into backend and frontend.
Note that most sections have short demo clips.

### Take It For A Spin

You may try out a live demo installation by visiting [laravel-enso.com](https://www.laravel-enso.com) 
and logging in with `admin@laravel-enso.com` and `password`. 

### Installation Steps

1. Download the project with `git clone https://github.com/laravel-enso/enso.git --depth 1`

2. Within the project folder run `composer install`

3. Create a database for your site (see the [Laravel database documentation](https://laravel.com/docs/6.x/database)), 
copy or rename the `.env.example` file to `.env`, 
edit the database configuration information, and run `php artisan key:generate`

4. In order to serve the back-end API, take a look at the Local Development Server section of the [Laravel installation documentation](https://laravel.com/docs/6.x/#installation)
and consider using [Valet](https://laravel.com/docs/6.x/valet) for a better experience

5. Run `php artisan migrate --seed`

6. Open the `client` folder, copy the `.env.example` file, save it as `.env` and set the URL 
for the back-end API (which you've configured at step 4)

7. Run `yarn && yarn build`

8. Launch the site and log into the project with user: `admin@laravel-enso.com`, password: `password`

9. For live reload / hot module replacement functionality run `yarn serve`

10. (optional) Setup the configuration files as needed, in `config/enso/*.php`


Enjoy!

### Support services (*new*)

While developing Enso, we constantly received private inquiries from devs and teams asking us about paid support. Some of these requests even lead to fruitful collaborations, so we finally decided to launch such an option.

If you're looking for premium support when building applications with Enso we can help you with that. Our support packages start at 480 Eur / month with 8 hours included. With premium support you will get:

- a private repo on our self hosted gitlab instance where you can host your project
- priority in addressing your issues
- help with understanding the Enso environment
- getting you to be proficient when developing on Enso
- mentoring 
- code reviews
- general advice & support on Laravel & Vue
- assistance on Enso version upgrades
- up to 4 hours / month of remote desktop sessions and call conferences with your team
- direct communication via Slack during our office hours

The support services are provided by a team of 4 members.

### Thanks

Built with with <span style="color:red"> &#10084;&#65039;</span>, crafted on Laravel 5.6.x, Bulma 0.6.x, Vuejs 2.5.x and:

[Vue Router](https://router.vuejs.org/en), [Vuex](https://vuex.vuejs.org/en/), [Axios](https://github.com/axios/axios),
[Font awesome 5](https://fontawesome.com), [Animate.css](https://daneden.github.io/animate.css/), 
[Bulma-Extensions](https://wikiki.github.io/bulma-extensions/overview), [Driver.js](https://kamranahmed.info/driver.js/),
[Chart.js](http://chartjs.org), [Flatpickr](https://chmln.github.io/flatpickr/), 

Special thanks to [Taylor Otwell](https://laravel.com/), [Jeffrey Way](https://laracasts.com), [Evan You](https://vuejs.org/) and [Jeremy Thomas](https://bulma.io).

### Contributions

are welcome. Pull requests are great, but issues are good too.

### Sponsor (*new*)

This project is backed by [Earthlink](https://www.earthlink.ro)

## Contributors

This project exists thanks to all the people who contribute. 
<a href="graphs/contributors"><img src="https://opencollective.com/Enso/contributors.svg?width=890&button=false" /></a>


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/Enso#backer)]

<a href="https://opencollective.com/Enso#backers" target="_blank"><img src="https://opencollective.com/Enso/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/Enso#sponsor)]

<a href="https://opencollective.com/Enso/sponsor/0/website" target="_blank"><img src="https://opencollective.com/Enso/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/Enso/sponsor/1/website" target="_blank"><img src="https://opencollective.com/Enso/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/Enso/sponsor/2/website" target="_blank"><img src="https://opencollective.com/Enso/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/Enso/sponsor/3/website" target="_blank"><img src="https://opencollective.com/Enso/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/Enso/sponsor/4/website" target="_blank"><img src="https://opencollective.com/Enso/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/Enso/sponsor/5/website" target="_blank"><img src="https://opencollective.com/Enso/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/Enso/sponsor/6/website" target="_blank"><img src="https://opencollective.com/Enso/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/Enso/sponsor/7/website" target="_blank"><img src="https://opencollective.com/Enso/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/Enso/sponsor/8/website" target="_blank"><img src="https://opencollective.com/Enso/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/Enso/sponsor/9/website" target="_blank"><img src="https://opencollective.com/Enso/sponsor/9/avatar.svg"></a>


### License

This package is released under the MIT license.
