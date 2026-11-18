TrailTales — Project Guide for Codex
Updated: November 17, 2026
Current initiative: Deep Discovery Expansion (TrailTales 0.5)
Status: Working browser-based prototype; expand content without regressing existing behavior.
Start here, Codex: Read this file and inspect the actual repository before editing anything. The code in the repository is the source of truth for implementation details. This document defines creative direction, requirements, and desired behavior; do not assume all proposed features already exist. Preserve existing functionality and the user's especially well-developed leaf investigation. Implement in small, testable increments.

1. Mission
TrailTales is a mobile-friendly, outdoor educational adventure for children (roughly ages 6–10, with an accompanying adult). It should motivate families to go outside, notice real things, ask questions, investigate, and develop lasting curiosity about nature. It is not a quiz disguised as a game.

North star: The story provides the reason to explore. Nature provides the discoveries. Curiosity determines how far the child goes.
Non-negotiable experience principles
1. Real observations drive branching. The player describes what they genuinely hear or see; story and science respond to that observation.
2. Curiosity before correctness. Never penalize uncertain observations or require a single right answer. Avoid grades, timers, or compulsory knowledge checks.
3. Every prompt must allow Something else and I'm not sure. Use meaningful story/science responses, not dead ends.
4. Learning is layered and optional. Brief friendly science explanations link to deeper Discovery Library lessons, interactive diagrams/animations, and safe outdoor activities. Players can return to the same story position.
5. No environment assumptions. Children may be on a forest trail, coast, desert, backyard/park, or elsewhere. Do not require a leaf, shell, flower, wildlife sighting, etc.
6. Observation should be possible without handling anything. No approaching wildlife, touching unknown plants/insects, entering water, climbing, collecting living shells, or touching potentially hot rocks. Encourage adult supervision and local conditions awareness.
7. Accessible by design. Provide alternatives for limited mobility, quiet places, no visible wildlife, bad weather, and different ages/reading abilities.
8. Protect children's privacy. No GPS requirement, image upload, account creation, personal information, or location tracking for the MVP.
9. Be scientifically accurate, age-appropriate, and humble. Use conditional language where an observation cannot prove a cause or identify a species.
10. A delightful story, not a worksheet. Characters react to the child, mysteries progress, and discoveries matter later.
2. Product & Narrative Vision
Intended duration
A full adventure should offer approximately 60 minutes of flexible outdoor activity, not 60 minutes of staring at a screen. Chapters target ~10–15 minutes, but there is no countdown; families can pause, skip, leave early, or pursue extra learning.

Suggested adventure structure:
1. The Guardian's Call (~5–10 min): Pick an environment; meet the guide; notice a sound.
2. The First Discovery (~10–12 min): Investigate an observed object/feature using several tailored questions.
3. The Invisible Connections (~10–12 min): Learn how living/nonliving parts of nature interact.
4. The Experiment of Wonders (~10–15 min): Predict, observe, compare, and ask better questions safely; do not overstate conclusions.
5. The Atlas Awakens (~10 min): Use evidence from collected observations to resolve a meaningful mystery.
6. Explorer Journal (~3–5 min): Recap exactly what the player noticed and the questions they asked.
Story universe (planned direction)
- The Atlas of Wonders: A magical nature book whose pages are fading.
- Luma: Curious, friendly, sometimes funny, tiny glowing guide; models wondering, revising assumptions, and saying “I don't know yet.” She is NOT an all-knowing quizmaster.
- The Guardians: Forest Guardian, Tide Guardian, Sun/Desert Guardian, Garden Guardian, etc.
- Wonderkeeper: The player; their real observations restore pages in the Atlas.
- Underlying theme: The Atlas is not a book of all answers. It reflects how each explorer discovers the world; questions are valuable.
Important: These are the desired narrative direction, not a claim that current code implements them. Existing working stories should be enhanced incrementally.
3. Current Prototype — Verify in Repo
The project began with vanilla index.html, style.css, and script.js.

