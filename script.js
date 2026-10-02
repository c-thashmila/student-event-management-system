// ===============================
// LANGUAGE SYSTEM
// ===============================

const translations = {

    en: {

        title: "Student Event Management System",

        welcome: "Welcome! Please login to continue.",

        studentId: "Student ID",

        password: "Password",

        login: "Login",

        register: "Don't have an account?",

        registerLink: "Register",

        success: "Login successful!"

    },


    si: {

        title: "ශිෂ්‍ය සිදුවීම් කළමනාකරණ පද්ධතිය",

        welcome: "සාදරයෙන් පිළිගනිමු! ඉදිරියට යාමට Login වන්න.",

        studentId: "ශිෂ්‍ය හැඳුනුම් අංකය",

        password: "මුරපදය",

        login: "Login වන්න",

        register: "ගිණුමක් නැද්ද?",

        registerLink: "ලියාපදිංචි වන්න",

        success: "Login වීම සාර්ථකයි!"

    },


    ta: {

        title: "மாணவர் நிகழ்வு மேலாண்மை அமைப்பு",

        welcome: "வரவேற்கிறோம்! தொடர Login செய்யவும்.",

        studentId: "மாணவர் அடையாள எண்",

        password: "கடவுச்சொல்",

        login: "Login",

        register: "கணக்கு இல்லையா?",

        registerLink: "பதிவு செய்யவும்",

        success: "Login வெற்றிகரமாக முடிந்தது!"

    }

};


// Change Language

function changeLanguage() {

    const language =
        document.getElementById("language").value;


    const text =
        translations[language];


    document.getElementById("systemTitle")
        .textContent = text.title;


    document.getElementById("welcomeText")
        .textContent = text.welcome;


    document.getElementById("studentId")
        .placeholder = text.studentId;


    document.getElementById("password")
        .placeholder = text.password;


    document.getElementById("loginText")
        .textContent = text.login;


    document.getElementById("registerText")
        .childNodes[0].textContent =
        text.register + " ";


    document.querySelector(".register-text a")
        .textContent = text.registerLink;

}



// ===============================
// LOGIN SYSTEM
// ===============================

document.getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const studentId =
            document.getElementById("studentId").value;


        const password =
            document.getElementById("password").value;


        if (studentId !== "" && password !== "") {

            const language =
                document.getElementById("language").value;


            document.getElementById("loginMessage")
                .textContent =
                translations[language].success;


            // Later we can redirect
            // student to the dashboard

        }

    });

 



   
