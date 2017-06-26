@extends('laravel-enso/core::layouts.error')

@section('pageTitle', '429')

@section('content')

  <div class="content">
    <div class="title">Too many requests.</div>
    <div class="error">429 Error</div>
    <div class="details">
      <br>
      <small>
        {!! isset($exception) ? $exception->getMessage() : null !!}
        <a href="/">home</a>
      </small>
    </div>
  </div>

@endsection