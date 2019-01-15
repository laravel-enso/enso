<?php


Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('operations.{userId}', function ($user, $userId) {
    return (int) $user->id === (int) $userId;
});
