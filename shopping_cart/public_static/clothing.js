/**
 * Created by rishika on 16/7/17.
 */
var shop_count=0;
var shop_items = [];
var lcount = localStorage.length;
var data=[];
retreive();
function retreive() {
    $.get('http://localhost:3000/info_prod', function (result) {
        console.log(result);
        for(var i=0;i<result.length;i++){

            data.push(result[i]);
        }
        console.log(data);
    });
};



function addToCart(id){

        for(var i=0;i<data.length;i++)
        {

            if(data[i]['co']===id){
                shop_items.push(data[i]);
                localStorage.setItem('store['+ lcount + ']',JSON.stringify(data[i]));
                $('#'+ id).text("Added");
                $('#'+ id).addClass("card-panel yellow");
                alert("Quantity at the time of order place");
                shop_count++;
                $('.items').text(shop_count);
                lcount++;
                i=99;

            }

        }





};





$(function(){


    function add(id){

        console.log(id);
    }


    function place(){
        console.log("place");
    }
    $('.track').click(function(){

       alert("Within 7 days of you order date") ;
    });
});