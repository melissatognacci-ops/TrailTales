
// ============================================
// TRAILTALES 0.3 - ADAPTIVE ADVENTURE ENGINE
// ============================================

// HTML elements
const sceneTitle = document.getElementById("scene-title");
const sceneImage = document.getElementById("scene-image");
const storyText = document.getElementById("story-text");
const progressText = document.getElementById("progress-text");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices");
const factContainer = document.getElementById("fact-container");
const factText = document.getElementById("fact-text");
const continueButton = document.getElementById("continue-button");
const saveStatus = document.getElementById("save-status");
const journal = document.getElementById("explorer-journal");
const journalEmpty = document.getElementById("journal-empty");
const journalEntries = document.getElementById("journal-entries");
const saveKey = "trailtales.adventure.v2";
let forestRun = null;

// Player observations
const discoveries = {
    environment: null,
    sound: null,
    observation: null,
    detail: null
};

// ============================================
// ENVIRONMENTS AND QUEST CONTENT
// ============================================

const environments = {
    forest: {
        image: "assets/images/scenes/forest.jpg",
        imageAlt: "A trail winding past an ancient tree and woodland ferns.",
        name: "🌳 Forest / Trail",
        title: "The Lost Forest Guardian",
        opening:
            "The Forest Guardian's magic is fading. " +
            "An ancient voice whispers: 'Explorer, " +
            "the clues are hidden in the world around you.'",

        observations: [
            {
                label: "🍃 A leaf",
                story: "A woodland spirit notices your leaf!",
                fact: "Leaves capture sunlight for photosynthesis, helping plants make sugars.",
                question: "What do you notice about the leaf?",
                details: [
                    {
                        label: "It has holes",
                        story: "Tiny woodland footprints glow!",
                        fact: "Insects sometimes eat holes in leaves."
                    },
                    {
                        label: "I can see its veins",
                        story: "The veins reveal a magical map!",
                        fact: "Leaf veins transport water and sugars."
                    }
                ]
            },
            {
                label: "🌳 A tree",
                story: "The ancient trees begin to whisper!",
                fact: "Trees are important parts of an ecosystem, providing food and shelter for many living things.",
                question: "What do you notice about the tree?",
                details: [
                    {
                        label: "Rough bark",
                        story: "Patterns in the bark reveal a clue!",
                        fact: "Bark protects a tree's inner tissues."
                    },
                    {
                        label: "Branches overhead",
                        story: "A magical canopy lights up!",
                        fact: "Branches support leaves that capture light."
                    }
                ]
            }
        ]
    },

    beach: {
        image: "assets/images/scenes/beach.jpg",
        imageAlt: "Teal waves meeting a sandy beach edged with coastal grasses.",
        name: "🌊 Beach / Coast",
        title: "The Secret of the Tides",
        opening:
            "A message from the Tide Guardian washes " +
            "into your imagination. 'Explorer, the ocean " +
            "holds secrets. Look closely at the shore!'",

        observations: [
            {
                label: "🐚 A shell",
                story: "A magical pearl glimmers nearby!",
                fact: "Many seashells were made by mollusks.",
                question: "What do you notice about the shell?",
                details: [
                    {
                        label: "It has ridges",
                        story: "The ridges glow like ocean waves!",
                        fact: "Shell ridges can form as mollusks grow."
                    },
                    {
                        label: "It is smooth",
                        story: "The shell shines with sea magic!",
                        fact: "Waves and sand can wear down shells."
                    }
                ]
            },
            {
                label: "🏖️ Sand",
                story: "Tiny grains begin to sparkle!",
                fact: "Sand can contain minerals, rock fragments and shell pieces.",
                question: "What do you notice about the sand?",
                details: [
                    {
                        label: "Different colors",
                        story: "The colors reveal a hidden clue!",
                        fact: "Sand colors depend on the materials making up its grains."
                    },
                    {
                        label: "Interesting patterns",
                        story: "The Tide Guardian reveals a map!",
                        fact: "Wind and moving water can shape patterns in sand."
                    }
                ]
            }
        ]
    },

    desert: {
        image: "assets/images/scenes/desert.jpg",
        imageAlt: "Golden sandstone formations rising above a desert dotted with cacti.",
        name: "🌵 Desert",
        title: "The Desert's Hidden Secret",
        opening:
            "The Sun Guardian has lost a precious " +
            "crystal. 'Explorer, the desert may look " +
            "quiet, but it is full of life and secrets!'",

        observations: [
            {
                label: "🌵 A desert plant",
                story: "A green guardian glows in the sunlight!",
                fact: "Many desert plants have adaptations that help conserve water.",
                question: "What do you notice about the plant?",
                details: [
                    {
                        label: "Spines",
                        story: "Tiny golden shields appear!",
                        fact: "Cactus spines can help protect the plant and reduce heat exposure."
                    },
                    {
                        label: "Thick stems or leaves",
                        story: "A hidden water crystal appears!",
                        fact: "Some desert plants store water in thick stems or leaves."
                    }
                ]
            },
            {
                label: "🪨 A rock",
                story: "The rock reveals an ancient symbol!",
                fact: "Rocks can record clues about Earth's history.",
                question: "What do you notice about the rock?",
                details: [
                    {
                        label: "It has layers",
                        story: "An ancient timeline appears!",
                        fact: "Some rocks form in layers from deposited sediment."
                    },
                    {
                        label: "It has different colors",
                        story: "The Sun Guardian reveals a rainbow!",
                        fact: "Minerals can give rocks different colors."
                    }
                ]
            }
        ]
    },

    garden: {
        image: "assets/images/scenes/garden.jpg",
        imageAlt: "A garden path between wildflowers and leafy shade trees.",
        name: "🌻 Backyard / Park",
        title: "The Secret Garden",
        opening:
            "A tiny magical doorway appears in " +
            "your imagination. 'Even the smallest " +
            "garden holds incredible discoveries!'",

        observations: [
            {
                label: "🌸 A flower",
                story: "The Flower Guardian awakens!",
                fact: "Many flowering plants depend on pollination to produce seeds.",
                question: "What do you notice about the flower?",
                details: [
                    {
                        label: "Colorful petals",
                        story: "A rainbow of magic appears!",
                        fact: "Flower colors can help attract pollinators."
                    },
                    {
                        label: "A visiting insect",
                        story: "A tiny messenger has arrived!",
                        fact: "Some insects move pollen between flowers."
                    }
                ]
            },
            {
                label: "🐜 An insect",
                story: "A tiny creature reveals a secret path!",
                fact: "Insects are important members of many ecosystems.",
                question: "What do you notice about the insect?",
                details: [
                    {
                        label: "It has wings",
                        story: "A winged messenger takes flight!",
                        fact: "Many adult insects have wings, but not all do."
                    },
                    {
                        label: "It is crawling",
                        story: "Tiny footsteps illuminate the path!",
                        fact: "Adult insects have six legs."
                    }
                ]
            }
        ]
    },

    other: {
        image: "assets/images/scenes/other.jpg",
        imageAlt: "A meadow path leading toward distant hills.",
        name: "✨ Somewhere Else",
        title: "The Anywhere Adventure",
        opening:
            "A magical compass appears! " +
            "'Adventure exists wherever you are. " +
            "Your curiosity will guide our story.'",

        observations: [
            {
                label: "🌱 Something growing",
                story: "The compass glows green!",
                fact: "Living things grow and respond to their environments.",
                question: "What do you notice?",
                details: [
                    {
                        label: "Different colors",
                        story: "Colors awaken the magic!",
                        fact: "Natural pigments create many colors in living things."
                    },
                    {
                        label: "Interesting shapes",
                        story: "A mysterious pattern appears!",
                        fact: "Shapes can help organisms survive in their habitats."
                    }
                ]
            },
            {
                label: "🪨 Something nonliving",
                story: "The compass reveals an ancient clue!",
                fact: "Nonliving things like rocks and water are parts of ecosystems.",
                question: "What do you notice?",
                details: [
                    {
                        label: "An interesting texture",
                        story: "A hidden symbol emerges!",
                        fact: "Texture can offer clues about how a material formed."
                    },
                    {
                        label: "A surprising pattern",
                        story: "The compass reveals a secret map!",
                        fact: "Natural patterns can form through many physical processes."
                    }
                ]
            }
        ]
    }
};

