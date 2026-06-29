export interface LocationData {
  slug: string;
  cityKey: string;
  programKey: string;
  cityName: string;
  programName: string;
  programSlug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  introduction: string;
  localImportance: string;
  faqs: Array<{ q: string; a: string }>;
  branchName: string;
  branchAddress: string;
  branchPhone: string;
  mapEmbedUrl: string;
}

export const cities = {
  'hyderabad': {
    name: 'Hyderabad',
    state: 'Telangana',
    branchName: 'Hyderabad Center (Kondapur)',
    address: 'Prasanth Nagar Colony, Kondapur, Hyderabad, Telangana 500084',
    phone: '+91 7386209090',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2872659093635!2d78.3659!3d17.4569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzI0LjgiTiA3OMKwMjEnNTcuMiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    desc: 'Located in the tech-hub Kondapur, serving families across Gachibowli, Kukatpally, Madhapur, and Miyapur with certified cognitive trainers.'
  },
  'vizianagaram': {
    name: 'Vizianagaram',
    state: 'Andhra Pradesh',
    branchName: 'Vizianagaram Head Office (Dakkini Street)',
    address: 'Dakkini Street, Backside of Ramamandir, 3-1/4-12/2, Vizianagaram, AP 535002',
    phone: '+91 7396447470',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.312959828456!2d83.3953!3d18.1124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA2JzQ0LjYiTiA4M8KwMjMnNDMuMSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    desc: 'Our premier foundational brain training branch on Dakkini Street, providing hands-on cognitive activation labs since inception.'
  },
  'vizag': {
    name: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    branchName: 'Vizag Online & Home Assessment Branch',
    address: 'Serving all major areas including Dwarka Nagar, MVP Colony, Gajuwaka, Visakhapatnam',
    phone: '+91 7396447470',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121639.29415781368!2d83.17066914562095!3d17.729223789498263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9978ee6ae536c!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    desc: 'Providing quick fingerprint home-scanners for remote DMIT and live online training sessions for Vizag students.'
  },
  'vijayawada': {
    name: 'Vijayawada',
    state: 'Andhra Pradesh',
    branchName: 'Vijayawada Online & Home Assessment Branch',
    address: 'Serving Benz Circle, Labbipet, Governorpet, Vijayawada, AP',
    phone: '+91 7396447470',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61205.80800366838!2d80.60156942008892!3d16.506174246949392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d94fb%3A0x69db17e44256128a!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    desc: 'Connecting Vijayawada families to our digital classroom environment with interactive cognitive trainers.'
  },
  'guntur': {
    name: 'Guntur',
    state: 'Andhra Pradesh',
    branchName: 'Guntur Online Training Branch',
    address: 'Serving Arundalpet, Lakshmipuram, Brodipet, Guntur, AP',
    phone: '+91 7396447470',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122482.32759550787!2d80.36416629906612!3d16.29955743477148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb7dede3d%3A0x8dd088fa0d9ab114!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    desc: 'Dedicated online math and memory coaching batches customized for Guntur school curricula.'
  },
  'srikakulam': {
    name: 'Srikakulam',
    state: 'Andhra Pradesh',
    branchName: 'Srikakulam Online Training Branch',
    address: 'Serving Balaga, GT Road, Srikakulam district, AP',
    phone: '+91 7396447470',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.6946890315484!2d83.89667520000001!3d18.3018868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c144e55555555%3A0x334460f78cc9d2d0!2sSrikakulam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    desc: 'Empowering Northern AP students with advanced logical reasoning tools and remote fingerprint collection kits.'
  },
  'rajahmundry': {
    name: 'Rajahmundry',
    state: 'Andhra Pradesh',
    branchName: 'Rajahmundry Remote Learning Center',
    address: 'Serving Danavaipeta, J N Road, Rajahmundry, AP',
    phone: '+91 7396447470',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61099.96200257008!2d81.74548481283626!3d16.98904581452656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3e9c80a2bdf%3A0x8ad2d36474fb5eb!2sRajahmundry%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    desc: 'Connecting students in East Godavari district with certified memory masters and brain gym coaches online.'
  },
  'kakinada': {
    name: 'Kakinada',
    state: 'Andhra Pradesh',
    branchName: 'Kakinada Remote Coaching Desk',
    address: 'Serving Bhanugudi Junction, Ramaraopeta, Kakinada, AP',
    phone: '+91 7396447470',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61122.95155734493!2d82.20392336306509!3d16.982544253163335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a38283a00000001%3A0x1ff26a6b5774e1d7!2sKakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    desc: 'Unlocking cognitive excellence in coastal AP through high-fidelity online platforms and personalized assessments.'
  },
  'tirupati': {
    name: 'Tirupati',
    state: 'Andhra Pradesh',
    branchName: 'Tirupati Remote Learning Desk',
    address: 'Serving KT Road, Balaji Colony, Tirupati, AP',
    phone: '+91 7396447470',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62058.07761019688!2d79.3789467657962!3d13.627725944111322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b0f8862045b%3A0xcafaf8b0d49479b4!2sTirupati%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    desc: 'Bringing state-of-the-art mental math and scientific fingerprint analysis to Rayalaseema students online.'
  },
  'warangal': {
    name: 'Warangal',
    state: 'Telangana',
    branchName: 'Warangal Remote Learning Center',
    address: 'Serving Hanamkonda, Kazipet, Subedari, Warangal, Telangana',
    phone: '+91 7386209090',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121303.49079944743!2d79.51034509539327!3d17.96547633215858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f3c00000001%3A0x6b49e31fc577af23!2sWarangal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    desc: 'Expanding our Telangana cognitive reach with dedicated online batches for schools in Warangal and Hanamkonda.'
  }
};

