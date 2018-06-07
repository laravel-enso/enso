<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ValidateUserRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $emailUnique = Rule::unique('users', 'email');

        $emailUnique = ($this->method() === 'PATCH')
            ? $emailUnique->ignore($this->route('user')->id)
            : $emailUnique;

        return [
            'first_name' => 'required|max:50',
            'last_name' => 'required|max:50',
            'is_active' => 'boolean',
            'role_id' => 'required|exists:roles,id',
            'owner_id' => 'required|exists:owners,id',
            'phone' => 'max:30',
            'email' => ['email', 'required', $emailUnique],
        ];
    }
}
