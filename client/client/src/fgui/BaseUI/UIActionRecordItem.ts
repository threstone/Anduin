/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIActionRecordItem extends fairygui.GComponent {
		public selfBg:fairygui.GGraph;
		public enemyBg:fairygui.GGraph;
		public cardImg:fairygui.GLoader;
		public atkImg:fairygui.GImage;
		public effectImg:fairygui.GImage;
		public denyImg:fairygui.GImage;
		public deadImg:fairygui.GImage;
		public moveImg:fairygui.GImage;
		public static URL:string = "ui://yaux2xponcgh4f";

		public static createInstance():UIActionRecordItem {
			return <UIActionRecordItem>(fairygui.UIPackage.createObject("BaseUI", "ActionRecordItem"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.selfBg = <fairygui.GGraph>(this.getChildAt(1));
			this.enemyBg = <fairygui.GGraph>(this.getChildAt(2));
			this.cardImg = <fairygui.GLoader>(this.getChildAt(3));
			this.atkImg = <fairygui.GImage>(this.getChildAt(4));
			this.effectImg = <fairygui.GImage>(this.getChildAt(5));
			this.denyImg = <fairygui.GImage>(this.getChildAt(6));
			this.deadImg = <fairygui.GImage>(this.getChildAt(7));
			this.moveImg = <fairygui.GImage>(this.getChildAt(8));
		}
	}
}