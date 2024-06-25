var loginPage = document.getElementById("showcase");
var classSheet = document.getElementById("classSheet");

function signIn(event) {
    event.preventDefault(); // Prevent form submission and page reload

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || password === "") {
        alert("Please fill in both email and password fields.");
    } else if (!email.match(emailFormat)) {
        alert("Please enter a valid email address.");
    } else {
        localStorage.setItem("userEmail", email);

        if (loginPage) {
            loginPage.style.display = "none";
        }

        if (classSheet) {
            classSheet.style.display = "block";
        }

        var showEmail = document.getElementById("showEmail");
        if (showEmail) {
            showEmail.innerText = email;
        }
    }
}

var students = [
    { name: "Muhammad", fatherName: "Abdullah" },
    { name: "Aisha", fatherName: "Abu Bakr" },
    { name: "Fatima", fatherName: "Muhammad" },
    { name: "Ali", fatherName: "Abu Talib" },
    { name: "Zainab", fatherName: "Husayn" },
    { name: "Omar", fatherName: "Abdul-Aziz" },
    { name: "Khadija", fatherName: "Khuwaylid" },
    { name: "Hassan", fatherName: "Ali" },
    { name: "Husayn", fatherName: "Ali" },
    { name: "Amina", fatherName: "Wahb" },
    { name: "Yusuf", fatherName: "Yaqub" },
    { name: "Maryam", fatherName: "Imran" },
    { name: "Bilal", fatherName: "Rabah" },
    { name: "Rukhsana", fatherName: "Siddiq" },
    { name: "Ibrahim", fatherName: "Azar" },
    { name: "Ayesha", fatherName: "Abu Bakr" },
    { name: "Amir", fatherName: "Harith" },
    { name: "Sumayyah", fatherName: "Khabbat" },
    { name: "Sana", fatherName: "Ayyash" },
    { name: "Abdullah", fatherName: "Ubayy" },
    { name: "Abdul-Rahman", fatherName: "Awf" }
];

function updateTable() {
    var tableBody = document.getElementById("student-table-body");
    tableBody.innerHTML = "";

    students.forEach(function(student, index) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.fatherName}</td>
            <td></td>
        `;
        tableBody.appendChild(row);
    });
}

updateTable();

var totalStudent = document.getElementById("Total");
totalStudent.innerHTML = students.length;

document.getElementById("addStudentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("studentName").value;
    var fatherName = document.getElementById("fatherName").value;

    students.push({ name: name, fatherName: fatherName });

    updateTable();

    totalStudent.innerHTML = students.length;

    document.getElementById("addStudentForm").reset();
    // Ensure jQuery and Bootstrap JS are included in your HTML file
    $('#addStudentModal').modal('hide'); // or use vanilla JS: document.getElementById('addStudentModal').style.display = 'none';
});

var totalStudent = document.getElementById("Total");
totalStudent.innerHTML = students.length;

// Logout
function logout() {
    if (confirm("Are you sure you want to logout?")) {
        // Remove the user email from localStorage
        localStorage.removeItem("userEmail");

        // Hide the classSheet and show the login page
        loginPage.style.display = "block"; // Correct ID used here
        classSheet.style.display = "none";
    }
}