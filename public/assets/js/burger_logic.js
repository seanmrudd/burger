$(function () {
    $(".devour").on("click", function () {

        var id = $(this).data("id");
        var eaten = {
            devoured: true
        }
        console.log(id)

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            devoured: eaten
        }).then(
            function () {
                console.log("burger ", devoured);
                location.reload();
            }
        )
    });

    $(".create-burger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            name: $("#burger").val().trim(),
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