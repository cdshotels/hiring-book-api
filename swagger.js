const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/books.js']

swaggerAutogen(outputFile, endpointsFiles)