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

    'accepted'        => ':attribute doit être accepté.',
    'active_url'      => ':attribute n\'est pas une URL valide.',
    'after'           => ':attribute doit être une date supérieure à :date.',
    'after_or_equal'  => ':attribute doit être une date supérieure ou égale à :date.',
    'alpha'           => ':attribute ne doit contenir que des lettres.',
    'alpha_dash'      => ':attribute ne doit contenir que des lettres, chiffres et tirets.',
    'alpha_num'       => ':attribute ne doit contenir que des lettres et des chiffres.',
    'array'           => ':attribute doit être un tableau.',
    'before'          => ':attribute doit être une date inférieure à :date.',
    'before_or_equal' => ':attribute doit être une date inférieure ou égale à :date.',
    'between'         => [
        'numeric' => ':attribute doit être entre :min et :max.',
        'file'    => ':attribute doit faire entre :min et :max kiloctets.',
        'string'  => ':attribute doit faire entre :min et :max caractères.',
        'array'   => ':attribute doit avoir entre :min et :max éléments.',
    ],
    'boolean'        => ':attribute doit être vrai ou faux.',
    'confirmed'      => 'La confirmation de :attribute ne correspond pas.',
    'date'           => ':attribute n\'est pas une date valide.',
    'date_format'    => ':attribute n\'est pas au format :format.',
    'different'      => ':attribute et :other doivent être différents.',
    'digits'         => ':attribute doit être composé de :digits chiffres.',
    'digits_between' => ':attribute doit contenir entre :min et :max chiffres.',
    'dimensions'     => 'Les dimensions de l\'image :attribute ne sont pas valides.',
    'distinct'       => ':attribute possède une valeur dupliquée.',
    'email'          => ':attribute doit être une adresse e-mail valide.',
    'ends_with' => 'The :attribute must end with one of the following: :values',
    'exists'         => 'l\'attribut :attribute sélectionné est invalide.',
    'file'           => ':attribute doit être un fichier.',
    'filled'         => ':attribute ne peut pas être vide.',
    'gt' => [
        'numeric' => 'The :attribute must be greater than :value.',
        'file' => 'The :attribute must be greater than :value kilobytes.',
        'string' => 'The :attribute must be greater than :value characters.',
        'array' => 'The :attribute must have more than :value items.',
    ],
    'gte' => [
        'numeric' => 'The :attribute must be greater than or equal :value.',
        'file' => 'The :attribute must be greater than or equal :value kilobytes.',
        'string' => 'The :attribute must be greater than or equal :value characters.',
        'array' => 'The :attribute must have :value items or more.',
    ],
    'image'          => ':attribute doit être une image.',
    'in'             => 'L\'attribut :attribute sélectionné est invalide.',
    'in_array'       => 'Le champ :attribute n\'existe pas dans :other.',
    'integer'        => ':attribute doit être un nombre entier.',
    'ip'             => ':attribute doit être une adresse IP valide.',
    'ipv4'           => ':attribute doit être une adresse IPv4 valide.',
    'ipv6'           => ':attribute doit être une adresse IPv6 valide.',
    'json'           => ':attribute doit être un JSON valide.',
    'lt' => [
        'numeric' => 'The :attribute must be less than :value.',
        'file' => 'The :attribute must be less than :value kilobytes.',
        'string' => 'The :attribute must be less than :value characters.',
        'array' => 'The :attribute must have less than :value items.',
    ],
    'lte' => [
        'numeric' => 'The :attribute must be less than or equal :value.',
        'file' => 'The :attribute must be less than or equal :value kilobytes.',
        'string' => 'The :attribute must be less than or equal :value characters.',
        'array' => 'The :attribute must not have more than :value items.',
    ],
    'max'            => [
        'numeric' => ':attribute ne peut pas être plus grand que :max.',
        'file'    => ':attribute ne doit pas dépasser :max kiloctets.',
        'string'  => ':attribute ne doit pas dépasser :max caractères.',
        'array'   => ':attribute ne peut pas contenir plus de :max éléments.',
    ],
    'mimes'     => ':attribute doit être un fichier de type: :values.',
    'mimetypes' => ':attribute doit être un fichier de type: :values.',
    'min'       => [
        'numeric' => ':attribute ne peut pas être plus petit que :min.',
        'file'    => ':attribute doit faire au moins :min kiloctets.',
        'string'  => ':attribute doit faire au moins :min caractères.',
        'array'   => ':attribute doit contenir au moins :min éléments.',
    ],
    'not_in'               => 'l\'attribut :attribute sélectionné est invalide.',
    'not_regex' => 'The :attribute format is invalid.',
    'numeric'              => ':attribute doit être un nombre.',
    'present'              => 'Le champ :attribute doit être présent.',
    'regex'                => 'Le format de :attribute est invalide.',
    'required'             => 'Le champ :attribute est requis.',
    'required_if'          => 'Le champ :attribute est requis si le champ :other vaut :value.',
    'required_unless'      => 'Le champ :attribute est requis sauf si le champ :other possède une des valeurs :values.',
    'required_with'        => 'Le champ :attribute est requis si les valeurs :values sont presentes.',
    'required_with_all'    => 'Le champ :attribute est requis si les valeurs :values sont présentes.',
    'required_without'     => 'Le champ :attribute est requis si les valeurs :values ne sont pas présentes.',
    'required_without_all' => 'Le champ :attribute est requis si aucune des :values ne sont présentes.',
    'same'                 => ':attribute et :other doivent correspondre.',
    'size'                 => [
        'numeric' => ':attribute doit faire :size.',
        'file'    => ':attribute doit faire :size kiloctets.',
        'string'  => ':attribute doit faire :size caractères.',
        'array'   => ':attribute doit contenir :size éléments.',
    ],
    'starts_with' => 'The :attribute must start with one of the following: :values',
    'string'   => ':attribute doit être une chaîne de caractères.',
    'timezone' => ':attribute doit être une zone valide.',
    'unique'   => ':attribute existe déjà.',
    'uploaded' => 'Impossible d\'uploader :attribute.',
    'url'      => 'Le format :attribute est invalide.',
    'uuid' => 'The :attribute must be a valid UUID.',

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
