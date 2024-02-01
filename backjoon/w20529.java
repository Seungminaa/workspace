package backjoon;

import java.io.*;
import java.util.*;

public class w20529 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = null;
        StringBuilder sb = new StringBuilder();
        int a = Integer.parseInt(br.readLine());
        
        for(int i=0;i<a;i++){
            int b = Integer.parseInt(br.readLine());
            st = new StringTokenizer(br.readLine());

            if(b>32){
                sb.append(0 + "\n");
            }else{
                String[] c = new String[b];
    
                for(int j=0;j<b;j++){
                    c[j] = st.nextToken();
                }

                int t = 12;
                for(int j=0;j<b;j++){
                    for(int e=j+1;e<b;e++){
                        for(int w=e+1;w<b;w++){
                            int res = 0;
                            for(int q=0;q<4;q++){
                                res += c[j].charAt(q) != c[e].charAt(q) ? 1 : 0;
                                res += c[e].charAt(q) != c[w].charAt(q) ? 1 : 0;
                                res += c[w].charAt(q) != c[j].charAt(q) ? 1 : 0;
                            }
                           t = Math.min(res, t); 
                           if(res == 0) break;
                        }
                    }
                }
                sb.append(t + "\n");
            }

        }
        System.out.println(sb);
    }
}
