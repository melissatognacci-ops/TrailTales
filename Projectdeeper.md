# TrailTales — Project Vision & Development Guide

> **Where nature becomes your story.**
>
> **Status:** Early playable prototype. This file is the source of truth for product goals, story design, educational principles, and implementation decisions. Update it as the project evolves.

## 1. Mission

TrailTales is a **curiosity-first, interactive outdoor learning adventure** for children and families. It uses imaginative storytelling to encourage children to get outside, pay attention to the natural world, ask questions, and learn about what they actually encounter.

**Our guiding promise:** *The world around the player shapes the story, and every discovery can open another question.*

TrailTales is **not** a conventional choose-your-own-adventure game, an outdoor worksheet, or a trivia quiz. There are no punishments for uncertainty or for not finding a particular object. Curiosity, exploration, observation, and thoughtful questions are the rewards.

## 2. Audience and experience

- **Initial audience:** Approximately ages 6–10, with a parent or trusted adult accompanying outdoor play. Content should be understandable to younger children yet support deeper exploration for older or curious children.
- **Target duration:** An approximately **60-minute** outdoor adventure, **not** 60 minutes of screen reading. Play can be shorter or longer depending on the family's interests and circumstances.
- **Pacing:** Flexible; no required timers. Favor brief screen interactions followed by real-world observation, movement, and reflection.
- **Locations:** Forest/trail, beach/coast, desert, backyard/park, and **Somewhere Else** initially; other ecosystems can be added later.
- **Format:** Mobile-friendly web experience first. No installation, account, GPS, camera, or database required for the initial prototype.

## 3. Non-negotiable design principles

1. **Nature drives the narrative.** Ask about the player's real surroundings (what they hear, see, feel, or notice), then use those observations to select scenes, clues, and learning opportunities.
2. **Never force a specific discovery.** A beach or desert player should not be instructed to find a leaf to continue. Offer relevant options and alternative routes.
3. **Always include “Something else” and “I'm not sure”** on sensory/observation questions. Offer “I can't find one” / “I don't want to touch it” when appropriate.
4. **No wrong observations.** Distinguish factual knowledge from personal observation. The game can gently correct scientific misconceptions without implying the player's observations are wrong.
5. **Learning is optional and layered.** Scientific terms should open an Explorer's Library with a quick definition, deeper explanation, optional visual/animation, and an outdoor exploration prompt. Closing the lesson returns to the same story point.
6. **Learning takes priority over gamification.** Stories, characters, and puzzles spark curiosity; scores, badges, and collectibles must never substitute for real learning.
7. **Meaningful branches, manageable scope.** Observations should change the story's dialogue, challenges, clues, and sometimes events; branches may reconnect at major chapter milestones.
8. **Keep the outdoors primary.** Minimize sustained screen time. Encourage looking up, listening, comparing, predicting, and describing.
9. **Safety and accessibility first.** Observe rather than capture wildlife; don't require touching unidentified plants, insects, hot surfaces, or sharp objects; don't remove living plants. Thunder should redirect to shelter and end or pause outdoor tasks. Activities need reasonable alternatives when objects or conditions aren't available.
10. **Privacy by design.** Do not request precise location, identifying child information, or uploaded photos for the MVP. If such features are ever considered, reassess privacy and legal obligations first.
11. **Original intellectual property.** Create original art, writing, characters, and assets or use properly licensed material. Search-result imagery is inspiration, not production art.
12. **Low-risk experimentation.** Build and playtest before taking on significant expenses, infrastructure, or business obligations.

## 4. Fictional world and narrative direction

### Working universe: *The Awakening of the Guardians*

The Guardians help maintain the balance of different natural environments. Their book, **The Atlas of Wonders**, is losing its pages. The child becomes a **Wonderkeeper**, helping recover them through real observations and discoveries. Each restored page reflects **what that individual explorer noticed**, rather than a preset answer key.

### Recurring guide: Luma

**Luma** is a small, glowing Keeper of Wonders who guides the explorer with warmth, curiosity, wonder, and occasional humor. She is **not** an all-knowing lecturer. She frequently asks questions, admits uncertainty, and celebrates careful observation.

Example voice: *“We don't need someone who knows every answer. We need someone who's willing to ask questions.”*

### Environment-based Guardians / story leads

