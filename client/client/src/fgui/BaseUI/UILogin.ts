/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UILogin extends fairygui.GComponent {
		public accountInputBg:fairygui.GImage;
		public accountInput:fairygui.GTextInput;
		public passwordInputBg:fairygui.GImage;
		public passwordInput:fairygui.GTextInput;
		public loginBtn:UIButton1;
		public regBtn:UIButton1;
		public regCom:UIRegister;
		public static URL:string = "ui://yaux2xporu1k4";

		public static createInstance():UILogin {
			return <UILogin>(fairygui.UIPackage.createObject("BaseUI", "Login"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.accountInputBg = <fairygui.GImage>(this.getChildAt(0));
			this.accountInput = <fairygui.GTextInput>(this.getChildAt(1));
			this.passwordInputBg = <fairygui.GImage>(this.getChildAt(2));
			this.passwordInput = <fairygui.GTextInput>(this.getChildAt(3));
			this.loginBtn = <UIButton1>(this.getChildAt(4));
			this.regBtn = <UIButton1>(this.getChildAt(5));
			this.regCom = <UIRegister>(this.getChildAt(6));
		}
	}
}