import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Mail, Phone } from "lucide-react";

export default function Book() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-black flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto border border-white/20 p-8 md:p-16 relative">
            <div className="absolute top-0 right-0 p-4 font-condensed tracking-widest text-white/20 text-6xl opacity-50 select-none hidden sm:block">
              01
            </div>
            
            <header className="mb-16">
              <h1 className="font-gothic text-6xl md:text-8xl text-white mb-6">READY TO START?</h1>
              <p className="font-sans text-xl text-white/70 max-w-2xl">
                We keep it simple. No complex forms. Real conversations for real art.
              </p>
            </header>

            <div className="space-y-12 mb-16">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 border border-white flex items-center justify-center font-condensed text-xl font-bold">1</div>
                <div>
                  <h3 className="font-condensed text-2xl tracking-wider uppercase mb-2">Message Us</h3>
                  <p className="font-sans text-white/60">Hit us up on Facebook Messenger—it's the fastest way to get a response during shop hours.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 border border-white flex items-center justify-center font-condensed text-xl font-bold">2</div>
                <div>
                  <h3 className="font-condensed text-2xl tracking-wider uppercase mb-2">Tell Us Your Idea</h3>
                  <p className="font-sans text-white/60">Send reference photos, placement ideas, and approximate sizing.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 border border-white flex items-center justify-center font-condensed text-xl font-bold">3</div>
                <div>
                  <h3 className="font-condensed text-2xl tracking-wider uppercase mb-2">We'll Guide You</h3>
                  <p className="font-sans text-white/60">We'll give you a quote, pair you with the right artist, and lock in a date.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 border-t border-white/20">
              <Button asChild size="lg" className="w-full flex gap-3 h-16 text-lg">
                <a href="#messenger">
                  <MessageCircle size={20} />
                  Message on Facebook
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full flex gap-3 h-16 text-lg">
                <a href="mailto:orlando.tattoo.est82@gmail.com">
                  <Mail size={20} />
                  Email Us
                </a>
              </Button>
            </div>

            <div className="mt-12 text-center">
              <p className="font-condensed tracking-widest text-sm text-white/40 uppercase mb-4">Or give the shop a call</p>
              <a href="tel:+18326182538" className="inline-flex items-center gap-2 font-condensed text-3xl hover:text-white/70 transition-colors">
                <Phone size={24} /> +1 832-618-2538
              </a>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
