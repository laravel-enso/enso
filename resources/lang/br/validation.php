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

    'accepted'        => ':attribute deve ser aceito.',
    'active_url'      => ':attribute não é uma URL válida.',
    'after'           => ':attribute deve ser uma data após :date.',
    'after_or_equal'  => ':attribute deve ser uma data após ou igual a :date.',
    'alpha'           => ':attribute pode apenas conter letras.',
    'alpha_dash'      => ':attribute pode apenas conter letras, números e traços.',
    'alpha_num'       => ':attribute pode apenas conter letras e números.',
    'array'           => ':attribute deve ser um array.',
    'before'          => ':attribute deve ser uma data prévia a :date.',
    'before_or_equal' => ':attribute deve ser uma data prévia ou igual a :date.',
    'between'         => [
        'numeric' => ':attribute deve estar entre :min e :max.',
        'file'    => ':attribute deve estar entre :min e :max kilobytes.',
        'string'  => ':attribute deve estar entre :min e :max characters.',
        'array'   => ':attribute deve ter entre :min e :max items.',
    ],
    'boolean'        => 'Campo :attribute deve ser verdadeiro ou falso.',
    'confirmed'      => ':attribute confirmação não corresponde.',
    'date'           => ':attribute não é uma data válida.',
    'date_format'    => ':attribute não corresponde com o formato :format.',
    'different'      => ':attribute e :other devem ser diferentes.',
    'digits'         => ':attribute deve possuir :digits dígitos.',
    'digits_between' => ':attribute deve estar entre :min e :max dígitos.',
    'dimensions'     => ':attribute possui dimensões de imagem inválidas.',
    'distinct'       => 'Campo :attribute possui um valor duplicado.',
    'email'          => ':attribute deve ser um endereço de e-mail válido.',
    'exists'         => ':attribute selecionado é inválido.',
    'file'           => ':attribute deve ser um arquivo.',
    'filled'         => 'Campo :attribute é requerido.',
    'gt'             => [
        'numeric' => 'The :attribute must be greater than :value.',
        'file'    => 'The :attribute must be greater than :value kilobytes.',
        'string'  => 'The :attribute must be greater than :value characters.',
        'array'   => 'The :attribute must have more than :value items.',
    ],
    'gte' => [
        'numeric' => 'The :attribute must be greater than or equal :value.',
        'file'    => 'The :attribute must be greater than or equal :value kilobytes.',
        'string'  => 'The :attribute must be greater than or equal :value characters.',
        'array'   => 'The :attribute must have :value items or more.',
    ],
    'image'          => 'Campo :attribute deve ser uma imagem.',
    'in'             => ':attribute selecionado é inválido.',
    'in_array'       => 'Campo :attribute não existe em :other.',
    'integer'        => ':attribute deve ser um inteiro.',
    'ip'             => ':attribute deve ser um endereço de IP válido.',
    'ipv4'           => ':attribute deve ser um endereço de IPv4 válido.',
    'ipv6'           => ':attribute deve ser um endereço de IPv6 válido.',
    'json'           => ':attribute deve ser uma string JSON válida.',
    'lt'             => [
        'numeric' => 'The :attribute must be less than :value.',
        'file'    => 'The :attribute must be less than :value kilobytes.',
        'string'  => 'The :attribute must be less than :value characters.',
        'array'   => 'The :attribute must have less than :value items.',
    ],
    'lte' => [
        'numeric' => 'The :attribute must be less than or equal :value.',
        'file'    => 'The :attribute must be less than or equal :value kilobytes.',
        'string'  => 'The :attribute must be less than or equal :value characters.',
        'array'   => 'The :attribute must not have more than :value items.',
    ],
    'max'            => [
        'numeric' => ':attribute pode não ser maior que :max.',
        'file'    => ':attribute pode não ser maior que :max kilobytes.',
        'string'  => ':attribute pode não ser maior que :max characters.',
        'array'   => ':attribute pode não ter mais do que :max itens.',
    ],
    'mimes'     => ':attribute deve ser um arquivo do tipo: :values.',
    'mimetypes' => ':attribute deve ser um arquivo do tipo: :values.',
    'min'       => [
        'numeric' => ':attribute deve ter no mínimo :min.',
        'file'    => ':attribute deve ter no mínimo :min kilobytes.',
        'string'  => ':attribute deve ter no mínimo :min characters.',
        'array'   => ':attribute deve ter no mínimo :min itens.',
    ],
    'not_in'               => 'The selected :attribute is invalid.',
    'not_regex'            => 'The :attribute format is invalid.',
    'numeric'              => ':attribute deve ser um número.',
    'present'              => 'Campo :attribute  deve estar presente.',
    'regex'                => 'Formato do :attribute é invalid.',
    'required'             => 'Campo :attribute é requerido.',
    'required_if'          => 'Campo :attribute é requerido quando :other é :value.',
    'required_unless'      => 'Campo :attribute é requerido a não ser que :other está em :values.',
    'required_with'        => 'Campo :attribute é requerido quando :values está presente.',
    'required_with_all'    => 'Campo :attribute é requerido quando :values está presente.',
    'required_without'     => 'Campo :attribute é requerido quando :values não está presente.',
    'required_without_all' => 'Campo :attribute é requerido quando nenhum dos :values estão presentes.',
    'same'                 => 'Campo :attribute e :other devem corresponder.',
    'size'                 => [
        'numeric' => ':attribute deve ter :size.',
        'file'    => ':attribute deve ter :size kilobytes.',
        'string'  => ':attribute deve ter :size characters.',
        'array'   => ':attribute deve conter :size itens.',
    ],
    'starts_with' => 'The :attribute must start with one of the following: :values',
    'string'      => ':attribute deve ser uma string.',
    'timezone'    => ':attribute deve estar em uma zona válida.',
    'unique'      => ':attribute já foi escolhido.',
    'uploaded'    => ':attribute falhou no envio.',
    'url'         => 'Formato do :attribute é inválido.',
    'uuid'        => 'The :attribute must be a valid UUID.',

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
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];
