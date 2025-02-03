const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const generateResumeButton = document.getElementById('generateResume') as HTMLButtonElement;

generateResumeButton?.addEventListener('click', () => {
    const formData = new FormData(resumeForm);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const education = formData.get('education') as string;
    const experience = formData.get('experience') as string;
    const skills = formData.get('skills') as string;

    const profilePicSrc = (document.getElementById('profilePicPreview') as HTMLImageElement).src;

    const resumeContent = `
        <html>
            <head>
                <title>Generated Resume</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <div class="profile-preview">
                    <img id="editProfilePicPreview" src="${profilePicSrc}" alt="Profile Picture Preview" style="display:block; max-width:150px; height:auto;" contenteditable="true">
                </div>
                <fieldset>
                    <legend><i class="fas fa-user"></i> Personal Info</legend>
                    <h2 id="editName" contenteditable="true">${name}</h2>
                    <p id="editEmail" contenteditable="true">Email: ${email}</p>
                    <p id="editPhone" contenteditable="true">Phone: ${phone}</p>
                </fieldset>
                <fieldset>
                    <legend><i class="fas fa-graduation-cap"></i> Education</legend>
                    <p id="editEducation" contenteditable="true">${education}</p>
                </fieldset>
                <fieldset>
                    <legend><i class="fas fa-briefcase"></i> Experience</legend>
                    <p id="editExperience" contenteditable="true">${experience}</p>
                </fieldset>
                <fieldset>
                    <legend><i class="fas fa-tools"></i> Skills</legend>
                    <p id="editSkills" contenteditable="true">${skills}</p>
                </fieldset>
                <script>
                    // Function to save changes dynamically
                    function saveChanges() {
                        document.querySelectorAll('[contenteditable]').forEach(element => {
                            element.addEventListener('input', () => {
                                const fieldId = element.id;
                                const value = element.textContent || element.src || '';
                                sessionStorage.setItem(fieldId, value);
                            });

                            // Load saved data
                            const savedValue = sessionStorage.getItem(element.id);
                            if (savedValue) {
                                if (element.tagName === 'IMG') {
                                    element.src = savedValue;
                                } else {
                                    element.textContent = savedValue;
                                }
                            }
                        });
                    }

                    saveChanges();
                </script>
            </body>
        </html>
    `;

    const resumeWindow = window.open('', '_blank');
    if (resumeWindow) {
        resumeWindow.document.write(resumeContent);
        resumeWindow.document.close();
    }
});

// Handle Profile Picture Preview
const profilePicInput = document.getElementById('profilePic') as HTMLInputElement;
const profilePicPreview = document.getElementById('profilePicPreview') as HTMLImageElement;

profilePicInput?.addEventListener('change', (event) => {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
            if (profilePicPreview && e.target) {
                profilePicPreview.src = e.target.result as string;
                profilePicPreview.style.display = 'block';
            }
        };

        reader.readAsDataURL(input.files[0]);
    }
});
