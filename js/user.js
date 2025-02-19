
function addUser(){

    let name = $("#name").val();
    let email = $("#email").val();
    let mobile = $("#mobile").val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/users/addUser",
        async:true,
        data:JSON.stringify({
            "userID":"",
            "name":name,
            "email":email,
            "mobile":mobile
        }),
        success:function(data){
            alert("user added")
        },
        error:function (data){
            alert("error")
        }
    })
}

function editUser(){
    let userID = $("#userId").val();
    let name = $("#name").val();
    let email = $("#email").val();
    let mobile = $("#mobile").val();

    $.ajax({

        method:"POST",
        contentType: "application/json",
        url: "http://localhost:8080/api/v1/users/updateUser",
        async: true,
        data: JSON.stringify({
            "userID":userID,
            "name":name,
            "email":email,
            "mobile":mobile
        }),
        success:function (){
            alert("updated")
        },
        error:function (){
            alert("error")
        }
    })
}