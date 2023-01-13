/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIHall extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public nickText:fairygui.GTextField;
		public friendCom:UIFriend;
		public uidText:fairygui.GTextField;
		public settingBtn:UIButton1;
		public cardGroupBtn:UIButton1;
		public fightBtn:UIButton1;
		public pveBtn:UIButton1;
		public miniChat:UIMiniChat;
		public static URL:string = "ui://yaux2xporu1k8";

		public static createInstance():UIHall {
			return <UIHall>(fairygui.UIPackage.createObject("BaseUI", "Hall"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.nickText = <fairygui.GTextField>(this.getChildAt(2));
			this.friendCom = <UIFriend>(this.getChildAt(3));
			this.uidText = <fairygui.GTextField>(this.getChildAt(4));
			this.settingBtn = <UIButton1>(this.getChildAt(5));
			this.cardGroupBtn = <UIButton1>(this.getChildAt(6));
			this.fightBtn = <UIButton1>(this.getChildAt(7));
			this.pveBtn = <UIButton1>(this.getChildAt(8));
			this.miniChat = <UIMiniChat>(this.getChildAt(9));
		}
	}
}