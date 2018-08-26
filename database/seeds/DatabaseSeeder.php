<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            OwnerSeeder::class,
            UserSeeder::class,
            CountrySeeder::class,
        ]);
    }
}
