import Typography from "@/components/Typography";
import Card from "@/components/Card";

export default function DataSourcesSection() {
  return (
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
              <span className="text-xl">🏢</span>
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
              <span className="text-xl">🗺️</span>
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
              <span className="text-xl">📊</span>
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
  );
}