const forestChapters = [
    "The Guardian’s Call", "The First Discovery", "The Hidden World",
    "The Nature Experiment", "The Atlas Awakens"
];
const forestChapterMinutes = [10, 12, 12, 12, 10];

const forestChoice = (value, label, fact, clue) => ({ value, label, fact, clue });

const forestSounds = [
    forestChoice("birds", "🐦 Birds", "Birds use calls to share information.", "Can you tell if the calls come from high up or close to the ground?"),
    forestChoice("leaves", "🍃 Rustling leaves", "Wind can make leaves move and brush together.", "Can you spot something moving when you hear the rustle?"),
    forestChoice("water", "🌊 Water or waves", "Moving water can make different sounds as it passes over surfaces.", "Listen from where you are. Does the sound repeat or change? Stay away from the water’s edge."),
    forestChoice("insects", "🦗 Buzzing or insects", "Some insects make sound by moving their wings or rubbing body parts together.", "Does the buzz come and go? See what you can notice without following it."),
    forestChoice("people", "🚗 People or traffic", "People and vehicles are part of many outdoor soundscapes.", "From your safe spot, can you notice a quieter sound between the louder ones?"),
    forestChoice("other", "✨ Something else", "A sound’s rhythm and direction can be clues to where it comes from.", "Does your sound repeat, fade, or change direction?"),
    forestChoice("unsure", "❓ I’m not sure / It’s quiet", "A quiet moment can reveal faint sounds or things you can see.", "Try looking for a tiny movement, such as a change in a shadow."),
    forestChoice("thunder", "⛈️ Thunder", "Thunder is a sign that lightning is nearby.")
];

const forestQuestion = (title, prompt, question, choices) => ({ title, prompt, question, choices });

