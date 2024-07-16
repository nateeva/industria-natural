export default function AppLogo(props, appName) {
    return (
        <img {...props}
            src="images/logotipo_marron.svg"
            alt={`Logotipo ${appName} Industria Natural`}
            className="w-28" />
    );
}
