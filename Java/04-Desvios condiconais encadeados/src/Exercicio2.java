import java.util.Scanner;

public class Exercicio2 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int numero1, numero2, numero3;

        System.out.println("Digite 3 numeros separadamente");
        numero1 = entrada.nextInt();
        numero2 = entrada.nextInt();
        numero3 = entrada.nextInt();
        if(numero1 == numero2 & numero2 == numero3 & numero3 == numero1 & numero1 == numero3){
            System.out.println("Os numeros são iguais");
        }
        if
        (numero1 > numero2 & numero1 > numero3) {
            System.out.println("O numero " + numero1 + " é o maior");
        } else if
        (numero2 > numero1 & numero2 > numero3) {
            System.out.println("O numero" + numero2 + " é o maio");
        } else {
            System.out.println("O numero" + numero3 + "é o maior");
        }

entrada.close();
    }
    
}