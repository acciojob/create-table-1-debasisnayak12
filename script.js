function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable");
	const newRow = document.createElement('tr');
	const firstCell = document.createElement('td');
	firstCell.textContent = 'New Cell1Row1 cell1';
	const secondCell = document.createElement('td');
	secondCell.textContent = 'New Cell2Row1 cell2';

	newRow.append(firstCell,secondCell);
	table.insertBefore(newRow, table.firstChild);
}
