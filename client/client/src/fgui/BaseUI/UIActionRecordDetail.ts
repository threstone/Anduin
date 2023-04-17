/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIActionRecordDetail extends fairygui.GComponent {
		public tips:fairygui.GTextField;
		public arrow:fairygui.GLoader;
		public unknowCard:UICardBackItem;
		public static URL:string = "ui://yaux2xpo93bw4q";

		public static createInstance():UIActionRecordDetail {
			return <UIActionRecordDetail>(fairygui.UIPackage.createObject("BaseUI", "ActionRecordDetail"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.tips = <fairygui.GTextField>(this.getChildAt(0));
			this.arrow = <fairygui.GLoader>(this.getChildAt(1));
			this.unknowCard = <UICardBackItem>(this.getChildAt(2));
		}
	}
}