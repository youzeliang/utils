package com.tool.base;

import java.util.regex.Pattern;

/**
 * Created by fox on 18-4-13
 */
public class RegexUtils {

    public static Pattern pattern = Pattern.compile("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");

    /**
     * 判断输入的字符串是否符合Email格式
     * @date 18-04-13
     * @param email
     * @return
     */
    public static boolean isEmail(String email) {
        if (email == null || email.length() < 1 || email.length() > 256) {
            return false;
        }
        return pattern.matcher(email).matches();
    }

}
