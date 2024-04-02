/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIFishCom extends fairygui.GComponent {
		public bg:fairygui.GGraph;
		public displayBar:UIDisplayBar;
		public startBtn:UIButton3;
		public static URL:string = "ui://yaux2xpowpcm5n";

		public static createInstance():UIFishCom {
			return <UIFishCom>(fairygui.UIPackage.createObject("BaseUI", "FishCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GGraph>(this.getChildAt(0));
			this.displayBar = <UIDisplayBar>(this.getChildAt(1));
			this.startBtn = <UIButton3>(this.getChildAt(2));
		}
	}
}