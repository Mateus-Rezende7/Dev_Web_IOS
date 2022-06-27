import java.util.Scanner;

public class Exercicio2 {
    public static void main (String[]args) {

        Scanner entrada = new Scanner(System.in);
        int numero;
        System.out.println("Impar ou par");
        System.out.println("Digite um numero");
        numero = entrada.nextInt();

        while(numero !=0){
            if (numero % 2 == 0){
                System.out.println("Numero" + numero + "é PAR");
            }else{
                System.out.println("Numero" + numero + "é IMPAR");
            }
        }entrada.close();
    }
}
