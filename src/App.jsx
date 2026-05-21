import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldPlus,
  Sparkles,
  Star,
  Stethoscope,
} from 'lucide-react'

const clinic = {
  name: 'Companion Pet Clinic',
  city: 'Kolkata',
  phoneDisplay: '+91 94777 99770',
  phoneLink: 'tel:+919477799770',
  email: 'contact.companionpetclinic@gmail.com',
  emailLink: 'mailto:contact.companionpetclinic@gmail.com',
  whatsapp: 'https://wa.me/919477799770',
  maps: 'https://www.google.com/maps/search/?api=1&query=Companion+Pet+Clinic+Kolkata',
  mapEmbed: 'https://www.google.com/maps?q=Companion%20Pet%20Clinic%20Kolkata&output=embed',
}

const opportunityMetrics = [
  {
    label: 'Local demand',
    value: 'High',
    note: 'A polished clinic site can capture pet owners already searching for nearby care in Kolkata.',
  },
  {
    label: 'SEO strength today',
    value: 'Low',
    note: 'There is room to win with structured service pages, maps visibility, and better branded discovery.',
  },
  {
    label: 'Conversion potential',
    value: 'High',
    note: 'Appointment-first calls to action and WhatsApp support can shorten the path from search to visit.',
  },
]

const services = [
  {
    icon: Stethoscope,
    title: 'Veterinary consultations',
    text: 'Clear service storytelling for pet parents who need dependable exams, guidance, and quick next steps.',
  },
  {
    icon: ShieldPlus,
    title: 'Vaccination and preventive care',
    text: 'Routine vaccinations, boosters, checkups, and preventive care presented in a way that feels reassuring and easy to book.',
  },
  {
    icon: Sparkles,
    title: 'Pet wellness support',
    text: 'Friendly content blocks for nutrition guidance, follow-up care, and everyday pet health confidence.',
  },
  {
    icon: HeartHandshake,
    title: 'Emergency contact flow',
    text: 'Fast call and WhatsApp entry points that help anxious pet owners reach the clinic without friction.',
  },
]

const schedulePoints = [
  {
    title: 'Consultation booking',
    text: 'Pet parents can request the next available doctor slot by phone or WhatsApp instead of relying on directory-only discovery.',
  },
  {
    title: 'Preventive care visits',
    text: 'Vaccination and routine checkup requests are grouped into a simple, repeatable appointment journey.',
  },
  {
    title: 'Urgent pet concerns',
    text: 'Emergency enquiries are prioritized with a prominent call path and a clear consultation CTA above the fold.',
  },
]

const testimonials = [
  {
    quote:
      'The homepage immediately tells me where to go, who to contact, and how quickly I can book a consultation for my pet.',
    author: 'Sample pet parent voice',
  },
  {
    quote:
      'The vaccination and preventive care sections make the clinic feel organized, calm, and trustworthy before I even call.',
    author: 'Trust-building review block',
  },
  {
    quote:
      'WhatsApp, direct call, and map access all feel obvious here, which is exactly what local clinics need on mobile.',
    author: 'Conversion-focused testimonial',
  },
]

const faqs = [
  {
    question: 'How should the appointment flow work on the live site?',
    answer:
      'The mockup is built around a simple conversion path: tap to book, call immediately, or start a WhatsApp conversation for slot confirmation.',
  },
  {
    question: 'Can the doctor schedule be updated later?',
    answer:
      'Yes. This layout reserves a dedicated appointment section so confirmed consultation windows or rotating doctor timings can be added cleanly.',
  },
  {
    question: 'Why is local SEO so important for this clinic?',
    answer:
      'Because many pet owners begin with nearby searches. Dedicated service sections, FAQs, and a map-ready contact block help the clinic rank and convert better.',
  },
]

