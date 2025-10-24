import Typography from "@/components/Typography";
import Button from "@/components/Button";
import Card from "@/components/Card";

interface CTASectionProps {
  variant?: 'landing' | 'about' | 'predict' | 'history';
}

export default function CTASection({ variant = 'landing' }: CTASectionProps) {
  const content = {
    landing: {
      title: "Siap Mulai Prediksi?",
      description: "Bergabung dengan ribuan pengguna yang sudah merasakan kemudahan prediksi harga kos dengan AI.",
      primaryButton: { text: "Coba Sekarang", href: "/predict" },
      secondaryButton: { text: "Pelajari Lebih Lanjut", href: "/about" }
    },
    about: {
      title: "Siap Menggunakan KosPrice?",
      description: "Bergabunglah dengan ribuan pengguna yang sudah merasakan kemudahan prediksi harga kos dengan AI.",
      primaryButton: { text: "Mulai Prediksi", href: "/predict" },
      secondaryButton: { text: "Kembali ke Beranda", href: "/" }
    },
    predict: {
      title: "Mulai Prediksi Sekarang",
      description: "Dapatkan estimasi harga kos yang akurat dengan teknologi AI terdepan.",
      primaryButton: { text: "Prediksi Harga", href: "#form" },
      secondaryButton: { text: "Lihat Contoh", href: "/history" }
    },
    history: {
      title: "Prediksi Lebih Banyak?",
      description: "Lakukan prediksi baru atau pelajari lebih dalam tentang platform kami.",
      primaryButton: { text: "Prediksi Baru", href: "/predict" },
      secondaryButton: { text: "Tentang Platform", href: "/about" }
    }
  };

  const currentContent = content[variant];

  return (
    <section className="px-6 py-20 texture-gradient-noise">
      <div className="max-w-4xl mx-auto text-center">
        <Card variant="gradient" className="p-12 text-center relative overflow-hidden">
          <Typography variant="h2" texture="white">
            {currentContent.title}
          </Typography>
          <Typography variant="p" texture="white" size="lg" className="opacity-90 relative z-10">
            {currentContent.description}
          </Typography>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button 
              variant="light" 
              size="lg"
              href={currentContent.primaryButton.href}
              className="group"
            >
              {currentContent.primaryButton.text}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              href={currentContent.secondaryButton.href}
              className="border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              {currentContent.secondaryButton.text}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}