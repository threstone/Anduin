/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIFriend extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public list:fairygui.GList;
		public title:fairygui.GTextField;
		public ctrl:UIButton2;
		public redTips1:fairygui.GImage;
		public showAddFriendBtn:UIButton1;
		public showFriendReqBtn:UIButton1;
		public redTips2:fairygui.GImage;
		public showReqCom:UIFriendReq;
		public AddFriendCom:UIAddFriend;
		public friendOpCom:UIFriendOpCom;
		public static URL:string = "ui://yaux2xpota2rb";

		public static createInstance():UIFriend {
			return <UIFriend>(fairygui.UIPackage.createObject("BaseUI", "Friend"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.list = <fairygui.GList>(this.getChildAt(1));
			this.title = <fairygui.GTextField>(this.getChildAt(2));
			this.ctrl = <UIButton2>(this.getChildAt(3));
			this.redTips1 = <fairygui.GImage>(this.getChildAt(4));
			this.showAddFriendBtn = <UIButton1>(this.getChildAt(5));
			this.showFriendReqBtn = <UIButton1>(this.getChildAt(6));
			this.redTips2 = <fairygui.GImage>(this.getChildAt(7));
			this.showReqCom = <UIFriendReq>(this.getChildAt(8));
			this.AddFriendCom = <UIAddFriend>(this.getChildAt(9));
			this.friendOpCom = <UIFriendOpCom>(this.getChildAt(10));
		}
	}
}