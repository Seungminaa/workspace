package backjoon;

import java.io.*;

public class w4335 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int[] c = new int[11];

        while (true) {
           int a = Integer.parseInt(br.readLine());
            if(a == 0){
                break;
            }
            String b = br.readLine();
            if(b.equals("right on")){
                if(c[a] == 0){
                    sb.append("Stan may be honest" + "\n");
                }else if(c[a] == 1){
                    sb.append("Stan is dishonest" + "\n");
                }
                c = new int[11];
            }
            if(b.equals("too high")){
                for(int i=a;i<c.length;i++){
                    c[i] = 1;
                }
            }
            if(b.equals("too low")){
                for(int i=0;i<=a;i++){
                    c[i] = 1;
                }

            }
        }
        System.out.println(sb);
    }
}
