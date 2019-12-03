// assassin-storage/web/storage-in-order/list-page
import {IParam} from "../../https/https";

export const testApi = function (param: any): IParam {
    return {
        url: '/mode2/DataOne',
        method: "GET",
        param: param,
    }
}