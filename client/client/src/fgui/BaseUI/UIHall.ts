/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIHall extends fairygui.GComponent {
		public bg:fairygui.GGraph;
		public nickText:fairygui.GTextField;
		public friendCom:UIFriend;
		public uidText:fairygui.GTextField;
		public static URL:string = "ui://yaux2xporu1k8";

		public static createInstance():UIHall {
			return <UIHall>(fairygui.UIPackage.createObject("BaseUI", "Hall"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GGraph>(this.getChildAt(0));
			this.nickText = <fairygui.GTextField>(this.getChildAt(2));
			this.friendCom = <UIFriend>(this.getChildAt(3));
			this.uidText = <fairygui.GTextField>(this.getChildAt(4));
		}
	}
}