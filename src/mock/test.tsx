import Mock from 'mockjs'

//延时响应
Mock.setup({timeout: 1000});
//根据主键获取仓库入库订单详情
Mock.mock(/\/assassin-storage\/web\/storage-in-order\/[0-9]/, "get", function (option: any) {
    return {
        "code": "",
        "data": {
            "accdeptanceDate": "",
            "acceptanceUserId": 0,
            "acceptanceUserName": "",
            "according": "",
            "bolt": 0,
            "cancelDate": "",
            "cancelUserId": 0,
            "cancelUserName": "",
            "completeDate": "",
            "completeUserId": 0,
            "completeUserName": "",
            "createDate": "",
            "createUserId": 0,
            "createUserName": "",
            "desc": "",
            "externalOrderSn": "",
            "inOrderId": 0,
            "inOrderSn": "",
            "isCancel": true,
            "itemList": [
                {
                    "categoryId": 0,
                    "categoryName": "",
                    "colorId": 0,
                    "colorName": "",
                    "colorNumber": 0,
                    "dyelotNum": "",
                    "externalSn": "",
                    "fabricsId": 0,
                    "fabricsName": "",
                    "grammage": "",
                    "inOrderId": 0,
                    "inOrderItemId": 0,
                    "inOrderSn": "",
                    "isOnShelves": true,
                    "isStorage": true,
                    "profitAndLossNum": 0,
                    "qcState": "",
                    "quantity": 0,
                    "spuId": "",
                    "stockId": 0,
                    "storingDate": "",
                    "unit": "",
                    "width": ""
                }
            ],
            "memo": "",
            "noticeBolt": 0,
            "noticeKnitNum": 0,
            "noticeTattingNum": 0,
            "orderState": "",
            "orderType": "",
            "putawayBolt": 0,
            "qcBolt": 0,
            "receivedKnitNum": 0,
            "receivedTattingNum": 0,
            "receivingId": 0,
            "receivingName": "",
            "version": 0
        },
        "msg": "",
        "success": true
    }
});
//分页查询仓库入库订单列表
Mock.mock(/\/list-Mock/, "get", function () {
    return {
        "code": "",
        "data": {
            "current": 0,
            "pages": 0,
            "result": [
                {
                    "according": "",
                    "bolt": 0,
                    "cancelDate": "",
                    "createDate": "",
                    "createUserId": 0,
                    "externalOrderSn": "",
                    "inOrderId": 0,
                    "inOrderSn": "",
                    "isCancel": true,
                    "knitProfitAndLossNum": 0,
                    "memo": "",
                    "noticeKnitNum": 0,
                    "noticeTattingNum": 0,
                    "orderState": "ACCEPTANCE_COMPLETE",
                    "orderType": "PRODUCTION",
                    "receivedKnitNum": 0,
                    "receivedTattingNum": 0,
                    "receivingId": 0,
                    "receivingName": "",
                    "supplyId": 0,
                    "supplyName": "",
                    "tattingProfitAndLossNum": 0
                }
            ],
            "size": 0,
            "total": 0
        },
        "msg": "",
        "success": true
    };
});