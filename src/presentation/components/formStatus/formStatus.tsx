import React from 'react'
import Spinner from '../spinner/spinner'
import Styles from './formStatus.styles.scss'

const FormStatus: React.FC = () => {
  return <div className={Styles.errorWrap}>
    <Spinner className={Styles.spinner} />
    <span className={Styles.error}>erro</span>
  </div>
}

export default FormStatus
