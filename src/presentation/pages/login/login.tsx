import Footer from '@/presentation/components/footer/footer'
import LoginHeader from '@/presentation/components/loginHeader/loginHeader'
import Spinner from '@/presentation/components/spinner/spinner'
import React from 'react'
import Styles from './login.styles.scss'

const Login: React.FC = () => {
  return <div className={Styles.login}>

    {/* header section */}
    <LoginHeader />

    {/* form section */}
    <form className={Styles.form}>
      <h2>Login</h2>
      <div className={Styles.inputWrap}>
        <input type="email" name="email" id="" placeholder='Digite seu email' />
        <span className={Styles.status}>🔴</span>
      </div>
      <div className={Styles.inputWrap}>
        <input type="password" name="password" id="" placeholder='Digite sua senha' />
        <span className={Styles.status}>🔴</span>
      </div>
      <button className={Styles.submit} type="submit">Entrar</button>
      <div className={Styles.linkContainer}>
        <span className={Styles.link}>Criar conta</span>
      </div>
      <div className={Styles.errorWrap}>
        <Spinner className={Styles.spinner} />
        <span className={Styles.error}>erro</span>
      </div>
    </form>

    {/* footer section */}
    <Footer/>
  </div>
}

export default Login
