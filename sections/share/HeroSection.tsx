import Typography from "@/components/Typography";
import Button from "@/components/Button";

interface HeroSectionProps {
  variant?: 'landing' | 'about' | 'history';
}

export default function HeroSection({ variant = 'landing' }: HeroSectionProps) {
  const content = {
    landing: {
      badge: "AI-Powered Prediction",
      title: "Prediksi Harga Kos",
      titleAccent: "Cerdas & Akurat",
      description: "Platform AI yang membantu mahasiswa, pemilik properti, dan agen real estat membuat keputusan tepat dengan prediksi harga kos berdasarkan data real-time.",
      primaryButton: { text: "Mulai Prediksi", href: "/predict" },
      secondaryButton: { text: "Pelajari Lebih Lanjut", href: "/about" },
      showStats: true,
      stats: [
        { value: "90%+", label: "Akurasi Prediksi" },
        { value: "15K+", label: "Data Kos" },
        { value: "50+", label: "Kota Indonesia" }
      ]
    },
    about: {
      badge: "About KosPrice",
      title: "KosPrice",
      titleAccent: "Prediksi Harga Kos",
      description: "KosPrice hadir sebagai solusi inovatif yang membantu mahasiswa, pemilik properti, dan agen real estat membuat keputusan tepat dengan teknologi AI yang canggih.",
      primaryButton: { text: "Coba Prediksi", href: "/predict" },
      secondaryButton: { text: "Lihat Riwayat", href: "/history" },
      showStats: false,
      stats: []
    },
    history: {
      badge: "Riwayat Prediksi",
      title: "Riwayat Prediksi",
      titleAccent: "Harga Kos",
      description: "Lihat kembali semua prediksi harga kos yang pernah Anda lakukan. Analisis trend dan bandingkan hasil untuk mendapatkan insights yang lebih mendalam.",
      primaryButton: { text: "Prediksi Baru", href: "/predict" },
      secondaryButton: { text: "Analisis Data", href: "#analytics" },
      showStats: true,
      stats: [
        { value: "12", label: "Total Prediksi" },
        { value: "94%", label: "Rata-rata Akurasi" },
        { value: "7", label: "Hari Terakhir" }
      ]
    }
  };

  const currentContent = content[variant];

  return (
    <section className="px-6 py-20 md:py-32 texture-noise">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-[var(--color-primary-600)]/20 border border-[var(--color-primary-600)]/30 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-2 animate-pulse"></span>
            <Typography variant="small" texture="primary" size="xs" weight="medium" marginBottom="none">
              {currentContent.badge}
            </Typography>
          </div>
          
          <Typography variant="h1" texture="default" marginBottom="md">
            {currentContent.title}
            <br />
            <span className="text-texture-hero">{currentContent.titleAccent}</span>
          </Typography>
          
          <Typography variant="p" texture="muted" size="xl" marginBottom="4xl">
            {currentContent.description}
          </Typography>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              variant="primary" 
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
            >
              {currentContent.secondaryButton.text}
            </Button>
          </div>
          
          {/* Stats - Dynamic based on variant */}
          {currentContent.showStats && (
            <div className="flex flex-wrap gap-8">
              {currentContent.stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <Typography variant="h3" texture="primary" className="text-texture-primary" marginBottom="xs">
                    {stat.value}
                  </Typography>
                  <Typography variant="small" texture="muted" marginBottom="none">
                    {stat.label}
                  </Typography>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}