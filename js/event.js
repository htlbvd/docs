//EventUtil 对象使用方法
// EventUtil.addHandler(btn,"click",function (event) {
// 	event = EventUtil.getEvent(event);
// 	var target = EventUtil.getTarget(event);
// 	EventUtil.preventDefault(event);
// 	EventUtil.stopPropagation(event);
// })
var EventUtil = {
	//增加事件处理函数，false表示在冒泡阶段
	addHandler: function (element,type,handler) {	
		if (element.addEventListener) {	
			element.addEventListener(type, handler, false);
		} else if (elment.attachEvent){
			element.attachEvent("on" + type, handler)
		} else {
			element["on" + type] = handler;
		}
	},
	//返回对event对象的引用
	getEvent: function (event) {
		return event ? event : window.event;
	},
	//返回事件的目标
	getTarget: function (event) {
		return event.target || event.srcElement;
	},
	//取消事件的默认事件
	preventDefault: function (event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue=false;
		}
	},
	//移除事件处理程序
	removeHandler: function (element, type ,handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent){
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	},
	//阻止事件流
	stopPropagation: function (event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			evnt.cancelBubble = true;
		}
	},
	//获取mouseover和mouseout事件发生时的相关元素
	getRelateTarget: function (event) {
		if (event.relatedTarget) {
			return eventedTarget;
		} else if (event.toElement){
			return event.toElement;
		} else if (event.fromElement){
			return event.fromElement;
		} else {
			return null;
		}
	},
	//mousedown和mouseup事件发生时检测按钮信息，0 表示主鼠标按钮，1 表示中间的鼠标按钮（鼠标滚轮按钮），2 表示次鼠标按钮
	getButton: function (event) {
		if (document.implementation.hasFeature("MouseEvents","2.0")) {
			return event.button;
		} else {
			switch(event.button){
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;
				case 2:
				case 6:
					return 2;
				case 4:
					return 1;
			}
		}
	},
	//获取滚轮事件发生时的滚动值，向前滚动鼠标滚轮时，是120 的倍数；当用户向后滚动鼠标滚轮时，是-120 的倍数
	getWheelDelta: function (event) {
		if (event.wheelDelta){
			return (client.engine.opera&&client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta)
		} else {
			return -event.detail * 40;
		}
	},
	//keyprees事件触发时取得按下的那个键所代表字符的ASCII编码
	getCharCode: function (event) {
		if (typeof event.charCode == "number"){
			return event.charCode;
		} else {
			return event.keyCode;
		}
	}
};