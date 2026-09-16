import React from 'react';
import { Star, Quote, CheckCircle2, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/legalData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-400/20 mb-3">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            Kepercayaan Lebih dari 5.800+ Klien di Indonesia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
            Apa Kata Para Pendiri Usaha tentang BikinLegal.com
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Kisah sukses pengusaha UMKM, startup, dan pengurus yayasan yang telah melegalkan badan usaha mereka bersama kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-200"
            >
              <div>
                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-600" />
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-700/60">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-blue-400/40"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {t.role}, {t.company}
                    </p>
                    <span className="text-[10px] text-blue-400 font-semibold block mt-1">
                      {t.serviceUsed} • {t.city}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 pt-10 border-t border-slate-800 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-slate-400">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-white font-display">5.800+</div>
            <span className="text-slate-400 mt-1 block">Badan Usaha Diresmikan</span>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden sm:block"></div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-display">100%</div>
            <span className="text-slate-400 mt-1 block">Valid AHU Kemenkumham</span>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden sm:block"></div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-display">34</div>
            <span className="text-slate-400 mt-1 block">Provinsi Seluruh Indonesia</span>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden sm:block"></div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-blue-400 font-display">4.9 / 5.0</div>
            <span className="text-slate-400 mt-1 block">Kepuasan Klien Terverifikasi</span>
          </div>
        </div>

      </div>
    </section>
  );
};
