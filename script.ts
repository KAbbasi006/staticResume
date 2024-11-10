interface Skill {
    name: string;
    level: number; // skill level as a percentage
}

// Define your skills with their respective percentage levels
const skills: Skill[] = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "TypeScript", level: 70 },
    { name: "Next.js", level: 50 }
];

// Function to dynamically update the skill bars
function updateSkillBars() {
    skills.forEach(skill => {
        const skillElement = document.querySelector<HTMLElement>(`[data-skill="${skill.name}"]`);
        if (skillElement) {
            skillElement.style.width = `${skill.level}%`;
        }
    });
}

// Call the function to apply skill levels on page load
document.addEventListener("DOMContentLoaded", updateSkillBars);
