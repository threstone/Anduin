/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UITipsCom extends fairygui.GComponent {
		public desc:fairygui.GTextField;
		public btn:UIButton1;
		public close:fairygui.GLoader;
		public static URL:string = "ui://yaux2xpofimv29";

		public static createInstance():UITipsCom {
			return <UITipsCom>(fairygui.UIPackage.createObject("BaseUI", "TipsCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.desc = <fairygui.GTextField>(this.getChildAt(2));
			this.btn = <UIButton1>(this.getChildAt(3));
			this.close = <fairygui.GLoader>(this.getChildAt(4));
		}
	}
}