/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIFriendReq extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public list:fairygui.GList;
		public title:fairygui.GTextField;
		public closeBtn:UIButton1;
		public static URL:string = "ui://yaux2xpota2rl";

		public static createInstance():UIFriendReq {
			return <UIFriendReq>(fairygui.UIPackage.createObject("BaseUI", "FriendReq"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.list = <fairygui.GList>(this.getChildAt(1));
			this.title = <fairygui.GTextField>(this.getChildAt(2));
			this.closeBtn = <UIButton1>(this.getChildAt(3));
		}
	}
}