import { StyleSheet, Text, View } from "react-native"
import { Button } from "react-native-paper"
import { colors } from "../../config/themes/appThemes"

interface Props {
    label: string
    onPress?: () => void,
}

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