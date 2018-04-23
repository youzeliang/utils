# PaymentWeb Api Documentation


### Enterprise Object
```
{
        "id" : "fsd1432",
        "account" : "fd",                     //企业账户
        "methods" : [  {                
        
            "type" : "treepay",               //treepay
            "method" : "PACA",　　             //信用卡支付
            "siteCd" : "A00001",               //treepay提供
            "secureKey" : "3-Q_",　　　　　　　　// 安全密钥
            "accountNo" : "fdfd" ,             //对应不同方式下的企业账号
            "enabled" : 1 ,                    //是否启用,0起用,1停用
            "payOrder" : 1 ,                   //排序号
            "createTime" : 432423 ,           
            "updateTime" : 323213
            },
        {    
            "type":"alipay",                   //支付宝  
            "sign":"fdfs" ,                    // 商户请求参数的签名串
            "appId":"2016091500519689",        //APPID，收款账号既是您的APPID对应支付宝账号,也提供账号
            "merchantPrivateKey":"vAI",        //  商户私钥，PKCS8格式RSA2私钥
            "accountNo":"fdfd",                //账号
            "alipay_public_key":"fd",          //　公钥
            "enabled":1,                       //是否启用,0起用,1停用
            "payOrder":2,                      //排序号
            "createTime": 432423  //创建时间
            "updateTime" : 323213
        },
            {  
                //其他支付方式
             }
      ]
      "enterpriseName":"fd",   //机构名称
      "createTime" : 1321321,
      "updateTime" : 234234,
}
```

### Order Object

```
{
        "orderNo" : "54543", //订单号
        "productName" : "fd"　 //商品名
        "price" : 4343.3,    //商品价格
        "quantity" : 2,      //数量
        "tradeNo" : "54",    //交易流水号, 发送到第三方支付
        "enterpriseAccount" : "fds",  //收款方账号
        "buyerId" : "fsd",    //用户id, 业务系统的ID，　支付系统只存储，　不关心
        "createTime" : "432"  //创建时间
        "payMethod" : {
            "method" : "treepay"　//支付平台
            "type" : "PANA"     //信用卡付款
        }
         "ip" : "192.0.1.1"
         "userAgent" : "windows"  
}

```


2. 交易流水表


3.　交易结果表
{
    
    "price" : 4343,   //商品价格
    "tradeNo" : "54",   //交易流水号
    "responseMsg" : "success", 　//响应消息
    "responseCode" : 1,  　　　//响应代码 也就是ｔｒｅｅｐａｙ的"0000" == 1, 1是成功，　250是余额不够，　500是未知错误
    "payAccount" : ""
    "payTransactionId" : "" //第三方支付流水号
    "method" : "treepay"
    
    "result":
    { 
        "res_cd" : "0000",
        "res_msg" : "",
        "type":"PACA",
        "TNO":"43423",         // 交易号码
        "order_no"："3232",     //支付流水号
        "trade_mony"："3232",   //交易金额
        "trade_ymd"："3232",    //交易批准的日期
        "trade_hms":"432",      //交易批准的时间
        "card_no"："3232",     //卡号
        "auth_no"："3232",     //发卡机构生成的号码，
        "auth_ymd"："3232",     //卡交易批准的日期
        "auth_hms"："3232"     //卡交易批准的时间
    
        "card_brand":"fds",         // 卡品牌名称
        "issue_bank":"fdfd",       //发行银行名称
        "installment_rate":"3%",   //利率
        "installment_period":3,   //分期付款期限
        "installment_mony":"54",  //每月金额
        "total_mony":"43"        //total_mony
    
     }
    //
     {
      　"method": "alipay"
        "trade_no":"20311"     //支付宝交易号
     }
}          










































