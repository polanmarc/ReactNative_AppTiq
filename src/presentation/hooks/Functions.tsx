import { useColorScheme } from "react-native"
import { colors } from "../../config/themes/appThemes"

/**
 * Obtiene la prioridad asociada a un número.
 * @param {number} num El número que representa la prioridad.
 * @returns {string} La prioridad correspondiente al número.
 */
export const getPriority = (num: number) => {
    if (num === 1) {
        return "Alta";
    } else if (num === 2) {
        return "Media";
    } else if (num === 3) {
        return "Baja";
    } else {
        return "Recordatorio";
    }
}

/**
 * Obtiene la ruta de fondo según el esquema de color.
 * @returns {string} La ruta de la imagen de fondo.
 */
export const getRouteBackground = () => {
    const colorScheme = useColorScheme();
    const imgRute = colorScheme === 'dark' ? require('../../config/img/fondo-claro.png') : require('../../config/img/fondo-oscuro-fullscreen.png');
    return imgRute;
}

/**
 * Obtiene el color asociado a una prioridad.
 * @param {number | null} num El número que representa la prioridad.
 * @returns {string} El color asociado a la prioridad.
 */
export const getColorPriority = (num: number | null) => {
    if (num === 1) {
        return "#ff0000";
    } else if (num === 2) {
        return "#ff8000";
    } else if (num === 3) {
        return "#0ae600";
    } else {
        return colors.sintelec;
    }
}
