package io.agora.sample;

import io.agora.media.RtcTokenBuilder;
import io.agora.media.RtcTokenBuilder.Role;

public class RtcTokenBuilderSample {
    static String appId = "771a6d8472a04b008774ee40003d7d7c";
    static String appCertificate = "53ce17723ddf403e87977408c81f8b7c";
    static String channelName = "1111";
    static String userAccount = "2082341273";
    static int uid = 2082341273;
    static int expirationTimeInSeconds = 3600; 

    public static void main(String[] args) throws Exception {
        RtcTokenBuilder token = new RtcTokenBuilder();
        int timestamp = (int)(System.currentTimeMillis() / 1000 + expirationTimeInSeconds);
        String result = token.buildTokenWithUserAccount(appId, appCertificate,  
        		 channelName, userAccount, Role.Role_Publisher, timestamp);
        System.out.println(result);
        result = token.buildTokenWithUid(appId, appCertificate,
       		 channelName, uid, Role.Role_Publisher, timestamp);
        System.out.println(result);
    }
}
