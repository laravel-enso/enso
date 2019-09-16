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

    'accepted'        => 'El campo :attribute debe ser aceptado.',
    'active_url'      => 'El campo :attribute no es una URL válida.',
    'after'           => 'El campo :attribute debe ser una fecha después de :date.',
    'after_or_equal'  => 'El campo :attribute debe ser una fecha igual o superior a :date.',
    'alpha'           => 'El campo :attribute debe contener solo caracteres.',
    'alpha_dash'      => 'El campo :attribute debe contener solo letras, números y guiones.',
    'alpha_num'       => 'El campo :attribute debe contener solo letras y números.',
    'array'           => 'El campo :attribute debe ser un array.',
    'before'          => 'El campo :attribute debe tener una fecha anterior a :date.',
    'before_or_equal' => 'El campo :attribute debe tener una fecha anterior o igual a :date.',
    'between'         => [
        'numeric' => 'El campo :attribute debe estar entre :min y :max.',
        'file'    => 'El campo :attribute debe tener un tamaño mínimo de :min y máximo :max kilobytes.',
        'string'  => 'El campo :attribute debe tener entre :min y :max caracteres.',
        'array'   => 'El campo :attribute debe tener entre :min y :max items.',
    ],
    'boolean'        => 'El campo :attribute debe ser verdadero o falso.',
    'confirmed'      => 'El campo :attribute no está confirmado.',
    'date'           => 'El campo :attribute no es una fecha válida.',
    'date_format'    => 'El campo :attribute no coincide con el formato: :format.',
    'different'      => 'El campo :attribute y :other deben ser diferentes.',
    'digits'         => 'El campo :attribute deben ser dígitos: :digits.',
    'digits_between' => 'El campo :attribute debe tener entre :min y :max dígitos.',
    'dimensions'     => 'La imagen :attribute tiene dimensiones inválidas.',
    'distinct'       => 'El campo :attribute tiene un valor duplicado.',
    'email'          => 'El campo :attribute debe contener un email válido.',
    'exists'         => 'El campo seleccionado :attribute es inválido.',
    'file'           => 'El campo :attribute debe ser un archivo.',
    'filled'         => 'El campo :attribute debe contener un valor.',
    'image'          => 'El campo :attribute debe ser una imagen.',
    'in'             => 'El campo seleccionado :attribute es inválido.',
    'in_array'       => 'El campo :attribute no existe en :other.',
    'integer'        => 'El campo :attribute debe ser un entero.',
    'ip'             => 'El campo :attribute debe ser una dirección IP válida.',
    'ipv4'           => 'El campo :attribute debe ser una dirección IPv4 válida.',
    'ipv6'           => 'El campo :attribute debe ser una dirección IPv6 válida.',
    'json'           => 'El campo :attribute debe ser un JSON.',
    'max'            => [
        'numeric' => 'El campo :attribute no debe ser mayor a :max.',
        'file'    => 'El campo :attribute no debe ser mayor a :max kilobytes.',
        'string'  => 'El campo :attribute no debe ser mayor a :max caracteres.',
        'array'   => 'El campo :attribute no debe tener más de :max items.',
    ],
    'mimes'     => 'El campo :attribute debe ser un archivo de tipo: :values.',
    'mimetypes' => 'El campo :attribute debe ser un archivo de tipo: :values.',
    'min'       => [
        'numeric' => 'El campo :attribute debe ser de al menos :min.',
        'file'    => 'El campo :attribute debe ser de al menos :min kilobytes.',
        'string'  => 'El campo :attribute debe ser de al menos :min caracteres.',
        'array'   => 'El campo :attribute debe tener al menos :min items.',
    ],
    'not_in'               => 'El campo seleccionado :attribute es inválido.',
    'numeric'              => 'El campo :attribute debe ser un número.',
    'present'              => 'El campo :attribute debe estar presente.',
    'regex'                => 'El campo :attribute no es válido.',
    'required'             => 'El campo :attribute es requerido.',
    'required_if'          => 'El campo :attribute es requerido cuando :other es :value.',
    'required_unless'      => 'El campo :attribute es requerido a no ser que :other sea :values.',
    'required_with'        => 'El campo :attribute es requerido cuando :values está presente.',
    'required_with_all'    => 'El campo :attribute es requerido cuando :values están presentes.',
    'required_without'     => 'El campo :attribute es requerido cuando :values no están presentes.',
    'required_without_all' => 'El campo :attribute es requerido cuando ninguno de los valores :values están presentes.',
    'same'                 => 'El campo :attribute y :other no coinciden.',
    'size'                 => [
        'numeric' => 'El campo :attribute debe ser de :size.',
        'file'    => 'El campo :attribute debe ser de :size kilobytes.',
        'string'  => 'El campo :attribute debe ser de :size caracteres.',
        'array'   => 'El campo :attribute debe contener :size items.',
    ],
    'string'   => 'El campo :attribute debe ser una cadena de texto.',
    'timezone' => 'El campo :attribute debe ser una zona válida.',
    'unique'   => 'El campo :attribute ya está en uso.',
    'uploaded' => 'El campo :attribute falló al subirse.',
    'url'      => 'El formato del campo :attribute es inválido.',

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

    'attributes' => [],

];
