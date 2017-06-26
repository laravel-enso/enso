@extends('laravel-enso/core::layouts.error')

@section('pageTitle', '404')

@section('content')

  <div class="content">
    <div class="title">Page not found.</div>
    <div class="error">404 Error</div>
    <div class="details">
      <br>
      <small>
        {!! isset($exception) ? $exception->getMessage() : null !!}
        <a href="/">home</a>
      </small>
    </div>
  </div>

@endsection