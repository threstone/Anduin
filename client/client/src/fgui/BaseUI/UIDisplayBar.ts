/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIDisplayBar extends fairygui.GComponent {
		public greenBg:fairygui.GGraph;
		public green:fairygui.GGraph;
		public fish:UIFish;
		public progressBar:fairygui.GProgressBar;
		public static URL:string = "ui://yaux2xpools25o";

		public static createInstance():UIDisplayBar {
			return <UIDisplayBar>(fairygui.UIPackage.createObject("BaseUI", "DisplayBar"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.greenBg = <fairygui.GGraph>(this.getChildAt(0));
			this.green = <fairygui.GGraph>(this.getChildAt(1));
			this.fish = <UIFish>(this.getChildAt(2));
			this.progressBar = <fairygui.GProgressBar>(this.getChildAt(3));
		}
	}
}