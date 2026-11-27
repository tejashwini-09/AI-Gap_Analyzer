
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

