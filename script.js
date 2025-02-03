var resumeForm = document.getElementById('resumeForm');
var generateResumeButton = document.getElementById('generateResume');
generateResumeButton === null || generateResumeButton === void 0 ? void 0 : generateResumeButton.addEventListener('click', function () {
    var formData = new FormData(resumeForm);
    var name = formData.get('name');
    var email = formData.get('email');
    var phone = formData.get('phone');
    var education = formData.get('education');
    var experience = formData.get('experience');
    var skills = formData.get('skills');
    var profilePicSrc = document.getElementById('profilePicPreview').src;
    var resumeContent = "\n        <html>\n            <head>\n                <title>Generated Resume</title>\n                <link rel=\"stylesheet\" href=\"style.css\">\n            </head>\n            <body>\n                <div class=\"profile-preview\">\n                    <img id=\"editProfilePicPreview\" src=\"".concat(profilePicSrc, "\" alt=\"Profile Picture Preview\" style=\"display:block; max-width:150px; height:auto;\" contenteditable=\"true\">\n                </div>\n                <fieldset>\n                    <legend><i class=\"fas fa-user\"></i> Personal Info</legend>\n                    <h2 id=\"editName\" contenteditable=\"true\">").concat(name, "</h2>\n                    <p id=\"editEmail\" contenteditable=\"true\">Email: ").concat(email, "</p>\n                    <p id=\"editPhone\" contenteditable=\"true\">Phone: ").concat(phone, "</p>\n                </fieldset>\n                <fieldset>\n                    <legend><i class=\"fas fa-graduation-cap\"></i> Education</legend>\n                    <p id=\"editEducation\" contenteditable=\"true\">").concat(education, "</p>\n                </fieldset>\n                <fieldset>\n                    <legend><i class=\"fas fa-briefcase\"></i> Experience</legend>\n                    <p id=\"editExperience\" contenteditable=\"true\">").concat(experience, "</p>\n                </fieldset>\n                <fieldset>\n                    <legend><i class=\"fas fa-tools\"></i> Skills</legend>\n                    <p id=\"editSkills\" contenteditable=\"true\">").concat(skills, "</p>\n                </fieldset>\n                <script>\n                    // Function to save changes dynamically\n                    function saveChanges() {\n                        document.querySelectorAll('[contenteditable]').forEach(element => {\n                            element.addEventListener('input', () => {\n                                const fieldId = element.id;\n                                const value = element.textContent || element.src || '';\n                                sessionStorage.setItem(fieldId, value);\n                            });\n\n                            // Load saved data\n                            const savedValue = sessionStorage.getItem(element.id);\n                            if (savedValue) {\n                                if (element.tagName === 'IMG') {\n                                    element.src = savedValue;\n                                } else {\n                                    element.textContent = savedValue;\n                                }\n                            }\n                        });\n                    }\n\n                    saveChanges();\n                </script>\n            </body>\n        </html>\n    ");
    var resumeWindow = window.open('', '_blank');
    if (resumeWindow) {
        resumeWindow.document.write(resumeContent);
        resumeWindow.document.close();
    }
});
// Handle Profile Picture Preview
var profilePicInput = document.getElementById('profilePic');
var profilePicPreview = document.getElementById('profilePicPreview');
profilePicInput === null || profilePicInput === void 0 ? void 0 : profilePicInput.addEventListener('change', function (event) {
    var input = event.target;
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (profilePicPreview && e.target) {
                profilePicPreview.src = e.target.result;
                profilePicPreview.style.display = 'block';
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
});