export const programTemplates = {
  'abacus': {
    name: 'Abacus Classes',
    slug: 'abacus-math',
    description: 'Mental math and calculation speed training using the visualization of abacus beads.',
    introText: 'Our structured Abacus curriculum trains children (ages 4-14) to perform lightning-fast arithmetic computations mentally. By converting numbers into physical beads, kids activate their visual cortex and align logical arithmetic with spatial right-brain imagery, building massive concentration spans.',
    localBenefit: 'Students here will gain a substantial advantage in local board examinations and regional mathematical Olympiads through speed, accuracy, and double-checking techniques.'
  },
  'dmit': {
    name: 'DMIT Test',
    slug: 'dmit',
    description: 'Dermatoglyphics Multiple Intelligence Test scientific fingerprint mapping.',
    introText: 'Discover your child\'s inborn talents, brain dominance, and personality parameters using dermatoglyphics fingerprint analysis. We map ridge patterns directly to cortical lobes with 95% accuracy to outline visual/auditory/kinesthetic learning styles and direct career routes.',
    localBenefit: 'Get comprehensive career alignment guidance based on biology, letting you select the best courses and schools without pressure.'
  },
  'midbrain': {
    name: 'Midbrain Activation',
    slug: 'midbrain-activation',
    description: 'Hemispheric synchronization and intuition development classes.',
    introText: 'Unleash your child\'s dormant brain potential by stimulating the mesencephalon. Our certified trainers guide students through alpha-wave audio tracks, coordinate movements, and sensory integration games to achieve hemisphere balance and heightened intuitive sensing.',
    localBenefit: 'Helps students cope with intensive school homework, reduce exam stress, and read/absorb information twice as fast.'
  },
  'vedic': {
    name: 'Vedic Maths',
    slug: 'vedic-math',
    description: 'Fast mental arithmetic based on ancient Indian mathematical formulas.',
    introText: 'Vedic Mathematics teaches 16 core Sutras to calculate multi-digit multiplication, square roots, squares, and division mentally in a single step. Ideal for students (ages 9+) to master fast numbers.',
    localBenefit: 'Gives high schoolers an elite speed advantage in timed entrance tests (such as JEE, SAT, and state Olympiads).'
  },
  'speed-reading': {
    name: 'Speed Reading Classes',
    slug: 'speed-reading',
    description: 'Double or triple reading speeds while maintaining full comprehension.',
    introText: 'We train the optical muscles to read word blocks rather than word-by-word, completely eliminating subvocalization (the inner reading voice). Children read entire pages in seconds with complete comprehension.',
    localBenefit: 'Reduces textbook study and revision time by up to 70%, allowing students to focus more time on practice tests.'
  },
  'photographic-memory': {
    name: 'Photographic Memory Classes',
    slug: 'photographic-memory',
    description: 'Visual memory encoding and spatial memory palace techniques.',
    introText: 'Convert abstract textual data into colorful visual codes and lock them into mental maps (Memory Palaces). This program stimulates the right brain to convert rote memorization into long-term memories.',
    localBenefit: 'Helps students remember complex science diagrams, historical timelines, and mathematical formulas for board exams effortlessly.'
  }
};

