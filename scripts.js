$(document).ready(() => {
    // console.log(`Testing... Testing... 1, 2, 3, 4, Context Clues!`); // Should log: Testing... Testing... 1, 2, 3, 4, Context Clues!

    // Initialize accusationCount to 0
    var accusationCount = 0;

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
        `beach` // locations[3] = beach
        `café`, // locations[4] = café
        `classroom`, // locations[5] = classroom
        `garden`, // locations[6] = garden
        `kitchen`, // locations[7] = kitchen
        `laboratory`, // locations[8] = laboratory
        `park`, // locations[9] = park
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

    // When the page loads, insert 100 <h3> elements onto the page
    for (var i = 0; i < 100; i += 1) {
        // Adds 1 to accusationCount w/ each iteration 
        accusationCount += 1; 
        // Creates <button>, appends to #row2
        $(`#row2`).append(`<button id="accusation${accusationCount}" class="accusation col-4 btn btn-lg btn-secondary h3 text-center px-2 py-3 mx-2 my-2">Accusation #${accusationCount}</button>`);
    }

    // Click event listener on .accusation
    $(`.accusation`).on(`click`, (event) => {
        // alert(`Testing... 1, 2, 3...`);
        alert(`${event.target.textContent}: `)
    })

    console.log(`End of script!`); // Should log: End of script!
})