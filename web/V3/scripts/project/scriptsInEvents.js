"use strict";

export class AppInterface  {

	static showToast(msg){
		let jsonToast = {};
			jsonToast.toast = msg;
        console.log('showToast', jsonToast);
		   if (window && window.ReactNativeWebView) {
		   
			window.ReactNativeWebView.postMessage(jsonToast);
		}
		
	}
	static sendToApp(data){		
		let json_str = JSON.stringify(data);
		console.log("Send data to Webview", json_str);
		if (window && window.ReactNativeWebView) {
			window.ReactNativeWebView.postMessage(json_str);
		}
		

	}
}

{
	const scriptsInEvents = {

		async Egame_Event1_Act2(runtime, localVars)
		{
			var currentdate = new Date(); 
			var datetime = currentdate.getDate() + "/"
			                + (currentdate.getMonth()+1)  + "/" 
			                + currentdate.getFullYear() + "@"  
			                + currentdate.getHours() + ":"  
			                + currentdate.getMinutes() + ":" 
			                + currentdate.getSeconds();
							
			runtime.globalVars.StartDateTime = datetime;
		},

		async Egame_Event3_Act1(runtime, localVars)
		{
			runtime.goToLayout("Level2");
			// const nextLevel = runtime.globalVars.GameLevel;
			// console.log("nextlevel", nextLevel);
			// 	if(nextLevel == 0){
			// 	runtime.goToLayout("Level"+nextLevel+"-Start");
			// 	}else if(eval("runtime.globalVars.L"+nextLevel+"_Tutorial_Done")){
			// 	runtime.goToLayout("Level"+nextLevel);
			// 	}
			// else{
			// runtime.goToLayout("Level"+nextLevel+"-Tutorial");
			// }
			
		},

		async Es_common_Event49_Act1(runtime, localVars)
		{
			
			const nextLevel = runtime.globalVars.CurrentLevel+1;
				if(eval("runtime.globalVars.L"+nextLevel+"_Tutorial_Done")){
				runtime.goToLayout("Level"+nextLevel);
				}
			else{
			runtime.goToLayout("Level"+nextLevel+"-Tutorial");
			}
			
		},

		async Es_common_Event50_Act1(runtime, localVars)
		{
			
			const previousLevel = runtime.globalVars.CurrentLevel-1;
			
			if(previousLevel==0){
					runtime.goToLayout("Level"+previousLevel+"-Start");
			}
				else if(eval("runtime.globalVars.L"+previousLevel+"_Tutorial_Done")){
				runtime.goToLayout("Level"+previousLevel);
				}
			else{
			runtime.goToLayout("Level"+previousLevel+"-Tutorial");
			}
			
		},

		async Es_common_Event187_Act48(runtime, localVars)
		{
			localStorage.setItem(runtime.globalVars.LOCAL_GAME_KEY, JSON.stringify(runtime.getInstanceByUid(5617).getJsonDataCopy()));
			if(AppInterface!="undefined")
			AppInterface.sendToApp(runtime.getInstanceByUid(5617).getJsonDataCopy());
			else console.log("AppInterface is not defined");
			
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}
