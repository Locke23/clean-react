import { Footer, FormStatus, LoginHeader, Input } from '@/presentation/components'
import React from 'react'
import Styles from './login.styles.scss'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />

      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu email" />
        <Input
          type="password"
          name="password"
          id=""
          placeholder="Digite sua senha"
        />

        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <div className={Styles.linkContainer}>
          <span className={Styles.link}>Criar conta</span>
        </div>
        <FormStatus />
      </form>

      <Footer />
    </div>
  )
}

export default Login
