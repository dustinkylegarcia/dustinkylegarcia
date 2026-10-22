# Portfolio Enhancement Plan

## Goal
Modernize the portfolio and add what's genuinely missing — without piling on generic "AI look" effects. One real backend addition (working contact form), plus polish across navigation, metadata, projects, and footer.

## 1. Working contact form (backend — Lovable Cloud)
- Enable Lovable Cloud (database + auth, no external accounts needed).
- New table `contact_messages`: id, name, email, message, is_read, created_at.
- Security: visitors can only INSERT (no one can read or delete their submissions through the public site); reading is restricted to your signed-in account. Input length limits enforced (name ≤ 100, email ≤ 255, message ≤ 1000).
- Wire the Home contact form to it: real validation with inline error messages, loading state on the button, proper error handling, success toast only after the message is actually stored.
- Private inbox: a `/admin` page, protected by sign-in, listing all messages with read/unread state. I'll create your login account — you'll receive a password setup link (I'll need your preferred email address).

## 2. Site metadata (SEO + social sharing)
- Replace the template defaults in `index.html`: real title (`</>TIN — Dustin Kyle Garcia · Web Developer`), real description, correct og/twitter tags, remove the placeholder Lovable social image and author meta.

## 3. Navigation polish
- Add in-page section links on Home (About, Certifications, Contact) that smooth-scroll to each section, while keeping Projects as the separate page.
- Add a thin scroll-progress bar under the navbar and a back-to-top button that appears after scrolling.
- Active-link indicator kept as-is (it works well).

## 4. Footer (currently built but never shown)
- Render the Footer on all pages.
- Fix its placeholder links: real LinkedIn, GitHub, Facebook, Instagram URLs; remove the fake email (or wire it to your real one when you share it).

## 5. Projects page upgrade
- Add tech-stack tags to each project card (small pills under the description).
- Add lightweight filtering by type (e.g. Web App / Landing Page / API) with animated grid re-layout.
- Keep the existing card design — it already looks modern.

## 6. Design-system cleanups (keeps dark/light mode consistent)
- Replace hardcoded brand hover colors (LinkedIn blue, Facebook blue, etc.) with proper tokens registered in the Tailwind config, so dark mode renders them correctly.
- Subtle hero refinement: faint dot-grid background texture and a small scroll-down hint — no new heavy animations.

## 7. Small correctness fixes
- Home certifications section stays as placeholders per your choice (layout is ready for real data later).
- Ensure consistent section spacing and responsive behavior across breakpoints.

## Out of scope
- Real certification content (you'll provide later).
- Email notifications from the form (can be added later; the inbox covers reading messages).

## Verification
- Test the form end-to-end: submit a real message, confirm it appears in the inbox after signing in, confirm a visitor cannot read messages.
- Check dark and light modes for the new tags, footer, and progress bar.
- Confirm metadata renders correctly via the page source.
