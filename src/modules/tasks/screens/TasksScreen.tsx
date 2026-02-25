import { useEffect } from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { fetchTaskThunk } from "../store/taskSlice"
import { useAppDispatch } from "../../../hooks/useAppDispatch"
import { useAppSelector } from "../../../hooks/useAppSelector"
import { logOutThunk } from "../../auth/authThunk"

export const TasksScreen = () => {

    const dispatch = useAppDispatch()

    const data = useAppSelector((state) => state.tasks.tasks)
    const status = useAppSelector((state) => state.tasks.status)

    console.log(data, status, 'Check data');

    useEffect(() => {

        dispatch(fetchTaskThunk())

    }, [])

    if (status === 'idle') return null
    if (status === 'loading') {
        return (
            <SafeAreaView style={styles.loading} >
                <Text>Loading...</Text>
            </SafeAreaView>
        )
    }
    if (status === 'error') {
        return (
            <SafeAreaView style={styles.loading}>
                <Text>{status}</Text>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView>
            {
                data.map((task) => {
                    return (
                        <View key={task.id}>
                            <Text >Name :{task.title} </Text>
                            <Text >Status :{task.completed ? 'Done' : 'Pending'} </Text>
                        </View>
                    )
                })
            }

            <Button title="Logout" onPress={() => dispatch(logOutThunk())} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loading: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})