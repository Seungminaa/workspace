package backjoon;

import java.io.*;
import java.util.*;

public class w2535 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = null;

        int a = Integer.parseInt(br.readLine());
        int[][] b = new int[a][3];

        for(int i=0;i<a; i++){
            st = new StringTokenizer(br.readLine());
            b[i][0] = Integer.parseInt(st.nextToken());
            b[i][1] = Integer.parseInt(st.nextToken());
            b[i][2] = Integer.parseInt(st.nextToken());
        }
        Arrays.sort(b, new Comparator<int[]>() {
			@Override
			public int compare(int[] o1, int[] o2) {
				return o2[2] - o1[2];
			}
		});
        int last = 2;
		if (b[0][0] == b[1][0]) {
			for (int i = 2; i < a; i++) {
				if (b[0][0] != b[i][0]) {
					last = i;
					break;
				}
			}
		}
        System.out.println(b[0][0] + " " + b[0][1]);
		System.out.println(b[1][0] + " " + b[1][1]);
		System.out.println(b[last][0] + " " + b[last][1]);
    }
}
