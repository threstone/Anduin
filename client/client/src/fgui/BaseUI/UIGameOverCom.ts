/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIGameOverCom extends fairygui.GComponent {
		public bg:fairygui.GGraph;
		public res:fairygui.GTextField;
		public click:UIButton3;
		public static URL:string = "ui://yaux2xpoh89h46";

		public static createInstance():UIGameOverCom {
			return <UIGameOverCom>(fairygui.UIPackage.createObject("BaseUI", "GameOverCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GGraph>(this.getChildAt(0));
			this.res = <fairygui.GTextField>(this.getChildAt(1));
			this.click = <UIButton3>(this.getChildAt(2));
		}
	}
}