Features previously implemented or discussed as working:
- Environment picker: Forest / Trail, Beach / Coast, Desert, Backyard / Park, Somewhere Else.
- Introductory environment-specific story and a sound-based observation scene.
- Contextual object choices and follow-up details.
- Something else / I'm not sure fallbacks, plus thunder safety ending.
- Optional Discovery Library dialog: clickable terms such as photosynthesis, chlorophyll, ecosystem, pollination with short explanation, Learn More, and Try It Outdoors.
- A simple photosynthesis animation placeholder (not yet a scientific animated teaching sequence).
- Leaf path is notably developed and loved by the creator. Preserve its richness and functioning behavior.
The repo may have advanced since these notes. Inspect current files, paths, names, dependencies, and event handlers rather than replacing code blindly. Previous prototype encountered missing commas between fact and question object properties; avoid concatenation/syntax mistakes.
4. CURRENT PRIORITY: Deep Discovery Expansion (0.5)
The problem to solve
The leaf path contains an engaging multi-step observation journey, but other discovery options are much shorter and feel generic. The user wants parity of educational richness and story depth across discoveries.
Goal
Implement a reusable, data-driven discovery investigation engine (or adapt the existing implementation to that purpose) so each nature object has:
- A unique evocative mini-mystery title and opening narration in Luma's voice.
- At least 4–5 meaningful observational prompts (when feasible for the object), each with 3–5 specific answer choices plus mandatory Something else and I'm not sure.
- Choice-specific short narrative reaction AND accurate scientific insight.
- An optional follow-up observation or comparison that gets the child looking at the real world again.
- Relevant science vocabulary linked to the Discovery Library, with tiered learning.
- A personalized investigation conclusion that references answers and connects to a larger ecosystem or story clue.
- A natural option to investigate another discovery, rather than being forced to end immediately.
- Safe fallback if the target object or detail is unavailable.
Do not merely insert more generic question screens. Questions must respond to the specific natural feature and feed into the bigger mystery.
Recommended implementation order
1. Inspect existing leaf journey. Identify its data and UI patterns; do not disrupt its content or logic.
2. Build or extract reusable investigation runner so content is easy to extend without copy/pasting whole scene chains.
3. Add Shell and Desert Plant in full depth as reference implementations.
4. Extend to Tree, Rock, Sand, Flower, Insect to achieve parity.
5. Add cross-environment reusable discoveries, optional repeated investigations, and narrative clues.
6. Integrate extra Discovery Library entries for encountered scientific terms.
7. Test every environment, all fallback responses, and re-entry into the story after lessons.
If scope is too large for one safe code change, do steps 1–3 thoroughly and document the remaining work as explicit next tasks. Do not silently delete or downgrade functionality to fit the scope.
5. Investigation Content Specification
Use these as creative + science content requirements, not rigid taxonomic identifications. All claims should stay scientifically defensible and support uncertainty.
A. Leaf — The Leaf That Held the Sun (EXISTING; PRESERVE)
Potential dimensions already explored: color (green/yellow/brown/red/other), approximate symmetry, holes/veins/markings, texture, leaf condition, sunlight, growth. Related concepts: photosynthesis, chlorophyll, veins, pigments, decomposition, symmetry, adaptations. Do not overwrite the rich existing leaf flow with a simplified one.
B. Tree / Bark — The Tree's Secret Language
Investigate: bark texture/pattern, trunk shape/size, branching/canopy, leaves/needles or no visible leaves, evidence of other life (birds, moss, fungi, insects), shade and nearby conditions. Show how trees provide shelter and resources; discuss protective bark, growth, habitats, roots and ecosystem connections. Never imply that bark patterns alone definitively reveal tree age.
C. Shell — The Shell That Remembered the Sea
Investigate: shape (spiral/fan/long/other), surface (ridges/smooth/stripes), condition (whole/broken/worn), color/pattern, comparison to a second shell if available. Teach that many shells are produced by mollusks, that bivalves commonly have two hinged halves, that shell growth can create ridges, and that waves/sand can weather shells. A shell might be occupied: view only; don't remove living animals. Avoid assuming every observed shell came from a specific animal.

