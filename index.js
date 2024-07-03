// Log een bericht in de console om te controleren of het script wordt uitgevoerd
console.log("Hoi!");

// Event listener voor de start-knop
document.getElementById('start-button').addEventListener('click', function () {
    console.log("Start-knop is geklikt!");

    // Verberg het start-scherm en toon het hoofd-scherm
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');

    // Speel achtergrondmuziek af
    document.getElementById('background-music').play();
});

// Event listener voor optie-knoppen (melk en topping)
document.querySelectorAll('.option-image, .option-button').forEach(function (option) {
    option.addEventListener('click', function () {
        // Haal de geselecteerde optie op uit het data-option attribuut van het geklikte element
        var selectedOption = this.getAttribute('data-option');

        // Update de dialoog-box met de geselecteerde optie
        updateDialogue('Je hebt gekozen voor: ' + selectedOption);

        // Controleer welke set opties moet worden getoond na de huidige keuze
        if (document.getElementById('milk-options').classList.contains('hidden') === false) {
            // Toon de topping-opties als melk-opties worden getoond
            showNextOptions('topping-options');
        } else if (document.getElementById('topping-options').classList.contains('hidden') === false) {
            // Toon de temperatuur-opties als topping-opties worden getoond
            showNextOptions('temperature-options');
        } else if (document.getElementById('temperature-options').classList.contains('hidden') === false) {
            // Geef de matcha op basis van de geselecteerde temperatuur-optie
            if (selectedOption === 'warm') {
                giveMatcha('warm');
                // chatGPT heeft geholpen met het tonen van de warme matcha afbeelding. //
            } else if (selectedOption === 'koud') {
                giveMatcha('iced');
            }      // chatGPT heeft geholpen met het tonen van de ice-matcha afbeelding //

            // Verberg de temperatuur-opties en toon alleen de dialoog
            hideOptionsAndDialogue();

            // Toon de juiste matcha-afbeelding
            showMatchaImage(selectedOption);
        }
    });
});

// Verberg de temperatuur-opties en update de dialoog met een eindbericht
function hideOptionsAndDialogue() {
    document.getElementById('temperature-options').classList.add('hidden');
    updateDialogue("Hier is je matcha latte!");
}

// Toon de volgende set opties op basis van het meegegeven optionId
function showNextOptions(optionId) {
    // Verberg alle optie-sets
    document.getElementById('milk-options').classList.add('hidden');
    document.getElementById('topping-options').classList.add('hidden');
    document.getElementById('temperature-options').classList.add('hidden');

    // Toon de opties met het meegegeven optionId
    document.getElementById(optionId).classList.remove('hidden');
}

// Update de dialoog-box met het opgegeven bericht en verberg deze na 2 seconden
function updateDialogue(message) {
    var dialogueBox = document.getElementById('dialogue-box');
    var dialogueText = document.getElementById('dialogue-text');

    // Maak de dialoog-box zichtbaar
    dialogueBox.classList.remove('hidden');
    dialogueText.textContent = message;

    // Verberg de dialoog-box na 2 seconden
    setTimeout(function () {
        dialogueBox.classList.add('hidden');
    }, 2000);
}

// Geef de matcha latte op basis van de geselecteerde temperatuur
function giveMatcha(temperature) {
    // Update de dialoog met een bericht dat de matcha latte wordt gegeven
    updateDialogue("Hier is je matcha latte!");

    // Simuleer het ontvangen van de matcha latte na 2 seconden
    setTimeout(function () {
        updateDialogue('Je hebt je matcha latte gekregen!');
    }, 2000);
}
// ChatGPT heeft geholpen met de dialoog//

// Toon de juiste matcha-afbeelding op basis van de geselecteerde temperatuur
function showMatchaImage(temperature) {
    var warmMatcha = document.getElementById('warm-matcha');
    var icedMatcha = document.getElementById('iced-matcha');

    // Toon de warme matcha afbeelding en verberg de ijzige matcha afbeelding
    if (temperature === 'warm') {
        warmMatcha.classList.remove('hidden');
        icedMatcha.classList.add('hidden');
    }
    // Toon de ijzige matcha afbeelding en verberg de warme matcha afbeelding
    else if (temperature === 'koud') {
        icedMatcha.classList.remove('hidden');
        warmMatcha.classList.add('hidden');
    }
}