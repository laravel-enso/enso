<?php

use App\User;
use Faker\Factory;
use Tests\TestCase;
use LaravelEnso\RoleManager\app\Models\Role;
use LaravelEnso\TestHelper\app\Traits\SignIn;
use Illuminate\Foundation\Testing\RefreshDatabase;
use LaravelEnso\TestHelper\app\Traits\TestDataTable;
use LaravelEnso\TestHelper\app\Traits\TestCreateForm;

class OwnerTest extends TestCase
{
    use RefreshDatabase, SignIn, TestDataTable, TestCreateForm;

    private $role;
    private $faker;
    private $prefix = 'administration.owners';

    protected function setUp()
    {
        parent::setUp();

        // $this->withoutExceptionHandling();

        $this->seed()
            ->signIn(User::first());

        $this->role = Role::first(['id']);
        $this->faker = Factory::create();
    }

    /** @test */
    public function store()
    {
        $postParams = $this->postParams();

        $response = $this->post(
            route('administration.owners.store', [], false),
            $postParams
        );

        $owner = config('enso.config.ownerModel')::whereName($postParams['name'])
                    ->first();

        $response->assertStatus(200)
            ->assertJsonStructure(['message'])
            ->assertJsonFragment([
                'redirect' => 'administration.owners.edit',
                'id' => $owner->id,
            ]);
    }

    /** @test */
    public function edit()
    {
        $postParams = $this->postParams();

        $owner = config('enso.config.ownerModel')::create($postParams);

        $this->get(route('administration.owners.edit', $owner->id, false))
            ->assertStatus(200)
            ->assertJsonStructure(['form' => []]);
    }

    /** @test */
    public function update()
    {
        $postParams = $this->postParams();

        $owner = config('enso.config.ownerModel')::create($postParams)
                    ->append(['roleList']);

        $owner->name = 'edited';

        $this->patch(
                route('administration.owners.update', $owner->id, false),
                $owner->toArray()
        )->assertStatus(200)
        ->assertJsonStructure(['message']);

        $this->assertEquals('edited', $owner->fresh()->name);
    }

    /** @test */
    public function destroy()
    {
        $postParams = $this->postParams();

        $owner = config('enso.config.ownerModel')::create($postParams);

        $this->delete(route('administration.owners.destroy', $owner->id, false))
            ->assertStatus(200)
            ->assertJsonStructure(['message', 'redirect']);

        $this->assertNull($owner->fresh());
    }

    /** @test */
    public function cant_destroy_if_has_users_attached()
    {
        $postParams = $this->postParams();

        $owner = config('enso.config.ownerModel')::create($postParams);

        $this->attachUser($owner);

        $this->delete(route('administration.owners.destroy', $owner->id, false))
            ->assertStatus(409);

        $this->assertNotNull($owner->fresh());
    }

    private function attachUser($owner)
    {
        $owner->users()->create([
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'phone' => $this->faker->phoneNumber,
            'is_active' => 1,
            'email' => $this->faker->email,
            'owner_id' => $owner->id,
            'role_id' => $this->role->id,
        ]);
    }

    private function postParams()
    {
        return [
            'name' => $this->faker->firstName,
            'description' => $this->faker->sentence,
            'is_active' => 1,
            '_method' => 'POST',
            'roleList' => []
        ];
    }
}
