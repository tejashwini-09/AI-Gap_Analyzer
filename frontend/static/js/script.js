
document.addEventListener("DOMContentLoaded", function () {

    const jobForm = document.getElementById("jobForm");

    if (jobForm) {
        jobForm.addEventListener("submit", function (event) {

            // Stop the page from refreshing
            event.preventDefault();

            // Get the uploaded resume
            const resume = document.getElementById("resume").files[0];

            // Get the job description
            const jobDescription =
                document.getElementById("jobDescription").value;

            // Check the inputs
            if (!resume || !jobDescription.trim()) {
                alert("Please upload your resume and enter a job description.");
                return;
            }

            // Temporary message
            alert(
                "Your information is received!\n\n" +
                "Resume: " + resume.name +
                "\nJob description: " + jobDescription.length +
                " characters.\n\nAI analysis will be connected soon."
            );

        });
    }

});


document.addEventListener("DOMContentLoaded", function () {

    const careerForm = document.getElementById("careerForm");

    if (careerForm) {
        careerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const resume = document.getElementById("resume").files[0];
            const career = document.getElementById("career").value;

            if (!resume || !career) {
                alert("Please upload your resume and select a career.");
                return;
            }

            alert(
                "Your information is received!\n\n" +
                "Resume: " + resume.name +
                "\nDesired career: " + career +
                "\n\nAI analysis will be connected soon."
            );

        });
    }

});
