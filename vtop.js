(function () {
  "use strict";

  const username = "your username"; // Change to your credentials
  const password = "your password";
  const initialButton = document.querySelector(".btn.btn-primary.fw-bold");
  const usernameField = document.querySelector("#username");
  const passwordField = document.querySelector("#password");
  const submitButton = document.querySelector(".btn-sm");
  const captchaField = document.querySelector("#captchaStr");

  const clickInitialButton = () => {
    if (initialButton) {
      initialButton.click();
      setTimeout(fillLoginFormAndSubmit, 10);
    } else {
      fillLoginFormAndSubmit();
    }
  };

  const fillLoginFormAndSubmit = () => {
    if (usernameField && passwordField) {
      usernameField.value = username;
      passwordField.value = password;
    }

    let isSubmitted = false;

    const checkCaptchaAndSubmit = () => {
      if (!isSubmitted && submitButton) {
        if (captchaField) {
          // If CAPTCHA field exists, wait until it's filled
          if (captchaField.value) {
            submitButton.click();
            isSubmitted = true;
          } else {
            setTimeout(checkCaptchaAndSubmit, 10); // Wait for the CAPTCHA to be filled
          }
        } else {
          // If CAPTCHA is not present, submit the form directly
          submitButton.click();
          isSubmitted = true;
        }
      }
    };

    checkCaptchaAndSubmit();
  };

  clickInitialButton();
})();
