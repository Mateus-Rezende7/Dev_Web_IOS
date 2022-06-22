import java.util.Scanner;

public class Exercicio{

    public static void main (String args[]){
         Scanner entrada = new Scanner(System.in);
         int numero1, numero2;
         System.out.println("Digite um numero");
         numero1 = entrada.nextInt();
         System.out.println("Digite outro numero");
         numero2 = entrada.nextInt();

         if
            (numero1 > numero2){
            System.out.println( numero1);
            System.out.println(numero2);
        }else{
             System.out.println( numero2);
             System.out.println( numero1);
           }
    entrada.close();
}
}
