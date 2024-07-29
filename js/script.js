document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.querySelector("textarea");
    const totalCharacters = document.querySelectorAll("p span")[0];
    const remainingCharacters = document.querySelectorAll("p span")[1];
    const maxCharacters = 50;
   
    textarea.addEventListener("input", function() {
        const currentLength = textarea.value.length;
        totalCharacters.textContent = currentLength;
        remainingCharacters.textContent = maxCharacters - currentLength;
        if (currentLength >= maxCharacters) {
            textarea.value = textarea.value.substring(0, maxCharacters);
            remainingCharacters.textContent = 0;
            totalCharacters.textContent=50;
        }
    });
});