// Sound observations work in ANY environment.
const soundChoices = [
    {
        label: "🌊 Ocean",
        value: "ocean",
        story: "A blue wave of magic sweeps across your quest!",
        fact: "Many ocean waves are created by wind transferring energy to water."
    },
    {
        label: "🍃 Leaves",
        value: "leaves",
        story: "A whispering breeze carries a secret message!",
        fact: "Rustling leaves are often moved by wind."
    },
    {
        label: "🐦 Birds",
        value: "birds",
        story: "A feathered messenger announces your arrival!",
        fact: "Birds use sounds to communicate."
    },
    {
        label: "⛈️ Thunder",
        value: "thunder",
        story: "The Storm Guardian sends a safety warning!",
        fact: "Thunder is produced when lightning rapidly heats surrounding air."
    }
];

// Reusable fallback options
function withFallbacks(options) {
    return [
        ...options,
        {
            label: "✨ Something else",
            value: "other",
            story: "Your unique discovery creates a new kind of magic!",
            fact: "Nature is full of surprising variety."
        },
        {
            label: "❓ I'm not sure",
            value: "unsure",
            story: "The Guardian smiles at your curiosity!",
            fact: "Scientists often begin by asking questions."
        }
    ];
}

// ============================================
// REUSABLE GAME UI
// ============================================

