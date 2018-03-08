<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'The :attribute must be accepted.',
    'active_url' => 'The :attribute is not a valid URL.',
    'after' => 'The :attribute must be a date after :date.',
    'after_or_equal' => 'The :attribute must be a date after or equal to :date.',
    'alpha' => 'The :attribute may only contain letters.',
    'alpha_dash' => 'The :attribute may only contain letters, numbers, and dashes.',
    'alpha_num' => 'The :attribute may only contain letters and numbers.',
    'array' => 'The :attribute must be an array.',
    'before' => 'The :attribute must be a date before :date.',
    'before_or_equal' => 'The :attribute must be a date before or equal to :date.',
    'between' => [
        'numeric' => ':attribute талбарт :min-ээс :max хүртэл тоо оруулна.',
        'file' => 'The :attribute must be between :min and :max kilobytes.',
        'string' => ' :attribute талбарт :min-ээс :max хүртэл тэмдэгт оруулна.',
        'array' => 'The :attribute must have between :min and :max items.',
    ],
    'boolean' => 'The :attribute field must be true or false.',
    'confirmed' => ':attribute талбарыг дахин оруулахдаа ялгаатай оруулсан байна.',
    'date' => ':attribute талбарт огноо оруулна уу.',
    'date_format' => 'The :attribute does not match the format :format.',
    'different' => 'The :attribute and :other must be different.',
    'digits' => 'The :attribute must be :digits digits.',
    'digits_between' => 'The :attribute must be between :min and :max digits.',
    'dimensions' => 'The :attribute has invalid image dimensions.',
    'distinct' => 'The :attribute field has a duplicate value.',
    'email' => ':attribute нь зөв и-мэйл хаяг байх шаардлагатай.',
    'exists' => 'The selected :attribute is invalid.',
    'file' => 'The :attribute must be a file.',
    'filled' => 'The :attribute field must have a value.',
    'image' => 'The :attribute must be an image.',
    'in' => 'The selected :attribute is invalid.',
    'in_array' => 'The :attribute field does not exist in :other.',
    'integer' => ' :attribute талбарт тоо оруулна.',
    'ip' => 'The :attribute must be a valid IP address.',
    'ipv4' => 'The :attribute must be a valid IPv4 address.',
    'ipv6' => 'The :attribute must be a valid IPv6 address.',
    'json' => 'The :attribute must be a valid JSON string.',
    'max' => [
        'numeric' => ':attribute талбарт :max-ээс их байж болохгүй.',
        'file' => ':attribute файлын хэмжээ :max kilobyte-с их байж болохгүй.',
        'string' => ':attribute текстийн урт :max-ээс их байж болохгүй.',
        'array' => ':attribute талбарт :max-с их өгөгдөл сонгох боломжгүй.',
    ],
    'mimes' => ':attribute нь :values төрлийн файл байх шаардлагатай.',
    'mimetypes' => ':attribute нь :values төрлийн файл байх шаардлагатай.',
    'min' => [
        'numeric' => ':attribute талбарт :min-ээс бага байж болохгүй.',
        'file' => ':attribute файлын хэмжээ :min kilobyte-с бага байж болохгүй.',
        'string' => ':attribute текстийн урт :min-ээс бага байж болохгүй.',
        'array' => ':attribute талбарт :min-с бага өгөгдөл сонгох боломжгүй.',
    ],
    'not_in' => 'The selected :attribute is invalid.',
    'numeric' => ':attribute тоо байх шаардлагатай.',
    'present' => 'The :attribute field must be present.',
    'regex' => ':attribute буруу форматтай байна.',
    'required' => ':attribute талбарыг заавал оруулна уу.',
    'required_if' => 'The :attribute field is required when :other is :value.',
    'required_unless' => 'The :attribute field is required unless :other is in :values.',
    'required_with' => 'The :attribute field is required when :values is present.',
    'required_with_all' => 'The :attribute field is required when :values is present.',
    'required_without' => 'The :attribute field is required when :values is not present.',
    'required_without_all' => 'The :attribute field is required when none of :values are present.',
    'same' => 'The :attribute and :other must match.',
    'size' => [
        'numeric' => 'The :attribute must be :size.',
        'file' => 'The :attribute must be :size kilobytes.',
        'string' => 'The :attribute must be :size characters.',
        'array' => 'The :attribute must contain :size items.',
    ],
    'string' => 'The :attribute must be a string.',
    'timezone' => 'The :attribute must be a valid zone.',
    'unique' => ':attribute талбарт оруулсан өгөгдөл аль хэдийн бүртгэгдсэн өгөгдөл тул дахин өөр өгөгдөл оруулна уу.',
    'uploaded' => 'The :attribute failed to upload.',
    'url' => 'The :attribute format is invalid.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [
        'price' => 'Үнэ',
        'password'=>'Нууц үг'
    ],

];
