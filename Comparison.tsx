import { Check, X } from "lucide-react";

const Comparison = () => {
  const rows = [
    {
      feature: "Köp och sälj",
      bytia: true,
      others: true,
      facebook: true
    },
    {
      feature: "Byte mellan användare",
      bytia: true,
      others: false,
      facebook: true
    },
    {
      feature: "Skänka bort",
      bytia: true,
      others: false,
      facebook: true
    },
    {
      feature: "Köparskydd",
      bytia: true,
      others: true,
      facebook: false
    },
    {
      feature: "BankID-verifierade användare",
      bytia: true,
      others: true,
      facebook: false
    },
    {
      feature: "Swipa och matcha",
      bytia: true,
      others: false,
      facebook: false
    }
  ];

  const Mark = ({ on }: { on: boolean }) => (
    on
      ? <Check className="w-5 h-5 text-bytia-lime-green mx-auto" aria-label="Ja" />
      : <X className="w-5 h-5 text-bytia-dark-green/30 mx-auto" aria-label="Nej" />
  );

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-bytia-dark-green font-neighbor mb-4">
            Slipp ha fyra appar
          </h2>
          <p className="text-base sm:text-lg text-bytia-dark-green/80 font-poppins max-w-2xl mx-auto">
            De andra täcker en del av behovet. Bytia täcker hela.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 sm:p-4 font-poppins text-sm text-bytia-dark-green/70 font-medium"></th>
                <th className="p-3 sm:p-4 font-neighbor text-sm sm:text-base font-bold text-bytia-dark-green bg-bytia-cream rounded-t-xl">Bytia</th>
                <th className="p-3 sm:p-4 font-poppins text-xs sm:text-sm text-bytia-dark-green/70 font-medium">Tradera, Vinted, Blocket</th>
                <th className="p-3 sm:p-4 font-poppins text-xs sm:text-sm text-bytia-dark-green/70 font-medium">Facebook-grupper</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.feature} className={index % 2 === 0 ? "bg-bytia-cream/30" : ""}>
                  <td className="p-3 sm:p-4 font-poppins text-sm text-bytia-dark-green">{row.feature}</td>
                  <td className="p-3 sm:p-4 bg-bytia-cream"><Mark on={row.bytia} /></td>
                  <td className="p-3 sm:p-4"><Mark on={row.others} /></td>
                  <td className="p-3 sm:p-4"><Mark on={row.facebook} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
