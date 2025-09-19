// Import local images properly
import craftifyImg from "../assets/logos/craftify.png"
import flyndrImg from "../assets/logos/flyndr.png"
import inProgressImg from "../assets/logos/work-in-progress.png" // ✅ unique animation

export type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  repo?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: "Craftify — Artist–Client Platform",
    description:
      "A matchmaking platform with milestones, payments, and messaging. React, Supabase, Node.js.",
    tags: ["React", "TypeScript", "Supabase", "Node.js"], 
    image: craftifyImg,
    repo: "https://github.com/myjeydsss",
    demo: "https://icraftify.com"
  },
  {
    title: "Flyndr Hospital — Doctor Appointment System",
    description:
      "A hospital appointment system with auth, scheduling, and email notifications.",
    tags: ["React", "TypeScript", "Supabase", "Node.js", "Vercel", "Gunmailer"],
    image: flyndrImg,
    repo: "https://github.com/myjeydsss" 
  },
  {
    title: "Untitled — In Progress",
    description:
      "Currently prototyping a new app. Designing the data model and core UI while iterating on workflows.",
    tags: ["React", "TypeScript"],
    image: inProgressImg // ✅ more unique than generic GIF
  }
]