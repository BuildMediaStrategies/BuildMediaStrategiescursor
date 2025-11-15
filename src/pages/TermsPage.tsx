import SEOWrapper from '../components/SEO/SEOWrapper';

export default function TermsPage() {
  return (
    <>
      <SEOWrapper
        title="Terms of Service | Build Media Strategies"
        description="Understand the terms that govern access to Build Media Strategies, our proposals, and ongoing engagements."
        canonical="https://buildmediastrategies.com/terms"
      />
      <main className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-black">
          <h1 className="text-4xl font-bold text-sky-gradient">Terms of Service</h1>
          <p>
            By browsing this site or requesting a proposal you agree to use the platform lawfully and to respect our intellectual
            property. Content provided here is for general marketing guidance and should not be treated as professional legal,
            tax, or financial advice.
          </p>
          <p>
            Service engagements are governed by statements of work that set out scope, timelines, and fees. Work begins after
            written approval and any deposit noted in the proposal. Copyright and other deliverable rights transfer only after
            invoices are paid in full, though you receive a licence to use preview assets for review purposes.
          </p>
          <p>
            We operate with commercially reasonable care but cannot guarantee uninterrupted services, third-party API stability,
            or error-free automations. To the fullest extent permitted, our liability is limited to the fees paid for the project
            in question, and we are not responsible for indirect or consequential loss.
          </p>
          <p>
            Either party may terminate an ongoing engagement with written notice if the other materially breaches the agreement
            and fails to remedy the issue. Any obligations that by their nature should survive termination - such as confidentiality
            or accrued payment obligations - remain in force.
          </p>
          <p>
            We may update these terms periodically to reflect regulatory changes or new services. Continued use of the site or
            our services after an update constitutes acceptance of the revised terms. Contact hello@buildmediastrategies.com with
            any questions.
          </p>
        </div>
      </main>
    </>
  );
}
