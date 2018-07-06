<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ValidateOwnerRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $nameUnique = Rule::unique('owners', 'name');

        $nameUnique = ($this->method() === 'PATCH')
            ? $nameUnique->ignore($this->route('owner')->id)
            : $nameUnique;

        return [
            'name' => ['required', $nameUnique],
            'is_active' => 'boolean',
            'description' => 'nullable',
            'roleList' => 'array',
        ];
    }
}
