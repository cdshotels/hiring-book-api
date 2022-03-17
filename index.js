var express = require("express"),
bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger.json')

const app = express();

app.use(
bodyParser.urlencoded({
  extended: true,
})
);
app.use(bodyParser.json());

app.use("/books", require("./routes/books"));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.debug("Server listening on port: " + PORT);