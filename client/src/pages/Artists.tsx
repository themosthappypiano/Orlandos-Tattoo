import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/Button";

export default function Artists() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-24 text-center">
            <h1 className="font-gothic text-6xl md:text-8xl text-white mb-6">MEET THE ARTISTS.</h1>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </header>

          <div className="space-y-32">
            
            {/* Orlando */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-5/12 w-full relative">
                {/* Tattoo artist gritty portrait */}
                <div className="absolute inset-0 border-2 border-white translate-x-4 translate-y-4 z-0"></div>
                <img 
                  src="https://pixabay.com/get/ga867813caecf56f4b3609506e83f4940e018765944c081232aee7b98783e32d21674b6fde32d8902a2f2f657f8f7322173cf223d1337293c1b565f2407517f86_1280.jpg" 
                  alt="Orlando" 
                  className="relative z-10 w-full aspect-[4/5] object-cover grayscale"
                />
              </div>
              <div className="md:w-7/12 w-full md:pl-12">
                <h2 className="font-gothic text-6xl text-white mb-4">Orlando</h2>
                <h3 className="font-condensed text-xl tracking-widest text-white/50 uppercase mb-8">Founder • Lead Artist</h3>
                <p className="font-sans text-lg text-white/80 leading-relaxed mb-8">
                  Legacy-driven. Orlando established this studio with a simple philosophy: quality work without the ego. With decades of experience, he specializes in black & grey, traditional, and large-scale custom pieces that stand the test of time.
                </p>
                <Button asChild>
                  <a href="#messenger">Book with Orlando</a>
                </Button>
              </div>
            </div>

            {/* Grace */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-5/12 w-full relative">
                {/* Piercer gritty portrait */}
                <div className="absolute inset-0 border-2 border-white -translate-x-4 translate-y-4 z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" 
                  alt="Grace" 
                  className="relative z-10 w-full aspect-[4/5] object-cover grayscale"
                />
              </div>
              <div className="md:w-7/12 w-full md:pr-12 text-left md:text-right">
                <h2 className="font-gothic text-6xl text-white mb-4">Grace</h2>
                <h3 className="font-condensed text-xl tracking-widest text-white/50 uppercase mb-8">Professional Piercer</h3>
                <p className="font-sans text-lg text-white/80 leading-relaxed mb-8">
                  Precision and patience. Grace ensures every client feels comfortable and confident. From standard lobes to complex ear curations and facial piercings, she executes every modification with clinical perfection.
                </p>
                <Button asChild variant="outline">
                  <a href="#messenger">Consult with Grace</a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
