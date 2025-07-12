//原作者miner
const defaultMinZoomLim = Vars.renderer.minZoom;
const defaultMaxZoomLim = Vars.renderer.maxZoom;
print("default min zoom: "+defaultMinZoomLim);
print("defaultn max zoom: "+defaultMaxZoomLim);
const minZoomLim = 0.05;
const maxZoomLim = 50;
const minZoom = 0.5;
const maxZoom = 50;
function resetZoomLim(toOriginal){
	if(toOriginal){
		Vars.renderer.minZoom = defaultMinZoomLim;
		Vars.renderer.maxZoom = defaultMaxZoomLim;} else {
		Vars.renderer.minZoom = minZoomLim;
		Vars.renderer.maxZoom = maxZoomLim;}}
function updateZoom(min, max){
	Vars.renderer.minZoom = min;
	Vars.renderer.maxZoom = max;}
if(!Vars.headless){	updateZoom(minZoomLim,maxZoomLim);

Vars.maxSchematicSize = 512;
