/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIActionRecordCom extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public list:fairygui.GList;
		public static URL:string = "ui://yaux2xponcgh4e";

		public static createInstance():UIActionRecordCom {
			return <UIActionRecordCom>(fairygui.UIPackage.createObject("BaseUI", "ActionRecordCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.list = <fairygui.GList>(this.getChildAt(1));
		}
	}
}