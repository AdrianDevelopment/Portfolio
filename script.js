document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const schoolYearEnd = new Date(currentYear, 6, 31);
    const today = new Date();

    let currentClass = 12;
    
    if (today > schoolYearEnd) {
        currentClass++;
    }
    
    document.getElementById("class").textContent = currentClass;
});