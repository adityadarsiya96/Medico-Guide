import React from "react";
import Navbar from "../components/Navbar";
import {
  Target,
  Users,
  ShieldCheck,
  GraduationCap,
  UserCheck,
  ArrowRight
} from "lucide-react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero */}
      <section className="bg-rose-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Guidance That’s <span className="text-rose-600">Earned</span>, Not Sold.
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Built by understanding what NEET aspirants actually struggle with —
            lack of clarity, direction, and accountability.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3">
              <Target className="text-rose-600" size={28} />
              <h2 className="text-3xl font-bold text-gray-900">
                The Core Problem
              </h2>
            </div>

            <p className="mt-4 text-gray-600">
              NEET preparation today is overcrowded with noise — endless videos,
              generic strategies, and advice from people who’ve never cleared the exam.
            </p>
            <p className="mt-4 text-gray-600">
              Students don’t fail due to lack of effort.  
              They fail due to <strong>wrong guidance for too long</strong>.
            </p>
          </div>

          <div className="bg-rose-100 rounded-2xl p-8 flex gap-4">
            <ShieldCheck className="text-rose-600" size={32} />
            <p className="text-lg font-semibold text-gray-800">
              MedicoGuide exists to remove confusion and replace it with clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            What Makes MedicoGuide Different
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <UserCheck className="text-rose-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900">
                Verified Mentors
              </h3>
              <p className="mt-3 text-gray-600">
                Mentors are NEET toppers or medical students — not influencers selling motivation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <Users className="text-rose-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900">
                1-on-1 Guidance
              </h3>
              <p className="mt-3 text-gray-600">
                Personalized strategy, progress checks, and honest feedback.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <GraduationCap className="text-rose-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900">
                Execution First
              </h3>
              <p className="mt-3 text-gray-600">
                Less overthinking. More disciplined execution of what actually works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <GraduationCap className="text-rose-600" />
              For NEET Aspirants
            </h2>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>• Confused about strategy</li>
              <li>• Working hard but stuck</li>
              <li>• Need accountability</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <UserCheck className="text-rose-600" />
              For Mentors
            </h2>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>• NEET toppers / medical students</li>
              <li>• Want to guide juniors</li>
              <li>• Build impact & credibility</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-600 py-16 text-center">
        <h2 className="text-3xl font-bold text-white">
          Stop Following Noise. Start Following Clarity.
        </h2>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="https://forms.gle/wJqK53RFZzpgqVHw6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-rose-600 font-semibold rounded-md flex items-center gap-2 hover:bg-gray-100 transition"
          >
            Get Mentorship <ArrowRight size={18} />
          </a>

          <a
            href="https://forms.gle/bHeVfxhRuyYdCvyw6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-rose-700 transition"
          >
            Become a Mentor
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

