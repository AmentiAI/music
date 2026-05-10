"use client";

import { FormEvent } from "react";

export function ContactForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Connect this form to your email provider or API route to deliver messages.");
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label className="form-field">
        <span>Name</span>
        <input type="text" name="name" autoComplete="name" required />
      </label>
      <label className="form-field">
        <span>Email</span>
        <input type="email" name="email" autoComplete="email" required />
      </label>
      <label className="form-field">
        <span>Instrument &amp; goals</span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="e.g. Adult beginner piano, jazz guitar…"
        />
      </label>
      <label className="form-field form-checkbox">
        <input type="checkbox" name="mailing" value="yes" />
        <span>Join the mailing list for news and openings</span>
      </label>
      <button className="btn btn-primary btn-full" type="submit">
        Send message
      </button>
      <p className="form-note">
        Wire this form to Formspree, Resend, or a Next.js API route when you deploy.
      </p>
    </form>
  );
}
