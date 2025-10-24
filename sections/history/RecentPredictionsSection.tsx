import Typography from "@/components/Typography";
import Card from "@/components/Card";

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

interface RecentPredictionsSectionProps {
  data: PredictionData[];
}

export default function RecentPredictionsSection({ data }: RecentPredictionsSectionProps) {
  const recentData = data.slice(0, 4); // Take first 4 items
  
  return (
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
          {recentData.map((prediction, index) => (
            <Card 
              key={prediction.id} 
              variant={index === 0 ? "primary" : "default"} 
              className="p-6 text-center"
            >
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-white/20 backdrop-blur-sm">
                <Typography variant="small" texture={index === 0 ? "white" : "primary"} size="xs" weight="medium" marginBottom="none">
                  {index === 0 ? "Terbaru" : 
                   index === 1 ? "Kedua" : 
                   index === 2 ? "Ketiga" : "Keempat"}
                </Typography>
              </div>
              
              <Typography variant="h4" texture={index === 0 ? "white" : "default"} marginBottom="xs">
                {prediction.price}
              </Typography>
              <Typography variant="small" texture={index === 0 ? "white" : "muted"} size="sm" className={index === 0 ? "opacity-90" : ""} marginBottom="lg">
                Kos {prediction.type} - {prediction.location}
              </Typography>
              
              <div className="space-y-2">
                <div className={`${index === 0 ? "bg-white/20" : "bg-[var(--color-primary-600)]/10"} rounded-lg p-2 backdrop-blur-sm`}>
                  <Typography variant="small" texture={index === 0 ? "white" : "muted"} size="xs" marginBottom="none">
                    📍 {prediction.facilityDistance} dari kampus
                  </Typography>
                </div>
                <div className={`${index === 0 ? "bg-white/20" : "bg-[var(--color-primary-600)]/10"} rounded-lg p-2 backdrop-blur-sm`}>
                  <Typography variant="small" texture={index === 0 ? "white" : "secondary"} size="xs" weight="bold" marginBottom="none">
                    🎯 Akurasi: {prediction.accuracy}
                  </Typography>
                </div>
                <div className={`${index === 0 ? "bg-white/20" : "bg-[var(--color-primary-600)]/10"} rounded-lg p-2 backdrop-blur-sm`}>
                  <Typography variant="small" texture={index === 0 ? "white" : "muted"} size="xs" marginBottom="none">
                    📅 {prediction.date}
                  </Typography>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}