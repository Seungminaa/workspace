package backjoon;

import java.io.*;
import java.util.*;

public class w1487 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = null;

        int a = Integer.parseInt(br.readLine());
        int[][] l = new int[a][2];
        
        for(int i=0;i<a;i++){
            st = new StringTokenizer(br.readLine());
            int b = Integer.parseInt(st.nextToken());
            int c = Integer.parseInt(st.nextToken());
            l[i][0] = b;
            l[i][1] = c;
        }

        Arrays.sort(l, new Comparator<int[]>() {
            @Override
            public int compare(int[] o1, int[] o2) {
                int g = o1[0] - o2[0];
                if(g == 0)
                    g = o1[1] - o2[1];

                return g;
            }
        });

        int k = 0; // 젤큰값
        int k1 = 0; // 젤큰값의 수

        for(int i = 0 ; i < a ; i++){
            int h = 0;
            for(int j = i; j < a ;j++){
                int d = l[i][0] - l[j][1];
                if(d > 0)
                    h += d;
            }
            if(k1 < h){
                k1 = h;
                k = l[i][0];
            }
        }
        System.out.println(k);
    }
}
