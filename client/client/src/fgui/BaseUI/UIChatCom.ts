/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIChatCom extends fairygui.GComponent {
		public close:fairygui.GGraph;
		public chatBg:fairygui.GLoader;
		public chatList:fairygui.GList;
		public friendChatList:fairygui.GList;
		public friendList:fairygui.GList;
		public clickTips:fairygui.GTextField;
		public friendGroup:fairygui.GGroup;
		public channelList:fairygui.GList;
		public static URL:string = "ui://yaux2xpofjkip";

		public static createInstance():UIChatCom {
			return <UIChatCom>(fairygui.UIPackage.createObject("BaseUI", "ChatCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.close = <fairygui.GGraph>(this.getChildAt(1));
			this.chatBg = <fairygui.GLoader>(this.getChildAt(2));
			this.chatList = <fairygui.GList>(this.getChildAt(3));
			this.friendChatList = <fairygui.GList>(this.getChildAt(4));
			this.friendList = <fairygui.GList>(this.getChildAt(5));
			this.clickTips = <fairygui.GTextField>(this.getChildAt(6));
			this.friendGroup = <fairygui.GGroup>(this.getChildAt(7));
			this.channelList = <fairygui.GList>(this.getChildAt(8));
		}
	}
}