// Generates list of location landing pages details dynamically
export function generateLocationList(): LocationData[] {
  const result: LocationData[] = [];
  const programKeys = Object.keys(programTemplates);
  const cityKeys = Object.keys(cities);

  for (const cityKey of cityKeys) {
    const city = cities[cityKey as keyof typeof cities];
    for (const progKey of programKeys) {
      const prog = programTemplates[progKey as keyof typeof programTemplates];
      
      const slug = `${progKey}-classes-in-${cityKey}`
        .replace('dmit-classes', 'dmit-test')
        .replace('midbrain-classes', 'midbrain-activation')
        .replace('vedic-classes', 'vedic-maths');

      const title = `${prog.name} in ${city.name}`;
      const metaTitle = `Best ${prog.name} in ${city.name} | Brain Training & Online Classes | Smart Brains India`;
      const metaDescription = `Certified ${prog.name} in ${city.name}, ${city.state}. ${prog.description} Online & Home-kit modes available. ✓ Expert Trainers ✓ Book FREE Demo session now!`;
      
      const introduction = `${prog.introText} Families in ${city.name} can now access these world-class brain development activities designed by certified child development professionals.`;
      const localImportance = `${prog.localBenefit} ${city.desc}`;

      const faqs = [
        {
          q: `Where is the best center for ${prog.name} in ${city.name}?`,
          a: `Smart Brains India is the leading provider for ${prog.name} in ${city.name}. We offer complete offline classes at our physical centers (where applicable) and live online interactive coaching with home-delivery kits for all assessments and practice tools.`
        },
        {
          q: `What is the age criteria for ${prog.name} in ${city.name}?`,
          a: `The age criteria varies by program: Abacus is ideal for 4-14 years, Vedic Maths is for 9 years and above, Midbrain Activation is for 5-15 years, and DMIT fingerprint mapping is suitable for all age groups (toddlers to adults).`
        },
        {
          q: `How do I book a free demo for ${prog.name} in ${city.name}?`,
          a: `You can book a free demo by clicking the 'Book Free Demo' CTA button, calling our regional helpdesk at ${city.phone}, or submitting the contact popup form. Our coordinators will schedule a session at your convenience.`
        }
      ];

      result.push({
        slug,
        cityKey,
        programKey: progKey,
        cityName: city.name,
        programName: prog.name,
        programSlug: prog.slug,
        title,
        metaTitle,
        metaDescription,
        introduction,
        localImportance,
        faqs,
        branchName: city.branchName,
        branchAddress: city.address,
        branchPhone: city.phone,
        mapEmbedUrl: city.mapUrl
      });
    }
  }
  return result;
}

export function getLocationBySlug(slug: string): LocationData | undefined {
  return generateLocationList().find(loc => loc.slug === slug);
}
