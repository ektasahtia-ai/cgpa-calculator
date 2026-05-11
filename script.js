function calculateCGPA() {

  let g1 = parseFloat(document.getElementById("grade1").value) || 0;
  let g2 = parseFloat(document.getElementById("grade2").value) || 0;
  let g3 = parseFloat(document.getElementById("grade3").value) || 0;
  let g4 = parseFloat(document.getElementById("grade4").value) || 0;
  let g5 = parseFloat(document.getElementById("grade5").value) || 0;

  let cgpa = (g1 + g2 + g3 + g4 + g5) / 5;

  document.getElementById("output").innerText =
    "Your CGPA is: " + cgpa.toFixed(2);
}