@extends('laravel-enso/core::layouts.error')

@section('pageTitle', '500')

@section('content')

  <div class="content">
    <div class="title">It's not you, it's me.</div>
    <div class="error">500 Error</div>
    <div class="details">
      <br>
      <small>
        {!! isset($exception) ? $exception->getMessage() : null !!}
        <a href="/">home</a>
      </small>
    </div>
  </div>

@endsection