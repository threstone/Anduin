/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIEventItem extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public display:fairygui.GImage;
		public secret:fairygui.GImage;
		public eventName:fairygui.GTextField;
		public times:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpoh89h36";

		public static createInstance():UIEventItem {
			return <UIEventItem>(fairygui.UIPackage.createObject("BaseUI", "EventItem"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.display = <fairygui.GImage>(this.getChildAt(1));
			this.secret = <fairygui.GImage>(this.getChildAt(2));
			this.eventName = <fairygui.GTextField>(this.getChildAt(3));
			this.times = <fairygui.GTextField>(this.getChildAt(5));
		}
	}
}