| Environment | Working adventure / Guardian | Nature themes |
| --- | --- | --- |
| Forest / Trail | **The Lost Forest Guardian** / **The Tree That Forgot Its Name** | Leaves, trees, photosynthesis, bird calls, habitats, decomposition |
| Beach / Coast | **The Secret of the Tides** / Tide Guardian | Waves, sand, shells, coastal habitats, erosion, tides |
| Desert | **The Desert's Hidden Secret** / Sun Guardian | Water conservation, desert plant adaptations, rocks, heat, animal tracks |
| Backyard / Park | **The Secret Garden** / Garden or Flower Guardian | Pollination, insects, flowering plants, soil, birds |
| Somewhere Else | **The Anywhere Adventure** | Light, soundscapes, patterns, living/nonliving things; flexible observation path |

**Narrative design:** A shared world and engine, with distinct environment-appropriate adventures and interchangeable educational modules. An unexpected observation may unlock a cross-environment topic rather than being rejected.

## 5. Planned ~60-minute adventure structure

*Timing is a guide only; do not force a player to wait or rush.*

| Chapter | Approx. time | Activity and narrative purpose |
| --- | ---: | --- |
| 1. The Guardian's Call | 10 min | Meet Luma, enter the mystery, choose environment, listen to the real soundscape |
| 2. The First Discovery | 12 min | Examine something actually present; observe features and identify a clue |
| 3. The Invisible Threads | 12 min | Investigate how living and nonliving parts of nature connect |
| 4. The Experiment of Wonders | 12 min | Make a prediction, observe a safe real-world pattern, reflect on results |
| 5. The Atlas Awakens | 10 min | Use actual clues to resolve a mystery and personalize a story ending |
| Explorer's Journal | 4 min | Review discoveries, questions, and next things to explore |

The approximate hour should mostly be **outdoor exploration**, not reading or tapping on a phone. Offer optional detours into deeper learning without requiring them for progression.

## 6. Core interaction pattern

1. **Story beat:** Luma introduces a mystery or question.
2. **Real-world prompt:** Ask the explorer to listen, look, observe, compare, or predict.
3. **Observation choices:** Provide environment-relevant options plus **Something else** and **I'm not sure**.
4. **Branch:** Respond in a way that acknowledges what the explorer actually found; choose a relevant follow-up or clue.
5. **Science connection:** Offer accurate, age-appropriate information woven into the story.
6. **Optional Curiosity Trail:** Tap a scientific term to learn more; return to the same scene afterwards.
7. **Journal entry:** Record what the player noticed or wondered about.
8. **Story payoff:** Their discoveries matter in later scenes and the ending.

### Example: listening to nature

**Question:** “What do you hear right now?”

Possible answers: Ocean/water, rustling leaves, birds, buzzing insects, people/traffic, thunder, **Something else**, **I'm not sure / It's quiet**.

Each response should lead to a genuinely relevant next observation. A thunder response triggers a safety-first shelter message, **not** an outdoor challenge.

### Example: investigating a leaf (only if available)

Possible questions include:
- Is it approximately symmetrical? Show a **clearly labeled, original cartoon example** of symmetry.
- Are there holes or marks?
- What color is it?
- Is it crunchy, flexible, fuzzy, or something else? Touch is optional.
- Can you see veins if you view it toward safe ambient light?

Always permit uncertainty and observing without picking up an object. These findings can branch into insects, leaf structure, chlorophyll, photosynthesis, and ecosystems.

### Other discovery routes

- **Beach:** Shell ridges, smooth shells, sand color and texture, wave patterns, wind.
- **Desert:** Desert plant adaptations observed from a safe distance, rock texture/layers/colors, shadows, evidence of animals.
- **Backyard/Park:** Flowers, insect visitors, birdsong, soil, light and shade.
- **Anywhere:** Patterns, sound, shadow, wind, living/nonliving features.

Do **not** claim that a single observation proves a cause. Use phrasing such as “may,” “sometimes,” “one possibility,” and “how could we investigate further?” where appropriate.

## 7. Explorer's Library and Curiosity Trails

Every important scientific term or concept can open a small optional lesson without losing the player's place in the adventure.

Each lesson should include:

- **Quick answer:** One or two child-friendly sentences.
- **Learn more:** A richer, scientifically accurate explanation.
- **See it:** An original diagram or meaningful animation, not decorative motion.
- **Try it outdoors:** An optional, safe, location-appropriate investigation.
- **Keep wondering:** Related topics and questions that may open deeper Curiosity Trails.
- **Back to story:** Return precisely to the paused story scene.

### Starter learning topics

