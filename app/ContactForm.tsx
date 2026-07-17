"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => body.append(key, String(value)));

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value="New FlashDrop delivery inquiry" />
      <p className="bot-field" aria-hidden="true"><label>Do not fill this out<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className="field-row"><label>Your name<input name="name" required placeholder="Full name" /></label><label>Email address<input name="email" required type="email" placeholder="you@example.com" /></label></div>
      <div className="field-row"><label>Phone number<input name="phone" required type="tel" placeholder="(647) 000-0000" /></label><label>Pickup location<input name="pickup" required placeholder="City or postal code" /></label></div>
      <label>Drop-off location<input name="dropoff" required placeholder="City or postal code" /></label>
      <label>What are we delivering?<textarea name="details" required rows={4} placeholder="Package size, timing, and anything else we should know"></textarea></label>
      <button className="button primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : <>Request my quote <span>→</span></>}</button>
      {status === "success" && <p className="form-status success" role="status">Thank you. Your delivery inquiry has been sent.</p>}
      {status === "error" && <p className="form-status error" role="alert">We couldn’t send your request. Please call or email us directly.</p>}
      {status === "idle" && <small className="form-note">Prefer to talk? Choose any of our three contact numbers.</small>}
    </form>
  );
}
