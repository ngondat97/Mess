import { View, StyleSheet } from 'react-native';
import React, { FC, memo, useMemo } from 'react';
import { BubbleProps, IMessage } from 'react-native-gifted-chat';
import ParsedText from 'react-native-parsed-text';

const getParse = (linkStyle: any) => [
    { type: 'url', onPress: undefined },
    { type: 'phone', onPress: undefined, style: { ...linkStyle, ...styles.phoneStyle } },
    { type: 'email', onPress: undefined, style: linkStyle },
];

interface IProps extends BubbleProps<IMessage> {}

const Bubble: FC<IProps> = ({ currentMessage, position }) => {
    const linkStyle = position === 'left' ? styles.textLinkLeft : styles.textLinkRight;
    const parse = useMemo(() => [...getParse(linkStyle)], [linkStyle]);

    return (
        <View style={position === 'left' ? styles.viewWarpperBubbleLeft : styles.viewWarpperBubbleRight}>
            <View style={[position === 'left' ? styles.viewBubbleLeft : styles.viewBubbleRight]}>
                <ParsedText
                    selectable
                    parse={parse}
                    style={[position === 'left' ? styles.textBubbleLeft : styles.textBubbleRight]}>
                    {currentMessage?.text}
                </ParsedText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewWarpperBubbleLeft: { alignItems: 'flex-start', flex: 1 },
    viewWarpperBubbleRight: { alignItems: 'flex-end', flex: 1 },
    viewBubbleLeft: {
        backgroundColor: '#303030',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginRight: 60,
        minHeight: 20,
        paddingVertical: 10,
        paddingHorizontal: 13,
    },
    viewBubbleRight: {
        backgroundColor: '#6E4AF6',
        marginLeft: 60,
        minHeight: 20,
        paddingVertical: 10,
        paddingHorizontal: 13,
        borderRadius: 20,
    },
    phoneStyle: { textDecorationLine: 'none' },
    textLinkLeft: { color: '#fff', textDecorationLine: 'underline' },
    textLinkRight: { color: '#fff', textDecorationLine: 'underline' },
    textBubbleLeft: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
    },
    textBubbleRight: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',
    },
});

export default memo(Bubble);
