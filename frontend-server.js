var express = require('express')
  , app = express();

app.configure(function () {
    app.use(
        '/', express.static('frontend')
    );
});
app.listen(3000);