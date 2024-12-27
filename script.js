//your JS code here. If required.
function createPromise(id) {
  const timeTaken = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, timeTaken: timeTaken.toFixed(3) }), timeTaken * 1000);
  });
}

// Select the table body
const output = document.getElementById("output");

// Add the loading row
const loadingRow = document.createElement("tr");
loadingRow.innerHTML = `<td colspan="2" class="text-center">Loading...</td>`;
output.appendChild(loadingRow);

// Create three promises
const promises = [createPromise(1), createPromise(2), createPromise(3)];

// Start timer
const startTime = performance.now();

// Wait for all promises to resolve
Promise.all(promises).then((results) => {
  
  output.innerHTML = "";

  
  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>Promise ${result.id}</td>
      <td>${result.timeTaken} s</td>
    `;
    output.appendChild(row);
  });


  const endTime = performance.now();
  const totalTimeTaken = ((endTime - startTime) / 1000).toFixed(3);


  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${totalTimeTaken} s</td>
  `;
  output.appendChild(totalRow);
});