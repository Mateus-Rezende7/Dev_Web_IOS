import java.util.Scanner;

public class Pratica3 {
    public static void main(String[]args){
        Scanner entrada = new Scanner(System.in);
        int idade;
        int contador = 0;
        while(contador < 5){
            System.out.println("Digite sua idade");
            idade = entrada.nextInt();
            contador++;
        }
        entrada.close();
    }
}