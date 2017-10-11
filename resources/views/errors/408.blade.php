@extends('laravel-enso/core::layouts.error')

@section('pageTitle', '408')

@section('content')

  <div class="content">
    <div class="title">Request timeout.</div>
    <div class="error">408 Error</div>
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