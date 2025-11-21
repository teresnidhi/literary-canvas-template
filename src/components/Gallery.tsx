const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=800&fit=crop",
    alt: "Annual literary festival with attendees",
  },
  {
    url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
    alt: "Author book signing event",
  },
  {
    url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=600&fit=crop",
    alt: "Students reading together",
  },
  {
    url: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop",
    alt: "Poetry slam performance",
  },
  {
    url: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&h=800&fit=crop",
    alt: "Shakespeare festival performance",
  },
  {
    url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=600&fit=crop",
    alt: "Book club meeting discussion",
  },
  {
    url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    alt: "Creative writing workshop session",
  },
  {
    url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&h=800&fit=crop",
    alt: "Literary journal publications display",
  },
  {
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
    alt: "Library study session with members",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments captured from our literary journey
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="break-inside-avoid group cursor-pointer overflow-hidden rounded-lg"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
