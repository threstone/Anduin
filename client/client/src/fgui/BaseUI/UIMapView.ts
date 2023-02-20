/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIMapView extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public static URL:string = "ui://yaux2xpohzsg2j";

		public static createInstance():UIMapView {
			return <UIMapView>(fairygui.UIPackage.createObject("BaseUI", "MapView"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
		}
	}
}