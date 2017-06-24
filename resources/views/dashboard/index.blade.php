@extends('laravel-enso/core::layouts.app')

@section('pageTitle', __("Dashboard"))

@section('content')

	<section class="content-header" v-cloak>
		@include('laravel-enso/menumanager::breadcrumbs')
	</section>
	<section class="content">
		<dashboard preferences="{{ $preferences }}" v-cloak>
		</dashboard>
	</section>

@endsection

@push('scripts')

    <script>

        let vue = new Vue({
            el: '#app'
        });

    </script>

@endpush