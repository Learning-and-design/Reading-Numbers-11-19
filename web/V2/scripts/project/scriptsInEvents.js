"use strict";



{
	const scriptsInEvents = {

		async Es_common_Event50_Act1(runtime, localVars)
		{
			
			const nextLevel = runtime.globalVars.CurrentLevel+1;
				if(eval("runtime.globalVars.L"+nextLevel+"_Tutorial_Done")){
				runtime.goToLayout("Level"+nextLevel);
				}
			else{
			runtime.goToLayout("Level"+nextLevel+"-Tutorial");
			}
			
		},

		async Es_common_Event51_Act1(runtime, localVars)
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

		async Es_common_Event161_Act1(runtime, localVars)
		{
			localStorage.setItem("rn-11-19_data", JSON.stringify(runtime.getInstanceByUid(5617).getJsonDataCopy()));
			AppInterface.sendToApp(runtime.getInstanceByUid(5617).getJsonDataCopy());
			
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}
