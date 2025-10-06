import Card from "@/components/Card";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import FeatureScroller from "@/components/FeatureScroller";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section - Linear inspired left alignment with noise texture */}
      <section className="px-6 py-20 md:py-32 texture-noise">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl" >
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-[var(--color-primary-600)]/20 border border-[var(--color-primary-600)]/30 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-2 animate-pulse"></span>
              <Typography variant="small" texture="primary" size="xs" weight="medium" marginBottom="none">
                AI-Powered Prediction
              </Typography>
            </div>
            
            <Typography variant="h1" texture="default" marginBottom="md">
              Prediksi Harga Kos
              <br />
              <span className="text-texture-hero">Cerdas & Akurat</span>
            </Typography>
            
            <Typography variant="p" texture="muted" size="xl" marginBottom="4xl">
              Platform AI yang membantu mahasiswa, pemilik properti, dan agen real estat 
              membuat keputusan tepat dengan prediksi harga kos berdasarkan data real-time.
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="primary" 
                size="lg" 
                href="/predict"
                className="group"
              >
                Mulai Prediksi
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                href="/about"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
            
            {/* Stats - Superhuman inspired highlighting */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center sm:text-left">
                <Typography variant="h3" texture="primary" className="text-texture-primary" marginBottom="xs">
                  90%+
                </Typography>
                <Typography variant="small" texture="muted" marginBottom="none">
                  Akurasi Prediksi
                </Typography>
              </div>
              <div className="text-center sm:text-left">
                <Typography variant="h3" texture="primary" className="text-texture-primary" marginBottom="xs">
                  15K+
                </Typography>
                <Typography variant="small" texture="muted" marginBottom="none">
                  Data Kos
                </Typography>
              </div>
              <div className="text-center sm:text-left">
                <Typography variant="h3" texture="primary" className="text-texture-primary" marginBottom="xs">
                  50+
                </Typography>
                <Typography variant="small" texture="muted" marginBottom="none">
                  Kota Indonesia
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Superhuman center alignment with gradient noise texture */}
      <section className="px-6 py-20 texture-gradient-noise">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Typography variant="h2" texture="default">
              Fitur Unggulan
            </Typography>
            <Typography variant="p" texture="muted" size="lg" marginBottom="lg">
              Teknologi AI terdepan untuk prediksi harga kos yang akurat dan insights mendalam.
            </Typography>
          </div>
          
          {/* Feature Scroller Component */}
          <FeatureScroller />
        </div>
      </section>

      {/* Preview Section - Linear style with subtle texture */}
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

      {/* Technology Stack - Superhuman center style with dots texture */}
      <section className="px-6 py-20 texture-dots">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Typography variant="h2" texture="default">
              Teknologi yang Digunakan
            </Typography>
            <Typography variant="p" texture="muted" size="lg">
              Stack teknologi modern dan reliable untuk performa optimal dan scalability.
            </Typography>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card variant="default" className="p-6 text-center backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <span className="text-3xl mb-3 block">⚛️</span>
              <Typography variant="h6" texture="default" marginBottom="md">
                Next.js 14
              </Typography>
              <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                React Framework
              </Typography>
            </Card>
            
            <Card variant="default" className="p-6 text-center backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <span className="text-3xl mb-3 block">🐍</span>
              <Typography variant="h6" texture="default" marginBottom="md">
                Python ML
              </Typography>
              <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                Machine Learning
              </Typography>
            </Card>
            
            <Card variant="default" className="p-6 text-center backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <span className="text-3xl mb-3 block">🎨</span>
              <Typography variant="h6" texture="default" marginBottom="md">
                TailwindCSS
              </Typography>
              <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                Styling Framework
              </Typography>
            </Card>
            
            <Card variant="default" className="p-6 text-center backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <span className="text-3xl mb-3 block">🤖</span>
              <Typography variant="h6" texture="default" marginBottom="md">
                TensorFlow
              </Typography>
              <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                AI Models
              </Typography>
            </Card>
          </div>
          
          {/* Additional tech details matching About page structure */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card variant="dark" className="p-8">
              <Typography variant="h5" texture="white" marginBottom="sm">
                Machine Learning Pipeline
              </Typography>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></span>
                  <Typography variant="span" texture="white" size="sm">Scikit-learn untuk preprocessing</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></span>
                  <Typography variant="span" texture="white" size="sm">TensorFlow untuk deep learning</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></span>
                  <Typography variant="span" texture="white" size="sm">Pandas untuk data manipulation</Typography>
                </div>
              </div>
            </Card>
            
            <Card variant="default" className="p-8 backdrop-blur-sm">
              <Typography variant="h5" texture="default" marginBottom="sm">
                Frontend Architecture
              </Typography>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></span>
                  <Typography variant="span" texture="muted" size="sm">TypeScript untuk type safety</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></span>
                  <Typography variant="span" texture="muted" size="sm">Server-side rendering</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full"></span>
                  <Typography variant="span" texture="muted" size="sm">Progressive Web App</Typography>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Superhuman inspired with gradient noise texture */}
      <section className="px-6 py-20 texture-gradient-noise">
        <div className="max-w-4xl mx-auto text-center">
          <Card variant="gradient" className="p-12 text-center relative overflow-hidden">
            <Typography variant="h2" texture="white">
              Siap Mulai Prediksi?
            </Typography>
            <Typography variant="p" texture="white" size="lg" className="opacity-90 relative z-10">
              Bergabung dengan ribuan pengguna yang sudah merasakan kemudahan prediksi harga kos dengan AI.
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button 
                variant="light" 
                size="lg"
                href="/predict"
                className="group"
              >
                Coba Sekarang
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="/about"
                className="border-white/30 text-white hover:bg-white/20 hover:text-white"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Proof - Linear style with subtle texture background */}
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
            <Card variant="default" className="p-8 backdrop-blur-sm h-full flex flex-col">
              <div className="flex-grow">
                <Typography variant="p" texture="muted" size="sm" className="italic leading-relaxed">
                  &quot;Sangat membantu dalam mencari kos dengan budget yang tepat. Prediksinya akurat dan mudah digunakan!&quot;
                </Typography>
              </div>
              
              <div className="border-t border-[var(--color-primary-600)]/20 pt-6 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-300)] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-lg"></span>
                  </div>
                  <div className="flex-1">
                    <Typography variant="h6" texture="default" weight="semibold">
                      Ahmad Rizki
                    </Typography>
                    <Typography variant="small" texture="muted" size="xs">
                      Mahasiswa UI
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card variant="default" className="p-8 backdrop-blur-sm h-full flex flex-col">
              <div className="flex-grow">
                <Typography variant="p" texture="muted" size="sm" className="italic leading-relaxed">
                  &quot;Platform yang sangat inovatif. Membantu saya menentukan harga sewa yang kompetitif dan wajar.&quot;
                </Typography>
              </div>
              
              <div className="border-t border-[var(--color-primary-600)]/20 pt-6 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-300)] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-lg"></span>
                  </div>
                  <div className="flex-1">
                    <Typography variant="h6" texture="default" weight="semibold">
                      Sari Wulandari
                    </Typography>
                    <Typography variant="small" texture="muted" size="xs">
                      Pemilik Kos
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card variant="default" className="p-8 backdrop-blur-sm h-full flex flex-col">
              <div className="flex-grow">
                <Typography variant="p" texture="muted" size="sm" className="italic leading-relaxed">
                  &quot;Interface yang clean dan hasil prediksi yang dapat diandalkan untuk membantu klien saya.&quot;
                </Typography>
              </div>
              
              <div className="border-t border-[var(--color-primary-600)]/20 pt-6 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-lg"></span>
                  </div>
                  <div className="flex-1">
                    <Typography variant="h6" texture="default" weight="semibold">
                      Budi Santoso
                    </Typography>
                    <Typography variant="small" texture="muted" size="xs">
                      Agen Properti
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
