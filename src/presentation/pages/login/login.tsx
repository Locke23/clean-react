import Logo from '@/presentation/components/logo/logo'
import Spinner from '@/presentation/components/spinner/spinner'
import React from 'react'
import Styles from './login.styles.scss'

const Login: React.FC = () => {
  return <div className={Styles.login}>

    {/* header section */}
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquete para programadores</h1>
    </header>

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
    <footer className={Styles.footer}></footer>
  </div>
}

export default Login
