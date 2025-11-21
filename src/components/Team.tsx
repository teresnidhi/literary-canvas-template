import { Card } from "./ui/card";
import { Mail, Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  email: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Emma Richardson",
    role: "President",
    bio: "Literature major passionate about Victorian novels and modern poetry. Leading our society with vision and dedication.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    email: "emma.r@university.edu",
    linkedin: "#",
  },
  {
    name: "James Chen",
    role: "Vice President",
    bio: "English & Philosophy double major. Specializes in organizing author talks and panel discussions.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    email: "james.c@university.edu",
    linkedin: "#",
  },
  {
    name: "Sophia Martinez",
    role: "Events Coordinator",
    bio: "Creative Writing student with a flair for organizing memorable literary events and workshops.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    email: "sophia.m@university.edu",
  },
  {
    name: "Oliver Thompson",
    role: "Publications Editor",
    bio: "Journalism major managing our quarterly magazine and online literary journal. Published poet.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    email: "oliver.t@university.edu",
    linkedin: "#",
  },
  {
    name: "Ava Patel",
    role: "Community Outreach",
    bio: "Sociology & English major building partnerships with local libraries and literary organizations.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    email: "ava.p@university.edu",
  },
  {
    name: "Lucas Williams",
    role: "Treasurer",
    bio: "Economics & Literature double major ensuring smooth financial operations for all our activities.",
    imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
    email: "lucas.w@university.edu",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated individuals who make our literary community thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card 
              key={member.name} 
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-poppins text-xl font-semibold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-full bg-secondary hover:bg-accent/10 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4 text-primary" />
                  </a>
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      className="p-2 rounded-full bg-secondary hover:bg-accent/10 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="h-4 w-4 text-primary" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