const forestPaths = {
    leaf: {
        label: "🍃 A leaf or plant",
        name: "The Sunlight Mystery",
        opening: "Luma hovers near your discovery and lifts her lantern. “Look at that! A leaf may look ordinary, but inside it is a remarkable system. First, let’s investigate what makes your leaf special.”",
        fact: "Leaves can use light to make sugars through photosynthesis.",
        details: [
            forestQuestion("The Leaf That Held the Sun", "Trace the outline with your eyes. If you can see several leaves from your safe spot, compare two.", "What shape catches your eye?", [
                forestChoice("oval", "Round or oval", "Leaves on the same plant often share an outline."),
                forestChoice("pointed", "Long or pointed", "Some plants have narrow leaves. Shape is one clue people use to identify plants."),
                forestChoice("divided", "Lobed or divided", "A single leaf can have lobes, or it can be divided into smaller leaflets.")
            ]),
            forestQuestion("A Closer Look at Color", "Compare two parts of the same leaf, or two leaves you can see. Notice where light is falling.", "What color pattern do you see?", [
                forestChoice("green", "Mostly one shade of green", "Chlorophyll helps leaves capture light and makes many leaves look green."),
                forestChoice("mixed", "More than one shade or color", "Leaves contain different pigments, and lighting can also change how their colors look."),
                forestChoice("dry", "Yellow or brown areas", "Leaves can change color as they age or dry. Color alone does not tell us what caused the change.")
            ]),
            forestQuestion("The Leaf’s Surface", "Look for shine, fine hairs, or wrinkles. You can look closely without touching or picking the leaf.", "What does the surface look like?", [
                forestChoice("shiny", "Smooth or shiny", "A waxy outer layer can slow water loss and may look shiny."),
                forestChoice("rough", "Fuzzy or ridged", "Some plants have tiny leaf hairs that can help protect the leaf."),
                forestChoice("holes", "It has holes", "Some insects chew holes in leaves. Holes can also form in other ways.")
            ]),
            forestQuestion("A Map of Tiny Roads", "See if you can follow a line from the leaf’s base toward its tip or edge.", "What do the lines look like?", [
                forestChoice("network", "Branches or a net", "Veins carry water and sugars through the leaf. In many leaves, smaller veins branch off larger ones."),
                forestChoice("parallel", "Lines running side by side", "Grass and many other plants have veins that run roughly parallel."),
                forestChoice("hidden", "I can see the leaf but no clear lines", "On some leaves, veins are hard to see from a distance.")
            ])
        ],
        hidden: forestQuestion("The Lantern Moth", "A moth made of golden light lands on the Atlas. Luma asks whose life might be connected to your plant. Look for clues from a distance. You can also watch without seeing an animal.", "What connection can you notice?", [
            forestChoice("visitor", "An animal near the plant", "Plants can provide food, shelter, or a resting place for animals."),
            forestChoice("trace", "A hole, web, or other trace", "A trace can give you an idea to investigate. It may have more than one explanation."),
            forestChoice("shade", "Shade beneath the leaves", "Plant shade changes how much light reaches nearby surfaces.")
        ]),
        experiment: forestQuestion("A Tale of Two Leaves", "Luma wants to know what light changes right away. Predict which leaf will look brighter. From your safe spot, compare a leaf in light with a similar leaf in shade. Look only at the leaves, never at the Sun. Compare what you see with your prediction.", "What happened in your comparison?", [
            forestChoice("brighter", "The leaf in the light looked brighter", "More light reflected toward your eyes can make a leaf look brighter."),
            forestChoice("different", "I noticed another difference", "Leaves can vary on their own. Comparing similar leaves helps when investigating the effect of light."),
            forestChoice("same", "They looked about the same", "Looking similar is an observation too. A short comparison cannot show how quickly a plant makes sugars.")
        ]),
        page: "The Page of Sunlight",
        ending: "The lantern moth carries your observation to the roots. The tree remembers its name: Sunweave. A network of golden veins spreads across the Atlas page, showing how leaves help feed a forest."
    },
    bark: {
        label: "🌳 A tree or piece of bark", name: "The Tree’s Armor",
        opening: "“The outside of a tree can tell us how it grows and what lives alongside it,” says Luma. Leave bark where it is.",
        fact: "Bark forms a protective outside layer around a tree.",
        details: [forestQuestion("Patterns in the Armor", "Look along the trunk and compare two spots from where you are. Leave bark attached to the tree.", "What pattern stands out?", [
            forestChoice("ridges", "Ridges or cracks", "On some trees the outer bark cracks into ridges as the trunk grows."),
            forestChoice("smooth", "A smooth patch", "Some trees have smooth bark, and bark can change as a tree ages."),
            forestChoice("patches", "Patches of different colors", "Bark color can vary, and organisms such as lichens sometimes grow on it.")
        ])],
        hidden: forestQuestion("The Keeper of the Cracks", "A tiny beetle made of letters shelters in the Atlas binding. Look for a place on or around the tree where an animal might hide.", "What shelter clue caught your eye?", [
            forestChoice("crevice", "A crack or hollow", "Small spaces can offer shelter from wind and larger animals."),
            forestChoice("base", "Leaves or roots near the base", "Leaf litter and roots can create small sheltered spaces.")
        ]),
        experiment: forestQuestion("Two Spots on One Trunk", "Predict whether two safely visible spots on the same tree look alike. Compare their textures and colors with your eyes.", "How did they compare?", [
            forestChoice("similar", "They looked similar", "Repeating patterns can be a clue that both surfaces grew in similar ways."),
            forestChoice("varied", "They looked different", "Different parts of a trunk may have different ages, light, or growth conditions.")
        ]),
        page: "The Page of Shelter",
        ending: "The letter beetle slips into a groove and unrolls a map of tiny shelters. The Forest Guardian remembers its name: Barkhaven. The Atlas fills with doorways only a beetle could fit through."
    },
    earth: {
        label: "🪨 A rock or interesting soil", name: "The Earth’s Memory",
        opening: "Luma points her lantern at the ground. “Imagine what this surface has seen.” Look from a stable spot and leave rocks and soil in place.",
        fact: "Some rocks hold clues about the materials and processes that formed them.",
        details: [forestQuestion("A Story in the Ground", "Look for grains, stripes, or contrasting colors without digging or lifting anything.", "What stands out?", [
            forestChoice("layers", "Layers or stripes", "Some rocks form from layers of sediment. Other processes can make bands too."),
            forestChoice("colors", "Specks or different colors", "Different minerals can give rocks different colors."),
            forestChoice("grains", "Grains or an uneven surface", "Weathering can break rock into smaller pieces over time.")
        ])],
        hidden: forestQuestion("The Pebble Scribe", "A figure made of sand appears on the edge of the Atlas. Look nearby for clues about where water might travel after rain.", "What might change where water goes?", [
            forestChoice("slope", "A slope or low spot", "Gravity pulls water downhill, and water can collect in low spots."),
            forestChoice("cover", "Plants or bare ground", "Plant roots can hold soil in place, which can reduce erosion.")
        ]),
        experiment: forestQuestion("Follow the Grains", "Predict where tiny grains might gather after rain. Compare a higher and lower spot you can see without moving, pouring water, or disturbing the ground.", "What did you notice?", [
            forestChoice("gathered", "One spot had more loose grains", "Moving water can carry and deposit grains. Wind and footsteps can move grains too."),
            forestChoice("even", "The spots looked similar", "A surface may have changed before you arrived, or may need a different comparison to reveal a pattern.")
        ]),
        page: "The Page of Deep Time",
        ending: "The Pebble Scribe tips a grain onto the page. It becomes a hillside drawn in bands of color. The Guardian remembers its name: Stonekeeper."
    },
    animal: {
        label: "🦋 An animal or insect", name: "The Tiny Traveler",
        opening: "“Let’s learn something about our visitor by giving it space,” Luma whispers. Watch quietly from where you are without touching or following it.",
        fact: "An animal’s habitat can provide food, water, shelter, and space.",
        details: [forestQuestion("Watch the Traveler", "Watch its movement, body, and surroundings. If it goes out of sight, use what you already noticed.", "What could you see?", [
            forestChoice("motion", "How it moved", "Animals move in different ways to find resources or avoid danger."),
            forestChoice("body", "A body feature", "Features such as wings, legs, or a shell can help an animal live in its habitat."),
            forestChoice("place", "Where it spent time", "Where you first see an animal may be one clue about what it needs.")
        ])],
        hidden: forestQuestion("The Trail of Silver Thread", "A silver trail crosses the Atlas. Luma asks you to look for a nearby habitat feature the animal could use.", "Which feature did you notice?", [
            forestChoice("food", "A flower, plant, or possible food source", "Flower visitors may feed on nectar or pollen."),
            forestChoice("cover", "A shady or sheltered spot", "Cover can help animals stay out of view or avoid heat.")
        ]),
        experiment: forestQuestion("A Pause in the Journey", "Pick a small patch you can watch quietly. Predict whether the traveler will stay still or move. Watch for a short while and compare with your prediction. Let it leave whenever it wants.", "What happened while you watched?", [
            forestChoice("moved", "It changed position", "A change in position can be a starting point for wondering what an animal was doing."),
            forestChoice("still", "It stayed still", "Resting or staying still is also animal behavior worth noticing."),
            forestChoice("gone", "I lost sight of it", "It is normal to lose sight of wildlife. Your record can say what you saw before it disappeared.")
        ]),
        page: "The Page of Wild Paths",
        ending: "The silver trail becomes a map from food to shelter. The Guardian remembers its name: Pathweaver. It leaves enough blank space for creatures to find paths of their own."
    },
    sky: {
        label: "☀️ Light, shadows, or the sky", name: "The Dancing Light",
        opening: "“Light changes what we see and where living things spend time,” says Luma. Look at the ground, nearby surfaces, or a patch of sky away from the Sun.",
        fact: "A shadow forms when an object blocks light.",
        details: [forestQuestion("A Moving Pattern", "Look for the edge of a shadow, dappled light, or clouds away from the Sun.", "What did you see?", [
            forestChoice("edge", "A clear shadow edge", "Direct light can produce a clear shadow edge."),
            forestChoice("dappled", "Patches of light and shade", "Gaps between leaves can let sunlight through and make bright patches."),
            forestChoice("cloud", "Clouds or soft light", "Clouds scatter light and can make shadows softer.")
        ])],
        hidden: forestQuestion("The Shade Sprite", "A sprite made of shade peeks out from the Atlas. Look for what casts shade or where shade offers cover.", "What helped make a shady spot?", [
            forestChoice("tree", "A tree or plant", "Plants can shade smaller plants and animals."),
            forestChoice("structure", "A rock, wall, or other surface", "Objects can make small patches with different light from their surroundings.")
        ]),
        experiment: forestQuestion("Shadow Watch", "Predict if a shadow edge will stay still. Choose a shadow on a nearby surface and check its edge twice, with a short pause in between.", "Did the edge change?", [
            forestChoice("moved", "Yes, it shifted or blurred", "Wind can move the object casting a shadow, and passing clouds can soften its edge."),
            forestChoice("still", "It looked the same", "Some shadow changes are subtle over a short observation.")
        ]),
        page: "The Page of Dancing Light",
        ending: "The sprite draws a line of shade across the paper. Along the edge, the Forest Guardian’s name appears: Shadeglow. The page shows bright clearings beside sheltered places."
    }
};

