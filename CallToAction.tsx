import { Repeat, Wallet, ShieldCheck } from "lucide-react";

const CallToAction = () => {

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-bytia-dark-green font-neighbor mb-4 sm:mb-6">
              Var med från början
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-bytia-dark-green/90 font-poppins mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
              Betan är <span className="font-bold text-bytia-lime-green">live och öppen för alla</span>. Ladda ner, lägg in din första vara och börja swipa. Det du tycker nu formar appen framåt.
            </p>
          </div>

          {/* Value proposition */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-bytia-cream/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bytia-lime-green/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Repeat className="w-6 h-6 sm:w-8 sm:h-8 text-bytia-lime-green" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-bytia-dark-green font-neighbor mb-2">
                Byt, köp, sälj, skänk
              </h3>
              <p className="text-bytia-dark-green/80 font-poppins text-sm">
                Alla fyra sätten att göra affär, i en och samma app
              </p>
            </div>

            <div className="bg-bytia-cream/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bytia-sage/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Wallet className="w-6 h-6 sm:w-8 sm:h-8 text-bytia-sage" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-bytia-dark-green font-neighbor mb-2">
                Behåll 100%
              </h3>
              <p className="text-bytia-dark-green/80 font-poppins text-sm">
                Inga försäljningsavgifter och inga boostkrav - du behåller hela försäljningen
              </p>
            </div>

            <div className="bg-bytia-cream/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-bytia-lavender/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-bytia-lavender" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-bytia-dark-green font-neighbor mb-2">
                Tryggt hela vägen
              </h3>
              <p className="text-bytia-dark-green/80 font-poppins text-sm">
                BankID-verifierade användare, köparskydd och inbyggd frakt
              </p>
            </div>
          </div>

          {/* App Store badges */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto mb-6 sm:mb-8">
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

            <p className="text-bytia-dark-green/70 font-poppins text-sm">
              Över <span className="text-bytia-lime-green font-bold">1 000</span> testare är redan igång
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
