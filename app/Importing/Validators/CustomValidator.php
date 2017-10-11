<?php

namespace App\Importing\Validators;

use LaravelEnso\DataImport\app\Classes\Validators\AbstractValidator;

class CustomValidator extends AbstractValidator
{
    protected $template;
    protected $xlsx;
    protected $summary;

    public function run()
    {
        //do custom validation logic
        //for registering issues use the method below
        //addContentIssue(string $sheetName, string $category, int $rowNumber, string $column, $value)
    }
}
