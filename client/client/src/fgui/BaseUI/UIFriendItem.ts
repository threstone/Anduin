/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIFriendItem extends fairygui.GComponent {
		public onlineImg:fairygui.GImage;
		public nickText:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpota2rc";

		public static createInstance():UIFriendItem {
			return <UIFriendItem>(fairygui.UIPackage.createObject("BaseUI", "FriendItem"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.onlineImg = <fairygui.GImage>(this.getChildAt(2));
			this.nickText = <fairygui.GTextField>(this.getChildAt(3));
		}
	}
}