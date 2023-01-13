/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIMiniChat extends fairygui.GComponent {
		public msgText:fairygui.GTextField;
		public numBg:fairygui.GImage;
		public unReadNum:fairygui.GTextField;
		public tipsGroup:fairygui.GGroup;
		public static URL:string = "ui://yaux2xpofjki1d";

		public static createInstance():UIMiniChat {
			return <UIMiniChat>(fairygui.UIPackage.createObject("BaseUI", "MiniChat"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.msgText = <fairygui.GTextField>(this.getChildAt(2));
			this.numBg = <fairygui.GImage>(this.getChildAt(3));
			this.unReadNum = <fairygui.GTextField>(this.getChildAt(4));
			this.tipsGroup = <fairygui.GGroup>(this.getChildAt(5));
		}
	}
}