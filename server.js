var express = require("express")

var app = express()

app.use(function (req, res, next) {
  console.log("== Request received")
  console.log("  -- method:", req.method)
  console.log("  -- url:", req.url)
  console.log("  -- headers:", req.headers)
  next()
  // res.status(200).send("<html><body><h1>Hello, world!</h1></body></html>")
})

app.get("/", function (req, res, next) {
  console.log("  -- home page requested")
  res.status(200).sendFile(__dirname + "/static/index.html")
})

app.get("/about", function (req, res, next) {
  res.status(200).send("<html><body><h1>About</h1></body></html>")
})

app.get("/cats", function (req, res, next) {
  res.status(200).send("<html><body><h1>Cats</h1></body></html>")
})

// app.post()
// app.patch()
// app.put()
// app.delete()

app.listen(3001, function () {
  console.log("== Server listening for requests on port 3001")
})
