import Redis from "@/modules/Redis"
export const mockRedisList: Redis[] = [
    {
        id: 1,
        createdTime: '',
        creator: 1,
        updatedTime: '',
        updater: 1,
        isDelete: 0,
        host: '',
        password: '',
        lastConnectionTime: new Date().getTime(),
        lastConnectionIp: '',
        name: '测试链接',
        databases: 16,
        isOpen: false,
        isConnected: false,
        redisDatabases: []
    },
    {
        id: 2,
        createdTime: '',
        creator: 1,
        updatedTime: '',
        updater: 1,
        isDelete: 0,
        host: '',
        password: '',
        lastConnectionTime: new Date().getTime(),
        lastConnectionIp: '',
        name: '测试链接2',
        databases: 16,
        isOpen: false,
        isConnected: false,
        redisDatabases: []
    }
]

export const mockKeyList: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g'
]
