export default function AppLogo(props, appName) {
    return (
        <img {...props}
            src="images/logotipo_marron.svg"
            alt={`Logotipo ${appName} Industria Natural`}
            className="transition-transform duration-300 transform w-28 hover:scale-110" />
    );
}
