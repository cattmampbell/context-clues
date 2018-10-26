// Run on load...
$(document).ready(function() {
     // Should log: Start of script.
    console.log(`Start of script.`);

    // Declare all variables:
    // An array of 5 friend names
    var friends = [
        `Olivia`, // friend[0] = Olivia
        `Cody`, // friend[1] = Cody
        `Megan`, // friend[2] = Megan
        `Caleb`, // friend[3] = Caleb
        `Toast` // friend[4] = Toast
    ];

    // An array of 10 location names
    var locations = [
        `attic`, // locations[0] = attic
        `backyard`, // locations[1] = backyard
        `baño`, // locations[2] = baño
        `beach`, // locations[3] = beach
        `café`, // locations[4] = café
        `classroom`, // locations[5] = classroom
        `garden`, // locations[6] = garden
        `kitchen`, // locations[7] = kitchen
        `laboratory`, // locations[8] = laboratory
        `park` // locations[9] = park
    ];

    // An array of 20 weapon names
    var weapons = [
        `ball`, // weapons[0] = ball (backyard)
        `book`, // weapons[1] = book (classroom)
        `comb`, // weapons[2] = comb (baño)
        `flower pot`, // weapons[3] = flower pot (garden)
        `lampshade`, // weapons[4] = lampshade (attic)
        `magnifying glass`, // weapons[5] = magnifying glass (laboratory)
        `microscope`, // weapons[6] = microscope (laboratory)
        `mug`, // weapons[7] = mug (café)
        `newspaper`, // weapons[8] = newspaper (park)
        `pencil`, // weapons[9] = pencil (classroom)
        `pillow`, // weapons[10] = pillow (attic)
        `plunger`, // weapons[11] = plunger (baño)
        `rock`, // weapons[12] = rock (park)
        `spatula`, // weapons[13] = spatula (kitchen)
        `spoon`, // weapons[14] = spoon (kitchen)
        `stick`, // weapons[15] = stick (park)
        `teapot`, // weapons[16] = teapot (café)
        `toothbrush`, // weapons[17] = toothbrush (baño)
        `umbrella`, // weapons[18] = umbrella (beach)
        `watering can` // weapons[19] = watering can (garden)
    ];

    // Declare all functions:
    // 
    function createAccusation() {
        // Create/add 100 accusations to page
        for (var i = 1; i <= 100; i += 1) {
            // Creates <button>, appends to #row2
            $(`#row2`).append(`<button id="accusation${i}" class="accusation col-4 btn btn-lg btn-light h3 text-center px-3 py-4 mx-3 my-2">Accusation ${i}</button>`);
        }

        // When .accusation clicked...
        $(`.accusation`).on(`click`, (event) => {
            alert(`${event.target.textContent}: `);
        })
    }

    createAccusation();

    // Should log: End of script.
    console.log(`End of script.`);
})