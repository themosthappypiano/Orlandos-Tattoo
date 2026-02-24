import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <h2 className="font-gothic text-4xl mb-4 text-white">Orlando's</h2>
            <p className="text-white/60 font-sans max-w-md mb-6">
              Houston's own tattoo & piercing studio. Custom ink. Trusted piercings. Walk-ins welcome daily. Proudly Latino-owned.
            </p>
            <p className="font-condensed tracking-widest text-sm text-white/40 uppercase">
              LGBTQ+ Friendly
            </p>
          </div>

          <div>
            <h3 className="font-condensed text-xl mb-6 text-white uppercase tracking-wider">Explore</h3>
            <ul className="space-y-4 font-sans text-white/60">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/artists" className="hover:text-white transition-colors">Artists</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/book" className="hover:text-white transition-colors">Book a Session</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-condensed text-xl mb-6 text-white uppercase tracking-wider">Location</h3>
            <ul className="space-y-4 font-sans text-white/60">
              <li>17023 Nanes Dr.</li>
              <li>Houston, TX 77090</li>
              <li className="pt-2"><a href="tel:+18326182538" className="hover:text-white transition-colors">+1 832-618-2538</a></li>
              <li><a href="mailto:orlando.tattoo.est82@gmail.com" className="hover:text-white transition-colors text-sm break-all">orlando.tattoo.est82@gmail.com</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-white/40">
            &copy; {new Date().getFullYear()} Orlando's Tattoo Studio. All rights reserved.
          </p>
          <div className="flex gap-6 font-condensed tracking-widest text-sm text-white/40 uppercase">
            <a href="#facebook" className="hover:text-white transition-colors">Facebook</a>
            <a href="#instagram" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
