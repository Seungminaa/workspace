package backjoon;

import java.io.*;
import java.util.*;

public class w7785 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st = null;

        int a = Integer.parseInt(br.readLine());
        HashSet<String> b = new HashSet<>();
        for(int i=0;i<a;i++){
            st = new StringTokenizer(br.readLine());
            String c = st.nextToken();
            String d = st.nextToken();

            if(d.equals("enter")){
                b.add(c);
            }else if(d.equals("leave")){
                if(b.contains(c)){
                    b.remove(c);
                }
            }
        }

        ArrayList<String> list = new ArrayList<String>(b);
        Collections.sort(list);

        for(int i = list.size()-1;i>=0;i--){
            sb.append(list.get(i)+"\n");
        }
        System.out.println(sb);
    }
}
