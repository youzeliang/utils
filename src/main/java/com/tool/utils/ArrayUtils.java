package com.tool.utils;

public class ArrayUtils {

    /**
     * 取得字符串数组的第一个元素
     * @param stringArray 字符串数组
     * @return 字符串数组的第一个元素
     */
    public static String getArrayFirst(String[] stringArray) {
        if (stringArray == null || stringArray.length == 0) {
            return null;
        }
        return stringArray[0];
    }


}
