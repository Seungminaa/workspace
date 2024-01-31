package backjoon;

import java.io.*;
import java.util.*;

public class w2669 {
public static void main(String[] args) throws IOException{

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = null;
		boolean[][] f = new boolean[101][101];

		for (int i = 0; i < 4; i++) {
			st = new StringTokenizer(br.readLine());
			int a = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			int c = Integer.parseInt(st.nextToken());
			int d = Integer.parseInt(st.nextToken());

			for (int j = b; j < d; j++) {
				for (int e = a; e < c; e++) {
					f[j][e] = true;
				}
			}
		}

		int e = 0;
		for (int i = 0; i < 101; i++) {
			for (int j = 0; j < 101; j++) {
				if (f[i][j] == true) {
					e++;
				}
			}
		}
		System.out.println(e);
	}
}