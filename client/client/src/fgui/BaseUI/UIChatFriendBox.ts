/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIChatFriendBox extends fairygui.GComponent {
		public bg:fairygui.GGraph;
		public nickText:fairygui.GTextField;
		public onlineImg:fairygui.GImage;
		public statusText:fairygui.GTextField;
		public numBg:fairygui.GImage;
		public newMsgText:fairygui.GTextField;
		public numGroup:fairygui.GGroup;
		public static URL:string = "ui://yaux2xpofjki13";

		public static createInstance():UIChatFriendBox {
			return <UIChatFriendBox>(fairygui.UIPackage.createObject("BaseUI", "ChatFriendBox"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GGraph>(this.getChildAt(0));
			this.nickText = <fairygui.GTextField>(this.getChildAt(1));
			this.onlineImg = <fairygui.GImage>(this.getChildAt(3));
			this.statusText = <fairygui.GTextField>(this.getChildAt(4));
			this.numBg = <fairygui.GImage>(this.getChildAt(5));
			this.newMsgText = <fairygui.GTextField>(this.getChildAt(6));
			this.numGroup = <fairygui.GGroup>(this.getChildAt(7));
		}
	}
}