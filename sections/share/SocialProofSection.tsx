import Typography from "@/components/Typography";
import Card from "@/components/Card";

export default function SocialProofSection() {
  const testimonials = [
    {
      quote: "Sangat membantu dalam mencari kos dengan budget yang tepat. Prediksinya akurat dan mudah digunakan!",
      name: "Ahmad Rizki",
      role: "Mahasiswa UI",
      gradient: "from-[var(--color-primary)] to-[var(--color-primary-300)]"
    },
    {
      quote: "Platform yang sangat inovatif. Membantu saya menentukan harga sewa yang kompetitif dan wajar.",
      name: "Sari Wulandari", 
      role: "Pemilik Kos",
      gradient: "from-[var(--color-secondary)] to-[var(--color-secondary-300)]"
    },
    {
      quote: "Interface yang clean dan hasil prediksi yang dapat diandalkan untuk membantu klien saya.",
      name: "Budi Santoso",
      role: "Agen Properti", 
      gradient: "from-[var(--color-primary)] to-[var(--color-secondary)]"
    }
  ];

  return (
    <section className="px-6 py-20 bg-[var(--background-light-alt)] texture-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <Typography variant="h2" texture="default">
            Dipercaya Pengguna
          </Typography>
          <Typography variant="p" texture="muted" size="lg">
            Feedback positif dari mahasiswa, pemilik properti, dan agen real estat yang menggunakan platform kami.
          </Typography>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="default" className="p-8 backdrop-blur-sm h-full flex flex-col">
              <div className="flex-grow">
                <Typography variant="p" texture="muted" size="sm" className="italic leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </Typography>
              </div>
              
              <div className="border-t border-[var(--color-primary-600)]/20 pt-6 mt-auto">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center shadow-md`}>
                    <span className="text-lg">👤</span>
                  </div>
                  <div className="flex-1">
                    <Typography variant="h6" texture="default" weight="semibold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="small" texture="muted" size="xs">
                      {testimonial.role}
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}