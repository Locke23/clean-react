import Input from '@/presentation/components/input/input'
import Footer from '@/presentation/components/footer/footer'
import LoginHeader from '@/presentation/components/loginHeader/loginHeader'
import React from 'react'
import Styles from './login.styles.scss'
import FormStatus from '@/presentation/components/formStatus/formStatus'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      {/* header section */}
      <LoginHeader />

      {/* form section */}
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

      {/* footer section */}
      <Footer />
    </div>
  )
}

export default Login