function setSceneImage(src, alt = "") {
    sceneImage.parentElement.hidden = !src;
    sceneImage.alt = alt;
    if (src) sceneImage.src = src;
    else sceneImage.removeAttribute("src");
}

sceneImage.addEventListener("error", () => setSceneImage());

function clearScene() {
    setSceneImage();
    questionContainer.hidden = true;
    factContainer.hidden = true;
    continueButton.hidden = true;
    choicesContainer.innerHTML = "";
}

function setProgress(text) {
    progressText.textContent = text;
}

function renderJournal() {
    journal.hidden = discoveries.environment === null;
    journalEntries.replaceChildren();

    const entries = forestRun?.entries ?? [
        ["I heard", discoveries.sound],
        ["I noticed", discoveries.observation],
        ["I looked closer", discoveries.detail]
    ];
    for (const [prompt, choice] of entries) {
        if (!choice) continue;

        const entry = document.createElement("li");
        const label = document.createElement("strong");
        label.textContent = prompt + ": " + choice.label;
        const fact = document.createElement("span");
        showEducationalFact(choice.fact, fact);
        entry.append(label, document.createElement("br"), fact);
        journalEntries.appendChild(entry);
    }

    journalEmpty.hidden = journalEntries.childElementCount > 0;
    journalEntries.hidden = !journalEmpty.hidden;
}

function enterScene(scene, progress) {
    clearScene();
    setProgress(progress);
    renderJournal();

    saveStatus.hidden = !discoveries.environment;
    try {
        if (discoveries.environment) {
            localStorage.setItem(saveKey, JSON.stringify({
                scene,
                environment: discoveries.environment,
                sound: discoveries.sound?.value,
                observation: choiceId(discoveries.observation),
                detail: choiceId(discoveries.detail),
                forestActions: forestRun?.actions
            }));
            saveStatus.textContent = "Progress saved in this browser.";
        } else {
            localStorage.removeItem(saveKey);
        }
    } catch {
        saveStatus.hidden = false;
        saveStatus.textContent = "Saving is unavailable in this browser.";
    }
}

function choiceId(choice) {
    return choice?.value ?? choice?.label;
}

function showChoices(question, options, callback) {
    questionText.textContent = question;
    questionContainer.hidden = false;
    choicesContainer.innerHTML = "";

    options.forEach(option => {
        const button = document.createElement("button");
        button.type = "button";
        if (option.image) {
            button.className = "choice-card";
            const thumbnail = document.createElement("img");
            thumbnail.className = "choice-card-image";
            thumbnail.alt = "";
            thumbnail.loading = "lazy";
            thumbnail.addEventListener("error", () => { thumbnail.hidden = true; });
            thumbnail.src = option.image;

            const label = document.createElement("span");
            label.className = "choice-card-label";
            label.textContent = option.label;
            button.append(thumbnail, label);
        } else {
            button.textContent = option.label;
        }

        button.addEventListener("click", () => {
            callback(option);
            sceneTitle.focus();
        });

        choicesContainer.appendChild(button);
    });
}

function showContinue(label, callback) {
    continueButton.textContent = label;
    continueButton.hidden = false;
    continueButton.onclick = () => {
        callback();
        sceneTitle.focus();
    };
}


