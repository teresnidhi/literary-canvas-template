import { useEffect, useRef, useState } from "react";
import aboutImage from "@/assets/about-books.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <img 
              src={aboutImage} 
              alt="Books and literary materials on desk" 
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
            />
          </div>

          {/* Text Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              The University Literary Society has been a cornerstone of campus culture for decades, fostering a deep appreciation for literature in all its forms. We bring together students, faculty, and literary enthusiasts to share ideas, discuss classic and contemporary works, and celebrate the written word.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Our society hosts regular reading sessions, author talks, creative writing workshops, and annual literary festivals. Whether you're a passionate reader, aspiring writer, or simply curious about literature, you'll find a welcoming community here.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that literature has the power to transform perspectives, spark conversations, and build lasting connections. Join us in exploring the rich tapestry of stories, poems, and ideas that shape our world.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <div className="text-3xl font-bold text-accent mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Annual Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">25</div>
                <div className="text-sm text-muted-foreground">Years History</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
