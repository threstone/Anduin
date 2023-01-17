/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIFriendOpCom extends fairygui.GComponent {
		public close:fairygui.GGraph;
		public bg:fairygui.GImage;
		public opList:fairygui.GList;
		public static URL:string = "ui://yaux2xpomvhp1j";

		public static createInstance():UIFriendOpCom {
			return <UIFriendOpCom>(fairygui.UIPackage.createObject("BaseUI", "FriendOpCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.close = <fairygui.GGraph>(this.getChildAt(0));
			this.bg = <fairygui.GImage>(this.getChildAt(1));
			this.opList = <fairygui.GList>(this.getChildAt(2));
		}
	}
}