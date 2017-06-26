@extends('laravel-enso/core::layouts.error')

@section('pageTitle', '401')

@section('content')

  <div class="content">
    <div class="title">Unauthorized action.</div>
    <div class="error">401 Error</div>
    <div class="details">
      <br>
      <small>
        {!! isset($exception) ? $exception->getMessage() : null !!}
        <a href="/">home</a>
      </small>
    </div>
  </div>

@endsection