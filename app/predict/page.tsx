import Card from "@/components/Card";
import Button from "@/components/Button";
import Typography from "@/components/Typography";

export default function PredictPage() {
    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Hero Section - Linear inspired left alignment */}
            <section className="px-6 py-20 md:py-32 texture-noise">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-[var(--color-primary-600)]/20 border border-[var(--color-primary-600)]/30 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-2 animate-pulse"></span>
                            <Typography variant="small" texture="primary" size="xs" weight="medium" marginBottom="none">
                                AI-Powered Prediction
                            </Typography>
                        </div>
                        
                        <Typography variant="h1" texture="default" marginBottom="md">
                            Prediksi Harga Kos
                            <br />
                            <span className="text-texture-hero">Dengan AI</span>
                        </Typography>
                        
                        <Typography variant="p" texture="muted" size="xl" marginBottom="4xl">
                            Masukkan informasi detail tentang kos yang ingin diprediksi harganya. 
                            Model AI kami akan memberikan estimasi harga yang akurat berdasarkan data real-time.
                        </Typography>
                        
                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-8">
                            <div className="text-center sm:text-left">
                                <Typography variant="h4" texture="primary" className="text-texture-primary" marginBottom="xs">
                                    90%+
                                </Typography>
                                <Typography variant="small" texture="muted" marginBottom="none">
                                    Akurasi Model
                                </Typography>
                            </div>
                            <div className="text-center sm:text-left">
                                <Typography variant="h4" texture="primary" className="text-texture-primary" marginBottom="xs">
                                    ≤3s
                                </Typography>
                                <Typography variant="small" texture="muted" marginBottom="none">
                                    Waktu Prediksi
                                </Typography>
                            </div>
                            <div className="text-center sm:text-left">
                                <Typography variant="h4" texture="primary" className="text-texture-primary" marginBottom="xs">
                                    15K+
                                </Typography>
                                <Typography variant="small" texture="muted" marginBottom="none">
                                    Data Training
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Section - Linear style with subtle texture */}
            <section className="px-6 py-20 bg-[var(--background-light-alt)] texture-subtle">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <Typography variant="h2" texture="default">
                            Form Prediksi
                        </Typography>
                        <Typography variant="p" texture="muted" size="lg">
                            Isi form di bawah ini dengan lengkap untuk mendapatkan prediksi harga yang akurat.
                        </Typography>
                    </div>

                    <div className="space-y-8">
                        {/* Jenis Kos */}
                        <Card variant="default" className="p-8 backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-300)] rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl"></span>
                                </div>
                                <div className="flex-1">
                                    <Typography variant="h5" texture="default">
                                        Jenis Kos
                                    </Typography>
                                    <Typography variant="p" texture="muted" size="sm" marginBottom="lg">
                                        Pilih jenis kos yang akan diprediksi harganya.
                                    </Typography>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 border-2 border-[var(--color-primary-600)]/30 rounded-lg hover:border-[var(--color-secondary)] transition-all duration-300 cursor-pointer hover:scale-105">
                                            <div className="flex items-center gap-3">
                                                <span className="w-4 h-4 border-2 border-[var(--color-primary)] rounded-full"></span>
                                                <Typography variant="span" texture="default" weight="medium">
                                                    Kos Putra
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className="p-4 border-2 border-[var(--color-primary-600)]/30 rounded-lg hover:border-[var(--color-secondary)] transition-all duration-300 cursor-pointer hover:scale-105">
                                            <div className="flex items-center gap-3">
                                                <span className="w-4 h-4 border-2 border-[var(--color-primary)] rounded-full"></span>
                                                <Typography variant="span" texture="default" weight="medium">
                                                    Kos Putri
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Lokasi */}
                        <Card variant="default" className="p-8 backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-300)] rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl"></span>
                                </div>
                                <div className="flex-1">
                                    <Typography variant="h5" texture="default">
                                        Lokasi Kos
                                    </Typography>
                                    <Typography variant="p" texture="muted" size="sm" marginBottom="lg">
                                        Masukkan alamat lengkap atau area lokasi kos.
                                    </Typography>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <Typography variant="h6" texture="default" marginBottom="xs">
                                                Kota/Kabupaten
                                            </Typography>
                                            <input 
                                                type="text" 
                                                placeholder="Contoh: Depok, Jakarta Selatan, Bandung"
                                                className="w-full p-4 border-2 border-[var(--color-primary-600)]/30 rounded-lg focus:border-[var(--color-secondary)] transition-all duration-300 bg-[var(--background-light)] text-[var(--foreground)]"
                                            />
                                        </div>
                                        <div>
                                            <Typography variant="h6" texture="default" marginBottom="xs">
                                                Alamat Detail
                                            </Typography>
                                            <input 
                                                type="text" 
                                                placeholder="Contoh: Jl. Margonda Raya, Kemiri Muka"
                                                className="w-full p-4 border-2 border-[var(--color-primary-600)]/30 rounded-lg focus:border-[var(--color-secondary)] transition-all duration-300 bg-[var(--background-light)] text-[var(--foreground)]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Fasilitas */}
                        <Card variant="default" className="p-8 backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl"></span>
                                </div>
                                <div className="flex-1">
                                    <Typography variant="h5" texture="default">
                                        Fasilitas Kos
                                    </Typography>
                                    <Typography variant="p" texture="muted" size="sm" marginBottom="lg">
                                        Pilih fasilitas yang tersedia di kos.
                                    </Typography>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            'WiFi Gratis', 'AC', 'Kamar Mandi Dalam', 
                                            'Lemari Pakaian', 'Kasur & Bantal', 'Meja Belajar',
                                            'Dapur Bersama', 'Tempat Parkir', 'Keamanan 24 Jam'
                                        ].map((facility, index) => (
                                            <div key={index} className="p-3 border-2 border-[var(--color-primary-600)]/30 rounded-lg hover:border-[var(--color-secondary)] transition-all duration-300 cursor-pointer hover:scale-105">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-4 h-4 border-2 border-[var(--color-primary)] rounded"></span>
                                                    <Typography variant="span" texture="default" size="sm">
                                                        {facility}
                                                    </Typography>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Jarak Fasilitas Umum */}
                        <Card variant="default" className="p-8 backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-200)] rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl"></span>
                                </div>
                                <div className="flex-1">
                                    <Typography variant="h5" texture="default">
                                        Rata-Rata Jarak Fasilitas Umum
                                    </Typography>
                                    <Typography variant="p" texture="muted" size="sm" marginBottom="lg">
                                        Masukkan jarak rata-rata ke fasilitas umum terdekat.
                                    </Typography>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <Typography variant="h6" texture="default" marginBottom="xs">
                                                Minimarket/Warung
                                            </Typography>
                                            <div className="flex items-center gap-2">
                                                <input 
                                                    type="number" 
                                                    placeholder="500"
                                                    className="flex-1 p-4 border-2 border-[var(--color-primary-600)]/30 rounded-lg focus:border-[var(--color-secondary)] transition-all duration-300 bg-[var(--background-light)] text-[var(--foreground)]"
                                                />
                                                <Typography variant="span" texture="muted" size="sm">meter</Typography>
                                            </div>
                                        </div>
                                        <div>
                                            <Typography variant="h6" texture="default" marginBottom="xs">
                                                Transportasi Umum
                                            </Typography>
                                            <div className="flex items-center gap-2">
                                                <input 
                                                    type="number" 
                                                    placeholder="300"
                                                    className="flex-1 p-4 border-2 border-[var(--color-primary-600)]/30 rounded-lg focus:border-[var(--color-secondary)] transition-all duration-300 bg-[var(--background-light)] text-[var(--foreground)]"
                                                />
                                                <Typography variant="span" texture="muted" size="sm">meter</Typography>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Dekat Kampus */}
                        <Card variant="default" className="p-8 backdrop-blur-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary-300)] to-[var(--color-secondary)] rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl"></span>
                                </div>
                                <div className="flex-1">
                                    <Typography variant="h5" texture="default">
                                        Kedekatan dengan Kampus
                                    </Typography>
                                    <Typography variant="p" texture="muted" size="sm" marginBottom="lg">
                                        Apakah kos berada dekat dengan kampus atau universitas?
                                    </Typography>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 border-2 border-[var(--color-primary-600)]/30 rounded-lg hover:border-[var(--color-secondary)] transition-all duration-300 cursor-pointer hover:scale-105">
                                            <div className="flex items-center gap-3">
                                                <span className="w-4 h-4 border-2 border-[var(--color-primary)] rounded-full"></span>
                                                <div>
                                                    <Typography variant="span" texture="default" weight="medium">
                                                        Ya, Dekat Kampus
                                                    </Typography>
                                                    <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                                                        ≤ 1 km dari kampus
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 border-2 border-[var(--color-primary-600)]/30 rounded-lg hover:border-[var(--color-secondary)] transition-all duration-300 cursor-pointer hover:scale-105">
                                            <div className="flex items-center gap-3">
                                                <span className="w-4 h-4 border-2 border-[var(--color-primary)] rounded-full"></span>
                                                <div>
                                                    <Typography variant="span" texture="default" weight="medium">
                                                        Tidak Terlalu Dekat
                                                    </Typography>
                                                    <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                                                        {'>'} 1 km dari kampus
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Prediction Section - Superhuman center style */}
            <section className="px-6 py-20 texture-gradient-noise">
                <div className="max-w-4xl mx-auto text-center">
                    <Card variant="gradient" className="p-12 text-center relative overflow-hidden">
                        <Typography variant="h2" texture="white">
                            Siap Mendapatkan Prediksi?
                        </Typography>
                        <Typography variant="p" texture="white" size="lg" className="opacity-90 relative z-10">
                            Model AI akan menganalisis semua data yang Anda masukkan dan memberikan estimasi harga yang akurat.
                        </Typography>
                        
                        <div className="flex justify-center relative z-10">
                            <Button 
                                variant="light" 
                                size="lg"
                                className="group"
                            >
                                Mulai Prediksi!!
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Result Section - Output Display */}
            <section className="px-6 py-20 texture-dots">
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-[var(--color-secondary-600)]/20 border border-[var(--color-secondary-600)]/30 backdrop-blur-sm">
                <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-2 animate-pulse"></span>
                <Typography variant="small" texture="secondary" size="xs" weight="medium" marginBottom="none">
                    Hasil Prediksi
                </Typography>
            </div>
            
            <Typography variant="h2" texture="default">
                Output Prediksi Harga
            </Typography>
            <Typography variant="p" texture="muted" size="lg">
                Berikut adalah hasil prediksi berdasarkan data yang Anda masukkan.
            </Typography>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Main Prediction Result */}
            <Card variant="primary" className="p-8 text-center relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                
                <div className="relative z-10">
                    <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                        <Typography variant="small" texture="white" size="xs" weight="medium" marginBottom="none">
                            Estimasi Harga
                        </Typography>
                    </div>
                    
                    {/* Price with better visual emphasis */}
                    <div className="mb-6">
                        <Typography variant="h1" texture="white" marginBottom="none" className="text-6xl font-bold">
                            Rp 1.850.000
                        </Typography>
                        <Typography variant="span" texture="white" size="lg" className="opacity-90" marginBottom="none">
                            / bulan
                        </Typography>
                    </div>
                    
                    {/* Description with better spacing */}
                    <div className="max-w-md mx-auto mb-8">
                        <Typography variant="p" texture="white" size="sm" className="opacity-90 leading-relaxed">
                            Prediksi untuk kos putra di area Universitas Indonesia dengan fasilitas lengkap
                        </Typography>
                    </div>
                    
                    {/* Enhanced Confidence Indicator */}
                    <div className="p-6 bg-white/20 rounded-xl backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-4">
                            <Typography variant="span" texture="white" size="sm" marginBottom="none">
                                Tingkat Kepercayaan
                            </Typography>
                            <Typography variant="span" texture="white" size="lg" weight="bold" marginBottom="none">
                                94%
                            </Typography>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-3">
                            <div className="bg-[var(--color-secondary)] h-3 rounded-full transition-all duration-1000 ease-out" style={{width: '94%'}}></div>
                        </div>
                        <Typography variant="small" texture="white" size="xs" className="opacity-80 mt-2" marginBottom="none">
                            Berdasarkan analisis 15,000+ data
                        </Typography>
                    </div>
                </div>
            </Card>

            {/* Detailed Breakdown */}
            <Card variant="default" className="p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-primary-600)]/20 backdrop-blur-sm border border-[var(--color-primary-600)]/30">
                        <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full mr-2 animate-pulse"></span>
                        <Typography variant="small" texture="primary" size="xs" weight="medium" marginBottom="none">
                            Detail Analisis
                        </Typography>
                    </div>
                </div>
                
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-[var(--color-primary-600)]/10 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="min-w-0 flex-1">
                                <Typography variant="span" texture="default" size="sm" weight="medium" marginBottom="none">
                                    Lokasi & Jarak
                                </Typography>
                                <div className="mt-1">
                                    <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                                        500m dari kampus
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <Typography variant="span" texture="secondary" size="sm" weight="bold" marginBottom="none">
                            +25%
                        </Typography>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-[var(--color-primary-600)]/10 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="min-w-0 flex-1">
                                <Typography variant="span" texture="default" size="sm" weight="medium" marginBottom="none">
                                    Fasilitas Premium
                                </Typography>
                                <div className="mt-1">
                                    <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                                        WiFi, AC, KM Dalam
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <Typography variant="span" texture="secondary" size="sm" weight="bold" marginBottom="none">
                            +15%
                        </Typography>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-[var(--color-primary-600)]/10 rounded-lg">
                        <div className="flex items-center gap-3">
                            <div className="min-w-0 flex-1">
                                <Typography variant="span" texture="default" size="sm" weight="medium" marginBottom="none">
                                    Akses Fasilitas
                                </Typography>
                                <div className="mt-1">
                                    <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                                        Dekat minimarket & transportasi
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <Typography variant="span" texture="secondary" size="sm" weight="bold" marginBottom="none">
                            +8%
                        </Typography>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-[var(--color-primary-600)]/10 rounded-lg">
                        <div className="flex items-center gap-3">
                            <span className="text-lg">🎓</span>
                            <div className="min-w-0 flex-1">
                                <Typography variant="span" texture="default" size="sm" weight="medium" marginBottom="none">
                                    Area Kampus
                                </Typography>
                                <div className="mt-1">
                                    <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                                        Zona strategis mahasiswa
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <Typography variant="span" texture="secondary" size="sm" weight="bold" marginBottom="none">
                            +12%
                        </Typography>
                    </div>
                </div>
                
                <div className="mt-6 p-4 border-t border-[var(--color-primary-600)]/20">
                    <div className="flex items-center justify-between">
                        <Typography variant="span" texture="default" weight="medium" marginBottom="none">
                            Harga Dasar + Adjustment
                        </Typography>
                        <Typography variant="span" texture="primary" weight="bold" marginBottom="none">
                            Rp 1.850.000
                        </Typography>
                    </div>
                </div>
            </Card>
        </div>
        
        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card variant="default" className="p-6 text-center backdrop-blur-sm">
                <span className="text-2xl mb-4 block">⏱️</span>
                <Typography variant="h6" texture="default" marginBottom="sm">
                    Waktu Prediksi
                </Typography>
                <Typography variant="span" texture="secondary" size="lg" weight="bold" marginBottom="xs">
                    2.3s
                </Typography>
                <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                    Sangat cepat & efisien
                </Typography>
            </Card>
            
            <Card variant="default" className="p-6 text-center backdrop-blur-sm">
                <span className="text-2xl mb-4 block">🎯</span>
                <Typography variant="h6" texture="default" marginBottom="sm">
                    Tingkat Akurasi
                </Typography>
                <Typography variant="span" texture="secondary" size="lg" weight="bold" marginBottom="xs">
                    94%
                </Typography>
                <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                    Berdasarkan 15K+ data
                </Typography>
            </Card>
            
            <Card variant="default" className="p-6 text-center backdrop-blur-sm">
                <span className="text-2xl mb-4 block">📊</span>
                <Typography variant="h6" texture="default" marginBottom="sm">
                    Range Harga
                </Typography>
                <Typography variant="span" texture="secondary" size="lg" weight="bold" marginBottom="xs">
                    ±10%
                </Typography>
                <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                    Margin error prediksi
                </Typography>
            </Card>
        </div>
    </div>
