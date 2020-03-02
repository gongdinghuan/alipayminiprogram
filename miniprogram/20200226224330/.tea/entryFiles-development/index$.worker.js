if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/icon-nav/icon-nav?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/slider/slider?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/badge/badge?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/popup/popup?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=8a144fe927ebb387639efc91c17202cc9ec53cdb');
require('../../pages/goods-category/goods-category?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cart/cart?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/user/user?hash=621789e77bacd87e46576f3c515fb115a71beaa0');
require('../../pages/web-view/web-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/paytips/paytips?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/goods-search/goods-search?hash=5460cdb105e2c0c1e9ff31999709fa8bdd399f1c');
require('../../pages/goods-detail/goods-detail?hash=d4efcf283f12a1be4873f47a72f5a1a774a48726');
require('../../pages/goods-comment/goods-comment?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/goods-attribute/goods-attribute?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/buy/buy?hash=5460cdb105e2c0c1e9ff31999709fa8bdd399f1c');
require('../../pages/user-address/user-address?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/user-address-save/user-address-save?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/user-order/user-order?hash=5460cdb105e2c0c1e9ff31999709fa8bdd399f1c');
require('../../pages/user-order-detail/user-order-detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/user-order-comments/user-order-comments?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/user-faovr/user-faovr?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/user-answer-list/user-answer-list?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/answer-list/answer-list?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/answer-form/answer-form?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/message/message?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/user-integral/user-integral?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/user-goods-browse/user-goods-browse?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/user-orderaftersale/user-orderaftersale?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/user-orderaftersale-detail/user-orderaftersale-detail?hash=5460cdb105e2c0c1e9ff31999709fa8bdd399f1c');
require('../../pages/extraction-address/extraction-address?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/common/open-setting-location/open-setting-location?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/coupon/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/coupon/user/user?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/membershiplevelvip/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/membershiplevelvip/buy/buy?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/membershiplevelvip/user/user?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/membershiplevelvip/order/order?hash=5460cdb105e2c0c1e9ff31999709fa8bdd399f1c');
require('../../pages/plugins/membershiplevelvip/order-detail/order-detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/membershiplevelvip/profit-detail/profit-detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/membershiplevelvip/profit/profit?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/membershiplevelvip/statistics/statistics?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/membershiplevelvip/poster/poster?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/membershiplevelvip/team/team?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/distribution/user/user?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/distribution/order/order?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/distribution/order-detail/order-detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/distribution/profit/profit?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/distribution/profit-detail/profit-detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/distribution/statistics/statistics?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/distribution/poster/poster?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/distribution/team/team?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/distribution/extraction/extraction?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/distribution/extraction-apply/extraction-apply?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/distribution/extraction-order/extraction-order?hash=5460cdb105e2c0c1e9ff31999709fa8bdd399f1c');
require('../../pages/plugins/distribution/introduce/introduce?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/wallet/user/user?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/wallet/recharge/recharge?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/wallet/cash-auth/cash-auth?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/wallet/cash-create/cash-create?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/wallet/wallet-log/wallet-log?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/wallet/wallet-log-detail/wallet-log-detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/wallet/user-recharge/user-recharge?hash=5460cdb105e2c0c1e9ff31999709fa8bdd399f1c');
require('../../pages/plugins/wallet/user-recharge-detail/user-recharge-detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/wallet/user-cash/user-cash?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/plugins/wallet/user-cash-detail/user-cash-detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}