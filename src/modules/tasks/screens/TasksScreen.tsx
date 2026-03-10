import { useEffect } from "react"
import { Button, Pressable, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { addTaskThunk, deleteTaskThunk, fetchTaskThunk, toggleTaskThunk } from "../store/taskSlice"
import { useAppDispatch } from "../../../hooks/useAppDispatch"
import { useAppSelector } from "../../../hooks/useAppSelector"
import { logOutThunk } from "../../auth/authThunk"

export const TasksScreen = () => {

    const dispatch = useAppDispatch()

    const data = useAppSelector((state) => state.tasks.tasks)
    const status = useAppSelector((state) => state.tasks.status)
    const addingTask = useAppSelector((state) => state.tasks.addingTask)

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
                        <View key={task.id} style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 12,
                            marginVertical: 4,
                            backgroundColor: '#f5f5f5',
                            borderRadius: 8
                        }}>
                            {/* Task info */}
                            <Text style={{
                                flex: 1,
                                textDecorationLine: task.completed ? 'line-through' : 'none',
                                color: task.completed ? '#999' : '#000'
                            }}>
                                {task.title}
                            </Text>

                            {/* Toggle button */}
                            <Pressable onPress={() => dispatch(toggleTaskThunk({
                                taskId: task.id,
                                completed: !task.completed,
                                previousCompleted: task.completed
                            }))}>
                                <Text style={{ marginHorizontal: 8 }}>
                                    {task.completed ? '✅' : '⬜'}
                                </Text>
                            </Pressable>

                            {/* Delete button */}
                            <Pressable onPress={() => dispatch(deleteTaskThunk({ task }))}>
                                <Text style={{ color: 'red' }}>🗑️</Text>
                            </Pressable>
                        </View>
                    )
                })
            }

            <Button title="Logout" onPress={() => dispatch(logOutThunk())} />
            <Button title="Add Task" disabled={addingTask} onPress={() => dispatch(addTaskThunk({ title: 'New Task', tempId: Date.now().toString() }))} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loading: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})