import { Check, Sparkles, ShieldCheck, Target } from "lucide-react";

const Hero = () => {

  return (
    <section className="relative min-h-screen bg-bytia-cream overflow-hidden">
      {/* Animated background elements - hidden on mobile to prevent overflow */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Floating bubbles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-bytia-lime-green/30 rounded-full animate-float"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-bytia-lavender/40 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-bytia-mint/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-64 left-1/3 w-12 h-12 bg-bytia-sage/40 rounded-full animate-float" style={{animationDelay: '3s'}}></div>

        {/* Geometric shapes */}
        <div className="absolute top-20 right-32 w-8 h-8 bg-bytia-lime-green transform rotate-45 animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 right-20 w-6 h-6 bg-bytia-lavender transform rotate-12 animate-float" style={{animationDelay: '2.5s'}}></div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 2xl:px-12 pt-16 sm:pt-20 lg:py-16 pb-8 sm:pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">
          {/* Left side */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 lg:space-y-12 animate-fade-in order-1 lg:order-1">
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Badge - desktop */}
              <div className="hidden sm:inline-flex items-center space-x-2 sm:space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3 text-bytia-dark-green font-semibold shadow-lg">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-bytia-lime-green" />
                <span className="text-xs sm:text-sm">Betan är live &middot; 1 000 testare</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-bytia-dark-green font-neighbor leading-tight tracking-tight">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <img
                    src="https://zvxciqgburegwveukspt.supabase.co/storage/v1/object/public/order_attachments/logos/Bytia-Full-Logo-Green.svg"
                    alt="Bytia logotyp"
                    className="h-14 sm:h-14 md:h-16 lg:h-18 xl:h-20 2xl:h-24 w-auto"
                  />
                </div>
                Vi gör bytet lika<br />
                <span className="text-bytia-lime-green">enkelt som köpet.</span>
              </h1>

              {/* Badge - mobile */}
              <div className="sm:hidden inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-3 text-bytia-dark-green font-semibold shadow-lg">
                <Sparkles className="w-4 h-4 text-bytia-lime-green" />
                <span className="text-sm">Betan är live &middot; 1 000 testare</span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-bytia-dark-green/80 font-poppins">
                  Byt, köp, sälj och skänk. Tryggt, på ett ställe.
                </p>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-6 lg:space-y-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg">
                <div className="space-y-3 sm:space-y-3 text-bytia-dark-green/90 font-poppins max-w-xl mx-auto lg:mx-0">
                  <div className="flex items-start space-x-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-bytia-lime-green mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-base font-medium leading-relaxed">Slut på samma annons i fem olika appar och grupper</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-bytia-lime-green mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-base font-medium leading-relaxed">Lägg in en vara på under en minut - gratis, alltid</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-bytia-lime-green mt-1 flex-shrink-0" />
                    <span className="text-xs sm:text-base font-medium leading-relaxed">BankID, köparskydd och frakt i varje affär</span>
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-left py-2">
                <p className="text-base sm:text-lg font-bold text-bytia-dark-green font-poppins flex items-center justify-center lg:justify-start gap-2">
                  <Target className="w-5 h-5 text-bytia-lime-green" />
                  Ladda ner betan och kom igång direkt
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-2xl mx-auto lg:mx-0">
                <a
                  href="https://apps.apple.com/app/bytia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-300 mx-auto sm:mx-0"
                >
                  <img
                    src="https://i.imgur.com/cWGC4wc.png"
                    alt="Ladda ner på App Store"
                    className="h-16 sm:h-16 lg:h-18 w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bytia.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-105 transition-transform duration-300 mx-auto sm:mx-0"
                >
                  <img
                    src="https://i.imgur.com/g1P0g2c.png"
                    alt="Hämta på Google Play"
                    className="h-16 sm:h-16 lg:h-18 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - phone mockup */}
          <div className="flex justify-center lg:justify-center animate-fade-in order-2 lg:order-2" style={{animationDelay: '0.3s'}}>
            <div className="relative scale-75 sm:scale-90 lg:scale-100">
              <div className="relative w-64 sm:w-72 lg:w-80 h-[480px] sm:h-[576px] lg:h-[640px] bg-bytia-dark-green rounded-[2.5rem] lg:rounded-[3.5rem] p-3 lg:p-5 shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-700">
                <div className="w-full h-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden relative shadow-inner">
                  <img
                    src="https://i.imgur.com/t3RKJWJ.png"
                    alt="Bytia app mockup"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                </div>

                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 lg:w-16 h-0.5 lg:h-1 bg-white/30 rounded-full"></div>
                <div className="absolute top-4 lg:top-6 right-4 lg:right-6 w-2 lg:w-3 h-2 lg:h-3 bg-white/20 rounded-full"></div>
              </div>

              <div className="hidden lg:block absolute -top-8 -left-12 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-bytia-lime-green rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-bytia-dark-green">Behåll 100%</p>
                    <p className="text-xs text-bytia-dark-green/70">Inga försäljningsavgifter</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute -bottom-8 -right-12 bg-white rounded-2xl p-4 shadow-xl animate-float" style={{animationDelay: '1.5s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-bytia-sage rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-bytia-dark-green">Trygg affär</p>
                    <p className="text-xs text-bytia-dark-green/70">BankID &amp; köparskydd</p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block absolute top-1/4 -left-4 lg:-left-8 w-12 lg:w-16 h-12 lg:h-16 bg-bytia-lime-green/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '0.8s'}}>
                <Sparkles className="w-6 lg:w-8 h-6 lg:h-8 text-bytia-lime-green" />
              </div>

              <div className="hidden md:block absolute bottom-1/4 -right-4 lg:-right-8 w-10 lg:w-14 h-10 lg:h-14 bg-bytia-lavender/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2.2s'}}>
                <Check className="w-5 lg:w-7 h-5 lg:h-7 text-bytia-lavender" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
