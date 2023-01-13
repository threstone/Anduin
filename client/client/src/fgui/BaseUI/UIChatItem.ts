/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIChatItem extends fairygui.GComponent {
		public nickText:fairygui.GTextField;
		public bg:fairygui.GImage;
		public msg:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpofjki17";

		public static createInstance():UIChatItem {
			return <UIChatItem>(fairygui.UIPackage.createObject("BaseUI", "ChatItem"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.nickText = <fairygui.GTextField>(this.getChildAt(0));
			this.bg = <fairygui.GImage>(this.getChildAt(1));
			this.msg = <fairygui.GTextField>(this.getChildAt(2));
		}
	}
}