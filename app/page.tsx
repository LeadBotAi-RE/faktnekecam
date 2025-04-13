'use client';

import React, { useState, useEffect } from "react";

const EarlyAccessCampaign = () => {
  // Dynamické počítadlo
  const [remainingSpots, setRemainingSpots] = useState(500 - 189);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    // Výpočet zbývajícího času
    const calculateTimeLeft = () => {
      const endDate = new Date("2025-06-30T23:59:59");
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Aktualizace každou minutu

    return () => clearInterval(timer);
  }, []);

  // Formulářové handlery
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulace API callu
    setTimeout(() => {
      console.log("Email submitted:", email);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setRemainingSpots(prev => prev - 1);
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero sekce */}
      <section className="relative py-28 px-4 text-center border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-gray-950 -z-10" />
        
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-gray-900 text-amber-400 text-sm px-4 py-1.5 rounded-full mb-6 border border-amber-400/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Kampaň končí za {timeLeft.days} dní {timeLeft.hours}h {timeLeft.minutes}m
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            AI Beta Testování
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Přidejte se k <span className="font-semibold text-white">3měsíčnímu exkluzivnímu testování</span> a získejte trvalé výhody jako odměnu.
          </p>
          
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-md mx-auto mb-12">
            <div className="flex justify-between text-sm mb-3">
              <span className="text-gray-400">Volná místa:</span>
              <span className="font-bold text-amber-400">{remainingSpots}/500</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full" 
                style={{ width: `${((500 - remainingSpots) / 500) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tři fáze kampaně */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
          Jak bude <span className="text-blue-400">beta testování</span> probíhat?
        </h2>
        
        <div className="space-y-12">
          {[
            {
              date: "1.7. – 15.7.",
              title: "Výběr účastníků",
              description: "Prvních 500 zájemců obdrží přístup k uzavřené beta verzi",
              icon: "🔒"
            },
            {
              date: "16.7. – 15.9.",
              title: "Testovací fáze",
              description: "Denní feedback, týdenní Q&A s týmem, exkluzivní updaty",
              icon: "🚀"
            },
            {
              date: "30.9.",
              title: "Odměna pro testery",
              description: "Všichni účastníci získají doživotní 20% slevu na plnou verzi",
              icon: "🏆"
            }
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="bg-gray-900 border border-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-xl mt-1 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="text-sm text-blue-400 font-mono">{item.date}</div>
                <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA s odměnami */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Získejte <span className="text-amber-400">doživotní výhody</span> za váš feedback
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              "🎁 3 měsíce zdarma",
              "💬 Přímá linka na vývojáře",
              "🏆 20% sleva navždy"
            ].map((item, index) => (
              <div key={index} className="bg-gray-900/80 border border-gray-800 rounded-lg p-4">
                {item}
              </div>
            ))}
          </div>
          
          {submitSuccess ? (
            <div className="bg-green-900/50 text-green-400 p-4 rounded-lg mb-6">
              Úspěšně odesláno! Brzy vám přijde potvrzovací email.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Váš pracovní email"
                  required
                  className="flex-grow px-5 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 whitespace-nowrap ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-500 hover:to-cyan-400'
                  }`}
                >
                  {isSubmitting ? 'Odesílám...' : 'Přihlásit se'}
                </button>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Odesláním souhlasíte s{' '}
                <a href="#" className="text-blue-400 hover:underline">
                  podmínkami beta testování
                </a>.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default EarlyAccessCampaign;