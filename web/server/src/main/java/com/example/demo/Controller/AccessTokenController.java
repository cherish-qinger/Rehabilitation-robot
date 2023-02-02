package com.example.demo.Controller;

import com.example.demo.utils.RetResponse;
import com.example.demo.utils.RetResult;
import io.agora.media.RtcTokenBuilder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * Author: Wzy
 * Data: 2021/9/2
 * Description:
 */
@RestController
@RequestMapping("/token")
public class AccessTokenController {

    static String appId = "e0d0425ba7684ea0b42f49a94ae08e88";
    static String appCertificate = "1f0ae962d5a44caba19cca89b6f69f5e";
    //    static String channelName = "1111";
//    static String userAccount = "2082341273";
//    static int uid = 2082341273;
    static int expirationTimeInSeconds = 3600;

    @RequestMapping("/getToken")
    public RetResult getToken(String channelName, int uid) {
        RtcTokenBuilder token = new RtcTokenBuilder();
        int timestamp = (int) (System.currentTimeMillis() / 1000 + expirationTimeInSeconds);

        String result = token.buildTokenWithUid(appId, appCertificate, channelName, uid, RtcTokenBuilder.Role.Role_Publisher, timestamp);

        Map map = new HashMap();
        map.put("token",result);
        map.put("uid",uid);
        map.put("channel",channelName);
        return RetResponse.makeRsp(200, "获取成功", map);
    }

}
