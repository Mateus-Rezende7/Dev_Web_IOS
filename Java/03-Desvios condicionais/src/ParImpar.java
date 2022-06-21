import java.util.Scanner;

public class ParImpar {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int numero = 0;
        System.out.println("Digite um numero");
        numero = entrada.nextInt();

        if (numero % 2 == 0) {
            System.out.println("É PAR!!");
        } else {
            System.out.println("É IMPAR!!");
        }
    }
}
