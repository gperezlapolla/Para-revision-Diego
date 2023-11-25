import { useState } from 'react';

const Formulario = () => {
  // Estados del formulario
  const [Nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [Contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  // Estado para los errores
  const [hayError, setHayError] = useState(false);
  // Estados del formulario
  const [estados, setEstados] = useState({
    Nombre: '',
    email: '',
    Contraseña: '',
    confirmarContraseña: '',
  });

  // Función antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault();
    // Validación;
    if (Nombre === '' || email === '' || Contraseña === '' || confirmarContraseña === '') {
      setError(true);
      return;
    }

    // Limpiar el formulario
    setEstados({
      Nombre: '',
      email: '',
      Contraseña: '',
      confirmarContraseña: '',
    });
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {hayError ? <p>Todos los campos son obligatorios</p> : null}
        <div className="form-group">
          <label>Nombre y apellidos</label>
          <input
            type="text"
            name="Nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={Nombre}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="text"
            name="Contraseña"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={Contraseña}
          />
        </div>
        <div className="form-group">
          <label>Reingrese contraseña</label>
          <input
            type="text"
            name="confirmarContraseña"
            className="form-control"
            onChange={(e) => setConfirmarContraseña(e.target.value)}
            value={confirmarContraseña}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>

      <h3>Verificación de datos ingresados</h3>
      {Nombre} - {email} - {Contraseña} - {confirmarContraseña}
    </>
  );
};

export default Formulario;


    