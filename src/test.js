S$.ns("controllers");
controllers.IndexController = S$.registerController((function(){
  function IndexController() {
  }

  IndexController.prototype.onCreate = function() {
    S$.eventManager.registerEvent("ready", {
      "callback": function () {

        var informationListView = S$.create(ui.InformationListView);
        this.infoListData = {
          "infos" : [
          ]
        }
        informationListView.bindData(this.infoListData);
        S$.viewManager.addView(informationListView, $("#infolist"));
        S$.eventManager.sendEvent("network", {
          type : "get",
          url : "http://admin.tutorpapa.com/rest/ottuitionapi/employee/test",
//                     data : body,
          contentType : "application/json",
          scope : this,
          success : function(jsonData) {
            console.log(jsonData);
            this.appendInfoList(jsonData.data['infos']);
          },
          failed : function(err) {
            console.log(err["description"]);
          }
        });

        var accountInformationView = S$.create(ui.AccountInformationView);
        this.accountInfo = {
          studentadd : 0,
          totalstudent : 0,
          orderadd : 0,
          priceadd : 0
        }
        accountInformationView.bindData(this.accountInfo);
        S$.viewManager.addView(accountInformationView, $("#accountinfo"));
        S$.eventManager.sendEvent("network", {
          type : "get",
          url : "/rest/ottuitionapi/account/week",
//                     data : body,
          contentType : "application/json",
          scope : this,
          success : function(jsonData) {
            console.log(jsonData);
            this.appendAccountInfo(jsonData.data);
          },
          failed : function(err) {
            console.log(err["description"]);
          }
        });
      }.bind(this)
    });
  }

  IndexController.prototype.appendInfoList = function(informList) {
    if(this.infoListData !== undefined) {
      for(var i = 0; i < informList.length; i++) {
        var type = informList[i].type
        var typecontent
        switch(type){
          case 1 :
            typecontent = "[新课程上架]"
            break;
          case 2 :
            typecontent = "[新订单]"
            break;
          case 3 :
            typecontent = "[上课时间更改]"
            break;
          case 4 :
            typecontent = "[退款]"
            break;
          case 5 :
            typecontent = "[换班]"
            break;
        }

        this.infoListData.infos.push({
          infoType: typecontent,
          content: informList[i].content,
          time : moment(informList[i].time).format('YYYY-MM-DD hh:mm:ss')
        });
      }
    }
  }
  IndexController.prototype.appendAccountInfo = function(data) {
    if(this.accountInfo !== undefined && data !== undefined) {
      this.accountInfo.studentadd = data.studentadd;
      this.accountInfo.totalstudent = data.totalstudent;
      this.accountInfo.orderadd = data.orderadd;
      this.accountInfo.priceadd = data.priceadd;
    }
  }
  IndexController.prototype.onDestroy = function() {

  }
  return IndexController;
})(), {"main" : true});


