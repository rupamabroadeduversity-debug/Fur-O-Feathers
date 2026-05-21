import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  ShieldPlus,
  Sparkles,
  Star,
  Stethoscope,
} from 'lucide-react'

const quickStats = [
  { label: 'Public rating', value: '3.8/5', note: 'Based on current listing reviews' },
  { label: 'Review volume', value: '132+', note: 'Neighborhood discovery already exists' },
  { label: 'Store hours', value: '11:00 AM - 9:30 PM', note: 'Daily retail window from the research brief' },
]

const serviceCards = [
  {
    icon: Stethoscope,
    title: 'Vet Consultation Flow',
    text: 'A clean appointment-first experience with call, WhatsApp, and visit prompts for pet owners who need help fast.',
  },
  {
    icon: Package,
    title: 'Shop Essentials',
    text: 'Pet food, accessories, daily care items, and product highlights organized in a way that feels easy to browse.',
  },
  {
    icon: Sparkles,
    title: 'Grooming & Hygiene',
    text: 'Care service storytelling that feels warm and reassuring rather than clinical or directory-like.',
  },
  {
    icon: ShieldPlus,
    title: 'Local Trust Signals',
    text: 'Map visibility, service clarity, rating context, and stronger calls to action for Behala pet owners.',
  },
]

