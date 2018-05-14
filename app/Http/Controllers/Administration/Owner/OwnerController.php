<?php

namespace App\Http\Controllers\Administration\Owner;

use App\Owner;
use App\Forms\Builders\OwnerForm;
use App\Http\Controllers\Controller;
use App\Http\Requests\ValidateOwnerRequest;

class OwnerController extends Controller
{
    public function create(OwnerForm $form)
    {
        return ['form' => $form->create()];
    }

    public function store(ValidateOwnerRequest $request, Owner $owner)
    {
        $owner = $owner->storeWithRoles(
            $request->all(),
            $request->get('roleList')
        );

        return [
            'message' => __('The owner was successfully created'),
            'redirect' => 'administration.owners.edit',
            'id' => $owner->id,
        ];
    }

    public function edit(Owner $owner, OwnerForm $form)
    {
        return ['form' => $form->edit($owner)];
    }

    public function update(ValidateOwnerRequest $request, Owner $owner)
    {
        $owner->updateWithRoles(
            $request->all(),
            $request->get('roleList')
        );

        return ['message' => __('The owner was successfully updated')];
    }

    public function destroy(Owner $owner)
    {
        $owner->delete();

        return [
            'message' => __('The owner was successfully deleted'),
            'redirect' => 'administration.owners.index',
        ];
    }
}
