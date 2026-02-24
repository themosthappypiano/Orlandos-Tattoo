import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/Button";
import { Star, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const backgroundImage = "https://i.ibb.co/bjYbXgCR/Chat-GPT-Image-Feb-24-2026-09-00-58-AM.png";

  // Video restart every 30 seconds
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      // Video will stay paused at the end frame
    };

    const restartVideo = () => {
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener('ended', handleVideoEnd);
    
    // Restart video every 30 seconds
    const restartInterval = setInterval(restartVideo, 30000);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      clearInterval(restartInterval);
    };
  }, []);

  return (
    <PageTransition>
      {/* HERO SECTION */}
      {/* Landing page hero scenic skyline landscape */}
      <section className="relative min-h-screen flex items-center justify-center pt-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen pt-8">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl text-white mb-6 text-shadow-heavy" style={{textShadow: '4px 4px 8px rgba(0,0,0,0.8)', letterSpacing: '0.1em', fontWeight: '700'}}>
              HOUSTON'S FINEST.
            </h1>
            <p className="font-sans text-lg md:text-xl text-white/90 mb-10 text-shadow-heavy leading-relaxed">
              Houston's own tattoo & piercing studio. Custom ink. Trusted piercings. Walk-ins welcome daily.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center lg:justify-start">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#messenger">Book Your Session</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/gallery">View Gallery</Link>
              </Button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 md:gap-12 text-white/70 font-condensed tracking-widest uppercase text-sm border-t border-b border-white/20 py-4">
              <span className="flex items-center gap-2"><MapPin size={16} /> 17023 Nanes Dr., Houston, TX</span>
              <span className="hidden md:inline-block w-1 h-1 rounded-full bg-white/50"></span>
              <span className="flex items-center gap-2"><Clock size={16} /> Opens 2PM — First come, first served</span>
            </div>
            
            <p className="mt-8 font-condensed tracking-[0.2em] text-xs text-white/40 uppercase text-center lg:text-left">
              Proudly Latino-owned. Houston-rooted for over 40 years.
            </p>
          </div>

          {/* Right side - Video */}
          <div className="relative w-full max-w-lg mx-auto">
            <video 
              ref={videoRef}
              className="w-full h-auto rounded-lg shadow-2xl" 
              autoPlay 
              muted
              loop
              playsInline
            >
              <source src="/studio-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>


      {/* GALLERY SECTION */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gothic text-5xl md:text-7xl text-white mb-8">OUR GALLERY.</h2>
            <p className="font-sans text-white/70 text-lg mb-10">
              Check out some of our finest work. Custom tattoos and professional piercings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://i.ibb.co/27zTLth7/image.png" 
                alt="Tattoo Work 1" 
                className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://i.ibb.co/LT9Q2hh/image.png" 
                alt="Tattoo Work 2" 
                className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src="https://i.ibb.co/JW5WtJF8/image.png" 
                alt="Tattoo Work 3" 
                className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/gallery">View All Styles</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* REVIEWS SECTION */}
      <section className="py-24 relative overflow-hidden" style={{backgroundImage: 'url(https://i.ibb.co/1c7Lp3M/Chat-GPT-Image-Feb-24-2026-08-37-21-AM.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-2 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="fill-white text-white w-6 h-6" />)}
            </div>
            <h2 className="font-condensed text-3xl md:text-4xl text-white mb-2">4.5 STARS — 375 REVIEWS</h2>
            <p className="font-sans text-white/60">Four decades of Houston trust. Real clients. Real work.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="flex mb-3">
                {[1,2,3,4,5].map(s => <Star key={s} className="fill-black text-black w-4 h-4" />)}
              </div>
              <p className="font-sans text-sm font-medium mb-4 leading-snug text-black">"First time here and will b back Mi husband getting his tattoo touch up"</p>
              <p className="font-condensed tracking-widest uppercase text-xs text-black/70">- Reba Harris</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="flex mb-3">
                {[1,2,3,4,5].map(s => <Star key={s} className="fill-black text-black w-4 h-4" />)}
              </div>
              <p className="font-sans text-sm font-medium mb-4 leading-snug text-black">"I've been getting pierced by grace for a few years now and it's a 10/10 everytime, all 5 of my piercings that she did has healed perfectly"</p>
              <p className="font-condensed tracking-widest uppercase text-xs text-black/70">- Chocolate Shay</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="flex mb-3">
                {[1,2,3,4,5].map(s => <Star key={s} className="fill-black text-black w-4 h-4" />)}
              </div>
              <p className="font-sans text-sm font-medium mb-4 leading-snug text-black">"Everyone was super friendly and professional. I came in and they helped me find the perfect tattoo. Great service can't wait to go again!"</p>
              <p className="font-condensed tracking-widest uppercase text-xs text-black/70">- Katie Clare</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <div className="flex mb-3">
                {[1,2,3,4,5].map(s => <Star key={s} className="fill-black text-black w-4 h-4" />)}
              </div>
              <p className="font-sans text-sm font-medium mb-4 leading-snug text-black">"Grace was phenomenal! I got my navel and Monroe piercing re-done and I didn't feel anything! They are so kind!"</p>
              <p className="font-condensed tracking-widest uppercase text-xs text-black/70">- Wassana Austin</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="bg-white/20 border-white text-white hover:bg-white hover:text-black">
              <a href="https://www.google.com/search?client=firefox-b-lm&hs=fDkU&sa=X&sca_esv=7154391049cab9c6&hl=en-IE&biw=1920&bih=894&sxsrf=ANbL-n6csqjtLLYVEvIT_YmouIsKypoHLg:1771942559210&q=Orlando%27s%20Tattoo%20Studio%20Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDa2sDAyNrc0NbO0MDAxMDEzMNzAyPiKUd6_KCcxLyVfvVghJLGkJD9fIbikNCUzXyEotSwztbx4ESshFQCJghkaXwAAAA&rldimm=13388237956980404601&tbm=lcl&ved=0CD4Q5foLahcKEwjYjbm3qPKSAxUAAAAAHQAAAAAQCg#lkt=LocalPoiReviews&arid=Ci9DQUlRQUNvZERodHljRjlvT2tWdWVuWk5jVWxwTmxWelNuZEZhbGg0ZVhWVVpuYxAB" target="_blank" rel="noopener noreferrer">
                View All Google Reviews
              </a>
            </Button>
          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="py-32 bg-black border-t border-white/20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-gothic text-6xl md:text-8xl text-white mb-10">READY WHEN YOU ARE.</h2>
          <Button asChild size="lg" className="text-lg">
            <Link href="/book">Book Your Session</Link>
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}
