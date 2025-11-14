import SEOWrapper from '../components/SEO/SEOWrapper';

export default function PrivacyPage() {
  return (
    <>
      <SEOWrapper
        title="Privacy Policy | Build Media Strategies"
        description="How Build Media Strategies collects, uses, and protects your information across our website and client services."
        canonical="https://buildmediastrategies.com/privacy"
      />
      <main className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-black">
          <h1 className="text-4xl font-bold text-sky-gradient">Privacy Policy</h1>
          <p>
            We collect the information you share with us when you book a call, download a resource, or become a client. That may
            include your name, contact details, role, and any project notes or uploads you submit. We also capture limited
            technical data, such as device type, browser, and approximate location, so we can maintain platform security.
          </p>
          <p>
            Data is processed to respond to enquiries, deliver statements of work, and meet our legal obligations. We keep client
            records only for as long as required for accounting or regulatory purposes, and they are encrypted at rest within EU
            or UK data centres. We never sell your information or use it for unrelated advertising.
          </p>
          <p>
            Optional analytics cookies only run after you provide consent through our on-site banner. You can withdraw consent at
            any time by emailing hello@buildmediastrategies.com or adjusting your browser settings. Essential cookies that keep
            the site functional cannot be disabled through the banner.
          </p>
          <p>
            When you interact with our AI demonstrations or automation products, prompts and outputs may be logged so we can
            audit performance and keep a record of decisions. These logs are scoped to the specific engagement and are deleted
            on a rolling schedule unless we are required to retain them for compliance reasons.
          </p>
          <p>
            You may request a copy of the personal data we hold, ask us to correct it, or request deletion where we no longer
            need the information. Contact hello@buildmediastrategies.com to exercise your rights and we will respond within one
            month, or sooner where possible.
          </p>
        </div>
      </main>
    </>
  );
}
