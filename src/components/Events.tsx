import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Calendar, ArrowRight } from "lucide-react";

interface Event {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  category: "ongoing" | "past";
}

const events: Event[] = [
  {
    title: "Annual Literary Festival",
    date: "March 15-17, 2024",
    description: "Our flagship event featuring renowned authors, panel discussions, book launches, and creative writing competitions. A three-day celebration of literature.",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    category: "ongoing",
  },
  {
    title: "Poetry Slam Night",
    date: "Every 2nd Friday",
    description: "Monthly open mic event where members perform original poetry and spoken word. A supportive space for creative expression.",
    imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop",
    category: "ongoing",
  },
  {
    title: "Book Club: Modern Classics",
    date: "Ongoing - Monthly",
    description: "Monthly discussions of contemporary literary masterpieces. Currently reading 'The Overstory' by Richard Powers.",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
    category: "ongoing",
  },
  {
    title: "Creative Writing Workshop Series",
    date: "January - April 2024",
    description: "Weekly workshops covering fiction, poetry, and non-fiction. Led by published authors and faculty members.",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    category: "ongoing",
  },
  {
    title: "Shakespeare Festival 2023",
    date: "November 2023",
    description: "Week-long celebration featuring performances, lectures, and discussions on the Bard's timeless works. Attended by over 300 students.",
    imageUrl: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&h=400&fit=crop",
    category: "past",
  },
  {
    title: "Author Talk: Sarah Waters",
    date: "October 2023",
    description: "Intimate conversation with bestselling author Sarah Waters about her latest novel and writing process. Q&A session included.",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
    category: "past",
  },
  {
    title: "Summer Reading Challenge",
    date: "June - August 2023",
    description: "Members read and reviewed 15 books from diverse genres. Winners received book vouchers and recognition at our annual dinner.",
    imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop",
    category: "past",
  },
  {
    title: "Literary Journal Launch",
    date: "May 2023",
    description: "Debut of our quarterly literary journal 'The Wordsmith' featuring student poetry, short fiction, and critical essays.",
    imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&h=400&fit=crop",
    category: "past",
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState<"ongoing" | "past">("ongoing");

  const filteredEvents = events.filter(event => event.category === activeTab);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">
            Events & Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our exciting literary events and community initiatives
          </p>
        </div>

        <Tabs defaultValue="ongoing" className="w-full" onValueChange={(value) => setActiveTab(value as "ongoing" | "past")}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="ongoing" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Ongoing Events
            </TabsTrigger>
            <TabsTrigger value="past" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Past Highlights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ongoing" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const EventCard = ({ event }: { event: Event }) => (
  <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
    <div className="aspect-video overflow-hidden">
      <img 
        src={event.imageUrl} 
        alt={event.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 text-sm text-accent mb-3">
        <Calendar className="h-4 w-4" />
        <span>{event.date}</span>
      </div>
      <h3 className="font-poppins text-xl font-semibold text-primary mb-3">
        {event.title}
      </h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {event.description}
      </p>
      <Button variant="ghost" className="text-accent hover:text-accent/80 p-0 h-auto group/btn">
        Read More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
      </Button>
    </div>
  </Card>
);

export default Events;
