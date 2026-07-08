import { FiMapPin, FiPhone, FiClock, FiMessageCircle } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-600">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Visit Our Store in Doha
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Whether you're sourcing materials for a construction project, villa
            renovation, apartment maintenance, or industrial supply, our team is
            ready to assist you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Card */}
          <div className="rounded-4xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              AL WATAN AL ARABIAN TRADING EST.
            </h3>

            <div className="mt-8 space-y-8">
              <div className="flex gap-4">
                <FiMapPin className="mt-1 text-2xl text-yellow-600" />

                <div>
                  <h4 className="font-semibold text-slate-900">Address</h4>

                  <p className="mt-2 text-slate-600">
                    Al Watan Al Arabian Trading Est.
                    <br />
                    Aziziyah Commercial Complex, Al Aziziyah
                    <br />
                    Doha, Qatar
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiPhone className="mt-1 text-2xl text-yellow-600" />

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Phone & WhatsApp
                  </h4>

                  <a
                    href="tel:+97455499056"
                    className="mt-2 block text-slate-600 hover:text-yellow-600"
                  >
                    +974 5549 9056
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <FiClock className="mt-1 text-2xl text-yellow-600" />

                <div>
                  <h4 className="font-semibold text-slate-900">
                    Business Hours
                  </h4>

                  <p className="mt-2 text-slate-600">
                    Saturday – Friday
                    <br />
                    8:00 AM – 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/97455499056"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                <FiMessageCircle className="mr-2" />
                WhatsApp
              </a>

              <a
                href="https://www.google.com/maps/place/Al+Watan+Al+Arabian+Trading+Est./@25.2490367,51.4493237,17z/data=!3m1!4b1!4m6!3m5!1s0x3e45db23fe97b339:0x59540616cebffcdd!8m2!3d25.2490367!4d51.4518986!16s%2Fg%2F11tjg91255"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:border-yellow-500 hover:text-yellow-600"
              >
                <FiMapPin className="mr-2" />
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Google Map */}
          <iframe
            title="Al Watan Al Arabian Trading Est."
            loading="lazy"
            className="h-137.5 w-full rounded-4xl border-0 shadow-xl"
            src="https://maps.google.com/maps?q=25.2490367,51.4518986&z=17&output=embed"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
