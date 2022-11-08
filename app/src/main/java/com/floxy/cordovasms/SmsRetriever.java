package com.floxy.cordovasms;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.IntentSender;
import android.util.Log;
import com.google.android.gms.auth.api.Auth;
import com.google.android.gms.auth.api.credentials.Credential;
import com.google.android.gms.common.api.GoogleApiClient;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import com.google.android.gms.auth.api.credentials.HintRequest;
import org.json.JSONException;

import static android.app.Activity.RESULT_OK;

public class SmsRetriever extends CordovaPlugin {
    private static final int CREDENTIAL_PICKER_REQUEST = 1;
    private CallbackContext callbackContext;
    private static final int PHONE_REQUEST = 11012;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        this.callbackContext = callbackContext;
         if (action.equals("sms")) {
            requestHint();
            return true;
        }
        return false;
    }

    private void requestHint() {
        Context context = this.cordova.getContext();
        HintRequest hintRequest = new HintRequest.Builder().setPhoneNumberIdentifierSupported(true).build();
        GoogleApiClient googleApiClient = new GoogleApiClient.Builder(context).addApi(Auth.CREDENTIALS_API).build();
       PendingIntent intents = Auth.CredentialsApi.getHintPickerIntent(googleApiClient,hintRequest);
        try {
            cordova.setActivityResultCallback(this);
            cordova.getActivity().startIntentSenderForResult(intents.getIntentSender(), 1, null, 0, 0, 0);
        } catch (IntentSender.SendIntentException e) {

            throw new RuntimeException(e);
        }
    }


    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == CREDENTIAL_PICKER_REQUEST) {
            if (resultCode == RESULT_OK) {
                Credential credential = data.getParcelableExtra(Credential.EXTRA_KEY);
                Log.d("RESULT_PHONE", credential.getId()); // Check Phone Number
                callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.OK, credential.getId()));
            }
        }
    }

}
