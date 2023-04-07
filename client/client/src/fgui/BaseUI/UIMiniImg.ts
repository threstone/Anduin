/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIMiniImg extends fairygui.GComponent {
		public img:fairygui.GLoader;
		public static URL:string = "ui://yaux2xpoh13w4c";

		public static createInstance():UIMiniImg {
			return <UIMiniImg>(fairygui.UIPackage.createObject("BaseUI", "MiniImg"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.img = <fairygui.GLoader>(this.getChildAt(0));
		}
	}
}