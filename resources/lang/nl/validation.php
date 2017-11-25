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

    'accepted'        => ':attribute moet geaccepteerd worden.',
    'active_url'      => ':attribute is geen geldige url.',
    'after'           => ':attribute moet een geldige datum zijn na :date.',
    'after_or_equal'  => ':attribute moet een geldige datum zijn op of na :date.',
    'alpha'           => ':attribute mag alleen uit letters bestaan.',
    'alpha_dash'      => ':attribute mag alleen uit letters, nummers en koppeltekens bestaan.',
    'alpha_num'       => ':attribute mag alleen uit letters en nummers bestaan.',
    'array'           => ':attribute moet een array zijn.',
    'before'          => ':attribute moet een geldige datum zijn voor :date.',
    'before_or_equal' => ':attribute moet een geldige datum zijn voor of op uiterlijk :date.',
    'between'         => [
        'numeric' => ':attribute moet een numerieke waarde tussen :min en :max zijn.',
        'file'    => ':attribute moet minimaal :min en :max kilobytes groot zijn.',
        'string'  => ':attribute moet minimaal :min en :max karakters bevatten.',
        'array'   => ':attribute moet tussen de :min en :max items bevatten.',
    ],
    'boolean'        => ':attribute veld moet waar of niet waar zijn.',
    'confirmed'      => ':attribute moet bevestigd worden.',
    'date'           => ':attribute is geen geldige datum.',
    'date_format'    => ':attribute komt niet overeen met het formaat: :format.',
    'different'      => ':attribute en :other moeten verschillend zijn.',
    'digits'         => ':attribute moet numeriek zijn: :digits.',
    'digits_between' => ':attribute moet tussen :min en :max numerieke tekens bevatten.',
    'dimensions'     => ':attribute heeft een ongeldige afbeeldingsgrootte.',
    'distinct'       => ':attribute veld heeft een ongeldige dubbele waarde.',
    'email'          => ':attribute moet een geldig e-mailadres zijn.',
    'exists'         => 'Het geselecteerde :attribute is ongeldig.',
    'file'           => ':attribute moet een bestand zijn.',
    'filled'         => ':attribute veld moet een waarde bevatten.',
    'image'          => ':attribute moet een afbeelding zijn.',
    'in'             => 'De geselecteerde waarde :attribute is ongeldig.',
    'in_array'       => ':attribute veld bestaat niet in :other.',
    'integer'        => ':attribute moet een reëel nummer zijn.',
    'ip'             => ':attribute moet een geldig IP-adres zijn.',
    'ipv4'           => ':attribute moet een geldig IPv4-adres zijn.',
    'ipv6'           => ':attribute moet een geldig IPv6-adres zijn',
    'json'           => ':attribute moet een geldige JSON string zijn.',
    'max'            => [
        'numeric' => ':attribute mag niet groter zijn dan :max.',
        'file'    => ':attribute mag niet groter zijn dan :max kilobytes.',
        'string'  => ':attribute mag niet groter zijn dan :max karakters.',
        'array'   => ':attribute mag niet meer items bevatten dan :max.',
    ],
    'mimes'     => ':attribute moet een bestand zijn van het type: :values.',
    'mimetypes' => ':attribute moet een bestand zijn van het type: :values.',
    'min'       => [
        'numeric' => ':attribute moet minimaal groter zijn dan :min.',
        'file'    => ':attribute moet minimaal groter zijn dan :min kilobytes.',
        'string'  => ':attribute moet minimaal groter zijn dan :min characters.',
        'array'   => ':attribute moet minimaal :min items bevatten.',
    ],
    'not_in'               => 'Het geselecteerde :attribute is ongeldig.',
    'numeric'              => ':attribute moet een geldig nummer zijn.',
    'present'              => ':attribute veld moet aanwezig zijn.',
    'regex'                => ':attribute formaat is ongeldig.',
    'required'             => ':attribute veld is verplicht.',
    'required_if'          => ':attribute veld is verplicht als :other de volgende waarde heeft: :value.',
    'required_unless'      => ':attribute veld is verplicht tenzij :other de volgende waarde heeft :values.',
    'required_without'     => ':attribute veld is verplicht :values niet aanwezig is.',
    'required_without_all' => ':attribute veld is verplicht, wanneer geen van :values waarden aanwezig zijn.',
    'same'                 => ':attribute en :other moeten overeenkomen.',
    'size'                 => [
        'numeric' => ':attribute moet :size zijn.',
        'file'    => ':attribute moet :size kilobytes zijn.',
        'string'  => ':attribute moet :size tekens bevatten.',
        'array'   => ':attribute moet :size items bevatten.',
    ],
    'string'   => ':attribute moet een geldige tekst zijn.',
    'timezone' => ':attribute moet een geldige tijdzone zijn.',
    'unique'   => ':attribute moet uniek zijn.',
    'uploaded' => ':attribute kon niet geupload worden.',
    'url'      => ':attribute formaat is ongeldig.',

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
