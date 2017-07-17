/**
 * Created by rishika on 9/7/17.
 */
var express = require('express');
var sql = require('./sql.js');
var bodyparser = require('body-parser');
var fileSystem = require('fs');
var app = express();
var shop_items = [];
app.use('/',express.static('public_static'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/info_prod',function(req,res){
    fileSystem.readFile("products_info",function(err,data)
    {
        if(err) throw err;
        var arr=data.toString().split('@');
        arr=arr.map(function(x){
            return(JSON.parse(x));
        });
        res.send(arr);

    });

});

app.get('/shop_list',function(req,res){

    console.log(shop_items);
    res.send(shop_items);

});
app.get('/showDatabase',function(req,res)
{
    sql.get(function(data){

        console.log(data);
        res.send(data);
    });

});

app.post('/insert',function(req,res){

   // var arr= JSON.parse(req.body.a);
    sql.insert(req.body.a);

});

app.post('/delete',function(req,res){

    sql.delete(req.body.id);
});

app.post('/update',function(req,res){

    sql.update(req.body.id,req.body.done);
});


app.listen(3000,function(){
    console.log("server is listening at port 3000");
});