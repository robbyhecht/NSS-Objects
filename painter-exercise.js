// ## Objects' keys can contain values of any type, even functions.

let painter = {
  tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
  uniform: "white overalls",
  cost_per_hour: 25.00,
  insured: true
}

painter["action"] = () => "paint the walls"
console.log(painter.action())

painter.addTool = (tool) => {
  painter.tools.push(tool)
}

painter.addTool("car")
painter




// 1. Add an action that the painter can perform.
// 2. Have her take that action by execucting the method you created.

// BONUS:
// Add a method that allows us to add new tools for the painter.

// =====
// Use dot notation to access the value of the key "meaning_of_life" in this object

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life)

// Now access it using a variable called "meaning": `let meaning = "meaning_of_life"`

// let meaning = hitchhikers_guide.random_facts.ultimate_answer
// console.log(meaning) ??



