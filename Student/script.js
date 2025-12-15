
let markRange = document.getElementById("marks");
let markValue = document.getElementById("markValue");

markRange.oninput = function () {
    markValue.innerText = this.value;
};

// Generate Card
document.getElementById("generate").addEventListener("click", function () {

    document.getElementById("c_name").innerText =
        "Student Name: " + document.getElementById("name").value;

    document.getElementById("c_roll").innerText =
        "Roll No: " + document.getElementById("roll").value;

    document.getElementById("c_email").innerText =
        "Email: " + document.getElementById("email").value;

    document.getElementById("c_age").innerText =
        "Age: " + document.getElementById("age").value;

    let gender = document.querySelector("input[name='gender']:checked");
    document.getElementById("c_gender").innerText =
        "Gender: " + (gender ? gender.value : "");

    // Courses
    let courseList = [];
    if (document.getElementById("web").checked) courseList.push("Web");
    if (document.getElementById("ds").checked) courseList.push("DataScience");

    document.getElementById("c_course").innerText =
        "Courses: " + courseList.join(" ");

    document.getElementById("c_marks").innerText =
        "Marks: " + markRange.value + "/100";

    // Photo 
    let file = document.getElementById("photo").files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profileImg").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Download 
document.getElementById("download").addEventListener("click", function () {
    html2canvas(document.querySelector("#card")).then(canvas => {
        let link = document.createElement("a");
        link.download = "Student_Card.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});