function showDiscovery(scene, progress, choice, nextScene) {
    enterScene(scene, progress);

    sceneTitle.textContent = "✨ A New Discovery!";
    storyText.textContent = choice.story;

    showEducationalFact(choice.fact);

    factContainer.hidden = false;

    showContinue("Continue Adventure →", nextScene);
}


// ============================================
// SCENE 1 - CHOOSE ENVIRONMENT
// ============================================

function startQuest() {
    forestRun = null;
    discoveries.environment = null;
    discoveries.sound = null;
    discoveries.observation = null;
    discoveries.detail = null;

    journal.open = false;
    enterScene("start", "Your adventure starts here");

    sceneTitle.textContent = "Where Are You Exploring?";
    storyText.textContent =
        "The Guardians’ Atlas of Wonders is losing its pages. As a Wonderkeeper, " +
        "you can help restore them by noticing the natural world. Choose the place that best matches where you are today.";

    const options = Object.entries(environments)
        .map(([id, environment]) => ({
            label: environment.name,
            value: id,
            image: environment.image
        }));

    showChoices(
        "Choose your environment:",
        options,
        choice => {
            discoveries.environment = choice.value;
            if (choice.value === "forest") {
                forestRun = createForestRun();
                showForestScene();
            } else {
                showIntroduction();
            }
        }
    );
}

function createForestRun() {
    return { sceneId: "opening", pathId: null, soundId: null, actions: [], entries: [] };
}

function advanceForestRun(run, scenes, action) {
    const index = scenes.findIndex(scene => scene.id === run.sceneId);
    const scene = scenes[index];
    if (!scene || scene.storm || scene.id === "journal") return false;

    const choice = scene.choices?.find(option => option.value === action);
    if (scene.choices ? !choice : action !== null) return false;

    if (choice) run.entries.push([scene.journalPrompt, choice]);
    run.actions.push(action);
    if (scene.id === "listen") run.soundId = action;
    if (scene.id === "object") run.pathId = action;

    if (scene.id === "listen") {
        run.sceneId = action === "thunder" ? "storm" : "object";
    } else if (scene.id === "object") {
        run.sceneId = "investigation";
    } else {
        run.sceneId = scenes[index + 1].id;
    }
    return true;
}

function showForestScene() {
    const scenes = forestScenes(forestRun.pathId, forestRun.soundId);
    const scene = scenes.find(candidate => candidate.id === forestRun.sceneId);
    if (scene.storm) {
        showStormEnding("forest");
        return;
    }

    const chapterIndex = scene.chapter - 1;
    let progress = "Chapter " + scene.chapter + " of 5 · " + forestChapters[chapterIndex];
    if (scene.chapterStart) progress += " · About " + forestChapterMinutes[chapterIndex] + " min";
    if (scene.id === "journal") progress = "Adventure complete · Journal reflection · About 4 min";
    enterScene("forest", progress);
    if (scene.id === "opening") {
        setSceneImage(environments.forest.image, environments.forest.imageAlt);
    }
    sceneTitle.textContent = scene.title;
    const lastChoice = forestRun.entries.at(-1)?.[1];
    const leafFollowUp = forestRun.pathId === "leaf" && scene.id === "detail-1" && lastChoice.clue;
    showEducationalFact(leafFollowUp ? leafFollowUp + "\n\n" + scene.prompt : scene.prompt, storyText);
    if (scene.id === "atlas") {
        const firstClue = forestRun.entries[2][1].label;
        const experiment = forestRun.entries.at(-1)[1].label;
        storyText.append("\n\nLuma writes your clues in the Atlas.\n" +
            "A detail you noticed: " + firstClue + "\n" +
            "What happened when you checked: " + experiment);
    }
    if (scene.id === "journal") {
        journal.open = true;
        showContinue(scene.next, startQuest);
        return;
    }

    if (lastChoice && forestRun.actions.at(-1) !== null) {
        showEducationalFact(lastChoice.fact);
        factContainer.hidden = false;
    }

    const advance = action => {
        if (advanceForestRun(forestRun, scenes, action)) showForestScene();
    };
    if (scene.choices) {
        showChoices(scene.question, scene.choices, choice => advance(choice.value));
    } else {
        showContinue(scene.next, () => advance(null));
    }
}

// ============================================
// SCENE 2 - ENVIRONMENT STORY
// ============================================

