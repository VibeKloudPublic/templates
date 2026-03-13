export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="badge">Hello World</p>
        <h1>Lorem Ipsum is simply dummy text.</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </header>

      <main>
        <section id="programs" className="card-grid">
          
            <article key="Hello World" className="card">
              <h2>Hello World</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </article>
 
        </section>

      </main>

      <footer>
        <p>© {new Date().getFullYear()} Hello World · Lorem Ipsum is simply dummy text.</p>
      </footer>
    </div>
  )
}
