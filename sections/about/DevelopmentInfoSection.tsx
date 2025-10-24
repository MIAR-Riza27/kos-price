import Typography from "@/components/Typography";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function DevelopmentInfoSection() {
  return (
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
            {/* Developer Card */}
            <Card variant="primary" className="p-8 text-center">
              <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-sm">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                <Typography variant="small" texture="white" size="xs" weight="medium" marginBottom="none">
                  Developer
                </Typography>
              </div>
              
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <span className="text-3xl">👨‍💻</span>
              </div>
              
              <Typography variant="h4" texture="white" marginBottom="xs">
                MIARRiza27
              </Typography>
              <Typography variant="p" texture="white" size="sm" className="opacity-90" marginBottom="none">
                Data Scientist & Full Stack Developer dengan pengalaman dalam machine learning dan web development modern.
              </Typography>
            </Card>
            
            {/* Contact & Support Card */}
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
                      <span className="text-xl">📧</span>
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
                      <span className="text-xl">🐙</span>
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
                      <span className="text-xl">💼</span>
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
  );
}