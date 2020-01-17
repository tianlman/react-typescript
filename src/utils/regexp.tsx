/*正整数*/
export const regexpNumber = /^[1-9]\d*$/;
/*匹配1位小数,或者整数*/
export const regexpNumber1 = /(^0\.{1}$)|(^0\.[0-9]{1}$)|(^[1-9]{1}[0-9]*\.$)|(^[1-9]{1}[0-9]*\.[0-9]{1}$)|(^[0-9]*$)/;
/*匹配2位小数,或者整数*/
export const regexpNumber2 = /(^0\.{1}$)|(^0\.[0-9]{0,2}$)|(^[1-9]{1}[0-9]*\.$)|(^[1-9]{1}[0-9]*\.[0-9]{0,2}$)|(^[0-9]*$)/;
/*匹配手机号码*/
export const regexpPhone = /^1[0-9]{10}$/;
/*匹配qq号码*/
export const regexpQQ=/^([1-9]{1}[0-9]{5,10})$/;
/*匹配面料编号*/
export const regexpFabricSn = /[0-9a-zA-Z-]{1,20}/;
/*字符串清空全部空格*/
export const funAllTrim = function (str: string) {
    return str.replace(/ /g, "");
};
/*字符串清空前后空格*/
export const funTrim = function (str: string) {
    return str.replace(/(^ *)|( *$)/g, "");
};
export const funStartTrim = function (str: string) {
    return str.replace(/^ /, "");
};
export const funEndTrim = function (str: string) {
    return str.replace(/ $/, "");
};
//正整数
export const funNumber = function (str: string) {
    return str.replace(/[^\d]+/, "");
};
//正整数一位小数
export const funNumber1 = function (value: string) {
    return `${value}`.replace(/^(\-)*(\d+)\.(\d).*$/g, '$1$2.$3');
};
