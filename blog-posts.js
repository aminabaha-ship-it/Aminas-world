// ============================================
// BLOG POSTS DATA
// Add new entries to the top of this array (newest first).
//
// Fields:
//   id          — unique slug, lowercase-with-hyphens
//   title       — post or article title
//   type        — "original" (your own writing) or "curated" (an article you're sharing)
//   categories  — array of category slugs, see the list below
//   date        — "YYYY-MM-DD"
//   excerpt     — 1-3 sentence summary or your take on it
//   url         — link to the full piece. For "original" posts without a
//                 separate page yet, set this to null.
//   source      — (curated only) name of the original publisher/site
//
// Available category slugs:
//   it-trends, ai, cybersecurity, public-policy, health,
//   immigration, refugee, mental-health, middle-eastern, south-central-asian
// ============================================

const blogPosts = [
  {
    id: "welcome-post",
    title: "Welcome to the Blog",
    type: "original",
    categories: ["it-trends", "health", "immigration"],
    date: "2026-07-07",
    excerpt: "This is a sample first post, written in your own voice. Replace it with a real introduction — why you write about the intersection of health IT, immigration policy, and refugee services, and what readers can expect here.",
    url: null,
    source: null
  },
  {
    id: "sample-curated-article",
    title: "Sample Curated Article — Replace With a Real Link",
    type: "curated",
    categories: ["ai", "cybersecurity"],
    date: "2026-07-07",
    excerpt: "This is a placeholder for an article you found interesting and want to share. Swap in the real title, add a sentence on why it's worth reading, and update the source and link below.",
    url: "#",
    source: "Source Name"
  }
];
