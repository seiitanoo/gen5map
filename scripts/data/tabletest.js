export const table1 = [
//data1-1
[
    {name: "", encounterlvl: "??-??", encounterrate: "?%",},
    {name: "", encounterlvl: "??-??", encounterrate: "?%",},
],
//data2-1
[
    {name: "", encounterlvl: "??-??", encounterrate: "?%",},
    {name: "", encounterlvl: "??-??", encounterrate: "?%",}, 
    {name: "", encounterlvl: "??-??", encounterrate: "?%",},
    {name: "", encounterlvl: "??-??", encounterrate: "?%",},
],
//data3-1
[
    {name: "", encounterlvl: "??-??", encounterrate: "?%",},
    {name: "", encounterlvl: "??-??", encounterrate: "?%",},
],
];


export const table2 = [
//data1-2
[
    {name: "", encounterlvl: "??-??", encounterrate: "?%",},
    {name: "", encounterlvl: "??-??", encounterrate: "?%",},
],
//data2-2
[
    {name: "", encounterlvl: "??-??", encounterrate: "?%",},
],
//data3-2
[
    {name: "", encounterlvl: "??-??", encounterrate: "?%",},
    {name: "", encounterlvl: "??-??", encounterrate: "?%",},
    {name: "", encounterlvl: "??-??", encounterrate: "?%",},
],
]

export default function drawTable(table, containerId, sectionIndex) {
    const container = document.getElementById(containerId);
    if (sectionIndex >= 0 && sectionIndex < table.length) {
      const areaData = table[sectionIndex];
      const tableElement = document.createElement("table");
      const headerRow = document.createElement("tr");
  
      const headerName = document.createElement("th");
      headerName.textContent = "Name";
      headerRow.appendChild(headerName);
  
      const headerLevel = document.createElement("th");
      headerLevel.textContent = "Level";
      headerRow.appendChild(headerLevel);
  
      const headerRate = document.createElement("th");
      headerRate.textContent = "Rate";
      headerRow.appendChild(headerRate);
  
      tableElement.appendChild(headerRow);
  
      for (const item of areaData) {
        const row = document.createElement("tr");
  
        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        row.appendChild(nameCell);
  
        const levelCell = document.createElement("td");
        levelCell.textContent = item.encounterlvl;
        row.appendChild(levelCell);
  
        const rateCell = document.createElement("td");
        rateCell.textContent = item.encounterrate;
        row.appendChild(rateCell);
  
        tableElement.appendChild(row);
      }
      container.innerHTML = ""; // Clear previous content
      container.appendChild(tableElement);
    } else {
        container.innerHTML = "<p>Invalid Section Index</p>";
    }
  }
  
