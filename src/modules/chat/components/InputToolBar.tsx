import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React, { FC, memo, useCallback, useState } from 'react';
import { InputToolbarProps } from 'react-native-gifted-chat';
import { Icon } from 'react-native-elements';

interface IProps extends InputToolbarProps {
    onSend: (text: string) => void;
}

const InputToolBar: FC<IProps> = ({ onSend }) => {
    const [text, setText] = useState<string>('');

    const onSubmitEditing = useCallback(() => {
        onSend(text);
        setText('');
    }, [onSend, text]);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.viewIconActions}>
                <Icon type="material-community" name="dots-grid" color="#933AF6" size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewIconActions}>
                <Icon type="font-awesome" name="camera" color="#933AF6" size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewIconActions}>
                <Icon type="ionicon" name="image" color="#933AF6" size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.viewIconActions}>
                <Icon type="font-awesome" name="microphone" color="#933AF6" size={20} />
            </TouchableOpacity>

            <View style={styles.viewInput}>
                <TextInput
                    value={text}
                    onChangeText={setText}
                    spellCheck={false}
                    autoCorrect={false}
                    placeholder="Aa"
                    returnKeyType="done"
                    onSubmitEditing={onSubmitEditing}
                    style={styles.textInput}
                    placeholderTextColor="#757575"
                />

                <TouchableOpacity style={[styles.viewIconActions, styles.iconSmile]}>
                    <Icon type="font-awesome-5" name="smile" color="#933AF6" size={20} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.viewIconActions, styles.viewLike]}>
                <Icon type="ant-design" name="like1" color="#933AF6" size={20} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', height: 45, paddingHorizontal: 10 },
    viewIconActions: { paddingRight: 15, height: 45, alignItems: 'center', justifyContent: 'center' },
    viewLike: { paddingRight: 0, paddingLeft: 15 },
    viewInput: {
        flex: 1,
        backgroundColor: '#303030',
        height: 32,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: { fontSize: 16, color: '#fff', paddingHorizontal: 10, height: 45, flex: 1 },
    iconSmile: { paddingRight: 10 },
});

export default memo(InputToolBar);