const shelves = [
  {
    title: 'Nutrition Shelf',
    text: 'Dry food, wet food, supplements, feeding bowls, and everyday essentials arranged for quick selection.',
    image:
      'https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Clinic Confidence',
    text: 'A focused visual language around examinations, guidance, and pet-first care moments.',
    image:
      'https://images.pexels.com/photos/6816859/pexels-photo-6816859.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Grooming Corner',
    text: 'Hair trimming, hygiene support, and polished service presentation that makes routine care feel premium.',
    image:
      'https://images.pexels.com/photos/19145877/pexels-photo-19145877.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
]

const reviews = [
  {
    quote: 'Easy local access matters here. The site leans into directions, WhatsApp, and immediate consultation intent instead of making people hunt through directory pages.',
    name: 'Local Discovery Strategy',
  },
  {
    quote: 'The mockup is designed to make the clinic feel calmer, more credible, and easier to contact, especially for first-time pet parents in Behala.',
    name: 'Trust-First Positioning',
  },
  {
    quote: 'Instead of a generic brochure, the layout pushes the exact next step: book, call, message, or get directions.',
    name: 'Conversion-Focused UX',
  },
]

const faqs = [
  {
    question: 'Can pet owners contact the shop quickly from mobile?',
    answer:
      'Yes. The layout gives direct priority to tap-to-call, WhatsApp inquiry, and map directions so local visitors can act immediately.',
  },
  {
    question: 'How is doctor availability handled without a confirmed public schedule?',
    answer:
      'The mockup uses a live confirmation pattern: shop hours are shown clearly while consultation slots are prompted through call and WhatsApp confirmation.',
  },
  {
    question: 'Will this help with local SEO?',
    answer:
      'Yes. The structure is intentionally local: Behala cues, service-specific sections, trust blocks, FAQ content, and map-driven contact entry points.',
  },
]

const media = {
  heroImage:
    'https://images.pexels.com/photos/7468981/pexels-photo-7468981.jpeg?auto=compress&cs=tinysrgb&w=1400',
  supportImage:
    'https://images.pexels.com/photos/28644631/pexels-photo-28644631.jpeg?auto=compress&cs=tinysrgb&w=1200',
  heroVideo:
    'https://huggingface.co/datasets/FastVideo/Mixkit-Src/resolve/main/Pets/mixkit-dog-groomer-working-with-a-little-dog-1662_clip_1.mp4',
}

function App() {
  return (
    <div className="relative overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <div className="hero-mesh" aria-hidden="true" />

      <header className="relative z-20 px-4 pt-4 sm:px-6 lg:px-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/55 bg-white/72 px-4 py-3 shadow-[0_18px_60px_rgba(16,53,45,0.12)] backdrop-blur md:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--teal)] text-white">
              <HeartHandshake className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-heading text-lg leading-none">Relation Pet Shop</span>
              <span className="block text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                Behala pet care
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
            <a href="#services" className="transition hover:text-[var(--ink)]">
              Services
            </a>
            <a href="#shop" className="transition hover:text-[var(--ink)]">
              Shop
            </a>
            <a href="#reviews" className="transition hover:text-[var(--ink)]">
              Reviews
            </a>
            <a href="#contact" className="transition hover:text-[var(--ink)]">
              Contact
            </a>
          </div>

          <a
            href="https://wa.me/919874711540"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--teal)]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="home" className="px-4 pb-10 pt-8 sm:px-6 lg:px-10 lg:pb-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <span className="eyebrow">
                <BadgeCheck className="h-4 w-4" />
                Pet shop + clinic concept website
              </span>
              <h1 className="mt-5 max-w-3xl font-heading text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Caring pet essentials and trusted vet support for Behala families.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                This mockup repositions Relation Pet Shop from a listing-only business into a warm,
                appointment-driven neighborhood brand with stronger trust, clearer services, and
                faster mobile contact.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--coral)] px-6 py-3.5 font-semibold text-white transition hover:translate-y-[-1px] hover:bg-[#d46647]"
                >
                  Book Vet Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Relation+Pet+Shop+Bhupen+Roy+Road+Behala+Kolkata"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-6 py-3.5 font-semibold text-[var(--ink)] transition hover:border-[var(--teal)] hover:text-[var(--teal)]"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
                <span className="rounded-full border border-[var(--line)] bg-white/70 px-4 py-2">
                  Behala, Kolkata
                </span>
                <span className="rounded-full border border-[var(--line)] bg-white/70 px-4 py-2">
                  Vet consultation + pet accessories
                </span>
                <span className="rounded-full border border-[var(--line)] bg-white/70 px-4 py-2">
                  Mobile-first contact flow
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-10 hidden h-28 w-28 rounded-full bg-[var(--moss)]/15 blur-2xl lg:block" />
              <div className="absolute right-0 top-0 hidden h-36 w-36 rounded-full bg-[var(--coral)]/15 blur-3xl lg:block" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[var(--deep)] p-3 shadow-[0_25px_80px_rgba(12,56,51,0.28)]">
                <div className="absolute inset-x-6 top-5 z-10 flex items-center justify-between rounded-full bg-white/14 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/82 backdrop-blur">
                  <span>Since 2011</span>
                  <span>Behala trusted care</span>
                </div>

                <video
                  className="hero-video aspect-[4/5] w-full rounded-[1.55rem] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={media.heroImage}
                >
                  <source src={media.heroVideo} type="video/mp4" />
                </video>

                <div className="absolute inset-x-3 bottom-3 rounded-[1.55rem] bg-gradient-to-t from-[rgba(7,32,29,0.94)] via-[rgba(7,32,29,0.4)] to-transparent p-6 pt-20 text-white">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/68">Live concept</p>
                  <p className="mt-2 max-w-sm font-heading text-3xl leading-tight">
                    A gentler, clearer pet-care journey for the neighborhood.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="soft-card">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--teal)] text-white">
                      <Clock3 className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                        Open daily
                      </p>
                      <p className="mt-1 font-heading text-2xl">11 AM - 9:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="soft-card bg-[var(--sun)]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[var(--coral)]">
                      <Star className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                        Current footprint
                      </p>
                      <p className="mt-1 font-heading text-2xl">132+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-3">
            {quickStats.map((item) => (
              <article key={item.label} className="soft-card">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">{item.label}</p>
                <p className="mt-3 font-heading text-4xl leading-none">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-6 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-[2rem] border border-[var(--line)] bg-white/70 p-6 shadow-[0_18px_50px_rgba(16,53,45,0.08)] backdrop-blur lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow bg-[var(--moss)]/12 text-[var(--moss)]">
                <ShieldPlus className="h-4 w-4" />
                Core mockup angle
              </p>
              <h2 className="mt-4 max-w-2xl font-heading text-3xl tracking-[-0.03em] sm:text-4xl">
                Replace directory dependency with a branded, appointment-focused local website.
              </h2>
            </div>
            <div className="grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2 lg:max-w-xl">
              <div className="rounded-2xl bg-[var(--paper)] px-4 py-3">Doctor availability CTAs</div>
              <div className="rounded-2xl bg-[var(--paper)] px-4 py-3">Product and care highlights</div>
              <div className="rounded-2xl bg-[var(--paper)] px-4 py-3">Maps and WhatsApp conversion</div>
              <div className="rounded-2xl bg-[var(--paper)] px-4 py-3">Local SEO-friendly structure</div>
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <span className="eyebrow">
                  <Sparkles className="h-4 w-4" />
                  Built around the research brief
                </span>
                <h2 className="mt-5 font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
                  Every section is designed to solve a real trust or conversion gap.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)]">
                  The website concept keeps the emotional tone friendly and modern while staying
                  grounded in what pet owners actually need to do next: check services, confirm a
                  consultation, message quickly, and visit with confidence.
                </p>

                <div className="mt-8 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white p-3 shadow-[0_18px_50px_rgba(16,53,45,0.08)]">
                  <img
                    src={media.supportImage}
                    alt="Veterinary care support for a cat"
                    className="aspect-[4/4.6] w-full rounded-[1.5rem] object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {serviceCards.map((card) => {
                  const Icon = card.icon

                  return (
                    <article key={card.title} className="soft-card min-h-56">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--teal)] text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 font-heading text-2xl">{card.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{card.text}</p>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="schedule" className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="soft-card overflow-hidden bg-[var(--deep)] text-white">
              <p className="text-xs uppercase tracking-[0.28em] text-white/65">Consultation schedule CTA</p>
              <h2 className="mt-4 max-w-xl font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
                Use live confirmation instead of leaving pet owners uncertain.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                Because a precise doctor schedule is not clearly published, this mockup uses a safer
                and more credible pattern: visible shop hours, same-screen contact actions, and a
                clear prompt to confirm the latest consultation slot by phone or WhatsApp.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.4rem] border border-white/12 bg-white/8 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">Retail hours</p>
                  <p className="mt-3 font-heading text-3xl">11 AM</p>
                  <p className="text-white/75">to 9:30 PM daily</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/12 bg-white/8 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">Doctor slot</p>
                  <p className="mt-3 font-heading text-3xl">Live</p>
                  <p className="text-white/75">confirm by call or WhatsApp</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/12 bg-white/8 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">Priority action</p>
                  <p className="mt-3 font-heading text-3xl">Tap</p>
                  <p className="text-white/75">book, call, or get directions</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="soft-card">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Primary CTA</p>
                <a
                  href="tel:+919874711540"
                  className="mt-4 flex items-center justify-between rounded-[1.5rem] bg-[var(--sun)] px-5 py-4 text-[var(--ink)] transition hover:translate-y-[-1px]"
                >
                  <span>
                    <span className="block font-heading text-2xl">Call the clinic desk</span>
                    <span className="block text-sm text-[var(--muted)]">+91 98747 11540</span>
                  </span>
                  <Phone className="h-6 w-6" />
                </a>
              </div>

              <div className="soft-card">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Secondary CTA</p>
                <a
                  href="https://wa.me/919874711540"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex items-center justify-between rounded-[1.5rem] bg-[var(--moss)] px-5 py-4 text-white transition hover:translate-y-[-1px]"
                >
                  <span>
                    <span className="block font-heading text-2xl">WhatsApp inquiry</span>
                    <span className="block text-sm text-white/72">Ask for doctor timing, stock, or directions</span>
                  </span>
                  <MessageCircle className="h-6 w-6" />
                </a>
              </div>

              <div className="soft-card">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Local cue</p>
                <div className="mt-4 rounded-[1.5rem] border border-[var(--line)] bg-[var(--paper)] p-5">
                  <p className="font-heading text-2xl">Near Manton Bus Stop, Behala</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    4, Bhupen Roy Rd, Manton, Behala, Kolkata, West Bengal - 700034
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="shop" className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="eyebrow">
                  <Package className="h-4 w-4" />
                  Product and care storytelling
                </span>
                <h2 className="mt-5 font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
                  A shop section that feels useful, warm, and easier to trust.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-[var(--muted)]">
                The shelf layout organizes what customers already come here for: food, accessories,
                pet-care essentials, and grooming support, all without feeling cluttered or
                directory-like.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {shelves.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white shadow-[0_18px_50px_rgba(16,53,45,0.08)]"
                >
                  <img src={item.image} alt={item.title} className="aspect-[4/3] w-full object-cover" />
                  <div className="p-6">
                    <h3 className="font-heading text-2xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="soft-card bg-[var(--sun)]">
              <span className="eyebrow bg-white/80 text-[var(--coral)]">
                <Star className="h-4 w-4" />
                Reputation context
              </span>
              <h2 className="mt-5 font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
                The mockup doesn&apos;t hide the public footprint. It improves what happens after discovery.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                Public rating and reviews already create visibility. The website concept adds the
                missing layer: clarity, modern trust, and a smoother conversion path for anxious pet
                owners who want reassurance before visiting.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-[1.5rem] bg-white px-5 py-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Current rating</p>
                  <p className="mt-3 font-heading text-5xl">3.8</p>
                </div>
                <div className="rounded-[1.5rem] bg-white px-5 py-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Public reviews</p>
                  <p className="mt-3 font-heading text-5xl">132+</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {reviews.map((review) => (
                <article key={review.name} className="soft-card">
                  <p className="text-lg leading-8 text-[var(--ink)]">&ldquo;{review.quote}&rdquo;</p>
                  <p className="mt-4 text-sm uppercase tracking-[0.24em] text-[var(--muted)]">{review.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="soft-card overflow-hidden">
              <p className="eyebrow">
                <Sparkles className="h-4 w-4" />
                Open-stock motion block
              </p>
              <h2 className="mt-5 font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
                The concept also includes video-driven warmth, not just static cards.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                A short care or grooming clip helps the homepage feel more alive and more human.
                It is especially useful for first-impression storytelling on mobile.
              </p>

              <div className="mt-7 overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-[var(--deep)] p-3">
                <video
                  className="aspect-video w-full rounded-[1.35rem] object-cover"
                  controls
                  muted
                  loop
                  playsInline
                  poster={media.heroImage}
                >
                  <source src={media.heroVideo} type="video/mp4" />
                </video>
              </div>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Video source path is set from an open-stock dataset and paired with Pexels imagery for
                the mockup presentation.
              </p>
            </div>

            <div className="soft-card">
              <p className="eyebrow">
                <BadgeCheck className="h-4 w-4" />
                FAQ strategy
              </p>
              <div className="mt-6 space-y-4">
                {faqs.map((faq) => (
                  <article key={faq.question} className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--paper)] p-5">
                    <h3 className="font-heading text-xl">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-16 pt-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-[var(--line)] bg-[var(--deep)] px-5 py-6 text-white shadow-[0_24px_90px_rgba(11,45,41,0.34)] sm:px-8 sm:py-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <span className="eyebrow bg-white/10 text-white">
                  <MapPin className="h-4 w-4" />
                  Contact and location
                </span>
                <h2 className="mt-5 font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
                  Ready-to-contact, ready-to-visit, and locally grounded.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
                  This final section is where the mockup turns intent into action: one tap to call,
                  one tap to WhatsApp, and one tap to launch directions.
                </p>

                <div className="mt-7 grid gap-4">
                  <a
                    href="tel:+919874711540"
                    className="rounded-[1.6rem] border border-white/10 bg-white/8 px-5 py-4 transition hover:bg-white/12"
                  >
                    <span className="block text-sm uppercase tracking-[0.24em] text-white/55">Call now</span>
                    <span className="mt-2 block font-heading text-3xl">+91 98747 11540</span>
                  </a>
                  <a
                    href="https://wa.me/919874711540"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[1.6rem] border border-white/10 bg-white/8 px-5 py-4 transition hover:bg-white/12"
                  >
                    <span className="block text-sm uppercase tracking-[0.24em] text-white/55">WhatsApp</span>
                    <span className="mt-2 block font-heading text-3xl">Start a quick inquiry</span>
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-3">
                <iframe
                  title="Relation Pet Shop map"
                  src="https://www.google.com/maps?q=Relation%20Pet%20Shop%20Behala%20Kolkata&output=embed"
                  className="h-[420px] w-full rounded-[1.5rem] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-white/62 md:flex-row md:items-center md:justify-between">
              <p>Address: 4, Bhupen Roy Rd, Manton, Behala, Kolkata, West Bengal - 700034</p>
              <div className="flex flex-wrap gap-4">
                <a href="#home" className="transition hover:text-white">
                  Back to top
                </a>
                <a
                  href="https://www.pexels.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Image source: Pexels
                </a>
                <a
                  href="https://huggingface.co/datasets/FastVideo/Mixkit-Src/tree/main/Pets"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Video source: Mixkit dataset
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
