# PaymentWeb Api Documentation

### Enterprise Object 企业信息
```
{
        "id" 　　　: "fsd1432",
        "account" : "fd",                          //企业账户
        "methods" : [  {                
        
            "type"      : "treepay",               //treepay
            "treepay"   :[{method:"PACA"},{method:"PACB"},{method:"PACC"}]  //几种不同的支付方式
            "siteCd"    : "A00001",               //treepay提供
            "secureKey" : "3-Q_",　　　　　　　　    // 安全密钥
            "accountNo" : "fdfd" ,               //对应不同方式下的企业账号
            "enabled"   : 1 ,                    //是否启用,0起用,1停用
            "payOrder"  : 1 ,                     //排序号
            "createTime": 432423 ,           
            "updateTime": 323213
            },
        {    
            "type"      :"alipay",                   //支付宝,目前不接入  
            "sign"      :"fdfs" ,                    // 商户请求参数的签名串
            "appId"     :"2016091500519689",        //APPID，收款账号既是您的APPID对应支付宝账号,也提供账号
            "mPrivaKey" :"vAI",                   //  商户私钥，PKCS8格式RSA2私钥
            "accountNo" :"fdfd",                    //账号
            "aPublicKey":"fd",                     //　公钥
            "enabled"   :1,                        //是否启用,0起用,1停用
            "payOrder"  :2,                        //排序号
            "createTime": 432423  　　　　　　　　   //创建时间
            "updateTime": 323213
        },
            {  
                //其他支付方式
             }
      ]
      "enterpriseName" :"fd",   //机构名称
      "createTime"     : 1321321,
      "updateTime"     : 234234,
}
```

### Order Object 交易流水

```
{
             "orderNo"          : "54543",                   //订单号
             "productName"      : "fd"　                      //商品名
             "price"            : 4343.3,                      //商品价格
             "quantity"         : 2,                        //数量
             "tradeNo"          : "54",                      //交易流水号, 发送到第三方支付
             "enterpriseAccount": "fds",                   //收款方账号
             "buyerId"          : "fsd",                     //用户id, 业务系统的ID,支付系统只存储,不关心
             "enterpriseId"     :"fs"                       //企业id
             "createTime"       : "432"                    //创建时间
             "payMethod"        : {
             "method"           : "treepay"　              //支付平台
             "type"             : "PANA"                    //信用卡付款
        }
             "ip" : "192.0.1.1"
             "userAgent" : "windows"  
}

```

### Result Object 交易结果

```
{
    
            "price"          : 4343,                               //商品价格
            "tradeNo"         : "54",                             //交易流水号
            "responseMsg"     : "success", 　                 //响应消息
            "responseCode"    : 1,  　　　                    //响应代码 也就是treepay的"0000" == 1, 1是成功, 101是余额不够, 500是未知错误
            "payAccount"      : ""                            // 金额
            "payTransactionId": "321"                         //第三方支付流水号
            "method"          : "treepay"
        
            "result":
           { 
                     "resCd"    : "0000",                        // treepay返回代码
                     "resMsg"   : "suc",                        //　返回信息　　　　　
                     "type"     : "PACA",　　　　　　　　　　　　　　// 方式　　
                     "TNO"      :  "43423",                     // 交易号码
                     "orderNo"  :"3232",                       //支付流水号
                     "tradeMony":"3232",                       //交易金额
                     "tradeYmd" : "3232",                      //交易批准的日期
                     "tradeHms" : "432",                       //交易批准的时间
                     "cardNo"   :"3232",                        //卡号
                     "authNo"   :"3232",                        //发卡机构生成的号码
                     "authYmd"　："3232",                       //卡交易批准的日期
                     "authHms"  :"3232"                        //卡交易批准的时间
                     
                     "cardBrand":"fds",                      // 卡品牌名称
                     "issueBank":"fdfd",                     //发行银行名称
                     "installmentRate":12.02,                //利率
                     "installmentPeriod":3,                  //分期付款期限
                     "installmentMony":"54",                 //每月金额
                     "totalMony":"43"                        //total_mony
    
     }
         {
          　         "method"    : "alipay"
                    "tradeNo"  　:"20311"     //支付宝交易号
        }
}  

```

### 根据企业id获取企业支付方式

|协议|HTTP|
|:----:|:----:|
|Method|GET|
|URL|/rest/htmls/pay/paymethod.html


Request
~~~

              "enterpriseId"      : "fds"

~~~


Response

~~~
   
           {                
            "type"      : "treepay",             //treepay
            "method"   :{"PACA","PACB","PACC"}  //几种不同的支付方式
            "payOrder"  : 1 ,                   //排序号
            },
            
           {    
            "type"      :"alipay",               //支付宝,目前不接入  
            "payOrder"  :2,                      //排序号
           }
    
~~~

EnterpriseService

Enterprise getPayMethod(String enterprise)

