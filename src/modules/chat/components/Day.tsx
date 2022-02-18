import { View, Text, StyleSheet } from 'react-native';
import React, { FC, Fragment, memo } from 'react';
import { DayProps, IMessage } from 'react-native-gifted-chat';
import { isSameDay, isSameUser } from 'react-native-gifted-chat/lib/utils';
import dayjs from 'dayjs';

interface Iprops extends DayProps<IMessage> {}

const Day: FC<Iprops> = ({ currentMessage, dateFormat, previousMessage }) => {
    const sameUser = isSameUser(previousMessage as IMessage, currentMessage);

    return (
        <Fragment>
            {!!currentMessage && !isSameDay(currentMessage, previousMessage) && (
                <View style={styles.viewDate}>
                    <Text style={styles.textDate}>
                        {dayjs(currentMessage?.createdAt).format(dateFormat).toUpperCase()}
                    </Text>
                </View>
            )}

            {!sameUser && currentMessage?.user?._id !== 1 && (
                <Text style={styles.textName}>{currentMessage?.user?.name}</Text>
            )}
        </Fragment>
    );
};

const styles = StyleSheet.create({
    viewDate: { alignItems: 'center', marginVertical: 10 },
    textDate: { fontSize: 12, color: '#757575', fontWeight: '500' },
    textName: { fontSize: 12, color: '#757575', marginBottom: 5, fontWeight: '500', marginLeft: 70 },
});

export default memo(Day);
