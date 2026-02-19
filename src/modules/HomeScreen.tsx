import { Button, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../app/store/store";
import { fetchMessage } from "./lab/labSlice";


const HomeScreen = () => {

    const dispatch = useDispatch<AppDispatch>()

    const status = useSelector((state: RootState) => state.lab.status)
    const data = useSelector((state: RootState) => state.lab.data)
    const error = useSelector((state: RootState) => state.lab.error)

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