import Radio from "./Radio"
import { Title } from "./Title"

const MetodoEnvio = ({tipEnvio, formulario, onInputChange}) => {
    return (
        <>
            <Title
                title="Método de envío"
                description="Selecciona cómo deseas recibir tu pedido"
                className="mt-14"
            />
            <div className="pt-4 md:flex md:space-x-7">
                {tipEnvio.includes("1") && (
                    <div>
                        <Radio
                        type="radio"
                        id="retiroLocal"
                        name="tipoEnvio"
                        value="RetLocal"
                        checked={formulario.tipoEnvio === "RetLocal"}
                        onChange={onInputChange}
                        title="Retiro en local"
                        />
                    </div>
                )}

                {tipEnvio.includes("2") && (
                    <div>
                        <Radio
                        type="radio"
                        id="motomensaje"
                        name="tipoEnvio"
                        value="Mensajeria"
                        checked={formulario.tipoEnvio === "Mensajeria"}
                        onChange={onInputChange}
                        title="Mensajería"
                        />
                    </div>

                    )
                }

                {tipEnvio.includes("3") && (
                    <div>
                        <Radio
                        type="radio"
                        id="correoArgentino"
                        name="tipoEnvio"
                        value="CorreoArg"
                        checked={formulario.tipoEnvio === "CorreoArg"}
                        onChange={onInputChange}
                        title="Correo Argentino"
                        />
                    </div>
                )}

            </div>
        </>
    )
}

export default MetodoEnvio