</section>

{/* How It Works - Linear style with subtle texture */}
<section className="px-6 py-20 bg-[var(--background-light-alt)] texture-subtle">
    <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
                <Typography variant="h2" texture="default">
                    Cara Kerja Prediksi
                </Typography>
                <Typography variant="p" texture="muted" size="lg">
                    Sistem AI kami menggunakan algoritma machine learning canggih untuk menganalisis berbagai faktor dan memberikan prediksi yang akurat.
                </Typography>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-200)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                            <Typography variant="small" texture="white" size="xs" weight="bold" marginBottom="none">1</Typography>
                        </div>
                        <div>
                            <Typography variant="h6" texture="default">
                                Analisis Lokasi
                            </Typography>
                            <Typography variant="p" texture="muted" size="sm" marginBottom="none">
                                Model menganalisis lokasi, jarak ke kampus, dan aksesibilitas transportasi.
                            </Typography>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-200)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                            <Typography variant="small" texture="white" size="xs" weight="bold" marginBottom="none">2</Typography>
                        </div>
                        <div>
                            <Typography variant="h6" texture="default">
                                Evaluasi Fasilitas
                            </Typography>
                            <Typography variant="p" texture="muted" size="sm" marginBottom="none">
                                Sistem menilai kualitas dan kelengkapan fasilitas yang tersedia.
                            </Typography>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-200)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                            <Typography variant="small" texture="white" size="xs" weight="bold" marginBottom="none">3</Typography>
                        </div>
                        <div>
                            <Typography variant="h6" texture="default">
                                Prediksi Final
                            </Typography>
                            <Typography variant="p" texture="muted" size="sm" marginBottom="none">
                                Menghasilkan estimasi harga berdasarkan 15,000+ data historis dengan akurasi 90%+.
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Right visual */}
            <div className="flex flex-col gap-6">
                <Card variant="secondary" className="p-6">
                    <Typography variant="h5" texture="white">
                        Model AI Training
                    </Typography>
                    <Typography variant="p" texture="white" size="sm" className="opacity-90" marginBottom="lg">
                        Model dilatih menggunakan dataset komprehensif untuk akurasi maksimal.
                    </Typography>
                    
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <Typography variant="span" texture="white" size="sm">15,000+ sampel data kos</Typography>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <Typography variant="span" texture="white" size="sm">50+ kota di Indonesia</Typography>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <Typography variant="span" texture="white" size="sm">Random Forest Algorithm</Typography>
                        </div>
                    </div>
                </Card>
                
                <Card variant="default" className="p-6 backdrop-blur-sm">
                    <Typography variant="h5" texture="default">
                        Validasi Model
                    </Typography>
                    <Typography variant="p" texture="muted" size="sm" marginBottom="lg">
                        Model telah divalidasi dengan berbagai teknik untuk memastikan akurasi.
                    </Typography>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-[var(--color-primary-600)]/10 rounded-lg">
                            <Typography variant="h6" texture="primary">94%</Typography>
                            <Typography variant="small" texture="muted" size="xs" marginBottom="none">R² Score</Typography>
                        </div>
                        <div className="text-center p-3 bg-[var(--color-secondary-600)]/10 rounded-lg">
                            <Typography variant="h6" texture="secondary">±8%</Typography>
                            <Typography variant="small" texture="muted" size="xs" marginBottom="none">MAPE</Typography>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
</section>

{/* History CTA Section - Superhuman style after explanation */}
<section className="px-6 py-20 texture-gradient-noise">
    <div className="max-w-4xl mx-auto text-center">
        <Card variant="gradient" className="p-12 text-center relative overflow-hidden">
            <Typography variant="h2" texture="white">
                Ingin Melihat Prediksi Sebelumnya?
            </Typography>
            <Typography variant="p" texture="white" size="lg" className="opacity-90 relative z-10">
                Lihat riwayat prediksi Anda dan bandingkan hasil dengan prediksi sebelumnya untuk mendapatkan insights yang lebih mendalam.
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Button 
                    variant="light" 
                    size="lg"
                    href="/history"
                    className="group"
                >
                    Lihat Riwayat Prediksi
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">📊</span>
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