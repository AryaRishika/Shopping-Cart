/**
 * Created by rishika on 17/7/17.
 */

function cancelled(id){
    console.log(id);
    $('.'+id).css("opacity","0.3");
    for(var i=0;i<todos.length;i++){

        if(i==id){

            var quantity1;
            $("."+id).each(function() {
                $(this).find("input.inp").css("disabled",true);
                billReduce($(this).find("input.inp").val(),i);

            });
            i=99;
        }

    }

}
var bill=0;
function billReduce(a,b){

    bill=bill - a*todos[b]['price'];
}
function sum(a,b)
{
    bill=bill+ a* todos[b]['price'];
}
function sqlinject(){

    // console.log(todos);
    // todos=JSON.stringify(todos);
    $.post({url:'http://localhost:3000/insert'}, {a :bill},function(data){


    });
}
var todos= [];

$(function(){

    shop_items();
    shop_list();

    function shop_items(){

        $('.items').text(localStorage.length);
    }



    function shop_list()
    {
        var todo = [];
        for(var i=0;i<localStorage.length;i++)
        {
            todo.push(JSON.parse(localStorage.getItem('store['+ i + ']')));
       }
       todos=todo;
        var query;
        for(var i=0;i<todos.length;i++)
        {

            query = '<tr class="' + i + '">' +
                '<td >'+ todos[i]['des']+'</td>' +
                '<td class="right-align">Sat,22nd July</td>' +
                '<td class="center-align"><input type="text" placeholder="qty" value="0"  class="inp" onchange="sum(this.value,' + i + ')"></td>' +
                '<td class="right-align">'+ todos[i]['price']+'</td>' +
                '<td class="right-align"><a href="#" id="' + i + '" onClick="cancelled(this.id)"><i class="material-icons">delete</i></a></td>' +
                    '</tr>';
            $('.tableBody').append(query);

        }
    }

    $('.netAmt').click(function(){

        $('.amt').text(bill);
        $('.amt').css("visibility","visible");
        console.log(bill);
    });



});