Photosynthesis, chlorophyll, ecosystems, pollination, leaf symmetry, leaf veins, plant adaptations, soundscapes, bird calls, habitats, food webs, decomposition, soil, weathering, erosion, waves, tides, camouflage, and the scientific method.

**Photosynthesis visual concept:** Show light, water, and carbon dioxide as inputs, sugars as a product, and oxygen released. A later interactive simulation may let players explore how changing conditions affect photosynthesis. Educational visuals must be scientifically faithful.

### Curiosity Trail example

**Question:** “How do plants make food?”

1. What is photosynthesis?
2. Why are so many leaves green?
3. What happens with less sunlight?
4. Do all plants photosynthesize?
5. How do plants connect to animals through food webs?

Each step is **optional**. No mandatory quiz or penalty for returning to the main adventure.

## 8. Current working prototype (as of November 2026)

**Existing local files:**

```text
TrailTales/
├── index.html
├── style.css
└── script.js
```

**Implemented in current prototype (based on the working code shared):**

- Mobile-friendly HTML/CSS storybook styling, with forest, parchment, and gold palette.
- Environment selector: forest/trail, beach/coast, desert, backyard/park, somewhere else.
- Environment-specific opening story and observation topics.
- Sound prompt with fallback choices and a thunder safety ending.
- One environment observation and one detail prompt, each with educational feedback.
- Dynamic button creation and in-memory discovery tracking.
- Simple personalized quest ending and restart.
- Explorer's Library dialog with starter topics: photosynthesis, chlorophyll, ecosystem, pollination.
- Clickable scientific words when they appear in the fact text, plus quick/deeper/outdoor-challenge views.
- A simple animated visual placeholder for photosynthesis.

**Known limitations (not yet built):**

- Current quests are short and mostly linear; they are **not** yet hour-long or deeply branching.
- Existing lessons are limited; not every science concept has a detailed lesson or animation.
- Progress is not saved across reloads; there is no persistent Explorer's Journal.
- The current story engine still uses one sound, one object, and one detail before the ending.
- No finished original visual asset library or chapter illustrations have been integrated.
- No accessibility audit, comprehensive cross-device testing, or family playtest program has been completed.

**Recent debugging note:** A `SyntaxError: Unexpected identifier 'question'` was caused by three `fact:` and `question:` properties accidentally running together without a comma (forest leaf, forest tree, garden flower). Those lines were corrected and the prototype was reported working again.

## 9. Technical direction

**MVP technology:** Plain HTML, CSS, and vanilla JavaScript. Keep the app dependency-light and mobile friendly. The original game content should live in data objects rather than being embedded in page event handlers.

**Desired architecture (future refactor, not current file layout):**

```text
TrailTales/
├── index.html
├── style.css
├── script.js              # Bootstrap, temporarily
├── PROJECT.md              # Vision and design decisions
├── assets/
│   ├── images/             # Original or licensed visual assets
│   └── animations/         # Educational animations
├── engine/
│   ├── story-engine.js     # Scene rendering, navigation, branching
│   ├── state.js            # Discoveries, current scene, progress
│   └── journal.js          # Explorer's Journal and save/resume
├── quests/
│   ├── forest.js
│   ├── beach.js
│   ├── desert.js
│   └── garden.js
└── learning/
    └── library.js         # Concepts, explanatory text, links to visuals
```

**Important:** This is a proposed structure. **Do not split the existing working files solely because this diagram exists.** Refactor in small, testable steps and update HTML script imports appropriately. Preserve a known-good version first.

### Content model (proposed)

- `environment`: where the player is exploring.
- `quest`: overall story arc and chapter milestones.
- `scene`: narration plus available interactions.
- `observationQuestion`: sensory or investigative prompt with meaningful fallback choices.
- `choice`: an observation or decision, with an ID, story response, and possible next scene.
- `discovery`: structured state of what the player noticed (without collecting personal information).
- `learningTopic`: short explanation, deeper explanation, visual, outdoor challenge, related topics.
- `journalEntry`: discovery, question, and what the player learned.

Prefer **data-driven scenes and reusable modules** over large, nested chains of event listeners. Do not use generated text that claims to identify a species or diagnose a hazard from an unverified response.

### Engineering practices

- Make a Git commit before adding major features.
- Prefer small vertical slices that are immediately playable.
- Test all branches, including “Something else,” “I'm not sure,” no object found, and thunder.
- Keep story and learning content separate from UI logic.
- Use accessible buttons, keyboard focus, readable text, responsive design, and reduced-motion support.
- Preserve story progress when an educational dialog opens and closes.
- Plan to use browser-local storage for Save & Resume before building accounts or backend services.

