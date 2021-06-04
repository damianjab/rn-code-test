package com.rncodetest;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class MyNativeModule extends ReactContextBaseJavaModule {
    public MyNativeModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "MyNativeModule";
    }

    @Override
    public Map<String, Object> getConstants() {
        Log.d("ServiceKey", getReactApplicationContext().getString(R.string.service_key));

        final Map<String, Object> constants = new HashMap<>();
        constants.put("SERVICE_KEY", getReactApplicationContext().getString(R.string.service_key));
        return constants;
    }
}
