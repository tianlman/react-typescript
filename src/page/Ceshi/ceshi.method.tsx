import {ApiDataOne1, testApi} from "./ceshi.serve";
import $http from "../../https/https";

export function ApiDataOne1Fn(){
    const params = ApiDataOne1({})
    let result = $http(params);
    console.log(result, '[[[[[[[[[[[');
    return result
}
