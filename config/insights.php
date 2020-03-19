<?php

declare(strict_types=1);

use NunoMaduro\PhpInsights\Domain\Insights\CyclomaticComplexityIsHigh;
use NunoMaduro\PhpInsights\Domain\Insights\ForbiddenDefineFunctions;
use NunoMaduro\PhpInsights\Domain\Insights\ForbiddenFinalClasses;
use NunoMaduro\PhpInsights\Domain\Insights\ForbiddenNormalClasses;
use NunoMaduro\PhpInsights\Domain\Insights\ForbiddenPrivateMethods;
use NunoMaduro\PhpInsights\Domain\Insights\ForbiddenTraits;
use NunoMaduro\PhpInsights\Domain\Metrics\Architecture\Classes;
use ObjectCalisthenics\Sniffs\Classes\ForbiddenPublicPropertySniff;
use ObjectCalisthenics\Sniffs\Files\FunctionLengthSniff;
use ObjectCalisthenics\Sniffs\Metrics\MethodPerClassLimitSniff;
use ObjectCalisthenics\Sniffs\NamingConventions\ElementNameMinimalLengthSniff;
use PHP_CodeSniffer\Standards\Generic\Sniffs\Files\LineLengthSniff;
use PHP_CodeSniffer\Standards\Generic\Sniffs\NamingConventions\UpperCaseConstantNameSniff;
use PHP_CodeSniffer\Standards\PEAR\Sniffs\WhiteSpace\ObjectOperatorIndentSniff;
use PhpCsFixer\Fixer\Whitespace\MethodChainingIndentationFixer;
use SlevomatCodingStandard\Sniffs\Classes\DisallowLateStaticBindingForConstantsSniff;
use SlevomatCodingStandard\Sniffs\ControlStructures\DisallowEmptySniff;
use SlevomatCodingStandard\Sniffs\Functions\StaticClosureSniff;
use SlevomatCodingStandard\Sniffs\Functions\UnusedParameterSniff;
use SlevomatCodingStandard\Sniffs\TypeHints\DeclareStrictTypesSniff;
use SlevomatCodingStandard\Sniffs\TypeHints\DisallowMixedTypeHintSniff;
use SlevomatCodingStandard\Sniffs\TypeHints\ParameterTypeHintSniff;
use SlevomatCodingStandard\Sniffs\TypeHints\PropertyTypeHintSniff;
use SlevomatCodingStandard\Sniffs\TypeHints\ReturnTypeHintSniff;
use SlevomatCodingStandard\Sniffs\Variables\UnusedVariableSniff;

return [
    /*
    |--------------------------------------------------------------------------
    | Default Preset
    |--------------------------------------------------------------------------
    |
    | This option controls the default preset that will be used by PHP Insights
    | to make your code reliable, simple, and clean. However, you can always
    | adjust the `Metrics` and `Insights` below in this configuration file.
    |
    | Supported: "default", "laravel", "symfony", "magento2"
    |
    */

    'preset' => 'laravel',

    /*
    |--------------------------------------------------------------------------
    | Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may adjust all the various `Insights` that will be used by PHP
    | Insights. You can either add, remove or configure `Insights`. Keep in
    | mind that all added `Insights` must belong to a specific `Metric`.
    |
    */

    'exclude' => [
        //  'path/to/directory-or-file'
    ],

    'add' => [
        Classes::class => [
            ForbiddenFinalClasses::class,
        ],
    ],

    'remove' => [
        DisallowEmptySniff::class,
        DisallowLateStaticBindingForConstantsSniff::class,
        DeclareStrictTypesSniff::class,
        DisallowMixedTypeHintSniff::class,
        ForbiddenDefineFunctions::class,
        ForbiddenNormalClasses::class,
        ForbiddenPublicPropertySniff::class,
        ForbiddenTraits::class,
        MethodChainingIndentationFixer::class,
        ObjectOperatorIndentSniff::class,
        ReturnTypeHintSniff::class,
        ParameterTypeHintSniff::class,
        PropertyTypeHintSniff::class,
        StaticClosureSniff::class,
        UpperCaseConstantNameSniff::class,
    ],

    'config' => [
        CyclomaticComplexityIsHigh::class => [
            'maxComplexity' => 10,
        ],
        ElementNameMinimalLengthSniff::class => [
            'minLength' => 3,
            'allowedShortNames' => [
                'i', 'q', 'id', 'ip', 'up', 'to', 'cc', 'by', 'lt', 'lte',
                'gt', 'gte', 'eq', 'io', 'IO', 'NA', 'Ms', 'Mr',
            ],
        ],
        ForbiddenPrivateMethods::class => [
            'title' => 'The usage of private methods is not idiomatic in Laravel.',
        ],
        FunctionLengthSniff::class => [
            'exclude' => [],
        ],
        LineLengthSniff::class => [
            'lineLimit' => 100,
            'absoluteLineLimit' => 120,
        ],
        MethodPerClassLimitSniff::class => [
            'maxCount' => 10,
            'exclude' => [],
        ],
        UnusedParameterSniff::class => [
            'exclude' => [
                'app/Http/Resources',
                'app/Http/Middleware/Authenticate.php',
            ],
        ],
        UnusedVariableSniff::class => [
            'exclude' => [
                'app/Enums',
            ],
        ],
    ],
];
