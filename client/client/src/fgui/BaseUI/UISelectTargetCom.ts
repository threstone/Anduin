/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UISelectTargetCom extends fairygui.GComponent {
		public click:fairygui.GGraph;
		public bg0:fairygui.GGraph;
		public bg1:fairygui.GGraph;
		public bg2:fairygui.GGraph;
		public bg3:fairygui.GGraph;
		public static URL:string = "ui://yaux2xpoq6kd31";

		public static createInstance():UISelectTargetCom {
			return <UISelectTargetCom>(fairygui.UIPackage.createObject("BaseUI", "SelectTargetCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.click = <fairygui.GGraph>(this.getChildAt(0));
			this.bg0 = <fairygui.GGraph>(this.getChildAt(1));
			this.bg1 = <fairygui.GGraph>(this.getChildAt(2));
			this.bg2 = <fairygui.GGraph>(this.getChildAt(3));
			this.bg3 = <fairygui.GGraph>(this.getChildAt(4));
		}
	}
}