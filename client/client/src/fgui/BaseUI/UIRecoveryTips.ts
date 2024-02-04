/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIRecoveryTips extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public countText:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpodja35i";

		public static createInstance():UIRecoveryTips {
			return <UIRecoveryTips>(fairygui.UIPackage.createObject("BaseUI", "RecoveryTips"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.countText = <fairygui.GTextField>(this.getChildAt(1));
		}
	}
}