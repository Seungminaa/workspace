package backjoon;

import java.io.*;

public class w17626 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int a = Integer.parseInt(br.readLine());

        int[] b = new int[a+1];
        int c = 0;

        for(int i=1;i<=a;i++){
            c = 50000;
            for(int j=1;j*j<=i;j++){
                int d = i-(j*j);
                c = Math.min(c, b[d]);
            }
            b[i] = c+1;
        }
        System.out.println(b[a]);
    }
}
