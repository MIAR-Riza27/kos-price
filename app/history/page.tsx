import {
  HeroSection,
  RecentPredictionsSection,
  PredictionTableSection,
  AnalyticsSection,
  CTASection
} from "@/sections";

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
      <HeroSection variant="history" />
      <RecentPredictionsSection data={predictionData} />
      <PredictionTableSection data={predictionData} />
      <AnalyticsSection />
      <CTASection variant="history" />
    </main>
  );
}
