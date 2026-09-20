import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BLOG_POSTS,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from "@/data/blog";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Phone,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Article Not Found | Curtain Cleaning Brisbane",
    };
  }

  return {
    title: `${post.title} | Curtain Cleaning Brisbane`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://curtaincleaningbrisbane.com.au/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function SingleBlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, 1);

  return (
    <div className="flex flex-col w-full bg-surface min-h-screen">
      {/* 1. TOP HEADER / BREADCRUMB HERO */}
      <section className="relative w-full bg-primary text-white pt-10 pb-16 px-4 md:px-6 overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-[1040px] mx-auto">
          {/* Breadcrumbs & Back button */}
          <div className="flex items-center justify-between gap-4 mb-6 text-xs text-on-primary-container">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-secondary-container hover:text-white transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-white/60">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-white truncate max-w-[200px]">
                {post.title}
              </span>
            </div>
          </div>

          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-container text-secondary-container text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            {post.categoryLabel}
          </div>

          {/* Title */}
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-on-primary-container">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">{post.author}</span>
              <span className="text-white/60">•</span>
              <span className="text-secondary-container font-medium">{post.authorRole}</span>
            </div>

            <div className="flex items-center gap-4 text-white/80 font-medium">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-secondary-container" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-secondary-container" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED IMAGE BANNER */}
      <div className="w-full max-w-[1040px] mx-auto px-4 md:px-6 -mt-8 relative z-10">
        <div className="relative w-full h-[320px] sm:h-[440px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* 3. MAIN ARTICLE LAYOUT (CONTENT + SIDEBAR) */}
      <section className="w-full max-w-[1040px] mx-auto px-4 md:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Main Article Content */}
          <main className="lg:col-span-8">
            <article className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-primary/10 space-y-6">
              {/* Excerpt Lead Paragraph */}
              <div className="p-5 rounded-2xl bg-surface-container border-l-4 border-secondary text-primary font-medium text-base sm:text-lg leading-relaxed">
                {post.excerpt}
              </div>

              {/* Render HTML Content */}
              <div
                className="prose prose-teal max-w-none text-on-surface font-body text-sm sm:text-base leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Back to Blog link */}
            <div className="mt-8 flex justify-between items-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-secondary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Blog Articles</span>
              </Link>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Enquiry Sticky Card */}
            <div className="bg-primary text-white rounded-3xl p-6 shadow-md space-y-4 sticky top-28">
              <div className="flex items-center gap-2 text-secondary-container text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                <span>ON-SITE BRISBANE SERVICE</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-white">
                Need Your Curtains Cleaned?
              </h3>
              <p className="text-xs text-on-primary-container leading-relaxed">
                We clean your curtains while they hang on the track — no taking them down, no shrinkage, and dry in 2-4 hours.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Free upfront quotes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Safe for sheers & blackout linings</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Same-week bookings available</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <Link
                  href="/book-now"
                  className="w-full inline-flex items-center justify-center font-bold text-xs bg-secondary hover:bg-secondary-hover text-white py-3 rounded-full shadow-sm transition-all"
                >
                  Enquire Now Online
                </Link>
                <a
                  href="tel:0405849841"
                  className="w-full inline-flex items-center justify-center gap-2 font-bold text-xs border border-white/30 text-white hover:bg-white/10 py-3 rounded-full transition-all"
                >
                  <Phone className="w-4 h-4 text-secondary-container" />
                  <span>0405 849 841</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 4. OTHER ARTICLE SECTION */}
      {relatedPosts.length > 0 && (
        <section className="w-full bg-surface-container py-16 border-t border-primary/10">
          <div className="w-full max-w-[1040px] mx-auto px-4 md:px-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-semibold text-secondary uppercase tracking-widest block mb-1">
                  OUR OTHER ARTICLE
                </span>
                <h2 className="font-headline text-2xl font-bold text-primary">
                  Read Next
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary transition-colors"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-primary/10 flex flex-col sm:flex-row justify-between p-6 gap-6 group"
                >
                  <div className="relative w-full sm:w-48 h-36 shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="space-y-2 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                        {rel.categoryLabel}
                      </span>
                      <h3 className="font-headline text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                        <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                      </h3>
                      <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed mt-1">
                        {rel.excerpt}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-surface-container flex items-center justify-between text-xs">
                      <span className="text-on-surface-variant font-medium">
                        {rel.readTime}
                      </span>
                      <Link
                        href={`/blog/${rel.slug}`}
                        className="inline-flex items-center gap-1 font-bold text-secondary hover:text-secondary-hover transition-colors"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
