var consulta = $("#searchTable").DataTable();

$("#search-input").keyup(function(){
    consulta.search($(this).val()).draw();

    if($("#search-input").val() == ""){
        $("#search").fadeOut();
    }else{
        $("#search").fadeIn();
    }
})

