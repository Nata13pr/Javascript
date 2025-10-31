// – За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let myStringArray = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Git_Version_Control",
    "Flexbox_Layout",
    "Grid_System",
    "Responsive_Design",
    "Frontend_Development",
    "Backend_Development",
    "Vue_Js_Framework",
    "React_Js_Library",
    "Tailwind_CSS",
    "Web_Performance",
    "Accessibility_A11y",
    "Testing_Unit",
    "Debugging_Console",
    "Ternary_Operator",
    "Post_Increment",
    "Pre_Increment",
    "Falsy_Values"
];

let m = 0;

while (m < myStringArray.length) {
    document.write(
        `<h1>${myStringArray[m]}</h1>`
    )
    m += 1
}

