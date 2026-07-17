const services = [
  { number: "01", title: "Same-Day Delivery", text: "Urgent local pickup and delivery across Toronto and the GTA, handled with speed and care.", tag: "TODAY" },
  { number: "02", title: "Next-Day Delivery", text: "A dependable, cost-effective option for shipments that need to arrive the following business day.", tag: "TOMORROW" },
  { number: "03", title: "Rush & Direct", text: "A dedicated vehicle takes your package straight from pickup to destination with no unnecessary stops.", tag: "EXPRESS" },
  { number: "04", title: "Scheduled Routes", text: "Recurring pickups and deliveries tailored to your business, with consistent timing and communication.", tag: "ROUTES" },
  { number: "05", title: "Business Deliveries", text: "Professional delivery support for documents, parcels, retail orders, and time-sensitive materials.", tag: "B2B" },
  { number: "06", title: "GTA Coverage", text: "Reliable service throughout Toronto and surrounding GTA communities, every business day.", tag: "LOCAL" },
];

const promises = [
  ["⚡", "Fast response", "Quick dispatch when timing matters."],
  ["✓", "Safe & secure", "Your shipment is handled with care."],
  ["★", "Professional", "Clear, courteous communication."],
  ["◷", "On-time", "Dependable delivery, every time."],
];

export default function Home() {
  return (
    <main>
      <div className="topline"><span>Serving Toronto & the GTA</span><a href="mailto:support@flashdropexpress.com">support@flashdropexpress.com</a></div>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="FlashDrop Express home">
          <span className="brand-mark"><i>F</i><b>D</b></span>
          <span className="brand-copy"><strong>FLASH<span>DROP</span></strong><small>EXPRESS</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a><a href="#why-us">Why us</a><a href="#coverage">Coverage</a><a href="#contact">Contact</a>
        </nav>
        <div className="nav-call"><small>Call us now</small><span className="phone-list"><a href="tel:+16478070287">+1 (647) 807-0287</a><a href="tel:+14166692417">+1 (416) 669-2417</a><a href="tel:+16476280694">+1 (647) 628-0694</a></span></div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span></span>YOUR DELIVERY. OUR PRIORITY.</div>
            <h1>Local delivery,<br/><em>done right.</em></h1>
            <p>Fast, reliable courier service for Toronto and the GTA. From same-day rush deliveries to scheduled routes, your package is in professional hands.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Get a free quote <span>→</span></a>
              <a className="button ghost" href="#contact">Call us</a>
            </div>
            <div className="quick-points"><span>✓ Same-day</span><span>✓ Next-day</span><span>✓ On-time</span></div>
          </div>
          <div className="hero-visual">
            <div className="red-slice"></div>
            <img src="/flashdrop-flyer.jpeg" alt="FlashDrop Express courier delivery services" />
            <div className="availability"><b>●</b><span><strong>READY TO DISPATCH</strong><small>Toronto & GTA</small></span></div>
          </div>
        </div>
        <div className="trust-strip">{promises.map(([icon,title,text]) => <div key={title}><i>{icon}</i><span><strong>{title}</strong><small>{text}</small></span></div>)}</div>
      </section>

      <section className="services section" id="services">
        <div className="section-head"><div><div className="eyebrow dark"><span></span>WHAT WE DELIVER</div><h2>Courier services built<br/>around your schedule.</h2></div><p>Flexible delivery options for individuals and businesses—without the complicated process. Tell us what needs to move and when it needs to arrive.</p></div>
        <div className="service-grid">{services.map((s) => <article className="service-card" key={s.number}><div className="service-top"><span>{s.number}</span><b>{s.tag}</b></div><h3>{s.title}</h3><p>{s.text}</p><a href="#contact">Request this service <span>↗</span></a></article>)}</div>
      </section>

      <section className="why" id="why-us">
        <div className="why-image"><img src="/flashdrop-flyer.jpeg" alt="FlashDrop Express services and delivery van"/><div className="experience"><strong>LOCAL</strong><span>Toronto<br/>& GTA</span></div></div>
        <div className="why-copy"><div className="eyebrow"><span></span>WHY FLASHDROP</div><h2>Your package matters.<br/><em>So does your time.</em></h2><p>We combine responsive service, careful handling, and dependable delivery. You get a direct point of contact and updates you can count on from pickup to drop-off.</p><ul><li><b>Direct communication</b><span>Speak with a real local courier—not a call centre.</span></li><li><b>Reliable & professional</b><span>Packages handled with care, precision, and respect.</span></li><li><b>Flexible for your business</b><span>One-time rush or recurring route, we adapt to you.</span></li></ul><a className="text-link" href="#contact">Plan your delivery <span>→</span></a></div>
      </section>

      <section className="coverage section" id="coverage">
        <div className="coverage-card"><div className="map-dot">⌖</div><div><div className="eyebrow"><span></span>OUR SERVICE AREA</div><h2>Toronto & the<br/>Greater Toronto Area</h2><p>Local deliveries across Toronto and surrounding GTA communities. Not sure whether your pickup or destination is covered? Give us a call—we’ll find the right solution.</p><div className="areas"><span>Toronto</span><span>Mississauga</span><span>Brampton</span><span>Vaughan</span><span>Markham</span><span>Scarborough</span></div></div></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy"><div className="eyebrow"><span></span>LET'S GET MOVING</div><h2>Need it delivered?<br/><em>Talk to us.</em></h2><p>Share your pickup, destination, package details, and timing. We’ll get back to you with a clear delivery plan.</p><div className="contact-lines"><a href="tel:+16478070287"><i>☎</i><span><small>Call us</small><strong>+1 (647) 807-0287</strong></span></a><a href="tel:+14166692417"><i>☎</i><span><small>Call us</small><strong>+1 (416) 669-2417</strong></span></a><a href="tel:+16476280694"><i>☎</i><span><small>Call us</small><strong>+1 (647) 628-0694</strong></span></a><a href="mailto:support@flashdropexpress.com"><i>✉</i><span><small>Email us</small><strong>support@flashdropexpress.com</strong></span></a></div></div>
        <form action="mailto:support@flashdropexpress.com" method="post" encType="text/plain"><div className="field-row"><label>Your name<input name="name" required placeholder="Full name"/></label><label>Phone number<input name="phone" required type="tel" placeholder="(647) 000-0000"/></label></div><div className="field-row"><label>Pickup location<input name="pickup" required placeholder="City or postal code"/></label><label>Drop-off location<input name="dropoff" required placeholder="City or postal code"/></label></div><label>What are we delivering?<textarea name="details" rows={4} placeholder="Package size, timing, and anything else we should know"></textarea></label><button className="button primary" type="submit">Request my quote <span>→</span></button><small className="form-note">Prefer to talk? Choose any of our three contact numbers.</small></form>
      </section>

      <footer><a className="brand inverted" href="#top"><span className="brand-mark"><i>F</i><b>D</b></span><span className="brand-copy"><strong>FLASH<span>DROP</span></strong><small>EXPRESS</small></span></a><p>Fast. Reliable. Delivered.</p><div className="footer-links"><a href="#services">Services</a><a href="#coverage">Coverage</a><a href="#contact">Contact</a></div><div className="copyright">© 2026 FlashDrop Express. Toronto, Ontario, Canada.</div></footer>
    </main>
  );
}
