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

    'accepted'        => ':attribute должен быть принят.',
    'active_url'      => ':attribute не действительный URL.',
    'after'           => ':attribute должна быть дата после :date.',
    'after_or_equal'  => ':attribute должна быть дата после или равна :date.',
    'alpha'           => ':attribute может содержать только буквы.',
    'alpha_dash'      => ':attribute может содержать только буквы, числа, знаки тире и нижнего подчеркивания.',
    'alpha_num'       => ':attribute может содержать только буквы и числа.',
    'array'           => ':attribute должен быть массивом.',
    'before'          => ':attribute должен быть датой до :date.',
    'before_or_equal' => ':attribute должен быть датой до или равен :date.',
    'between'         => [
        'numeric' => ':attribute должен быть между :min и :max.',
        'file'    => ':attribute должен быть  между :min и :max килобайтов.',
        'string'  => ':attribute должен быть  между :min и :max символов.',
        'array'   => ':attribute должен быть между :min и :max элементов.',
    ],
    'boolean'        => ':attribute поле должно быть  true или false.',
    'confirmed'      => ':attribute подтверждение не совпало.',
    'date'           => ':attribute не действительная дата.',
    'date_equals'    => ':attribute должна быть дата равная  :date.',
    'date_format'    => ':attribute не соответствует формату :format.',
    'different'      => ':attribute и :other должны быть разными.',
    'digits'         => ':attribute должен быть  :digits цифрами.',
    'digits_between' => ':attribute должен быть  между :min и :max цифр.',
    'dimensions'     => ':attribute имеет недопустимые размеры изображения.',
    'distinct'       => ':attribute поле имеет дублирующее значение.',
    'email'          => ':attribute должен быть корректным email адресом.',
    'ends_with'      => ':attribute должен заканчиватся одним из: :values.',
    'exists'         => 'выбранный :attribute не допустим.',
    'file'           => ':attribute должен быть  файлом.',
    'filled'         => ':attribute поле должно быть заполненно.',
    'gt'             => [
        'numeric' => ':attribute должен быть  больше чем :value.',
        'file'    => ':attribute должен быть  больше чем :value килобайтов.',
        'string'  => ':attribute должен быть  больше чем :value симоволо.',
        'array'   => ':attribute должен быть больше чем :value элементов.',
    ],
    'gte' => [
        'numeric' => ':attribute должен быть  больше или равен :value.',
        'file'    => ':attribute должен быть  больше или равен :value килобайтам.',
        'string'  => ':attribute должен быть  больше или равен :value символам.',
        'array'   => ':attribute должен иметь :value элеметов или больше.',
    ],
    'image'    => ':attribute должен быть  картинкой.',
    'in'       => 'выбранный :attribute не допустим.',
    'in_array' => ':attribute поле не существует в :other.',
    'integer'  => ':attribute должен быть  целым числом.',
    'ip'       => ':attribute должен быть  корректным IP адресом.',
    'ipv4'     => ':attribute должен быть  корректным IPv4 адресом.',
    'ipv6'     => ':attribute должен быть  корректным IPv6 адресом.',
    'json'     => ':attribute должен быть  корректной JSON строкой.',
    'lt'       => [
        'numeric' => ':attribute должен быть  меньше чем :value.',
        'file'    => ':attribute должен быть  меньше чем :value килобайтов.',
        'string'  => ':attribute должен быть  меньше чем :value символов.',
        'array'   => ':attribute должен быть меньше чем :value элементов.',
    ],
    'lte' => [
        'numeric' => ':attribute должен быть  меньше или равен :value.',
        'file'    => ':attribute должен быть  меньше или равен :value килобайтам.',
        'string'  => ':attribute должен быть  меньше или равен :value символам.',
        'array'   => ':attribute не должен иметь больше :value элементов.',
    ],
    'max' => [
        'numeric' => ':attribute не может быть больше чем :max.',
        'file'    => ':attribute не может быть больше чем :max килобайт.',
        'string'  => ':attribute не может быть больше чем :max символов.',
        'array'   => ':attribute may not have more than :max элементов.',
    ],
    'mimes'     => ':attribute должен быть тип файла: :values.',
    'mimetypes' => ':attribute должен быть  тип файла: :values.',
    'min'       => [
        'numeric' => ':attribute должен быть  как минимум :min.',
        'file'    => ':attribute должен быть  как минимум :min килобайтов.',
        'string'  => ':attribute должен быть  как минимум :min символов.',
        'array'   => ':attribute должен быть как минимум :min элементов.',
    ],
    'not_in'               => 'selected :attribute не допустим.',
    'not_regex'            => ':attribute формат не допустим.',
    'numeric'              => ':attribute должен быть  числом.',
    'password'             => 'неверный пароль.',
    'present'              => ':attribute поле должно присутствовать.',
    'regex'                => ':attribute формат не допустим.',
    'required'             => ':attribute поле обязательно.',
    'required_if'          => ':attribute поле обязательно когда :other равно :value.',
    'required_unless'      => ':attribute поле обязательно пока :other не одно из :values.',
    'required_with'        => ':attribute поле обязательно когда :values представлены.',
    'required_with_all'    => ':attribute поле обязательно когда :values представлены.',
    'required_without'     => ':attribute поле обязательно когда :values не представлены.',
    'required_without_all' => ':attribute поле обязательно когда не один из  :values не представлен.',
    'same'                 => ':attribute и :other должны совпадать.',
    'size'                 => [
        'numeric' => ':attribute должен быть  :size.',
        'file'    => ':attribute должен быть  :size килобайтов.',
        'string'  => ':attribute должен быть  :size символов.',
        'array'   => ':attribute должен содержать :size элементов.',
    ],
    'starts_with' => ':attribute должен начинаться с одного из следующих: :values.',
    'string'      => ':attribute должен быть  строкой.',
    'timezone'    => ':attribute должен быть  корректной таймзоной.',
    'unique'      => ':attribute уже занят.',
    'uploaded'    => ':attribute не удалось загрузить.',
    'url'         => ':attribute формат не допустим.',
    'uuid'        => ':attribute должен быть  корректным UUID.',

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
