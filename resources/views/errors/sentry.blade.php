@unless(empty($sentryID))
    <!-- Sentry JS SDK 2.1.+ required -->
    <script src="https://cdn.ravenjs.com/3.3.0/raven.min.js"></script>

    <script>
    Raven.showReportDialog({
        eventId: '{{ $sentryID }}',

        // use the public DSN (dont include your secret!)
        dsn: 'your-sentry-dsn-here'
    });
    </script>
@endunless