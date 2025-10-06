"use client";

import Card from "@/components/Card";
import Typography from "@/components/Typography";
import Button from "@/components/Button";

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

interface PredictionTableProps {
  data: PredictionData[];
  showPagination?: boolean;
  currentPage?: number;
  totalItems?: number;
  itemsPerPage?: number;
}

export default function PredictionTable({ 
  data, 
  showPagination = true, 
  currentPage = 1, 
  totalItems = 0, 
  itemsPerPage = 4 
}: PredictionTableProps) {
  
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  
  return (
    <div className="space-y-6">
      {/* Header Card - Superhuman style */}
      <Card variant="gradient" className="p-6 text-center">
        <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-white/20 backdrop-blur-sm">
          <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
          <Typography variant="small" texture="white" size="xs" weight="medium" marginBottom="none">
            Data Prediksi
          </Typography>
        </div>
        
        <Typography variant="h4" texture="white" marginBottom="xs">
          {totalItems} Total Prediksi
        </Typography>
        <Typography variant="p" texture="white" size="sm" className="opacity-90" marginBottom="none">
          Riwayat lengkap semua prediksi dengan detail analisis
        </Typography>
      </Card>

      {/* Table Container Card */}
      <Card variant="default" className="backdrop-blur-sm border border-[var(--color-primary-600)]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead className="bg-gradient-to-r from-[var(--color-primary-600)]/10 to-[var(--color-secondary-600)]/5 border-b border-[var(--color-primary-600)]/20">
              <tr>
                <th className="px-6 py-4 text-left">
                  <Typography variant="span" texture="primary" size="sm" weight="semibold" marginBottom="none">
                    Harga
                  </Typography>
                </th>
                <th className="px-6 py-4 text-left">
                  <Typography variant="span" texture="primary" size="sm" weight="semibold" marginBottom="none">
                    Tipe & Lokasi
                  </Typography>
                </th>
                <th className="px-6 py-4 text-center">
                  <Typography variant="span" texture="primary" size="sm" weight="semibold" marginBottom="none">
                    Jarak Fasilitas
                  </Typography>
                </th>
                <th className="px-6 py-4 text-center">
                  <Typography variant="span" texture="primary" size="sm" weight="semibold" marginBottom="none">
                    Status
                  </Typography>
                </th>
                <th className="px-6 py-4 text-center">
                  <Typography variant="span" texture="primary" size="sm" weight="semibold" marginBottom="none">
                    Akurasi
                  </Typography>
                </th>
                <th className="px-6 py-4 text-right">
                  <Typography variant="span" texture="primary" size="sm" weight="semibold" marginBottom="none">
                    Waktu
                  </Typography>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {data.map((prediction, index) => (
                <tr 
                  key={prediction.id}
                  className={`border-b border-[var(--color-primary-600)]/10 transition-all duration-300 hover:bg-gradient-to-r hover:from-[var(--color-primary-600)]/5 hover:to-transparent ${
                    index === 0 
                      ? 'bg-gradient-to-r from-[var(--color-secondary)]/5 to-transparent' 
                      : ''
                  }`}
                >
                  {/* Price Column */}
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      {index === 0 && (
                        <div className="inline-flex items-center px-2 py-1 mb-2 rounded-full bg-[var(--color-secondary-600)]/20 backdrop-blur-sm w-fit">
                          <Typography variant="small" texture="secondary" size="xs" weight="medium" marginBottom="none">
                            Terbaru
                          </Typography>
                        </div>
                      )}
                      <Typography variant="h6" texture="primary" weight="bold" marginBottom="none">
                        {prediction.price}
                      </Typography>
                      <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                        per bulan
                      </Typography>
                    </div>
                  </td>

                  {/* Type & Location Column */}
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base">
                          {prediction.type === 'Putra' ? '👨‍🎓' : '👩‍🎓'}
                        </span>
                        <Typography variant="span" texture="default" weight="medium" marginBottom="none">
                          Kos {prediction.type}
                        </Typography>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm">📍</span>
                        <Typography variant="small" texture="muted" size="sm" marginBottom="none">
                          {prediction.location}
                        </Typography>
                      </div>
                    </div>
                  </td>

                  {/* Facility Distance Column */}
                  <td className="px-6 py-5 text-center">
                    <Typography variant="span" texture="default" size="sm" weight="medium" marginBottom="none">
                      {prediction.facilityDistance}
                    </Typography>
                    <Typography variant="small" texture="muted" size="xs" marginBottom="none" className="block">
                      dari fasilitas
                    </Typography>
                  </td>

                  {/* Near Campus Status Column */}
                  <td className="px-6 py-5 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full ${
                      prediction.nearCampus 
                        ? 'bg-[var(--color-secondary-600)]/20 text-[var(--color-secondary)]'
                        : 'bg-[var(--color-primary-600)]/20 text-[var(--color-primary)]'
                    }`}>
                      <Typography variant="small" texture={prediction.nearCampus ? "secondary" : "primary"} size="xs" weight="medium" marginBottom="none">
                        {prediction.nearCampus ? '✓ Dekat' : '✗ Jauh'}
                      </Typography>
                    </span>
                  </td>

                  {/* Accuracy Column */}
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <span className="text-sm">🎯</span>
                      <Typography variant="span" texture="secondary" weight="bold" size="sm" marginBottom="none">
                        {prediction.accuracy}
                      </Typography>
                    </div>
                    <Typography variant="small" texture="muted" size="xs" marginBottom="none">
                      tingkat akurasi
                    </Typography>
                  </td>

                  {/* Date Column */}
                  <td className="px-6 py-5 text-right">
                    <Typography variant="span" texture="muted" size="sm" marginBottom="none">
                      {prediction.date}
                    </Typography>
                    <Typography variant="small" texture="muted" size="xs" marginBottom="none" className="block">
                      diprediksi
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Features section for mobile - shown below table */}
        <div className="md:hidden">
          {data.map((prediction) => (
            prediction.features && (
              <div key={prediction.id} className="px-6 py-4 border-t border-[var(--color-primary-600)]/10">
                <Typography variant="small" texture="muted" size="xs" marginBottom="xs">
                  {prediction.price} - Fasilitas:
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {prediction.features.map((feature, idx) => (
                    <span key={idx} className="px-2 py-1 bg-[var(--color-primary-600)]/10 rounded text-xs">
                      <Typography variant="small" texture="default" size="xs" marginBottom="none">
                        {feature}
                      </Typography>
                    </span>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </Card>

      {/* Pagination Footer Card */}
      {showPagination && (
        <Card variant="default" className="p-4 backdrop-blur-sm border border-[var(--color-primary-600)]/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Typography variant="span" texture="muted" size="sm" marginBottom="none">
              Menampilkan {startItem}-{endItem} dari {totalItems} prediksi
            </Typography>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled={currentPage === 1}>
                Sebelumnya
              </Button>
              
              <div className="flex gap-1">
                {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, i) => i + 1)
                  .slice(0, 5)
                  .map((page) => (
                  <Button 
                    key={page}
                    variant={currentPage === page ? "primary" : "outline"} 
                    size="sm"
                    className="min-w-[2.5rem]"
                  >
                    {page}
                  </Button>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
              >
                Selanjutnya
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}