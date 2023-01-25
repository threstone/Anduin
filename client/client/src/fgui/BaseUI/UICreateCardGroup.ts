/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UICreateCardGroup extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public desc:fairygui.GTextField;
		public powerList:fairygui.GList;
		public selectBtn:UIButton1;
		public close:fairygui.GLoader;
		public static URL:string = "ui://yaux2xpooo9525";

		public static createInstance():UICreateCardGroup {
			return <UICreateCardGroup>(fairygui.UIPackage.createObject("BaseUI", "CreateCardGroup"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.desc = <fairygui.GTextField>(this.getChildAt(1));
			this.powerList = <fairygui.GList>(this.getChildAt(2));
			this.selectBtn = <UIButton1>(this.getChildAt(3));
			this.close = <fairygui.GLoader>(this.getChildAt(4));
		}
	}
}