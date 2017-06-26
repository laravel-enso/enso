@extends('laravel-enso/core::layouts.error')

@section('pageTitle', '405')

@section('content')

  <div class="content">
    <div class="title">Method not allowed.</div>
    <div class="error">405 Error</div>
    <div class="details">
      <br>
      <small>
        {!! isset($exception) ? $exception->getMessage() : null !!}
        <a href="/">home</a>
      </small>
    </div>
  </div>

@endsection