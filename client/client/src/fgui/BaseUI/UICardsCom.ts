/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UICardsCom extends fairygui.GComponent {
		public listBg:fairygui.GImage;
		public cardGroupList:fairygui.GList;
		public nameBg:fairygui.GImage;
		public groupName:fairygui.GTextInput;
		public createGroupList:fairygui.GList;
		public cardGroupGroup:fairygui.GGroup;
		public functionBtn:UIButton3;
		public functionTips:fairygui.GTextField;
		public functionGroup:fairygui.GGroup;
		public rightGroup:fairygui.GGroup;
		public static URL:string = "ui://yaux2xpoz43k1k";

		public static createInstance():UICardsCom {
			return <UICardsCom>(fairygui.UIPackage.createObject("BaseUI", "CardsCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.listBg = <fairygui.GImage>(this.getChildAt(0));
			this.cardGroupList = <fairygui.GList>(this.getChildAt(1));
			this.nameBg = <fairygui.GImage>(this.getChildAt(2));
			this.groupName = <fairygui.GTextInput>(this.getChildAt(3));
			this.createGroupList = <fairygui.GList>(this.getChildAt(4));
			this.cardGroupGroup = <fairygui.GGroup>(this.getChildAt(5));
			this.functionBtn = <UIButton3>(this.getChildAt(6));
			this.functionTips = <fairygui.GTextField>(this.getChildAt(7));
			this.functionGroup = <fairygui.GGroup>(this.getChildAt(8));
			this.rightGroup = <fairygui.GGroup>(this.getChildAt(9));
		}
	}
}