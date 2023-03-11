/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIRightCtrlCom extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public endRound:UIButton1;
		public tips:fairygui.GTextField;
		public diceList:fairygui.GList;
		public static URL:string = "ui://yaux2xpouym42i";

		public static createInstance():UIRightCtrlCom {
			return <UIRightCtrlCom>(fairygui.UIPackage.createObject("BaseUI", "RightCtrlCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.endRound = <UIButton1>(this.getChildAt(1));
			this.tips = <fairygui.GTextField>(this.getChildAt(2));
			this.diceList = <fairygui.GList>(this.getChildAt(3));
		}
	}
}