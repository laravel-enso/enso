@extends('laravel-enso/core::layouts.error')

@section('pageTitle', '403')

@section('content')

  <div class="content">
    <div class="title">Forbidden.</div>
    <div class="error">403 Error</div>
    <div class="details">
      <br>
      <small>
        {!! isset($exception) ? $exception->getMessage() : null !!}
        <a href="/">home</a>
      </small>
    </div>
  </div>

@endsection