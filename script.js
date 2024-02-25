document.getElementById('weightForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Grab the input value
    var weight = document.getElementById('weight').value;

    // Do something with the input value (e.g., log it to the console)
    console.log('Weight:', weight);
});