function forestOpenPath(label) {
    return {
        label, name: "The Quiet Clue",
        opening: "“Let’s begin with whatever is available,” says Luma. Stay where you feel safe and try a sound, a nearby surface, or the feeling of air on your skin.",
        fact: "Sound, surfaces, and air can all provide clues about a place.",
        details: [forestQuestion("Something Small", "Give yourself a moment and choose a clue you can notice comfortably.", "What did you notice?", [
            forestChoice("air", "Air moving or feeling still", "Air movement can change from one moment and place to the next."),
            forestChoice("surface", "A nearby color or surface", "One surface can reflect light differently from another."),
            forestChoice("sound", "A nearby or distant sound", "Sound reaching your ears can be affected by distance and the surroundings.")
        ])],
        hidden: forestQuestion("The Margin Keeper", "A tiny figure peeks out from the Atlas margin. Look or listen for a clue that changes as you wait.", "What did you notice about the place?", [
            forestChoice("change", "Something changed", "A change can give you a new comparison to make."),
            forestChoice("steady", "It seemed steady", "A clue that stays steady is useful to record too.")
        ]),
        experiment: forestQuestion("Try a Second Look or Listen", "Pick a clue and predict if it will be the same the next time you check. Pause, then check it again from your safe spot.", "What happened the second time?", [
            forestChoice("repeat", "I noticed the same thing", "Repeating an observation can reveal what stays steady."),
            forestChoice("new", "It changed or I noticed something new", "Repeating an observation can reveal changes or details you missed at first.")
        ]),
        page: "The Page of Small Wonders",
        ending: "The Margin Keeper makes room for a little mark on the Atlas. The Guardian remembers its name: Stillroot. The mark becomes a place for future Wonderkeepers to begin."
    };
}

