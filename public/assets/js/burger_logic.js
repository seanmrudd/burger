$(function () {
    $(".devour").on("click", function () {

        var id = $(this).data("id");
        console.log(id)

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            devoured: true
        }).then(
            function () {
                location.reload();
            }
        )
    });

    $(".create-burger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
        };

        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Made a new burger");
                location.reload();
            }
        );
    });
});