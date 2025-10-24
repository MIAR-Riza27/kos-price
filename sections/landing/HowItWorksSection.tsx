import Typography from "@/components/Typography";
import Card from "@/components/Card";

export default function HowItWorksSection() {
  return (
    <section className="px-6 py-20 bg-[var(--background-light-alt)] texture-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content - Linear style */}
          <div>
            <Typography variant="h2" texture="default">
              Cara Kerja Platform
            </Typography>
            <Typography variant="p" texture="muted" size="lg">
              Proses prediksi yang sederhana namun powerful, didukung teknologi AI terdepan.
            </Typography>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-200)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <Typography variant="small" texture="white" size="xs" weight="bold" marginBottom="none">1</Typography>
                </div>
                <div>
                  <Typography variant="h6" texture="default">
                    Input Data Kos
                  </Typography>
                  <Typography variant="p" texture="muted" size="sm" marginBottom="none">
                    Masukkan informasi lokasi, jenis kos, fasilitas, dan spesifikasi lainnya.
                  </Typography>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-200)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <Typography variant="small" texture="white" size="xs" weight="bold" marginBottom="none">2</Typography>
                </div>
                <div>
                  <Typography variant="h6" texture="default">
                    AI Processing
                  </Typography>
                  <Typography variant="p" texture="muted" size="sm" marginBottom="none">
                    Model machine learning menganalisis data dengan algoritma canggih.
                  </Typography>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-200)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <Typography variant="small" texture="white" size="xs" weight="bold" marginBottom="none">3</Typography>
                </div>
                <div>
                  <Typography variant="h6" texture="default">
                    Prediksi Akurat
                  </Typography>
                  <Typography variant="p" texture="muted" size="sm" marginBottom="none">
                    Dapatkan estimasi harga dengan tingkat akurasi 90%+ dan insights mendalam.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right visual - Superhuman inspired frame */}
          <Card variant="primary" className="p-8 text-center">
            <Typography variant="h3" texture="white">
              Rp 1.850.000
            </Typography>
            <Typography variant="p" texture="white" size="sm" className="opacity-90">
              Estimasi harga untuk kos putra di area Universitas Indonesia
            </Typography>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                <Typography variant="small" texture="white" size="xs" marginBottom="none">
                  Jarak ke kampus: 500m
                </Typography>
              </div>
              <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                <Typography variant="small" texture="white" size="xs" marginBottom="none">
                  Fasilitas lengkap: WiFi, AC, Kamar Mandi Dalam
                </Typography>
              </div>
              <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                <Typography variant="small" texture="white" size="xs" marginBottom="none">
                  Tingkat akurasi: 94%
                </Typography>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}