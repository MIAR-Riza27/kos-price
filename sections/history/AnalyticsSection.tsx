import Typography from "@/components/Typography";
import Card from "@/components/Card";

export default function AnalyticsSection() {
  return (
    <section className="px-6 py-20 bg-[var(--background-light-alt)] texture-subtle" id="analytics">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <Typography variant="h2" texture="default">
            Analisis Prediksi
          </Typography>
          <Typography variant="p" texture="muted" size="lg">
            Insights dan trends dari semua prediksi yang telah Anda lakukan untuk membantu decision making.
          </Typography>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Harga Rata-rata Card */}
          <Card variant="default" className="p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-300)] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">📊</span>
              </div>
              <div className="flex-1">
                <Typography variant="h5" texture="default" marginBottom="xs">
                  Harga Rata-rata
                </Typography>
                <Typography variant="h4" texture="primary" weight="bold" marginBottom="sm">
                  Rp 1.412.500
                </Typography>
                <Typography variant="p" texture="muted" size="sm" marginBottom="none">
                  Rata-rata harga kos yang diprediksi dalam 30 hari terakhir berdasarkan semua data yang tersimpan.
                </Typography>
              </div>
            </div>
          </Card>

          {/* Akurasi Tertinggi Card */}
          <Card variant="default" className="p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-300)] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🎯</span>
              </div>
              <div className="flex-1">
                <Typography variant="h5" texture="default" marginBottom="xs">
                  Akurasi Tertinggi
                </Typography>
                <Typography variant="h4" texture="secondary" weight="bold" marginBottom="sm">
                  96%
                </Typography>
                <Typography variant="p" texture="muted" size="sm" marginBottom="none">
                  Prediksi terbaik untuk kos putra di area Yogyakarta dengan fasilitas lengkap dan lokasi strategis.
                </Typography>
              </div>
            </div>
          </Card>
        </div>

        {/* Trend Analysis Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Trend Harga Card */}
          <Card variant="primary" className="p-6 text-center">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-white/20 backdrop-blur-sm">
              <Typography variant="small" texture="white" size="xs" weight="medium" marginBottom="none">
                Trend Utama
              </Typography>
            </div>
            
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">📈</span>
            </div>
            
            <Typography variant="h5" texture="white" marginBottom="xs">
              +15-25%
            </Typography>
            <Typography variant="small" texture="white" size="sm" className="opacity-90" marginBottom="lg">
              Harga kos dekat kampus lebih tinggi dari area umum
            </Typography>
            
            <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
              <Typography variant="small" texture="white" size="xs" marginBottom="none">
                📍 Radius &lt; 500m dari kampus
              </Typography>
            </div>
          </Card>

          {/* Lokasi Terpopuler Card */}
          <Card variant="default" className="p-6 text-center backdrop-blur-sm">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-[var(--color-primary-600)]/20 border border-[var(--color-primary-600)]/30 backdrop-blur-sm">
              <Typography variant="small" texture="primary" size="xs" weight="medium" marginBottom="none">
                Populer
              </Typography>
            </div>
            
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-300)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🏙️</span>
            </div>
            
            <Typography variant="h5" texture="default" marginBottom="xs">
              Jakarta
            </Typography>
            <Typography variant="small" texture="muted" size="sm" marginBottom="lg">
              Kota dengan prediksi terbanyak (42% dari total)
            </Typography>
            
            <div className="space-y-2">
              <div className="bg-[var(--color-primary-600)]/10 rounded-lg p-2">
                <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                  💰 Rata-rata: Rp 1.725.000
                </Typography>
              </div>
              <div className="bg-[var(--color-primary-600)]/10 rounded-lg p-2">
                <Typography variant="small" texture="secondary" size="xs" weight="bold" marginBottom="none">
                  🎯 Akurasi rata-rata: 93%
                </Typography>
              </div>
            </div>
          </Card>

          {/* Fasilitas Terpopuler Card */}
          <Card variant="default" className="p-6 text-center backdrop-blur-sm">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-[var(--color-primary-600)]/20 border border-[var(--color-primary-600)]/30 backdrop-blur-sm">
              <Typography variant="small" texture="primary" size="xs" weight="medium" marginBottom="none">
                Fasilitas
              </Typography>
            </div>
            
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-300)] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">⚡</span>
            </div>
            
            <Typography variant="h5" texture="default" marginBottom="xs">
              WiFi + AC
            </Typography>
            <Typography variant="small" texture="muted" size="sm" marginBottom="lg">
              Kombinasi fasilitas paling dicari (83% kasus)
            </Typography>
            
            <div className="space-y-2">
              <div className="bg-[var(--color-primary-600)]/10 rounded-lg p-2">
                <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                  💰 Premium: +Rp 300.000
                </Typography>
              </div>
              <div className="bg-[var(--color-primary-600)]/10 rounded-lg p-2">
                <Typography variant="small" texture="secondary" size="xs" weight="bold" marginBottom="none">
                  📊 Impact: +18% harga
                </Typography>
              </div>
            </div>
          </Card>
        </div>

        {/* Summary Statistics Card */}
        <Card variant="secondary" className="p-8 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            <Typography variant="small" texture="white" size="xs" weight="medium" marginBottom="none">
              Ringkasan Data
            </Typography>
          </div>
          
          <Typography variant="h3" texture="white" marginBottom="xs">
            12 Total Prediksi
          </Typography>
          <Typography variant="p" texture="white" size="sm" className="opacity-90" marginBottom="xl">
            Prediksi yang telah dilakukan dengan rata-rata akurasi 94% dan insights mendalam
          </Typography>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <Typography variant="h4" texture="white" marginBottom="xs">58%</Typography>
              <Typography variant="small" texture="white" size="xs" marginBottom="xs">
                Kos Putra
              </Typography>
              <Typography variant="small" texture="white" size="xs" className="opacity-80" marginBottom="none">
                Dominasi prediksi
              </Typography>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <Typography variant="h4" texture="white" marginBottom="xs">42%</Typography>
              <Typography variant="small" texture="white" size="xs" marginBottom="xs">
                Kos Putri
              </Typography>
              <Typography variant="small" texture="white" size="xs" className="opacity-80" marginBottom="none">
                Permintaan stabil
              </Typography>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <Typography variant="h4" texture="white" marginBottom="xs">75%</Typography>
              <Typography variant="small" texture="white" size="xs" marginBottom="xs">
                Dekat Kampus
              </Typography>
              <Typography variant="small" texture="white" size="xs" className="opacity-80" marginBottom="none">
                Lokasi strategis
              </Typography>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}