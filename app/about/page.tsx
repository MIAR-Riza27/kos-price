import Card from "@/components/Card";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import FeatureScroller from "@/components/FeatureScroller";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Hero Section - Linear inspired left alignment */}
            <section className="px-6 py-20 md:py-32 texture-noise">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-[var(--color-primary-600)]/20 border border-[var(--color-primary-600)]/30 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-2 animate-pulse"></span>
                            <Typography variant="small" texture="primary" size="xs" weight="medium" marginBottom="none">
                                About KosPrice
                            </Typography>
                        </div>
                        
                        <Typography variant="h1" texture="default" marginBottom="md">
                            KosPrice
                            <br />
                            <span className="text-texture-hero">Prediksi Harga Kos</span>
                        </Typography>
                        
                        <Typography variant="p" texture="muted" size="xl" marginBottom="4xl">
                            KosPrice hadir sebagai solusi inovatif yang membantu mahasiswa, pemilik properti, 
                            dan agen real estat membuat keputusan tepat dengan teknologi AI yang canggih.
                        </Typography>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button 
                                variant="primary" 
                                size="lg" 
                                href="/predict"
                                className="group"
                            >
                                Coba Prediksi
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Button>
                            <Button 
                                variant="outline" 
                                size="lg" 
                                href="/history"
                            >
                                Lihat Riwayat
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Purpose & Mission - Linear style */}
            <section className="px-6 py-20 bg-[var(--background-light-alt)] texture-dots">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <Typography variant="h2" texture="default">
                                Misi Kami
                            </Typography>
                            <Typography variant="p" texture="muted" size="lg">
                                Menciptakan ekosistem pencarian kos yang transparan, efisien, dan berbasis data 
                                untuk mengatasi kesulitan mahasiswa dalam menemukan hunian yang sesuai budget.
                            </Typography>
                            <div className="space-y-4">
                                <div className="flex items-start gap-2">
                                    <div className="w-6 h-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-300)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                    </div>
                                    <Typography variant="p" texture="muted" size="sm" marginBottom="none">
                                        Memberikan prediksi harga yang akurat dan dapat diandalkan
                                    </Typography>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-300)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                    </div>
                                    <Typography variant="p" texture="muted" size="sm" marginBottom="none">
                                        Mempermudah decision making bagi semua stakeholder
                                    </Typography>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                    </div>
                                    <Typography variant="p" texture="muted" size="sm" marginBottom="none">
                                        Menciptakan pasar kos yang lebih fair dan kompetitif
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        
                        <Card variant="primary" className="p-8 text-center">
                            <Typography variant="h3" texture="white">
                                15,000+
                            </Typography>
                            <Typography variant="p" texture="white" size="sm" className="opacity-90">
                                Data kos dari 50+ kota di Indonesia telah dianalisis untuk menciptakan model prediksi yang akurat
                            </Typography>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                                    <Typography variant="h5" texture="white">90%+</Typography>
                                    <Typography variant="small" texture="white" size="xs">Akurasi</Typography>
                                </div>
                                <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                                    <Typography variant="h5" texture="white">50+</Typography>
                                    <Typography variant="small" texture="white" size="xs">Kota</Typography>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Features Section - Superhuman center alignment */}
            <section className="px-6 py-20 texture-gradient-noise">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Typography variant="h2" texture="default">
                            Fitur Unggulan
                        </Typography>
                        <Typography variant="p" texture="muted" size="lg">
                            Teknologi canggih yang membuat prediksi harga kos menjadi mudah dan akurat.
                        </Typography>
                    </div>
                    
                    {/* Feature Scroller Component */}
                    <FeatureScroller />
                </div>
            </section>

            {/* Data Sources - Linear style grid */}
            <section className="px-6 py-20 bg-[var(--background-light-alt)] texture-subtle">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-12">
                        <Typography variant="h2" texture="default">
                            Sumber Data
                        </Typography>
                        <Typography variant="p" texture="muted" size="lg">
                            Model AI kami dilatih menggunakan dataset komprehensif dari berbagai sumber terpercaya 
                            untuk menghasilkan prediksi yang akurat dan up-to-date.
                        </Typography>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card variant="default" className="p-6 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-300)] rounded-full flex items-center justify-center mb-4">
                                <span className="text-xl"></span>
                            </div>
                            <Typography variant="h5" texture="default">
                                Marketplace Properti
                            </Typography>
                            <Typography variant="p" texture="muted" size="sm">
                                Data real-time dari platform populer seperti Mamikos, InfoKost, dan berbagai 
                                marketplace properti terpercaya lainnya.
                            </Typography>
                        </Card>
                        
                        <Card variant="default" className="p-6 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-300)] rounded-full flex items-center justify-center mb-4">
                                <span className="text-xl"></span>
                            </div>
                            <Typography variant="h5" texture="default">
                                Data Geografis
                            </Typography>
                            <Typography variant="p" texture="muted" size="sm">
                                Informasi lokasi, jarak ke kampus, fasilitas umum, dan aksesibilitas transportasi 
                                untuk analisis berbasis lokasi yang presisi.
                            </Typography>
                        </Card>
                        
                        <Card variant="default" className="p-6 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mb-4">
                                <span className="text-xl"></span>
                            </div>
                            <Typography variant="h5" texture="default">
                                Survei Lapangan
                            </Typography>
                            <Typography variant="p" texture="muted" size="sm">
                                Data primer dari survei langsung di berbagai area strategis dan feedback 
                                dari pengguna untuk validasi model prediksi.
                            </Typography>
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

            {/* Version & Development Info - Linear style */}
            <section className="px-6 py-20 bg-[var(--background-light-alt)] texture-subtle">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <Typography variant="h2" texture="default">
                                Informasi Pengembangan
                            </Typography>
                            
                            <div className="space-y-8">
                                <div>
                                    <Typography variant="h5" texture="default" marginBottom="sm">
                                        Versi Saat Ini
                                    </Typography>
                                    <Card variant="secondary" className="inline-flex items-center px-4 py-2 mb-4">
                                        <Typography variant="span" texture="white" weight="bold" marginBottom="none">
                                            v4.1.0
                                        </Typography>
                                    </Card>
                                    <Typography variant="p" texture="muted" size="sm" marginBottom="none">
                                        Memiliki model yang sudah ditingkatkan dengan akurasi lebih dari 90%. 
                                    </Typography>
                                </div>
                                
                                <div>
                                    <Typography variant="h5" texture="default" marginBottom="sm">
                                        Lisensi
                                    </Typography>
                                    <Typography variant="p" texture="muted" size="sm" marginBottom="none">
                                        KosPrice dikembangkan sebagai platform open-source dengan lisensi MIT. 
                                        Kami percaya pada transparansi dan kolaborasi dalam pengembangan teknologi.
                                    </Typography>
                                </div>
                                
                                <div>
                                    <Typography variant="h5" texture="default" marginBottom="sm">
                                        Roadmap
                                    </Typography>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></span>
                                            <Typography variant="span" texture="muted" size="sm" marginBottom="none">Mobile app development</Typography>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></span>
                                            <Typography variant="span" texture="muted" size="sm" marginBottom="none">Real-time market insights</Typography>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></span>
                                            <Typography variant="span" texture="muted" size="sm" marginBottom="none">Advanced filtering system</Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            {/* Developer Card - Enhanced */}
                            <Card variant="primary" className="p-8 text-center">
                                <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-sm">
                                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                                    <Typography variant="small" texture="white" size="xs" weight="medium" marginBottom="none">
                                        Developer
                                    </Typography>
                                </div>
                                
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                                    <span className="text-3xl"></span>
                                </div>
                                
                                <Typography variant="h4" texture="white" marginBottom="xs">
                                    MIARRiza27
                                </Typography>
                                <Typography variant="p" texture="white" size="sm" className="opacity-90" marginBottom="none">
                                    Data Scientist & Full Stack Developer dengan pengalaman dalam machine learning dan web development modern.
                                </Typography>
                            </Card>
                            
                            {/* Contact & Support Card - Enhanced with prominent icons */}
                            <Card variant="default" className="p-8 backdrop-blur-sm">
                                <div className="text-center mb-6">
                                    <Typography variant="h4" texture="default" marginBottom="xs">
                                        Kontak & Dukungan
                                    </Typography>
                                    <Typography variant="p" texture="muted" size="sm" marginBottom="none">
                                        Hubungi kami untuk pertanyaan, feedback, atau kolaborasi
                                    </Typography>
                                </div>
                                
                                <div className="space-y-4">
                                    {/* Email Contact */}
                                    <Card variant="secondary" className="p-4 hover:scale-105 transition-all duration-300">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                                                <span className="text-xl"></span>
                                            </div>
                                            <div className="flex-1">
                                                <Typography variant="span" texture="white" size="sm" weight="medium" marginBottom="none">
                                                    Email
                                                </Typography>
                                                <Typography variant="small" texture="white" size="xs" className="opacity-90 block" marginBottom="none">
                                                    ipnualvariza@gmail.com
                                                </Typography>
                                            </div>
                                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                                <span className="text-sm">→</span>
                                            </div>
                                        </div>
                                    </Card>

                                    {/* GitHub Contact */}
                                    <Card variant="default" className="p-4 border border-[var(--color-primary-600)]/30 hover:scale-105 transition-all duration-300 hover:border-[var(--color-primary)]/50">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-300)] rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-xl"></span>
                                            </div>
                                            <div className="flex-1">
                                                <Typography variant="span" texture="default" size="sm" weight="medium" marginBottom="none">
                                                    GitHub
                                                </Typography>
                                                <Typography variant="small" texture="muted" size="xs" className="block" marginBottom="none">
                                                    github.com/MIAR-Riza27
                                                </Typography>
                                            </div>
                                            <div className="w-8 h-8 bg-[var(--color-primary-600)]/20 rounded-full flex items-center justify-center">
                                                <span className="text-sm text-[var(--color-primary)]">→</span>
                                            </div>
                                        </div>
                                    </Card>

                                    {/* LinkedIn Contact */}
                                    <Card variant="default" className="p-4 border border-[var(--color-secondary-600)]/30 hover:scale-105 transition-all duration-300 hover:border-[var(--color-secondary)]/50">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-300)] rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-xl"></span>
                                            </div>
                                            <div className="flex-1">
                                                <Typography variant="span" texture="default" size="sm" weight="medium" marginBottom="none">
                                                    LinkedIn
                                                </Typography>
                                                <Typography variant="small" texture="muted" size="xs" className="block" marginBottom="none">
                                                    muhammadibnualvariza
                                                </Typography>
                                            </div>
                                            <div className="w-8 h-8 bg-[var(--color-secondary-600)]/20 rounded-full flex items-center justify-center">
                                                <span className="text-sm text-[var(--color-secondary)]">→</span>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                                
                                {/* Quick Actions */}
                                <div className="mt-6 pt-6 border-t border-[var(--color-primary-600)]/20">
                                    <Typography variant="small" texture="muted" size="xs" className="text-center block mb-4" marginBottom="none">
                                        Atau laporkan bug & request fitur
                                    </Typography>
                                    <div className="flex gap-3">
                                        <Button variant="outline" size="sm" className="flex-1">
                                            🐛 Report Bug
                                        </Button>
                                        <Button variant="outline" size="sm" className="flex-1">
                                            💡 Request Feature
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Superhuman style */}
            <section className="px-6 py-20 texture-gradient-noise">
                <div className="max-w-4xl mx-auto text-center">
                    <Card variant="gradient" className="p-12 text-center relative overflow-hidden">
                        <Typography variant="h2" texture="white">
                            Siap Menggunakan KosPrice?
                        </Typography>
                        <Typography variant="p" texture="white" size="lg" className="opacity-90 relative z-10">
                            Bergabunglah dengan ribuan pengguna yang sudah merasakan kemudahan prediksi harga kos dengan AI.
                        </Typography>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <Button 
                                variant="light" 
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
                                href="/"
                                className="border-white/30 text-white hover:bg-white/20 hover:text-white"
                            >
                                Kembali ke Beranda
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>
        </main>
    );
}
