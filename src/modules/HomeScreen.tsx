import { Button, StyleSheet, Text, View } from "react-native"
import { fetchMessage } from "./lab/labSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";


const HomeScreen = () => {

    const dispatch = useAppDispatch()

    const status = useAppSelector((state) => state.lab.status)
    const data = useAppSelector((state) => state.lab.data)
    const error = useAppSelector((state) => state.lab.error)

    console.log(status, data, error), ':CHECK';


    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Text>{status}</Text>
            <Text>{data}</Text>
            <Text>{error}</Text>
            <Button title="Fetch Message" onPress={() => dispatch(fetchMessage())} />
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});