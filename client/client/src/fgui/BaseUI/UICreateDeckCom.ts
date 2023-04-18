/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UICreateDeckCom extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public desc:fairygui.GTextField;
		public powerList:fairygui.GList;
		public selectBtn:UIButton1;
		public close:fairygui.GLoader;
		public nameBg:fairygui.GImage;
		public deckName:fairygui.GTextInput;
		public deckNameGroup:fairygui.GGroup;
		public static URL:string = "ui://yaux2xpooo9525";

		public static createInstance():UICreateDeckCom {
			return <UICreateDeckCom>(fairygui.UIPackage.createObject("BaseUI", "CreateDeckCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.desc = <fairygui.GTextField>(this.getChildAt(1));
			this.powerList = <fairygui.GList>(this.getChildAt(2));
			this.selectBtn = <UIButton1>(this.getChildAt(3));
			this.close = <fairygui.GLoader>(this.getChildAt(4));
			this.nameBg = <fairygui.GImage>(this.getChildAt(5));
			this.deckName = <fairygui.GTextInput>(this.getChildAt(6));
			this.deckNameGroup = <fairygui.GGroup>(this.getChildAt(7));
		}
	}
}