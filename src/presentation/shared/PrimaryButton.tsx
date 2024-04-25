import { StyleSheet, Text, View } from "react-native"
import { Button } from "react-native-paper"
import { colors } from "../../config/themes/appThemes"

/**
 * Interfaz para las propiedades del componente PrimaryButton.
 * @interface Props
 */
interface Props {
    label: string
    onPress?: () => void,
}

/**
 * Componente de botón primario.
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.label - Texto del botón.
 * @param {Function} props.onPress - Función de devolución de llamada para manejar el evento de prensa del botón (opcional).
 * @returns {JSX.Element} El componente del botón primario.
 */
export const PrimaryButton = ({ onPress, label }: Props) => {
    return (
        <Button style={styles.button} onPress={() => onPress && onPress()}>
            <Text style={styles.buttonText}>{label}</Text>
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        backgroundColor: colors.sintelec,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
})