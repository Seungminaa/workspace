package backjoon;

import java.io.*;
import java.util.*;

public class w1235 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int a = Integer.parseInt(br.readLine());
        String[] b = new String[a];
        
        for(int i=0;i<a;i++){
            b[i] = br.readLine();
        }
        
        int res = 1;
        for(int j=0;j<100;j++){
            Set<String> c = new HashSet<String>();
            for(int i=0;i<a;i++){
                c.add(b[i].substring(b[i].length()-(j+1),b[i].length()));
            }
            if(c.size()==a){
                break;
            }
            res++;
        }
        System.out.println(res);
    }
}
