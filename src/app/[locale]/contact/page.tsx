"use client";
import React from "react";
import { useLanguage } from "@/provider/LanguageProvider";

const Contact = () => {
  const { t } = useLanguage();

  const contactCards = [
    {
      title: t("contact.linkedinTitle"),
      description: t("contact.linkedinValue"),
      href: t("contact.linkedinLink"),
      icon: "💼",
      borderColor: "#0a66c2",
    },
    {
      title: t("contact.email"),
      description: t("contact.emailValue"),
      href: `mailto:${t("contact.emailValue")}`,
      icon: "✉️",
      borderColor: "var(--color-primary)",
    },
    {
      title: t("contact.whatsappTitle"),
      description: t("contact.whatsappValue"),
      href: t("contact.whatsappLink"),
      icon: "📱",
      borderColor: "#16a34a",
    },
  ];

  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `${formState.message}%0A%0A${t("contact.formNameLabel")}: ${formState.name}%0A${t("contact.formEmailLabel")}: ${formState.email}`;
    window.location.href = `mailto:${t("contact.emailValue")}?subject=${encodeURIComponent(t("contact.emailSubject") as string)}&body=${body}`;
  };

  return (
    <section className="p-6">
      <div className="glass-panel max-w-5xl mx-auto flex flex-col gap-8">
        <header className="text-center space-y-2">
          <p className="text-sm uppercase tracking-[0.6em] text-[var(--color-secondary)]">
            {t("contact.subtitle")}
          </p>
          <h1 className="text-4xl font-semibold text-[var(--color-primary)]">
            {t("contact.title")}
          </h1>
          <p className="text-base text-[var(--color-secondary)] max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {contactCards.map((card) => (
              <a
                key={card.title as string}
                href={card.href as string}
                className="frosted-card block transition-all duration-300 hover:-translate-y-1"
                style={{ borderLeftColor: card.borderColor, borderLeftWidth: "3px" }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl drop-shadow">{card.icon}</span>
                  <div>
                    <p className="text-base font-semibold text-[var(--color-text)]">{card.title}</p>
                    <p className="text-sm text-[var(--color-secondary)]">{card.description}</p>
                  </div>
                </div>
                <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
                  {t("contact.sendMessage")} <span aria-hidden="true">↗</span>
                </p>
              </a>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="frosted-card flex flex-col gap-5"
          >
            <p className="text-sm text-[var(--color-secondary)]">
              {t("contact.formHelper")}
            </p>
            <div className="space-y-4 flex-1">
              <div>
                <label className="sr-only" htmlFor="contact-name">
                  {t("contact.formNameLabel")}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder={t("contact.formNamePlaceholder") as string}
                  className="w-full rounded-xl border border-[var(--frosted-border)] bg-[var(--frosted-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-secondary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 transition"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="contact-email">
                  {t("contact.formEmailLabel")}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder={t("contact.formEmailPlaceholder") as string}
                  className="w-full rounded-xl border border-[var(--frosted-border)] bg-[var(--frosted-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-secondary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 transition"
                />
              </div>
              <div className="flex-1">
                <label className="sr-only" htmlFor="contact-message">
                  {t("contact.formMessageLabel")}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={7}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder={t("contact.formMessagePlaceholder") as string}
                  className="w-full rounded-xl border border-[var(--frosted-border)] bg-[var(--frosted-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-secondary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-sky-300 px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90 hover:shadow-[0_10px_30px_var(--color-primary)/40]"
              >
                {t("contact.formButton")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
