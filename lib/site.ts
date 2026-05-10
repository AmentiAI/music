export const site = {
  name: "Amped Music School",
  description:
    "Private music lessons in Richmond, Rhode Island. Guitar, piano, drums, voice, strings, winds, and more. Online and in-studio.",
  address: {
    street: "1167 Main Street",
    city: "Richmond",
    state: "RI",
    zip: "02898",
  },
  phone: "401-323-1477",
  phoneTel: "+14013231477",
  email: "ampedmusicschool@gmail.com",
  links: {
    youtube: "https://www.youtube.com/channel/UCW2aZ832TomMu2ReRhhy63w",
    facebook: "https://www.facebook.com/ampedamusicschool",
    instagram: "https://instagram.com/ampedmusicschool/",
    practiceGuitar: "https://practicetheguitar.com/",
  },
} as const;

export const instruments = [
  "Guitar",
  "Piano",
  "Drums",
  "Voice",
  "Trumpet",
  "Saxophone",
  "Clarinet",
  "Flute",
  "Violin",
  "Cello",
  "Upright bass",
  "Electric bass",
] as const;

export const faculty = [
  { name: "Gary", role: "Guitar · Management" },
  { name: "Tommy", role: "Guitar · Piano · Vocals" },
  { name: "James", role: "Piano" },
  { name: "Mike", role: "Drums" },
  { name: "Mich", role: "Drums" },
  { name: "Corrine", role: "Voice" },
  { name: "Joe", role: "Bass" },
] as const;
