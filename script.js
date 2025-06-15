function convert() {
  const x = parseFloat(document.getElementById("x").value);
  const y = parseFloat(document.getElementById("y").value);
  const z = parseFloat(document.getElementById("z").value);

  const lat = (y / 100000) + 1;  // Dummy formula
  const lon = (x / 100000) + 100; // Dummy formula
  const ellipHeight = z + 10;

  document.getElementById("lat").innerText = lat.toFixed(6);
  document.getElementById("lon").innerText = lon.toFixed(6);
  document.getElementById("ellipHeight").innerText = ellipHeight.toFixed(2);

  document.getElementById("mapFrame").src =
    `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
}

function exportCSV() {
  const lat = document.getElementById("lat").innerText;
  const lon = document.getElementById("lon").innerText;
  const height = document.getElementById("ellipHeight").innerText;

  const csv = `Latitude,Longitude,Ellipsoidal Height\n${lat},${lon},${height}`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.setAttribute("href", URL.createObjectURL(blob));
  link.setAttribute("download", "converted_coordinates.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
