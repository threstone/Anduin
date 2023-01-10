/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIFriend extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public list:fairygui.GList;
		public title:fairygui.GTextField;
		public ctrl:UIButton2;
		public AddFriendCom:UIAddFriend;
		public showAddFriendBtn:UIButton1;
		public showFriendReqBtn:UIButton1;
		public showReqCom:UIFriendReq;
		public redTips1:fairygui.GImage;
		public redTips1_2:fairygui.GImage;
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
			this.AddFriendCom = <UIAddFriend>(this.getChildAt(4));
			this.showAddFriendBtn = <UIButton1>(this.getChildAt(5));
			this.showFriendReqBtn = <UIButton1>(this.getChildAt(6));
			this.showReqCom = <UIFriendReq>(this.getChildAt(7));
			this.redTips1 = <fairygui.GImage>(this.getChildAt(8));
			this.redTips1_2 = <fairygui.GImage>(this.getChildAt(9));
		}
	}
}