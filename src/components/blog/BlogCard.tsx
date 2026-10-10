"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";

const formatDate = (iso: string) => {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("id-ID", {
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

export const BlogCard = ({
  post,
  featured = false,
  index = 0,
}: {
  post: BlogPost;
  featured?: boolean;
  index?: number;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-3xl bg-cream-50 shadow-lg shadow-forest-800/[0.04] border border-forest-800/[0.05] overflow-hidden flex flex-col ${
        featured ? "md:flex-row md:items-stretch" : ""
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`relative block overflow-hidden ${
          featured
            ? "md:w-1/2 md:min-h-[420px] min-h-[240px]"
            : "aspect-[16/10]"
        } bg-sage-100`}
      >
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-800/30 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
              categoryColors[post.category]
            }`}
          >
            {post.category}
          </span>
        </div>
      </Link>

      <div className={`flex flex-col flex-1 ${featured ? "md:p-10 p-6" : "p-5 md:p-6"}`}>
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-sage-600 mb-4">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="w-3.5 h-3.5 text-terracotta" />
            {formatDate(post.publishedAt)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="w-3.5 h-3.5 text-terracotta" />
            {post.readMinutes} min baca
          </span>
        </div>

        {/* Title + Excerpt */}
        <Link
          href={`/blog/${post.slug}`}
          className={`font-serif font-bold text-forest-800 leading-tight mb-3 group-hover:text-terracotta transition-colors block ${
            featured ? "text-2xl md:text-3xl lg:text-4xl" : "text-lg md:text-xl"
          }`}
        >
          {post.title}
        </Link>
        <p className="text-sm md:text-base text-charcoal/75 leading-relaxed mb-5 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Author + read CTA */}
        <div className="pt-5 mt-auto border-t border-forest-800/5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-cream-200 flex-shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-forest-800 leading-tight truncate">
                {post.author.name}
              </div>
              <div className="text-[11px] text-sage-600 truncate">
                {post.author.role}
              </div>
            </div>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="group/cta inline-flex items-center gap-1.5 text-sm font-bold text-forest-800 hover:text-terracotta transition-colors flex-shrink-0"
          >
            Baca
            <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
