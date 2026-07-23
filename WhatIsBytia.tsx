import { Check, Shield, Truck, MessageCircle, CreditCard } from "lucide-react";

const WhatIsBytia = () => {
  const problems = [
    {
      title: "Samma annons på fem ställen",
      description: "Att sälja eller byta begagnat innebär idag att lägga upp samma sak på flera tjänster och hålla koll på var och en. Det tar tid, och många avstår därför helt."
    },
    {
      title: "Allt är utspritt",
      description: "Köp, byte och skänkning ligger på separata plattformar och i tusentals grupper. Utan en samlad plats förblir mycket av värdet i våra hem oanvänt."
    },
    {
      title: "Otryggt att handla",
      description: "I många kanaler saknas köparskydd och verifierade motparter. Osäkerheten gör att många låter bli."
    }
  ];

  const features = [
    {
      title: "Lägg in din vara",
      description: "Bilder, pris och kategori på under en minut. Gratis, alltid."
    },
    {
      title: "Swipa och matcha",
      description: "Hitta varor du vill ha och få smarta matchningar på det du redan lagt upp."
    },
    {
      title: "Byt eller köp tryggt",
      description: "Säker betalning med BankID och köparskydd i varje affär."
    },
    {
      title: "Chatta och genomför",
      description: "Kom överens, välj frakt eller lokal upphämtning. Klart."
    }
  ];

  const smartFeatures = [
    {
      icon: Shield,
      title: "BankID-verifiering",
      description: "Alla användare är verifierade"
    },
    {
      icon: CreditCard,
      title: "Köparskydd i varje affär",
      description: "Säker betalning och omdömen"
    },
    {
      icon: Truck,
      title: "Inbyggd frakt",
      description: "Skicka enkelt med våra partners"
    },
    {
      icon: MessageCircle,
      title: "Chatt direkt i appen",
      description: "Säker kommunikation med köpare och säljare"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-bytia-dark-green font-neighbor mb-4 sm:mb-6">
            Second hand är krångligare än det borde vara
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-bytia-dark-green/90 font-poppins max-w-3xl mx-auto leading-relaxed px-4">
            Marknaden växer snabbt, men upplevelsen är fortfarande splittrad, tidskrävande och otrygg. Bytia samlar byte, köp, försäljning och skänkning på ett ställe.
          </p>
        </div>

        {/* The problem */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          {problems.map((problem, index) => (
            <div key={index} className="bg-bytia-cream/70 rounded-xl sm:rounded-2xl p-5 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-bytia-dark-green font-neighbor mb-2 sm:mb-3">
                {problem.title}
              </h3>
              <p className="text-sm text-bytia-dark-green/80 font-poppins leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto mb-12 sm:mb-16">
          {/* How it works */}
          <div className="animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-bold text-bytia-dark-green font-neighbor mb-6 sm:mb-8 text-center lg:text-left">
              Allt på ett ställe
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-bytia-lime-green rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-bytia-dark-green font-neighbor mb-1 sm:mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm sm:text-base text-bytia-dark-green/80 font-poppins">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Smart features */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl sm:text-2xl font-bold text-bytia-dark-green font-neighbor mb-6 sm:mb-8 text-center lg:text-left">
              Trygghet inbyggt
            </h3>
            <div className="grid gap-4 sm:gap-6">
              {smartFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-bytia-cream/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-bytia-lime-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-bytia-lime-green" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-semibold text-bytia-dark-green font-neighbor">
                          {feature.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-bytia-dark-green/80 font-poppins">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Family angle */}
        <div className="max-w-4xl mx-auto bg-bytia-cream/70 rounded-2xl p-6 sm:p-8 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-xl sm:text-2xl font-bold text-bytia-dark-green font-neighbor mb-3">
            Byggd för hela familjen
          </h3>
          <p className="text-sm sm:text-base text-bytia-dark-green/80 font-poppins leading-relaxed max-w-2xl mx-auto">
            Barn från 7 år kan swipa och byta själva, till exempel ett Pokémonkort mot en leksak. Barnsaker byter ägare hela tiden när barnen växer - nu på ett ställe, tryggt.
          </p>
        </div>

        {/* Transparent pricing line */}
        <div className="max-w-3xl mx-auto text-center mt-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-bytia-dark-green/70 font-poppins leading-relaxed">
            Gratis att ladda ner, annonsera och skänka vidare. Säljaren behåller 100% av försäljningen.
            Köparskydd 4,50 kr + 5% betalas av köparen. Byte 29 kr per person - eller 39 kr/mån för fria byten, utan bindningstid.
            {" "}
            <a href="/how-bytia-works" className="text-bytia-lime-green font-semibold hover:underline">
              Så funkar Bytia
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsBytia;
