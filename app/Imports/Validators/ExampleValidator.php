<?php

namespace App\Importing\Validators;

use LaravelEnso\DataImport\app\Classes\Validators\Validator;

class ExampleValidator extends Validator
{
    public function run()
    {
        //do custom validation logic
        //for registering issues in the summary use the method below
        //$this->summary->addStructureIssue($issue, $sheetName = '') where $issue is an object of the
        //$this->summary->addContentIssue($issue, $sheetName = '') where $issue is an object of the
        //an array with the following parameters
        //['category' => 'category', 'rowNumber' => 'rowNumber', 'column' => 'column', 'value' => 'value']
        //Note: only 'category' parameter is mandatory
        //Note: be sure to pass $index + 2 as a parameter for 'rowNumber' ;)
    }
}
