import illustration from './assets/vk-saas-illustration.svg'

const tags = [
  ['Google Cloud Native', 'Automated Provisioning'],
  ['Runs fully on your GCP', 'Secure IAM roles'],
  ['No manual setup required', 'HTTPS endpoint with SSL'],
  ['Cloud Run service', 'Secrets Managed'],
]

export default function App() {
  return (
    <section className="hiw-section" id="how-it-works">
      <div className="container">
        <div className="hero-copy">
          <div className="illustration-wrap">
            <img src={illustration} alt="SaaS app deployment illustration" className="hero-illustration" />
          </div>

          <h2 className="section-title">🚀 Congratulations! <br /> Your App is Live on your own Google Cloud</h2>

          <p className="section-sub">
            Deployed successfully with automated infrastructure, CI/CD, and secure configuration.
          </p>
        </div>

        <div className="tag-columns">
          {tags.map((column, columnIndex) => (
            <div className="tag-column" key={`tag-column-${columnIndex}`}>
              {column.map((item) => (
                <div className="tag-pill" key={item}>
                  <span className="dot" />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
