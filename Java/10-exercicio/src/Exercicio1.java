import java.util.Scanner;

public class Exercicio1 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        int[][] numeros = new int[4][4];


        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
                System.out.println("Digite 16 numeros para as posições[" + i + "][" + j + "]:");
                numeros[i][j] = teclado.nextInt();

            }
        }
        System.out.println("Os numeros maior que 10 são :");
        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
              if( numeros [i][j] > 10){
                  System.out.println(numeros[i][j]);
              }

            }

        }
    }
}
