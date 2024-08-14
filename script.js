// Get modal elements
const modal = document.getElementById('add-cert-modal');
const addCertBtn = document.getElementById('add-cert-btn');
const closeBtn = document.getElementsByClassName('close')[0];

// Open modal when 'Add Certification' button is clicked
addCertBtn.onclick = function() {
    modal.style.display = 'block';
}

// Close modal when 'x' is clicked
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Handle the form submission
document.getElementById('cert-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const certName = document.getElementById('cert-name').value;
    const certDate = document.getElementById('cert-date').value;
    const certOrg = document.getElementById('cert-org').value;

    // Create a new certification item
    const certItem = document.createElement('div');
    certItem.className = 'cert-item';
    certItem.innerHTML = `
        <h2>${certName}</h2>
        <p>Issued on: ${certDate}</p>
        <p>By: ${certOrg}</p>
    `;

    // Add the certification to the list
    document.getElementById('certifications-list').appendChild(certItem);

    // Clear the form
    document.getElementById('cert-form').reset();

    // Close the modal
    modal.style.display = 'none';
});
