import React from 'react';
import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';
import hari from "../Images/Owners/hari.jpeg"
import hd from "../Images/Owners/HD.jpeg"
import hg from "../Images/Owners/HG.jpeg"

const MessageCards = () => {
    return (
        <div className="w-full bg-gradient-to-r from-green-50 via-white to-yellow-50 py-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full opacity-50 -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-100 rounded-full opacity-50 translate-x-20 translate-y-20" />

            {/* Floating flowers */}
            <motion.div
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 left-1/4 text-green-300"
            >
                <Flower2 size={24} />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-8 right-1/4 text-yellow-300"
            >
                <Flower2 size={24} />
            </motion.div>

            <div className="max-w-[1920px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    {/* Founder Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-200 relative group h-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity" />

                        <div className="relative">
                            <div className="absolute -top-2 -left-2 w-full h-full bg-yellow-50 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform" />
                            <img
                                src={hg}
                                alt="founder"
                                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-yellow-200 shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-3xl font-tangerine text-green-950 font-bold text-center mb-2">
                            Late Mr. Beerappanahalli Narasimha Gowda
                        </h2>
                        <h3 className="text-lg text-green-800 text-center mb-2 font-medium font-tinos">Founder</h3>
                        <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent my-3" />
                        <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-transparent pr-2">
                            <p className="font-garamond text-base text-gray-700 leading-relaxed mb-3">
                                It is with immense gratitude and pride that I address you as the Founder of Fresh Mango Matrix - a unit of HD Fruit Alliances. Our journey in the fruit industry spans four generations, built on a foundation of trust, quality, and an unwavering commitment to excellence.
                            </p>
                            <p className="font-garamond text-base text-gray-700 leading-relaxed">
                                This legacy is not just a business for us—it is a responsibility that we uphold with sincerity and dedication.
                            </p>
                        </div>
                    </motion.div>

                    {/* Chairman Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-200 relative group h-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-bl from-yellow-50 to-transparent rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
                        <div className="relative">
                            <div className="absolute -top-2 -left-2 w-full h-full bg-green-50 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform" />
                            <img
                                src={hd}
                                alt="Chairman"
                                className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-yellow-200 shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h2 className="text-3xl font-tangerine text-green-950 font-bold text-center mb-2">
                            Mr. Beerappanahalli Dyavappa
                        </h2>
                        <h3 className="text-lg text-green-800 text-center mb-2 font-medium font-tinos">Co Founder</h3>
                        <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent my-3" />
                        <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-transparent pr-2">
                            <p className="font-garamond text-base text-gray-700 leading-relaxed mb-3">
                                At Fresh Mango Matrix - a unit of HD Fruit Alliances, our mission is simple yet profound—to deliver the finest fruits with the highest standards of freshness, nutrition, and quality.
                            </p>
                            <p className="font-garamond text-base text-gray-700 leading-relaxed">
                                As we move forward, our vision is not only to provide premium fruits but also to create meaningful business opportunities.
                            </p>
                        </div>
                    </motion.div>

                    {/* MD Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-200 relative group h-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent rounded-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
                        <div className="relative">
                            <div className="absolute -top-2 -left-2 w-full h-full bg-yellow-50 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform" />
                            <img
                                src={hari}
                                alt="Managing Director"
                                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-yellow-200 shadow-lg transform group-hover:scale-110 transition-transform duration-300 object-cover"
                            />
                        </div>

                        <h2 className="text-3xl font-tangerine text-green-950 font-bold text-center mb-2">
                            Mr. Hari Krishna D
                        </h2>
                        <h3 className="text-lg text-green-800 text-center mb-2 font-tinos font-medium">Managing Director</h3>
                        <div className="h-px bg-gradient-to-r from-transparent via-green-200 to-transparent my-3" />
                        <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-transparent pr-2">
                            <p className="font-garamond text-base text-gray-700 leading-relaxed mb-3">
                                At Fresh Mango Matrix, our commitment to quality and sustainability drives everything we do. We take pride in delivering the freshest and finest fruits, sourced responsibly and with care.
                            </p>
                            <p className="font-garamond text-base text-gray-700 leading-relaxed">
                                Our journey is rooted in tradition yet embraces innovation, ensuring that every customer experiences the best nature has to offer.
                            </p>

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MessageCards;