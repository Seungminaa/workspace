package backjoon;

import java.io.*;
import java.util.*;

public class w3063 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st = null;
        int a = Integer.parseInt(br.readLine());
        for(int i=0;i<a;i++){
            int[] b = new int[8];
            st = new StringTokenizer(br.readLine());
            for(int j=0;j<8;j++){
                b[j] = Integer.parseInt(st.nextToken());
            }
            sb.append(width(b) + "\n");
        }
        System.out.println(sb);
    }
    static int width(int[] b){
        int x = 0;
        int y = 0;
        if(b[0]>=b[6] || b[1]>=b[7] || b[2]<=b[4] || b[3]<=b[5]){
            return (b[2]-b[0]) * (b[3]-b[1]);
        }else{
            if(b[0]<=b[4]){
                if(b[6]>=b[2]){
                    x=b[2]-b[4];
                }else if(b[6]<=b[2]){
                    x = b[6]-b[4];
                }
            }else if(b[0]>=b[4]){
                if(b[2]<=b[6]){
                    x=b[2]-b[0];
                }else if(b[6]>=b[0]){
                    x = b[6]-b[0];
                }
            }
            
            if(b[1]<=b[5]){
                if(b[7]>=b[3]){
                    y=b[3]-b[5];
                }else if(b[7]<=b[3]){
                    y = b[7]-b[5];
                }
            }else if(b[1]>=b[5]){
                if(b[3]<=b[7]){
                    y=b[3]-b[1];
                }else if(b[7]>=b[1]){
                    y = b[7]-b[1];
                }
            }
        }
        int c = (b[2]-b[0]) * (b[3]-b[1]);
        int d = c-(x*y);
        return d;
    }
}