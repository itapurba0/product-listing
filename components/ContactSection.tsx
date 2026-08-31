export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white sm:text-3xl">
          Visit Our Store
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          We&apos;d love to help you find the perfect kitchen essentials
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Info Cards */}
        <div className="space-y-4">
          {/* Address */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-amber/10">
                <svg className="h-5 w-5 text-brand-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">Address</h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  123 Market Road, Near Central Bus Stand<br />
                  Bhubaneswar, Odisha - 751009
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-amber/10">
                <svg className="h-5 w-5 text-brand-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">Opening Hours</h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Mon – Sat: 9:00 AM – 8:00 PM<br />
                  Sunday: 10:00 AM – 2:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-amber/10">
                <svg className="h-5 w-5 text-brand-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">Contact</h3>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Phone: <a href="tel:+919876543210" className="text-brand-amber hover:underline">+91 98765 43210</a>
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  WhatsApp: <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-brand-amber hover:underline">+91 98765 43210</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed Placeholder */}
        <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.5!2d85.8!3d20.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE4JzAwLjAiTiA4NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "400px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location"
          />
        </div>
      </div>
    </section>
  );
}
