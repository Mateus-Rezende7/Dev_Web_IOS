public class Pratica2 {
    public static void main(String[]args){
        int num2;

        for(num2=0; num2 <1000;num2+=2){
            System.out.print("/"+num2+ "/");
            if(num2 % 25 == 0) System.out.println(" ");
        }
    }
}
