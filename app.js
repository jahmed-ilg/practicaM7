const { User } = require("./models");
const { Cars } = require("./models");

const express = require('express')
const app = express()
function isAuthorized(req,res, next) {
  const auth = req.headers.authorization;
  if (auth === 'secretpassword') {
    next();
  } else {
    res.status(401);
    res.send('Not permitted');
  }
}
const port = 3000
let requested = (req, res, next) => {
  let date = new Date();
  let month = date.getMonth() + 1 ;
  console.log("S'han demanat els Cars el " + date.getDate() + "/" + 
  month + "/" + date.getFullYear() + " a les " + date.getHours() + ":" + date.getMinutes());
  next();
};

app.use(requested);

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', isAuthorized, async (req,res) => {

      const users = await User.findAll();
      res.json(users);

 })

app.get('/products', (req, res) => {
  res.json([{
    id: 1,
    name: 'The Bluest Eye'
  }])
})

app.get('/cars', isAuthorized, async (req,res) => {

  const cars = await Cars.findAll();
  res.json(cars);

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))