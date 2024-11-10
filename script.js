// Define your skills with their respective percentage levels
var skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "TypeScript", level: 70 },
    { name: "Next.js", level: 50 }
];
// Function to dynamically update the skill bars
function updateSkillBars() {
    skills.forEach(function (skill) {
        var skillElement = document.querySelector("[data-skill=\"".concat(skill.name, "\"]"));
        if (skillElement) {
            skillElement.style.width = "".concat(skill.level, "%");
        }
    });
}
// Call the function to apply skill levels on page load
document.addEventListener("DOMContentLoaded", updateSkillBars);
