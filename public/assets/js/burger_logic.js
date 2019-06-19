$(function () {
    $(".devour").on("click", function () {

        var id = $(this).data("id");
        console.log(id)

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(
            function () {
                console.log("burger ", devoured);
                location.reload();
            }
        )
    });

    $(".makeBurger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name = $("#burger_name").val().trim(),
            devoured = false
        };

        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Made a new burger");
                location.reload();
            }
        );
    });
});