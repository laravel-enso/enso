@extends('laravel-enso/core::layouts.error')

@section('pageTitle', '400')

@section('content')

  <div class="content">
    <div class="title">Bad request.</div>
    <div class="error">400 Error</div>
    <div class="details">
      <br>
      <small>
        {!! isset($exception) ? $exception->getMessage() : null !!}
        <a href="/">home</a>
      </small>
    </div>
    @include('errors.sentry')
  </div>

@endsection