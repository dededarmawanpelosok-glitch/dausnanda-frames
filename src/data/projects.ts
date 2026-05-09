export type ProjectSlug =
  | "byon"
  | "kordsa"
  | "saburai"
  | "expo-health"
  | "presisi";

export type Project = {
  slug: ProjectSlug;
  client: string;
  title: string;
  category: string;
  role: string;
  year: string;
  location?: string;
  cover: string;
  youtubeId: string;
  blurb: string;
  narrative: string[];
  highlights: { label: string; value: string }[];
  deliverables: string[];
};

import byon from "@/assets/work-byon.jpg";
import kordsa from "@/assets/work-kordsa.jpg";
import saburai from "@/assets/work-saburai.jpg";

export const projects: Project[] = [
  {
    slug: "byon",
    client: "BYON by BSI",
    title: "Launching a new digital banking identity",
    category: "Brand Launch / Digital Banking",
    role: "Videographer",
    year: "2025",
    cover: byon,
    youtubeId: "mhmssCjUC0w",
    blurb:
      "Cinematic launch documentation for BYON by BSI — capturing the moment a new digital banking brand met the public.",
    narrative: [
      "BYON by BSI marked a significant moment for Indonesia's digital banking landscape. The brief was clear: capture the launch with the weight, clarity, and innovation the brand stands for.",
      "We focused on the moment of unveiling, the live performances around it, the audience reactions, and the quiet, considered details that signal a serious institution stepping into a new era.",
      "Every frame was treated as part of a bigger statement — a visual record of professionalism, ambition, and a confident first impression.",
    ],
    highlights: [
      { label: "Format", value: "Launch event film" },
      { label: "Crew role", value: "Videographer" },
      { label: "Style", value: "Editorial cinematic" },
    ],
    deliverables: ["Hero recap film", "Vertical social cuts", "Selected stills"],
  },
  {
    slug: "kordsa",
    client: "Indo Kordsa",
    title: "An internal corporate event, captured with warmth",
    category: "Corporate Culture / Internal Event",
    role: "Videographer & Video Editor",
    year: "2025",
    cover: kordsa,
    youtubeId: "assEf15e9Z8",
    blurb:
      "A multi-day internal company event — meetings, games, performances, and Best Of awards — edited into a film about teamwork and appreciation.",
    narrative: [
      "Indo Kordsa wanted more than a documentation reel. They wanted their team to feel seen — leaders, contributors, new faces, long-time colleagues.",
      "The coverage moved between formal meetings, candid game moments, a guest-star performance, and the Best Of awards moment that anchored the night.",
      "In the edit, we leaned into rhythm and faces. The final film carries the energy of the room, the recognition of the people, and the quiet pride of a company that knows its culture matters.",
    ],
    highlights: [
      { label: "Format", value: "Recap film + edit" },
      { label: "Crew role", value: "Videographer & Editor" },
      { label: "Tone", value: "Warm, human, premium" },
    ],
    deliverables: ["Full event recap film", "Awards moment cut", "Internal share assets"],
  },
  {
    slug: "saburai",
    client: "Saburai Grand Jam",
    title: "Documenting 1,000 musicians on a single stage",
    category: "Music / Large-scale Live Event",
    role: "Videographer & Documentation Team Leader",
    year: "2025",
    location: "Lampung, Indonesia",
    cover: saburai,
    youtubeId: "wK9AiXnVDDo",
    blurb:
      "Leading the documentation team for a record-context live event with 1,000 musicians, multiple stages, and guest performances.",
    narrative: [
      "Saburai Grand Jam is the kind of event that only happens once. A thousand musicians on one stage, guest performances, and a MURI record context — all unfolding in real time.",
      "As the documentation team leader, the work was as much about coordination as it was about cinematography. Crew positions, camera angles, redundancy, audio sync — every variable mattered because there was no second take.",
      "The output had to honour the scale: wide stage frames, intimate hand-on-instrument detail, crowd reactions, and the quiet backstage moments that make a live event feel real.",
    ],
    highlights: [
      { label: "Scale", value: "1,000 musicians" },
      { label: "Crew role", value: "Lead documentation" },
      { label: "Context", value: "MURI record event" },
    ],
    deliverables: ["Multi-camera live capture", "Cinematic recap film", "Press & social cuts"],
  },
  {
    slug: "expo-health",
    client: "Women's Health Expo 2025",
    title: "A national health expo, documented end-to-end",
    category: "Institutional / Conference",
    role: "Videographer & Editor",
    year: "2025",
    cover: "https://i.ytimg.com/vi/EyKkv9BH2Rw/maxresdefault.jpg",
    youtubeId: "EyKkv9BH2Rw",
    blurb:
      "Cinematic conference documentation — keynotes, exhibitor floor, and audience moments shaped into a single coherent recap.",
    narrative: [
      "Women's Health Expo 2025 brought together speakers, exhibitors, and a public audience over a focused programme. The brief was to capture the scale, the stage moments, and the human energy on the floor.",
      "Coverage moved between keynote sessions, panel discussions, exhibitor booths, and candid audience reactions — building a film that reads as a public record, not just an internal recap.",
      "The final cut leans into clarity: clean stage frames, considered cutaways, and a pace that honours the institutional weight of the event.",
    ],
    highlights: [
      { label: "Format", value: "Conference recap" },
      { label: "Crew role", value: "Videographer & Editor" },
      { label: "Audience", value: "Public + Industry" },
    ],
    deliverables: ["Hero recap film", "Speaker session cuts", "Press-ready stills"],
  },
  {
    slug: "presisi",
    client: "Presisi",
    title: "Institutional moment, captured with discipline",
    category: "Institutional / Corporate Event",
    role: "Videographer",
    year: "2025",
    cover: "https://i.ytimg.com/vi/b1ZL2zN-dMY/maxresdefault.jpg",
    youtubeId: "b1ZL2zN-dMY",
    blurb:
      "An institutional event documented with editorial restraint — accurate, respectful, and built for stakeholder review.",
    narrative: [
      "Presisi needed documentation that would carry institutional weight: accurate, polished, and useful across stakeholder channels.",
      "We focused on the principal moments — opening, key addresses, signing, group portraits — while keeping the camera quiet enough to let the room breathe.",
      "The final film is editorial: measured pacing, clean color, and a structure that lets leadership and press use it without further work.",
    ],
    highlights: [
      { label: "Format", value: "Institutional recap" },
      { label: "Crew role", value: "Videographer" },
      { label: "Tone", value: "Editorial, restrained" },
    ],
    deliverables: ["Recap film", "Key moment cuts", "Selected stills"],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
