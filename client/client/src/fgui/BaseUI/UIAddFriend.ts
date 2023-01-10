/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIAddFriend extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public textBg:fairygui.GImage;
		public uidInput:fairygui.GTextInput;
		public addBtn:UIButton1;
		public closeBtn:UIButton1;
		public static URL:string = "ui://yaux2xpota2rj";

		public static createInstance():UIAddFriend {
			return <UIAddFriend>(fairygui.UIPackage.createObject("BaseUI", "AddFriend"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.textBg = <fairygui.GImage>(this.getChildAt(1));
			this.uidInput = <fairygui.GTextInput>(this.getChildAt(2));
			this.addBtn = <UIButton1>(this.getChildAt(3));
			this.closeBtn = <UIButton1>(this.getChildAt(4));
		}
	}
}