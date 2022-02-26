import service from '@/utils/requests.ts'

export default class BaseRestApi<T> {
    constructor(private uri: string) {
    }

    public getById(id: number): Promise<any> {
        return service({
            url: `/${this.uri}/${id}`,
            method: 'get'
        })
    }

    public getList(params: any): Promise<any> {
        return service({
            url: `/${this.uri}`,
            method: 'get',
            params
        })
    }

    public create(data: T): Promise<any> {
        return service({
            url: `/${this.uri}`,
            method: 'post',
            data
        })
    }

    public update(data: T): Promise<any> {
        return service({
            url: `/${this.uri}`,
            method: 'put',
            data
        })
    }

    public delete(id: number): Promise<any> {
        return service({
            url: `/${this.uri}/${id}`,
            method: 'delete'
        })
    }

    public batchDelete(ids: Array<number>): Promise<any> {
        return service({
            url: `/${this.uri}/deletes`,
            method: 'delete',
            params: {
                ids
            }
        })
    }
}
