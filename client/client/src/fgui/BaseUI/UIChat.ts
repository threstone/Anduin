/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIChat extends fairygui.GComponent {
		public close:fairygui.GLoader;
		public chatBg:fairygui.GImage;
		public accountInputBg:fairygui.GImage;
		public sendBtn:UIButton3;
		public inputText:fairygui.GTextInput;
		public normalBtn:UIChatBtn;
		public friendBtn:UIChatBtn;
		public chatList:fairygui.GList;
		public friendChatList:fairygui.GList;
		public friendList:fairygui.GList;
		public friendGroup:fairygui.GGroup;
		public static URL:string = "ui://yaux2xpofjkip";

		public static createInstance():UIChat {
			return <UIChat>(fairygui.UIPackage.createObject("BaseUI", "Chat"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.close = <fairygui.GLoader>(this.getChildAt(1));
			this.chatBg = <fairygui.GImage>(this.getChildAt(2));
			this.accountInputBg = <fairygui.GImage>(this.getChildAt(3));
			this.sendBtn = <UIButton3>(this.getChildAt(4));
			this.inputText = <fairygui.GTextInput>(this.getChildAt(5));
			this.normalBtn = <UIChatBtn>(this.getChildAt(6));
			this.friendBtn = <UIChatBtn>(this.getChildAt(7));
			this.chatList = <fairygui.GList>(this.getChildAt(8));
			this.friendChatList = <fairygui.GList>(this.getChildAt(10));
			this.friendList = <fairygui.GList>(this.getChildAt(11));
			this.friendGroup = <fairygui.GGroup>(this.getChildAt(12));
		}
	}
}