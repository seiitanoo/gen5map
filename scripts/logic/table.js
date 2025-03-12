import Pokemon from "../data/encounterdata/pokemon.js";
import PokemonS from "../data/encounterdata/pokemonShiny.js";
import { Canvas } from "./mapdraw.js";

export default function drawTable(rowIndex, table, AreaID, map) {
    const container = document.getElementById(AreaID);
    
    // Clear previous content if it exists
    container.innerHTML = '';

    // Check if the input table is empty or the specified row index is invalid
    if (!table || table.length === 0 || !table[rowIndex] || table[rowIndex].length === 0) {
        container.innerHTML = 'This area has no encounter data.';
        return;
    }

    // Create table element
    console.warn(`Table Creation Event`);
    const tableElement = document.createElement('table');
    tableElement.setAttribute('class', 'styled-table'); // Apply a class to the table

    // Create the header row
    const headerRow = document.createElement('tr');
    const headers = ['Sprite', 'Name', 'Encounter Rate','Encounter Type', 'Level', 'Season'];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.innerText = headerText;
        headerRow.appendChild(header);
    });
    tableElement.appendChild(headerRow);

    // Get the specific row from the table data
    const rowData = table[rowIndex];

    // Function to create table rows based on the data source and sprite type
    function createTableRows(dataSource, spriteType) {
        rowData.forEach(cellData => {
            const row = document.createElement('tr');
            const spritePath = spriteType;

            // Sprite column
            const spriteCell = document.createElement('td');
            spriteCell.innerHTML = `<img src="${dataSource[cellData.sprite][spritePath]}" alt="Sprite">`;
            row.appendChild(spriteCell);

            // Name column
            const nameCell = document.createElement('td');
            nameCell.innerText = dataSource[cellData.name].name;
            row.appendChild(nameCell);

            // Encounter Rate column
            const encounterRateCell = document.createElement('td');
            encounterRateCell.innerText = cellData.encounterrate;
            row.appendChild(encounterRateCell);

            const encounterTypeCell= document.createElement('td');
            encounterTypeCell.innerText = cellData.encountertype;
            row.appendChild(encounterTypeCell);

            // Level column
            const levelCell = document.createElement('td');
            levelCell.innerText = cellData.level;
            row.appendChild(levelCell);

            // Season column
            const seasonCell = document.createElement('td');
            seasonCell.innerText = cellData.Season;
            row.appendChild(seasonCell);

            tableElement.appendChild(row);
        });
    }

    // Create table rows using the default data source (Pokemon) and sprite type (Front)
    let currentDataSource = Pokemon;
    let currentSpriteType = 'Front';
    createTableRows(currentDataSource, currentSpriteType);

    // Append the table to the container
    container.appendChild(tableElement);

    // Create the button container
    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('class', 'button-container');

    // Create the multi-function button
    const spriteButton = document.createElement('button');
    spriteButton.innerText = 'Switch Sprite';
    buttonContainer.appendChild(spriteButton);

    // Sprite types array
    const spriteTypes = ['Front', 'Back', 'icon'];
    let currentSpriteIndex = 0;

    // Add event listener to the sprite button
    spriteButton.addEventListener('click', function(event) {
        // Stop the event from propagating to the map
        event.stopPropagation();

        // Cycle to the next sprite type
        currentSpriteIndex = (currentSpriteIndex + 1) % spriteTypes.length;
        currentSpriteType = spriteTypes[currentSpriteIndex];

        // Clear the current table rows
        tableElement.innerHTML = '';
        tableElement.appendChild(headerRow);

        // Create table rows using the current data source and next sprite type
        createTableRows(currentDataSource, currentSpriteType);
    });

    // Create the toggle switch for data source
    const dataToggleLabel = document.createElement('label');
    dataToggleLabel.setAttribute('class', 'switch');

    const dataToggleInput = document.createElement('input');
    dataToggleInput.setAttribute('type', 'checkbox');

    const dataToggleSpan = document.createElement('span');
    dataToggleSpan.setAttribute('class', 'slider round');

    dataToggleLabel.appendChild(dataToggleInput);
    dataToggleLabel.appendChild(dataToggleSpan);
    buttonContainer.appendChild(dataToggleLabel);

    const dataToggleText = document.createElement('span');
    dataToggleText.innerText = ' Shiny Toggle';
    buttonContainer.appendChild(dataToggleText);

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '<img src="media/site/tableexit.png">';
    closeButton.setAttribute('class', 'close-button');
    buttonContainer.appendChild(closeButton);

    // Append the button container to the main container
    container.appendChild(buttonContainer);

    // Add event listener to data source toggle switch
    dataToggleInput.addEventListener('change', function(event) {
        // Stop the event from propagating to the map
        event.stopPropagation();

        // Toggle the data source
        currentDataSource = this.checked ? PokemonS : Pokemon;

        // Clear the current table rows
        tableElement.innerHTML = '';
        tableElement.appendChild(headerRow);

        // Create table rows using the current data source and sprite type
        createTableRows(currentDataSource, currentSpriteType);
    });

    // Add event listeners to disable and enable map interaction
    spriteButton.addEventListener('mousedown', function(event) {
        event.stopPropagation();
    });

    dataToggleLabel.addEventListener('mousedown', function(event) {
        event.stopPropagation();
    });

    // Add event listener to the close button
    closeButton.addEventListener('click', function(event) {
        // Stop the event from propagating to the map
        event.stopPropagation();

        // Clear the content of the container
        removeTablePane(AreaID);
    });
}
function removeTablePane(index){tableContainer.style.display = 'none'; deleteTable(index);};

export function deleteTable(AreaID) {
    const container = document.getElementById(AreaID);
    
    // Clear the content of the container
    if (container) {
        container.innerHTML = '';
    } else {
        console.warn(`Click off Event`);
    }
}