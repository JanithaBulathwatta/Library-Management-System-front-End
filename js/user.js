getAllUsers();
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
            getAllUsers();
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

        method:"PUT",
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
            getAllUsers();
        },
        error:function (){
            alert("error")
        }
    })
}
function deleteUser(){
    let userID = $("#userId").val();

    $.ajax({
        method:"DELETE",
        url:"http://localhost:8080/api/v1/users/deleteUser/"+userID,
        async:true,
        success:function (data){
            alert("deleted")
            getAllUsers();
        },
        error:function (data){
            alert("error")
        }
    })
}

function getAllUsers(){

    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/users/getAllUsers",
        async:true,
        success:function (data){
            if(data.code === "00"){
                $("#userTable").empty();
                for(let user of data.content){
                    let userId = user.userID
                    let name = user.name
                    let email = user.email
                    let mobile = user.mobile

                    var row =` <tr>
                        <td>${userId}</td>
                        <td>${name}</td>
                        <td>${email}</td>
                        <td>${mobile}</td>
                    </tr>`;
                    $('#userTable').append(row);
                }
            }
        },
        error:function (data){
            alert("error")
        }
    })
}

$(document).ready(function (){
    $(document).on('click','#userTable tr',function(){
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();

        $('#userId').val(col0);
        $('#name').val(col1);
        $('#email').val(col2);
        $('#mobile').val(col3);
    })
})