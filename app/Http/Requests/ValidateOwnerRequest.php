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
        $owner = $this->route('owner');

        $nameUnique = Rule::unique('owners', 'name');

        $nameUnique = (request()->getMethod() === 'PATCH')
            ? $nameUnique->ignore($owner->id)
            : $nameUnique;

        return [
            'is_active' => 'boolean',
            'name' => [
                'required',
                $nameUnique,
            ],
        ];
    }
}
