import Typography from "@/components/Typography";
import PredictionTable from "@/components/PredictionTable";

interface PredictionData {
  id: string;
  price: string;
  type: 'Putra' | 'Putri';
  location: string;
  facilityDistance: string;
  nearCampus: boolean;
  accuracy: string;
  date: string;
  features?: string[];
}

interface PredictionTableSectionProps {
  data: PredictionData[];
}

export default function PredictionTableSection({ data }: PredictionTableSectionProps) {
  return (
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
          data={data}
          showPagination={true}
          currentPage={1}
          totalItems={12}
          itemsPerPage={6}
        />
      </div>
    </section>
  );
}