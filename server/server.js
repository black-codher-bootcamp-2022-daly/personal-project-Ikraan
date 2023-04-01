const app = require("/client/src/App.js");
const port = 8080;

app.listen(port, function () {
    console.log(`Server server is running... http://localhost:${port}`);
});