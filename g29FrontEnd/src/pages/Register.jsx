import { useState, useEffect } from "react"
import { FaUser } from 'react-icons/fa'

const Register = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    password2: ''
  })

  const { nombre, email, password, password2 } = formData  //Se destructura formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, //hace la copia del previusState y le agrega
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => { //controlara la pagina para que no se recargue
    e.preventDefault()
  }

  return (
    <div>
      <>
        <section className="heading">
          <h4>
            <FaUser />Register
            <p>Por favor crea tu cuenta</p>
          </h4>
        </section>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={nombre}
                placeholder="Por favor teclea tu nombre"
                onChange={onChange}
              />
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                placeholder="Por favor teclea tu email"
                onChange={onChange}
              />
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Por favor teclea tu password"
                onChange={onChange}
              />
              <input
                type="password"
                className="form-control"
                id="password2"
                name="password2"
                value={password2}
                placeholder="Por favor confirma tu password"
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-block">
                Registrar
              </button>
            </div>
          </form>
        </section>
      </>
    </div>
  )
}

export default Register
