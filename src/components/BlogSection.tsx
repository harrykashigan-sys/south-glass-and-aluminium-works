import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { BookOpen, Clock, Calendar, ArrowRight, Share2, Check, ChevronDown, ChevronUp, Code, Copy, Sparkles, Search } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface BlogSectionProps {
  onOpenReservation: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onOpenReservation }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);
  const [copiedSchema, setCopiedSchema] = useState(false);
  const [showSchemaModal, setShowSchemaModal] = useState(false);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const q = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(q) ||
      post.subtitle.toLowerCase().includes(q) ||
      post.targetKeywords.some((k) => k.toLowerCase().includes(q))
    );
  });

  const handleOpenPost = (post: BlogPost) => {
    sound.playTap();
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClosePost = () => {
    sound.playTap();
    setSelectedPost(null);
  };

  const toggleFaq = (idx: number) => {
    sound.playTap();
    setActiveFaqIdx(activeFaqIdx === idx ? null : idx);
  };

  const copySchemaJson = (post: BlogPost) => {
    sound.playGlassChime();
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      image: [post.coverImage],
      datePublished: '2026-10-28T08:00:00+03:00',
      dateModified: '2026-10-31T12:00:00+03:00',
      author: {
        '@type': 'Organization',
        name: post.author.name,
      },
      publisher: {
        '@type': 'Organization',
        name: 'South Glass Residences & Luxury Suites',
        logo: {
          '@type': 'ImageObject',
          url: 'https://southglassresidences.co.ke/logo.png',
        },
      },
      keywords: post.targetKeywords.join(', '),
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://southglassresidences.co.ke/magazine/${post.slug}`,
      },
    };

    navigator.clipboard.writeText(JSON.stringify(schema, null, 2));
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2500);
  };

  return (
    <section id="blog-section" className="py-20 bg-stone-950 relative border-t border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* If an article is selected, render full deep reader */}
        {selectedPost ? (
          <article className="max-w-4xl mx-auto animate-in fade-in duration-300">
            {/* Back button */}
            <button
              onClick={handleClosePost}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-300 hover:text-white bg-stone-900 border border-stone-800 rounded-lg mb-8 transition-colors cursor-pointer"
            >
              ← Back to Editorial Guides
            </button>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                  SEO Pillar Guide
                </span>
                <span className="text-stone-500">·</span>
                <span className="text-xs text-stone-400 font-mono flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedPost.publishedDate}
                </span>
                <span className="text-stone-500">·</span>
                <span className="text-xs text-stone-400 font-mono flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedPost.readingTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
                {selectedPost.title}
              </h1>

              <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-light mb-6">
                {selectedPost.subtitle}
              </p>

              {/* Author & Schema Inspector Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl glass-panel border border-stone-800">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedPost.author.avatar}
                    alt={selectedPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-amber-400/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">{selectedPost.author.name}</div>
                    <div className="text-[11px] text-stone-400">{selectedPost.author.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copySchemaJson(selectedPost)}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-amber-300 bg-amber-950/40 hover:bg-amber-900/60 rounded-lg border border-amber-500/40 transition-colors cursor-pointer"
                    title="Copy Google Search Console JSON-LD Schema"
                  >
                    {copiedSchema ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Code className="w-3.5 h-3.5" />}
                    <span>{copiedSchema ? 'Schema Copied!' : 'GSC Schema JSON'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 mb-10 shadow-2xl">
              <img
                src={selectedPost.coverImage}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Target Keywords Ribbon for Search Console */}
            <div className="p-4 rounded-xl bg-stone-900/70 border border-stone-800 mb-10">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 block mb-2">
                Target Google Search Keywords for Ranking:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedPost.targetKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-2.5 py-1 rounded bg-stone-950 border border-stone-700 text-xs text-stone-300 font-mono"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Table of Contents */}
            <div className="p-6 rounded-2xl glass-panel border border-stone-800 mb-12">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Table of Contents</span>
              </h3>
              <ul className="space-y-2 text-sm text-stone-300">
                {selectedPost.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="hover:text-amber-300 transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="w-3 h-3 text-stone-500" />
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Sections */}
            <div className="space-y-10 text-stone-200 text-base leading-relaxed font-light">
              {selectedPost.sections.map((section, idx) => (
                <section key={idx} id={selectedPost.tableOfContents[idx]?.id} className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="mb-4 text-stone-300 leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {section.bulletPoints && (
                    <ul className="space-y-2.5 my-5 p-5 rounded-xl bg-stone-900/50 border border-stone-800/80">
                      {section.bulletPoints.map((pt, ptIdx) => (
                        <li key={ptIdx} className="flex items-start gap-2.5 text-sm text-stone-200">
                          <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.calloutText && (
                    <blockquote className="my-6 p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-amber-200 text-sm font-medium italic">
                      {section.calloutText}
                    </blockquote>
                  )}
                </section>
              ))}
            </div>

            {/* FAQ Accordion Section */}
            {selectedPost.faq.length > 0 && (
              <div id="frequently-asked-questions" className="mt-16 pt-12 border-t border-stone-800">
                <h3 className="text-2xl font-serif font-bold text-white mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {selectedPost.faq.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl glass-panel border border-stone-800 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left flex items-center justify-between text-sm font-semibold text-white hover:text-amber-300 transition-colors"
                      >
                        <span>{item.question}</span>
                        {activeFaqIdx === idx ? (
                          <ChevronUp className="w-4 h-4 text-amber-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-stone-400" />
                        )}
                      </button>
                      {activeFaqIdx === idx && (
                        <div className="px-4 pb-4 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/60 pt-3">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Article Footer Conversion Card */}
            <div className="mt-16 p-8 rounded-2xl glass-panel border border-amber-500/40 text-center luxury-glow">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 block">
                Stay on Muhoho Avenue &amp; Five Star Road
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                Experience Nairobi in Architectural Glass Luxury
              </h3>
              <p className="text-stone-300 text-sm max-w-xl mx-auto mb-6">
                Book direct with South Glass Residences for tailored executive rates, seamless airport pickup,
                and 24/7 dedicated guest concierge.
              </p>
              <button
                onClick={() => {
                  sound.playGlassChime();
                  onOpenReservation();
                }}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-stone-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-lg shadow-xl cursor-pointer"
              >
                Inquire Rates &amp; Availability
              </button>
            </div>
          </article>
        ) : (
          /* Magazine Feed View */
          <div>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-amber-500/30 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Google Search Console Optimized Magazine</span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-2 text-balance leading-tight">
                  Residential Glass &amp; Nairobi Architecture Journal
                </h2>
                <p className="text-stone-300 text-xs sm:text-base mt-1 max-w-2xl font-light leading-relaxed">
                  Deeply researched guides covering residential glass balustrades, shower cubicles, soundproof
                  acoustic windows, and luxury serviced residence benchmarks in Kenya.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-900/90 border border-stone-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => handleOpenPost(post)}
                  className="glass-panel rounded-2xl overflow-hidden border border-stone-800/90 shadow-xl glass-card-hover group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Cover Image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-stone-950">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-md bg-stone-950/80 backdrop-blur-md text-[11px] font-semibold text-amber-300 border border-amber-500/30">
                          {post.readingTime}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-stone-950/80 backdrop-blur-md text-[11px] font-medium text-stone-300 border border-stone-700">
                          {post.publishedDate}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {post.targetKeywords.slice(0, 3).map((kw) => (
                          <span
                            key={kw}
                            className="text-[10px] text-amber-400/90 font-mono bg-stone-950 px-2 py-0.5 rounded border border-stone-800"
                          >
                            #{kw}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-200 transition-colors leading-snug mb-3">
                        {post.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-300 font-light line-clamp-2 leading-relaxed mb-4">
                        {post.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Link */}
                  <div className="px-6 pb-6 pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
                    <span>Read Full Guide &amp; Schema</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
