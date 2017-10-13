<?php

namespace App\Importing\Validators;

use LaravelEnso\DataImport\app\Classes\Validators\AbstractValidator;

class ExampleValidator extends AbstractValidator
{
    public function run()
    {
        //do custom validation logic
        //for registering issues in the summary use the method below
        //$this->summary->addStructureIssue($issue, $sheetName = '') where $issue is an object of the
        //$this->summary->addContentIssue($issue, $sheetName = '') where $issue is an object of the
        //'LaravelEnso\DataImport\app\Classes\Reporting\Issue' class that can be instantiated with
        //an array with the following parameters
        //['category' => 'category', 'rowNumber' => 'rowNumber', 'column' => 'column', 'value' => 'value']
        //Note: only 'category' parameter is mandatory
        //Note: be sure to pass $index + 2 as a parameter for 'rowNumber' ;)
    }
}
