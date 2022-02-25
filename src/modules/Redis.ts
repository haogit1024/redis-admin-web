import RedisDatabase from "@/modules/RedisDatabase";

export default interface Redis {
    id: number;
    createdTime: string;
    creator: number;
    updatedTime: string;
    updater: number;
    isDelete: number;
    host: string;
    password: string;
    lastConnectionTime: number;
    lastConnectionIp: string;
    name: string;
    databases: number;
    isOpen: boolean;
    isConnected: boolean;
    redisDatabases: RedisDatabase[]
}
