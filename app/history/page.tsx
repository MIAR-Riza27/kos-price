import Card from "@/components/Card";
import Button from "@/components/Button";
import Typography from "@/components/Typography";
import PredictionTable from "@/components/PredictionTable";

export default function HistoryPage() {
    // Sample data for the table
    const predictionData = [
        {
            id: "1",
            price: "Rp 1.850.000",
            type: "Putra" as const,
            location: "Jakarta Selatan",
            facilityDistance: "250m",
            nearCampus: true,
            accuracy: "94%",
            date: "2 jam lalu",
            features: ["AC", "WiFi", "KM Dalam"]
        },
        {
            id: "2", 
            price: "Rp 1.200.000",
            type: "Putri" as const,
            location: "Bandung",
            facilityDistance: "400m",
            nearCampus: false,
            accuracy: "91%",
            date: "1 hari lalu",
            features: ["WiFi", "Dapur Bersama"]
        },
        {
            id: "3",
            price: "Rp 950.000", 
            type: "Putra" as const,
            location: "Yogyakarta",
            facilityDistance: "180m",
            nearCampus: true,
            accuracy: "96%",
            date: "3 hari lalu",
            features: ["WiFi", "Parkir"]
        },
        {
            id: "4",
            price: "Rp 1.650.000",
            type: "Putri" as const,
            location: "Depok", 
            facilityDistance: "150m",
            nearCampus: true,
            accuracy: "93%",
            date: "5 hari lalu",
            features: ["AC", "WiFi", "KM Dalam", "Dapur"]
        },
        {
            id: "5",
            price: "Rp 1.100.000",
            type: "Putra" as const,
            location: "Surabaya",
            facilityDistance: "600m", 
            nearCampus: false,
            accuracy: "89%",
            date: "1 minggu lalu",
            features: ["WiFi"]
        },
        {
            id: "6",
            price: "Rp 1.400.000",
            type: "Putri" as const,
            location: "Malang",
            facilityDistance: "300m",
            nearCampus: true,
            accuracy: "92%",
            date: "1 minggu lalu", 
            features: ["AC", "WiFi"]
        }
    ];

    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Hero Section - Linear inspired left alignment */}
            <section className="px-6 py-20 md:py-32 texture-noise">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-[var(--color-primary-600)]/20 border border-[var(--color-primary-600)]/30 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-2 animate-pulse"></span>
                            <Typography variant="small" texture="primary" size="xs" weight="medium" marginBottom="none">
                                Riwayat Prediksi
                            </Typography>
                        </div>
                        
                        <Typography variant="h1" texture="default" marginBottom="md">
                            Riwayat Prediksi
                            <br />
                            <span className="text-texture-hero">Harga Kos</span>
                        </Typography>
                        
                        <Typography variant="p" texture="muted" size="xl" marginBottom="4xl">
                            Lihat kembali semua prediksi harga kos yang pernah Anda lakukan. 
                            Analisis trend dan bandingkan hasil untuk mendapatkan insights yang lebih mendalam.
                        </Typography>
                        
                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-8">
                            <div className="text-center sm:text-left">
                                <Typography variant="h4" texture="primary" className="text-texture-primary" marginBottom="xs">
                                    12
                                </Typography>
                                <Typography variant="small" texture="muted" marginBottom="none">
                                    Total Prediksi
                                </Typography>
                            </div>
                            <div className="text-center sm:text-left">
                                <Typography variant="h4" texture="primary" className="text-texture-primary" marginBottom="xs">
                                    94%
                                </Typography>
                                <Typography variant="small" texture="muted" marginBottom="none">
                                    Rata-rata Akurasi
                                </Typography>
                            </div>
                            <div className="text-center sm:text-left">
                                <Typography variant="h4" texture="primary" className="text-texture-primary" marginBottom="xs">
                                    7
                                </Typography>
                                <Typography variant="small" texture="muted" marginBottom="none">
                                    Hari Terakhir
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Predictions - Linear style */}
            <section className="px-6 py-20 bg-[var(--background-light-alt)] texture-subtle">
                <div className="max-w-6xl mx-auto">
                    <div className="max-w-3xl mb-12">
                        <Typography variant="h2" texture="default">
                            Prediksi Terbaru
                        </Typography>
                        <Typography variant="p" texture="muted" size="lg">
                            4 prediksi terakhir yang Anda lakukan dengan detail lengkap dan tingkat akurasi.
                        </Typography>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Latest Prediction - Primary Card */}
                        <Card variant="primary" className="p-6 text-center">
                            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-white/20 backdrop-blur-sm">
                                <Typography variant="small" texture="white" size="xs" weight="medium" marginBottom="none">
                                    Terbaru
                                </Typography>
                            </div>
                            
                            <Typography variant="h4" texture="white" marginBottom="xs">
                                Rp 1.850.000
                            </Typography>
                            <Typography variant="small" texture="white" size="sm" className="opacity-90" marginBottom="lg">
                                Kos Putra - Jakarta Selatan
                            </Typography>
                            
                            <div className="space-y-2">
                                <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm">
                                    <Typography variant="small" texture="white" size="xs" marginBottom="none">
                                        📍 500m dari kampus
                                    </Typography>
                                </div>
                                <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm">
                                    <Typography variant="small" texture="white" size="xs" marginBottom="none">
                                        🎯 Akurasi: 94%
                                    </Typography>
                                </div>
                                <div className="bg-white/20 rounded-lg p-2 backdrop-blur-sm">
                                    <Typography variant="small" texture="white" size="xs" marginBottom="none">
                                        📅 2 jam lalu
                                    </Typography>
                                </div>
                            </div>
                        </Card>
                        
                        {/* Second Prediction - Consistent Format */}
                        <Card variant="default" className="p-6 text-center backdrop-blur-sm">
                            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-[var(--color-primary-600)]/20 border border-[var(--color-primary-600)]/30 backdrop-blur-sm">
                                <Typography variant="small" texture="primary" size="xs" weight="medium" marginBottom="none">
                                    Kedua
                                </Typography>
                            </div>
                            
                            <Typography variant="h4" texture="default" marginBottom="xs">
                                Rp 1.200.000
                            </Typography>
                            <Typography variant="small" texture="muted" size="sm" marginBottom="lg">
                                Kos Putri - Bandung
                            </Typography>
                            
                            <div className="space-y-2">
                                <div className="bg-[var(--color-primary-600)]/10 rounded-lg p-2 backdrop-blur-sm">
                                    <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                                        📍 1.2km dari kampus
                                    </Typography>
                                </div>
                                <div className="bg-[var(--color-primary-600)]/10 rounded-lg p-2 backdrop-blur-sm">
                                    <Typography variant="small" texture="secondary" size="xs" weight="bold" marginBottom="none">
                                        🎯 Akurasi: 91%
                                    </Typography>
                                </div>
                                <div className="bg-[var(--color-primary-600)]/10 rounded-lg p-2 backdrop-blur-sm">
                                    <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                                        📅 1 hari lalu
                                    </Typography>
                                </div>
                            </div>
                        </Card>
                        
                        {/* Third Prediction - Consistent Format */}
                        <Card variant="default" className="p-6 text-center backdrop-blur-sm">
                            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-[var(--color-primary-600)]/20 border border-[var(--color-primary-600)]/30 backdrop-blur-sm">
                                <Typography variant="small" texture="primary" size="xs" weight="medium" marginBottom="none">
                                    Ketiga
                                </Typography>
                            </div>
                            
                            <Typography variant="h4" texture="default" marginBottom="xs">
                                Rp 950.000
                            </Typography>
                            <Typography variant="small" texture="muted" size="sm" marginBottom="lg">
                                Kos Putra - Yogyakarta
                            </Typography>
                            
                            <div className="space-y-2">
                                <div className="bg-[var(--color-primary-600)]/10 rounded-lg p-2 backdrop-blur-sm">
                                    <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                                        📍 800m dari kampus
                                    </Typography>
                                </div>
                                <div className="bg-[var(--color-primary-600)]/10 rounded-lg p-2 backdrop-blur-sm">
                                    <Typography variant="small" texture="secondary" size="xs" weight="bold" marginBottom="none">
                                        🎯 Akurasi: 96%
                                    </Typography>
                                </div>
                                <div className="bg-[var(--color-primary-600)]/10 rounded-lg p-2 backdrop-blur-sm">
                                    <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                                        📅 3 hari lalu
                                    </Typography>
                                </div>
                            </div>
                        </Card>
                        
                        {/* Fourth Prediction - Consistent Format */}
                        <Card variant="default" className="p-6 text-center backdrop-blur-sm">
                            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-[var(--color-primary-600)]/20 border border-[var(--color-primary-600)]/30 backdrop-blur-sm">
                                <Typography variant="small" texture="primary" size="xs" weight="medium" marginBottom="none">
                                    Keempat
                                </Typography>
                            </div>
                            
                            <Typography variant="h4" texture="default" marginBottom="xs">
                                Rp 1.650.000
                            </Typography>
                            <Typography variant="small" texture="muted" size="sm" marginBottom="lg">
                                Kos Putri - Depok
                            </Typography>
                            
                            <div className="space-y-2">
                                <div className="bg-[var(--color-primary-600)]/10 rounded-lg p-2 backdrop-blur-sm">
                                    <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                                        📍 300m dari kampus
                                    </Typography>
                                </div>
                                <div className="bg-[var(--color-primary-600)]/10 rounded-lg p-2 backdrop-blur-sm">
                                    <Typography variant="small" texture="secondary" size="xs" weight="bold" marginBottom="none">
                                        🎯 Akurasi: 93%
                                    </Typography>
                                </div>
                                <div className="bg-[var(--color-primary-600)]/10 rounded-lg p-2 backdrop-blur-sm">
                                    <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                                        📅 5 hari lalu
                                    </Typography>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Full History Table - Superhuman center style */}
            <section className="px-6 py-20 texture-dots">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-[var(--color-secondary-600)]/20 border border-[var(--color-secondary-600)]/30 backdrop-blur-sm">
                            <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full mr-2 animate-pulse"></span>
                            <Typography variant="small" texture="secondary" size="xs" weight="medium" marginBottom="none">
                                Riwayat Lengkap
                            </Typography>
                        </div>
                        
                        <Typography variant="h2" texture="default" marginBottom="sm">
                            Semua Prediksi Anda
                        </Typography>
                        <Typography variant="p" texture="muted" size="lg" marginBottom="none">
                            Lihat detail lengkap semua prediksi dengan format yang mudah dibaca dan dianalisis.
                        </Typography>
                    </div>
                    
                    <PredictionTable 
                        data={predictionData}
                        showPagination={true}
                        currentPage={1}
                        totalItems={12}
                        itemsPerPage={6}
                    />
                </div>
            </section>

            {/* Analytics Section - Linear style */}
            <section className="px-6 py-20 bg-[var(--background-light-alt)] texture-subtle">
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
                                    📍 Radius {'<'} 500m dari kampus
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

            {/* CTA Section - Superhuman style */}
            <section className="px-6 py-20 texture-gradient-noise">
                <div className="max-w-4xl mx-auto text-center">
                    <Card variant="gradient" className="p-12 text-center relative overflow-hidden">
                        <Typography variant="h2" texture="white">
                            Buat Prediksi Baru?
                        </Typography>
                        <Typography variant="p" texture="white" size="lg" className="opacity-90 relative z-10">
                            Lakukan prediksi harga kos baru dan bandingkan dengan riwayat sebelumnya untuk mendapatkan insights yang lebih baik.
                        </Typography>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                            <Button 
                                variant="light" 
                                size="lg"
                                href="/predict"
                                className="group"
                            >
                                Prediksi Lagi!!
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
