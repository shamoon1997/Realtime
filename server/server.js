//server.js
var mysql = require('mysql');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function (socket){
   console.log('New user connection');
   socket.on('CH01', function (from, msg) {
    console.log('MSG', from, ' saying ', msg);
  });
 

});

http.listen(3000, function () {
  console.log('listening on *:3000');
});

var con = mysql.createConnection({
    host: "localhost",
    user: "stock_tempuser",
    password: "Lemv;b;xxY8E",
    database: "stock_sblara"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log(" Database Connected!");
  });

let sql=` SELECT * FROM movies1;`
  setInterval(()=>{
    con.query(sql, function (err, result) {  
        if (err) throw err;
        else{
            console.log("1 record inserted");
            io.emit('NewRecord','New Record added successfully')
        }    
        });  
  },6000)