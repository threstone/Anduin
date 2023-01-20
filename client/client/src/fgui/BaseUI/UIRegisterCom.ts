/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIRegisterCom extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public accountInputBg:fairygui.GImage;
		public accountInput:fairygui.GTextInput;
		public pwdInputBg:fairygui.GImage;
		public pwdInput:fairygui.GTextInput;
		public pwdAgainInputBg:fairygui.GImage;
		public pwdAgainInput:fairygui.GTextInput;
		public nickInputBg:fairygui.GImage;
		public nickInput:fairygui.GTextInput;
		public regBtn:UIButton1;
		public close:fairygui.GLoader;
		public static URL:string = "ui://yaux2xporu1k3";

		public static createInstance():UIRegisterCom {
			return <UIRegisterCom>(fairygui.UIPackage.createObject("BaseUI", "RegisterCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.accountInputBg = <fairygui.GImage>(this.getChildAt(1));
			this.accountInput = <fairygui.GTextInput>(this.getChildAt(2));
			this.pwdInputBg = <fairygui.GImage>(this.getChildAt(3));
			this.pwdInput = <fairygui.GTextInput>(this.getChildAt(4));
			this.pwdAgainInputBg = <fairygui.GImage>(this.getChildAt(5));
			this.pwdAgainInput = <fairygui.GTextInput>(this.getChildAt(6));
			this.nickInputBg = <fairygui.GImage>(this.getChildAt(7));
			this.nickInput = <fairygui.GTextInput>(this.getChildAt(8));
			this.regBtn = <UIButton1>(this.getChildAt(9));
			this.close = <fairygui.GLoader>(this.getChildAt(10));
		}
	}
}