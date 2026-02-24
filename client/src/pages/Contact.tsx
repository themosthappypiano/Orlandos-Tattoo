import { PageTransition } from "@/components/layout/PageTransition";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/bjYbXgCR/Chat-GPT-Image-Feb-24-2026-09-00-58-AM.png" 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="mb-20 text-center">
            <h1 className="font-gothic text-6xl md:text-8xl text-white mb-6">FIND US.</h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 border border-white/20">
            
            {/* Info Panel */}
            <div className="p-8 md:p-16 flex flex-col justify-center bg-[#0A0A0A]">
              <div className="space-y-12">
                
                <div className="flex items-start gap-6 group">
                  <MapPin className="w-8 h-8 text-white/50 group-hover:text-white transition-colors mt-1" />
                  <div>
                    <h3 className="font-condensed text-xl tracking-widest text-white/50 uppercase mb-2">Location</h3>
                    <p className="font-sans text-xl font-medium text-white">17023 Nanes Dr.<br/>Houston, TX 77090</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <Clock className="w-8 h-8 text-white/50 group-hover:text-white transition-colors mt-1" />
                  <div>
                    <h3 className="font-condensed text-xl tracking-widest text-white/50 uppercase mb-2">Hours</h3>
                    <p className="font-sans text-xl font-medium text-white">Opens daily at 2:00 PM</p>
                    <p className="font-condensed text-sm tracking-wider text-white/60 uppercase mt-2 border border-white/20 inline-block px-3 py-1">Walk-ins first come, first served</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <Phone className="w-8 h-8 text-white/50 group-hover:text-white transition-colors mt-1" />
                  <div>
                    <h3 className="font-condensed text-xl tracking-widest text-white/50 uppercase mb-2">Phone</h3>
                    <a href="tel:+18326182538" className="font-sans text-xl font-medium text-white hover:underline">+1 832-618-2538</a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <Mail className="w-8 h-8 text-white/50 group-hover:text-white transition-colors mt-1" />
                  <div>
                    <h3 className="font-condensed text-xl tracking-widest text-white/50 uppercase mb-2">Email</h3>
                    <a href="mailto:orlando.tattoo.est82@gmail.com" className="font-sans text-lg font-medium text-white hover:underline break-all">orlando.tattoo.est82@gmail.com</a>
                  </div>
                </div>

              </div>

              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="font-sans text-3xl font-bold text-center text-white">Houston's own.</p>
              </div>
            </div>

            {/* Map Area */}
            <div className="relative min-h-[400px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/20">
              {/* Grayscale filter applied to iframe via CSS to maintain aesthetic */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.5186591689255!2d-95.45266858488602!3d29.99321398189871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cca9eb6a1111%3A0xc34a406691be5a0a!2s17023%20Nanes%20Dr%2C%20Houston%2C%20TX%2077090!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                className="absolute inset-0 w-full h-full grayscale contrast-125 opacity-80" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
