import preloader from '../../../assets/img/preloader.svg'
import s from './preloader.module.scss'
import React from 'react'

let Preloader = props => {
  return <img alt="please, wait..." className={s.preloader} src={preloader} />
}

export default Preloader
