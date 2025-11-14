import SEOWrapper from '../components/SEO/SEOWrapper';

export default function CookiePolicyPage() {
  return (
    <>
      <SEOWrapper
        title="Cookie Policy | Build Media Strategies"
        description="Details on the cookies we set, what they are used for, and the controls you have."
        canonical="https://buildmediastrategies.com/cookie-policy"
      />
      <main className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-black">
          <h1 className="text-4xl font-bold text-sky-gradient">Cookie Policy</h1>
          <p>
            Cookies are small text files that help us remember who you are, keep the site secure, and understand which pages are
            working well. Some cookies expire as soon as you close the browser, while others remain until you clear them or they
            reach their set expiry date.
          </p>
          <p>
            We use essential cookies for load balancing, security, and to remember whether you have dismissed certain banners.
            Optional analytics cookies, such as Google Analytics, only run after you have granted consent through our cookie
            banner. They help us track anonymous usage trends so we can improve content and performance.
          </p>
          <p>
            You can manage preferences through the on-site cookie banner or by adjusting your browser settings to block or delete
            cookies. Blocking essential cookies may impact the functionality of forms or interactive tools. You can also email
            hello@buildmediastrategies.com if you would like us to reset your consent record.
          </p>
          <p>
            Third-party tools embedded on the site, such as analytics dashboards or scheduling widgets, may set their own cookies.
            These providers are carefully selected and only receive the minimum data necessary to deliver their service.
          </p>
        </div>
      </main>
    </>
  );
}
