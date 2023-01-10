/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIFriendReqItem extends fairygui.GComponent {
		public nickText:fairygui.GTextField;
		public refuse:fairygui.GLoader;
		public approve:fairygui.GLoader;
		public static URL:string = "ui://yaux2xpota2rm";

		public static createInstance():UIFriendReqItem {
			return <UIFriendReqItem>(fairygui.UIPackage.createObject("BaseUI", "FriendReqItem"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.nickText = <fairygui.GTextField>(this.getChildAt(1));
			this.refuse = <fairygui.GLoader>(this.getChildAt(2));
			this.approve = <fairygui.GLoader>(this.getChildAt(3));
		}
	}
}