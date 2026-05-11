/**
 * Stock photography via Unsplash. All `src` values are verified to resolve (200).
 * Swap in `/public/...` paths when you have real studio photography.
 * Widths are tuned for crisp mobile (2× DPR) and large hero displays.
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

const hq = (base: string, w: number) => `${base}&w=${w}&q=88`;

export const stockImages = {
  hero: { src: hq(U.pianoKeys, 1920), alt: "Piano keys during a private music lesson" },
  heroAccent1: { src: hq(U.guitar, 960), alt: "Student with electric guitar" },
  heroAccent2: { src: hq(U.drums, 960), alt: "Drum kit in a lesson studio" },
  studioInPerson: { src: hq(U.pianoLesson, 1920), alt: "Instructor and student at the piano" },
  studioOnline: { src: hq(U.studioRoom, 1920), alt: "Home studio setup for online music lessons" },
  lessonsBanner: { src: hq(U.guitar, 1920), alt: "Electric guitar detail" },
  instructorsBanner: { src: hq(U.drums, 1920), alt: "Drum kit in a teaching studio" },
  contactBanner: { src: hq(U.sheetMusic, 1920), alt: "Sheet music on a stand" },
  strings: { src: hq(U.pianoLesson, 1200), alt: "Hands-on coaching during a lesson" },
  winds: { src: hq(U.ensemble, 1200), alt: "Brass and woodwinds in rehearsal" },
  voice: { src: hq(U.microphone, 1200), alt: "Microphone and warm stage lights" },
  homeStrip: [
    { id: "strip-piano", src: hq(U.pianoKeys, 800), alt: "Piano lesson close-up" },
    { id: "strip-guitar", src: hq(U.guitar, 800), alt: "Guitar technique" },
    { id: "strip-drums", src: hq(U.drums, 800), alt: "Drum lesson" },
    { id: "strip-lesson", src: hq(U.pianoLesson, 800), alt: "In-studio instruction" },
    { id: "strip-voice", src: hq(U.microphone, 800), alt: "Vocal performance" },
    { id: "strip-studio", src: hq(U.studioRoom, 800), alt: "Studio environment" },
  ] as const,
  gallery: [
    { id: "g-piano", src: hq(U.pianoKeys, 1400), alt: "Piano keyboard in warm light" },
    { id: "g-guitar", src: hq(U.guitar, 1400), alt: "Guitar being played" },
    { id: "g-drums", src: hq(U.drums, 1400), alt: "Drum set ready for a lesson" },
    { id: "g-voice", src: hq(U.microphone, 1400), alt: "Microphone and live performance lighting" },
    { id: "g-duet", src: hq(U.pianoLesson, 1400), alt: "Hands on piano keys with lesson materials" },
    { id: "g-room", src: hq(U.studioRoom, 1400), alt: "Recording and lesson space" },
  ] as const,
} as const;
