import Typography from "@/components/Typography";
import Card from "@/components/Card";

export default function MissionSection() {
  return (
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
              <div className="flex items-start gap-3">
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
  );
}