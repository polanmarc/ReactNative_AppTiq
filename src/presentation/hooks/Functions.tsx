
interface getPriorityProps {
    num : number
}

export const getPriority = ({ num } : getPriorityProps) => {
    if (num === 1) {
        return "Alta"
    } else if (num === 2) {
        return "Media"
    } else if (num === 3) {
        return "Baja"
    } else {
        return "Recordatorio"
    }
}

export const getColorPriority = (num : number) => {
    if (num === 1) {
        return "#ff0000";
    } else if (num === 2) {
        return "#ff8000";
    } else if (num === 3) {
        return "#0ae600";
    } else {
        return "#0064ff";
    }
}