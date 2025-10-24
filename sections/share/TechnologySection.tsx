import Typography from "@/components/Typography";
import Card from "@/components/Card";

export default function TechnologySection() {
  return (
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
        
        {/* Additional tech details */}
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
  );
}