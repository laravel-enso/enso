<?php

use App\User;
use Faker\Factory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use LaravelEnso\Core\app\Notifications\ResetPasswordNotification;
use LaravelEnso\RoleManager\app\Models\Role;
use LaravelEnso\TestHelper\app\Traits\SignIn;
use LaravelEnso\TestHelper\app\Traits\TestCreateForm;
use LaravelEnso\TestHelper\app\Traits\TestDataTable;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase, SignIn, TestDataTable, TestCreateForm;

    private $owner;
    private $role;
    private $faker;
    private $prefix = 'administration.users';

    protected function setUp()
    {
        parent::setUp();

        // $this->withoutExceptionHandling();
        $this->signIn(User::first());
        $this->faker = Factory::create();
        $this->owner = config('enso.config.ownerModel')::first(['id']);
        $this->role = Role::first(['id']);
    }

    /** @test */
    public function store()
    {
        Notification::fake();

        $postParams = $this->postParams();
        $response = $this->post(route('administration.users.store', [], false), $postParams);
        $user = User::whereFirstName($postParams['first_name'])->first(['id']);

        $response->assertStatus(200)
            ->assertJson([
                'message' => 'The user was successfully created',
                'redirect' => 'administration.users.edit',
                'id' => $user->id,
            ]);

        Notification::assertSentTo([$user], ResetPasswordNotification::class);
    }

    /** @test */
    public function edit()
    {
        $user = $this->createUser();

        $this->get(route('administration.users.edit', $user->id, false))
            ->assertStatus(200)
            ->assertJsonStructure(['form']);
    }

    /** @test */
    public function update()
    {
        $user = $this->createUser();
        $user->last_name = 'edited';

        $this->patch(route('administration.users.update', $user->id, false), $user->toArray())
            ->assertStatus(200)
            ->assertJsonFragment(['message']);

        $this->assertEquals('edited', $user->fresh()->last_name);
    }

    /** @test */
    public function destroy()
    {
        $user = $this->createUser();

        $this->delete(route('administration.users.destroy', $user->id, false))
            ->assertStatus(200)
            ->assertJsonStructure(['message', 'redirect']);

        $this->assertNull($user->fresh());
    }

    private function createUser()
    {
        return User::create($this->postParams());
    }

    private function postParams()
    {
        return [
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'role_id' => $this->role->id,
            'phone' => $this->faker->phoneNumber,
            'is_active' => 1,
            'email' => $this->faker->email,
            'owner_id' => $this->owner->id,
        ];
    }
}
