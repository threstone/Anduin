/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIChatInputCom extends fairygui.GComponent {
		public inputBg:fairygui.GImage;
		public sendBtn:UIButton3;
		public inputText:fairygui.GTextInput;
		public static URL:string = "ui://yaux2xpofjki1i";

		public static createInstance():UIChatInputCom {
			return <UIChatInputCom>(fairygui.UIPackage.createObject("BaseUI", "ChatInputCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.inputBg = <fairygui.GImage>(this.getChildAt(0));
			this.sendBtn = <UIButton3>(this.getChildAt(1));
			this.inputText = <fairygui.GTextInput>(this.getChildAt(2));
		}
	}
}