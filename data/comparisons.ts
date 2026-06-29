export interface ComparisonData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  introduction: string;
  comparisonTable: {
    headers: string[];
    rows: string[][];
  };
  whoShouldChooseA: string;
  whoShouldChooseB: string;
  benefitsA: string[];
  benefitsB: string[];
  faqs: Array<{ q: string; a: string }>;
  courseALink: string;
  courseBLink: string;
}

export const comparisons: Record<string, ComparisonData> = {
  'abacus-vs-vedic-maths': {
    slug: 'abacus-vs-vedic-maths',
    title: 'Abacus vs Vedic Maths',
    metaTitle: 'Abacus vs Vedic Maths: Which is Better for Your Child? | Smart Brains India',
    metaDescription: 'Compare Abacus and Vedic Maths. Learn differences in age criteria, methods, calculation speed, and cognitive benefits to choose the right math program.',
    introduction: 'Both Abacus and Vedic Mathematics are highly regarded methodologies for enhancing mental arithmetic speed and overall brain development. However, they target different age groups, employ completely different cognitive mechanisms, and serve distinct academic goals.',
    comparisonTable: {
      headers: ['Feature', 'Abacus Math', 'Vedic Mathematics'],
      rows: [
        ['Method basis', 'Visualizing bead movements on a mental counting frame', 'Applying 16 mental Sutras (formulas) derived from ancient texts'],
        ['Best age range', '4 to 12 years old (optimal brain plasticity)', '9 years and above (requires understanding basic operations)'],
        ['Primary benefit', 'Lightning-fast basic arithmetic, focus, and working memory', 'Fast complex math (squares, roots, algebra, fractions)'],
        ['Hemispheric use', 'Stimulates right-brain visual imagery & left-brain logic', 'Highly logical left-brain analytical reasoning shortcuts'],
        ['School curriculum', 'Best for foundational primary school arithmetic', 'Directly aids middle/high school math and entrance exams']
      ]
    },
    whoShouldChooseA: 'Choose Abacus if your child is between 4-12 years old and needs to build foundational concentration, eliminate fear of numbers, and establish concrete mental calculations through visual bead representations.',
    whoShouldChooseB: 'Choose Vedic Maths if your child is 9+ years old, already knows basic multiplication tables, and wants to accelerate calculation speeds for algebraic equations, squares, square roots, and competitive entrance exams.',
    benefitsA: [
      'Builds concrete visualization and working memory capacity.',
      'Improves sustained focus and listening skills.',
      'Eliminates finger counting and general math anxiety early.'
    ],
    benefitsB: [
      'Accelerates calculations up to 10-15 times faster than normal.',
      'Provides simple check systems (like digit sums) to verify answers.',
      'Directly applicable to advanced high school arithmetic and algebra.'
    ],
    faqs: [
      {
        q: 'Can my child learn both Abacus and Vedic Maths together?',
        a: 'We do not recommend learning both simultaneously as the visual bead visualization of Abacus and the formula-based shortcuts of Vedic Math might confuse the child. It is best to complete Abacus training first (up to age 10-11) and then transition to Vedic Maths for advanced math skills.'
      },
      {
        q: 'Which program helps more in school board exams?',
        a: 'For primary classes (1-5), Abacus is highly beneficial as it builds number confidence and mental math. For middle and high school classes (6-10) and competitive tests, Vedic Maths is more helpful because it contains direct algebra, square root, and multiplication formulas.'
      }
    ],
    courseALink: '/programs/abacus-math',
    courseBLink: '/programs/vedic-math'
  },
  'dmit-vs-iq-test': {
    slug: 'dmit-vs-iq-test',
    title: 'DMIT Test vs IQ Test',
    metaTitle: 'DMIT vs IQ Test: Key Differences & Which is Better? | Smart Brains India',
    metaDescription: 'Compare DMIT fingerprint testing and standard IQ tests. Discover which assessment provides better insights into career pathing, learning styles, and potential.',
    introduction: 'Parents looking to understand their child\'s intelligence profile often look at standard IQ tests and DMIT (Dermatoglyphics Multiple Intelligence Test). While one measures present performance, the other maps inborn genetic potential.',
    comparisonTable: {
      headers: ['Parameter', 'Standard IQ Test', 'DMIT Assessment'],
      rows: [
        ['What it measures', 'General academic and cognitive intelligence quotient', 'Inborn brain dominance, 10 intelligences, and learning styles'],
        ['Scientific basis', 'Questionnaires measuring logic, pattern, and verbal skills', 'Dermatoglyphics (genetics-linked fingerprint ridge analysis)'],
        ['Stability of score', 'Fluctuates based on age, study prep, mood, and stress', 'Static (fingerprints never change throughout life)'],
        ['Assessed fields', 'Mainly logical-mathematical and linguistic fields', 'All 10 multiple intelligences (musical, spatial, social, etc.)'],
        ['Ideal age', 'Needs reading ability, usually 6+ years old', 'All ages (toddlers from age 2 to working professionals)']
      ]
    },
    whoShouldChooseA: 'Choose an IQ Test if you need a quick diagnostic measure of your child\'s current logical and linguistic performance on a specific day compared to academic benchmarks.',
    whoShouldChooseB: 'Choose DMIT if you want a complete, lifelong biological blueprint of your child\'s learning style (visual, auditory, kinesthetic), innate personality type, and recommended career paths.',
    benefitsA: [
      'Standardized benchmark recognized by traditional schools.',
      'Measures immediate verbal and non-verbal reasoning skills.',
      'Useful for identifying immediate academic learning needs.'
    ],
    benefitsB: [
      'Reveals innate talent areas before peer or social influence.',
      'Identifies the exact sensory style (VAK) to optimize study hours.',
      'One assessment provides a lifetime of career alignment data.'
    ],
    faqs: [
      {
        q: 'Is DMIT more accurate than a standard IQ test?',
        a: 'Yes, DMIT is considered more objective as it relies on dermatoglyphics patterns formed in the womb, which never change. A child can underperform on an IQ test due to test anxiety, fatigue, or mood, whereas fingerprints remain completely unaffected by external factors.'
      },
      {
        q: 'How does DMIT help in parenting compared to an IQ score?',
        a: 'An IQ score is a single number that tells you where the child stands but doesn\'t explain *why* or *how* to improve. DMIT details the child\'s behavior profile (Eagle, Owl, Peacock, Dove) and learning preferences, giving parents a practical guide to communicate and teach.'
      }
    ],
    courseALink: '/programs/dmit',
    courseBLink: '/contact'
  },
  'midbrain-activation-vs-brain-development-activities': {
    slug: 'midbrain-activation-vs-brain-development-activities',
    title: 'Midbrain Activation vs Brain Development Activities',
    metaTitle: 'Midbrain Activation vs General Brain Gym Activities | Smart Brains India',
    metaDescription: 'Understand the difference between targeted Midbrain Activation soundwaves/meditation and general cognitive brain gym exercises.',
    introduction: 'To boost child intelligence, parents often choose between general home brain development activities (puzzles, reading, chess) and structured professional programs like Midbrain Activation.',
    comparisonTable: {
      headers: ['Aspect', 'General Brain Activities', 'Midbrain Activation Program'],
      rows: [
        ['Method', 'Chess, puzzles, crosswords, reading, learning instruments', 'Alpha-wave audio stimulation, sensory games, coordinate brain gym'],
        ['Focus area', 'Strengthens specific cognitive actions (verbal, logical)', 'Balances left and right hemispheres via the mesencephalon'],
        ['Intensity', 'Slow, progressive development over years of practice', 'Rapid neural synchronization during 2-day intensive workshops'],
        ['Special outcomes', 'Better vocabulary and standard problem solving', 'Heightened intuitive sensing and sensory integration (blindfold test)'],
        ['Requirement', 'High daily effort and child motivation', 'Structured certified trainer guidance and home audio tracks']
      ]
    },
    whoShouldChooseA: 'Choose General Activities if you want to build general cognitive habits, improve vocabulary, and provide general leisure puzzle activities at home.',
    whoShouldChooseB: 'Choose Midbrain Activation if you want to activate whole-brain functioning, double learning absorption speeds, and release stress through hemisphere balancing.',
    benefitsA: [
      'Low cost and easy to integrate as leisure hobbies.',
      'Enhances targeted academic capabilities (e.g. reading).',
      'Provides screen-free family engagement.'
    ],
    benefitsB: [
      'Synchronizes left (logical) and right (creative) hemispheres.',
      'Drastically improves intuition and sensory perception.',
      'Helps hyperactive children establish calm focus states.'
    ],
    faqs: [
      {
        q: 'Is Midbrain Activation safe compared to standard brain exercises?',
        a: 'Yes, it is entirely safe and natural. We use specialized, relaxing sound frequencies and coordinate physical movements to synchronize hemispheres. No drugs, hypnosis, or stress are involved.'
      },
      {
        q: 'Should my child continue standard brain activities after Midbrain Activation?',
        a: 'Absolutely. Midbrain Activation opens the neural pathway bridge. Continuing activities like chess, Abacus, or reading will reinforce and utilize this opened potential to the maximum extent.'
      }
    ],
    courseALink: '/programs/midbrain-activation',
    courseBLink: '/brain-development-activities-for-kids'
  },
  'speed-reading-vs-photographic-memory': {
    slug: 'speed-reading-vs-photographic-memory',
    title: 'Speed Reading vs Photographic Memory',
    metaTitle: 'Speed Reading vs Photographic Memory: Which to Choose? | Smart Brains India',
    metaDescription: 'Compare Speed Reading and Photographic Memory training. Learn the methods, speeds, and benefits of both cognitive programs.',
    introduction: 'For students facing heavy study loads, Speed Reading and Photographic Memory are the two most powerful learning tools. Understanding how they differ helps identify the best academic option.',
    comparisonTable: {
      headers: ['Feature', 'Speed Reading Course', 'Photographic Memory Program'],
      rows: [
        ['Core mechanism', 'Eliminating subvocalization and widening eye fixation span', 'Right-brain visual encoding and spatial palace association'],
        ['Main goal', 'Read textbooks and articles 3-5x faster with comprehension', 'Retain facts, dates, maps, and formulas in long-term memory'],
        ['Processing speed', '400 - 800 words per minute (up to 1,000+ in Quantum)', 'Instant visual snapshot mapping of pages and data boards'],
        ['Ideal content', 'Paragraphs, fiction, newspapers, exam question sheets', 'Science diagrams, historical events, foreign vocabulary, formulas'],
        ['Daily practice', '10 mins eye tracking and pacer reading daily', '10 mins visualization and palace mapping daily']
      ]
    },
    whoShouldChooseA: 'Choose Speed Reading if your child reads slowly, wastes time on long exam questions, or struggles to finish reading homework and lengthy textbooks.',
    whoShouldChooseB: 'Choose Photographic Memory if your child struggles to recall spelling, forgets formulas during exams, or gets anxious trying to memorize history chapters.',
    benefitsA: [
      'Reduces total study and reading hours by up to 70%.',
      'Helps students cover maximum questions in competitive exams.',
      'Saves hours during final revisions.'
    ],
    benefitsB: [
      'Allows instant recall of facts and formulas without rote learning.',
      'Develops highly creative visual thinking capabilities.',
      'Drastically reduces exam-day anxiety and blank-outs.'
    ],
    faqs: [
      {
        q: 'Can a child take both courses?',
        a: 'Yes, they are highly complementary. Speed Reading allows the student to absorb massive textual context quickly, while Photographic Memory techniques allow them to tag and file key terms for instant recall.'
      },
      {
        q: 'Do these programs work on digital devices?',
        a: 'Yes. The eye muscles and visualization principles taught apply directly to both printed physical books and digital screens (laptops, e-readers, tablets).'
      }
    ],
    courseALink: '/programs/speed-reading',
    courseBLink: '/programs/photographic-memory'
  }
};