## 10. Safety and educational accuracy

- Outdoor play should be adult-accompanied and **never require entering water, leaving safe paths, approaching wildlife, touching unknown plants, climbing, or traveling to a particular site**.
- When thunder is heard, stop the outdoor quest and advise moving to a substantial building or a hard-topped vehicle with an adult.
- Avoid instructing players to look at the sun; “hold leaf toward light” means safe ambient or indirect light, never directly at the sun.
- Offer non-touch alternatives for hot, sharp, venomous, irritating, or otherwise uncertain materials.
- Provide alternative options for different habitats, seasons, accessibility needs, and weather conditions.
- Treat observation and scientific inference as distinct. An insect *may* have caused holes in a leaf; the game should not state this as certain.
- Fact-check science content before public release. Avoid turning imaginative magical explanations into claims about nature.

## 11. Original visual identity

**Working aesthetic:** Whimsical illustrated storybook world with deep forest green, moss, warm parchment, gold, and touches of magical lavender. A cohesive visual language across scenes, characters, badges, and educational diagrams.

Original illustrations should help children **understand** nature, not only decorate the page. Potential assets include:

- Luma, Atlas, Guardians, and environment-specific background scenes.
- Symmetry comparisons, leaf vein diagrams, shell structures, rock layers, pollination diagrams.
- Photosynthesis and ecosystem animations that show meaningful processes.

Do not copy artwork from Story.com or search result previews. Check applicable licenses, terms, and brand/trademark rights before commercial publication. **TrailTales** is a working name and has not been cleared as a trademark.

## 12. Next development milestones

### Immediate: Turn the short prototype into one deep chapter

**Focus:** *Forest Chapter 1 — The Tree That Forgot Its Name.*

- Introduce Luma and the missing Atlas page.
- Expand the listening activity with several meaningful branches, including traffic, insects, and silence.
- Add multiple real-world investigation paths (plant, bark, rock/soil, animal/insect, light/shadow).
- Make observations drive follow-up questions and relevant science, with safe alternatives.
- Incorporate Explorer's Library links during scenes, not just in final facts.
- Add a mystery clue that matters in Chapter 2.

### Next: Build the learning experience

- Expand the learning library across relevant terms.
- Add original educational diagrams and one accurate interactive photosynthesis demonstration.
- Add concept-to-concept Curiosity Trails, with easy return to the paused scene.

### Then: Complete a full adventure

- Chapter 2: First Discovery / observation-specific investigation.
- Chapter 3: Invisible Threads / ecosystem connections.
- Chapter 4: Experiment of Wonders / prediction and safe observation.
- Chapter 5: Atlas Awakens / personalized resolution.
- Explorer's Journal and local Save & Resume.

### After: Scale thoughtfully

- Adapt the same deep-chapter pattern to Beach, Desert, Garden, and Anywhere quests.
- Conduct supervised family playtests and refine pacing, comprehension, engagement, and accessibility.
- Explore monetization only after users genuinely enjoy and benefit from the learning experience.

## 13. How to collaborate with a coding assistant

When continuing in VS Code or a new chat, share this `PROJECT.md` and the relevant current files. Ask the assistant to:

1. Read `PROJECT.md` first.
2. Inspect the **actual working code**, not assume the future architecture is already implemented.
3. Preserve the curiosity-first vision, meaningful environmental branching, learning depth, safety, and fallback choices.
4. Propose changes in small, testable steps; explain which files change.
5. Avoid rewriting functional code unnecessarily.
6. Flag scientific claims that need checking.
7. Keep the user's observations central, with stories adapting to them.

**Product north star:** *Children put down their phones, look around, and become more curious about the world than when they started.*

## V2 implementation update

The v2 folder contains a standalone playable copy and uses its own browser save key. The forest already has five chapters, branching routes, a journal, and Save & Resume. This iteration deepens the forest investigation, carries the listening clue into Chapter 2, and adds inline science links, a leaf symmetry diagram, related lessons, and a qualitative photosynthesis light demo. The other four adventures retain their shorter quest structure.

The light demo uses the photosynthesis overview in [OpenStax Biology 2e](https://openstax.org/books/biology-2e/pages/8-1-overview-of-photosynthesis). Its conditions are illustrative, without numerical rates or predictions for a particular plant.