function showIntroduction() {
    const environment = environments[discoveries.environment];

    enterScene("introduction", "Chapter 1 - The Mystery Begins");
    setSceneImage(environment.image, environment.imageAlt);
    sceneTitle.textContent = environment.title;
    storyText.textContent = environment.opening;

    showContinue("🌿 Begin Adventure", showSoundQuestion);
}

// ============================================
// SCENE 3 - LISTEN TO NATURE
// ============================================

function showSoundQuestion() {
    enterScene("soundQuestion", "Chapter 2 - Listening to Nature");
    sceneTitle.textContent = "The World Is Speaking";

    storyText.textContent =
        "Pause and listen carefully.\n\n" +
        "Every place has a special soundscape.";

    showChoices(
        "What do you hear right now?",
        withFallbacks(soundChoices),
        handleSoundAnswer
    );
}

function handleSoundAnswer(choice) {
    discoveries.sound = choice;

    if (choice.value === "thunder") {
        showStormEnding();
        return;
    }
    showSoundDiscovery();
}

function showSoundDiscovery() {
    showDiscovery(
        "soundDiscovery", "Chapter 2 - Listening to Nature",
        discoveries.sound, showObservationQuestion
    );
}

// ============================================
// SCENE 4 - EXPLORE SURROUNDINGS
// ============================================

function showObservationQuestion() {
    const environment = environments[discoveries.environment];

    enterScene("observationQuestion", "Chapter 3 - The Nature Detective");
    sceneTitle.textContent = "Look Around, Explorer!";

    storyText.textContent =
        "Your next clue is hiding in plain sight.\n\n" +
        "Look around without leaving your safe area. " +
        "You do not need to touch or collect anything.";

    showChoices(
        "What can you see?",
        withFallbacks(environment.observations),
        handleObservation
    );
}

function handleObservation(choice) {
    discoveries.observation = choice;
    showObservationDiscovery();
}

function showObservationDiscovery() {
    showDiscovery(
        "observationDiscovery", "Chapter 3 - The Nature Detective",
        discoveries.observation,
        discoveries.observation.question
            ? showDetailQuestion
            : showEnding
    );
}

// ============================================
// SCENE 5 - INVESTIGATE THE DISCOVERY
// ============================================

function showDetailQuestion() {
    const observation = discoveries.observation;

    enterScene("detailQuestion", "Chapter 4 - Look More Closely");
    sceneTitle.textContent = "A Closer Look";

    storyText.textContent =
        "The Guardian whispers: " +
        "'Every little detail can reveal a secret.'";

    showChoices(
        observation.question,
        withFallbacks(observation.details),
        handleDetail
    );
}

function handleDetail(choice) {
    discoveries.detail = choice;
    showDetailDiscovery();
}

function showDetailDiscovery() {
    showDiscovery(
        "detailDiscovery", "Chapter 4 - Look More Closely",
        discoveries.detail, showEnding
    );
}

// ============================================
// SCENE 6 - PERSONALIZED ENDING
// ============================================

function showEnding() {
    const environment = environments[discoveries.environment];

    enterScene("ending", "Quest Complete!");
    sceneTitle.textContent = "🌟 The Guardian Returns!";

    let ending =
        "A brilliant light fills the world around you!\n\n" +
        "You've restored the magic of " +
        environment.title + "! Your observations helped restore a page of the Atlas of Wonders.\n\n";

    if (discoveries.sound) {
        ending +=
            "Your listening skills revealed: " +
            discoveries.sound.label + ".\n\n";
    }

    if (discoveries.observation) {
        ending +=
            "You discovered: " +
            discoveries.observation.label + ".\n\n";
    }

    if (discoveries.detail) {
        ending +=
            "Your careful observation revealed: " +
            discoveries.detail.label + ".\n\n";
    }

    ending +=
        "The Guardian whispers:\n" +
        "'The greatest magic is learning to notice " +
        "the world around you.'\n\n" +
        "🏆 NATURE EXPLORER BADGE EARNED!";

    storyText.textContent = ending;

    showContinue("🔄 Play Another Adventure", startQuest);
}

// ============================================
// WEATHER SAFETY
// ============================================