forestPaths.other = forestOpenPath("✨ Something else");
forestPaths.unsure = forestOpenPath("❓ I’m not sure / I don’t see anything");

const forestFallbacks = [
    forestChoice("other", "✨ Something else", "Unexpected observations can lead to new questions."),
    forestChoice("unsure", "❓ I’m not sure", "Writing down what you are unsure about is part of observing.")
];

function forestScenes(pathId, soundId) {
    const path = forestPaths[pathId];
    const sound = forestSounds.find(choice => choice.value === soundId);
    const scenes = [
        {
            id: "opening", chapter: 1, chapterStart: true, title: "The Tree That Forgot Its Name", next: "Begin the adventure",
            prompt: `Something extraordinary has happened.

Deep within the forest stands a tree older than any living creature can remember. Every root holds a memory. Every leaf carries a story.

But this morning, the tree has forgotten its own name.

The birds have stopped delivering its messages. The insects have lost their secret pathways. And the ancient book hidden among its roots has begun to fade.

Just as you enter the world of TrailTales, a tiny golden light flickers before you.

“Explorer! Explorer! Can you hear me?”

A little glowing creature appears, no larger than your thumb.

“My name is Luma. I’m a Keeper of Wonders. The Guardians once kept the Atlas of Wonders. The Forest Guardian cared for growing things, the Tide Guardian watched over the oceans, and the Sun Guardian watched over desert life. Now their pages are fading. I need a Wonderkeeper who knows how to look closely.”

She glances around nervously.

“Someone who’s willing to ask questions.”

Before you begin, choose a safe place with a grown-up. You can explore from where you are, including from indoors. Plan for about an hour, at your own pace. Take breaks whenever you like. The adventure saves as you go.`
        },
        {
            id: "listen", chapter: 1, title: "The Listening Spell",
            prompt: "Luma lifts her lantern. “The Atlas can only wake when we discover what the world is telling us.”\n\nStay still in your safe spot. Listen nearby, then farther away. Give quieter sounds time to emerge. If you can’t hear the sounds around you, notice movement or choose the quiet option.",
            question: "What do you hear?", choices: forestSounds, journalPrompt: "I heard"
        },
        { id: "storm", chapter: 1, storm: true },
        {
            id: "object", chapter: 1, title: "The Missing Page",
            prompt: `“${sound?.clue ?? ""}” Luma says. Take a moment to try.

Luma opens the Atlas. A page is completely blank. “This page used to tell the story of how living things survive. Perhaps a clue is right in front of us.”

Look close by, then farther away. Find something you can observe from your safe area. Leave it where it is.`,
            question: "What have you discovered?", journalPrompt: "I noticed",
            choices: Object.entries(forestPaths).map(([id, route]) => forestChoice(id, route.label, route.fact))
        }
    ];

    if (!path) return scenes;
    scenes.push(
        { id: "investigation", chapter: 2, chapterStart: true, title: path.name, prompt: path.opening + "\n\nSpend a few minutes looking for details. Try comparing what you can see nearby with something farther away.", next: "Look closer" },
        ...path.details.map((detail, index) => ({ ...detail, id: "detail-" + index, chapter: 2, journalPrompt: detail.question, choices: [...detail.choices, ...forestFallbacks] })),
        { ...path.hidden, id: "hidden", chapter: 3, chapterStart: true, journalPrompt: "My habitat clue", choices: [...path.hidden.choices, ...forestFallbacks] },
        { ...path.experiment, id: "experiment", chapter: 4, chapterStart: true, journalPrompt: "My experiment", choices: [...path.experiment.choices, ...forestFallbacks] },
        {
            id: "atlas", chapter: 5, chapterStart: true, title: path.page,
            prompt: path.ending + "\n\n“Wonderkeeper, the Atlas needed someone to notice what was already here,” Luma says. “The other Guardians may need your eyes and ears, too.”\n\nTake one more look or listen. Which clue would help a new Wonderkeeper get to know this place?",
            next: "Reflect in my journal"
        },
        {
            id: "journal", chapter: 5, title: "A Wonderkeeper’s Journal",
            prompt: "Look back at what you noticed. Which discovery surprised you? What would you look or listen for on another visit? Share a thought with your grown-up, or keep it in mind for your next adventure. You can revisit lessons from your journal.",
            next: "Choose another adventure"
        }
    );
    return scenes;
}
