"use strict";
// Handle photo preview
function loadPhoto(event) {
    const reader = new FileReader();
    const input = event.target;
    if (input.files && input.files[0]) {
        reader.onload = function (e) {
            var _a;
            const imgElement = document.getElementById("resumePhoto");
            if (imgElement) {
                imgElement.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}
// Update Resume Function
const updateResume = () => {
    // Personal Info
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const portfolio = document.getElementById('portfolio').value;
    const linkedin = document.getElementById('linkedin').value;
    const resumeFullName = document.getElementById('resumeFullName');
    const resumeEmail = document.getElementById('resumeEmail');
    const resumeContact = document.getElementById('resumeContact');
    const portfolioLink = document.getElementById('portfolioLink');
    const linkedinLink = document.getElementById('linkedinLink');
    if (resumeFullName && resumeEmail && resumeContact && portfolioLink && linkedinLink) {
        resumeFullName.innerText = fullName;
        resumeEmail.innerText = email;
        resumeContact.innerText = contact;
        portfolioLink.href = portfolio;
        linkedinLink.href = linkedin;
    }
    // Education
    const degree = document.getElementById('degree').value;
    const institute = document.getElementById('institute').value;
    const year = document.getElementById('year').value;
    const educationList = document.getElementById('educationList');
    if (educationList) {
        educationList.innerHTML = `<p>${degree} from ${institute}, ${year}</p>`;
    }
    // Skills
    const skillsList = document.getElementById('skills-list');
    if (skillsList) {
        skillsList.innerHTML = '';
        const skillInputs = document.querySelectorAll('.skill-item input');
        skillInputs.forEach((skillInput) => {
            const skill = skillInput.value;
            if (skill) {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            }
        });
    }
    // Experience
    const experienceList = document.getElementById('experienceList');
    const companyName = document.getElementById('companyName').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const details = document.getElementById('details').value;
    if (experienceList) {
        experienceList.innerHTML = `
            <h3>${jobTitle}</h3>
            <p><strong>Company:</strong> ${companyName}</p>
            <p><strong>Start Date:</strong> ${startDate}</p>
            <p><strong>End Date:</strong> ${endDate}</p>
            <p><strong>Details:</strong> ${details}</p>
        `;
    }
};
// Generate Resume Button Event Listener
const generateButton = document.getElementById('generateResume');
if (generateButton) {
    generateButton.addEventListener('click', () => {
        var _a;
        updateResume();
        (_a = document.getElementById('resumeOutput')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    });
}
// Add Skill Button Event Listener
const addSkillButton = document.getElementById('addSkillButton');
if (addSkillButton) {
    addSkillButton.addEventListener('click', () => {
        const skillsContainer = document.getElementById('skills-container');
        const skillIndex = skillsContainer.children.length + 1;
        const skillHTML = `
            <div class="skill-item">
                <label for="skill${skillIndex}">Skill ${skillIndex}</label>
                <input type="text" id="skill${skillIndex}" name="skill${skillIndex}" placeholder="Enter Skill ${skillIndex}" />
            </div>
        `;
        skillsContainer.insertAdjacentHTML('beforeend', skillHTML);
    });
}
// Make sections editable
const makeEditable = (element) => {
    element.contentEditable = "true";
    element.addEventListener('blur', () => {
        // Optionally add logic here to handle saving changes if needed
    });
};
// Add Editable Functionality
const resumeFullName = document.getElementById('resumeFullName');
const resumeEmail = document.getElementById('resumeEmail');
const resumeContact = document.getElementById('resumeContact');
const educationList = document.getElementById('educationList');
const skillsList = document.getElementById('skills-list');
const experienceList = document.getElementById('experienceList');
if (resumeFullName)
    makeEditable(resumeFullName);
if (resumeEmail)
    makeEditable(resumeEmail);
if (resumeContact)
    makeEditable(resumeContact);
if (educationList)
    makeEditable(educationList);
if (skillsList)
    makeEditable(skillsList);
if (experienceList)
    makeEditable(experienceList);