Sample Luma opening: “Some sea creatures can grow their own protective homes. But who might have made this one? Let's investigate the clues without disturbing anything living!”
D. Sand — A Million Tiny Stories
Investigate: apparent grain size, colors, patterns/ripples, dry vs damp appearance, nearby sources (rocks, shells, coastline). Teach sediment, rock and shell fragments, erosion/weathering, wind and water movement, differences in sand composition. Observations can be visual; don't require handling or shoreline access.
E. Desert Plant — The Plant That Outsmarted the Sun
Investigate: growth form (round/tall/low/branching), visible spines/hairs/waxy surfaces, leaf size/shape or lack of obvious leaves, shade or surroundings, signs of other life/flowers. Teach drought adaptations, water storage in some succulents, transpiration, plant diversity, microhabitats, pollination. Not all desert plants are cacti; don't imply all spines are cactus spines or all desert plants store water.

Sample Luma opening: “How does life manage when rain can be so scarce? The Sun Guardian says this plant may be hiding clues in its shape!”
F. Rock / Soil — The Rock That Traveled Through Time
Investigate: shape, coloration, apparent graininess, layers/stripes, rough/smooth appearance, surrounding habitat. Teach minerals, sedimentary layers when appropriate, weathering, erosion, rock cycle basics. Don't assert that a particular rock is sedimentary or ancient based solely on a color/stripe answer. Avoid touching hot rocks.
G. Flower — The Flower's Secret Invitation
Investigate: petal colors, broad shape, flower center, presence/absence of visitors, neighboring plants, petals/buds/seeds visible. Teach flower structure, pollen, pollination, plant reproduction, pollinators, wind pollination, biodiversity. Don't require handling blooms or approaching insects. A flower without an insect visitor is still informative.
H. Insect — The Tiny Creature's Big Mission
Investigate: broad body outline, observed wing/leg features, movement, behavior (flying/crawling/resting), surroundings, nearby plants/other animals. Teach basic insect anatomy (adults generally have six legs), adaptations, camouflage, pollination, decomposers, life cycles, food webs. If unsure whether it is an insect, celebrate uncertainty; avoid identification from weak clues. No touching, chasing, trapping, or approaching nests/hives.
I. Sound — The World's Hidden Orchestra (MORE DEPTH)
Expand beyond one sound click. Investigate: rhythm, pitch, repetition, apparent direction/distance, how sounds change over 20–30 seconds, and whether multiple sound sources overlap. Possible sounds: birds, wind/leaves, waves/water, insects, human-made sounds, silence/uncertain, something else, thunder. Connect to animal communication, sound waves, habitats and soundscapes. Thunder immediately routes to safety guidance; no further outdoor tasks.
J. Sky / Light / Shadows — The Dancing Light (FUTURE)
Clouds, shadows, sunlight differences, wind, gradual change over time; weather, solar energy, atmospheric patterns. Avoid encouraging staring directly at the sun or lingering outside in unsafe weather.
6. What a Deep Investigation Feels Like
Each investigation should be interactive and responsive, not a linear fact list. Example shell outline:
1. Luma introduces a playful mystery about the shell's origin.
2. Player chooses a shape; Luma gives tailored dialogue and one short scientific explanation.
3. Player observes ridges/smoothness/patterns; a new hypothesis emerges.
4. Player notes condition; Luma introduces the idea that objects change after their makers are gone.
5. Player looks for colors and optionally compares a second shell.
6. Luma summarizes the player's actual choices and poses a higher-level question: “What might the animal that made this shell have needed to survive?”
7. Player can explore optional lessons, save the discovery to the Atlas, investigate something else, or continue the main story.
Narrative writing guidelines:
- Luma is imaginative, observant, warm, gently funny, and occasionally surprised.
- Every observation is valid evidence to explore; no condescending “wrong answer” messages.
- Give the child room to look up from the screen for 20–60 seconds when appropriate.
- Use clear, inviting 6–10-year-old language with terms explained when first introduced.
- Avoid making magical elements seem like verified scientific phenomena: the fantasy frames the real explanations.
- Don't repeat the same “magical symbol glows!” sentence for every response.
7. Discovery Library & Curiosity Trails
The science system is a central product feature, not a side tooltip.
Learning layers per concept
1. Quick explanation: 1–3 friendly sentences answering “What is it?”
2. Learn More: A meaningful deeper explanation, with helpful terminology.
3. Show Me: A scientifically faithful image, diagram, or interactive/animated explanation when available.
4. Try It Outdoors: One safe observation or comparison relevant to the player's surroundings.
5. Keep Wondering: Related questions/linked concepts for self-directed curiosity.
Start/expand entries for: photosynthesis, chlorophyll, ecosystem, pollination, mollusk, bivalve, shell formation, abrasion, sediment, erosion, weathering, mineral, rock cycle, adaptation, succulent, transpiration, microhabitat, habitat, camouflage, food web, decomposition, insect anatomy, soundscape, and sound waves.

