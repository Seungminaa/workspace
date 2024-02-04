package backjoon;

import java.io.*;

public class w5525 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int b = Integer.parseInt(br.readLine());
        int c = Integer.parseInt(br.readLine());
        String d = br.readLine();

        int e = 0;
        int a = 0;

        for(int i=1; i<c-1; ) {
            if(d.charAt(i) == 'O' && d.charAt(i+1) == 'I') {
                e++;
                if(e == b) {
                    if(d.charAt(i-(e*2-1)) == 'I')
                        a++;
                    e--;
                }
                i += 2;
            }
            else {
                e = 0;
                i++;
            }
        }
        System.out.println(a);
    }
}