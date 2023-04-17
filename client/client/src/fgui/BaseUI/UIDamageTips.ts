/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIDamageTips extends fairygui.GComponent {
		public damageBg:fairygui.GImage;
		public damageDetail:fairygui.GTextField;
		public static URL:string = "ui://yaux2xpo93bw4u";

		public static createInstance():UIDamageTips {
			return <UIDamageTips>(fairygui.UIPackage.createObject("BaseUI", "DamageTips"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.damageBg = <fairygui.GImage>(this.getChildAt(0));
			this.damageDetail = <fairygui.GTextField>(this.getChildAt(1));
		}
	}
}