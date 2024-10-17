/* eslint-disable react/prop-types */
import logo from '../assets/images/logotipo-marron.png'

export const Logo = ({url, className, ...props}) => {
  return (
    <a href={url}  >
      <img
        src={logo}
        alt="Logotipo Industria Natural"
        className={`w-24 ${className}`}
      />
    </a>
  )
}
