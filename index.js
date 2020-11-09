/* ------------------ SELECTORS ------------------ */

// GET the input
const passwordInput = document.querySelector('input');

// GET the generate button
const generateButton = document.querySelector('.buttonPassword');

// GET the copy button
const copyButton = document.querySelector('.passwordfieldDiv__copy');



/* ------------------ EVENT LISTENERS ------------------ */

// ADD a click event on the generate button that will trigger the function GeneratePassword
generateButton.addEventListener('click', () => {
    passwordInput.value = GeneratePassword(16);
    console.log('generateButton listener');
});

// ADD a click event on the copy button that will trigger the function CopyPassword
copyButton.addEventListener('click', () => {
    CopyPassword();
    console.log('copyPassword listener');
});



/* ------------------ FUNCTIONS ------------------ */

/* Function that generate the password and make it appear in the input  */
function GeneratePassword(length = 16) {
    // DECLARE the charset that we'll use for the password
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#!$";

    // Password is empty
    let password = '';

    // Looping 16 time to get a random char at each loop
    // and add the char to create the password
    for (let i = 0; i < length; i++) {
        let char = Math.floor(Math.random() * (charset.length + 1));
        password += charset.charAt(char);
    }

    return password;
}

/* Function that allow you to copy the password previously created */
function CopyPassword () {
    // Select the input content
    passwordInput.focus();
    passwordInput.select();

    // Copy the content to the clipboard
    document.execCommand('copy');

    // "Saving" the copy button's original text
    const originalCopyButtonText = copyButton.innerHTML;

    // Changing the copy's button to "copied"
    copyButton.innerHTML = "Copied ✓";

    // Resetting the copy button's original text after 2s
    setTimeout(() => {
        copyButton.innerHTML = originalCopyButtonText;
    }, 2000)
};