### 根据选择的方式加密

|协议|HTTP|
|:----:|:----:|
|Method|POST|
|URL|/rest/htmls/payment/orderinfo.html

Request
~~~
                   "payType"     :"PACA",
                   "orderNo"     :"321321",
                   "tradeMony"   :11.11,
                   "userId"      :"test",
                   "productName" : "fsd",
                   "orderFirstName" : "321",
                   "quantity"    : 2,              //数量

                   "billEndYmd"   :"20180809"　　　//仅限定期付款
                   "billFrequency":"w"           //仅限定制付款
                   
                   "ip" 　　　　　　: "192.0.1.1"
                   "userAgent" 　 : "windows"  
~~~

Response 

~~~
                "code":1,
                "data"
                {
                "siteCd"         : "fsd",
                "billEndYmd"     : "20170705",
                "billFrequency"  : "W",
                "retUrl"         : "www.abd.c",
                "tradeNo"        : "54",                      //交易流水号, 发送到第三方支付
                "orderNo"        : "423",
                "goodName"       : "fsd",
                "tradeMony"      : 321,
                "userId"         : "321",
                "orderFirstName" : "321",
                "orderEmail"     : "1@.com",    //内部设定一个特定的邮箱,treepay需要
                "payYype"        : "PACA",
                "currency"       : "764",
                "hashData"       : "fsd"
                }
~~~

### OrderService
//根据机构id查询企业信息获取siteCd, siteKey
Enterprise getPayMethod(String enterprise)
// 判断订单是否重复，否则不入库,防止重复提交
Boolean getOrderExist(String order)
// 添加订单
Order addOrder(Order order)
//根据订单查询订单是否在指定的付款时间内


### 保存返回信息的接口

|协议|HTTP|
|:----:|:----:|
|Method|POST|
|URL|/rest/htmls/payResult.html

Response 

~~~
   
           orderNo  : "321",
           resCd    : "res_cd",
           resMsg   : "res_msg",
           TNO      : "TNO",
           tradeMony: "trade_mony",
           tradeYmd : "trade_ymd",
           tradeHms : "trade_hms",
           cardNo   : "card_no",
           authNo   : "auth_no",
           authYmd  : "auth_ymd",
           authHms  : "auth_hms"
    
~~~

### OrderServer 保存数据
PayResult saveResult(PayResult payResult)

### 查询订单
#### HTTP接口
 协议|HTTP
  :-|:-
 方式|GET
 URL|/rest/payment/order?ono={orderNo}
 
### Request
~~~
{   
    "orderNo":"2121"
}
~~~

#### Response
~~~
success:
{
        "code": 1,
        "data":
        {
            "orderNo"    :"201804231524471179375",
            "tradeMony"  :"99.99",
            "resMsg"     :"สำเร็จ",
            "escrowYn"   :"N",
            "tradeStat"  :"STSR",
            "resCd"      :"0000",
            "authNo"     :"831000",
            "tradeYmd"   :"20180423",
            "tno"        :"180423151044978831",
            "authHms"    :"151000",
            "tradeHms"   :"151000",
            "cardBrand"  :"CVSF",
            "authYmd"    :"20180423"
        }
}
Fail
{
         "orderNo"      :"201804231524471179371",
         "resMsg"       :"trade not exist",
         "resCd"        :"P403"
}
~~~
### OrderServer

根据机构id查询企业信息获取siteCd, siteKey

EnterpriseList getEnterprise(String enterpriseId)

根据订单号获取支付类型
String getEnterprise(String orderNo)


### 添加企业
#### HTTP接口
 协议|HTTP
  :-|:-
 方式|POST
 URL|/rest/payment/enterprise
 
### Request
~~~
{   
          "id" 　　　: "fsd1432",                      　
           "account" : "fd",                          //企业账户
           "methods" :   {                
           
               "type"      : "treepay",               //treepay
               "treepay"   :"PACA","PACB","PACC"     //几种不同的支付方式
               "siteCd"    : "A00001",               //treepay提供
               "secureKey" : "3-Q_",　　　　　　　　    // 安全密钥
               "accountNo" : "fdfd" ,               //对应不同方式下的企业账号
               "enabled"   : 1 ,                    //是否启用,0起用,1停用
               "payOrder"  : 1 ,                     //排序号
               "createTime": 432423 ,           
               "updateTime": 323213
               },
         
         "enterpriseName" :"fd",   //机构名称
         "createTime"     : 1321321,
         "updateTime"     : 234234,
}
~~~

#### Response
~~~
success:
{
        "code": 1,
}
fail:{
        "msg"   : "add fail"
}
~~~
### EnterpriseServer



Enterprise addenterprise(Enterprise enterprise)



hashData 加密跳转到空白页,紧接着跳treepay

交易成功,跳转到payweb系统的空白页,然后拿数据，紧接着跳不同平台

