$(document).ready(() => {
    // console.log(`Testing... Testing... 1, 2, 3, 4, Context Clues!`); // Should log: Testing... Testing... 1, 2, 3, 4, Context Clues!

    // Initialize accusationCount to 0
    var accusationCount = 0;

    // When the page loads, insert 100 <h3> elements onto the page
    for (var i = 0; i < 100; i += 1) {
        // Adds 1 to accusationCount w/ each iteration 
        accusationCount += 1; 
        // Creates <button>, appends to #row2
        $(`#row2`).append(`<button id="accusation${accusationCount}" class="accusation col-4 btn btn-lg btn-secondary h3 text-center px-2 py-3 mx-2 my-2">Accusation #${accusationCount}</button>`);
    }

    $(`.accusation`).on(`click`, (event) => {
        alert(`Testing... 1, 2, 3...`);
    })


    console.log(`End of script!`); // Should log: End of script!
})