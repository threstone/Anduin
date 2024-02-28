/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIHallCom extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public nickText:fairygui.GTextField;
		public friendCom:UIFriendCom;
		public uidText:fairygui.GTextField;
		public settingBtn:UIButton1;
		public deckBtn:UIButton1;
		public fightBtn:UIButton1;
		public pveBtn:UIButton1;
		public miniChat:UIMiniChat;
		public helpBtn:UIButton1;
		public static URL:string = "ui://yaux2xporu1k8";

		public static createInstance():UIHallCom {
			return <UIHallCom>(fairygui.UIPackage.createObject("BaseUI", "HallCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.nickText = <fairygui.GTextField>(this.getChildAt(2));
			this.friendCom = <UIFriendCom>(this.getChildAt(3));
			this.uidText = <fairygui.GTextField>(this.getChildAt(4));
			this.settingBtn = <UIButton1>(this.getChildAt(5));
			this.deckBtn = <UIButton1>(this.getChildAt(6));
			this.fightBtn = <UIButton1>(this.getChildAt(7));
			this.pveBtn = <UIButton1>(this.getChildAt(8));
			this.miniChat = <UIMiniChat>(this.getChildAt(9));
			this.helpBtn = <UIButton1>(this.getChildAt(10));
		}
	}
}