function App() {
  return (
    <div className="site-shell overflow-hidden text-[var(--ink)]">
      <div className="page-aura" aria-hidden="true" />

      <header className="relative z-20 px-4 pt-4 sm:px-6 lg:px-10">
        <nav className="nav-shell mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="brand-mark">
              <HeartHandshake className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-heading text-lg leading-none">{clinic.name}</span>
              <span className="block text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                Caring veterinary support in Kolkata
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-2 text-sm text-[var(--muted)] md:flex">
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#appointment" className="nav-link">
              Appointment
            </a>
            <a href="#reviews" className="nav-link">
              Reviews
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>

          <a
            href={clinic.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark btn-compact text-white"
          >
            <MessageCircle className="h-4 w-4 shrink-0 text-white" />
            <span className="text-white">WhatsApp</span>
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="home" className="px-4 pb-12 pt-8 sm:px-6 lg:px-10 lg:pb-18">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <span className="eyebrow">
                <BadgeCheck className="h-4 w-4" />
                Modern pet clinic website concept
              </span>
              <h1 className="mt-6 max-w-3xl font-heading text-5xl leading-[0.94] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Caring veterinary guidance that feels easier to trust and easier to book.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                This mockup repositions Companion Pet Clinic as a modern local veterinary brand:
                appointment-led, WhatsApp-friendly, and built to convert pet owners searching for
                reliable care in Kolkata.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#appointment" className="btn btn-primary">
                  Book Vet Appointment
                  <ArrowRight className="btn-arrow h-4 w-4" />
                </a>
                <a
                  href={clinic.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Consultation
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
                <span className="info-pill">Veterinary consultations</span>
                <span className="info-pill">Vaccination and preventive care</span>
                <span className="info-pill">Google Maps and local SEO ready</span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <article className="mini-card">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Primary CTA</p>
                  <p className="mt-3 font-heading text-2xl">Book appointment</p>
                </article>
                <article className="mini-card">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Secondary CTA</p>
                  <p className="mt-3 font-heading text-2xl">Call or WhatsApp</p>
                </article>
                <article className="mini-card">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Emotional goal</p>
                  <p className="mt-3 font-heading text-2xl">Caring and reliable</p>
                </article>
              </div>
            </div>

            <div className="relative">
              <div className="image-glow image-glow-left" aria-hidden="true" />
              <div className="image-glow image-glow-right" aria-hidden="true" />

              <div className="hero-frame">
                <img
                  src="https://images.pexels.com/photos/6235664/pexels-photo-6235664.jpeg?auto=compress&cs=tinysrgb&w=1400"
                  alt="Veterinarian caring for a dog in a clean clinic environment"
                  className="aspect-[4/5] w-full rounded-[1.75rem] object-cover"
                />

                <div className="hero-overlay top-5 left-5">
                  <span className="block text-xs uppercase tracking-[0.26em] text-white/72">
                    Trust-first positioning
                  </span>
                  <span className="mt-2 block font-heading text-2xl text-white">
                    Calm care for anxious pet parents
                  </span>
                </div>

                <div className="hero-overlay bottom-5 right-5 max-w-[18rem]">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[var(--accent)] text-white">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-white/70">
                        Emergency contact CTA
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/88">
                        Strong mobile contact flow for urgent consultations and quick appointment
                        confirmation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <article className="glass-card">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--primary)] text-white">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                        Location value
                      </p>
                      <p className="mt-1 font-heading text-2xl">Kolkata local trust</p>
                    </div>
                  </div>
                </article>

                <article className="glass-card bg-[var(--warm)]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[var(--accent)]">
                      <Clock3 className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                        Booking direction
                      </p>
                      <p className="mt-1 font-heading text-2xl">Appointment-first flow</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-3">
            {opportunityMetrics.map((item) => (
              <article key={item.label} className="glass-card">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">{item.label}</p>
                <p className="mt-3 font-heading text-4xl leading-none">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="section-shell mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="eyebrow">
                  <Stethoscope className="h-4 w-4" />
                  Core service structure
                </span>
                <h2 className="mt-5 max-w-3xl font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
                  A clinic homepage that explains care clearly before the first phone call.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-[var(--muted)]">
                Each section is designed to solve the current digital gap: weak branding, low
                discoverability, and no dedicated appointment experience for pet owners who need
                clear reassurance.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon

                return (
                  <article key={service.title} className="service-card">
                    <span className="grid h-14 w-14 place-items-center rounded-3xl bg-[var(--primary)] text-white shadow-[0_16px_34px_rgba(15,109,122,0.24)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 font-heading text-2xl leading-tight">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{service.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="appointment" className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="glass-card overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,251,252,0.96))]">
              <span className="eyebrow">
                <Clock3 className="h-4 w-4" />
                Appointment and doctor schedule section
              </span>
              <h2 className="mt-5 max-w-2xl font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
                Structured for booking today and ready for live doctor timings later.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                This area gives the clinic a proper online appointment layer now, while leaving room
                to add exact consultation windows, doctor availability, and reminders once the live
                site is approved.
              </p>

              <div className="mt-7 grid gap-4">
                {schedulePoints.map((item) => (
                  <article key={item.title} className="schedule-card">
                    <p className="text-sm uppercase tracking-[0.24em] text-[var(--primary)]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="booking-panel">
              <div>
                <span className="eyebrow bg-white/12 text-white">
                  <BadgeCheck className="h-4 w-4" />
                  Conversion-focused booking panel
                </span>
                <h2 className="mt-5 max-w-xl font-heading text-4xl tracking-[-0.04em] text-white sm:text-5xl">
                  Make the next step obvious for every pet owner.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/76">
                  The mockup uses one clear primary CTA and two fast alternatives so appointment
                  requests never get stuck behind unclear navigation.
                </p>
              </div>

              <div className="mt-7 grid gap-4">
                <a href={clinic.phoneLink} className="action-card action-card-light">
                  <span>
                    <span className="block text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                      Call now
                    </span>
                    <span className="mt-2 block font-heading text-3xl text-[var(--ink)]">
                      {clinic.phoneDisplay}
                    </span>
                  </span>
                  <Phone className="h-6 w-6 text-[var(--primary)]" />
                </a>

                <a
                  href={clinic.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="action-card action-card-dark"
                >
                  <span>
                    <span className="block text-sm uppercase tracking-[0.24em] text-white/62">
                      WhatsApp consultation
                    </span>
                    <span className="mt-2 block font-heading text-3xl text-white">
                      Start a quick enquiry
                    </span>
                  </span>
                  <MessageCircle className="h-6 w-6 text-white" />
                </a>

                <div className="action-card action-card-outline">
                  <span>
                    <span className="block text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                      Email support
                    </span>
                    <a href={clinic.emailLink} className="mt-2 block font-heading text-2xl text-[var(--ink)]">
                      {clinic.email}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 lg:px-10">
          <div className="emergency-shell mx-auto max-w-7xl px-6 py-8 text-white sm:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/78">
                  Emergency consultation CTA
                </p>
                <h2 className="mt-3 max-w-3xl font-heading text-3xl leading-tight sm:text-4xl">
                  If a pet owner is worried, the page should help them contact the clinic in seconds.
                </h2>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={clinic.phoneLink} className="btn btn-light">
                  Call Now
                </a>
                <a
                  href={clinic.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="px-4 py-14 sm:px-6 lg:px-10">
          <div className="section-shell mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="glass-card bg-[var(--warm)]">
              <span className="eyebrow bg-white/80 text-[var(--accent)]">
                <Star className="h-4 w-4" />
                Testimonials and FAQ strategy
              </span>
              <h2 className="mt-5 max-w-xl font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
                Trust signals matter more when the clinic has little public brand presence.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[var(--muted)]">
                This mockup includes a review-ready section and an FAQ block so first-time pet
                parents can feel reassured before they call, message, or visit.
              </p>

              <div className="mt-8 rounded-[1.6rem] border border-[var(--line)] bg-white px-5 py-5">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                  Review-ready position
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Sample wording is used here to show placement and tone. Live client reviews can be
                  added later without changing the layout.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {testimonials.map((item) => (
                <article key={item.author} className="glass-card">
                  <p className="text-lg leading-8 text-[var(--ink)]">&ldquo;{item.quote}&rdquo;</p>
                  <p className="mt-4 text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                    {item.author}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="section-shell mx-auto mt-6 max-w-7xl">
            <div className="glass-card">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <span className="eyebrow">
                    <BadgeCheck className="h-4 w-4" />
                    FAQ section
                  </span>
                  <h2 className="mt-5 max-w-2xl font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
                    Answer the questions pet parents usually ask before the first visit.
                  </h2>
                </div>
                <p className="max-w-xl text-base leading-8 text-[var(--muted)]">
                  These FAQs strengthen trust, improve keyword coverage, and support a better local
                  search experience.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {faqs.map((faq) => (
                  <article
                    key={faq.question}
                    className="rounded-[1.5rem] border border-[var(--line)] bg-[rgba(245,252,252,0.88)] p-5"
                  >
                    <h3 className="font-heading text-xl leading-tight">{faq.question}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-16 pt-14 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-[var(--line)] bg-[var(--ink)] px-5 py-6 text-white shadow-[0_25px_90px_rgba(6,33,40,0.34)] sm:px-8 sm:py-8">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <span className="eyebrow bg-white/10 text-white">
                  <MapPin className="h-4 w-4" />
                  Contact and Google Maps integration
                </span>
                <h2 className="mt-5 max-w-xl font-heading text-4xl tracking-[-0.04em] sm:text-5xl">
                  Designed to turn local discovery into real appointment enquiries.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
                  The contact block keeps every high-intent action within reach: call, WhatsApp,
                  email, and directions. It also gives the clinic a stronger local SEO landing point.
                </p>

                <div className="mt-7 grid gap-4">
                  <a href={clinic.phoneLink} className="contact-card">
                    <span className="block text-sm uppercase tracking-[0.24em] text-white/58">
                      Call the clinic
                    </span>
                    <span className="mt-2 block font-heading text-3xl">{clinic.phoneDisplay}</span>
                  </a>

                  <a
                    href={clinic.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-card"
                  >
                    <span className="block text-sm uppercase tracking-[0.24em] text-white/58">
                      WhatsApp
                    </span>
                    <span className="mt-2 block font-heading text-3xl">Quick consultation chat</span>
                  </a>

                  <a href={clinic.emailLink} className="contact-card">
                    <span className="block text-sm uppercase tracking-[0.24em] text-white/58">
                      Email
                    </span>
                    <span className="mt-2 block break-all font-heading text-2xl">{clinic.email}</span>
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-3">
                <iframe
                  title="Companion Pet Clinic map"
                  src={clinic.mapEmbed}
                  className="h-[420px] w-full rounded-[1.45rem] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={clinic.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light"
                  >
                    <MapPin className="h-4 w-4" />
                    Open in Google Maps
                  </a>
                  <a
                    href={clinic.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Start WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
              <p>Concept focus: branded trust, appointment flow, local visibility, and faster first contact.</p>
              <p>Demo visuals sourced from Pexels for mockup presentation.</p>
            </div>
          </div>
        </section>
      </main>

      <a
        href={clinic.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Start WhatsApp consultation"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp Consultation
      </a>
    </div>
  )
}

export default App
