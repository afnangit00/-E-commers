var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var hbs = require('express-handlebars')
var userRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
var fileupload = require('express-fileupload')
var db= require('./config/connection')

var app = express();
exports.app = app;

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs',hbs.engine({extname:'hbs',defaultLayout:'layout',layoutsDir:__dirname+'/views/layout/',partialsDir:__dirname+'/views/partials/'}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileupload());
db.connect((err)=>{
  if(err) console.log('Connection is error'+err)
    else console.log('DataBase connecteD')
  
})

app.use('/', userRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
