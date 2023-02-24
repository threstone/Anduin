/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIMoveTips extends fairygui.GComponent {
		public tips0:fairygui.GGraph;
		public tips1:fairygui.GGraph;
		public static URL:string = "ui://yaux2xposbft2r";

		public static createInstance():UIMoveTips {
			return <UIMoveTips>(fairygui.UIPackage.createObject("BaseUI", "MoveTips"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.tips0 = <fairygui.GGraph>(this.getChildAt(0));
			this.tips1 = <fairygui.GGraph>(this.getChildAt(1));
		}
	}
}