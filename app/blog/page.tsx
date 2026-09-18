import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import { Clock, User, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog & Fabric Care Tips | Curtain Cleaning Brisbane",
  description: "Expert advice on curtain maintenance, sheer drapery care, mould prevention, and window textile preservation in Brisbane.",
};

export default function BlogPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">Expert Knowledge</span>
          <h1 className="font-headline text-4xl lg:text-5xl font-bold mt-2">
            Curtain Care & Fabric Maintenance Blog
          </h1>
          <p className="font-body text-base text-white/80 max-w-2xl mt-4 leading-relaxed">
            Tips and guides from Brisbane’s leading fabric specialists to prolong the life of your luxury drapery.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-[1240px] mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-primary/10 shadow-stitch hover:shadow-active transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h2 className="font-headline text-xl font-bold text-primary hover:text-secondary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-xs font-semibold text-primary flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-secondary" /> {post.author}
                </span>
                <Link
                  href="/book-now"
                  className="text-xs font-bold text-secondary flex items-center gap-1 hover:underline"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
