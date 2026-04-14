export default function HomePage() {
  const features = [
    ['Google Cloud Native', 'Automated Provisioning'],
    ['Runs fully on your GCP', 'Secure IAM roles'],
    ['No manual setup required', 'HTTPS endpoint with SSL'],
    ['Cloud Run service', 'Secrets Managed']
  ];

  return (
    <section className="hiw-section" id="how-it-works">
      <div className="container">
        <div className="text-center mb-5">
          <div className="mx-auto">
            <img src="/vk-saas-illustration.svg" alt="Cloud deployment illustration" width="50%" />
          </div>
          <h2 className="section-title">
            🚀 Congratulations! <br /> Your App is Live on your own Google Cloud
          </h2>
          <p className="section-sub mx-auto mt-3">
            Deployed successfully with automated infrastructure, CI/CD, and secure configuration.
          </p>
        </div>

        <div className="row g-3">
          {features.map((column) => (
            <div className="col-md-3 col-12" key={column[0]}>
              <div className="d-flex flex-column align-items-stretch">
                {column.map((item) => (
                  <div className="tag-pill mb-2" key={item}>
                    <span className="dot" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
