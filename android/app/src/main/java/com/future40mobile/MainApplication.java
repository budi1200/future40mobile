package com.future40mobile;

import android.app.Application;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

import com.oblador.vectoricons.VectorIconsPackage;
import com.horcrux.svg.SvgPackage;

import java.util.Arrays;
import java.util.List;
import javax.annotation.Nullable;

public class MainApplication extends NavigationApplication {

	@Override
	protected ReactGateway createReactGateway() {
	    ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
	        @Override
	        protected String getJSMainModuleName() {
	            return "index";
	        }
	    };
	    return new ReactGateway(this, isDebug(), host);
	}
	@Override
	public boolean isDebug() {
	    return BuildConfig.DEBUG;
	}
	protected List<ReactPackage> getPackages() {
	    // Add additional packages you require here
	    // No need to add RnnPackage and MainReactPackage
	    return Arrays.<ReactPackage>asList(
	        // eg. new VectorIconsPackage()
			new VectorIconsPackage(), new SvgPackage()
	    );
	}
	@Override
	public List<ReactPackage> createAdditionalReactPackages() {
	    return getPackages();
	}
}
