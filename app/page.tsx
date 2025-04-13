'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

const EarlyAccessCampaign = () => {
  // Všechny existující stavy a funkce zůstávají stejné
  const [remainingSpots, setRemainingSpots] = useState(500 - 189);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
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
    const timer = setInterval(calculateTimeLeft, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/xldjzvlv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitSuccess(true);
        setRemainingSpots((prev) => prev - 1);
        setEmail("");
      } else {
        alert("Something went wrong. Try again later.");
      }
    } catch (error) {
      alert("Failed to submit. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Floating Quick Action Button - beze změny */}
      {!submitSuccess && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <a
            href="#signup-form"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            Join Now
          </a>
        </div>
      )}

      {/* Hero section s přidaným logem */}
      <section className="relative py-28 px-4 text-center border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-gray-950 -z-10" />
        <div className="max-w-3xl mx-auto">
          {/* Přidané logo - jediná změna v celém kódu */}
     
          {/* Všechno ostatní zůstává přesně stejné */}
          <div className="inline-flex items-center bg-gray-900 text-amber-400 text-sm px-4 py-1.5 rounded-full mb-6 border border-amber-400/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Campaign ends in {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            AI Beta Testing
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join our <span className="font-semibold text-white">3-month exclusive testing</span> and earn permanent benefits.
          </p>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-md mx-auto mb-12">
            <div className="flex justify-between text-sm mb-3">
              <span className="text-gray-400">Available spots:</span>
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

      {/* Všechny následující sekce zůstávají beze změny */}
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">
          How the <span className="text-blue-400">beta testing</span> will work?
        </h2>
        <div className="space-y-12">
          {[
            {
              date: "July 1-15",
              title: "Participant Selection",
              description: "First 500 applicants will receive access to the closed beta",
              icon: "🔒",
            },
            {
              date: "July 16 - Sept 15",
              title: "Testing Phase",
              description: "Daily feedback, weekly Q&A sessions, exclusive updates",
              icon: "🚀",
            },
            {
              date: "Sept 30",
              title: "Tester Rewards",
              description: "All participants receive lifetime 20% discount",
              icon: "🏆",
            },
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

      <section className="py-20 px-4 bg-gray-950 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How <span className="text-blue-400">LeadBot AI</span> helps you close more deals
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            LeadBot AI automatically finds new potential clients in your target area, qualifies them based on their activity, and sends them directly to you – saving you hours of manual work.
          </p>

          <div className="mb-10">
            <div className="aspect-w-16 aspect-h-9 w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-800 shadow-xl">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                <source src="/leadbot-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-sm text-gray-500 mt-3">Short demo of how LeadBot AI finds and delivers leads</p>
          </div>

          <a href="#signup-form" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-3 px-8 rounded-lg shadow transition-all duration-300 mb-10">
            Get Early Access
          </a>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                emoji: "🔍",
                title: "Finds new clients",
                desc: "Scans multiple sources to identify people actively looking to buy or sell properties in your area.",
              },
              {
                emoji: "🤖",
                title: "Automates outreach",
                desc: "Sends smart, personalized messages that increase response rates and start real conversations.",
              },
              {
                emoji: "💰",
                title: "Boosts your income",
                desc: "Spend less time prospecting and more time closing deals that matter.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                <div className="text-2xl mb-2">{item.emoji}</div>
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="signup-form" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get <span className="text-amber-400">lifetime benefits</span> for your feedback
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {["🎁 3 months free", "💬 Direct developer access", "🏆 20% discount forever"].map((item, index) => (
              <div key={index} className="bg-gray-900/80 border border-gray-800 rounded-lg p-4">
                {item}
              </div>
            ))}
          </div>

          {submitSuccess ? (
            <div className="bg-green-900/50 text-green-400 p-4 rounded-lg mb-6">
              Success! Confirmation email coming soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email"
                  required
                  className="flex-grow px-5 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 whitespace-nowrap ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:from-blue-500 hover:to-cyan-400"
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Join Now"}
                </button>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                By submitting, you agree to our{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  beta testing terms
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
