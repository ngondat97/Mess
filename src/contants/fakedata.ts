import { faker } from '@faker-js/faker';
import { IMessage } from 'react-native-gifted-chat';
import { v4 as uuidv4 } from 'uuid';

export const fakes: IMessage[] = [
    {
        _id: uuidv4(),
        text: faker.lorem.words(10),
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Quang',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        },
    },
    {
        _id: uuidv4(),
        text: faker.lorem.words(10),
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Quang',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        },
    },
    {
        _id: uuidv4(),
        text: faker.lorem.words(10),
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Quang',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        },
    },
    {
        _id: uuidv4(),
        text: faker.lorem.words(10),
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Quang',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        },
    },
    {
        _id: uuidv4(),
        text: faker.lorem.words(10),
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Quang',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        },
    },
    {
        _id: uuidv4(),
        text: 'uh, bên kia k thấy ai đánh ire',
        createdAt: new Date(),
        user: {
            _id: 1,
        },
    },
    {
        _id: uuidv4(),
        text: 'với cả e thấy ire k khoẻ đến thế đâu',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Quang',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        },
    },
    {
        _id: uuidv4(),
        text: 'bên kia có ai đánh được ire đâu',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Quang',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        },
    },
    {
        _id: uuidv4(),
        text: 'Ire là rõ ae ơi =)))',
        createdAt: new Date(),
        user: {
            _id: 3,
            name: 'Thành',
            avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        },
    },
    {
        _id: uuidv4(),
        text: 'Vayne Seraphine +1 thì sao ạ',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Quang',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        },
    },
    {
        _id: uuidv4(),
        text: 'nay ban gì ae nhỉ',
        createdAt: new Date(),
        user: {
            _id: 1,
        },
    },
    {
        _id: uuidv4(),
        text: 'anh thấy cũng k cần thiết lắm :v',
        createdAt: new Date(),
        user: {
            _id: 1,
        },
    },
    {
        _id: uuidv4(),
        text: 'thường thường team top cao hơn vòng bảng dược chọn bên trận đầu rồi team thua ván trước được chọn bên ván sau',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Quang',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        },
    },
    {
        _id: uuidv4(),
        text: 'Anh ơi anh hỏi xem có thể thức chọn bên không ạ?',
        createdAt: new Date(),
        user: {
            _id: 2,
            name: 'Quang',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        },
    },
];
