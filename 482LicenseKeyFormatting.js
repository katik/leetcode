/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
 // as-ed4-23e
var licenseKeyFormatting = function(S, K) {
	let result = "",reservedResult="",v="";
    for(let i = S.length - 1 ; i>=0; i--){
    	v=S.charAt(i);
    	if(v != "-"){
    		reservedResult.length % (K+1)  == K ? reservedResult=reservedResult+ "-" + v : reservedResult= reservedResult + v;
    	}
    }

    for(let i=reservedResult.length-1;i>=0;i--){
    	result += reservedResult[i];
    }
    return result.toUpperCase();
};

licenseKeyFormatting("2-4A0r7-4k",4);
licenseKeyFormatting("2-4A0r7-4k",3);
