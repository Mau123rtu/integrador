
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <span className="brand">✦ TU NUEVO ESPACIO DIGITAL</span>

          <h1>
            Todo comienza con una
            <span style={{ color: "#7855e8" }}> nueva idea.</span>
          </h1>

          <p>
            Una experiencia sencilla, moderna y diseñada para ti.
            Explora nuestra plataforma y comienza hoy.
          </p>

          <div className="hero-actions">
            <Link to="/register" className="btn">
              Crear mi cuenta →
            </Link>

            <Link to="/login" className="btn btn-outline">
              Iniciar sesión
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-emoji">💜</div>
          <h2>¡Qué bueno tenerte aquí!</h2>
          <p>Tu próximo proyecto empieza hoy.</p>
        </div>
      </section>
    </main>
  );
}
