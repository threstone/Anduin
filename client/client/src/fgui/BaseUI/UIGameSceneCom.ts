/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module BaseUI {

	export class UIGameSceneCom extends fairygui.GComponent {
		public bg:fairygui.GImage;
		public record:fairygui.GGraph;
		public rightCtrl:UIRightCtrlCom;
		public map:UIMapView;
		public selfInfoBox:UIUserInfoBox;
		public targetInfoBox:UIUserInfoBox;
		public selfHand:UIHandCardsCom;
		public targetHand:UIHandCardsCom;
		public close:UIButton3;
		public selfLeftInfoBox:UILeftInfoBox;
		public targetLeftInfoBox:UILeftInfoBox;
		public surrender:UIButton3;
		public static URL:string = "ui://yaux2xpojig14";

		public static createInstance():UIGameSceneCom {
			return <UIGameSceneCom>(fairygui.UIPackage.createObject("BaseUI", "GameSceneCom"));
		}

		protected constructFromXML(xml:any):void {
			super.constructFromXML(xml);

			this.bg = <fairygui.GImage>(this.getChildAt(0));
			this.record = <fairygui.GGraph>(this.getChildAt(1));
			this.rightCtrl = <UIRightCtrlCom>(this.getChildAt(2));
			this.map = <UIMapView>(this.getChildAt(3));
			this.selfInfoBox = <UIUserInfoBox>(this.getChildAt(4));
			this.targetInfoBox = <UIUserInfoBox>(this.getChildAt(5));
			this.selfHand = <UIHandCardsCom>(this.getChildAt(6));
			this.targetHand = <UIHandCardsCom>(this.getChildAt(7));
			this.close = <UIButton3>(this.getChildAt(8));
			this.selfLeftInfoBox = <UILeftInfoBox>(this.getChildAt(9));
			this.targetLeftInfoBox = <UILeftInfoBox>(this.getChildAt(10));
			this.surrender = <UIButton3>(this.getChildAt(11));
		}
	}
}