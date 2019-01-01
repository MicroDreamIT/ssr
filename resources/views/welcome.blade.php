<html>
<head>
    <title>My server side rendered app</title>
    <script defer src="{{ mix('js/app-client.js') }}" />


</head>

<body>

{!! ssr('js/app-server.js')->render() !!}

</body>
</html>