function showStormEnding(checkpoint = "stormEnding") {
    enterScene(checkpoint, "Safety Discovery");
    sceneTitle.textContent = "⛈️ The Storm's Warning";

    storyText.textContent =
        "If you're outdoors, tell a grown-up and get inside a sturdy building now. " +
        "If there's no building nearby, get inside a hard-topped car with the windows closed.\n\n" +
        "The Storm Guardian thanks you for noticing the thunder. " +
        "Wait with your grown-up for at least 30 minutes after the last thunder.\n\n" +
        "🏆 STORM SAFETY BADGE EARNED!";

    showContinue("Return to Adventure Selection", startQuest);
}

// ============================================
// START THE GAME
// ============================================

// ==========================================
// TRAILTALES - DISCOVERY LIBRARY
// ==========================================

const library = {
    "leaf symmetry": {
        title: "Leaf Symmetry",
        simple: "A leaf has approximate mirror symmetry when its two sides have nearly the same outline on either side of a middle line.",
        deeper: "Imagine folding the leaf along its middle line. Similar sides would nearly overlap. A tear, a curled edge, or the way the leaf grew can make its sides look different.",
        challenge: "From your safe spot, pick a leaf you can see. Imagine a line from base to tip. How closely do the two outlines match?",
        related: { "What do the leaf’s lines do?": "leaf veins" }
    },
    "leaf veins": {
        title: "Leaf Veins",
        simple: "Veins are the lines you can sometimes see in a leaf. They carry water and sugars through the plant.",
        deeper: "Each vein contains tiny tubes. Some bring water and dissolved minerals to the leaf. Others carry sugars made by photosynthesis to other parts of the plant.",
        challenge: "Look at a leaf from where you are. Can you see veins branching or running side by side? Use indirect light and leave the leaf in place.",
        related: { "How do leaves make sugars?": "photosynthesis", "Do the two sides match?": "leaf symmetry" }
    },
    soundscape: {
        title: "Soundscapes",
        simple: "A soundscape is all the sounds you can hear in a place.",
        deeper: "Wind, water, animals, and people can all contribute to a soundscape. Nearby sounds can mask quieter ones, and the sounds in a place can change over time.",
        challenge: "From one safe spot, see if the sounds you notice change between two quiet pauses."
    },
    "food web": {
        title: "Food Webs",
        simple: "A food web shows how living things get energy and nutrients from one another.",
        deeper: "Plants use light to make sugars. Some animals eat plants, and others eat those animals. Many organisms have more than one food source, so their feeding connections form a web.",
        challenge: "Look for a plant and imagine one animal that could eat part of it. What else might that animal eat?",
        related: { "Where does a plant get its energy?": "photosynthesis", "How does a place support life?": "habitat" }
    },
    bark: {
        title: "Tree Bark",
        simple: "Bark covers a tree’s trunk and branches. Its outer layers help protect the living tissues underneath.",
        deeper: "A tree’s outer bark can stretch, crack, or peel as the trunk widens. The inner bark includes tissue that carries sugars from leaves to other parts of the tree.",
        challenge: "Compare the bark of two trees you can see. Look for ridges, plates, or smooth patches. Leave bark attached to the trees."
    },

    erosion: {
        title: "Erosion",
        simple: "Erosion happens when water, wind, ice, or gravity moves pieces of rock or soil.",
        deeper: "Weathering breaks material down or changes it in place. Erosion moves material, and deposition happens when it settles somewhere else.",
        challenge: "From a safe spot, look for a place where rain might carry grains away and a place where those grains might settle."
    },

    habitat: {
        title: "Habitat",
        simple: "A habitat is the place where a living thing finds what it needs to live.",
        deeper: "The same place can offer different things to different animals. A fallen branch can be shelter for a small insect and a place for a bird to look for food.",
        challenge: "Pick a small patch you can see from where you are. What could give a tiny animal shelter or food there?"
    },

    shadow: {
        title: "Shadows",
        simple: "A shadow forms on a surface when an object blocks some of the light reaching it.",
        deeper: "Shadow size and direction depend on where the light, object, and surface are. A wide or diffuse light source can make a softer edge.",
        challenge: "Find two shadow edges on nearby surfaces and compare how sharp they look. Keep your eyes on the surfaces."
    },

    photosynthesis: {
        title: "Photosynthesis",
        related: {
            "Why are many leaves green?": "chlorophyll",
            "How does water reach a leaf?": "leaf veins",
            "How does plant food support animals?": "food web"
        },
        simple:
            "Plants use sunlight, water, and carbon dioxide " +
            "to make sugars that help them grow. " +
            "They also release oxygen.",

        deeper:
            "Inside many plant cells are chloroplasts. " +
            "They contain chlorophyll, which absorbs light. " +
            "Photosynthesis uses light energy to make " +
            "energy-rich sugars from water and carbon dioxide.",

        challenge:
            "Look for two plants growing in different " +
            "amounts of sunlight. Compare their leaves. " +
            "What differences do you notice?"
    },

    chlorophyll: {
        title: "Chlorophyll",
        simple:
            "Chlorophyll is a green pigment that helps " +
            "plants absorb light for photosynthesis.",

        deeper:
            "Chlorophyll absorbs some colors of light " +
            "better than others. It reflects more green " +
            "light, which is one reason many leaves look green.",

        challenge:
            "Find two different shades of green in plants. " +
            "Do their leaves have different shapes too?"
    },

    ecosystem: {
        title: "Ecosystem",
        simple:
            "An ecosystem includes living things, " +
            "their surroundings, and how they interact.",

        deeper:
            "Plants, animals, fungi, microorganisms, " +
            "water, air, and soil are connected. " +
            "Energy flows through food webs while " +
            "nutrients move through the environment.",

        challenge:
            "Find one living thing and one nonliving " +
            "thing nearby. How might they be connected?"
    },

    pollination: {
        title: "Pollination",
        simple:
            "Pollination happens when pollen moves " +
            "from an anther to a flower's stigma, " +
            "or another suitable reproductive structure.",

        deeper:
            "Pollination is an important step in " +
            "reproduction for many flowering plants. " +
            "Insects, birds, wind, and other agents " +
            "can transfer pollen.",

        challenge:
            "Watch a flower from a safe distance. " +
            "Do any insects or birds visit it? " +
            "Remember not to touch the visitors!"
    }
};

