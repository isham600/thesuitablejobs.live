import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Thesuitablejobs",
  description:
    "Learn how Thesuitablejobs collects, uses, and protects your personal data, including our use of Meta WhatsApp for communication.",
};

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `Thesuitablejobs ("we", "our", or "us") operates the website thesuitablejobs.com and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our platform, including when you communicate with us via Meta WhatsApp.

By accessing our services, you consent to the practices described in this policy. If you do not agree with the terms of this policy, please discontinue use of our services.`,
  },
  {
    id: "whatsapp",
    title: "2. Meta WhatsApp Communication",
    content: `We use Meta WhatsApp Business to communicate with job seekers and employers. When you contact us or opt in to receive updates via WhatsApp, please be aware of the following:

**Data Collected via WhatsApp:**
- Your phone number and WhatsApp display name
- Messages, documents, and media you send us
- Timestamps and message delivery statuses
- Device information associated with your WhatsApp account

**How We Use WhatsApp Data:**
- To respond to your enquiries about job listings or employer services
- To send you job alerts, application updates, and notifications you have opted into
- To provide customer support and resolve issues

**Meta's Privacy Policy:**
WhatsApp is operated by Meta Platforms, Inc. Your use of WhatsApp is subject to Meta's Privacy Policy and WhatsApp's Privacy Policy. We do not control how Meta collects or processes data through the WhatsApp platform. We encourage you to review Meta's policies at meta.com/privacy.

**Opting Out:**
You may opt out of WhatsApp communications from us at any time by sending "STOP" to our WhatsApp number or by contacting us at support@thesuitablejobs.com. Please note that opting out may mean you no longer receive important service updates.`,
  },
  {
    id: "information-collected",
    title: "3. Information We Collect",
    content: `We collect the following categories of personal information:

**Information You Provide Directly:**
- Name, email address, and phone number when creating an account or contacting us
- Resume, work history, skills, and other career-related information
- Profile photo and any other content you upload to our platform
- Communications you send us via email, WhatsApp, or our contact forms

**Information Collected Automatically:**
- IP address and approximate geographic location
- Browser type, operating system, and device identifiers
- Pages visited, time spent on pages, and navigation paths
- Referring URLs and search terms used to find our site
- Cookies and similar tracking technologies (see our Cookie Policy)

**Information from Third Parties:**
- Publicly available professional profiles (e.g., LinkedIn) if you choose to connect them
- Information provided by employers about job applicants with appropriate consent`,
  },
  {
    id: "use-of-information",
    title: "4. How We Use Your Information",
    content: `We use the personal information we collect for the following purposes:

- **Service Delivery:** To match job seekers with relevant job listings and help employers find suitable candidates
- **Account Management:** To create and maintain your account, authenticate your identity, and manage your preferences
- **Communications:** To send you job alerts, application status updates, newsletters, and promotional offers (with your consent)
- **Customer Support:** To respond to your enquiries, resolve disputes, and troubleshoot issues
- **Platform Improvement:** To analyse usage patterns, conduct research, and improve our features and user experience
- **Legal Compliance:** To comply with applicable laws, regulations, and legal processes, and to enforce our Terms of Service
- **Safety & Security:** To detect and prevent fraud, abuse, and security incidents`,
  },
  {
    id: "sharing",
    title: "5. Sharing Your Information",
    content: `We do not sell your personal information. We may share it in the following circumstances:

**With Employers:** When you apply for a job, your application materials and profile information are shared with the relevant employer. You control which information is included in your profile and applications.

**With Service Providers:** We engage trusted third-party vendors to provide services on our behalf (e.g., cloud hosting, analytics, email delivery). These providers are contractually obligated to protect your data and use it only for the services they provide to us.

**With Meta (WhatsApp):** As described in Section 2, messages exchanged via WhatsApp are processed by Meta Platforms, Inc. in accordance with their policies.

**For Legal Reasons:** We may disclose your information if required to do so by law, court order, or governmental authority, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others.

**Business Transfers:** In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.`,
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: `We retain your personal information for as long as your account is active or as needed to provide you with our services. You may request deletion of your account and personal data at any time by contacting us at support@thesuitablejobs.com.

We may retain certain information for longer periods where required by law, to resolve disputes, prevent fraud, enforce our agreements, or for legitimate business purposes such as analytics in anonymised form.

WhatsApp message history is subject to Meta's data retention policies, which may differ from ours.`,
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:

- **Access:** Request a copy of the personal information we hold about you
- **Rectification:** Request correction of inaccurate or incomplete data
- **Erasure:** Request deletion of your personal data ("right to be forgotten")
- **Restriction:** Request that we limit how we use your data
- **Portability:** Request your data in a portable, machine-readable format
- **Objection:** Object to processing based on legitimate interests or for direct marketing
- **Withdraw Consent:** Where processing is based on your consent, you may withdraw it at any time without affecting the lawfulness of prior processing

To exercise any of these rights, contact us at support@thesuitablejobs.com. We will respond within 30 days. We may need to verify your identity before fulfilling certain requests.`,
  },
  {
    id: "cookies",
    title: "8. Cookies & Tracking Technologies",
    content: `We use cookies, web beacons, and similar technologies to enhance your experience, analyse traffic, and deliver personalised content. You can control cookie preferences through your browser settings or our cookie consent banner.

For full details, please see our Cookie Policy linked in the footer.`,
  },
  {
    id: "security",
    title: "9. Data Security",
    content: `We implement industry-standard technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These include encryption of data in transit (TLS/HTTPS), access controls, and regular security assessments.

However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security. We encourage you to use strong, unique passwords and keep your account credentials confidential.`,
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately at support@thesuitablejobs.com so we can take appropriate action.`,
  },
  {
    id: "international",
    title: "11. International Data Transfers",
    content: `Thesuitablejobs is based in India. If you access our services from outside India, your information may be transferred to, stored, and processed in India or in other countries where our service providers operate. By using our services, you consent to such transfers. We take steps to ensure that any cross-border transfers comply with applicable data protection laws.`,
  },
  {
    id: "changes",
    title: "12. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by updating the "Last Updated" date at the top of this page and, where appropriate, by sending you a notification via email or WhatsApp.

We encourage you to review this policy periodically. Your continued use of our services after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: `If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, please contact us:

**Thesuitablejobs**
Email: support@thesuitablejobs.com
Phone: +91 1800-123-4567
Address: Bangalore, India

We will do our best to address your concerns. If you are not satisfied with our response, you may have the right to lodge a complaint with your applicable data protection authority.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        {/* Hero */}
        <div className="border-b border-border bg-card">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-primary">Legal</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated:{" "}
              <time dateTime="2026-03-17">17 March 2026</time>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              This policy covers Thesuitablejobs and our use of Meta WhatsApp
              for communications. Please read it carefully.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-12">
            {/* Table of Contents — sticky sidebar on desktop */}
            <aside className="mb-10 lg:col-span-1 lg:mb-0">
              <div className="sticky top-24">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  On this page
                </h2>
                <nav className="mt-4 space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Policy body */}
            <div className="lg:col-span-3">
              <div className="space-y-10">
                {sections.map((section) => (
                  <section key={section.id} id={section.id}>
                    <h2 className="text-xl font-semibold text-foreground">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
                      {section.content.split("\n\n").map((paragraph, i) => {
                        // Render bold markdown (**text**) inline
                        const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                        return (
                          <p key={i}>
                            {parts.map((part, j) =>
                              part.startsWith("**") && part.endsWith("**") ? (
                                <strong
                                  key={j}
                                  className="font-semibold text-foreground"
                                >
                                  {part.slice(2, -2)}
                                </strong>
                              ) : (
                                part
                              )
                            )}
                          </p>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>

              {/* Footer note */}
              <div className="mt-12 rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
                <p>
                  By using Thesuitablejobs, including contacting us via Meta
                  WhatsApp, you acknowledge that you have read and understood
                  this Privacy Policy. For questions, email us at{" "}
                  <a
                    href="mailto:support@thesuitablejobs.com"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    support@thesuitablejobs.com
                  </a>{" "}
                  or visit our{" "}
                  <Link
                    href="/contact"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    Contact page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