Implementation notes:
- Keep lessons in a reusable registry/data structure (learning/library.js or current equivalent).
- Scientific words should be accessible and clickable in educational facts (not inserted as unsafe HTML).
- Opening a lesson should never advance or reset the story.
- Support returning to the same scene and preserving observations.
- Use simple static diagrams initially, then accurate interactive/animated explainers. Do not treat floating emojis as a complete photosynthesis explanation.
- Do not auto-generate incorrect causal claims or fake experiments.
Luma's Wonder Questions (planned reusable module)
After a discovery, optionally ask: “Now that you know a little more, what are you wondering?”

Options: How does it work? / Why does it look like that? / How does it grow or change? / How does it affect other living things? / I have my own question! / Continue exploring.

Link to existing curated topics when possible. If free text isn't implemented, do not pretend it is answered automatically; record the child's own question locally in the future Explorer Journal (if explicitly entered), or provide a prompt to discuss with an adult.
8. Architecture Guidance for Codex
Use the existing tech stack unless repo inspection shows otherwise. Prefer vanilla HTML/CSS/JavaScript, small modules and clear data objects. Keep styling mobile-friendly and accessible. A suggested future structure (do NOT forcibly reorganize all files just to match this):
TrailTales/
├── index.html
├── style.css
├── script.js
├── PROJECT.md
├── assets/
│   ├── images/
│   └── animations/
├── quests/
│   ├── forest.js
│   ├── beach.js
│   ├── desert.js
│   └── discoveries.js
└── learning/
    └── library.js
