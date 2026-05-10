/**
 * Stock photography via Unsplash. All `src` values are verified to resolve (200).
 * Swap in `/public/...` paths when you have real studio photography.
 */

const q = "auto=format&fit=crop&ixlib=rb-4.1.0";

/** Working Unsplash image bases we reuse for variety */
const U = {
  pianoKeys: `https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?${q}`,
  guitar: `https://images.unsplash.com/photo-1510915361894-db8b60106cb1?${q}`,
  drums: `https://images.unsplash.com/photo-1519892300165-c05d19d2576c?${q}`,
  studioRoom: `https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?${q}`,
  pianoLesson: `https://images.unsplash.com/photo-1511379938547-c1f69419868d?${q}`,
  microphone: `https://images.unsplash.com/photo-1470225620780-dba8ba36b745?${q}`,
  sheetMusic: `https://images.unsplash.com/photo-1507838153414-b4b713384a76?${q}`,
  ensemble: `https://images.unsplash.com/photo-1516280440614-37939bbacd81?${q}`,
} as const;

export const stockImages = {
  hero: { src: `${U.pianoKeys}&w=1400&q=85`, alt: "Piano keys during a private music lesson" },
  heroAccent1: { src: `${U.guitar}&w=700&q=85`, alt: "Student with electric guitar" },
  heroAccent2: { src: `${U.drums}&w=700&q=85`, alt: "Drum kit in a lesson studio" },
  studioInPerson: { src: `${U.pianoLesson}&w=1400&q=85`, alt: "Instructor and student at the piano" },
  studioOnline: { src: `${U.studioRoom}&w=1400&q=85`, alt: "Home studio setup for online music lessons" },
  lessonsBanner: { src: `${U.guitar}&w=1800&q=85`, alt: "Electric guitar detail" },
  instructorsBanner: { src: `${U.drums}&w=1800&q=85`, alt: "Drum kit in a teaching studio" },
  contactBanner: { src: `${U.sheetMusic}&w=1800&q=85`, alt: "Sheet music on a stand" },
  strings: { src: `${U.pianoLesson}&w=900&q=85`, alt: "Hands-on coaching during a lesson" },
  winds: { src: `${U.ensemble}&w=900&q=85`, alt: "Brass and woodwinds in rehearsal" },
  voice: { src: `${U.microphone}&w=900&q=85`, alt: "Microphone and warm stage lights" },
  homeStrip: [
    { id: "strip-piano", src: `${U.pianoKeys}&w=600&q=80`, alt: "Piano lesson close-up" },
    { id: "strip-guitar", src: `${U.guitar}&w=600&q=80`, alt: "Guitar technique" },
    { id: "strip-drums", src: `${U.drums}&w=600&q=80`, alt: "Drum lesson" },
    { id: "strip-lesson", src: `${U.pianoLesson}&w=600&q=80`, alt: "In-studio instruction" },
    { id: "strip-voice", src: `${U.microphone}&w=600&q=80`, alt: "Vocal performance" },
    { id: "strip-studio", src: `${U.studioRoom}&w=600&q=80`, alt: "Studio environment" },
  ] as const,
  gallery: [
    { id: "g-piano", src: `${U.pianoKeys}&w=1000&q=85`, alt: "Piano keyboard in warm light" },
    { id: "g-guitar", src: `${U.guitar}&w=1000&q=85`, alt: "Guitar being played" },
    { id: "g-drums", src: `${U.drums}&w=1000&q=85`, alt: "Drum set ready for a lesson" },
    { id: "g-voice", src: `${U.microphone}&w=1000&q=85`, alt: "Microphone and live performance lighting" },
    { id: "g-duet", src: `${U.pianoLesson}&w=1000&q=85`, alt: "Hands on piano keys with lesson materials" },
    { id: "g-room", src: `${U.studioRoom}&w=1000&q=85`, alt: "Recording and lesson space" },
  ] as const,
} as const;
