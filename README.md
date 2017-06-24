# Laravel Enso
[![Total Downloads](https://poser.pugx.org/laravel-enso/enso/downloads)](https://packagist.org/packages/laravel-enso/enso)
[![Latest Stable Version](https://poser.pugx.org/laravel-enso/enso/version)](https://packagist.org/packages/laravel-enso/enso)

demo *soon*

### Installation Steps

1. Download the project with `git clone https://github.com/laravel-enso/Enso.git`

2. Run in the project folder `composer install`

3. Configure `.env` file. Run `php artisan key:generate`

4. Run `php artisan migrate`

5. Publish the needed assets with:

```
art vendor:publish --tag=core-storage`
art vendor:publish --tag=avatars-storage
```

6. Setup the `config/laravel-enso.php` file

7. (optional) `npm install` / `npm run dev`

8. Login into the project with user: `admin@login.com`, password: `password`

9. Enjoy

### Contributions

are welcome