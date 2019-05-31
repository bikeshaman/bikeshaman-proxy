const _ = require('lodash');

module.exports = _.template(`
<!DOCTYPE html>
<html>

<head>
  <title> Trek Product Info </title>

  <meta name="author" content="Adam Gipril">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
  <link rel="stylesheet" href="http://localhost:3050/styles.css">
  <link rel="stylesheet" href="styles.css">
  <!-- react-devtools -->
  <!-- <script src="http://localhost:8097"></script> -->
</head>

<body>
  <!-- App layout -->
  <div id="app" style="display: inline-block"></div>
  <div id="buying-zone" style="display: inline-block"></div>
  <div id="reviews"></div>

  <!-- CDN modules -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/styled-components/dist/styled-components.min.js"></script>

  <!-- App scripts -->
  <script> window.__id__ = <%= id %>; </script>
  <script src="http://localhost:3001/bundle.js"></script>
  <script src="http://localhost:3050/bundle.js"></script>
  <script src="http://localhost:3030/app.js"></script>
</body>

</html>
`);
