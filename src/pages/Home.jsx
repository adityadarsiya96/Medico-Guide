import React from "react";
import Navbar from "../components/Navbar";
import { HeartPulse, Stethoscope, ShieldCheck } from "lucide-react";
import Footer from "../components/Footer";


const Home = () => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-rose-50 to-white">
            


            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                        Learn from the{" "}
                        <span className="text-rose-600">Toppers</span>,
                        <br />
                        Not Random YouTubers.
                    </h1>

                    <p className="mt-6 text-lg text-gray-600 max-w-xl">
                        Medico-Guide connects NEET aspirants directly with toppers and
                        verified mentors for 1-on-1 guidance, strategy, and accountability.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="px-6 py-3 bg-rose-500 text-white rounded-md text-lg font-semibold hover:bg-rose-600 transition shadow-lg">
                            Get Mentorship
                        </button>

                        <button className="px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-md text-lg font-semibold hover:bg-gray-100 transition">
                            Become a Mentor
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-10 flex items-center gap-8 text-sm text-gray-500">
                        <div>
                            <span className="text-xl font-bold text-gray-900">500+</span>
                            <br />
                            Active Students
                        </div>
                        <div>
                            <span className="text-xl font-bold text-gray-900">120+</span>
                            <br />
                            Verified Mentors
                        </div>
                        <div>
                            <span className="text-xl font-bold text-gray-900">4.9★</span>
                            <br />
                            Average Rating
                        </div>
                    </div>
                </div>

                {/* Right Visual */}

                <div className="hidden md:flex justify-center">
                    <div className="relative">

                        {/* Soft Background Accent */}
                        <div className="w-80 h-80 rounded-3xl bg-rose-500/10 absolute -top-6 -left-6"></div>

                        {/* Main Card */}
                        <div className="w-80 h-80 rounded-3xl  shadow-2xl flex flex-col items-center justify-center gap-6 p-6">

                            {/* Medical Icon Cluster */}
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full bg-rose-100 flex items-center justify-center">
                                    <HeartPulse size={42} className="text-rose-600" />
                                </div>

                                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
                                    <Stethoscope size={20} className="text-rose-600" />
                                </div>
                            </div>

                            {/* Text */}
                            <p className="text-center text-lg font-semibold text-gray-700 leading-snug">
                                Structured, mentor-led preparation
                                for serious NEET aspirants.
                            </p>

                            {/* Trust Badge */}
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                                <ShieldCheck size={16} className="text-rose-600" />
                                Verified Medical Mentorship
                            </div>

                        </div>
                    </div>
                </div>



            </section>
            
        </div>
    );
};

export default Home;

