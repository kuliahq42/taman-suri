'use client';

import { useState } from 'react';
import { BlogLayout } from "@/components/layout/BlogLayout";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blog";
import { Sparkles, BookOpen, ArrowRight, Leaf } from "lucide-react";


export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <BlogLayout>
      {/* Blog Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-sage-100/50 via-cream-50 to-cream-50" />
          <div className="absolute top-20 left-1/4 w-80 h-80 rounded-full bg-sage-300/20 blur-3xl pointer-events-none" />
          <div className="absolute top-40 right-10 w-80 h-80 rounded-full bg-terracotta/10 blur-3xl pointer-events-none" />
        </div>
        <div className="container-wide text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-forest-800/8 border border-forest-800/10 mb-6">
            <BookOpen className="w-4 h-4 text-forest-800" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-forest-800">
              Taman Suri Journal
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-forest-800 leading-[1.1] tracking-tight mb-5 text-balance">
            Cerita, tips & drama tentang{" "}
            <span className="text-terracotta">tanaman & taman</span>
          </h1>
          <p className="text-base md:text-lg text-sage-700 leading-relaxed">
            Artikel pilihan buat kamu yang pengen merawat tanaman lebih paham,
            atau cuma mau hiburan lewat drama keseharian pecinta tanaman hias.
          </p>
        </div>
      </section>

      {/* Featured + Grid */}
      <section className="pb-20 md:pb-28">
        <div className="container-wide">
          {/* Featured */}
          {featured && (
            <div className="mb-14 md:mb-20">
              <div className="flex items-end justify-between mb-6 md:mb-8">
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-terracotta/10 border border-terracotta/15">
                  <Sparkles className="w-4 h-4 text-terracotta" />
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-terracotta/90">
                    Tulisan Terbaru
                  </span>
                </div>
              </div>
              <BlogCard post={featured} featured index={0} />
            </div>
          )}

          {/* Grid */}
          <div className="mb-10 md:mb-12 flex items-end justify-between">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-forest-800">
              Semua Tulisan
            </h2>
            <span className="text-xs md:text-sm text-sage-600 font-medium flex items-center gap-1.5">
              <Leaf className="w-4 h-4" />
              {blogPosts.length} artikel
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {rest.map((post, idx) => (
              <BlogCard key={post.slug} post={post} index={idx + 1} />
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 md:mt-28 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-sage-100 via-sage-50 to-terracotta/10 border border-sage-200/50 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-cream-50 text-[10px] font-bold uppercase tracking-[0.15em] mb-5">
              <Leaf className="w-3 h-3" />
              Plant Parent Club
            </div>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-forest-800 leading-tight mb-3 max-w-2xl mx-auto">
              Pengen tips berkebun & artikel baru langsung ke inbox?
            </h3>
            <p className="text-sage-700 mb-7 max-w-xl mx-auto">
              Gabung newsletter Taman Suri, dapat artikel, kode promo & tips
              perawatan tanaman setiap minggu.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 rounded-full bg-white border border-forest-800/10 text-charcoal placeholder:text-sage-500 outline-none focus:border-terracotta/60 focus:bg-white transition-all shadow-sm"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-4 text-sm font-bold text-white shadow-lg shadow-terracotta/20 transition-all hover:brightness-110 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}