Content schema idea (adapt to actual repo)
const investigations = {
  shell: {
    id: "shell",
    title: "The Shell That Remembered the Sea",
    intro: "...",
    tags: ["beach", "coast", "anywhere"],
    steps: [
      {
        id: "shape",
        prompt: "What shape is the shell?",
        answers: [
          {
            id: "spiral",
            label: "Spiral",
            story: "...",
            fact: "...",
            lessonIds: ["mollusk", "shell-formation"]
          }
          // include other and unsure, or inject once centrally
        ]
      }
    ],
    ending: (observations) => "..." // alternatively use safe templates, not eval
  }
};
- Unique stable IDs for investigation, steps, answers, and lessons.
- Branch on value/`id`, not visible labels or emoji.
- Provide default/fallback behavior when no detail is available.
- Keep display logic distinct from content for easier authoring and review.
- If splitting JS across files, ensure the actual loading method works in the browser (correct type="module" and imports, or a compatible classic script pattern); don't break file:// testing unnecessarily. A simple local server is acceptable if necessary, with clear instructions.
- Avoid external analytics, trackers, accounts, unsafe dynamic HTML, or dependencies without approval.
- Respect prefers-reduced-motion for animations; alt text for informative art, empty alt for decoration, keyboard-usable buttons/dialog.
- Keep original visuals/assets consistent; don't copy third-party copyrighted art into the game.
9. Acceptance Criteria — 0.5
A successful iteration should satisfy all applicable checks:
- [ ] Existing forest leaf investigation remains intact and functions.
- [ ] All five environment starts still work: forest, beach, desert, garden/backyard, other.
- [ ] Sound observation works, including other/unsure and safety exit for thunder.
- [ ] Shell and Desert Plant each provide at least four distinct observation steps, tailored reactions, science facts, and individualized conclusions.
- [ ] Tree, Rock, Sand, Flower, and Insect paths reach comparable depth as implemented over this milestone.
- [ ] Every observational question includes meaningful Something else and I'm not sure responses, with no crashes or forced object discovery.
- [ ] All scientific explanations are accurate, age-appropriate, and tied to observations without pretending certainty.
- [ ] Science vocabulary opens relevant optional Discovery Library content; closing returns to same story state.
- [ ] The player can investigate another object or return to the main mystery after completing a mini-investigation.
- [ ] Responsive layout works on narrow/mobile widths; all controls keyboard-operable; motion can be reduced.
- [ ] No JavaScript syntax/runtime errors during supported paths.
- [ ] Changes are documented, with clear manual test routes and any intentionally deferred items.
Suggested manual test routes
- Forest → leaf → complete current rich path → library → return → continue.
- Beach → shell → spiral → ridged → worn → finish → investigate sand.
- Beach → no shell available → sand or other option without dead end.
- Desert → plant → spines → thick stem (when observed) → science lesson → finish.
- Garden → flower → no visiting insect → alternate pollination explanation.
- Anywhere → rock → no obvious layers → meaningful explanation.
- Any environment → Something else and I'm not sure at every step.
- Sound → thunder → safe stopping point, no more outdoor prompts.
10. Future Roadmap (NOT all required now)
- 0.5: Deep Discovery parity (current priority).
- 0.6: Multi-discovery chapters and evidence-based Atlas clues; more substantive story arcs.
- 0.7: Curiosity Trails for every core scientific topic; polished diagrams and accurate animations.
- 0.8: Explorer Journal, local save/resume, progress and optional badges without grades.
- 0.9: High-quality original visual assets, illustrated characters, scene cards, accessible motion.
- 1.0: Complete playable ~60-minute adventure for at least one environment, then content expansion and testing with families.
11. Working Agreement with Codex
When asked to implement the next feature:
1. Inspect existing project files and summarize what is already working, especially the leaf path and Discovery Library.
2. Propose a small concrete implementation plan tied to the requested task.
3. Make actual changes directly in the repository rather than handing over entire replacement files unnecessarily.
4. Preserve user-written story content unless explicitly requested otherwise.
5. Use reusable content structures; write polished, observation-specific narrative and concise accurate science.
6. Run syntax checks/tests where possible, then report what changed, what was tested, and what remains.
7. Ask only if an essential technical or creative choice blocks safe progress; otherwise choose sensible defaults and proceed.
Immediate Codex task request
Read PROJECT.md and inspect the current TrailTales HTML, CSS, and JavaScript. The leaf investigation is the benchmark and must be preserved. Build a reusable deep-investigation pattern if needed, then implement full Shell and Desert Plant investigation paths first, with 4–5 observation stages, choice-specific Luma dialogue, accurate science, Something else and I'm not sure at every stage, optional Discovery Library links, and endings that reflect the player's actual discoveries. Ensure both integrate into their environment quests without breaking existing gameplay. Add or update relevant lesson entries. Test syntax and the major paths. Afterward summarize changes and propose the next paths (Tree, Rock, Sand, Flower, Insect).

Creative litmus test: After ten minutes playing TrailTales, a child should be looking at their surroundings more closely, asking better questions, and feeling excited to discover something new—not merely tapping through fact cards.
## v3 implementation notes

Open `v2/v3/index.html` to play. This version bundles the v2 artwork, forest quest, and library and uses a separate browser save key. Shell and Desert Plant are the first deep investigations. Their content and answer IDs live in `quests/discoveries.js`; the shared runner in `script.js` keeps their observations in the journal and restores them on reload.

### Manual checks

- Beach / Coast → A shell → spiral → ridges → worn edges → choose a color and comparison. Check that all five answers appear in the Atlas recap. Choose **Investigate another discovery** and try sand. Check the journal still includes the shell notes.
- Desert → A desert plant → upright → spines → thick stems or leaves. Open the succulent lesson, try Learn More and a related lesson, then close the library. Reload and check that the same question and earlier answers return. Finish and return to the main mystery.
- On either path, try **Something else**, **I’m not sure**, or **I can’t keep observing this**. The first two advance the investigation; the last returns to the discovery picker and keeps any recorded answers.
- Forest / Trail → leaf → open the symmetry and photosynthesis lessons and finish the existing route. On any environment’s listening screen, choosing thunder should stop the outdoor prompts.

Next paths are Tree/Bark, Rock/Soil, Sand, Flower, and Insect. The broader listening investigation is still planned. Mobile visual and supervised outdoor pacing checks are still pending.

Science references: [Smithsonian Ocean on shell growth](https://ocean.si.edu/ecosystems/shells-story), [Smithsonian Q?rius on bivalves](https://qrius.si.edu/browse/object/10011413), and [National Park Service on desert plant adaptations](https://www.nps.gov/teachers/classrooms/plant-adaptations.htm).
