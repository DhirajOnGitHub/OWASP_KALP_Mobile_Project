
/** 
 * @Class Name :  OwaspLoadingActivity.java
 */

package com.varutra.owasp.kalp;

import org.apache.cordova.DroidGap;

import android.os.Bundle;


public class OwaspLoadingActivity extends DroidGap{

	/* (non-Javadoc)
	 * @see org.apache.cordova.CordovaActivity#onCreate(android.os.Bundle)
	 */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		try{
			super.loadUrl("file:///android_asset/www/main.html");	
		}catch(Exception e)
		{
			finish();
		}
	}	
}