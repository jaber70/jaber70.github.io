document.getElementById("view-dashboard").addEventListener("click", function () {
    document.getElementById("password-popup").classList.toggle("hidden");
});

document.getElementById("submit-password").addEventListener("click", async function () {
    const password = document.getElementById("password").value;
    const hashedPassword = await hashPassword(password);
    
    // This is the pre-computed hash of your actual password
    const correctHashedPassword = "5e884898da28047151d0e56f8dc6292773603d0d6aabbddaf182efbdc4aef21d"; // Hash of "password"
    
    if (hashedPassword === correctHashedPassword) {
        window.open("https://your-dashboard-link.com", "_blank");
    } else {
        document.getElementById("error-message").textContent = "Incorrect password. Try again.";
    }
});

// Function to hash the password using SHA-256
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}
