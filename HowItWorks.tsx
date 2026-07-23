import { Camera, Sparkles, ShieldCheck, MessageCircle, Repeat, Store, Gift } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "Lägg in din vara",
      description: "Bilder, pris och kategori på under en minut. Gratis, alltid.",
      color: "bg-bytia-lime-green"
    },
    {
      icon: Sparkles,
      title: "Swipa och matcha",
      description: "Hitta varor du vill ha och få smarta matchningar på det du redan lagt upp.",
      color: "bg-bytia-sage"
    },
    {
      icon: ShieldCheck,
      title: "Byt eller köp tryggt",
      description: "Säker betalning med BankID och köparskydd i varje affär.",
      color: "bg-bytia-lavender"
    },
    {
      icon: MessageCircle,
      title: "Chatta och genomför",
      description: "Kom överens, välj frakt eller lokal upphämtning. Klart.",
      color: "bg-bytia-brown"
    }
  ];

  const ways = [
    {
      icon: Repeat,
      title: "Byt",
      description: "Swipa, matcha och byt direkt med någon annan."
    },
    {
      icon: Store,
      title: "Köp och sälj",
      description: "Vanliga annonser. Säljaren behåller 100%."
    },
    {
      icon: Gift,
      title: "Skänk vidare",
      description: "Ge bort det du inte behöver. Hämtas på plats eller skickas."
    }
  ];

  return (
    <section className="py-20 bg-bytia-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-bytia-dark-green font-neighbor mb-6">
            Så funkar det
          </h2>
          <p className="text-lg text-bytia-dark-green/70 font-poppins max-w-3xl mx-auto leading-relaxed">
            Fyra steg från vara till avslutad affär. Samma flöde oavsett om du byter, säljer eller skänker vidare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.title} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-20 h-20 ${step.color} rounded-full mx-auto mb-6 flex items-center justify-center text-white text-xl font-bold transform group-hover:scale-110 transition-transform duration-300`}>
                  {index + 1}
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg transform group-hover:scale-105 transition-transform duration-300 h-full">
                  <div className="mb-4 flex justify-center">
                    <IconComponent className="w-10 h-10 text-bytia-dark-green" />
                  </div>
                  <h4 className="text-lg font-bold text-bytia-dark-green font-neighbor mb-3">{step.title}</h4>
                  <p className="text-sm text-bytia-dark-green/80 font-poppins leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Four ways */}
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h3 className="text-2xl font-bold text-bytia-dark-green font-neighbor mb-8 text-center">
            Fyra sätt att göra affär
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {ways.map((way) => {
              const IconComponent = way.icon;
              return (
                <div key={way.title} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-12 h-12 bg-bytia-lime-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-bytia-lime-green" />
                  </div>
                  <h4 className="text-lg font-bold text-bytia-dark-green font-neighbor mb-2">{way.title}</h4>
                  <p className="text-sm text-bytia-dark-green/80 font-poppins">{way.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
