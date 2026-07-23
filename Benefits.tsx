import { Leaf, Wallet, Sparkles, Users } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Wallet,
      title: "Spara pengar",
      description: "Byt istället för att köpa nytt, eller sälj utan att betala en krona i försäljningsavgift.",
      bgColor: "bg-bytia-cream",
      iconBg: "bg-bytia-lime-green/20",
      iconColor: "text-bytia-lime-green"
    },
    {
      icon: Leaf,
      title: "Minska klimatavtrycket",
      description: "Varje sak som byter ägare är en sak som inte behöver tillverkas på nytt.",
      bgColor: "bg-bytia-dark-green",
      iconBg: "bg-bytia-sage/20",
      iconColor: "text-bytia-sage",
      isInverted: true
    },
    {
      icon: Sparkles,
      title: "Roligare än att scrolla",
      description: "Swipa dig genom flödet och hitta fynd du inte visste att du letade efter.",
      bgColor: "bg-bytia-lavender/30",
      iconBg: "bg-bytia-lavender/40",
      iconColor: "text-bytia-lavender"
    },
    {
      icon: Users,
      title: "Hela familjen",
      description: "Barn från 7 år kan swipa och byta själva. Barnsakerna får nytt liv istället för att samla damm.",
      bgColor: "bg-bytia-peach",
      iconBg: "bg-bytia-brown/20",
      iconColor: "text-bytia-brown"
    }
  ];

  return (
    <section className="py-20 bg-bytia-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-bytia-dark-green font-neighbor mb-6">
            Varför Bytia?
          </h2>
          <p className="text-xl text-bytia-dark-green/80 font-poppins max-w-2xl mx-auto">
            Det finns miljarder i outnyttjat värde i svenska hem. Vi sätter det i cirkulation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="animate-fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${benefit.bgColor} rounded-3xl p-8 text-center h-full transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/50`}>
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    <div className={`w-16 h-16 ${benefit.iconBg} rounded-full flex items-center justify-center`}>
                      <IconComponent className={`w-8 h-8 ${benefit.iconColor}`} />
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold font-neighbor mb-4 ${benefit.isInverted ? 'text-white' : 'text-bytia-dark-green'}`}>
                    {benefit.title}
                  </h3>
                  <p className={`font-poppins leading-relaxed ${benefit.isInverted ? 'text-white/90' : 'text-bytia-dark-green/80'}`}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Categories */}
        <div className="mt-16 text-center animate-fade-in">
          <p className="text-sm font-semibold text-bytia-dark-green/70 font-poppins mb-4">Kategorier</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white/70 rounded-full px-5 py-2 text-sm font-medium text-bytia-dark-green font-poppins">Mode</span>
            <span className="bg-white/70 rounded-full px-5 py-2 text-sm font-medium text-bytia-dark-green font-poppins">Hem &amp; hushåll</span>
            <span className="bg-white/70 rounded-full px-5 py-2 text-sm font-medium text-bytia-dark-green font-poppins">Barn &amp; familj</span>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-4xl font-bold text-bytia-lime-green font-neighbor mb-2">1 000</div>
            <p className="text-bytia-dark-green/80 font-poppins">Testare är redan igång</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-bytia-sage font-neighbor mb-2">4 sätt</div>
            <p className="text-bytia-dark-green/80 font-poppins">Byt, köp, sälj och skänk</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-bytia-lavender font-neighbor mb-2">0 kr</div>
            <p className="text-bytia-dark-green/80 font-poppins">I försäljningsavgifter</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
