/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIAddFriend extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public textBg:fairygui.GImage;
		public uidInput:fairygui.GTextInput;
		public findBtn:UIButton1;
		public static URL:string = "ui://yaux2xpota2rj";

		public static createInstance():UIAddFriend {
			return <UIAddFriend>(fairygui.UIPackage.createObject("BaseUI", "AddFriend"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.textBg = <fairygui.GImage>(this.getChildAt(1));
			this.uidInput = <fairygui.GTextInput>(this.getChildAt(2));
			this.findBtn = <UIButton1>(this.getChildAt(3));
		}
	}
}