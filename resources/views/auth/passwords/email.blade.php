@extends('laravel-enso/core::layouts.auth')

@section('content')

    <div class="login-box">
        <div class="login-box-body">
            <div class="login-logo">
                <a href="#">
                    <img style="height:50px"
                        class="logo center-block img-responsive"
                        src="/images/logo.svg"/>
                </a>
            </div>
            <p class="login-box-msg">{{ __("Reset password") }}</p>
            {!! Form::open(['method' => 'POST', 'url' => '/password/email']) !!}
                <div class="form-group has-feedback{{ $errors->has('email') ? ' has-error' : '' }}">
                    {!! Form::email('email', old('email'), ['class' => 'form-control', 'placeholder' => __('email')]) !!}
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group">
                    {!! Form::submit(__('Send a reset password link'), ['class' => 'btn btn-primary btn-block']) !!}
                </div>
            {!! Form::close() !!}
        </div>
    </div>

@endsection

@push('scripts')

    <script>

        toastr.options = toastrDefaults;
        toastr.options.positionClass = "toast-top-center";

        (function(){
            errors = {!! json_encode($errors->all()) !!};

            if(errors.length) {
                errors.forEach((error) => {
                    toastr.error(error);
                });
            }

            let status = "{{ session()->get('status') }}";
            if (status) toastr.success(status);
        })();

      </script>

@endpush