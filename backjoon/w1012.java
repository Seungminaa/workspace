package backjoon;

import java.io.*;
import java.util.*;

public class w1012 {
    static int b, c, d;
    static int[][] e;
	static boolean[][] v;
    static int[] dx = { 0, -1, 0, 1 };
	static int[] dy = { 1, 0, -1, 0 };
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = null;

        int a = Integer.parseInt(br.readLine());

        for(int i=0;i<a;i++){
            st = new StringTokenizer(br.readLine());
            b = Integer.parseInt(st.nextToken());
            c = Integer.parseInt(st.nextToken());
            d = Integer.parseInt(st.nextToken());

            e = new int[b][c];
            v = new boolean[b][c];
            for(int j =0;j<d;j++){
                st = new StringTokenizer(br.readLine());
                int f = Integer.parseInt(st.nextToken());
                int g = Integer.parseInt(st.nextToken());
                e[f][g] = 1;
            }
            int count = 0;

            for (int j = 0; j < b; j++) {
				for (int w = 0; w < c; w++) {
					if (e[j][w] == 1 && !v[j][w]) {
						dfs(j, w);
						count++;
					}
				}
			}
            System.out.println(count);
        }


    }
    static void dfs(int x, int y) {
		v[x][y] = true;

		for (int i = 0; i < 4; i++) {
			int cx = x + dx[i];
			int cy = y + dy[i];

			if (cx >= 0 && cy >= 0 && cx < b && cy < c) {
				if (!v[cx][cy] && e[cx][cy] == 1) {
					dfs(cx, cy);
				}
			}

		}

	}
}