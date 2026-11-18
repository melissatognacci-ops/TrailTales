function discoveryAnswer(value, label, reaction, fact, followUp) {
    return { value, label, reaction, fact, followUp };
}

const deepDiscoveries = {
    shell: {
        environment: "beach",
        title: "The Shell That Remembered the Sea",
        opening: "Luma holds the Atlas sideways. “The Tide Guardian drew a tiny house here, but the drawing has faded. Could the clues on that shell help us imagine its maker?” Watch from a safe spot with your grown-up, away from the water. Leave the shell where it is. It may still have a resident.",
        ending: "Luma adds your clues to the Tide Guardian’s page. “Some marks might tell us about the animal that grew the shell. Others might tell us about what happened around it.” What might the shell’s maker have needed from its coastal habitat?",
        steps: [
            {
                id: "shape", question: "What outline can you see?",
                prompt: "Trace the shell’s outline with your eyes. Start with the largest shape you can see.",
                choices: [
                    discoveryAnswer("spiral", "A spiral", "“That curve looks like a path that winds around itself.”", "Many sea snails are a kind of mollusk that grows a coiled shell.", "See if any lines seem to follow the coil."),
                    discoveryAnswer("fan", "A fan or rounded half", "“I wonder whether our drawing is missing a matching half.”", "A bivalve, such as a clam, has two shell halves joined at a hinge.", "See if lines spread from the narrow end."),
                    discoveryAnswer("long", "Long or narrow", "“Let’s draw the long edge first.”", "Some mollusks grow elongated shells. A broken piece can also look narrow.", "Compare the two ends if you can see them.")
                ]
            },
            {
                id: "surface", question: "What stands out on the surface?",
                prompt: "Look for raised lines or flat patterns. Let the light help you see shadows along the surface.",
                choices: [
                    discoveryAnswer("ridges", "Raised ridges", "“Those little ridges are worth adding to the drawing.”", "Some lines form during shell formation. Raised ribs can also be part of the shell’s shape."),
                    discoveryAnswer("smooth", "It looks smooth", "“The lantern slides right across that patch.”", "Some shells grow smooth surfaces. Abrasion from sand can smooth them further."),
                    discoveryAnswer("stripes", "Stripes or bands", "“A line of color can be a clue even when it casts no shadow.”", "A mollusk can add colored material as it grows its shell.")
                ]
            },
            {
                id: "condition", question: "What condition is the shell in?",
                prompt: "Look at the edges you can see. Leave the shell facing the way you found it.",
                choices: [
                    discoveryAnswer("whole", "It looks whole", "“We can draw the outline we see.”", "An intact-looking shell can still be occupied."),
                    discoveryAnswer("broken", "It looks broken", "“A fragment still gives us something to draw.”", "Broken shell fragments can become part of coastal sediment."),
                    discoveryAnswer("worn", "Its edges look rounded or worn", "“Maybe this shell has had a journey.”", "Abrasion happens when surfaces rub together. Sand and pebbles shifted by waves can wear shell edges.")
                ]
            },
            {
                id: "color", question: "What colors can you see?",
                prompt: "Look at the parts already facing you. Notice whether the color changes near an edge or line.",
                choices: [
                    discoveryAnswer("plain", "Mostly one color", "“One shade is enough to start our sketch.”", "Shell color can vary among individual animals, even among animals of the same kind."),
                    discoveryAnswer("patches", "Spots or patches", "“Let’s record where the patches are.”", "Some shells grow with color patches. Material on the outside can also change their appearance."),
                    discoveryAnswer("bands", "Contrasting bands", "“The bands give our drawing a pattern.”", "Color can change as a mollusk adds shell material. Bands alone do not tell us the animal’s age.")
                ]
            },
            {
                id: "comparison", question: "What did your comparison show?",
                prompt: "If a second shell is already visible, compare its outline or markings. Otherwise try two areas of the first shell, or skip the comparison.",
                choices: [
                    discoveryAnswer("similar", "I noticed a similarity", "“Let’s put a little matching mark beside both clues.”", "Similar shells may have grown in similar ways. A single matching feature cannot establish what made them."),
                    discoveryAnswer("different", "I noticed a difference", "“Our page has room for both versions.”", "Shells can differ in shape, growth patterns, or how much they have worn."),
                    discoveryAnswer("unavailable", "There’s nothing else I can compare", "“We can leave a blank space for a future visit.”", "One well-described shell can be the starting point for a comparison another day.")
                ]
            }
        ]
    },
    "desert-plant": {
        environment: "desert",
        title: "The Plant That Outsmarted the Sun",
        opening: "Luma fans herself with a corner of the Atlas. “The Sun Guardian left us a puzzle. How does a plant keep growing when rain can be so scarce?” From a comfortable spot with your grown-up, look at a plant you can see without leaving the path. Leave the plant untouched.",
        ending: "The Sun Guardian puts your clues beside a drawing of a dry hillside. “Plants have different ways to manage with little water,” says Luma. “What could live in a patch of shade or visit a flower here?”",
        steps: [
            {
                id: "form", question: "What shape is the whole plant?",
                prompt: "Follow the outline with your eyes, from where it meets the ground to its tallest point.",
                choices: [
                    discoveryAnswer("round", "Round or rounded clumps", "“That outline fits in the curve of my lantern.”", "Some desert plants grow in compact shapes. Shape can be one clue about an adaptation.", "Look for where the clumps meet."),
                    discoveryAnswer("tall", "Tall or upright", "“I’ll sketch it standing straight across the page.”", "Some plants have upright stems that hold their growing parts above the ground.", "See whether the upper and lower areas look alike."),
                    discoveryAnswer("low", "Low and spreading", "“This one stretches sideways across our map.”", "A spreading plant can cast shade over patches of nearby soil.", "Look for the plant’s outer edges."),
                    discoveryAnswer("branches", "Many separate branches", "“I wonder if those branches are alike.”", "A branching shape can spread leaves or green stems into different patches of light.", "Compare two branches you can see clearly.")
                ]
            },
            {
                id: "surface", question: "What feature can you see on the outside?",
                prompt: "Look for points, fuzz, or shine from a distance. Skip any detail you can’t see clearly.",
                choices: [
                    discoveryAnswer("spines", "Spines or sharp-looking points", "“My sketch can get close enough. We’ll stay here.”", "Spines can protect some plants from animals that might eat them. Many kinds of plants have sharp points."),
                    discoveryAnswer("hair", "A fuzzy or hairy-looking surface", "“I’ll draw a soft edge around that part.”", "Fine hairs on some plants can reflect light or shade the surface."),
                    discoveryAnswer("waxy", "A shiny or waxy-looking surface", "“The bright patch caught my eye, too.”", "A waxy coating can slow water loss. A shiny look alone does not show what the surface is made of.")
                ]
            },
            {
                id: "leaves", question: "Which parts can you make out?",
                prompt: "Compare any parts that look like leaves with the stems that hold them. Some plants have leaves that are easy to miss.",
                choices: [
                    discoveryAnswer("small", "Small or narrow leaves", "“Those little shapes deserve a line in our sketch.”", "Small leaves can be an adaptation to dry conditions. They can lose heat more easily than larger leaves."),
                    discoveryAnswer("thick", "Thick stems or leaves", "“That thick part makes me wonder where water could fit.”", "A succulent stores water in fleshy leaves, stems, or roots. We can’t tell how much water is inside just by looking."),
                    discoveryAnswer("none", "No obvious leaves", "“Let’s mark ‘no leaves visible’ on our drawing.”", "Some plants shed leaves during dry times. In some plants, green stems carry out photosynthesis.")
                ]
            },
            {
                id: "surroundings", question: "What is around the plant?",
                prompt: "From the same spot, look at the ground beside the plant. Compare it with a patch a little farther away.",
                choices: [
                    discoveryAnswer("shade", "A patch of shade", "“Even a little shadow belongs on our map.”", "A shaded patch can form a cooler microhabitat for small living things."),
                    discoveryAnswer("bare", "Mostly open, sunny ground", "“There’s room to draw sunlight all around it.”", "In hot, dry conditions, transpiration can contribute to water loss from plants."),
                    discoveryAnswer("rocks", "Rocks or other plants close by", "“This plant has neighbors of more than one kind.”", "Rocks and nearby plants can change where shade falls or where rainwater collects.")
                ]
            },
            {
                id: "life", question: "Did you notice anything else living or growing?",
                prompt: "Pause and watch quietly from your safe spot. A flower, a visitor, or no visible change can all give you something to write down.",
                choices: [
                    discoveryAnswer("flower", "A flower or bud", "“The Sun Guardian will want that detail in the margin.”", "Flowers are part of how flowering plants reproduce. A bud may open into a flower."),
                    discoveryAnswer("visitor", "An animal close to the plant", "“Let’s watch without following it.”", "An animal may use a plant for shelter or food. Some flower visitors help with pollination."),
                    discoveryAnswer("quiet", "No flowers or visitors that I can see", "“That’s what this visit looked like. Another day might look different.”", "Flowers and animal activity can vary with the season or time of day.")
                ]
            }
        ]
    }
};

function discoveryOptions(step) {
    return [
        ...step.choices,
        discoveryAnswer("other", "✨ Something else", "“Let’s remember the detail that stood out to you.”", "Different observers may notice different features. You can compare what caught your eye with a nearby feature."),
        discoveryAnswer("unsure", "❓ I’m not sure", "“We can leave a space in the sketch. Let’s see what else is visible.”", "A detail can be hard to see because of light, distance, or its position.")
    ];
}
