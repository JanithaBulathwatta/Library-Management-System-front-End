getAllBooks();
function addBook(){

    let title=$('#title').val();
    let author=$('#author').val();
    let status=$('#status').val();

    $.ajax({
        method:"POST",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/books/addBook",
        async:true,
        data:JSON.stringify({
            "id":"",
            "title":title,
            "author":author,
            "status":status
        }),
        success:function (data){
            alert("added")
            getAllBooks();
        },
        error:function (data){
            alert("error")
        }



    })
}

function editBook(){

    let bookID=$('#bookId').val();
    let title=$('#title').val();
    let author=$('#author').val();
    let status=$('#status').val();

    $.ajax({
        method:"PUT",
        contentType:"application/json",
        url:"http://localhost:8080/api/v1/books/updateBook",
        async:true,
        data:JSON.stringify({
            "id":bookID,
            "title":title,
            "author":author,
            "status":status
        }),
        success:function (data){
            alert("updated")
            getAllBooks();
        },
        error:function (data){
            alert("error")
        }



    })
}

function deleteBook(){

    let bookID=$('#bookId').val();


    $.ajax({
        method:"DELETE",
        url:"http://localhost:8080/api/v1/books/deleteBook/"+bookID,
        async:true,
        success:function (data){
            alert("deleted")
            getAllBooks();
        },
        error:function (data){
            alert("error")
        }
    })
}

function getAllBooks(){

    $.ajax({
        method:"GET",
        url:"http://localhost:8080/api/v1/books/getAllBooks",
        async:true,
        success:function (data){
            if (data.code === "00"){
                $('#bookTable').empty();
                for(let book of data.content){
                    let bookID = book.id
                    let title = book.title
                    let author = book.author
                    let status = book.status

                    var row=` <tr><td>${bookID}</td> <td>${title}</td> <td>${author}</td> <td>${status}</td></tr>`;
                    $('#bookTable').append(row);
                }
            }
        },
        error:function (data){
            alert("error")
        }
    })
}

$(document).ready(function (){
    $(document).on('click','#bookTable tr',function(){
        var col0 = $(this).find('td:eq(0)').text();
        var col1 = $(this).find('td:eq(1)').text();
        var col2 = $(this).find('td:eq(2)').text();
        var col3 = $(this).find('td:eq(3)').text();

        $('#bookId').val(col0);
        $('#title').val(col1);
        $('#author').val(col2);
        $('#status').val(col3);
    })
})