// HTML elements
const learningDialog =
    document.getElementById("learning-dialog");

const learningTitle =
    document.getElementById("learning-title");

const learningContent =
    document.getElementById("learning-content");

const learningVisual =
    document.getElementById("learning-visual");

const learnMoreButton =
    document.getElementById("learn-more");

const challengeButton =
    document.getElementById("learning-challenge");

const closeLessonButton =
    document.getElementById("close-lesson");

let activeLesson = null;
const lessonHistory = [];
const previousLesson = document.getElementById("previous-lesson");
const curiosityTrail = document.getElementById("curiosity-trail");
const relatedLessons = document.getElementById("related-lessons");

function openLesson(topic) {
    lessonHistory.length = 0;
    renderLesson(topic);
    learningDialog.showModal();
}

function renderLesson(topic) {
    const lesson = library[topic];
    activeLesson = topic;
    learningTitle.textContent = lesson.title;
    learningContent.textContent = lesson.simple;
    learningVisual.replaceChildren();
    relatedLessons.replaceChildren();
    previousLesson.hidden = lessonHistory.length === 0;
    curiosityTrail.hidden = !lesson.related;

    if (topic === "photosynthesis") showPhotosynthesis();
    if (topic === "leaf symmetry") {
        learningVisual.innerHTML = `
            <figure class="lesson-diagram">
                <div class="leaf-example" aria-hidden="true"><span></span><span></span></div>
                <figcaption>Cartoon leaf example. The two green halves mirror each other across the dashed middle line.</figcaption>
            </figure>`;
    }
    for (const [question, relatedTopic] of Object.entries(lesson.related ?? {})) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = question;
        button.addEventListener("click", () => {
            lessonHistory.push(activeLesson);
            renderLesson(relatedTopic);
            learningTitle.focus();
        });
        relatedLessons.appendChild(button);
    }
}

previousLesson.addEventListener("click", () => {
    if (lessonHistory.length === 0) return;
    renderLesson(lessonHistory.pop());
    learningTitle.focus();
});

