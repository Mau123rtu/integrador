
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="page">
      <section className="card">
        <div className="brand">PurpleSpace ✦</div>

        <h1 style={{ marginTop: "24px" }}>
          ¡Qué bueno verte!
        </h1>

        <p className="subtitle">
          Ingresa tus datos para continuar.
        </p>

        <form
          className="form"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              placeholder="tu@correo.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Tu contraseña"
              autoComplete="current-password"
              required
            />
          </div>

          <button className="btn" type="submit">
            Iniciar sesión →
          </button>
        </form>

        <p className="form-footer">
          ¿No tienes cuenta?{" "}
          <Link to="/register">Regístrate aquí</Link>
        </p>
      </section>
    </main>
  );
}
