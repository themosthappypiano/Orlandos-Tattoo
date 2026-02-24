import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/Button";

export default function Services() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-20 text-center">
            <h1 className="font-gothic text-6xl md:text-8xl text-white mb-6">TATTOOS & PIERCINGS.</h1>
            <h2 className="font-condensed text-2xl md:text-3xl tracking-widest text-white/60 uppercase">Done Right.</h2>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Tattoos */}
            <div className="border border-white/20 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
              <h3 className="font-gothic text-5xl text-white mb-8 border-b border-white/20 pb-6">Custom Tattoos</h3>
              <ul className="space-y-6 font-condensed tracking-wider text-xl md:text-2xl text-white/90 uppercase mb-12">
                <li className="flex items-center gap-4"><span className="w-8 h-[1px] bg-white"></span> Black & Grey</li>
                <li className="flex items-center gap-4"><span className="w-8 h-[1px] bg-white"></span> Script & Lettering</li>
                <li className="flex items-center gap-4"><span className="w-8 h-[1px] bg-white"></span> Portraits</li>
                <li className="flex items-center gap-4"><span className="w-8 h-[1px] bg-white"></span> Large-Scale Pieces</li>
                <li className="flex items-center gap-4"><span className="w-8 h-[1px] bg-white"></span> Cover-Ups</li>
              </ul>
              <div className="bg-[#111] p-6 mb-8 border-l-4 border-white">
                <p className="font-sans text-sm text-white/70 uppercase tracking-wide">
                  <strong>Note:</strong> Custom designs and large scale work require a deposit prior to booking.
                </p>
              </div>
              <Button asChild className="w-full">
                <a href="#messenger">Discuss Your Idea</a>
              </Button>
            </div>

            {/* Piercings */}
            <div className="border border-white/20 p-8 md:p-12 relative overflow-hidden flex flex-col">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
              <h3 className="font-gothic text-5xl text-white mb-8 border-b border-white/20 pb-6">Piercings</h3>
              <p className="font-sans text-lg text-white/70 leading-relaxed mb-8 flex-1">
                Handled exclusively by Grace, our resident professional piercer. We use only high-quality, implant-grade jewelry for all procedures ensuring safe healing and sharp aesthetics.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-12 font-condensed text-lg tracking-wider text-white/90 uppercase">
                <div>Ear (Lobe, Cartilage)</div>
                <div>Nose (Nostril, Septum)</div>
                <div>Facial</div>
                <div>Navel</div>
              </div>
              <Button asChild variant="outline" className="w-full mt-auto">
                <a href="#messenger">Inbox Us About Availability</a>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
