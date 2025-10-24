import Typography from "@/components/Typography";
import FeatureScroller from "@/components/FeatureScroller";

export default function FeaturesSection() {
  return (
    <section className="px-6 py-20 texture-gradient-noise">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Typography variant="h2" texture="default">
            Fitur Unggulan
          </Typography>
          <Typography variant="p" texture="muted" size="lg" marginBottom="lg">
            Teknologi AI terdepan untuk prediksi harga kos yang akurat dan insights mendalam.
          </Typography>
        </div>
        
        {/* Feature Scroller Component */}
        <FeatureScroller />
      </div>
    </section>
  );
}