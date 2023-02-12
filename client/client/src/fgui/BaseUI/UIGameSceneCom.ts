/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIGameSceneCom extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public target:fairygui.GGraph;
		public you:fairygui.GGraph;
		public panding:fairygui.GGraph;
		public record:fairygui.GGraph;
		public static URL:string = "ui://yaux2xpojig14";

		public static createInstance():UIGameSceneCom {
			return <UIGameSceneCom>(fairygui.UIPackage.createObject("BaseUI", "GameSceneCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.target = <fairygui.GGraph>(this.getChildAt(1));
			this.you = <fairygui.GGraph>(this.getChildAt(2));
			this.panding = <fairygui.GGraph>(this.getChildAt(3));
			this.record = <fairygui.GGraph>(this.getChildAt(4));
		}
	}
}