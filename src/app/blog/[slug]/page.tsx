import { useState } from 'react';
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BlogLayout } from "@/components/layout/BlogLayout";
import { BlogCard } from "@/components/blog/BlogCard";
import {
  blogPosts,
  getAllBlogSlugs,
  getPostBySlug,
  type BlogPost,
} from "@/data/blog";
import {
  CalendarDays,
  Clock3,
  ArrowLeft,
  MessageCircle,
  Leaf,
  Tag,
  ArrowRight,
} from "lucide-react";
import { FadeIn } from "@/components/motion/MotionWrap";

const formatDate = (iso: string) => {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};

const categoryColors: Record<BlogPost["category"], string> = {
  Kepo: "bg-moss-50 text-moss-700 border-moss-200",
  "Drama & Humor": "bg-terracotta/10 text-terracotta border-terracotta/20",
  "Tips & Tutorial": "bg-sage-100 text-sage-700 border-sage-200",
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Blog Taman Suri`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

const renderContent = (content: string) => {
  const paragraphs = content
    .split(/\n\n+/)
    .filter((p) => p.trim().length > 0);
  return paragraphs.map((p, idx) => {
    const trimmed = p.trim();
    const isOrdered = /^[0-9]+\.\s/m.test(trimmed);
    if (isOrdered) {
      const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
      return (
        <ol
          key={idx}
          className="space-y-3 my-5 pl-1 list-none"
        >
          {lines.map((l, i) => {
            const cleaned = l.replace(/^[0-9]+\.\s*/, "");
            const match = cleaned.match(/^([^:]+):\s*(.*)$/);
            if (match) {
              const [, label, body] = match;
              return (
                <li key={i} className="flex gap-3">
                  <span className="font-serif flex-shrink-0 w-8 h-8 mt-0.5 rounded-full bg-sage-100 text-forest-800 flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </span>
                  <p className="text-charcoal/85 leading-relaxed">
                    <strong className="text-forest-800">{label}:</strong> {body}
                  </p>
                </li>
              );
            }
            return (
              <li key={i} className="flex gap-3">
                <span className="font-serif flex-shrink-0 w-8 h-8 mt-0.5 rounded-full bg-sage-100 text-forest-800 flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-charcoal/85 leading-relaxed">{cleaned}</p>
              </li>
            );
          })}
        </ol>
      );
    }
    return (
      <p
        key={idx}
        className="my-5 text-base md:text-lg text-charcoal/85 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: trimmed }}
      />
    );
  });
};

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <BlogLayout>
      <article>
        {/* Cover / Hero */}
        <section className="relative overflow-hidden pt-24 md:pt-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-sage-100/60 via-cream-50 to-cream-50" />
          </div>
          <div className="container-wide max-w-4xl">
            {/* Back */}
            <FadeIn>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-forest-800 hover:text-terracotta transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Semua Artikel
              </Link>
            </FadeIn>

            {/* Category */}
            <FadeIn delay={0.05}>
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.12em] border ${categoryColors[post.category]}`}
                >
                  <Leaf className="w-3.5 h-3.5" />
                  {post.category}
                </span>
              </div>
            </FadeIn>

            {/* Title */}
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-forest-800 leading-[1.1] tracking-tight mb-6 text-balance">
                {post.title}
              </h1>
            </FadeIn>

            {/* Meta + Author */}
            <FadeIn delay={0.15}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pb-10 md:pb-14 border-b border-forest-800/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-cream-200 flex-shrink-0">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-forest-800 leading-tight">
                      {post.author.name}
                    </div>
                    <div className="text-xs text-sage-600">
                      {post.author.role}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-sage-600">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="w-4 h-4 text-terracotta" />
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="w-4 h-4 text-terracotta" />
                    Waktu baca ±{post.readMinutes} menit
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Cover image */}
          <div className="container-wide max-w-5xl pb-14 md:pb-20">
            <FadeIn delay={0.2}>
              <div className="relative aspect-[16/9] md:aspect-[16/8.5] rounded-3xl overflow-hidden shadow-2xl shadow-forest-800/10">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-800/30 via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Body */}
        <section className="pb-16 md:pb-24">
          <div className="container-wide max-w-3xl">
            <FadeIn delay={0.25}>
              <div className="prose prose-custom">{renderContent(post.content)}</div>
            </FadeIn>

            {/* Tags */}
            <FadeIn delay={0.3}>
              <div className="mt-12 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sage-600 mr-1">
                  <Tag className="w-3.5 h-3.5" /> Tags:
                </span>
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold border border-sage-200"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </FadeIn>

            {/* Share / WhatsApp */}
            <FadeIn delay={0.35}>
              <div className="mt-12 md:mt-14 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-sage-100/70 to-terracotta/10 border border-sage-200/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-forest-800 leading-tight mb-1">
                    Pengen diskusi artikel ini?
                  </h3>
                  <p className="text-sm text-sage-700">
                    Atau mau tanya soal tanaman & desain taman langsung?
                  </p>
                </div>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6282311139873"}?text=${encodeURIComponent(
                    `Hi Taman Suri! Aku baru baca artikel "${post.title}" dan mau tanya lebih lanjut.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:brightness-110 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={2.3} />
                  Chat via WhatsApp
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Related */}
        {relatedPosts.length > 0 && (
          <section className="pb-20 md:pb-28 bg-cream-200/30">
            <div className="container-wide">
              <div className="mb-10 md:mb-12 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800/8 border border-forest-800/10 mb-4">
                    <Leaf className="w-4 h-4 text-forest-800" />
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-forest-800">
                      Bacaan Selanjutnya
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-forest-800 leading-tight">
                    Baca juga tulisan lainnya
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-forest-800 hover:text-terracotta transition-colors"
                >
                  Semua Artikel
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid md:grid-cols-2 gap-5 md:gap-7">
                {relatedPosts.map((p, idx) => (
                  <BlogCard key={p.slug} post={p} index={idx} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </BlogLayout>
  );
}
