/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIMapTipsView extends fairygui.GComponent {
		public bg:fairygui.GGraph;
		public static URL:string = "ui://yaux2xposbft2t";

		public static createInstance():UIMapTipsView {
			return <UIMapTipsView>(fairygui.UIPackage.createObject("BaseUI", "MapTipsView"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GGraph>(this.getChildAt(0));
		}
	}
}