export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  readTime: string;
  date: string;
  image: string;
  author: string;
  authorRole: string;
  content: string;
  relatedSlugs?: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "b1",
    slug: "how-often-should-you-clean-curtains-in-brisbane",
    title: "How Often Should You Clean Your Curtains in Brisbane?",
    excerpt: "Brisbane's sub-tropical humidity and pollen levels mean curtains collect dust and moisture faster than most people realise. Here's a clear guide to cleaning frequency based on your fabric type and window orientation.",
    category: "schedule",
    categoryLabel: "Care Schedule",
    readTime: "5 min read",
    date: "September 14, 2026",
    image: "/assets/blog_1.jpg",
    author: "Damian V.",
    authorRole: "Senior Fabric Care Specialist",
    content: `
      <p class="text-lg font-medium text-on-surface leading-relaxed mb-6">
        Curtains act as giant air filters in your home. Every day, they capture floating dust particles, sub-tropical moisture, pet dander, and Brisbane's high seasonal pollen counts. Because soil builds up gradually, many homeowners don't notice how much dirt their window drapes hold until allergies flare up or visible stains appear along the hems.
      </p>

      <h2 class="font-headline text-2xl font-bold text-primary mt-8 mb-4">Why Brisbane's Climate Accelerates Curtain Grime</h2>
      <p class="leading-relaxed mb-4">
        Brisbane experiences an average summer relative humidity exceeding 75%. Combined with warm temperatures and afternoon storm cycles, ambient moisture lodges deep inside heavy curtain weaves like cotton velvet, linen blends, and thermal blackout backings. When damp air mixes with settled household dust, it creates an ideal breeding ground for microscopic mould spores and dust mites.
      </p>

      <h2 class="font-headline text-2xl font-bold text-primary mt-8 mb-4">Recommended Cleaning Schedule by Fabric & Room Type</h2>
      <p class="leading-relaxed mb-4">
        Different fabrics and room locations require distinct care routines. Here is our recommended schedule based on our 8+ years of experience cleaning Brisbane homes:
      </p>

      <div class="my-8 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-primary/10 rounded-xl overflow-hidden text-sm">
          <thead>
            <tr class="bg-primary text-white font-headline">
              <th class="p-4">Fabric / Room Location</th>
              <th class="p-4">Vacuuming Frequency</th>
              <th class="p-4">Professional Steam Clean</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-primary/10 bg-white">
            <tr>
              <td class="p-4 font-semibold text-primary">Living Room Sheer Curtains</td>
              <td class="p-4">Fortnightly (soft brush)</td>
              <td class="p-4">Every 6 to 12 months</td>
            </tr>
            <tr class="bg-surface">
              <td class="p-4 font-semibold text-primary">Bedrooms (Delicate Linen/Silk)</td>
              <td class="p-4">Monthly</td>
              <td class="p-4">Every 12 months</td>
            </tr>
            <tr>
              <td class="p-4 font-semibold text-primary">Glass Sliding Doors (High Humidity)</td>
              <td class="p-4">Weekly</td>
              <td class="p-4">Every 6 months (Mould Prevention)</td>
            </tr>
            <tr class="bg-surface">
              <td class="p-4 font-semibold text-primary">Heavy Velvet / Blackout Drapes</td>
              <td class="p-4">Monthly</td>
              <td class="p-4">Every 12 to 18 months</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="font-headline text-2xl font-bold text-primary mt-8 mb-4">The Impact of Window Orientation (North & West Facing)</h2>
      <p class="leading-relaxed mb-4">
        Windows facing North and West receive prolonged direct sunlight in South East Queensland. UV radiation weakens natural cellulose fibres in cotton and linen. When dust sits on UV-exposed fabric, solar heat bakes the dirt into the thread matrix, resulting in permanent yellowing. Regular low-moisture steam extraction removes these surface contaminants before UV baking takes effect.
      </p>

      <div class="my-8 p-6 rounded-2xl bg-surface-container border-l-4 border-secondary text-primary">
        <h3 class="font-headline font-bold text-lg mb-2">Key Takeaway for Homeowners</h3>
        <p class="text-sm leading-relaxed text-on-surface-variant">
          If anyone in your household suffers from asthma, hay fever, or dust allergies, aim to have hanging drapes steam-sanitised at least twice a year. On-site steam kills 99.9% of dust mites and bacteria on contact without shrinking your curtains.
        </p>
      </div>

      <h2 class="font-headline text-2xl font-bold text-primary mt-8 mb-4">4 Warning Signs Your Curtains Need Immediate Cleaning</h2>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-on-surface">
        <li><strong>Musty Odour Near Windows:</strong> A stale smell when drawing curtains in the morning indicates active moisture retention or early mould growth.</li>
        <li><strong>Dark Hemlines:</strong> Gray or black speckled shading along lower pleats that rub against carpet or sliding door tracks.</li>
        <li><strong>Stiff or Rigid Fabric Feel:</strong> Accumulated airborne oils and dust make soft sheer fabric feel brittle to touch.</li>
        <li><strong>Visible Dust Clouds when Opening:</strong> Shaking curtains releases noticeable dust plumes into living spaces.</li>
      </ul>
    `,
    relatedSlugs: ["preventing-mould-growth-on-sheer-curtains"]
  },
  {
    id: "b2",
    slug: "preventing-mould-growth-on-sheer-curtains",
    title: "How to Stop Mould Growing on Curtains Near Glass Doors",
    excerpt: "Mould along the bottom of sheer curtains near sliding glass doors is one of the most common issues in Brisbane homes. Here is how to prevent condensation build-up and kill spores safely.",
    category: "climate",
    categoryLabel: "Climate & Mould",
    readTime: "4 min read",
    date: "August 28, 2026",
    image: "/assets/blog_2.jpg",
    author: "Sarah J.",
    authorRole: "Fabric Restoration Expert",
    content: `
      <p class="text-lg font-medium text-on-surface leading-relaxed mb-6">
        If you live in Brisbane, chances are you've seen dark dots or grey shading creeping up the bottom hem of sheer curtains near sliding patio doors. Because glass panels transfer outdoor cold air against humid indoor room air, heavy condensation pools along aluminum window tracks. When sheer curtains rest against wet glass or damp frames, mould spores ignite within hours.
      </p>

      <h2 class="font-headline text-2xl font-bold text-primary mt-8 mb-4">Why Bleach & Chlorine Destroy Curtain Fabrics</h2>
      <p class="leading-relaxed mb-4">
        Many homeowners reach for off-the-shelf mould sprays or household bleach. This is a critical mistake for window drapery:
      </p>
      <ul class="list-disc pl-6 space-y-2 mb-6 text-on-surface">
        <li><strong>Chlorine Bleach Rot:</strong> Bleach corrodes synthetic sheer threads and rots natural linen strands, causing holes after the fabric dries.</li>
        <li><strong>Discoloration & Yellow Stains:</strong> Bleach reacts with Brisbane tap water minerals, turning white sheers an irreversible brassy yellow.</li>
        <li><strong>Incomplete Spore Removal:</strong> Surface sprays don't penetrate heavy hem stitching where mould roots (hyphae) anchor.</li>
      </ul>

      <h2 class="font-headline text-2xl font-bold text-primary mt-8 mb-4">5 Simple Daily Habits to Prevent Curtain Mould</h2>
      <ol class="list-decimal pl-6 space-y-3 mb-6 text-on-surface">
        <li><strong>Maintain a 5cm Gap from Glass:</strong> Adjust track gliders so sheer curtains never directly touch glass panes during cool humid mornings.</li>
        <li><strong>Wipe Window Tracks Daily:</strong> Wipe down aluminum sliding door tracks with a microfiber cloth to remove pooled morning condensation.</li>
        <li><strong>Promote Air Circulation:</strong> Open windows or run ceiling fans on low for 20 minutes each morning to dry out trapped window moisture.</li>
        <li><strong>Use Dehumidifiers in Summer:</strong> In humid Brisbane suburbs near water (such as Manly, Wynnum, or New Farm), portable dehumidifiers keep indoor humidity under 60%.</li>
        <li><strong>Schedule Biannual Sanitisation:</strong> Professional anti-fungal steam extraction kills invisible spores before dark colonies form.</li>
      </ol>

      <div class="my-8 p-6 rounded-2xl bg-surface-container border-l-4 border-secondary text-primary">
        <h3 class="font-headline font-bold text-lg mb-2">Our Anti-Fungal Steam Guarantee</h3>
        <p class="text-sm leading-relaxed text-on-surface-variant">
          Curtain Cleaning Brisbane uses non-toxic, pH-neutral botanical anti-microbial treatments specifically formulated for sheer polyester, linen, and voiles. We eradicate active mould and apply an invisible protective barrier that resists re-growth.
        </p>
      </div>
    `,
    relatedSlugs: ["how-often-should-you-clean-curtains-in-brisbane"]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, count = 1): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, count);
}
