/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIChat extends fairygui.GComponent {
		public close:fairygui.GLoader;
		public chatBg:fairygui.GImage;
		public friendInput:UIChatInputCom;
		public normalInput:UIChatInputCom;
		public normalBtn:UIChatBtn;
		public friendBtn:UIChatBtn;
		public chatList:fairygui.GList;
		public friendChatList:fairygui.GList;
		public friendList:fairygui.GList;
		public clickTips:fairygui.GTextField;
		public friendGroup:fairygui.GGroup;
		public nNumBg:fairygui.GImage;
		public normalUnRead:fairygui.GTextField;
		public normalTipsGroup:fairygui.GGroup;
		public fNumBg:fairygui.GImage;
		public friendUnRead:fairygui.GTextField;
		public friendTipsGroup:fairygui.GGroup;
		public static URL:string = "ui://yaux2xpofjkip";

		public static createInstance():UIChat {
			return <UIChat>(fairygui.UIPackage.createObject("BaseUI", "Chat"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.close = <fairygui.GLoader>(this.getChildAt(1));
			this.chatBg = <fairygui.GImage>(this.getChildAt(2));
			this.friendInput = <UIChatInputCom>(this.getChildAt(3));
			this.normalInput = <UIChatInputCom>(this.getChildAt(4));
			this.normalBtn = <UIChatBtn>(this.getChildAt(5));
			this.friendBtn = <UIChatBtn>(this.getChildAt(6));
			this.chatList = <fairygui.GList>(this.getChildAt(7));
			this.friendChatList = <fairygui.GList>(this.getChildAt(9));
			this.friendList = <fairygui.GList>(this.getChildAt(10));
			this.clickTips = <fairygui.GTextField>(this.getChildAt(11));
			this.friendGroup = <fairygui.GGroup>(this.getChildAt(12));
			this.nNumBg = <fairygui.GImage>(this.getChildAt(13));
			this.normalUnRead = <fairygui.GTextField>(this.getChildAt(14));
			this.normalTipsGroup = <fairygui.GGroup>(this.getChildAt(15));
			this.fNumBg = <fairygui.GImage>(this.getChildAt(16));
			this.friendUnRead = <fairygui.GTextField>(this.getChildAt(17));
			this.friendTipsGroup = <fairygui.GGroup>(this.getChildAt(18));
		}
	}
}