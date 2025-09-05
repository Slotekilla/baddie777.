import React from 'react';
import { TrendingUp, Users, Coins, Zap } from 'lucide-react';
import { OptimizedImage } from './components/OptimizedImage';
import { generateImageStructuredData } from './utils/imageOptimization';

function App() {
  // SEO-optimized image metadata
  const galleryImages = [
    {
      src: "/blasted.png",
      alt: "Baddie777 digital art BLASTED - minimalist cream poster design with chaotic elements",
      title: "BLASTED - $BADDIE777 Digital Art Collection",
      keywords: ["digital-art", "nft", "crypto", "blasted", "minimalist"]
    },
    {
      src: "/melted.png",
      alt: "Baddie777 MELTED artwork - elegant cream wedding bar poster transformed into crypto art",
      title: "MELTED - Chaos Into Gold Digital Art by Baddie777",
      keywords: ["melted", "wedding", "elegant", "transformation"]
    },
    {
      src: "/hyped.png",
      alt: "HYPED crypto art by Baddie777 - cream minimalist wedding design meets digital chaos",
      title: "HYPED - $BADDIE777 Collectible Digital Art",
      keywords: ["hyped", "crypto", "collectible", "wedding-design"]
    },
    {
      src: "/stoned.png",
      alt: "STONED digital artwork - Baddie777 transforms elegant wedding poster into crypto collectible",
      title: "STONED - Digital Alchemy by $BADDIE777",
      keywords: ["stoned", "alchemy", "wedding-poster", "transformation"]
    },
    {
      src: "/wasted.png",
      alt: "WRECKED art piece by Baddie777 - minimalist wedding bar poster reimagined as digital chaos",
      title: "WASTED - Chaos Collection $BADDIE777",
      keywords: ["wrecked", "chaos", "bar-poster", "reimagined"]
    },
    {
      src: "/exposed.png",
      alt: "EXPOSED digital art - Baddie777 exposes the beauty in wedding design chaos",
      title: "EXPOSED - $BADDIE777 Digital Art Revelation",
      keywords: ["exposed", "revelation", "beauty", "design-chaos"]
    }
  ];

  // Generate structured data for SEO
  React.useEffect(() => {
    const structuredData = generateImageStructuredData(galleryImages);
    
    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black">
        {/* Background texture overlay */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-multiply"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Glitch overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent animate-pulse" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="glitch-container mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-6 glitch-text">
              $BADDIE777
            </h1>
            <div className="text-2xl md:text-3xl font-bold text-green-400 mb-4 glitch-text-small">
              I turn chaos into collectible gold.
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-medium">
            Stop following noise. Invest in chaos that actually builds value.
          </p>
          
          {/* Market Cap Display */}
          <div className="mb-8 p-6 bg-black/60 rounded-lg border border-green-400 backdrop-blur-sm">
            <div className="text-green-400 text-sm uppercase tracking-wide mb-2">Current Market Cap</div>
            <div className="text-4xl font-black text-green-400 neon-glow">$8,808+</div>
          </div>
          
          {/* CTA Button */}
          <button className="pulse-button bg-green-500 hover:bg-green-400 text-black font-black text-xl px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
            TRADE $BADDIE777
          </button>
        </div>
      </section>

      {/* DexScreener Chart */}
      <section className="py-10 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8 glitch-text-small">
            LIVE CHART
          </h2>
          
          <div className="bg-black/60 rounded-lg border border-green-400 p-4 backdrop-blur-sm">
            <style dangerouslySetInnerHTML={{
              __html: `
                #dexscreener-embed{position:relative;width:100%;padding-bottom:62.5%;}
                @media(min-width:1400px){#dexscreener-embed{padding-bottom:32.5%;}}
                #dexscreener-embed iframe{position:absolute;width:100%;height:100%;top:0;left:0;border:0;}
              `
            }} />
            <div id="dexscreener-embed">
              <iframe src="https://dexscreener.com/base/0x7ae6f233002d7a57e8c039be3f9bffa1d62b249ae0e5d8193a3eebb45ee9430a?embed=1&loadChartSettings=0&trades=0&tabs=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 glitch-text-small">
            CHAOS GALLERY
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((artwork, index) => (
              <div key={index} className="art-card group">
                <div className="aspect-square rounded-lg overflow-hidden relative bg-gray-800">
                  <OptimizedImage
                    src={artwork.src}
                    alt={artwork.alt}
                    title={artwork.title}
                    className="w-full h-full"
                    priority={index < 2} // Prioritize first 2 images
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-2xl font-black text-red-400 glitch-text-small">
                      {artwork.title.split(' - ')[0]} {/* Extract just the artwork name */}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Zap className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-red-900/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-black/60 p-12 rounded-lg border border-red-400 backdrop-blur-sm">
            <blockquote className="text-3xl md:text-4xl font-bold leading-relaxed">
              <div className="text-red-400 mb-4">"Baddie777 is a digital alchemist.</div>
              <div className="text-white mb-4">Every post is a coin. Every coin is chaos.</div>
              <div className="text-green-400">Every chaos turns into gold."</div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-8 text-2xl font-bold">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-green-400" />
                <span>100+ Followers</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span>$8,808+ Market Cap</span>
              </div>
              <div className="text-green-400">& Growing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-t from-green-900/30 to-black">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h3 className="text-4xl md:text-5xl font-black mb-8 glitch-text-small">
            READY TO JOIN THE CHAOS?
          </h3>
          
          <button className="pulse-button bg-green-500 hover:bg-green-400 text-black font-black text-2xl px-16 py-6 rounded-lg transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-3">
              <Coins className="w-8 h-8" />
              <span>Buy $BADDIE777 on Zora</span>
            </div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="text-gray-500 text-lg glitch-text-footer">
            This is not financial advice. It's art. It's chaos. It's $BADDIE777.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;