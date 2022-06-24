import java.util.Scanner;

public class Pratica1 {
    public static void main(String[]args){
      Scanner entrada = new Scanner(System.in);
      int idade;
      int contador;

         for(contador=0;contador < 5; contador++){
             System.out.println("Digite sua idade");
             idade = entrada.nextInt();
         }
entrada.close();
    }
}
