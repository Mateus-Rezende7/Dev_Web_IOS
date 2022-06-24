
public class pratica4 {
    public static void main(String[]args){
        int num2 = 0;

        while( num2 <1000){
            System.out.print("/"+num2+ "/");
            if(num2 % 25 == 0) System.out.println(" ");
            num2+=2;
        }
    }
}