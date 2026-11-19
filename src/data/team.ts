export type TeamType =
  | "Leads"
  | "Directors"
  | "Operations"
  | "Finance"
  | "Marketing"
  | "UI/UX Design"
  | "Software Engineering";

export type TeamMember = {
  name: string;
  position: string;
  team: TeamType;
  bio: string;
  linkedin: string;
  github: string;
  image: string;
  sillyImage: string;
  mogImage: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Allison Pham",
    position: "Director",
    team: "Directors",
    bio: "Short bio about the team member.",
    linkedin: "https://www.linkedin.com/in/imallisonpham/",
    github: "#",
    image: "/team/placeholder.svg",
    sillyImage: "",
    mogImage: "/team/photos/mogging/Allison.jpg",
  },
  {
    name: "Grace Hernandez",
    position: "Director",
    team: "Directors",
    bio: "matcha",
    linkedin: "https://www.linkedin.com/in/gracekhernandez/",
    github: "#",
    image: "/team/placeholder.svg",
    sillyImage: "/team/photos/silly/grace.jpeg",
    mogImage: "/team/photos/mogging/Grace.jpg",
  },
  {
    name: "Andrew Tanuwijaya",
    position: "Ops",
    team: "Operations",
    bio: "Bombastic",
    linkedin: "https://www.linkedin.com/in/andrew-tanuwijaya-856111332/",
    github: "#",
    image: "/team/placeholder.svg",
    sillyImage: "/team/photos/silly/andrew.jpeg",
    mogImage: "/team/photos/mogging/Andrew.jpg",
  },
  {
    name: "Kenneth Medrano",
    position: "Ops",
    team: "Operations",
    bio: "Alrighty",
    linkedin: "https://www.linkedin.com/in/kenneth-medrano-4264ab402/",
    github: "#",
    image: "/team/placeholder.svg",
    sillyImage: "/team/photos/silly/kenneth.jpeg",
    mogImage: "/team/photos/mogging/Kenneth.jpg",
  },
  {
    name: "Rhea Khurana",
    position: "Finance",
    team: "Finance",
    bio: "😊💕",
    linkedin: "https://www.linkedin.com/in/rhea-khurana",
    github: "#",
    image: "/team/placeholder.svg",
    sillyImage: "/team/photos/silly/rhea.jpeg",
    mogImage: "/team/photos/mogging/Rhea.jpg",
  },
  {
    name: "Joy Marcotte",
    position: "Marketing",
    team: "Marketing",
    bio: "sleepy",
    linkedin: "https://www.linkedin.com/in/joy-marcotte-640051203/",
    github: "#",
    image: "/team/placeholder.svg",
    sillyImage: "/team/photos/silly/joy.png",
    mogImage: "/team/photos/mogging/Joy.jpg",
  },
  {
    name: "Lahari Karmuchi",
    position: "Marketing",
    team: "Marketing",
    bio: "Dynamic",
    linkedin: "https://www.linkedin.com/in/lahari-karmuchi-9381b42b7/",
    github: "#",
    image: "/team/placeholder.svg",
    sillyImage: "/team/photos/silly/lahari.jpeg",
    mogImage: "/team/photos/mogging/Lahari.jpg",
  },
  {
    name: "Calvin Lim",
    position: "UI/UX",
    team: "UI/UX Design",
    bio: "moo",
    linkedin: "https://www.linkedin.com/in/calvinlim7/",
    github: "#",
    image: "/team/placeholder.svg",
    sillyImage: "/team/photos/silly/calvin.jpg",
    mogImage: "/team/photos/mogging/Calvin.jpg",
  },
  {
    name: "Christie Wong",
    position: "UI/UX",
    team: "UI/UX Design",
    bio: "😛",
    linkedin: "https://www.linkedin.com/in/christie-wong-8ba043293/",
    github: "#",
    image: "/team/placeholder.svg",
    sillyImage: "/team/photos/silly/christie.jpg",
    mogImage: "/team/photos/mogging/Christie.jpg",
  },
  {
    name: "Bestin Watts",
    position: "SWE",
    team: "Software Engineering",
    bio: "hungry",
    linkedin: "https://www.linkedin.com/in/bestinwatts/",
    github: "#",
    image: "/team/placeholder.svg",
    sillyImage: "/team/photos/silly/Bestin.jpg",
    mogImage: "/team/photos/mogging/Bestin.jpg",
  },
  {
    name: "Emily Tan",
    position: "SWE",
    team: "Software Engineering",
    bio: "boba",
    linkedin: "https://www.linkedin.com/in/emilytan29/",
    github: "#",
    image: "/team/placeholder.svg",
    sillyImage: "/team/photos/silly/emily.jpeg",
    mogImage: "/team/photos/mogging/Emily.jpg",
  },
  {
    name: "Rafael Moran",
    position: "SWE",
    team: "Software Engineering",
    bio: "🎸",
    linkedin: "https://www.linkedin.com/in/rafael-moran-3992b1377",
    github: "#",
    image: "/team/placeholder.svg",
    sillyImage: "/team/photos/silly/rafael.jpg",
    mogImage: "/team/photos/mogging/Rafael.jpg",
  },
];
