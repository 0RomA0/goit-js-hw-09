const formData = {
    email: "",
    message: "" 

}

const form = document.querySelector(".feedback-form");



form.addEventListener("input", (event) => {
    event.preventDefault();
    if (event.target.name === "email") {
        formData.email = event.target.value.trim();
    } else if (event.target.name === "message") {
        formData.message = event.target.value.trim();
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    
});


form.addEventListener("submit", (event) => {
    event.preventDefault();

     if (formData.email === "" || formData.message  === "") {
         alert("Fill please all fields");
        }
        else {
            console.log(formData);
    }
    
     event.target.reset();
    localStorage.removeItem("feedback-form-state");
})

