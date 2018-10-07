<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            UserGroupSeeder::class,
            PersonSeeder::class,
            UserSeeder::class,
            CountrySeeder::class,
        ]);
    }
}
