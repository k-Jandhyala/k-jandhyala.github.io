const birthDate = new Date(2007, 7, 30); 
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

if (!hasHadBirthdayThisYear) {
    age--;
}

document.getElementById('my-age').textContent = age;

function viewPDF() {
    // Replace with your actual PDF file path or URL
    const pdfUrl = 'cubesat_prop.pdf';
    window.open(pdfUrl, '_blank');
}