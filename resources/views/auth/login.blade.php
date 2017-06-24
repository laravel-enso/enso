@extends('laravel-enso/core::layouts.auth')

@section('content')

	<div class="login-box">
	  	<div class="login-box-body">
	  		<div class="login-logo">
				<a href="/">
					<img style="height:50px"
						class="logo center-block img-responsive"
						src="/images/logo.svg"/>
				</a>
			</div>
			<p class="login-box-msg">{{ __("Login") }}</p>
		  	{!! Form::open(['method' => 'POST', 'url' => '/login']) !!}
			  	<div class="form-group has-feedback{{ $errors->has('email') ? ' has-error' : '' }}">
					{!! Form::text('email', old('email') or null, ['class' => 'form-control', 'placeholder' => __('email')]) !!}
					<span class="fa fa-envelope-o form-control-feedback"></span>
			  	</div>
			  	<div class="form-group has-feedback{{ $errors->has('password') ? ' has-error' : '' }}">
					{!! Form::password('password', ['class' => 'form-control', 'placeholder' => __('password')]) !!}
					<span class="fa fa-lock form-control-feedback"></span>
			  	</div>
			  	<div class="row">
				  	<div class="col-xs-7">
				  		<div class="form-group">
						<input name="remember" type="checkbox">
						<label for="remember"><i></i>{{ __("Remember me") }}</label>
						</div>
				  	</div>
				  	<div class="col-xs-5">
				  		<div class="form-group">
							{!! Form::submit('Login', ['class' => 'btn btn-primary btn-block']) !!}
						</div>
				  	</div>
			  	</div>
			  {!! Form::close() !!}
			<a href="{{ url('/password/reset') }}">{{ __("Reset password") }}</a>
		</div>
	</div>

@endsection


@push('scripts')

	<script>

		toastr.options = toastrDefaults;
		toastr.options.positionClass = "toast-top-center";

	  	(function(){
			let errors = {!! json_encode($errors->all()) !!};

	  		if(errors.length) {
	  			errors.forEach((error) => {
	  				toastr.error(error);
	  			});
			}

	  	})();

	  </script>

@endpush
