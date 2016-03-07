(function() {
	var app = angular.module("store", []);
	app.controller("StoreController", function() {
		this.products = gems;
	});


	// prepare data for presentation
	// 
	var gems  = [{
		name: "尊爵紫寶石",
		price: 200000,
		description: "純正的愛情 - 紫水晶代表靈性、精神、高層次的愛意，可作對仰慕者的一種定情物、信物。",
		canPurchase: false,
		soldOut: false
	}, {
		name: "無暇血鑽石",
		price: 350000,
		description: "永恆、純淨 - 鑽石是所有寶石中硬度最高的一種，所以被視為忠貞愛情的最佳代言寶石。",
		canPurchase: true,
		soldOut: false
	}, {
		name: "皇家紅寶石",
		price: 250000,
		description: "純潔、財富、誠心 - 縱觀歷史，所有國家的皇室和文化皆視紅寶石為特別的標誌，象徵永恆的美麗、財富和權力。",
		canPurchase: true,
		soldOut: false
	}, {
		name: "方正黃寶石",
		price: 260000,
		description: "愛情、慈悲、智慧 - 古埃及人認為，拓帕石是美與健康的守護石，它具有強大的治療效力，可以舒緩情緒壓力所造成的苦痛。",
		canPurchase: false,
		soldOut: true
	}, {
		name: "星芒橄欖綠",
		price: 200000,
		description: "熱忱、高尚 - 古埃及人認為，橄欖石是具有太陽力量的寶石，並被認為可以治療肝臟和肌肉運動傷害方面的疾病，同時更是法老王們喜愛的寶石。",
		canPurchase: true,
		soldOut: false
	}];

})();