function showPhotosynthesis() {
    const diagram = document.createElement("div");
    diagram.className = "lesson-diagram";
    diagram.innerHTML = `
        <p><strong>What arrives</strong><br>Water from the roots · Carbon dioxide from the air · Light energy</p>
        <p><strong>What the leaf makes</strong><br>Sugars for the plant · Oxygen released into the air</p>`;

    const controls = document.createElement("div");
    controls.className = "light-controls";
    const result = document.createElement("p");
    result.setAttribute("aria-live", "polite");
    const levels = {
        "No light": "Without light energy, the leaf cannot keep making sugars through photosynthesis.",
        "Dim light": "Photosynthesis can happen in dim light, but limited light can slow it down.",
        "Bright light": "More light can help up to a point. The leaf still needs water and carbon dioxide."
    };
    for (const [label, explanation] of Object.entries(levels)) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = label;
        button.setAttribute("aria-pressed", "false");
        button.addEventListener("click", () => {
            for (const control of controls.children) {
                control.setAttribute("aria-pressed", String(control === button));
            }
            result.textContent = explanation;
        });
        controls.appendChild(button);
    }
    result.textContent = "Choose a light level to see what can happen.";
    diagram.append(controls, result);
    learningVisual.appendChild(diagram);
}

// Additional explanation
learnMoreButton.addEventListener("click", () => {
    if (!activeLesson) return;

    learningContent.textContent =
        library[activeLesson].deeper;
});

// Outdoor learning challenge
challengeButton.addEventListener("click", () => {
    if (!activeLesson) return;

    learningContent.textContent =
        library[activeLesson].challenge;
});

// Close and return to the adventure
closeLessonButton.addEventListener("click", () => {
    learningDialog.close();
});

// Create interactive educational text
function showEducationalFact(text, container = factText) {
    container.replaceChildren();

    const terms = Object.keys(library);

    const pattern = new RegExp(
        "\\b(" + terms.join("|") + ")\\b",
        "gi"
    );

    let lastIndex = 0;

    for (const match of text.matchAll(pattern)) {
        // Regular text before the science word
        container.append(
            document.createTextNode(
                text.slice(lastIndex, match.index)
            )
        );

        // Clickable vocabulary word
        const button = document.createElement("button");
        button.type = "button";
        button.className = "learning-term";
        button.textContent = match[0];
        button.setAttribute(
            "aria-label",
            "Learn about " + match[0]
        );

        button.addEventListener("click", () => {
            openLesson(match[0].toLowerCase());
        });

        container.appendChild(button);

        lastIndex = match.index + match[0].length;
    }

    // Any remaining text
    container.append(
        document.createTextNode(
            text.slice(lastIndex)
        )
    );
}

function restoreQuest() {
    let saved;
    try {
        saved = JSON.parse(localStorage.getItem(saveKey));
    } catch {
        return false;
    }

    if (!saved || !Object.hasOwn(environments, saved.environment)) return false;

    if (saved.scene === "forest") {
        if (saved.environment !== "forest" || !Array.isArray(saved.forestActions)) return false;

        const run = createForestRun();
        for (const action of saved.forestActions) {
            const scenes = forestScenes(run.pathId, run.soundId);
            if (!advanceForestRun(run, scenes, action)) return false;
        }
        discoveries.environment = "forest";
        forestRun = run;
        showForestScene();
        return true;
    }

    const environment = environments[saved.environment];
    const findChoice = (options, id) =>
        id === undefined ? undefined : withFallbacks(options).find(choice => choiceId(choice) === id);
    const sound = findChoice(soundChoices, saved.sound);
    const observation = findChoice(environment.observations, saved.observation);
    const detail = observation?.details && findChoice(observation.details, saved.detail);

    if ((saved.sound !== undefined && !sound) ||
        (saved.observation !== undefined && !observation) ||
        (saved.detail !== undefined && !detail)) return false;

    let scenes;
    if (detail && sound && sound.value !== "thunder") {
        scenes = { detailDiscovery: showDetailDiscovery, ending: showEnding };
    } else if (observation && sound && sound.value !== "thunder") {
        scenes = {
            observationDiscovery: showObservationDiscovery,
            ...(observation.details ? { detailQuestion: showDetailQuestion } : { ending: showEnding })
        };
    } else if (!observation && sound?.value === "thunder") {
        scenes = { stormEnding: showStormEnding };
    } else if (!observation && sound) {
        scenes = { soundDiscovery: showSoundDiscovery, observationQuestion: showObservationQuestion };
    } else if (!observation) {
        scenes = { introduction: showIntroduction, soundQuestion: showSoundQuestion };
    }

    if (!scenes || !Object.hasOwn(scenes, saved.scene)) return false;

    Object.assign(discoveries, {
        environment: saved.environment,
        sound: sound ?? null,
        observation: observation ?? null,
        detail: detail ?? null
    });
    scenes[saved.scene]();
    return true;
}

if (!restoreQuest()) startQuest();
