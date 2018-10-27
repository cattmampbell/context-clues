// Run on load...
$(document).ready(function() {
     // Should log: Start of script.
    console.log(`Start of script.`);

    // Declare all global variables:
    // An array of 5 friend names
    var friends = [`Olivia`, `Cody`, `Megan`, `Caleb`, `Toast`];

    // An array of 20 item names
    var items = [`ball`, `book`, `comb`, `flower pot`, `lampshade`, `magnifying glass`, `microscope`, `mug`, `newspaper`, `pencil`, `pillow`, `plunger`, `rock`, `spatula`, `spoon`, `stick`, `teapot`, `toothbrush`, `umbrella`, `watering can`];

    // An array of 10 location names
    var locations = [`attic`, `backyard`, `baño`, `beach house`, `café`, `classroom`, `garden`, `kitchen`, `laboratory`, `park`];

    // Create/add 100 accusations to page
    for (var i = 0; i < 100; i += 1) {
        // Creates myBtn
        var myBtn = $(`<button id="accusation${i + 1}" class="accusation col-4 btn btn-lg btn-light h3 text-center px-3 py-4 mx-3 my-2">Accusation #${i + 1}</button>`);

        // Creates friendsIndex, itemsIndex and locationsIndex
        var friendsIndex = friends[i];
        var itemsIndex = items[i];
        var locationsIndex = locations[i];

        // Keeps friendsIndex = 0 to 4
        if(i >= 5) {
            friendsIndex = friends[i % 5];
        }

        // Keeps itemsIndex = 0 to 20
        if(i >= 20) {
            itemsIndex = items[i % 20];
        }

        // Keeps locationsIndex = 0 to 9
        if(i >= 10) {
            locationsIndex = locations[i % 10];
        }

        // Should log: Accusation #___: I accuse friendIndex[i], with the itemsIndex[i], in the locationsIndex[i]!
        console.log(`Accusation #${i + 1}: I accuse ${friendsIndex}, with the ${itemsIndex} in the ${locationsIndex}!`);

        // Creates myAccusation/returns createAccusation function with arguments...
        var myAccusation = createAccusation(friendsIndex, itemsIndex, locationsIndex); 
        // Appends myAccusation to #row2
        $(`#row2`).append(myAccusation);

        function createAccusation(friend, item, location) {
            // When myBtn clicked...
            return myBtn.click(function(event) {
                // Should alert: Accusation #___: I accuse friend, with the item, in the location!
                alert(`${event.target.textContent}: I accuse ${friend}, with the ${item} in the ${location}!`);
            })
        };
    }

    // Should log: End of script.
    console.log(`End of script.`);
})