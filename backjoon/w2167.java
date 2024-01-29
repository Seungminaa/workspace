package backjoon;

import java.io.*;
import java.util.*;

public class w2167 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());
        int a = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());

        int[][] c = new int[a][b]; 
        for (int i = 0; i < a; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < b; j++) {
                c[i][j] = Integer.parseInt(st.nextToken());
            }
        } 
        int d = Integer.parseInt(br.readLine());
        while (d > 0) {
            st = new StringTokenizer(br.readLine());
            int e = Integer.parseInt(st.nextToken());
            int f = Integer.parseInt(st.nextToken());
            int g = Integer.parseInt(st.nextToken());
            int w = Integer.parseInt(st.nextToken()); 
            int sum = 0;
            for (int i = e - 1; i < g; i++) {
                for (int j = f - 1; j < w; j++) {
                    sum += c[i][j];
                }
            }
            d--;
            sb.append(sum+"\n");
        }
        System.out.println(sb);
    }
}