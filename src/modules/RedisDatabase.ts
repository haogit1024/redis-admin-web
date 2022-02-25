export default interface RedisDatabase {
    index: number;
    isOpen: boolean;
    keys: string[];
    isInit: boolean;
}
